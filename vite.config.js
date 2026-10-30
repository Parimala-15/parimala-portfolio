import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';

// Base "/" suits Vercel/Netlify. For GitHub Pages under /repo-name/, set VITE_BASE=/repo-name/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const siteUrl = (process.env.VITE_SITE_URL || env.VITE_SITE_URL || '').trim().replace(/\/+$/, '');
  const hasResume = fs.existsSync('public/resume.pdf');
  if (!hasResume) console.warn('[portfolio] public/resume.pdf not found: resume buttons will be hidden.');

  return {
    base: process.env.VITE_BASE || '/',
    define: { __HAS_RESUME__: JSON.stringify(hasResume) },
    plugins: [
      react(),
      {
        name: 'site-url-html',
        transformIndexHtml(html) {
          if (siteUrl && !siteUrl.includes('REPLACE')) return html.replaceAll('__SITE_URL__', siteUrl);
          console.warn('[portfolio] VITE_SITE_URL is not set: canonical and og:url tags were left out.');
          return html.split('\n').filter((l) => !l.includes('__SITE_URL__')).join('\n');
        },
      },
    ],
  };
});
