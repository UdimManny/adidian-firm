import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { conditions } from '../data/conditions';

const Conditions = () => (
  <div>
    <SEO
      title="Conditions We Treat | Physiotherapy in Abuja | Adidian Physiotherapy"
      description="Physiotherapy in Abuja for back pain, sciatica, neck pain, knee pain, frozen shoulder, stroke recovery and more, at our Garki clinic or at home. Call 070-6587-3379."
      breadcrumbs={[{ name: 'Conditions We Treat', path: '/conditions' }]}
    />
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Conditions We Treat in Abuja</h1>
        <p className="text-xl text-gray-600">
          Our physiotherapists in Area 11, Garki treat a wide range of pain, injury and neurological conditions. Find
          your condition below to learn how physiotherapy can help.
        </p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {conditions.map((c) => (
          <Link
            key={c.slug}
            to={c.path}
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img loading="lazy" decoding="async" src={c.image} alt={`${c.name} treatment in Abuja`} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{c.h1}</h2>
              <p className="text-gray-600 mb-4">{c.tagline}</p>
              <span className="text-blue-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default Conditions;
