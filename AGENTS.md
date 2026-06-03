# PORTFOLIO KNOWLEDGE BASE

**Last updated:** 2026-06-02
**Branch:** main

## OVERVIEW

Personal portfolio for **Anh Khoi Le** — a single-page Astro static site plus a
print-styled résumé page. Calm green editorial design (Fraunces display + Be Vietnam
Pro body, one green accent). All content lives as typed TypeScript modules in
`src/data/`; the components render those modules. Two pages share the same data:

1. **`/`** (`src/pages/index.astro`) — the landing page: Hero, About, Experience,
   Projects, Skills, Contact, Footer. Scroll-reveal + active-nav highlighting via a
   progressive-enhancement `<script>` (no-JS fallback shows everything).
2. **`/resume`** (`src/pages/resume.astro`) — a print-styled résumé (A4 `@page`, print
   media query) that reuses the same `src/data/` modules. It is the human-readable
   source the downloadable PDF mirrors (PDF regeneration mechanism is not in the repo —
   see NOTES).

Built with Astro 5, styled with Tailwind CSS v4 (CSS-first, via `@tailwindcss/vite`),
deployed on Vercel (auto-detected; output `dist/`).

## STRUCTURE

```
portfolio/
├── src/
│   ├── data/              # Content as typed TS modules (the source of truth)
│   │   ├── site.ts        # name, role, tagline, contact, nav, resume path
│   │   ├── about.ts       # bio, education, achievements, certifications, languages
│   │   ├── experience.ts  # Role[] — employers + highlights (redacted clients)
│   │   ├── projects.ts    # Project[] — public OSS only
│   │   └── skills.ts      # SkillGroup[]
│   ├── components/        # 11 .astro section components (no client framework)
│   ├── layouts/Base.astro # <html>/<head>, font imports, meta/OG, no-js guard
│   ├── pages/
│   │   ├── index.astro    # Landing page + scroll-reveal/nav-spy script
│   │   └── resume.astro   # Print-styled résumé (own scoped <style is:global>)
│   └── styles/global.css  # Tailwind import + @theme brand tokens + base CSS
├── public/
│   ├── favicon.svg
│   └── resume/Anh-Khoi-Le-Resume.pdf   # The downloadable résumé (committed artifact)
├── astro.config.mjs       # site URL + Tailwind Vite plugin
├── tsconfig.json          # extends astro/tsconfigs/strict
├── package.json           # scripts: dev / build / preview / astro
├── AGENTS.md              # This file — knowledge base (read first)
├── CLAUDE.md             # Agent workflow rules
├── feature_list.json    # Feature tracker (placeholder — see note inside)
├── progress.md          # Session progress log
├── init.sh              # Baseline verification (npm run build)
└── session-handoff.md   # Multi-session handoff stub
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Edit any copy / content | `src/data/*.ts` | Single source of truth. Components and the résumé both read these. Edit data, not markup, for text changes |
| Site name / role / tagline / nav / contact | `src/data/site.ts` | `as const`. `nav` drives both `Nav.astro` and the scroll-spy. `resume` is the PDF path |
| Experience entries | `src/data/experience.ts` | `Role[]`. **Clients are described generically by design** (see Conventions) |
| Projects | `src/data/projects.ts` | `Project[]`. **Public OSS only — never private/work repos** |
| Skills groups | `src/data/skills.ts` | `SkillGroup[]` |
| Bio / education / awards / languages | `src/data/about.ts` | Consumed by `About.astro` and `resume.astro` |
| Brand colors / fonts / shadows | `src/styles/global.css` `@theme` | Tailwind v4 tokens (e.g. `--color-leaf`, `--color-pine`). **There is no `tailwind.config.js`** |
| Base CSS / scroll-reveal / focus rings | `src/styles/global.css` | `.reveal`, `:focus-visible`, reduced-motion + no-js fallbacks |
| `<head>`, meta, OG, fonts, no-js guard | `src/layouts/Base.astro` | Font `@import`s + canonical/OG tags; sets `theme-color` |
| Landing page composition + JS | `src/pages/index.astro` | Imports all sections; the `<script>` is the only client JS (IntersectionObserver reveal + nav-spy) |
| Section components | `src/components/*.astro` | Hero, About, Experience, Projects, Skills, Contact, Nav, Footer + shared `SectionHeading`, `Tag`, `SocialLinks` |
| Résumé page + print CSS | `src/pages/resume.astro` | Own `<style is:global>` with `@page`/print rules; reuses `src/data/` |
| Deploy / site URL | `astro.config.mjs` | `site: 'https://anhkhoile.vercel.app'`; Vercel auto-detects |
| Downloadable PDF | `public/resume/Anh-Khoi-Le-Resume.pdf` | Committed artifact; mirrors `resume.astro` (regen mechanism not in repo) |

## CONVENTIONS

- **Content lives in `src/data/`, not in markup.** To change wording, edit the typed
  module; components are presentation only. Keep the `interface`s satisfied.
- **Plain typed TS data modules — NOT Astro content collections.** There is no
  `src/content/`, no `defineCollection`, no `getCollection`. Import the module directly
  (`import { projects } from "../data/projects"`).
- **Tailwind v4, CSS-first.** Design tokens are declared in `src/styles/global.css`
  under `@theme` and wired through `@tailwindcss/vite`. There is **no JS Tailwind config
  file** to edit or generate.
- **Privacy / redaction boundary (documented in the data files):**
  - `projects.ts` — public OSS only; never link private client/work repos.
  - `experience.ts` — employers are named; their end-clients and product names stay
    generic (a public, indexed page is a wider disclosure surface than a private CV).
  - `site.ts` — email is public (already on GitHub); phone is intentionally omitted.
  Preserve this boundary when editing `src/data/`.
- **Progressive enhancement.** Reveal/animation is opt-in: `Base.astro` adds `no-js`
  to `<html>` and the inline script removes it; CSS keeps all content visible without
  JS and under `prefers-reduced-motion`. Don't make content depend on JS.
- **Accessibility is load-bearing.** Skip-link, `aria-current` nav, WCAG-AA contrast,
  visible focus rings (lightened on the dark contact band). Don't regress these.
- **Evidence before "done".** Run `npm run build` (or `./init.sh`) and confirm it
  passes before claiming a change is complete.

## ANTI-PATTERNS (THIS PROJECT)

- **Don't create or look for `tailwind.config.js`/`.ts`.** Tailwind v4 here is CSS-first;
  tokens go in `global.css` `@theme`.
- **Don't reach for content collections** (`getCollection`, `astro:content`,
  `src/content/`). The data is plain TS modules in `src/data/`.
- **Don't hardcode copy into components.** Add/edit the field in the matching
  `src/data/` module instead.
- **Don't add a client UI framework** (React/Vue/Svelte) for effects the current
  vanilla `<script>` already covers. This is a zero-runtime static site.
- **Don't widen the redaction surface** — no client names, private repos, or phone
  number in `src/data/`.
- **Don't assume an automated PDF pipeline.** Regenerating
  `public/resume/Anh-Khoi-Le-Resume.pdf` is a manual print-export of `/resume`; the
  mechanism is not scripted in the repo.

## COMMANDS

```bash
# Install deps (only if node_modules is missing)
npm install

# Local dev server (http://localhost:4321)
npm run dev

# Production build → dist/ (the verification command — no separate test/lint script)
npm run build

# Serve the production build locally
npm run preview

# Baseline verification wrapper
./init.sh
```

There is **no** test, lint, or `astro check` script defined (and `@astrojs/check` is
not a dependency). `npm run build` is the only automated correctness gate in this repo.

## NOTES

- **Stack (verified from package.json):** Astro `^5.18.2`, Tailwind `^4.3.0` +
  `@tailwindcss/vite` `^4.3.0`, fonts via `@fontsource-variable/fraunces` and
  `@fontsource/be-vietnam-pro`. No runtime UI framework.
- **Static output.** `astro build` emits `dist/` (`index.html`, `resume/index.html`,
  `_astro/`, copied `public/`). Vercel auto-detects Astro; deploy = build.
- **Build is gitignored.** `dist/`, `.astro/`, `node_modules/`, `.vercel/` are ignored
  — running the build to verify is not a working-tree change to commit.
- **Two routes only:** `/` and `/resume`. Both reuse `src/data/` and `Base.astro`.
- **PDF résumé** at `public/resume/Anh-Khoi-Le-Resume.pdf` is a committed artifact that
  mirrors `resume.astro`. If résumé content changes, the PDF must be re-exported by hand
  (mechanism TBD — not in the repo).
- **Node 26 / npm 11** in this environment; the build prints a harmless
  `DEP0205 module.register()` deprecation warning (Node's loader, not the app).

## CURRENT STATE (as of 2026-06-02)

- Site is **landed and building clean.** `npm run build` → exit 0, 2 pages built
  (`/index.html`, `/resume/index.html`) in ~0.4s (verified 2026-06-02).
- Git: branch `main`, in sync with `origin/main`, clean working tree, 3 commits
  (the site was committed whole, not incrementally).
- **No tracked in-flight work, TODO/FIXME markers, or feature branches.**
  `feature_list.json` therefore holds placeholder entries only — replace them with real
  tracked work before using it as a backlog (see the note inside that file).
- No automated tests exist; correctness is the build plus manual visual/print review.
