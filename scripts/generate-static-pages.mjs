import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const headerRoot = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{{TITLE}}</title>
    <meta name="description" content="{{DESC}}" />
    <link rel="canonical" href="{{CANONICAL}}" />
    <meta name="theme-color" content="#1e3a8a" />
    <link rel="stylesheet" href="{{CSS}}" />
  </head>
  <body>
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="header-sticky">
      <header class="site-header">
        <a class="brand" href="{{HOME}}index.html" aria-label="Uniflex Packaging Solutions home">
          <span class="brand-mark">
            <img src="{{IMG}}brand/uniflex-logo-clean-4k.png" width="3840" height="1207" alt="Uniflex Packaging Solutions" decoding="async" fetchpriority="high" />
          </span>
        </a>
        <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
          <a class="nav-link" href="{{HOME}}index.html">Home</a>
          <div class="nav-group">
            <a class="nav-link nav-link--has-sub" href="{{HOME}}about.html">About</a>
            <div class="nav-panel" role="region" aria-label="About menu">
              <a href="{{HOME}}about.html">Our company</a>
              <a href="{{HOME}}about.html#approach">How we work</a>
            </div>
          </div>
          <div class="nav-group">
            <a class="nav-link nav-link--has-sub" href="{{HOME}}pouches/index.html">Flexible pouches</a>
            <div class="nav-panel nav-panel--wide" role="region" aria-label="Pouch formats">
              <a href="{{HOME}}pouches/three-side-seal.html">3 side seal pouch</a>
              <a href="{{HOME}}pouches/centre-seal.html">Centre seal pouch</a>
              <a href="{{HOME}}pouches/stand-up.html">Stand-up pouch</a>
              <a href="{{HOME}}pouches/shaped-pouch.html">Shaped pouch</a>
              <a href="{{HOME}}pouches/four-side-seal.html">4 side seal pouch</a>
              <a href="{{HOME}}pouches/side-gusset.html">Side gusset pouch</a>
              <a href="{{HOME}}pouches/spout.html">Spout pouch</a>
              <a href="{{HOME}}pouches/retort.html">Retort pouch</a>
              <a href="{{HOME}}pouches/flat-bottom.html">Flat bottom pouch</a>
              <a href="{{HOME}}pouches/index.html">View all formats</a>
            </div>
          </div>
          <div class="nav-group">
            <a class="nav-link nav-link--has-sub" href="{{HOME}}index.html#solutions">Solutions</a>
            <div class="nav-panel" role="region" aria-label="Solutions menu">
              <a href="{{HOME}}index.html#solutions">All solutions</a>
              <a href="{{HOME}}index.html#gravure">Gravure printed pouches</a>
              <a href="{{HOME}}index.html#digital">Digital printed pouches</a>
              <a href="{{HOME}}index.html#specialty">Specialty packaging</a>
            </div>
          </div>
          <div class="nav-group">
            <a class="nav-link nav-link--has-sub" href="{{HOME}}industries.html">Industries</a>
            <div class="nav-panel nav-panel--wide" role="region" aria-label="Industries menu">
              <a href="{{HOME}}industries.html#processed-food">Processed food</a>
              <a href="{{HOME}}industries.html#tea-coffee">Tea &amp; coffee</a>
              <a href="{{HOME}}industries.html#household">Household &amp; garden</a>
              <a href="{{HOME}}industries.html#pet-food">Pet food</a>
              <a href="{{HOME}}industries.html#liquid-food">Liquid food</a>
              <a href="{{HOME}}industries.html#personal-care">Health &amp; personal care</a>
              <a href="{{HOME}}industries.html#beverages">Beverages</a>
              <a href="{{HOME}}industries.html#medical">Medical &amp; pharmaceuticals</a>
            </div>
          </div>
          <a class="nav-link" href="{{HOME}}gallery.html">Gallery</a>
          <a class="nav-link" href="{{HOME}}contact.html">Contact</a>
        </nav>
        <a class="header-cta" href="{{HOME}}contact.html">Enquire now</a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          <span class="sr-only">Toggle navigation</span>
          <span></span><span></span><span></span>
        </button>
      </header>
    </div>`;

const footerRoot = `<footer class="site-footer site-footer--columns">
      <div>
        <a class="brand footer-brand" href="{{HOME}}index.html" aria-label="Uniflex Packaging Solutions home">
          <span class="brand-mark">
            <img src="{{IMG}}brand/uniflex-logo-clean-4k.png" width="3840" height="1207" alt="Uniflex Packaging Solutions" loading="lazy" decoding="async" />
          </span>
        </a>
        <p>Custom flexible packaging for ambitious brands — from pouches and rolls to labels and specialty finishes.</p>
      </div>
      <div class="footer-col">
        <h3>Flexible pouches</h3>
        <ul>
          <li><a href="{{HOME}}pouches/stand-up.html">Stand-up pouch</a></li>
          <li><a href="{{HOME}}pouches/spout.html">Spout pouch</a></li>
          <li><a href="{{HOME}}pouches/flat-bottom.html">Flat bottom pouch</a></li>
          <li><a href="{{HOME}}pouches/index.html">All formats</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Company</h3>
        <ul>
          <li><a href="{{HOME}}about.html">About us</a></li>
          <li><a href="{{HOME}}gallery.html">Gallery</a></li>
          <li><a href="{{HOME}}industries.html">Industries</a></li>
          <li><a href="{{HOME}}privacy.html">Privacy policy</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Contact</h3>
        <ul>
          <li><a href="{{HOME}}contact.html">Enquire now</a></li>
          <li><a href="tel:+910000000000">+91 00000 00000</a></li>
          <li><a href="mailto:info@uniflexpackagingsolutions.com">Email us</a></li>
        </ul>
      </div>
      <p class="copyright">&copy; <span id="year"></span> Uniflex Packaging Solutions. All rights reserved.</p>
    </footer>
    <script src="{{JS}}script.js?v=header-tabs-active-20260511"></script>
  </body>
