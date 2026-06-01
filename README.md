# Portfolio

Personal portfolio for **Anh Khoi Le** — a software engineer building mobile and web
products in Flutter, shipping faster with AI coding agents.

Built with [Astro](https://astro.build) and Tailwind CSS, deployed on Vercel.

## Develop

```bash
npm install
npm run dev      # local dev server (http://localhost:4321)
npm run build    # static build → dist/
npm run preview  # serve the production build locally
```

## Structure

- `src/data/` — content as typed modules (`experience`, `projects`, `skills`, `about`, `site`)
- `src/components/` — section components (Hero, About, Experience, Projects, Skills, Contact)
- `src/pages/index.astro` — the page
- `src/pages/resume.astro` — print-styled résumé, the source for the downloadable PDF
- `public/resume/` — the downloadable résumé PDF

## Design

Calm green editorial: Fraunces (display) + Be Vietnam Pro (body), a single green accent,
generous whitespace, scroll-reveal with a no-JS fallback, and WCAG-AA contrast throughout.
