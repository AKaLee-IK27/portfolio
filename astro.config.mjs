// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static site. Vercel auto-detects Astro (build: `astro build`, output: dist/).
export default defineConfig({
  site: 'https://anhkhoile.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