</html>`;

function fill(tpl, vars) {
  let out = tpl;
  for (const [k, v] of Object.entries(vars)) {
    out = out.split(`{{${k}}}`).join(v);
  }
  return out;
}

function wrapShell({ title, desc, canonical, css, home, img, js, main }) {
  const head = fill(headerRoot, { TITLE: title, DESC: desc, CANONICAL: canonical, CSS: css, HOME: home, IMG: img });
  const foot = fill(footerRoot, { HOME: home, IMG: img, JS: js });
  return `${head}

    <main id="main-content">
${main}
    </main>

${foot}`;
}

const base = "https://ops-engine.github.io/uniflexpackagingsolutions";

const contactForm = `      <section class="section contact-section">
        <div class="contact-copy">
          <p class="eyebrow">Need advice?</p>
          <h2>Get in touch with our packaging experts</h2>
          <p>
            Share your pouch type, industry, phone number, and budget range. We will help
            identify a practical packaging route for your product.
          </p>
          <div class="contact-card">
            <strong>Uniflex Packaging Solutions</strong>
            <a href="mailto:info@uniflexpackagingsolutions.com">info@uniflexpackagingsolutions.com</a>
            <a href="tel:+910000000000">+91 00000 00000</a>
            <span>Serving brands across India</span>
          </div>
        </div>
        <form class="quote-form" name="packaging-inquiry" action="mailto:info@uniflexpackagingsolutions.com" method="post" enctype="text/plain">
          <label>
            Choose your packaging option
            <select name="packaging" required>
              <option value="">Please select</option>
              <option>3 Side Seal Pouch</option>
              <option>Centre Seal Pouch</option>
              <option>Stand-Up Pouch</option>
              <option>Shaped Pouch</option>
              <option>4 Side Seal Pouch</option>
              <option>Side Gusset Pouch</option>
              <option>Retort Grade Pouch</option>
              <option>Vacuum Pouch</option>
              <option>Spout Pouch</option>
              <option>Flat Bottom Pouch</option>
              <option>Shrink Sleeve Labels</option>
              <option>Laminated Roll</option>
            </select>
          </label>
          <label>
            Select your industry
            <select name="industry" required>
              <option value="">Please select</option>
              <option>Processed Food</option>
              <option>Tea &amp; Coffee</option>
              <option>Household &amp; Garden</option>
              <option>Frozen Food</option>
              <option>Beverages</option>
              <option>Health &amp; Personal Care</option>
              <option>Liquid Food</option>
              <option>Pet Food</option>
              <option>Pharmaceutical &amp; Medical</option>
              <option>Others</option>
            </select>
          </label>
          <label>
            Phone
            <input name="phone" type="tel" placeholder="+91 98765 43210" required />
          </label>
          <label>
            Minimum investment
            <select name="investment" required>
              <option value="">Please select</option>
              <option>50,000 - 1 Lakh</option>
              <option>1 Lakh - 2 Lakh</option>
              <option>2 Lakh - 4 Lakh</option>
              <option>4 Lakh - 10 Lakh</option>
              <option>10 Lakh and Above</option>
            </select>
          </label>
          <label class="honeypot" aria-hidden="true">
            If you are human, leave this field blank.
            <input name="website" tabindex="-1" autocomplete="off" />
          </label>
          <button class="button button-primary" type="submit">Submit inquiry</button>
          <p class="form-note">By submitting, you agree to be contacted about your packaging requirement.</p>
        </form>
      </section>`;

const pages = [
  {
    file: "about.html",
    title: "About Us | Uniflex Packaging Solutions",
    desc: "Learn how Uniflex Packaging Solutions supports brands with gravure and digital flexible packaging, rolls, and labels.",
    canonical: `${base}/about.html`,
    main: `      <div class="page-hero page-hero--compact">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a> · About</nav>
        <h1>About Uniflex Packaging Solutions</h1>
        <p class="hero-text">We combine material science, print quality, and practical programme management so your packaging performs on shelf and on the filling line.</p>
      </div>
      <div class="layout-page prose">
        <h2>Who we are</h2>
        <p>
          Uniflex partners with growing consumer brands across food, beverage, personal care, and adjacent categories.
          Our focus is dependable barrier performance, sharp artwork reproduction, and packaging formats that suit your scale—whether you are validating a pilot SKU or scaling bulk production.
        </p>
        <h2 id="approach">How we work</h2>
        <p>
          We start with your product, distribution environment, and filling equipment. From there we shortlist laminate structures,
          recommend gravure or digital print routes, and align features such as zippers, spouts, or tear notches with your operations team.
        </p>
        <p class="page-actions">
          <a class="button button-primary" href="contact.html">Talk to our team</a>
          <a class="button button-secondary" href="pouches/index.html">Explore pouches</a>
        </p>
      </div>`,
  },
  {
    file: "contact.html",
    title: "Contact | Uniflex Packaging Solutions",
    desc: "Contact Uniflex Packaging Solutions for flexible pouch, roll stock, and label enquiries.",
    canonical: `${base}/contact.html`,
    main: `      <div class="page-hero page-hero--compact">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a> · Contact</nav>
        <h1>Contact &amp; enquiries</h1>
        <p class="hero-text">Tell us about your product and timeline—we will respond with practical packaging options.</p>
      </div>
      ${contactForm}`,
  },
  {
    file: "gallery.html",
    title: "Gallery | Uniflex Packaging Solutions",
    desc: "Browse Uniflex flexible pouch formats and industry applications. Request approved project photography and samples via our contact page.",
    canonical: `${base}/gallery.html`,
    main: `      <div class="page-hero page-hero--compact">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a> · Gallery</nav>
        <h1>Gallery</h1>
        <p class="hero-text">
          A live showcase of flexible pouch applications, FMCG packaging, refill packs, sachets, and retail-ready
          printed formats. These examples now use the image set you uploaded.
        </p>
      </div>
      <div class="layout-page section" style="padding-top: 0">
        <p class="gallery-intro">
          Explore product categories across food, sweets, incense, household liquids, batter packs, and specialty
          consumer formats. Each image highlights a practical flexible packaging application.
        </p>
        <div class="gallery-grid">
          <figure class="gallery-item">
            <img src="images/gallery/gallery-01-cheese-slices.png" width="864" height="864" alt="Cheese slices flexible pack with product styling." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Cheese slices pouch</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-02-incense-box.png" width="768" height="768" alt="Black Stone incense carton packaging in a lifestyle setup." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Incense carton pack</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-03-wheat-flour.png" width="768" height="768" alt="Wheat flour flexible pack with surrounding product styling." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Wheat flour retail pouch</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-04-incense-pouch.png" width="768" height="768" alt="Black special incense pouch photographed with candles and incense sticks." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Incense pouch format</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-05-figs-pack.png" width="768" height="768" alt="Dried figs pouch photographed with fresh and dried figs." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Dried figs stand-up pouch</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-06-sohan-papdi.png" width="768" height="768" alt="Sohan Papdi printed pouch with sweets in background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Sohan Papdi sweet pack</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-07-incense-carton.png" width="768" height="768" alt="Agarbatti carton packaging displayed in a product scene." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Agarbatti carton box</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-08-handwash-spout.png" width="768" height="768" alt="Handwash refill spout pouch photographed in a bathroom setting." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Handwash refill spout pouch</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-09-idly-dosa-pouch.png" width="500" height="500" alt="Idly and dosa batter stand-up pouch on a clean background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Batter stand-up pouch</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-10-payasam-pouch.png" width="500" height="500" alt="Vermicelli payasam pouch on a studio background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Dessert mix pouch</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-11-jaggery-pouch.png" width="500" height="500" alt="Jaggery product pouch on a neutral studio background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Jaggery product pouch</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-12-ginger-garlic-sachet.png" width="500" height="500" alt="Ginger garlic paste sachet shown as a flat flexible pack." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Single-use sachet pack</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-13-snap-clip-pouch-a.png" width="500" height="500" alt="Snap Clip cable clips stand-up pouch on a mockup background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Hardware pouch mockup A</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-16-fitness-pouches.png" width="500" height="500" alt="Fitness product flexible pouches shown as a product set." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Fitness pouch lineup</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-17-brown-sugar-pouch.png" width="500" height="500" alt="Organic brown sugar stand-up pouch on a mockup background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Brown sugar stand-up pouch</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-18-dry-fruits-range.png" width="500" height="500" alt="Three colorful dry fruit pouches displayed together." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Dry fruits range</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-19-natural-idly-dosa.png" width="500" height="500" alt="Natural idly dosa batter pouch on a mockup background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Natural batter pouch</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-20-dry-fruits-lineup.png" width="500" height="500" alt="Three premium dry fruit pouches photographed together." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Dry fruits lineup</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-21-handwash-front-back.png" width="500" height="500" alt="Front and back views of a handwash refill spout pouch." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Handwash spout pouch front &amp; back</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-22-jam-spout-pack.png" width="500" height="500" alt="Fruit jam spout pouch on a blue studio background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Jam spout pack</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-23-windsor-sachet.png" width="500" height="500" alt="Windsor sachet-style pouch on a light background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Sachet pack</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-24-water-bottle.png" width="500" height="500" alt="Packaged bottled water product on a plain background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Bottle label product</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-25-parota-pack.png" width="500" height="500" alt="Frozen parota retail pouch on a plain background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Parota retail pack</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-26-chapathi-pack.png" width="500" height="500" alt="Chapathi packaging pouch on a plain background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Chapathi pack</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-27-batter-pillow-pack.png" width="500" height="500" alt="Idly dosa batter pillow pack on a mockup background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Batter pillow pack</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-28-tofu-pack.png" width="500" height="500" alt="Tofu soya paneer pillow pack on a mockup background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Tofu pack</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-29-soya-chunks-pack.png" width="500" height="500" alt="Soya chunks retail pouch on a plain background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Soya chunks pouch</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-30-mustard-pack-front-back.png" width="500" height="500" alt="Front and back views of a mustard seeds transparent pack." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Mustard pack front &amp; back</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-31-fenugreek-pack-front-back.png" width="500" height="500" alt="Front and back views of a fenugreek seeds transparent pack." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Fenugreek pack front &amp; back</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-35-nandini-snacks-range.png" width="500" height="500" alt="Assorted snack pouches displayed together as a product range." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Snacks range pouches</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-36-ice-candy-range.png" width="500" height="500" alt="Ice candy pouch range with mango, choco bar, and orange variants." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Ice candy pouch range</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-37-pineapple-incense-pack.png" width="500" height="500" alt="Pineapple-shaped incense packaging on a studio mockup background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Pineapple incense pack</figcaption>
          </figure>
        </div>
        <div class="gallery-cta" style="margin-top: 28px">
          <p>
            Need a gallery tailored by product category or pouch type? We can also split these into food, personal care,
            incense, and industrial packaging sections.
          </p>
          <a class="button button-primary" href="contact.html">Contact Uniflex</a>
        </div>
      </div>`,
  },
  {
    file: "privacy.html",
    title: "Privacy Policy | Uniflex Packaging Solutions",
    desc: "Privacy policy for Uniflex Packaging Solutions website visitors.",
    canonical: `${base}/privacy.html`,
    main: `      <div class="page-hero page-hero--compact">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a> · Privacy</nav>
        <h1>Privacy policy</h1>
        <p class="hero-text">How we handle information you submit through this site.</p>
      </div>
      <div class="layout-page prose">
        <p>This static website may collect information you voluntarily provide through email links or forms (processed by your mail client). We use it only to respond to enquiries about packaging services.</p>
        <p>We do not sell personal data. For questions, contact <a href="mailto:info@uniflexpackagingsolutions.com">info@uniflexpackagingsolutions.com</a>.</p>
      </div>`,
  },
];

const industrySections = [
  ["processed-food", "Processed food", "Barrier films for spices, snacks, mixes, and ready meals—with finishes that survive retail handling."],
  ["tea-coffee", "Tea & coffee", "Aroma retention, degassing valves, and premium matte or gloss looks for specialty coffee and tea."],
  ["household", "Household & garden", "Chemical resistance and robust seals for detergents, cleaners, and garden care liquids."],
  ["pet-food", "Pet food", "High-barrier structures for dry kibble, treats, and gravies with convenient consumer formats."],
  ["liquid-food", "Liquid food", "Fitments and seal integrity for sauces, dairy alternatives, and pourable products."],
  ["personal-care", "Health & personal care", "Soft-touch finishes, transparent windows, and compatibility with creams and gels."],
  ["beverages", "Beverages", "Pouches and rolls tuned for filling lines, pasteurisation routes, and shelf clarity."],
  ["medical", "Medical & pharmaceuticals", "Controlled documentation mindset, hygiene-aware materials guidance, and stable supply paths."],
];

const industriesMain = `      <div class="page-hero page-hero--compact">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a> · Industries</nav>
        <h1>Industries we support</h1>
        <p class="hero-text">Flexible packaging solutions aligned to category regulations, shelf life, and consumer expectations.</p>
      </div>
      <div class="layout-page prose">
