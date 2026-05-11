# Uniflex Packaging Solutions

Static website for [uniflexpackagingsolutions.com](https://uniflexpackagingsolutions.com/).

## Files

- `index.html` - single-page marketing website
- `styles.css` - responsive layout and visual design
- `script.js` - navigation and newsletter interactions
- `server.js` - dependency-free Node.js static server
- `CNAME` - GitHub Pages custom domain
- `robots.txt` and `sitemap.xml` - search engine metadata

## Local preview

Run the included Node.js server:

```bash
npm start
```

Then open `http://localhost:3000`.

You can choose another port with:

```bash
PORT=8000 npm start
```

The server also exposes a health check at `http://localhost:3000/health`.

Alternatively, serve the directory with any static server. For example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages hosting

This repository includes `.github/workflows/pages.yml` to publish the website with
GitHub Pages whenever changes are pushed to `main`.

The workflow publishes only these public files:

- `index.html`
- `styles.css`
- `script.js`
- `CNAME`
- `robots.txt`
- `sitemap.xml`

In the repository settings, set **Pages > Build and deployment > Source** to
**GitHub Actions**. After the workflow runs successfully, the site will be
available at `https://uniflexpackagingsolutions.com/` once the domain DNS points
to GitHub Pages.
