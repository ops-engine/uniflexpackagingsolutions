import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const holoDir = path.join(root, "hologram");

const items = [
  {
    slug: "hologram-hot-stamping-foil",
    title: "Hologram Hot Stamping Foil",
    image: "holo-01-hot-stamping-foil.png",
    summary:
      "High-security holographic foil applied using heat and pressure to create a permanent anti-counterfeit mark on packaging and labels.",
    benefits: [
      "Creates a durable authentication feature that is difficult to duplicate.",
      "Improves shelf appeal with premium metallic holographic impact.",
      "Works across carton packs, mono cartons, and branded label zones.",
    ],
    applications: ["FMCG carton branding", "Pharmaceutical outer packs", "Premium product seals"],
  },
  {
    slug: "qr-code-hologram-stickers",
    title: "QR Code Hologram Stickers",
    image: "holo-02-qr-code-stickers.png",
    summary:
      "Smart holographic labels integrated with QR codes for instant product verification and digital authentication workflows.",
    benefits: [
      "Enables scan-and-verify journeys for dealers and end customers.",
      "Combines overt hologram security with traceable digital IDs.",
      "Supports anti-duplication campaigns and channel monitoring.",
    ],
    applications: ["Consumer verification labels", "Warranty authentication", "Distribution traceability"],
  },
  {
    slug: "customized-text-hologram",
    title: "Customized Text Hologram",
    image: "holo-03-customized-text.png",
    summary:
      "Personalized hologram labels embedded with custom text, logo motifs, and visual brand signatures to build unique identity.",
    benefits: [
      "Creates a brand-exclusive hologram style that improves recognition.",
      "Reduces counterfeit risk by using customized master structures.",
      "Adds strong visual differentiation on crowded shelves.",
    ],
    applications: ["Brand authentication stickers", "Retail product labeling", "Corporate security marks"],
  },
  {
    slug: "laser-numbered-holograms",
    title: "Laser Numbered Holograms",
    image: "holo-04-laser-numbered.png",
    summary:
      "Serialized hologram stickers with unique laser numbering for high-security product tracking and controlled authentication.",
    benefits: [
      "Provides unit-level traceability across production and dispatch.",
      "Supports audit trails for high-value and regulated products.",
      "Makes unauthorized replication and batch cloning harder.",
    ],
    applications: ["Warranty seals", "Asset identification", "High-value spare parts"],
  },
  {
    slug: "holographic-pouches",
    title: "Holographic Pouches",
    image: "holo-05-holographic-pouches.png",
    summary:
      "Flexible pouches made with holographic film structures to deliver stronger shelf visibility and added anti-counterfeit confidence.",
    benefits: [
      "Elevates packaging presence with reflective premium effects.",
      "Combines brand promotion with practical authentication cues.",
      "Suitable for custom print + hologram hybrid packaging formats.",
    ],
    applications: ["Food and snacks", "Cosmetics and personal care", "Nutraceutical packs"],
  },
  {
    slug: "hologram-paper-label",
    title: "Holographic Paper Labels",
    image: "holo-06-holographic-paper-labels.png",
    summary:
      "Paper-based holographic labels that offer visual security and fast integration into existing label application workflows.",
    benefits: [
      "Balances cost and security for large-volume label programs.",
      "Improves shelf impact while supporting authenticity messaging.",
      "Compatible with varied packaging substrates and print workflows.",
    ],
    applications: ["Bottle labels", "General merchandise labels", "Tamper-evident secondary labels"],
  },
  {
    slug: "holographic-security-tapes",
    title: "Holographic Security Tapes",
    image: "holo-07-holographic-security-tapes.png",
    summary:
      "Tamper-evident holographic tapes for shipping cartons and transit packs, helping detect opening attempts immediately.",
    benefits: [
      "Adds visible tamper evidence for logistics and warehouse handling.",
      "Discourages repacking and carton substitution during transit.",
      "Can carry custom brand identity for stronger supply-chain control.",
    ],
    applications: ["Export carton sealing", "Transit package security", "Warehouse dispatch controls"],
  },
  {
    slug: "hologram-shrink-sleeves",
    title: "Hologram Shrink Sleeves",
    image: "holo-08-shrink-sleeves.png",
    summary:
      "Full-body holographic shrink sleeves that combine 360-degree branding with secure visual authentication.",
    benefits: [
      "Covers more surface area for stronger branding and security.",
      "Improves counterfeit resistance with integrated sleeve design.",
      "Supports high-impact retail presentation for premium SKUs.",
    ],
    applications: ["Bottles and jars", "Personal care containers", "Special edition retail packs"],
  },
  {
    slug: "hologram-coupons",
    title: "Hologram Coupons",
    image: "holo-09-hologram-coupons.png",
    summary:
      "Promotional coupons with embedded holographic elements to reduce duplication and unauthorized redemption.",
    benefits: [
      "Strengthens coupon authenticity in consumer promotions.",
      "Reduces fraud in redemption-heavy marketing campaigns.",
      "Adds visual value to on-pack and trade incentive programs.",
    ],
    applications: ["Trade schemes", "Consumer offers", "Festival promotion campaigns"],
  },
  {
    slug: "id-overlay-holograms",
    title: "ID Overlay Holograms",
    image: "holo-10-id-overlay.png",
    summary:
      "Transparent hologram overlays used on ID cards and official credentials to prevent forgery and unauthorized duplication.",
    benefits: [
      "Adds a secure top layer difficult to replicate.",
      "Protects identity cards against tampering and replacement.",
      "Can include micro-security effects for verification checks.",
    ],
    applications: ["Corporate ID cards", "Institution cards", "Official document overlays"],
  },
  {
    slug: "generic-hologram-stickers",
    title: "Generic Hologram Stickers",
    image: "holo-11-generic-stickers.png",
    summary:
      "Ready-to-use hologram stickers for quick deployment where basic authentication and decorative security are needed.",
    benefits: [
      "Fast turnaround for urgent product launches and relabeling.",
      "Cost-effective entry-level hologram protection.",
      "Simple deployment across varied product categories.",
    ],
    applications: ["Short production runs", "General brand seals", "Interim security labeling"],
  },
];

