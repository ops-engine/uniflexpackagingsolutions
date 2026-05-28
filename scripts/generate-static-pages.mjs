import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_URL } from "./site-config.mjs";

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
    <link rel="icon" type="image/png" href="{{HOME}}images/brand/favicon.png" />
    <link rel="stylesheet" href="{{CSS}}" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
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
              <div class="nav-subgroup" role="group" aria-label="Industries links">
                <a class="nav-subgroup__trigger" href="{{HOME}}industries.html">Industries</a>
                <div class="nav-subgroup__panel">
                  <a href="{{HOME}}industries.html#processed-food"><i class="ri-restaurant-2-line nav-industry-icon" aria-hidden="true"></i><span>Processed food</span></a>
                  <a href="{{HOME}}industries.html#tea-coffee"><i class="ri-cup-line nav-industry-icon" aria-hidden="true"></i><span>Tea &amp; coffee</span></a>
                  <a href="{{HOME}}industries.html#household"><i class="ri-home-gear-line nav-industry-icon" aria-hidden="true"></i><span>Household &amp; garden</span></a>
                  <a href="{{HOME}}industries.html#pet-food"><i class="ri-footprint-line nav-industry-icon" aria-hidden="true"></i><span>Pet food</span></a>
                  <a href="{{HOME}}industries.html#liquid-food"><i class="ri-goblet-line nav-industry-icon" aria-hidden="true"></i><span>Liquid food</span></a>
                  <a href="{{HOME}}industries.html#personal-care"><i class="ri-hand-sanitizer-line nav-industry-icon" aria-hidden="true"></i><span>Health &amp; personal care</span></a>
                  <a href="{{HOME}}industries.html#beverages"><i class="ri-cup-line nav-industry-icon" aria-hidden="true"></i><span>Beverages</span></a>
                  <a href="{{HOME}}industries.html#medical"><i class="ri-medicine-bottle-line nav-industry-icon" aria-hidden="true"></i><span>Medical &amp; pharmaceuticals</span></a>
                </div>
              </div>
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
            <a class="nav-link nav-link--has-sub" href="{{HOME}}hologram-sticker.html">Hologram Security Stickers</a>
            <div class="nav-panel nav-panel--wide" role="region" aria-label="Hologram sticker formats">
              <a href="{{HOME}}hologram/hologram-hot-stamping-foil.html">Hologram Hot Stamping Foil</a>
              <a href="{{HOME}}hologram/qr-code-hologram-stickers.html">QR Code Hologram Stickers</a>
              <a href="{{HOME}}hologram/customized-text-hologram.html">Customized Text Hologram</a>
              <a href="{{HOME}}hologram/laser-numbered-holograms.html">Laser Numbered Holograms</a>
              <a href="{{HOME}}hologram/holographic-pouches.html">Holographic Pouches</a>
              <a href="{{HOME}}hologram/hologram-paper-label.html">Holographic Paper Labels</a>
              <a href="{{HOME}}hologram/holographic-security-tapes.html">Holographic Security Tapes</a>
              <a href="{{HOME}}hologram/hologram-shrink-sleeves.html">Hologram Shrink Sleeves</a>
              <a href="{{HOME}}hologram/hologram-coupons.html">Hologram Coupons</a>
              <a href="{{HOME}}hologram/id-overlay-holograms.html">ID Overlay Holograms</a>
              <a href="{{HOME}}hologram/generic-hologram-stickers.html">Generic Hologram Stickers</a>
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
      <section class="newsletter footer-newsletter" aria-labelledby="footer-newsletter-title">
        <div>
          <p class="eyebrow">Stay updated</p>
          <h2 id="footer-newsletter-title">Subscribe to packaging updates</h2>
          <p>Receive product updates, packaging ideas, and Uniflex news.</p>
        </div>
        <form class="newsletter-form">
          <label class="sr-only" for="footer-newsletter-email">Email address</label>
          <input id="footer-newsletter-email" type="email" placeholder="Enter your email" required />
          <button class="button button-primary" type="submit">Subscribe</button>
        </form>
      </section>
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
          <li><a href="{{HOME}}pouches/three-side-seal.html">3 side seal pouch</a></li>
          <li><a href="{{HOME}}pouches/centre-seal.html">Centre seal pouch</a></li>
          <li><a href="{{HOME}}pouches/stand-up.html">Stand-up pouch</a></li>
          <li><a href="{{HOME}}pouches/shaped-pouch.html">Shaped pouch</a></li>
          <li><a href="{{HOME}}pouches/four-side-seal.html">4 side seal pouch</a></li>
          <li><a href="{{HOME}}pouches/side-gusset.html">Side gusset pouch</a></li>
          <li><a href="{{HOME}}pouches/spout.html">Spout pouch</a></li>
          <li><a href="{{HOME}}pouches/retort.html">Retort pouch</a></li>
          <li><a href="{{HOME}}pouches/flat-bottom.html">Flat bottom pouch</a></li>
          <li><a href="{{HOME}}pouches/index.html">All formats</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Company</h3>
        <ul>
          <li><a href="{{HOME}}about.html">About us</a></li>
          <li><a href="{{HOME}}gallery.html">Gallery</a></li>
          <li><a href="{{HOME}}industries.html"><i class="ri-apps-2-line nav-industry-icon" aria-hidden="true"></i><span>Industries</span></a></li>
          <li><a href="{{HOME}}privacy.html">Privacy policy</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Contact</h3>
        <ul>
          <li><a href="{{HOME}}contact.html">Enquire now</a></li>
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
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
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

