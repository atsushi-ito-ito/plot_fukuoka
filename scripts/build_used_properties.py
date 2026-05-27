import argparse
import csv
import json
import re
import shutil
import subprocess
import time
import urllib.parse
import urllib.request
import unicodedata
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path


DEFAULT_SOURCE = Path.home() / "Desktop" / "中古情報"
DEFAULT_CACHE = Path("used_geocode_cache.json")
DEFAULT_FAILED = Path("used_geocode_failed.csv")
DEFAULT_OVERRIDES = Path("used_banchi_overrides.json")


def read_csv(path):
    data = path.read_bytes()
    for encoding in ("utf-8-sig", "cp932"):
        try:
            text = data.decode(encoding)
            break
        except UnicodeDecodeError:
            continue
    else:
        text = data.decode("cp932", errors="replace")

    rows = list(csv.DictReader(text.splitlines()))
    return rows


def clean(value):
    return str(value or "").strip()


def to_number(value):
    value = clean(value).replace(",", "")
    if not value:
        return None
    try:
        return float(value)
    except ValueError:
        return None


def to_int(value):
    number = to_number(value)
    return int(number) if number is not None else None


def to_yen(value):
    number = to_int(value)
    return number if number is not None else None


def yen_label(value):
    number = to_yen(value)
    return f"{number:,}円" if number is not None else ""


def age_years(year, month):
    year = to_int(year)
    month = to_int(month) or 1
    if year is None:
        return None
    today = time.localtime()
    age = today.tm_year - year
    if today.tm_mon < month:
        age -= 1
    return max(age, 0)


def normalize_banchi(value):
    original = clean(value)
    if not original:
        return "", "blank"

    text = unicodedata.normalize("NFKC", original)
    text = re.sub(r"[‐‑‒–—―ーｰ－]", "-", text)
    text = re.sub(r"\s+", " ", text).strip()

    # Excelなどで「7-21」が日付化した「7月21日」を住所向けに戻す。
    month_day = re.fullmatch(r"(\d{1,2})月(\d{1,2})日", text)
    if month_day:
        return f"{month_day.group(1)}-{month_day.group(2)}", "date_converted"

    text = text.replace("番地", "番").replace("号", "")
    text = re.sub(r"(\d+)番(\d+)", r"\1-\2", text)
    text = re.sub(r"(\d+)番$", r"\1", text)

    chiban = re.search(r"\(地番\[([^\]]+)\]\)", text)
    visible = re.sub(r"\s*\(地番\[[^\]]+\]\)", "", text).strip()
    if chiban:
      chiban_value = clean(chiban.group(1))
      chiban_value = unicodedata.normalize("NFKC", chiban_value)
      chiban_value = re.sub(r"[‐‑‒–—―ーｰ－]", "-", chiban_value)
      chiban_value = chiban_value.replace("番地", "").replace("番", "").replace("号", "")
      chiban_value = re.sub(r"\s+", "", chiban_value)

      if re.fullmatch(r"\d+", visible) and re.fullmatch(r"\d+(?:-\d+)?", chiban_value):
          return f"{visible}-{chiban_value}", "chiban_merged"
      if visible:
          return visible, "chiban_removed"
      return chiban_value, "chiban_only"

    normalized = re.sub(r"\s+", "", visible)
    return normalized, "normalized" if normalized != original else "as_is"


def normalize_ward(location):
    value = clean(location).replace("　", " ")
    if "博多区" in value:
        return "博多区"
    if "中央区" in value:
        return "中央区"
    if "早良区" in value:
        return "早良区"
    if "西区" in value:
        return "西区"
    if "城南区" in value:
        return "城南区"
    if "南区" in value:
        return "南区"
    if "東区" in value:
        return "東区"
    if "新宮町" in value:
        return "新宮町"
    return value


def build_address(row):
    banchi, _ = normalize_banchi(row.get("番地"))
    parts = [
        clean(row.get("所在地名１")).replace("　", " "),
        clean(row.get("所在地２")),
        banchi,
    ]
    return "".join(part for part in parts if part)


def load_cache(path):
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {}


def save_cache(path, cache):
    path.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")


