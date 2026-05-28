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
    image: "three-side-seal/hero-three-side-seal-uniflex.png",
    imageWidth: 723,
    imageHeight: 1024,
    blurb:
      "Three-side seal pouches are versatile flat packs sealed along three edges, leaving one opening for filling. They work well for samples, powders, snacks, and single-serve formats.",
    pouchDesign:
      "Three-side seal pouches are formed by sealing three edges and leaving one side for filling. The format is compact, efficient, and suited to flat profile packs where strong seal integrity and quick filling throughput are required.",
    benefits: [
      "Cost-efficient flexible format for high-volume runs.",
      "Good consistency for cartoning and line automation.",
      "Easy product access with optional tear-notch opening.",
    ],
    applications: [
      "Dry powders, spices, and instant mixes",
      "Snack and confectionery single-serve packs",
      "Health, beauty, and home-care refills",
    ],
    displayOptions: ["Window", "Square corner", "Round corner", "Translucent", "Sombrero punch", "Die-cut handle"],
    displayAssets: {
      Window: "display-window.png",
      "Square corner": "display-square-corner.png",
      "Round corner": "display-round-corner.png",
      Translucent: "display-translucent.png",
      "Sombrero punch": "display-sombrero-punch.png",
      "Die-cut handle": "display-die-cut-handle.png",
    },
    closureOptions: ["Slide zipper seal", "Press seal", "One-way valve", "Heat-seal tear notch"],
  },
  {
    slug: "centre-seal",
    title: "Centre Seal Pouch",
    shape: "center-seal",
    image: "centre-seal/hero.png",
    imageWidth: 1131,
    imageHeight: 1600,
    blurb:
      "Centre seal (back-seal) pouches provide a clean front face for branding with a vertical seal at the rear. Suited for confectionery, dry mixes, and FMCG products needing strong shelf graphics.",
    pouchDesign:
      "Centre seal pouches use a vertical back seal that keeps the front panel clean for branding while maintaining robust seal performance. This pillow-style configuration works well for cost-efficient, high-speed packing.",
    benefits: [
      "Economical format for mainstream FMCG packs.",
      "Strong seal reliability on automated filling lines.",
      "Balanced material use with good pack stability.",
    ],
    applications: [
      "Tea, coffee, and dry ingredient packs",
      "Confectionery and bakery products",
      "Retail pouches for powders and granules",
    ],
    displayOptions: ["Window", "Square corner", "Round corner", "Translucent", "Sombrero punch", "Die-cut handle"],
    closureOptions: ["Slide zipper seal", "Press seal", "One-way valve", "Heat-seal tear notch"],
  },
  {
    slug: "stand-up",
    title: "Stand-Up Pouch",
    shape: "stand-up",
    image: "stand-up/stand-up-hero.png",
    imageWidth: 500,
    imageHeight: 500,
    blurb:
      "Stand-up pouches use a bottom gusset to stand on shelf, offering excellent visibility and consumer convenience. Add zippers, tear notches, windows, and barrier films matched to your product.",
    pouchDesign:
      "Stand-up pouches use a bottom gusset to create an upright shelf profile and broad front panel. They support premium graphics, high barrier laminates, and multiple convenience features for modern retail.",
    benefits: [
      "Excellent shelf presence with stable upright display.",
      "Supports reclosure and repeat-use convenience.",
      "High customization flexibility for brand-led packs.",
    ],
    applications: [
      "Dry fruits, snacks, and granola",
      "Health and nutrition powders",
      "Pet treats and specialty food products",
    ],
    displayOptions: ["Window", "Square corner", "Round corner", "Translucent", "Sombrero punch", "Die-cut handle"],
    displayAssets: {
      Window: "display-window.png",
      "Square corner": "display-square-corner.png",
      "Round corner": "display-round-corner.png",
      Translucent: "display-translucent.png",
      "Sombrero punch": "display-sombrero-punch.png",
      "Die-cut handle": "display-die-cut-handle.png",
    },
    closureOptions: ["Slide zipper seal", "Press seal", "One-way valve", "Heat-seal tear notch"],
    closureAssets: {
      "Slide zipper seal": "closure-slide-zipper.png",
      "Press seal": "closure-resealable.png",
      "One-way valve": "closure-valve.png",
      "Heat-seal tear notch": "closure-tear-notch.png",
    },
  },
  {
    slug: "shaped-pouch",
    title: "Shaped Pouch",
    shape: "shaped",
    image: "shaped-pouch/hero.png",
    imageWidth: 1131,
    imageHeight: 1600,
    blurb:
      "Shaped pouches use custom die outlines for distinctive shelf presence. Ideal for promotions, gifting, and premium launches where silhouette reinforces brand identity.",
    pouchDesign:
      "Shaped pouches are produced in custom silhouettes rather than standard rectangular forms. They can include convex, hourglass, rounded-corner, and bespoke die-cut profiles to improve visual differentiation.",
    benefits: [
      "Unique appearance for stronger shelf differentiation.",
      "High puncture resistance and dependable leak control.",
      "Supports rich multi-colour printing and premium branding.",
    ],
    applications: [
      "Limited edition product launches",
      "Kids and novelty packaging formats",
      "Premium gifting and festival SKUs",
    ],
    displayOptions: ["Translucent", "Sombrero punch", "Die-cut handle"],
    closureOptions: ["Slide zipper seal", "Press seal", "Spouted cap", "Heat-seal tear notch"],
  },
  {
    slug: "four-side-seal",
    title: "4 Side Seal Pouch",
    shape: "four-side",
    image: "four-side-seal/hero.png",
    imageWidth: 1131,
    imageHeight: 1600,
    blurb:
      "Four-side seal formats deliver flat, uniform packs with seals on all sides—popular for portion control, vacuum options, and high-speed filling lines.",
    pouchDesign:
      "4 side seal pouches are sealed on all four sides to create a compact, high-integrity flat pouch format. The structure is well-suited for sachets and precision-fill applications requiring secure sealing.",
    benefits: [
      "Improved airtightness compared with basic flat formats.",
      "Supports high-speed automated packing operations.",
      "Reliable seal uniformity for bulk batch consistency.",
    ],
    applications: [
      "Pharma and nutraceutical sachets",
      "Seasoning and instant mix pouches",
      "Small-format household product packs",
    ],
    displayOptions: ["Square corner", "Round corner", "Translucent", "Window", "Sombrero punch", "Die-cut handle"],
    closureOptions: ["Slide zipper seal", "Press seal", "One-way valve", "Heat-seal tear notch"],
  },
  {
    slug: "side-gusset",
    title: "Side Gusset Pouch",
    shape: "gusset",
    image: "side-gusset/hero.png",
    imageWidth: 1131,
    imageHeight: 1600,
    blurb:
      "Side gusset pouches expand for bulkier volumes while retaining a stable footprint. Common for coffee, pet food, and ingredients where fill volume and shelf depth matter.",
    pouchDesign:
      "Side gusset pouches include expandable side folds that increase internal capacity after filling. The format is often used for tea and coffee where volume, barrier, and storage efficiency are important.",
    benefits: [
      "Higher fill capacity in a compact bag footprint.",
      "Strong storage efficiency with improved pack durability.",
      "Suitable for high-barrier laminates and bulk packing.",
    ],
    applications: [
      "Coffee beans and ground coffee",
      "Bulk dry ingredients and grains",
      "Pet food and feed products",
    ],
    displayOptions: ["Window", "Translucent", "Die-cut handle", "Square corner", "Round corner"],
    closureOptions: ["Slide zipper seal", "Press seal", "One-way valve", "Heat-seal tear notch"],
  },
  {
    slug: "spout",
    title: "Spout Pouch",
    shape: "spout",
    image: "spout/hero.png",
    imageWidth: 1131,
    imageHeight: 1600,
    blurb:
      "Spout pouches combine flexible convenience with controlled dispensing for liquids and semi-liquids—handwash refills, beverages, oils, and household products.",
    pouchDesign:
      "Spout pouches combine flexible laminate structures with integrated dispensing fitments. They are optimized for liquids and semi-liquids where controlled pouring, resealing, and lightweight logistics are priorities.",
    benefits: [
      "Reclosable and easy-pour consumer experience.",
      "Lower logistics cost than rigid bottle packaging.",
      "Good barrier performance for moisture and oxygen control.",
    ],
    applications: [
      "Handwash and detergent refills",
      "Sauces, oils, and liquid concentrates",
      "Beverage and puree refill packs",
    ],
    displayOptions: ["Square corner", "Round corner", "Translucent", "Window", "Custom shape"],
    closureOptions: ["Spout cap fitment", "Flip-top spout", "Press seal", "Heat-seal tear notch"],
  },
  {
    slug: "retort",
    title: "Retort Pouch",
    shape: "retort",
    image: "retort/hero.png",
    imageWidth: 1131,
    imageHeight: 1600,
    blurb:
      "Retort-ready structures withstand thermal processing for shelf-stable ready meals, curries, and high-moisture foods while reducing metal can dependency.",
    pouchDesign:
      "Retort pouches use multi-layer laminates designed to withstand sterilization temperatures and pressure. They are engineered for shelf-stable food applications requiring strong barrier performance and thermal durability.",
    benefits: [
      "Supports high-temperature retort processing cycles.",
      "Preserves food quality, aroma, and sensory profile.",
      "Offers lighter alternative to rigid can formats.",
    ],
    applications: [
      "Ready-to-eat meals and gravies",
      "Cooked pulses and curry bases",
      "Institutional and export food packs",
    ],
    displayOptions: ["Square corner", "Round corner", "Translucent"],
    closureOptions: ["Slide zipper seal", "Press seal", "One-way valve", "Heat-seal tear notch"],
  },
  {
    slug: "flat-bottom",
    title: "Flat Bottom Pouch",
    shape: "flat-bottom",
    image: "flat-bottom/hero.png",
    imageWidth: 1131,
    imageHeight: 1600,
    blurb:
      "Flat bottom (block bottom) pouches offer five-panel printing, stable standing, and premium shelf presence—popular for granolas, snacks, and specialty foods.",
    pouchDesign:
      "Flat bottom pouches are built with a stable base and multiple printable panels for strong shelf presentation. They provide high fill efficiency while maintaining a premium structured appearance on retail displays.",
    benefits: [
      "Excellent shelf stability with upright presentation.",
      "Multiple panels for strong brand storytelling.",
      "High-volume fill support through full-height gussets.",
    ],
    applications: [
      "Specialty snacks and dry fruits",
      "Granola, cereal, and protein mixes",
      "Premium tea and coffee ranges",
    ],
    displayOptions: ["Window", "Sombrero punch", "Die-cut handle", "Square corner", "Round corner", "Translucent"],
    closureOptions: ["Slide zipper seal", "Press seal", "One-way valve", "Heat-seal tear notch"],
  },
];

