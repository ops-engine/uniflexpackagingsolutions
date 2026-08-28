import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const industriesWithIcon = /<li><a href="(\.\.\/)?industries\.html"><i class="ri-apps-2-line nav-industry-icon" aria-hidden="true"><\/i><span>Industries<\/span><\/a><\/li>/g;

function collectHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectHtmlFiles(full, files);
    else if (entry.name.endsWith(".html")) files.push(full);
  }
  return files;
}

let updated = 0;

for (const file of collectHtmlFiles(root)) {
  let html = fs.readFileSync(file, "utf8");
  const original = html;

  html = html.replace(industriesWithIcon, (_match, prefix = "") => {
    return `<li><a href="${prefix || ""}industries.html">Industries</a></li>`;
  });

  if (html !== original) {
    fs.writeFileSync(file, html, "utf8");
    updated += 1;
    console.log(`patched ${path.relative(root, file)}`);
  }
}

console.log(`Done. Updated ${updated} file(s).`);
