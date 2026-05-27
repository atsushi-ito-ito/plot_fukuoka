/**
 * ローカル開発用サーバー
 * 使い方: node server.js
 * その後 http://localhost:3000 をブラウザで開く
 */

const http = require("http");
const fs   = require("fs");
const path = require("path");

function loadProperties() {
  const code = fs.readFileSync(path.join(__dirname, "properties.js"), "utf8");
  // ブラウザ用の const 宣言を Node でも動くよう Function でラップして実行
  const fn = new Function("module", "exports", code + "\nmodule.exports = properties;");
  const mod = { exports: {} };
  fn(mod, mod.exports);
  return Array.isArray(mod.exports) ? mod.exports : [];
}

// properties.js からデータを読み込む
let properties = [];
try {
  properties = loadProperties();
  console.log(`✅ ${properties.length} 件の物件データを読み込みました`);
} catch (e) {
  console.error("⚠️  properties.js の読み込みに失敗しました:", e.message);
}

const PORT = 3000;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css" : "text/css; charset=utf-8",
  ".js"  : "application/javascript",
  ".json": "application/json",
  ".png" : "image/png",
  ".jpg" : "image/jpeg",
  ".ico" : "image/x-icon",
};

http.createServer((req, res) => {
  // /api/properties → properties.js のデータを返す
  if (req.url === "/api/properties") {
    try {
      properties = loadProperties();
    } catch (e) {
      console.error("⚠️  properties.js の再読み込みに失敗しました:", e.message);
    }
    const body = JSON.stringify(properties);
    res.writeHead(200, {
      "Content-Type"                : "application/json; charset=utf-8",
      "Access-Control-Allow-Origin" : "*",
    });
    res.end(body);
    return;
  }

  // 静的ファイルの配信
  let urlPath = req.url.split("?")[0]; // クエリ除去
  if (urlPath === "/") urlPath = "/index.html";

  const filePath = path.join(__dirname, urlPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });

}).listen(PORT, () => {
  console.log("────────────────────────────────────");
  console.log(`🚀 サーバー起動中: http://localhost:${PORT}`);
  console.log("   ブラウザでこのURLを開いてください");
  console.log("   終了するには Ctrl+C を押してください");
  console.log("────────────────────────────────────");
});
