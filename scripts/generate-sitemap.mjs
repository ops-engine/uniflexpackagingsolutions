import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_URL } from "./site-config.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/** All public HTML routes (path from site root). */
const pages = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about.html", changefreq: "monthly", priority: "0.8" },
  { path: "/contact.html", changefreq: "monthly", priority: "0.9" },
  { path: "/gallery.html", changefreq: "monthly", priority: "0.6" },
  { path: "/industries.html", changefreq: "monthly", priority: "0.8" },
  { path: "/privacy.html", changefreq: "yearly", priority: "0.3" },
  { path: "/hologram-sticker.html", changefreq: "monthly", priority: "0.8" },
  { path: "/hologram/customized-text-hologram.html", changefreq: "monthly", priority: "0.7" },
  { path: "/hologram/hologram-paper-label.html", changefreq: "monthly", priority: "0.7" },
  { path: "/hologram/hologram-shrink-sleeves.html", changefreq: "monthly", priority: "0.7" },
  { path: "/hologram/holographic-pouches.html", changefreq: "monthly", priority: "0.7" },
  { path: "/hologram/holographic-security-tapes.html", changefreq: "monthly", priority: "0.7" },
  { path: "/hologram/hologram-hot-stamping-foil.html", changefreq: "monthly", priority: "0.7" },
  { path: "/hologram/qr-code-hologram-stickers.html", changefreq: "monthly", priority: "0.7" },
  { path: "/hologram/laser-numbered-holograms.html", changefreq: "monthly", priority: "0.7" },
  { path: "/hologram/id-overlay-holograms.html", changefreq: "monthly", priority: "0.7" },
  { path: "/hologram/hologram-coupons.html", changefreq: "monthly", priority: "0.7" },
  { path: "/hologram/generic-hologram-stickers.html", changefreq: "monthly", priority: "0.7" },
  { path: "/pouches/index.html", changefreq: "weekly", priority: "0.9" },
  { path: "/pouches/three-side-seal.html", changefreq: "monthly", priority: "0.7" },
  { path: "/pouches/centre-seal.html", changefreq: "monthly", priority: "0.7" },
  { path: "/pouches/stand-up.html", changefreq: "monthly", priority: "0.7" },
  { path: "/pouches/shaped-pouch.html", changefreq: "monthly", priority: "0.7" },
  { path: "/pouches/four-side-seal.html", changefreq: "monthly", priority: "0.7" },
  { path: "/pouches/side-gusset.html", changefreq: "monthly", priority: "0.7" },
  { path: "/pouches/spout.html", changefreq: "monthly", priority: "0.7" },
  { path: "/pouches/retort.html", changefreq: "monthly", priority: "0.7" },
  { path: "/pouches/flat-bottom.html", changefreq: "monthly", priority: "0.7" },
];

const urlEntries = pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const outPath = path.join(root, "sitemap.xml");
fs.writeFileSync(outPath, xml, "utf8");
console.log(`Wrote ${pages.length} URLs to ${outPath}`);
