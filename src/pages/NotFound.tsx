import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const NotFound = () => (
  <>
    <SEO
      title="Page Not Found | Adidian Physiotherapy Clinic Abuja"
      description="The page you are looking for does not exist. Browse our physiotherapy services in Abuja or contact the clinic."
      noindex
    />
    <div className="pt-32 pb-24 text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page not found</h1>
      <p className="text-gray-600 mb-8">Sorry, we couldn't find that page.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
          Go to homepage
        </Link>
        <Link to="/services" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold">
          View our services
        </Link>
      </div>
    </div>
  </>
);

export default NotFound;
