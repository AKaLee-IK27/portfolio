# Session Progress Log

## Current State

**Last Updated:** 2026-06-02
**Active Feature:** None. The site is landed and building clean; no tracked in-flight work.

## 2026-06-02 — Agent harness bootstrapped

Created the agent harness for this repo (owlet-style): `AGENTS.md` (knowledge base),
`CLAUDE.md` (workflow), `feature_list.json` (placeholder), `init.sh` (build verification),
`progress.md`, `session-handoff.md`. No source code was changed.

**Project facts established (read-only investigation):**
- **Stack:** Astro `^5.18.2` static site + Tailwind CSS v4 (`^4.3.0`, CSS-first via
  `@tailwindcss/vite`); fonts via `@fontsource-variable/fraunces` +
  `@fontsource/be-vietnam-pro`. No client UI framework. Deployed on Vercel.
- **Content model:** plain typed TS modules in `src/data/` (site, about, experience,
  projects, skills) — **not** Astro content collections.
- **Two routes:** `/` (`index.astro`) and `/resume` (`resume.astro`), both reusing
  `src/data/` and `Base.astro`. `resume.astro` is print-styled (A4 `@page` + print media).
- **Design tokens** live in `src/styles/global.css` `@theme`; there is no
  `tailwind.config.js`.
- **Redaction boundary** is documented in the data files: public OSS only in
  `projects.ts`, generic clients in `experience.ts`, no phone in `site.ts`.
- **No tests/lint/astro-check** scripts; `npm run build` is the only correctness gate.

**Verification (real, this session):**
- `npm run build` → **exit 0**, 2 page(s) built in ~409ms (`dist/index.html` +
  `dist/resume/index.html`). Node 26 / npm 11. Harmless `DEP0205 module.register()`
  deprecation warning from Node's loader.
- `./init.sh` → exit 0 end-to-end.

## Status

### What's Done
- [x] Harness files created (AGENTS.md, CLAUDE.md, feature_list.json, init.sh,
      progress.md, session-handoff.md)
- [x] Baseline build verified green

### What's In Progress
- None.

### What's Next
1. Replace the placeholder entries in `feature_list.json` with the first real, tracked
   task when work begins.
2. For any content edit, change the matching `src/data/*.ts` module and preserve the
   redaction boundary.
3. If the résumé content changes, re-export `/resume` to refresh
   `public/resume/Anh-Khoi-Le-Resume.pdf` (manual — no script).

## Blockers / Risks
- None blocking. Note: regenerating the résumé PDF is a manual print-export; the
  mechanism is not in the repo.
