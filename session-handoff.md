# Session Handoff

Use this file for multi-session continuity. Keep it short and current; the durable
knowledge base is `AGENTS.md` and the running log is `progress.md`.

## Snapshot (2026-06-02)

- **Branch:** `main`, in sync with `origin/main`, clean working tree.
- **Build:** `npm run build` passes (exit 0; `/` + `/resume`). `./init.sh` runs it.
- **Active work:** none — the site is landed; no in-flight feature or branch.
- **Harness:** bootstrapped this session (AGENTS.md, CLAUDE.md, feature_list.json
  [placeholder], init.sh, progress.md, this file).

## Open items / watch-outs

- `feature_list.json` is **placeholder only** — replace before treating it as a backlog.
- **Redaction boundary** must hold on any `src/data/` edit: public OSS only
  (`projects.ts`), generic clients (`experience.ts`), no phone (`site.ts`).
- **No `tailwind.config.js`** — tokens are in `src/styles/global.css` `@theme`.
- **No content collections** — `src/data/*.ts` modules are imported directly.
- **Résumé PDF** (`public/resume/Anh-Khoi-Le-Resume.pdf`) is a manual export of
  `/resume`; no script regenerates it.

## To resume

1. `pwd` → `~/Repos/portfolio`; read `AGENTS.md` + `CLAUDE.md`.
2. `git status` / `git log --oneline -8`.
3. Pick up the next real task; verify with `npm run build` (+ a browser check for
   visual changes).
