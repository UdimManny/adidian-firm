// Build-time prerender: writes real HTML for every page so Google (and social
// previews) see the content without running JavaScript. Also writes sitemap.xml
// and 404.html. Run after `vite build` and `vite build --ssr`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const SITE_URL = 'https://adidianphysiotherapyclinic.com';

const { render, routes } = await import(
  pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href
);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const page = (url) => {
  const { html, head } = render(url);
  return template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
};

for (const url of routes) {
  // /faq -> faq.html (not faq/index.html): Netlify serves it at /faq with no
  // trailing-slash redirect, so the canonical URLs resolve directly.
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, `${url}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(url));
  console.log('prerendered', url);
}

fs.writeFileSync(path.join(dist, '404.html'), page('/404'));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (u) => `  <url>
    <loc>${u === '/' ? `${SITE_URL}/` : SITE_URL + u}</loc>
    <lastmod>${today}</lastmod>
    <priority>${u === '/' ? '1.0' : u.startsWith('/services') ? '0.9' : '0.7'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`sitemap.xml written with ${routes.length} URLs`);
