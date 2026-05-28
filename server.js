const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const HOST = process.env.HOST || "0.0.0.0";
const PORT = Number(process.env.PORT || 3000);
const PUBLIC_DIR = __dirname;
const BLOCKED_ROOT_FILES = new Set([
  ".gitignore",
  "LICENSE",
  "README.md",
  "package.json",
  "server.js"
]);

const BLOCKED_ROOT_DIRS = new Set(["scripts", ".git"]);

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8"
};

function send(response, statusCode, body, contentType = "text/plain; charset=utf-8") {
  response.writeHead(statusCode, {
    "Content-Type": contentType,
    "X-Content-Type-Options": "nosniff"
  });
  response.end(body);
}

function resolveStaticPath(requestUrl) {
  let url;
  let decodedPath;

  try {
    url = new URL(requestUrl, `http://${HOST}:${PORT}`);
    decodedPath = decodeURIComponent(url.pathname);
  } catch {
    return null;
  }

  const normalizedPath = path.normalize(decodedPath);
  const requestedPath = normalizedPath === "/" ? "/index.html" : normalizedPath;
  const rootFile = requestedPath.replace(/^\/+/, "").split(/[\\/]/)[0];

  if (rootFile.startsWith(".") || BLOCKED_ROOT_FILES.has(rootFile) || BLOCKED_ROOT_DIRS.has(rootFile)) {
    return null;
  }

  const filePath = path.join(PUBLIC_DIR, requestedPath);
  const relativePath = path.relative(PUBLIC_DIR, filePath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    return null;
  }

  return filePath;
}

const server = http.createServer((request, response) => {
  if (!request.url || request.method !== "GET") {
    send(response, 405, "Method Not Allowed");
    return;
  }

  if (request.url.startsWith("/health")) {
    send(response, 200, JSON.stringify({ status: "ok" }), MIME_TYPES[".json"]);
    return;
  }

  const filePath = resolveStaticPath(request.url);

  if (!filePath) {
    send(response, 403, "Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      send(response, 404, "Not Found");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[extension] || "application/octet-stream";

    response.writeHead(200, {
      "Content-Length": stats.size,
      "Content-Type": contentType,
      "X-Content-Type-Options": "nosniff"
    });

    fs.createReadStream(filePath).pipe(response);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Uniflex Packaging Solutions server running at http://${HOST}:${PORT}`);
});
