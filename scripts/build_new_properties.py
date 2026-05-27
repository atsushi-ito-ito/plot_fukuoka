import argparse
import csv
import json
from pathlib import Path


DEFAULT_INPUT = Path("latest_new_properties.csv")
DEFAULT_OUTPUT = Path("properties.js")


def clean(value):
    return str(value or "").strip()


def to_number(value):
    value = clean(value)
    if not value:
        return None
    try:
        return float(value)
    except ValueError:
        return None


def normalize_row(row):
    source_url = clean(row.get("source_url"))
    request_url = clean(row.get("資料請求ページ"))
    top_source_url = clean(row.get("top_source_url"))

    return {
        "name": clean(row.get("name")),
        "lat": to_number(row.get("lat")),
        "lng": to_number(row.get("lng")),
        "tsubo": clean(row.get("tsubo")),
        "units": clean(row.get("units")),
        "developer": clean(row.get("developer")),
        "sale": clean(row.get("sale")),
        "completion": clean(row.get("completion")),
        "walk": clean(row.get("walk")),
        "ward": clean(row.get("ward")),
        "url": source_url or top_source_url or request_url,
        "source_url": source_url,
        "request_url": request_url,
        "top_source_url": top_source_url,
        "status": clean(row.get("status")),
        "status_date": clean(row.get("status_date")),
        "management_yen": clean(row.get("management_yen")),
        "repair_yen": clean(row.get("repair_yen")),
        "parking_yen": clean(row.get("parking_yen")),
        "parking_type": clean(row.get("parking_type")),
        "parking_rate": clean(row.get("parking_rate")),
        "primaryschool_walk_min": clean(row.get("primaryschool_walk_min")),
        "supermarket_10min_count": clean(row.get("supermarket_10min_count")),
        "nurseryschool_walk_min": clean(row.get("nurseryschool_walk_min")),
        "kindergarten_walk_min": clean(row.get("kindergarten_walk_min")),
        "park_walk_min": clean(row.get("park_walk_min")),
        "min_area": clean(row.get("最小面積")),
        "max_area": clean(row.get("最大面積")),
        "zoning": clean(row.get("用途地域")),
        "indoor": clean(row.get("屋内")),
        "note": clean(row.get("備考")),
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, default=DEFAULT_INPUT)
    parser.add_argument("--out", type=Path, default=DEFAULT_OUTPUT)
    args = parser.parse_args()

    with args.input.open(encoding="utf-8-sig", newline="") as f:
        rows = [normalize_row(row) for row in csv.DictReader(f)]

    rows = [row for row in rows if row["name"] and not row["name"].isdigit()]
    body = json.dumps(rows, ensure_ascii=False, indent=2)
    args.out.write_text(f"const properties = {body};\n", encoding="utf-8")

    geocoded = sum(1 for row in rows if row["lat"] is not None and row["lng"] is not None)
    print(f"wrote {args.out} rows={len(rows)} geocoded={geocoded}")


if __name__ == "__main__":
    main()
