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
- The Delivery Snapshot section is based on `工作文件\周畅-产品经理.html`, including the supplied project scope, delivery metrics, project progress, and working practices.
- GitHub cards link to the six repositories publicly visible on `github.com/WendyGiraffe` at the time of creation. Repository descriptions are intentionally conservative.
- The “Print / save résumé” action uses the browser print dialog. Choose **Save as PDF** when a PDF copy is needed.
- The Product Visuals section uses the 20 PNG screenshots copied from `Desktop\个人文件\图片`, organized into six delivery-angle carousels: prototype delivery, interaction delivery, functional module design, PRD delivery, task management, and user-material delivery. Each carousel supports button, keyboard, and touch navigation; the images are portfolio visuals, not linked as live product functionality.
- Replace the contact details or add a resume PDF link in `index.html` if a public downloadable resume is desired.
