import { Link, useParams } from 'react-router-dom';
import { AlertTriangle, ArrowRight, Calendar, CheckCircle, Phone, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../components/SEO';
import NotFound from './NotFound';
import { conditionBySlug, type Condition } from '../data/conditions';
import { services } from '../data/services';
import { areas } from '../data/areas';
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
      {/* Kept in the DOM (hidden) so the answer is in the prerendered HTML. */}
      <div className={`px-6 pb-4 text-gray-600 leading-relaxed ${open ? '' : 'hidden'}`}>{answer}</div>
    </div>
  );
};

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-gray-700">
        <CheckCircle className="text-green-500 mt-0.5 shrink-0" size={20} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const ConditionPage = ({ condition: c }: { condition: Condition }) => {
  const isCondition = c.path.startsWith('/conditions/');
  const crumbs = isCondition
    ? [
        { name: 'Conditions We Treat', path: '/conditions' },
        { name: c.name, path: c.path },
      ]
    : [{ name: c.name, path: c.path }];
  const related = services.filter((s) => c.relatedServices.includes(s.id));
  const relatedConditions = c.relatedConditions.map((slug) => conditionBySlug[slug]).filter(Boolean);

  return (
    <div>
      <SEO
        title={c.title}
        description={c.metaDescription}
        path={c.path}
        image={c.image}
        breadcrumbs={crumbs}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: c.title,
            url: absoluteUrl(c.path),
            ...(isCondition
              ? { about: { '@type': 'MedicalCondition', name: c.name } }
              : { about: { '@type': 'MedicalTherapy', name: 'Home physiotherapy' } }),
            audience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
            publisher: { '@id': BUSINESS_ID },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: c.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              {crumbs.map((cr, i) => (
                <span key={cr.path}>
                  {' / '}
                  {i === crumbs.length - 1 ? (
                    <span className="text-gray-700">{cr.name}</span>
                  ) : (
                    <Link to={cr.path} className="hover:text-blue-600">{cr.name}</Link>
                  )}
                </span>
              ))}
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{c.h1}</h1>
            <p className="text-xl text-gray-600 mb-8">{c.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold inline-flex items-center justify-center gap-2"
              >
                <Calendar size={20} /> Book an Appointment
              </Link>
              <a
                href="tel:+2347065873379"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-colors font-semibold inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} /> 070-6587-3379
              </a>
            </div>
          </div>
          <img fetchPriority="high"
            src={c.image}
            alt={`${c.name} physiotherapy at Adidian Physiotherapy Clinic, Abuja`}
            className="rounded-2xl shadow-xl w-full h-80 object-cover"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-lg text-gray-700 leading-relaxed">
          {c.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* Symptoms & causes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.symptomsHeading}</h2>
            <List items={c.symptoms} />
          </div>
          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.causesHeading}</h2>
            <List items={c.causes} />
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            How we help at Adidian Physiotherapy, Abuja
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Every plan is tailored to you after a one-to-one assessment, at our clinic in Area 11, Garki or in your home.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.treatment.map((t) => (
              <div key={t.title} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-gray-600">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self care & red flags */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What you can do now</h2>
            <List items={c.selfCare} />
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-2">
              <AlertTriangle size={24} /> See a doctor urgently if you have
            </h2>
            <ul className="space-y-3 list-disc pl-5 text-red-900">
              {c.redFlags.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            {c.faqs.map((f) => (
              <FAQItem key={f.question} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related services</h2>
            <ul className="space-y-2">
              {related.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                    {s.title} in Abuja <ArrowRight size={16} />
                  </Link>
                </li>
              ))}
              {isCondition && (
                <li>
                  <Link to="/home-physiotherapy-abuja" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                    Home physiotherapy in Abuja <ArrowRight size={16} />
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Other conditions we treat</h2>
            <ul className="space-y-2">
              {relatedConditions.map((rc) => (
                <li key={rc.slug}>
                  <Link to={rc.path} className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                    {rc.h1} <ArrowRight size={16} />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/conditions" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                  All conditions we treat <ArrowRight size={16} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {!isCondition && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Home physiotherapy by area</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((a) => (
                <Link key={a.slug} to={a.path} className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600">
                  Physiotherapy in {a.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Book a physiotherapy assessment in Abuja</h2>
          <p className="text-lg opacity-90 mb-8">
            Visit us at No 32 Lord Lugard Street, Area 11, Garki, Abuja (Mon–Fri 8am–6pm, Sat 9am–4pm) or book a home
            visit. We accept HMO and insurance referrals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100">
              Book an Appointment
            </Link>
            <a href="tel:+2347065873379" className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600">
              Call 070-6587-3379
            </a>
          </div>
          <p className="text-sm opacity-75 mt-8">
            This page is general information and is not a substitute for an individual assessment by a qualified
            health professional.
          </p>
        </div>
      </section>
    </div>
  );
};

const ConditionDetail = () => {
  const { slug = '' } = useParams();
  const condition = conditionBySlug[slug];
  if (!condition || !condition.path.startsWith('/conditions/')) return <NotFound />;
  return <ConditionPage condition={condition} />;
};

export default ConditionDetail;