const base = SITE_URL;

const contactForm = `      <section class="section contact-page">
        <div class="layout-page contact-page__grid">
          <div class="contact-page__info">
            <nav class="breadcrumb contact-page__breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a> · Contact</nav>
            <h1 class="eyebrow section-label">Contact us</h1>
            <ul class="contact-page__details">
              <li>
                <a class="contact-page__detail" href="https://maps.app.goo.gl/bsWXXG1VSUHhUwGw6" target="_blank" rel="noopener noreferrer">
                  <span class="contact-page__icon" aria-hidden="true"><i class="ri-map-pin-2-fill"></i></span>
                  <span>Survey No. 352, Ground Floor, Ramakuppam Main Road, Kyasamballi Village, KGF Taluk, Kolar, Karnataka 563121</span>
                </a>
              </li>
              <li>
                <a class="contact-page__detail" href="https://maps.app.goo.gl/u8Ys68yC1oGph1A27" target="_blank" rel="noopener noreferrer">
                  <span class="contact-page__icon" aria-hidden="true"><i class="ri-map-pin-2-fill"></i></span>
                  <span>Survey No. 61/1, Byappanahalli, Bidarahalli Hobli, Virgonagar Post, Bengaluru, Bengaluru Urban, Karnataka 560049</span>
                </a>
              </li>
              <li>
                <a class="contact-page__detail" href="tel:+919686960545">
                  <span class="contact-page__icon" aria-hidden="true"><i class="ri-phone-fill"></i></span>
                  <span>+91 96869 60545</span>
                </a>
              </li>
              <li>
                <a class="contact-page__detail" href="mailto:uniflexpackagingsollutions@gmail.com">
                  <span class="contact-page__icon" aria-hidden="true"><i class="ri-mail-fill"></i></span>
                  <span>uniflexpackagingsollutions@gmail.com</span>
                </a>
              </li>
            </ul>
            <div class="contact-page__block">
              <h2 class="eyebrow section-label">Find us</h2>
              <div class="find-us__map find-us__map--single contact-page__map">
                <div
                  class="find-us__leaflet"
                  data-find-us-map
                  data-map-a-lat="12.955057"
                  data-map-a-lng="78.345284"
                  data-map-a-title="Kolar location"
                  data-map-a-address="Survey No. 352, Ground Floor, Ramakuppam Main Road, Kyasamballi Village, KGF Taluk, Kolar, Karnataka 563121"
                  data-map-b-lat="13.072494"
                  data-map-b-lng="77.721146"
                  data-map-b-title="Bengaluru location"
                  data-map-b-address="Survey No. 61/1, Byappanahalli, Bidarahalli Hobli, Virgonagar Post, Bengaluru, Bengaluru Urban, Karnataka 560049"
                  aria-label="Map with Kolar and Bengaluru pinned locations"
                ></div>
              </div>
            </div>
            <div class="contact-page__block">
              <h2 class="eyebrow section-label">Follow us</h2>
              <div class="contact-page__social" aria-label="Social media">
                <a class="contact-page__social-link" href="#" aria-label="Facebook"><i class="ri-facebook-fill" aria-hidden="true"></i></a>
                <a class="contact-page__social-link" href="#" aria-label="Twitter"><i class="ri-twitter-x-fill" aria-hidden="true"></i></a>
                <a class="contact-page__social-link" href="#" aria-label="YouTube"><i class="ri-youtube-fill" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div class="contact-page__form-wrap">
            <form class="contact-page__form quote-form" name="packaging-inquiry" action="mailto:uniflexpackagingsollutions@gmail.com" method="post" enctype="text/plain">
              <div class="contact-page__form-brand">
                <img src="images/brand/uniflex-logo-clean-4k.png" width="3840" height="1207" alt="Uniflex Packaging Solutions" loading="lazy" decoding="async" />
              </div>
              <p class="eyebrow contact-page__form-eyebrow">Send a message</p>
              <h2 class="contact-page__form-heading">Tell us about your packaging needs</h2>
              <label>
                Name <span class="required" aria-hidden="true">*</span>
                <input name="name" type="text" autocomplete="name" required />
              </label>
              <label>
                Email <span class="required" aria-hidden="true">*</span>
                <input name="email" type="email" autocomplete="email" required />
              </label>
              <label>
                Phone <span class="required" aria-hidden="true">*</span>
                <input name="phone" type="tel" autocomplete="tel" placeholder="+91 98765 43210" required />
              </label>
              <label>
                Subject <span class="required" aria-hidden="true">*</span>
                <input name="subject" type="text" required />
              </label>
              <label class="honeypot" aria-hidden="true">
                If you are human, leave this field blank.
                <input name="website" tabindex="-1" autocomplete="off" />
              </label>
              <button class="button button-primary contact-page__submit" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>`;