const navHolo = items.map((i) => `              <a href="${i.slug}.html">${i.title}</a>`).join("\n");

function page(item) {
  const desc = `${item.title} by Uniflex for anti-counterfeit protection, authentication, and secure packaging identity.`;
  const benefitList = item.benefits.map((b) => `              <li>${b}</li>`).join("\n");
  const applicationList = item.applications.map((a) => `              <li>${a}</li>`).join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${item.title} | Uniflex Packaging Solutions</title>
    <meta name="description" content="${desc}" />
    <link rel="canonical" href="https://ops-engine.github.io/uniflexpackagingsolutions/hologram/${item.slug}.html" />
    <meta name="theme-color" content="#1e3a8a" />
    <link rel="stylesheet" href="../styles.css?v=header-tabs-active-20260511" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" />
  </head>
  <body>
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="header-sticky">
      <header class="site-header">
        <a class="brand" href="../index.html" aria-label="Uniflex Packaging Solutions home">
          <span class="brand-mark">
            <img src="../images/brand/uniflex-logo-clean-4k.png" width="3840" height="1207" alt="Uniflex Packaging Solutions" decoding="async" fetchpriority="high" />
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
            <a class="nav-link nav-link--has-sub" href="../pouches/index.html">Flexible pouches</a>
            <div class="nav-panel nav-panel--wide" role="region" aria-label="Pouch formats">
              <a href="../pouches/three-side-seal.html">3 side seal pouch</a>
              <a href="../pouches/centre-seal.html">Centre seal pouch</a>
              <a href="../pouches/stand-up.html">Stand-up pouch</a>
              <a href="../pouches/shaped-pouch.html">Shaped pouch</a>
              <a href="../pouches/four-side-seal.html">4 side seal pouch</a>
              <a href="../pouches/side-gusset.html">Side gusset pouch</a>
              <a href="../pouches/spout.html">Spout pouch</a>
              <a href="../pouches/retort.html">Retort pouch</a>
              <a href="../pouches/flat-bottom.html">Flat bottom pouch</a>
              <a href="../pouches/index.html">View all formats</a>
            </div>
          </div>
          <div class="nav-group">
            <a class="nav-link nav-link--has-sub" href="../hologram-sticker.html">Hologram Security Stickers</a>
            <div class="nav-panel nav-panel--wide" role="region" aria-label="Hologram sticker formats">
${navHolo}
              <a href="../hologram-sticker.html">View all hologram formats</a>
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
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="../index.html">Home</a> · <a href="../hologram-sticker.html">Hologram sticker</a> · ${item.title}</nav>
        <h1>${item.title}</h1>
        <p class="hero-text">${item.summary}</p>
      </div>
      <div class="layout-page">
        <div class="holo-detail-intro">
          <figure class="holo-detail-intro__media">
            <img src="../images/hologram/solutions/${item.image}" width="1024" height="1024" alt="${item.title} sample from Uniflex security hologram portfolio." loading="lazy" decoding="async" />
          </figure>
          <div class="prose">
            <h2>Custom security hologram solution</h2>
            <p>
              We design and supply hologram security solutions ranging from high-security tamper-evident labels to
              scalable authentication formats for everyday packaging. Each format can be aligned to your brand identity,
              verification workflow, and supply chain environment.
            </p>
          </div>
        </div>
        <div class="holo-detail-sections">
          <article class="holo-detail-card">
            <h2>Benefits of ${item.title}</h2>
            <ul class="detail-list">
${benefitList}
            </ul>
          </article>
          <article class="holo-detail-card">
            <h2>Typical applications</h2>
            <ul class="detail-list">
${applicationList}
            </ul>
          </article>
        </div>
        <p class="page-actions">
          <a class="button button-primary" href="../contact.html">Request consultation</a>
          <a class="button button-secondary" href="../hologram-sticker.html">View all hologram formats</a>
        </p>
      </div>
    </main>

    <footer class="site-footer site-footer--columns">
      <div>
        <a class="brand footer-brand" href="../index.html" aria-label="Uniflex Packaging Solutions home">
          <span class="brand-mark">
            <img src="../images/brand/uniflex-logo-clean-4k.png" width="3840" height="1207" alt="Uniflex Packaging Solutions" loading="lazy" decoding="async" />
          </span>
        </a>
        <p>Custom flexible packaging for ambitious brands.</p>
      </div>
      <div class="footer-col">
        <h3>Flexible pouches</h3>
        <ul>
          <li><a href="../pouches/three-side-seal.html">3 side seal pouch</a></li>
          <li><a href="../pouches/centre-seal.html">Centre seal pouch</a></li>
          <li><a href="../pouches/stand-up.html">Stand-up pouch</a></li>
          <li><a href="../pouches/shaped-pouch.html">Shaped pouch</a></li>
          <li><a href="../pouches/four-side-seal.html">4 side seal pouch</a></li>
          <li><a href="../pouches/side-gusset.html">Side gusset pouch</a></li>
          <li><a href="../pouches/spout.html">Spout pouch</a></li>
          <li><a href="../pouches/retort.html">Retort pouch</a></li>
          <li><a href="../pouches/flat-bottom.html">Flat bottom pouch</a></li>
          <li><a href="../pouches/index.html">All formats</a></li>
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
          <li><a href="mailto:contact-us@uniflexpackagingsolutions.com">contact-us@uniflexpackagingsolutions.com</a></li>
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
</html>`;
}

fs.mkdirSync(holoDir, { recursive: true });
for (const item of items) {
  fs.writeFileSync(path.join(holoDir, `${item.slug}.html`), page(item));
}

console.log("Wrote", items.length, "hologram detail pages.");
