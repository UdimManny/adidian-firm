import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { SEO } from '../components/SEO';
import { areas } from '../data/areas';

const Areas = () => (
  <div>
    <SEO
      title="Physiotherapy Across Abuja | Areas We Serve | Adidian Physiotherapy"
      description="Adidian Physiotherapy Clinic in Area 11, Garki serves patients across Abuja, including Wuse, Maitama, Asokoro, Gwarinpa, Kubwa, Jabi, Utako and Lugbe, with clinic appointments and home visits."
      breadcrumbs={[{ name: 'Areas We Serve', path: '/physiotherapy-abuja' }]}
    />
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Physiotherapy Across Abuja</h1>
        <p className="text-xl text-gray-600">
          Our clinic is at No 32 Lord Lugard Street, Area 11, Garki, and we offer home physiotherapy visits across Abuja.
          Find your area below.
        </p>
      </div>
    </section>
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/contact" className="rounded-xl border-2 border-blue-600 p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2"><MapPin className="text-blue-600" size={20} /> Garki & Area 11</h2>
          <p className="text-gray-600 mb-3">Our clinic is here. Visit us Monday to Saturday.</p>
          <span className="text-blue-600 font-semibold inline-flex items-center gap-1">Directions & contact <ArrowRight size={16} /></span>
        </Link>
        {areas.map((a) => (
          <Link key={a.slug} to={a.path} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-600 transition-all">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Physiotherapy in {a.name}</h2>
            <p className="text-gray-600 mb-3">{a.whoWeSee[0]}, and more.</p>
            <span className="text-blue-600 font-semibold inline-flex items-center gap-1">Learn more <ArrowRight size={16} /></span>
          </Link>
        ))}
      </div>
      <p className="text-center mt-10">
        <Link to="/home-physiotherapy-abuja" className="text-blue-600 font-semibold">Not listed? We visit homes across Abuja: see home physiotherapy →</Link>
      </p>
    </section>
  </div>
);

export default Areas;