${industrySections
  .map(
    ([id, title, text]) => `        <section id="${id}" style="margin-bottom:3rem">
          <h2>${title}</h2>
          <p>${text}</p>
          <p><a class="text-link-bold" href="contact.html">Discuss your project →</a></p>
        </section>`,
  )
  .join("\n")}
      </div>`;

pages.push({
  file: "industries.html",
  title: "Industries | Uniflex Packaging Solutions",
  desc: "Flexible packaging for food, beverages, personal care, pet food, pharmaceuticals, and more.",
  canonical: `${base}/industries.html`,
  main: industriesMain,
});

const pouchCatalog = [
  ["three-side-seal.html", "three-side", "3 Side Seal Pouch", "Flat packs with three sealed sides—ideal for sachets and single serves."],
  ["centre-seal.html", "center-seal", "Centre Seal Pouch", "Strong back seal for a clean front face and efficient filling."],
  ["stand-up.html", "stand-up", "Stand-Up Pouch", "Shelf-standing format with optional zipper and window."],
  ["shaped-pouch.html", "shaped", "Shaped Pouch", "Custom silhouettes for campaigns and premium positioning."],
  ["four-side-seal.html", "four-side", "4 Side Seal Pouch", "Uniform seals on all sides for portion packs and vacuum options."],
  ["side-gusset.html", "gusset", "Side Gusset Pouch", "Extra volume for coffee, ingredients, and larger fills."],
  ["spout.html", "spout", "Spout Pouch", "Controlled dispensing for liquids and refills."],
  ["retort.html", "retort", "Retort Pouch", "Thermal processing compatibility for shelf-stable meals."],
  ["flat-bottom.html", "flat-bottom", "Flat Bottom Pouch", "Five-panel presence for premium snacks and specialty foods."],
];

const pouchesIndexMain = `      <div class="page-hero page-hero--compact">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="../index.html">Home</a> · Flexible pouches</nav>
        <h1>Our range of flexible pouches</h1>
        <p class="hero-text">Browse formats, then open a detail page for typical applications—or send specs on the contact page.</p>
      </div>
      <div class="layout-page">
        <div class="pouch-catalog">
