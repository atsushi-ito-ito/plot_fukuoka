// api/properties.js
const { google } = require("googleapis");

function getSpreadsheetId(sheetUrl) {
  if (!sheetUrl) return null;
  const m = sheetUrl.match(/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  return m ? m[1] : null;
}

function toNumberOrNull(v) {
  if (v === undefined || v === null) return null;
  const s = String(v).trim();
  if (!s || s === "-" || s === "不明") return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

function normalizeRow(obj) {
  // フロントが期待する形に整える
  return {
    name: obj.name || "",
    lat: toNumberOrNull(obj.lat),
    lng: toNumberOrNull(obj.lng),
    tsubo: obj.tsubo || "",
    units: obj.units || "",
    developer: obj.developer || "",
    sale: obj.sale || "",
    completion: obj.completion || "",
    walk: obj.walk || "",
    ward: obj.ward || "",
  };
}

module.exports = async (req, res) => {
  try {
    const sheetUrl = process.env.SHEET_URL;
    const sheetName = process.env.SHEET_NAME || "properties";
    const spreadsheetId = getSpreadsheetId(sheetUrl);

    if (!spreadsheetId) {
      res.status(500).json({ error: "SHEET_URL is not set or invalid." });
      return;
    }

    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT;
    if (!serviceAccountJson) {
      res.status(500).json({ error: "GOOGLE_SERVICE_ACCOUNT is not set." });
      return;
    }

    const serviceAccount = JSON.parse(serviceAccountJson);

    const auth = new google.auth.JWT({
      email: serviceAccount.client_email,
      key: serviceAccount.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const range = `${sheetName}!A:Z`; // 必要に応じて拡張
    const resp = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const values = resp.data.values || [];
    if (values.length === 0) {
      res.status(200).json([]);
      return;
    }

    const headers = values[0].map((h) => String(h || "").trim());
    const rows = values.slice(1);

    const data = rows
      .map((row) => {
        const obj = {};
        headers.forEach((h, i) => {
          obj[h] = row[i] !== undefined ? String(row[i]).trim() : "";
        });
        return normalizeRow(obj);
      })
      .filter((p) => p.name); // name無しは除外

    // キャッシュ（更新頻度が高いなら短めに）
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to load properties from Sheets." });
  }
};
