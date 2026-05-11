import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const pouchesDir = path.join(root, "pouches");

const items = [
  {
    slug: "three-side-seal",
    title: "3 Side Seal Pouch",
    shape: "three-side",
    blurb:
      "Three-side seal pouches are versatile flat packs sealed along three edges, leaving one opening for filling. They work well for samples, powders, snacks, and single-serve formats.",
  },
  {
    slug: "centre-seal",
    title: "Centre Seal Pouch",
    shape: "center-seal",
    blurb:
      "Centre seal (back-seal) pouches provide a clean front face for branding with a vertical seal at the rear. Suited for confectionery, dry mixes, and FMCG products needing strong shelf graphics.",
  },
  {
    slug: "stand-up",
    title: "Stand-Up Pouch",
    shape: "stand-up",
    blurb:
      "Stand-up pouches use a bottom gusset to stand on shelf, offering excellent visibility and consumer convenience. Add zippers, tear notches, windows, and barrier films matched to your product.",
  },
  {
    slug: "shaped-pouch",
    title: "Shaped Pouch",
    shape: "shaped",
    blurb:
      "Shaped pouches use custom die outlines for distinctive shelf presence. Ideal for promotions, gifting, and premium launches where silhouette reinforces brand identity.",
  },
  {
    slug: "four-side-seal",
    title: "4 Side Seal Pouch",
    shape: "four-side",
    blurb:
      "Four-side seal formats deliver flat, uniform packs with seals on all sides—popular for portion control, vacuum options, and high-speed filling lines.",
  },
  {
    slug: "side-gusset",
    title: "Side Gusset Pouch",
    shape: "gusset",
    blurb:
      "Side gusset pouches expand for bulkier volumes while retaining a stable footprint. Common for coffee, pet food, and ingredients where fill volume and shelf depth matter.",
  },
  {
    slug: "spout",
    title: "Spout Pouch",
    shape: "spout",
    blurb:
      "Spout pouches combine flexible convenience with controlled dispensing for liquids and semi-liquids—handwash refills, beverages, oils, and household products.",
  },
  {
    slug: "retort",
    title: "Retort Pouch",
    shape: "retort",
    blurb:
      "Retort-ready structures withstand thermal processing for shelf-stable ready meals, curries, and high-moisture foods while reducing metal can dependency.",
  },
  {
    slug: "flat-bottom",
    title: "Flat Bottom Pouch",
    shape: "flat-bottom",
    blurb:
      "Flat bottom (block bottom) pouches offer five-panel printing, stable standing, and premium shelf presence—popular for granolas, snacks, and specialty foods.",
  },
];

const navPouches = items
  .map((p) => `              <a href="${p.slug}.html">${p.title}</a>`)
  .join("\n");

