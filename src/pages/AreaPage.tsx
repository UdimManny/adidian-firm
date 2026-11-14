import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle, Home as HomeIcon, MapPin, Phone, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../components/SEO';
import NotFound from './NotFound';
import { areaBySlug, areas } from '../data/areas';
import { conditionBySlug } from '../data/conditions';
import { BUSINESS_ID, absoluteUrl } from '../seo/site';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h3 className="font-semibold text-gray-900 pr-6">{question}</h3>
        {open ? <Minus className="text-blue-600 shrink-0" size={20} /> : <Plus className="text-blue-600 shrink-0" size={20} />}
      </button>
      <div className={`px-6 pb-4 text-gray-600 leading-relaxed ${open ? '' : 'hidden'}`}>{answer}</div>
    </div>
  );
};

const AreaPage = () => {
  const { slug = '' } = useParams();
  const a = areaBySlug[slug];
  if (!a) return <NotFound />;
  const featured = a.featuredConditions.map((s) => conditionBySlug[s]).filter(Boolean);
  const others = areas.filter((o) => o.slug !== a.slug);

  return (
    <div>
      <SEO
        title={a.title}
        description={a.metaDescription}
        path={a.path}
        image={a.image}
        breadcrumbs={[
          { name: 'Areas We Serve', path: '/physiotherapy-abuja' },
          { name: a.name, path: a.path },
        ]}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: a.title,
            url: absoluteUrl(a.path),
            about: { '@id': BUSINESS_ID },
            spatialCoverage: { '@type': 'Place', name: `${a.name}, Abuja` },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: a.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          },
        ]}
      />

      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
              <Link to="/" className="hover:text-blue-600">Home</Link> /{' '}
              <Link to="/physiotherapy-abuja" className="hover:text-blue-600">Areas We Serve</Link> /{' '}
              <span className="text-gray-700">{a.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{a.h1}</h1>
            <div className="space-y-4 text-lg text-gray-700 mb-8">
              {a.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 font-semibold inline-flex items-center justify-center gap-2">
                <Calendar size={20} /> Book an Appointment
              </Link>
              <a href="tel:+2347065873379" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white font-semibold inline-flex items-center justify-center gap-2">
                <Phone size={20} /> 070-6587-3379
              </a>
            </div>
          </div>
          <img src={a.image} alt="Inside Adidian Physiotherapy Clinic, Area 11, Garki, Abuja" className="rounded-2xl shadow-xl w-full h-72 md:h-96 object-cover" fetchPriority="high" />
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Who we see from {a.name}</h2>
            <ul className="space-y-3">
              {a.whoWeSee.map((w) => (
                <li key={w} className="flex gap-3 text-gray-700">
                  <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={20} />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="text-blue-600" size={22} /> Visiting our clinic</h2>
            <p className="text-gray-700 mb-3">{a.gettingHere}</p>
            <p className="text-sm text-gray-600">Mon–Fri 8am–6pm · Sat 9am–4pm</p>
            <a href="https://www.google.com/maps?q=9.057108,7.456398" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold inline-flex items-center gap-1 mt-3">
              Open in Google Maps <ArrowRight size={16} />
            </a>
          </div>
          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><HomeIcon className="text-blue-600" size={22} /> Home visits in {a.name}</h2>
            <p className="text-gray-700 mb-3">{a.homeVisits}</p>
            <Link to="/home-physiotherapy-abuja" className="text-blue-600 font-semibold inline-flex items-center gap-1">
              About home physiotherapy <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common conditions we treat for {a.name} patients</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((c) => (
              <Link key={c.slug} to={c.path} className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-1">{c.h1}</h3>
                <span className="text-blue-600 text-sm font-semibold">Learn more →</span>
              </Link>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link to="/conditions" className="text-blue-600 font-semibold">See all conditions we treat →</Link>
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions from {a.name} patients</h2>
          <div className="space-y-4">
            {a.faqs.map((f) => (
              <FAQItem key={f.question} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Other areas we serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {others.map((o) => (
              <Link key={o.slug} to={o.path} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600">
                Physiotherapy in {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaPage;
