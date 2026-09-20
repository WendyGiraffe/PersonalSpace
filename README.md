# Chang Zhou — Bilingual Portfolio

A dependency-free, English-first personal portfolio for Chang Zhou, with one-click Chinese switching.

## Run locally

From this folder, start any static server:

```powershell
npx serve .
```

Or, if Python is available:

```powershell
python -m http.server 4173
```

Then open the printed local URL. Opening `index.html` directly also works for the core page, but a static server gives the most reliable browser behavior.

## Publish with GitHub Pages

1. Create a new repository under `WendyGiraffe` (for example, `chang-zhou-portfolio`).
2. Copy the contents of this folder into the repository root.
3. Push to GitHub.
4. In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

The site is static and has no build step or runtime dependency.

## Content notes

- Resume content is based on `英文_AI_Technical_Product_Manager.docx` supplied locally.
- GitHub cards link to the six repositories publicly visible on `github.com/WendyGiraffe` at the time of creation. Repository descriptions are intentionally conservative.
- The “Print / save résumé” action uses the browser print dialog. Choose **Save as PDF** when a PDF copy is needed.
- The `assets/` folder contains curated screenshots captured from local prototype HTML files and selected PNG design artifacts under `Desktop\工作项目`. They are presented as portfolio visuals, not linked as live product functionality.
- Replace the contact details or add a resume PDF link in `index.html` if a public downloadable resume is desired.
