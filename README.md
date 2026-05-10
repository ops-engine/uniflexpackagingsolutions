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