def geocode(address, timeout=8):
    query = urllib.parse.urlencode({"q": address})
    url = f"https://msearch.gsi.go.jp/address-search/AddressSearch?{query}"
    curl = shutil.which("curl.exe") or shutil.which("curl")
    if curl:
        result = subprocess.run(
            [curl, "--silent", "--show-error", "--max-time", str(timeout), url],
            capture_output=True,
            check=True,
            timeout=timeout + 2,
        )
        payload = json.loads(result.stdout.decode("utf-8"))
    else:
        with urllib.request.urlopen(url, timeout=timeout) as response:
            payload = json.loads(response.read().decode("utf-8"))
    if not payload:
        return None, None, ""
    coords = payload[0].get("geometry", {}).get("coordinates") or []
    if len(coords) < 2:
        return None, None, ""
    title = payload[0].get("properties", {}).get("title", "")
    return coords[1], coords[0], title


def normalize_row(row, source_file, overrides=None):
    overrides = overrides or {}
    property_id = clean(row.get("物件番号"))
    original_banchi = clean(row.get("番地"))
    manual_banchi = clean(overrides.get(property_id, ""))
    if manual_banchi:
        row = dict(row)
        row["番地"] = manual_banchi

    address = build_address(row)
    banchi, banchi_status = normalize_banchi(row.get("番地"))
    if manual_banchi:
        banchi_status = f"manual_override:{banchi_status}"

    walk = to_int(row.get("徒歩（分）"))
    price = to_int(row.get("価格"))
    area = to_number(row.get("建物専有面積"))
    management_fee = to_yen(row.get("管理費"))
    repair_reserve = to_yen(row.get("積立金"))
    monthly_fee_total = None
    if management_fee is not None or repair_reserve is not None:
        monthly_fee_total = (management_fee or 0) + (repair_reserve or 0)
    parking_fee = to_yen(row.get("駐車場料金（円）"))
    parking = clean(row.get("駐車場有無"))
    built_year = to_int(row.get("築年月（年）"))
    built_month = to_int(row.get("築年月（月）"))
    built_age = age_years(row.get("築年月（年）"), row.get("築年月（月）"))

    return {
        "id": property_id,
        "type": "used",
        "name": clean(row.get("建物名")),
        "room": clean(row.get("部屋番号")),
        "lat": None,
        "lng": None,
        "price": price,
        "priceLabel": f"{price:,}万円" if price is not None else "",
        "area": area,
        "areaLabel": f"{area:g}㎡" if area is not None else "",
        "layout": clean(row.get("間取り")),
        "direction": clean(row.get("バルコニー方向")),
        "ward": normalize_ward(row.get("所在地名１")),
        "address": address,
        "banchi": banchi,
        "banchiOriginal": original_banchi,
        "banchiOverride": manual_banchi,
        "banchiStatus": banchi_status,
        "line": clean(row.get("最寄沿線")),
        "station": clean(row.get("最寄駅")),
        "walkMinutes": walk,
        "walk": f"{walk}分" if walk is not None else "",
        "built": "".join(
            part for part in [clean(row.get("築年月（年）")), "/", clean(row.get("築年月（月）"))] if part
        ).strip("/"),
        "builtYear": built_year,
        "builtMonth": built_month,
        "ageYears": built_age,
        "ageLabel": f"築{built_age}年" if built_age is not None else "",
        "floor": clean(row.get("所在階")),
        "units": clean(row.get("戸数")),
        "managementFee": management_fee,
        "managementFeeLabel": yen_label(row.get("管理費")),
        "repairReserve": repair_reserve,
        "repairReserveLabel": yen_label(row.get("積立金")),
        "monthlyFeeTotal": monthly_fee_total,
        "monthlyFeeTotalLabel": f"{monthly_fee_total:,}円" if monthly_fee_total is not None else "",
        "parking": parking,
        "parkingAvailable": "有" in parking or "空有" in parking,
        "parkingFee": parking_fee,
        "parkingFeeLabel": yen_label(row.get("駐車場料金（円）")),
        "company": clean(row.get("会員商号")),
        "sourceFile": source_file,
        "geocodeQuery": address,
        "geocodeStatus": "not_requested",
        "geocodeTitle": "",
        "geocodeAccuracy": "town" if not banchi else "address",
    }


def cache_entry(address, timeout):
    try:
        lat, lng, title = geocode(address, timeout=timeout)
        status = "matched" if lat is not None and lng is not None else "not_found"
        return address, {
            "lat": lat,
            "lng": lng,
            "title": title,
            "status": status,
            "updatedAt": time.strftime("%Y-%m-%dT%H:%M:%S"),
        }
    except Exception as exc:
        return address, {
            "lat": None,
            "lng": None,
            "title": "",
            "status": "error",
            "error": str(exc),
            "updatedAt": time.strftime("%Y-%m-%dT%H:%M:%S"),
        }


