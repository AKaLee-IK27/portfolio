# Session Progress Log

## Current State

**Last Updated:** 2026-06-04
**Active Feature:** Résumé + homepage refresh (open-to-work, agentic hero, SEO/share,
motion polish) implemented in the working tree; awaiting `/check`, then push + deploy.

## 2026-06-04 — Résumé rewrite, agentic hero, open-to-work, SEO/share

**Shipped to production** (commit `30030f1`, `vercel --prod`):
- Rewrote résumé content to lead with outcomes; stronger résumé layout (section
  dividers, left-accent experience blocks, two-column lower grid).
- Contact links show platform names (Portfolio / GitHub / LinkedIn) instead of URLs,
  embedded as clickable PDF annotations.
- Regenerated `public/resume/Anh-Khoi-Le-Resume.pdf`.

**In the working tree, verified, awaiting `/check` + deploy:**
- **Agentic terminal hero** (`Hero.astro`): self-typing Claude Code session, decorative
  (`aria-hidden`); the full session is server-rendered so no-JS / reduced-motion show it
  static.
- **Open-to-work correction** (no longer at Vietnam Silicon): `experience.ts` VS role is
  `Dec 2025 - May 2026` with `current` removed (no "Present" badge); `about.ts` bio and
  `resume.astro` summary reframed to "most recently at Vietnam Silicon"; hero shows an
  "Open to work" pill. Résumé PDF regenerated to match.
- **Social share image**: `tools/og-card.html` rendered once to `public/og.png`
  (1200×630) via headless Chrome; `og:image` / `twitter:image` added in `Base.astro`.
- **SEO**: `Person` JSON-LD in `Base.astro` (homepage only).
- **Motion polish**: scroll-progress bar (scrolling pages only, not `/resume`) +
  section-heading underline-draw; both degrade to static under no-JS / reduced-motion.

**Verification (real):** `npm run build` → exit 0, 7 pages. Rendered hero (desktop +
375px), Experience, the OG card, and résumé PDF page 1 in a browser; greps confirm
"Currently at Vietnam Silicon" is gone and the PDF no longer says "Present". Live OG
unfurl still to validate post-deploy (social crawlers cache aggressively).

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
- None blocking. **Résumé PDF regeneration (mechanism now known):** serve the built site
  (`npm run preview`) and print `/resume` with headless Chrome:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new
  --no-pdf-header-footer --print-to-pdf=public/resume/Anh-Khoi-Le-Resume.pdf
  http://localhost:<port>/resume`. The OG image uses the same Chrome via `--screenshot`
  against `tools/og-card.html` (see that file's header for the exact command).
