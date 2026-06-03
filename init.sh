#!/usr/bin/env bash
# Harness baseline verification for the portfolio (Astro 5 static site).
# The production build is the only automated correctness gate in this repo —
# there is no test, lint, or `astro check` script (@astrojs/check isn't a dep).
#
# Real result (2026-06-02, deps already installed, Node 26 / npm 11):
#   npm run build -> exit 0; 2 page(s) built in ~409ms
#   dist/index.html + dist/resume/index.html generated.
#   (Harmless Node warning: DEP0205 `module.register()` deprecation — loader, not the app.)
set -euo pipefail

echo "=== Portfolio Harness Initialization ==="

if [ ! -d node_modules ]; then
  echo "--- node_modules missing: installing deps ---"
  npm install
fi

echo "--- Production build (astro build -> dist/) ---"
npm run build

echo "=== Verification Complete ==="
echo
echo "Next steps:"
echo "  1. Read AGENTS.md (knowledge base) + CLAUDE.md (workflow)"
echo "  2. Edit content in src/data/*.ts (not in markup)"
echo "  3. For visual/print changes, also run: npm run dev  (visit / and /resume)"
echo "  4. Confirm 'npm run build' passes before claiming done"