def geocode_precise_rows(rows, cache, do_geocode, max_workers, timeout, cache_path):
    precise_queries = sorted({
        row["geocodeQuery"]
        for row in rows
        if row["banchi"] and row["geocodeQuery"]
    })

    if do_geocode:
        missing = [query for query in precise_queries if query not in cache]
        if missing:
            print(f"geocoding precise unique addresses: {len(missing)}")
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            futures = [executor.submit(cache_entry, query, timeout) for query in missing]
            for i, future in enumerate(as_completed(futures), start=1):
                query, result = future.result()
                cache[query] = result
                if i % 10 == 0 or i == len(missing):
                    save_cache(cache_path, cache)
                    print(f"  geocoded {i}/{len(missing)}")
        save_cache(cache_path, cache)

    for row in rows:
        if not row["banchi"]:
            row["geocodeStatus"] = "skipped_no_banchi"
            row["geocodeAccuracy"] = "none"
            continue
        cached = cache.get(row["geocodeQuery"])
        if not cached:
            continue
        row["lat"] = cached.get("lat")
        row["lng"] = cached.get("lng")
        row["geocodeStatus"] = "cached" if cached.get("status") == "matched" else cached.get("status", "error")
        row["geocodeTitle"] = cached.get("title", "")


def apply_building_coordinate_reuse(rows):
    by_building = {}
    for row in rows:
        if row["lat"] is None or row["lng"] is None:
            continue
        if not row["banchi"]:
            continue
        key = (row["ward"], row["name"])
        by_building.setdefault(key, (row["lat"], row["lng"], row["address"]))

    for row in rows:
        if row["lat"] is not None and row["lng"] is not None:
            continue
        key = (row["ward"], row["name"])
        if key not in by_building:
            continue
        row["lat"], row["lng"], source_address = by_building[key]
        row["geocodeStatus"] = "building_reused"
        row["geocodeTitle"] = source_address
        row["geocodeAccuracy"] = "building_reused"


def write_failed_csv(path, rows):
    failed = [row for row in rows if row["lat"] is None or row["lng"] is None]
    headers = [
        "id",
        "name",
        "ward",
        "address",
        "banchiOriginal",
        "banchi",
        "banchiStatus",
        "geocodeStatus",
        "sourceFile",
    ]
    with path.open("w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        writer.writeheader()
        for row in failed:
            writer.writerow({key: row.get(key, "") for key in headers})
    return len(failed)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", type=Path, default=DEFAULT_SOURCE)
    parser.add_argument("--out", type=Path, default=Path("used_properties.js"))
    parser.add_argument("--cache", type=Path, default=DEFAULT_CACHE)
    parser.add_argument("--failed-csv", type=Path, default=DEFAULT_FAILED)
    parser.add_argument("--overrides", type=Path, default=DEFAULT_OVERRIDES)
    parser.add_argument("--max-workers", type=int, default=4)
    parser.add_argument("--request-timeout", type=int, default=8)
    parser.add_argument("--geocode", action="store_true")
    args = parser.parse_args()

    cache = load_cache(args.cache)
    overrides = load_cache(args.overrides)
    rows = []
    for csv_path in sorted(args.source.glob("*.csv")):
        for row in read_csv(csv_path):
            rows.append(normalize_row(row, csv_path.name, overrides))

    rows = [row for row in rows if row["name"]]
    geocode_precise_rows(
        rows,
        cache,
        args.geocode,
        max(1, args.max_workers),
        max(1, args.request_timeout),
        args.cache,
    )
    apply_building_coordinate_reuse(rows)
    save_cache(args.cache, cache)
    failed_count = write_failed_csv(args.failed_csv, rows)
    body = json.dumps(rows, ensure_ascii=False, indent=2)
    args.out.write_text(
        "// 中古マンションCSVから生成。再生成: python scripts/build_used_properties.py --geocode\n"
        f"const usedProperties = {body};\n",
        encoding="utf-8",
    )

    geocoded = sum(1 for row in rows if row["lat"] is not None and row["lng"] is not None)
    api_cached = sum(1 for item in cache.values() if item.get("status") == "matched")
    print(f"wrote {args.out} rows={len(rows)} geocoded={geocoded} failed={failed_count} cache_matched={api_cached}")


if __name__ == "__main__":
    main()
