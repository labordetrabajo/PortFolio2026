# PortFolio2026 — GitHub Pages build

This version is prepared specifically for:

`https://labordetrabajo.github.io/PortFolio2026/`

It includes:
- static Next.js export (`output: "export"`)
- `/PortFolio2026` base path for GitHub Pages
- GitHub Actions automatic deployment
- Formspree contact form
- downloadable English CV
- profile photo
- local WebGL icon fix

## Publish

Push this project to:

`https://github.com/labordetrabajo/PortFolio2026.git`

Then in GitHub open:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

Every push to `main` will build and deploy the site automatically.

## Local development

```bash
npm install
npm run dev
```

When running locally, Next.js uses the configured base path. Open:

`http://localhost:3000/PortFolio2026/`

## Production URL

`https://labordetrabajo.github.io/PortFolio2026/`