const pages = [
  {
    file: "about.html",
    title: "About Us | Uniflex Packaging Solutions",
    desc: "Learn how Uniflex Packaging Solutions supports brands with gravure and digital flexible packaging, rolls, and labels.",
    canonical: `${base}/about.html`,
    main: `      <div class="page-hero page-hero--compact">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a> · About</nav>
        <h1 class="eyebrow section-label">About us</h1>
        <p class="hero-text">We combine material science, print quality, and practical programme management so your packaging performs on shelf and on the filling line.</p>
      </div>
      <div class="layout-page">
        <div class="about-overview-grid">
          <div class="prose">
            <h2 class="eyebrow section-label">Who we are</h2>
            <p>
              Uniflex partners with growing consumer brands across food, beverage, personal care, and adjacent categories.
              Our focus is dependable barrier performance, sharp artwork reproduction, and packaging formats that suit your scale—whether you are validating a pilot SKU or scaling bulk production.
            </p>
            <section class="about-leadership" aria-label="Leadership and contacts">
              <h2 class="eyebrow section-label about-leadership__heading">
                <span class="about-leadership__heading-icon" aria-hidden="true"><i class="ri-shield-star-line"></i></span>
                <span>Leadership</span>
              </h2>
              <ul class="about-leadership__list">
                <li>
                  <span class="about-leadership__icon about-leadership__icon--owner" aria-hidden="true"><i class="ri-award-line"></i></span>
                  <div>
                    <p class="about-leadership__name">Uday Reddy</p>
                    <p class="about-leadership__meta">Designation: Proprietor</p>
                  </div>
                </li>
                <li>
                  <span class="about-leadership__icon about-leadership__icon--gm" aria-hidden="true"><i class="ri-briefcase-4-line"></i></span>
                  <div>
                    <p class="about-leadership__name">Gopi N</p>
                    <p class="about-leadership__meta">Designation: GM</p>
                  </div>
                </li>
                <li>
                  <span class="about-leadership__icon about-leadership__icon--email" aria-hidden="true"><i class="ri-mail-open-line"></i></span>
                  <a href="mailto:uniflexpackagingsollutions@gmail.com">uniflexpackagingsollutions@gmail.com</a>
                </li>
                <li>
                  <span class="about-leadership__icon about-leadership__icon--phone" aria-hidden="true"><i class="ri-phone-fill"></i></span>
                  <a href="tel:+919686960545">+91 96869 60545</a>
                </li>
              </ul>
            </section>
            <h2 id="approach" class="eyebrow section-label about-approach-title">How we work</h2>
            <p>
              We start with your product, distribution environment, and filling equipment. From there we shortlist laminate structures,
              recommend gravure or digital print routes, and align features such as zippers, spouts, or tear notches with your operations team.
            </p>
            <p class="page-actions">
              <a class="button button-primary" href="contact.html">Talk to our team</a>
              <a class="button button-secondary" href="pouches/index.html">Explore pouches</a>
            </p>
          </div>
          <section class="find-us find-us--panel" aria-labelledby="find-us-title">
            <h2 id="find-us-title" class="eyebrow section-label">Find us</h2>
            <div class="find-us--right">
              <ul class="location-list">
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
              <div class="find-us__map find-us__map--single">
                <div
                  class="find-us__leaflet"
                  data-find-us-map
                  data-map-a-lat="12.955057"
                  data-map-a-lng="78.345284"
                  data-map-a-title="Kolar location"
                  data-map-a-address="Survey No. 352, Ground Floor, Ramakuppam Main Road, Kyasamballi Village, KGF Taluk, Kolar, Karnataka 563121"
                  data-map-b-lat="13.072494"
                  data-map-b-lng="77.721146"
                  data-map-b-title="Bengaluru location"
                  data-map-b-address="Survey No. 61/1, Byappanahalli, Bidarahalli Hobli, Virgonagar Post, Bengaluru, Bengaluru Urban, Karnataka 560049"
                  aria-label="Map with Kolar and Bengaluru pinned locations"
                ></div>
              </div>
            </div>
          </section>
        </div>

        <section class="about-machinery" aria-labelledby="about-machinery-title">
          <div class="section-heading">
            <h2 id="about-machinery-title" class="eyebrow section-label">Our machinery</h2>
            <p>Each line is tuned for print precision, laminate consistency, and stable converting throughput.</p>
          </div>
          <div class="about-machinery__grid">
            <figure class="about-machinery__card">
              <img class="about-machinery__img" src="images/about/machinery-01-extrusion-4k.png" srcset="images/about/machinery-01-extrusion.png 1024w, images/about/machinery-01-extrusion-4k.png 3840w" sizes="(min-width: 1200px) 23vw, (min-width: 760px) 48vw, 100vw" width="3840" height="3772" alt="Extrusion machine line." loading="lazy" decoding="async" />
              <figcaption>Extrusion</figcaption>
            </figure>
            <figure class="about-machinery__card">
              <img class="about-machinery__img" src="images/about/machinery-02-stand-up-pouching-a-4k.png" srcset="images/about/machinery-02-stand-up-pouching-a.png 1000w, images/about/machinery-02-stand-up-pouching-a-4k.png 3840w" sizes="(min-width: 1200px) 23vw, (min-width: 760px) 48vw, 100vw" width="3840" height="2561" alt="Stand up pouching machine line." loading="lazy" decoding="async" />
              <figcaption>Stand up pouching machine</figcaption>
            </figure>
            <figure class="about-machinery__card">
              <img class="about-machinery__img" src="images/about/machinery-03-stand-up-pouching-b-4k.png" srcset="images/about/machinery-03-stand-up-pouching-b.png 1000w, images/about/machinery-03-stand-up-pouching-b-4k.png 3840w" sizes="(min-width: 1200px) 23vw, (min-width: 760px) 48vw, 100vw" width="3840" height="2561" alt="Stand up pouching machine setup." loading="lazy" decoding="async" />
              <figcaption>Stand up pouching machine</figcaption>
            </figure>
            <figure class="about-machinery__card">
              <img class="about-machinery__img" src="images/about/machinery-04-stand-up-zipper-pouch-machine-4k.png" srcset="images/about/machinery-04-stand-up-zipper-pouch-machine.png 1024w, images/about/machinery-04-stand-up-zipper-pouch-machine-4k.png 3840w" sizes="(min-width: 1200px) 23vw, (min-width: 760px) 48vw, 100vw" width="3840" height="2876" alt="Stand up zipper pouch machine." loading="lazy" decoding="async" />
              <figcaption>Stand up zipper pouch machine</figcaption>
            </figure>
            <figure class="about-machinery__card">
              <img class="about-machinery__img" src="images/about/machinery-05-lamination-machine-4k.png" srcset="images/about/machinery-05-lamination-machine.png 1024w, images/about/machinery-05-lamination-machine-4k.png 3840w" sizes="(min-width: 1200px) 23vw, (min-width: 760px) 48vw, 100vw" width="3840" height="2587" alt="Lamination machine on production floor." loading="lazy" decoding="async" />
              <figcaption>Lamination machine</figcaption>
            </figure>
            <figure class="about-machinery__card">
              <img class="about-machinery__img" src="images/about/machinery-06-8-color-rotogravure-printing-machine-4k.png" srcset="images/about/machinery-06-8-color-rotogravure-printing-machine.png 500w, images/about/machinery-06-8-color-rotogravure-printing-machine-4k.png 3840w" sizes="(min-width: 1200px) 23vw, (min-width: 760px) 48vw, 100vw" width="3840" height="4900" alt="8 color rotogravure printing machine." loading="lazy" decoding="async" />
              <figcaption>8 color rotogravure printing machine</figcaption>
            </figure>
            <figure class="about-machinery__card">
              <img class="about-machinery__img" src="images/about/machinery-07-multilayer-film-extrusion-machine-4k.png" srcset="images/about/machinery-07-multilayer-film-extrusion-machine.png 767w, images/about/machinery-07-multilayer-film-extrusion-machine-4k.png 3840w" sizes="(min-width: 1200px) 23vw, (min-width: 760px) 48vw, 100vw" width="3840" height="5126" alt="Multilayer film extrusion machine." loading="lazy" decoding="async" />
              <figcaption>Multilayer film extrusion machine</figcaption>
            </figure>
            <figure class="about-machinery__card">
              <img class="about-machinery__img" src="images/about/machinery-08-slitting-machine-4k.png" srcset="images/about/machinery-08-slitting-machine.png 1024w, images/about/machinery-08-slitting-machine-4k.png 3840w" sizes="(min-width: 1200px) 23vw, (min-width: 760px) 48vw, 100vw" width="3840" height="2572" alt="Slitting machine with roll handling." loading="lazy" decoding="async" />
              <figcaption>Slitting machine</figcaption>
            </figure>
            <figure class="about-machinery__card">
              <img class="about-machinery__img" src="images/about/machinery-09-pouch-making-machines-4k.png" srcset="images/about/machinery-09-pouch-making-machines.png 1000w, images/about/machinery-09-pouch-making-machines-4k.png 3840w" sizes="(min-width: 1200px) 23vw, (min-width: 760px) 48vw, 100vw" width="3840" height="2561" alt="Pouch making machines in production line." loading="lazy" decoding="async" />
              <figcaption>Pouch making machines</figcaption>
            </figure>
          </div>
        </section>
      </div>`,
  },
  {
    file: "contact.html",
    title: "Contact | Uniflex Packaging Solutions",
    desc: "Contact Uniflex Packaging Solutions for flexible pouch, roll stock, and label enquiries.",
    canonical: `${base}/contact.html`,
    main: contactForm,
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
            <img src="images/gallery/gallery-01-cheese-slices.png" width="864" height="864" alt="Tamper-evident security tape roll with repeating red labels." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Tamper-evident security tape roll</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-02-incense-box.png" width="768" height="768" alt="Teju garam masala retail pouch in product mockup style." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Garam masala printed pouch</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-03-wheat-flour.png" width="768" height="768" alt="Printed label roll with silver and red panel artwork." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Printed label roll</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-04-incense-pouch.png" width="768" height="768" alt="Slim snack bar flexible stick pack mockup." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Snack bar stick pack</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-05-figs-pack.png" width="768" height="768" alt="Nandini khova laminated retail pouch." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Khova laminated pouch</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-06-sohan-papdi.png" width="768" height="768" alt="Nandini cookies branded flexible pouch." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Cookies flexible pouch</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-07-incense-carton.png" width="768" height="768" alt="Masala kodubale snack pouch with white and magenta design." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Masala kodubale snack pouch</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="images/gallery/gallery-08-handwash-spout.png" width="768" height="768" alt="Rasam powder stand-up pouch with food-style background." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Rasam powder stand-up pouch</figcaption>
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
          <figure class="gallery-item">
            <img src="images/gallery/gallery-38-sunflower-oil-bottle.png" width="500" height="500" alt="Sunflower oil bottle product shot with sunflower backdrop." loading="lazy" decoding="async" />
            <figcaption class="gallery-caption">Sunflower oil bottle packshot</figcaption>
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
        <p>We do not sell personal data. For questions, contact <a href="mailto:uniflexpackagingsollutions@gmail.com">uniflexpackagingsollutions@gmail.com</a>.</p>
      </div>`,
  },
  {
    file: "hologram-sticker.html",
    title: "Hologram Sticker Solutions | Uniflex Packaging Solutions",
    desc: "Explore custom hologram sticker and security label formats for anti-counterfeit protection and stronger brand authentication.",
    canonical: `${base}/hologram-sticker.html`,
    main: `      <div class="page-hero page-hero--compact">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a> · Hologram sticker</nav>
        <h1>Hologram sticker security solutions</h1>
        <p class="hero-text">Brand-focused hologram formats designed for anti-counterfeit control, product traceability, and premium shelf impact.</p>
      </div>
      <div class="layout-page">
        <section class="holo-showcase">
          <div class="holo-showcase__copy">
            <p class="holo-showcase__eyebrow">Best Hologram Sticker Manufacturer</p>
            <h2>Stop Counterfeits Before They Damage Your Brand</h2>
            <p>
              Advanced hologram security solutions designed to protect products, prevent duplication, and build customer trust.
              Secure your packaging with next-generation anti-counterfeit technology.
            </p>
            <div class="page-actions">
              <a class="button button-primary" href="contact.html">Enquire now</a>
              <a class="button button-secondary" href="contact.html">Get instant quote</a>
            </div>
          </div>
          <div class="holo-showcase__visual">
            <div class="holo-columns" aria-hidden="true">
              <div class="holo-column holo-column--up">
                <div class="holo-column__track">
                  <img src="images/hologram/solutions/holo-01-hot-stamping-foil.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-02-qr-code-stickers.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-03-customized-text.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-01-hot-stamping-foil.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-02-qr-code-stickers.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-03-customized-text.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                </div>
              </div>
              <div class="holo-column holo-column--down">
                <div class="holo-column__track">
                  <img src="images/hologram/solutions/holo-04-laser-numbered.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-05-holographic-pouches.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-06-holographic-paper-labels.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-04-laser-numbered.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-05-holographic-pouches.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-06-holographic-paper-labels.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                </div>
              </div>
              <div class="holo-column holo-column--up">
                <div class="holo-column__track">
                  <img src="images/hologram/solutions/holo-07-holographic-security-tapes.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-08-shrink-sleeves.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-09-hologram-coupons.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-07-holographic-security-tapes.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-08-shrink-sleeves.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-09-hologram-coupons.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                </div>
              </div>
              <div class="holo-column holo-column--down">
                <div class="holo-column__track">
                  <img src="images/hologram/solutions/holo-10-id-overlay.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-11-generic-stickers.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-01-hot-stamping-foil.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-10-id-overlay.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-11-generic-stickers.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                  <img src="images/hologram/solutions/holo-01-hot-stamping-foil.png" width="1024" height="1024" alt="" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="holo-section-intro prose">
          <h2>Custom Security Hologram Solution</h2>
          <p>
            We offer a broad portfolio of custom hologram security formats, from tamper-evident labels to
            cost-optimized authentication stickers. Each solution combines visual impact with anti-counterfeit control
            to help protect your products, reinforce authenticity, and improve brand trust in the market.
          </p>
        </section>
        <section class="holo-listing" aria-labelledby="holo-listing-title">
          <h2 id="holo-listing-title">Advanced security solutions</h2>
          <div class="holo-solution-grid">
            <article class="holo-solution-card"><img src="images/hologram/solutions/holo-01-hot-stamping-foil.png" width="1024" height="1024" alt="Hologram Hot Stamping Foil sample." loading="lazy" decoding="async" /><h3>Hologram Hot Stamping Foil</h3><p>High-security foil marks applied with heat and pressure for permanent anti-counterfeit branding.</p><a class="text-link-bold" href="hologram/hologram-hot-stamping-foil.html">Explore</a></article>
            <article class="holo-solution-card"><img src="images/hologram/solutions/holo-02-qr-code-stickers.png" width="1024" height="1024" alt="QR Code Hologram Stickers sample." loading="lazy" decoding="async" /><h3>QR Code Hologram Stickers</h3><p>Smart labels enabling secure scan-and-verify authentication through integrated QR workflows.</p><a class="text-link-bold" href="hologram/qr-code-hologram-stickers.html">Explore</a></article>
            <article class="holo-solution-card"><img src="images/hologram/solutions/holo-03-customized-text.png" width="1024" height="1024" alt="Customized Text Hologram sample." loading="lazy" decoding="async" /><h3>Customized Text Hologram</h3><p>Personalized hologram labels with custom text and logo identity for stronger brand protection.</p><a class="text-link-bold" href="hologram/customized-text-hologram.html">Explore</a></article>
            <article class="holo-solution-card"><img src="images/hologram/solutions/holo-04-laser-numbered.png" width="1024" height="1024" alt="Laser Numbered Holograms sample." loading="lazy" decoding="async" /><h3>Laser Numbered Holograms</h3><p>Unique serialized holograms for product tracking, verification, and secure distribution control.</p><a class="text-link-bold" href="hologram/laser-numbered-holograms.html">Explore</a></article>
            <article class="holo-solution-card"><img src="images/hologram/solutions/holo-05-holographic-pouches.png" width="1024" height="1024" alt="Holographic Pouches sample." loading="lazy" decoding="async" /><h3>Holographic Pouches</h3><p>Flexible holographic pouches that combine premium shelf appeal with authenticity cues.</p><a class="text-link-bold" href="hologram/holographic-pouches.html">Explore</a></article>
            <article class="holo-solution-card"><img src="images/hologram/solutions/holo-06-holographic-paper-labels.png" width="1024" height="1024" alt="Holographic Paper Labels sample." loading="lazy" decoding="async" /><h3>Holographic Paper Labels</h3><p>Eye-catching holographic label stock suited for high-volume branded authentication programs.</p><a class="text-link-bold" href="hologram/hologram-paper-label.html">Explore</a></article>
            <article class="holo-solution-card"><img src="images/hologram/solutions/holo-07-holographic-security-tapes.png" width="1024" height="1024" alt="Holographic Security Tapes sample." loading="lazy" decoding="async" /><h3>Holographic Security Tapes</h3><p>Tamper-evident sealing tapes for cartons and shipments requiring instant breach visibility.</p><a class="text-link-bold" href="hologram/holographic-security-tapes.html">Explore</a></article>
            <article class="holo-solution-card"><img src="images/hologram/solutions/holo-08-shrink-sleeves.png" width="1024" height="1024" alt="Hologram Shrink Sleeves sample." loading="lazy" decoding="async" /><h3>Hologram Shrink Sleeves</h3><p>360-degree holographic sleeves that add premium branding and container-level security.</p><a class="text-link-bold" href="hologram/hologram-shrink-sleeves.html">Explore</a></article>
            <article class="holo-solution-card"><img src="images/hologram/solutions/holo-09-hologram-coupons.png" width="1024" height="1024" alt="Hologram Coupons sample." loading="lazy" decoding="async" /><h3>Hologram Coupons</h3><p>Secure promotional coupons with hologram elements to reduce duplication and misuse.</p><a class="text-link-bold" href="hologram/hologram-coupons.html">Explore</a></article>
            <article class="holo-solution-card"><img src="images/hologram/solutions/holo-10-id-overlay.png" width="1024" height="1024" alt="ID Overlay Holograms sample." loading="lazy" decoding="async" /><h3>ID Overlay Holograms</h3><p>Transparent overlays for identity cards and credentials to prevent forgery and tampering.</p><a class="text-link-bold" href="hologram/id-overlay-holograms.html">Explore</a></article>
            <article class="holo-solution-card"><img src="images/hologram/solutions/holo-11-generic-stickers.png" width="1024" height="1024" alt="Generic Hologram Stickers sample." loading="lazy" decoding="async" /><h3>Generic Hologram Stickers</h3><p>Ready-to-use hologram stickers for quick deployment and cost-effective product authentication.</p><a class="text-link-bold" href="hologram/generic-hologram-stickers.html">Explore</a></article>
          </div>
        </section>

        <p class="page-actions">
          <a class="button button-primary" href="contact.html">Request hologram consultation</a>
          <a class="button button-secondary" href="gallery.html">View packaging gallery</a>
        </p>
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
  ["three-side-seal.html", "../images/pouches/three-side-seal/hero-three-side-seal-uniflex.png", 723, 1024, "3 Side Seal Pouch", "Flat packs with three sealed sides—ideal for sachets and single serves."],
  ["centre-seal.html", "../images/pouches/centre-seal/hero.png", 1131, 1600, "Centre Seal Pouch", "Strong back seal for a clean front face and efficient filling."],
  ["stand-up.html", "../images/pouches/stand-up/stand-up-hero.png", 500, 500, "Stand-Up Pouch", "Shelf-standing format with optional zipper and window."],
  ["shaped-pouch.html", "../images/pouches/shaped-pouch/hero.png", 1131, 1600, "Shaped Pouch", "Custom silhouettes for campaigns and premium positioning."],
  ["four-side-seal.html", "../images/pouches/four-side-seal/hero.png", 1131, 1600, "4 Side Seal Pouch", "Uniform seals on all sides for portion packs and vacuum options."],
  ["side-gusset.html", "../images/pouches/side-gusset/hero.png", 1131, 1600, "Side Gusset Pouch", "Extra volume for coffee, ingredients, and larger fills."],
  ["spout.html", "../images/pouches/spout/hero.png", 1131, 1600, "Spout Pouch", "Controlled dispensing for liquids and refills."],
  ["retort.html", "../images/pouches/retort/hero.png", 1131, 1600, "Retort Pouch", "Thermal processing compatibility for shelf-stable meals."],
  ["flat-bottom.html", "../images/pouches/flat-bottom/hero.png", 1131, 1600, "Flat Bottom Pouch", "Five-panel presence for premium snacks and specialty foods."],
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
    ([href, image, width, height, title, desc]) => `          <a href="${href}">
            <img class="pouch-catalog__thumb" src="${image}" width="${width}" height="${height}" alt="${title}" loading="lazy" decoding="async" />
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
