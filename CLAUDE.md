# CLAUDE.md

Project harness for **Portfolio** — a single-page **Astro 5** static site plus a
print-styled résumé page for Anh Khoi Le, styled with **Tailwind CSS v4** (CSS-first)
and deployed on Vercel. All content lives as typed TypeScript modules in `src/data/`.
See `AGENTS.md` for the full knowledge base and `README.md` for the product overview.

## Startup Workflow

Before writing code:

1. `pwd` — confirm you're in `~/Repos/portfolio`
2. Read `AGENTS.md` (knowledge base) and this file
3. Read `feature_list.json` and `progress.md`
4. Check `git log --oneline -8` and `git status`
5. If `node_modules/` is missing, run `npm install` once
6. For any change, plan to verify with `npm run build` (the only correctness gate)

If the build is already failing on a clean checkout, fix that before adding new scope.

## Working Rules

- **Content goes in `src/data/`, not in markup.** To change copy, edit the typed
  module; components are presentation only. Keep the `interface`s satisfied.
- **Respect the redaction boundary.** `projects.ts` = public OSS only; `experience.ts`
  keeps end-clients/products generic; `site.ts` omits the phone. Don't widen disclosure.
- **Tailwind v4 is CSS-first.** Brand tokens live in `src/styles/global.css` `@theme`.
  There is **no `tailwind.config.js`** — don't create or look for one.
- **No content collections.** Import data modules directly; there is no `src/content/`.
- **Stay zero-runtime.** Don't add a client framework (React/Vue/Svelte) for effects the
  existing vanilla `<script>` in `index.astro` already handles.
- **Keep the no-JS / reduced-motion fallbacks intact.** Content must never depend on JS.
- **One change at a time, in scope.** Don't refactor adjacent components or bump deps
  while making a content or style edit.
- **Leave the repo restartable.** `npm run build` should pass when you stop.

## Verification Commands

```bash
# The correctness gate — static build to dist/ (no test/lint/astro-check script exists)
npm run build

# Baseline wrapper (runs the build, prints next steps)
./init.sh

# Visual check for layout/style/content changes
npm run dev        # http://localhost:4321  (also visit /resume)
npm run preview    # serves the built dist/ — closest to production

# Print/PDF check (résumé): open /resume, print to PDF, compare to
# public/resume/Anh-Khoi-Le-Resume.pdf  (manual — no script regenerates it)
```

After a visual or print-affecting change, run the app (`npm run dev`/`preview`) and look
at the rendered page in a browser — a clean build does not prove the layout is right.

## Project Layout (quick map)

- `src/data/*.ts` — content as typed TS modules (the source of truth).
- `src/components/*.astro` — section components; presentation only.
- `src/layouts/Base.astro` — `<head>`, fonts, meta/OG, the `no-js` guard.
- `src/pages/index.astro` — landing page + the one client `<script>` (reveal + nav-spy).
- `src/pages/resume.astro` — print-styled résumé; reuses `src/data/`.
- `src/styles/global.css` — Tailwind import + `@theme` brand tokens + base CSS.
- `public/` — static assets, incl. the downloadable résumé PDF.
- `astro.config.mjs` — site URL + Tailwind Vite plugin.

## Definition of Done

A change is done only when:

- [ ] Target content/behavior is implemented in the right layer (`src/data/` for copy)
- [ ] The redaction boundary is preserved (no client names / private repos / phone)
- [ ] `npm run build` passes (exit 0)
- [ ] Layout/style/content changes were viewed in a browser (`dev` or `preview`); a
      résumé change was print-previewed
- [ ] `progress.md` updated; `git status` clean or intentionally staged

## End of Session

1. Update `progress.md` (what changed, what's next, blockers)
2. Update `feature_list.json` status + evidence (once real features replace placeholders)
3. If multi-session, fill `session-handoff.md`
4. Commit with a descriptive message **only when the user asks**, or leave a clean
   working tree and note it

## Escalation

- **Build fails after deps install** → read the Astro/Vite error; it usually points at a
  `.astro`/`.ts` file and line. Fix in scope; don't bump Astro/Tailwind to "fix" it.
- **Résumé PDF out of date** → there is no regeneration script; re-export `/resume` to
  PDF by hand, or ask the user how they generate it.
- **Design / visual-judgment decisions** → confirm with the user; this is a personal
  portfolio where taste and the redaction boundary matter.
- **Anything touching private/client info** → stop and ask before publishing it.
