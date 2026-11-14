import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';
import NotFound from './NotFound';
import { articleBySlug } from '../data/articles';
import { services } from '../data/services';
import { BUSINESS_ID, absoluteUrl } from '../seo/site';

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

const ArticlePage = () => {
  const { slug = '' } = useParams();

  // Old service pages lived at /blog/<service-id>; send those to /services.
  if (services.some((s) => s.id === slug)) return <Navigate to={`/services/${slug}`} replace />;

  const a = articleBySlug[slug];
  if (!a) return <NotFound />;
  const path = `/blog/${a.slug}`;

  return (
    <div>
      <SEO
        title={`${a.title} | Adidian Physiotherapy Abuja`}
        description={a.metaDescription}
        path={path}
        image={a.image}
        breadcrumbs={[
          { name: 'Blog', path: '/blog' },
          { name: a.title, path },
        ]}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: a.title,
            description: a.metaDescription,
            image: absoluteUrl(a.image),
            datePublished: a.datePublished,
            dateModified: a.datePublished,
            mainEntityOfPage: absoluteUrl(path),
            author: { '@id': BUSINESS_ID },
            publisher: { '@id': BUSINESS_ID },
          },
        ]}
      />

      <article>
        <header className="bg-gradient-to-br from-blue-50 to-green-50 py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
              <Link to="/" className="hover:text-blue-600">Home</Link> /{' '}
              <Link to="/blog" className="hover:text-blue-600">Blog</Link>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{a.title}</h1>
            <p className="text-sm text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
              <span>Adidian Physiotherapy Clinic</span>
              <span className="inline-flex items-center gap-1"><Calendar size={14} /> {formatDate(a.datePublished)}</span>
              <span className="inline-flex items-center gap-1"><Clock size={14} /> {a.readMinutes} min read</span>
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <img
            src={a.image}
            alt={a.title}
            className="w-full h-56 md:h-80 object-cover rounded-2xl shadow mb-10"
            fetchPriority="high"
          />
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            {a.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {a.sections.map((s) => {
              const ListTag = s.ordered ? 'ol' : 'ul';
              return (
                <section key={s.heading} className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-6">{s.heading}</h2>
                  {s.paragraphs?.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {s.list && (
                    <ListTag className={`${s.ordered ? 'list-decimal' : 'list-disc'} pl-6 space-y-3`}>
                      {s.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ListTag>
                  )}
                </section>
              );
            })}
          </div>

          <aside className="mt-12 rounded-2xl bg-gray-50 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related pages</h2>
            <ul className="space-y-2">
              {a.related.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                    {label} <ArrowRight size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <div className="mt-8 rounded-2xl bg-blue-600 text-white p-6 md:p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Need help with pain or recovery?</h2>
            <p className="opacity-90 mb-6">Book an assessment at our clinic in Area 11, Garki, Abuja, or ask about a home visit.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">Book an Appointment</Link>
              <a href="tel:+2347065873379" className="border-2 border-white px-6 py-3 rounded-full font-semibold inline-flex items-center justify-center gap-2">
                <Phone size={18} /> 070-6587-3379
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-8">
            This article is general information and is not a substitute for an individual assessment by a qualified health professional.
          </p>
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;