function page(p) {
  const desc = `${p.title} — custom printed flexible packaging from Uniflex Packaging Solutions.`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${p.title} | Uniflex Packaging Solutions</title>
    <meta name="description" content="${desc}" />
    <link rel="canonical" href="https://ops-engine.github.io/uniflexpackagingsolutions/pouches/${p.slug}.html" />
    <meta name="theme-color" content="#1e3a8a" />
    <link rel="stylesheet" href="../styles.css?v=header-tabs-active-20260511" />
  </head>
  <body>
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="header-sticky">
      <header class="site-header">
        <a class="brand" href="../index.html" aria-label="Uniflex Packaging Solutions home">
          <span class="brand-mark">
            <img
              src="../images/brand/uniflex-logo-clean-4k.png"
              width="3840"
              height="1207"
              alt="Uniflex Packaging Solutions"
              decoding="async"
              fetchpriority="high"
            />
          </span>
        </a>
        <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
          <a class="nav-link" href="../index.html">Home</a>
          <div class="nav-group">
            <a class="nav-link nav-link--has-sub" href="../about.html">About</a>
            <div class="nav-panel" role="region" aria-label="About menu">
              <a href="../about.html">Our company</a>
              <a href="../about.html#approach">How we work</a>
            </div>
          </div>
          <div class="nav-group">
            <a class="nav-link nav-link--has-sub" href="index.html">Flexible pouches</a>
            <div class="nav-panel nav-panel--wide" role="region" aria-label="Pouch formats">
${navPouches}
              <a href="index.html">View all formats</a>
            </div>
          </div>
          <div class="nav-group">
            <a class="nav-link nav-link--has-sub" href="../index.html#solutions">Solutions</a>
            <div class="nav-panel" role="region" aria-label="Solutions menu">
              <a href="../index.html#solutions">All solutions</a>
              <a href="../index.html#gravure">Gravure printed pouches</a>
              <a href="../index.html#digital">Digital printed pouches</a>
              <a href="../index.html#specialty">Specialty packaging</a>
            </div>
          </div>
          <div class="nav-group">
            <a class="nav-link nav-link--has-sub" href="../industries.html">Industries</a>
            <div class="nav-panel nav-panel--wide" role="region" aria-label="Industries menu">
              <a href="../industries.html#processed-food">Processed food</a>
              <a href="../industries.html#tea-coffee">Tea &amp; coffee</a>
              <a href="../industries.html#household">Household &amp; garden</a>
              <a href="../industries.html#pet-food">Pet food</a>
              <a href="../industries.html#liquid-food">Liquid food</a>
              <a href="../industries.html#personal-care">Health &amp; personal care</a>
              <a href="../industries.html#beverages">Beverages</a>
              <a href="../industries.html#medical">Medical &amp; pharmaceuticals</a>
            </div>
          </div>
          <a class="nav-link" href="../gallery.html">Gallery</a>
          <a class="nav-link" href="../contact.html">Contact</a>
        </nav>
        <a class="header-cta" href="../contact.html">Enquire now</a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          <span class="sr-only">Toggle navigation</span>
          <span></span><span></span><span></span>
        </button>
      </header>
    </div>

    <main id="main-content">
      <div class="page-hero page-hero--compact">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="../index.html">Home</a> · <a href="index.html">Flexible pouches</a> · ${p.title}
        </nav>
        <h1>${p.title}</h1>
        <p class="hero-text">${p.blurb}</p>
        <p class="page-actions">
          <a class="button button-primary" href="../contact.html">Request a quote</a>
          <a class="button button-secondary" href="index.html">All formats</a>
        </p>
      </div>

      <div class="layout-page">
        <div class="detail-hero">
          <div class="prose">
            <h2>When to choose this format</h2>
            <p>
              Uniflex helps you match laminate structure, barrier, seal strength, and print process (gravure or digital)
              to your filling line and distribution environment.
            </p>
            <ul class="detail-list">
              <li>Custom sizes, artwork, and finish options</li>
              <li>Add-ons: zipper, spout, valve, tear notch, hang hole</li>
              <li>Guidance on MOQ and cylinder vs digital routes</li>
            </ul>
          </div>
          <figure class="detail-hero__visual">
            <div class="detail-hero__shape">
              <span class="pouch-shape ${p.shape}" style="width: 120px; height: 140px" aria-hidden="true"></span>
            </div>
            <img
              src="../images/hero-packaging-collage.png"
              width="625"
              height="375"
              alt="Examples of printed flexible packaging from Uniflex."
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </main>

    <footer class="site-footer site-footer--columns">
      <div>
        <a class="brand footer-brand" href="../index.html" aria-label="Uniflex Packaging Solutions home">
          <span class="brand-mark">
            <img
              src="../images/brand/uniflex-logo-clean-4k.png"
              width="3840"
              height="1207"
              alt="Uniflex Packaging Solutions"
              loading="lazy"
              decoding="async"
            />
          </span>
        </a>
        <p>Custom flexible packaging for ambitious brands.</p>
      </div>
      <div class="footer-col">
        <h3>Flexible pouches</h3>
        <ul>
          <li><a href="stand-up.html">Stand-up pouch</a></li>
          <li><a href="spout.html">Spout pouch</a></li>
          <li><a href="flat-bottom.html">Flat bottom pouch</a></li>
          <li><a href="index.html">All formats</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Company</h3>
        <ul>
          <li><a href="../about.html">About us</a></li>
          <li><a href="../gallery.html">Gallery</a></li>
          <li><a href="../industries.html">Industries</a></li>
          <li><a href="../privacy.html">Privacy policy</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Contact</h3>
        <ul>
          <li><a href="../contact.html">Enquire now</a></li>
          <li><a href="tel:+910000000000">+91 00000 00000</a></li>
          <li><a href="mailto:info@uniflexpackagingsolutions.com">Email us</a></li>
        </ul>
      </div>
      <p class="copyright">&copy; <span id="year"></span> Uniflex Packaging Solutions. All rights reserved.</p>
    </footer>
    <script src="../script.js?v=header-tabs-active-20260511"></script>
  </body>
</html>
`;
}

fs.mkdirSync(pouchesDir, { recursive: true });
for (const p of items) {
  fs.writeFileSync(path.join(pouchesDir, `${p.slug}.html`), page(p));
}
console.log("Wrote", items.length, "pouch detail pages.");
