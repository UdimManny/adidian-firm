import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { CLINIC, SITE_URL, absoluteUrl } from '../seo/site';

interface Crumb {
  name: string;
  path: string;
}

interface SEOProps {
  title: string;
  description: string;
  /** Defaults to the current route. */
  path?: string;
  image?: string;
  /** Breadcrumb trail after "Home", e.g. [{ name: 'Services', path: '/services' }]. */
  breadcrumbs?: Crumb[];
  /** Extra JSON-LD objects for this page (Service, FAQPage, ...). */
  jsonLd?: object[];
  noindex?: boolean;
}

export const SEO = ({
  title,
  description,
  path,
  image = CLINIC.image,
  breadcrumbs,
  jsonLd = [],
  noindex,
}: SEOProps) => {
  const location = useLocation();
  const pagePath = path ?? location.pathname;
  const canonical = pagePath === '/' ? `${SITE_URL}/` : absoluteUrl(pagePath.replace(/\/$/, ''));
  const imageUrl = absoluteUrl(image);

  const schemas: object[] = [...jsonLd];
  if (breadcrumbs?.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [{ name: 'Home', path: '/' }, ...breadcrumbs].map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.path === '/' ? `${SITE_URL}/` : absoluteUrl(c.path),
      })),
    });
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CLINIC.name} />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