const navPouchLabels = {
  "three-side-seal": "3 side seal pouch",
  "centre-seal": "Centre seal pouch",
  "stand-up": "Stand-up pouch",
  "shaped-pouch": "Shaped pouch",
  "four-side-seal": "4 side seal pouch",
  "side-gusset": "Side gusset pouch",
  spout: "Spout pouch",
  retort: "Retort pouch",
  "flat-bottom": "Flat bottom pouch",
};

const navPouches = items
  .map((p) => `              <a href="${p.slug}.html">${navPouchLabels[p.slug] ?? p.title}</a>`)
  .join("\n");

const footerPouches = items
  .map((p) => `          <li><a href="${p.slug}.html">${navPouchLabels[p.slug] ?? p.title}</a></li>`)
  .join("\n");

function page(p) {
  const desc = `${p.title} — custom printed flexible packaging from Uniflex Packaging Solutions.`;
  const designText = p.pouchDesign ?? p.blurb;
  const benefitsList = p.benefits.map((item) => `              <li>${item}</li>`).join("\n");
  const applicationsList = p.applications.map((item) => `              <li>${item}</li>`).join("\n");
  const displayList = p.displayOptions
    .map((item) => {
      const image = p.displayAssets?.[item];
      if (image) {
        return `              <li class="option-item option-item--with-image"><img src="../images/pouches/${p.slug}/${image}" width="240" height="140" alt="${item} display option for ${p.title}." loading="lazy" decoding="async" /><span>${item}</span></li>`;
      }
      return `              <li class="option-item"><span>${item}</span></li>`;
    })
    .join("\n");
  const closureList = p.closureOptions
    .map((item) => {
      const image = p.closureAssets?.[item];
      if (image) {
        return `              <li class="option-item option-item--with-image"><img src="../images/pouches/${p.slug}/${image}" width="240" height="140" alt="${item} closure option for ${p.title}." loading="lazy" decoding="async" /><span>${item}</span></li>`;
      }
      return `              <li class="option-item"><span>${item}</span></li>`;
    })
    .join("\n");
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${p.title} | Uniflex Packaging Solutions</title>
    <meta name="description" content="${desc}" />
    <link rel="canonical" href="https://ops-engine.github.io/uniflexpackagingsolutions/pouches/${p.slug}.html" />
    <meta name="theme-color" content="#1e3a8a" />
    <link rel="icon" type="image/png" href="../images/brand/favicon.png" />
    <link rel="stylesheet" href="../styles.css?v=header-tabs-active-20260511" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" />
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
              <div class="nav-subgroup" role="group" aria-label="Industries links">
                <a class="nav-subgroup__trigger" href="../industries.html">Industries</a>
                <div class="nav-subgroup__panel">
                  <a href="../industries.html#processed-food"><i class="ri-restaurant-2-line nav-industry-icon" aria-hidden="true"></i><span>Processed food</span></a>
                  <a href="../industries.html#tea-coffee"><i class="ri-cup-line nav-industry-icon" aria-hidden="true"></i><span>Tea &amp; coffee</span></a>
                  <a href="../industries.html#household"><i class="ri-home-gear-line nav-industry-icon" aria-hidden="true"></i><span>Household &amp; garden</span></a>
                  <a href="../industries.html#pet-food"><i class="ri-footprint-line nav-industry-icon" aria-hidden="true"></i><span>Pet food</span></a>
                  <a href="../industries.html#liquid-food"><i class="ri-goblet-line nav-industry-icon" aria-hidden="true"></i><span>Liquid food</span></a>
                  <a href="../industries.html#personal-care"><i class="ri-hand-sanitizer-line nav-industry-icon" aria-hidden="true"></i><span>Health &amp; personal care</span></a>
                  <a href="../industries.html#beverages"><i class="ri-cup-line nav-industry-icon" aria-hidden="true"></i><span>Beverages</span></a>
                  <a href="../industries.html#medical"><i class="ri-medicine-bottle-line nav-industry-icon" aria-hidden="true"></i><span>Medical &amp; pharmaceuticals</span></a>
                </div>
              </div>
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
            <a class="nav-link nav-link--has-sub" href="../hologram-sticker.html">Hologram Security Stickers</a>
            <div class="nav-panel nav-panel--wide" role="region" aria-label="Hologram sticker formats">
              <a href="../hologram/hologram-hot-stamping-foil.html">Hologram Hot Stamping Foil</a>
              <a href="../hologram/qr-code-hologram-stickers.html">QR Code Hologram Stickers</a>
              <a href="../hologram/customized-text-hologram.html">Customized Text Hologram</a>
              <a href="../hologram/laser-numbered-holograms.html">Laser Numbered Holograms</a>
              <a href="../hologram/holographic-pouches.html">Holographic Pouches</a>
              <a href="../hologram/hologram-paper-label.html">Holographic Paper Labels</a>
              <a href="../hologram/holographic-security-tapes.html">Holographic Security Tapes</a>
              <a href="../hologram/hologram-shrink-sleeves.html">Hologram Shrink Sleeves</a>
              <a href="../hologram/hologram-coupons.html">Hologram Coupons</a>
              <a href="../hologram/id-overlay-holograms.html">ID Overlay Holograms</a>
              <a href="../hologram/generic-hologram-stickers.html">Generic Hologram Stickers</a>
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
            <h2>Pouch design</h2>
            <p>
              ${designText}
            </p>
          </div>
          <figure class="detail-hero__visual">
            <div class="detail-hero__shape">
              <span class="pouch-shape ${p.shape}" style="width: 120px; height: 140px" aria-hidden="true"></span>
            </div>
            <img
              src="../images/pouches/${p.image}"
              width="${p.imageWidth}"
              height="${p.imageHeight}"
              alt="${p.title} sample pouch from Uniflex."
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
        <div class="pouch-detail-sections">
          <article class="pouch-detail-card">
            <h2>Benefits</h2>
            <ul class="detail-list">
${benefitsList}
            </ul>
          </article>
          <article class="pouch-detail-card">
            <h2>Applications</h2>
            <ul class="detail-list">
${applicationsList}
            </ul>
          </article>
          <article class="pouch-detail-card">
            <h2>Display options</h2>
            <ul class="option-grid">
${displayList}
            </ul>
          </article>
          <article class="pouch-detail-card">
            <h2>Closure options</h2>
            <ul class="option-grid">
${closureList}
            </ul>
          </article>
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
${footerPouches}
          <li><a href="index.html">All formats</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Company</h3>
        <ul>
          <li><a href="../about.html">About us</a></li>
          <li><a href="../gallery.html">Gallery</a></li>
          <li><a href="../industries.html"><i class="ri-apps-2-line nav-industry-icon" aria-hidden="true"></i><span>Industries</span></a></li>
          <li><a href="../privacy.html">Privacy policy</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Contact</h3>
        <ul>
          <li><a href="../contact.html">Enquire now</a></li>
          <li><a href="tel:+919686960545">+91 96869 60545</a></li>
          <li><a href="mailto:uniflexpackagingsollutions@gmail.com">uniflexpackagingsollutions@gmail.com</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Address</h3>
        <ul>
          <li>
            <a class="location-link" href="https://maps.app.goo.gl/bsWXXG1VSUHhUwGw6" target="_blank" rel="noopener noreferrer">
              <i class="ri-map-pin-2-fill" aria-hidden="true"></i>
              <span>Survey No. 352, Ground Floor, Ramakuppam Main Road, Kyasamballi Village, KGF Taluk, Kolar, Karnataka 563121</span>
            </a>
          </li>
          <li>
            <a class="location-link" href="https://maps.app.goo.gl/u8Ys68yC1oGph1A27" target="_blank" rel="noopener noreferrer">
              <i class="ri-map-pin-2-fill" aria-hidden="true"></i>
              <span>Survey No. 61/1, Byappanahalli, Bidarahalli Hobli, Virgonagar Post, Bengaluru, Bengaluru Urban, Karnataka 560049</span>
            </a>
          </li>
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
