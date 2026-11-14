import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { services } from './data/services';
import { conditions } from './data/conditions';

export const routes = [
  '/',
  '/about',
  '/services',
  ...services.map((s) => `/services/${s.id}`),
  '/conditions',
  ...conditions.map((c) => c.path),
  '/team',
  '/testimonials',
  '/faq',
  '/blog',
  '/contact',
];

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );
  const h = helmetContext.helmet!;
  const head = [h.title, h.meta, h.link, h.script].map((x) => x.toString()).join('\n    ');
  return { html, head };
}