${pouchCatalog
  .map(
    ([href, shape, title, desc]) => `          <a href="${href}">
            <span class="pouch-shape ${shape}" style="width:64px;height:76px" aria-hidden="true"></span>
            <h2>${title}</h2>
            <p>${desc}</p>
          </a>`,
  )
  .join("\n")}
        </div>
        <p style="margin-top:2rem"><a class="button button-primary" href="../contact.html">Request a quote</a></p>
      </div>`;

for (const p of pages) {
  const html = wrapShell({
    title: p.title,
    desc: p.desc,
    canonical: p.canonical,
    css: "styles.css?v=header-tabs-active-20260511",
    home: "",
    img: "images/",
    js: "",
    main: p.main,
  });
  fs.writeFileSync(path.join(root, p.file), html);
}

const pouchesIndexHtml = wrapShell({
  title: "Flexible Pouches | Uniflex Packaging Solutions",
  desc: "Browse stand-up, spout, flat bottom, retort, and other flexible pouch formats from Uniflex.",
  canonical: `${base}/pouches/index.html`,
  css: "../styles.css?v=header-tabs-active-20260511",
  home: "../",
  img: "../images/",
  js: "../",
  main: pouchesIndexMain,
});

fs.mkdirSync(path.join(root, "pouches"), { recursive: true });
fs.writeFileSync(path.join(root, "pouches", "index.html"), pouchesIndexHtml);

console.log("Wrote", pages.length + 1, "static pages (including pouches/index.html).");
