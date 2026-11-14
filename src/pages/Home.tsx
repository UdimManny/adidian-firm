import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Phone,
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
} from "lucide-react";
import { SEO } from '../components/SEO';
import { conditions } from '../data/conditions';
import { articles } from '../data/articles';

const Home: React.FC = () => {
  const services = [
    {
      id: "pain-management",
      title: "Pain Management",
      image: "/pain.webp",
      description:
        "Comprehensive pain relief solutions for chronic and acute conditions using evidence-based techniques.",
    },
    {
      id: "sports-rehabilitation",
      title: "Sports Rehabilitation",
      image: "/sports.webp",
      description:
        "Specialized treatment for sports injuries and performance enhancement for athletes of all levels.",
    },
    {
      id: "womens-health",
      title: "Women's Health",
      image: "/women.webp",
      description:
        "Specialized physiotherapy for women's health, including pre-natal and post-partum care.",
    },
    {
      id: "neurological-rehabilitation",
      title: "Neurological Rehabilitation",
      image: "/neurological.webp",
      description:
        "Specialized therapy for neurological conditions to improve function and independence.",
    },
    {
      id: "occupational-therapy",
      title: "Occupational Therapy and Ergonomics",
      image: "/ergonomics.webp",
      description:
        "Workplace ergonomics and occupational health solutions to prevent work-related injuries.",
    },
    {
      id: "pediatrics",
      title: "Pediatrics",
      image: "/Pediatrics.webp",
      description:
        "Specialized physiotherapy services for children and adolescents.",
    },
    {
      id: "geriatric-care",
      title: "Geriatric Care",
      image: "/geriatics.avif",
      description:
        "Specialized physiotherapy services for older adults to maintain independence and quality of life.",
    },
    {
      id: "cardiovascular-rehabilitation",
      title: "Cardiovascular Rehabilitation",
      image: "/cardio.webp",
      description:
        "Specialized rehabilitation for heart conditions and cardiovascular health improvement.",
    },
    {
      id: "relaxation-massage",
      title: "Relaxation Massage",
      image: "/massage.webp",
      description:
        "Gentle massage therapy to reduce stress, promote relaxation, and enhance overall well-being.",
    },
  ];
  return (
    <>
      <SEO
        title="Physiotherapy Clinic in Abuja | Adidian Physiotherapy, Area 11 Garki"
        description="Physiotherapy clinic in Area 11, Garki, Abuja. Treatment for back and neck pain, sports injuries, stroke rehab, women's health and more. Home visits available. Call 070-6587-3379."
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Leading Physiotherapy Clinic in Abuja{" "}
                <span className="text-blue-600">Expert Physical Therapy & Rehabilitation</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Adidian Physiotherapy Clinic is the premier physiotherapy clinic in Abuja, located in Garki, Area 11. We provide expert physical therapy, sports rehabilitation, pain management, and specialized treatments. Our licensed physiotherapists serve patients throughout Abuja with evidence-based care for optimal recovery and wellness.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Calendar size={20} />
                  <span className="font-semibold">Book Appointment</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="tel:+2347065873379"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span className="font-semibold">070-6587-3379</span>
                </a>
              </div>

              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
                {['Licensed Professionals', 'Evidence-Based Care', 'Personalized Treatment'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full" aria-hidden="true"></span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/image_nine.webp"
                  alt="Adidian Physiotherapy Clinic in Area 11, Garki, Abuja"
                  className="w-full h-72 md:h-96 object-cover"
                  width={800}
                  height={600}
                  fetchPriority="high"
                />
              </div>

              <div className="absolute -bottom-5 left-4 md:-left-6 bg-white px-5 py-4 rounded-xl shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>

              <div className="absolute -top-5 right-4 md:-right-6 bg-white px-5 py-4 rounded-xl shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Physiotherapy Clinic in Abuja?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As the top-rated physiotherapy clinic in Abuja, we stand for ADIDIAN values that guide our expert physical therapy services
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center p-4 md:p-8 bg-blue-50 rounded-xl">
              <div className="bg-blue-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2">Our Goal</h3>
              <p className="text-gray-600 text-sm">
                Deliver personalized, evidence-based physiotherapy services as the leading clinic in Abuja, providing compassionate care to all patients.
              </p>
            </div>

            <div className="text-center p-4 md:p-8 bg-green-50 rounded-xl">
              <div className="bg-green-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm">
                Help people across Abuja get back to living life free from pain through expert physiotherapy and rehabilitation services.
              </p>
            </div>

            <div className="text-center p-4 md:p-8 bg-purple-50 rounded-xl">
              <div className="bg-purple-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm">
                Be the most trusted physiotherapy clinic in Abuja, revolutionizing physical therapy through pioneering treatments.
              </p>
            </div>

            <div className="text-center p-4 md:p-8 bg-orange-50 rounded-xl">
              <div className="bg-orange-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2">
                Our Community
              </h3>
              <p className="text-gray-600 text-sm">
                Serving the entire Abuja community - from infants to elderly, workers, athletes, and families seeking expert physiotherapy care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Physiotherapy Services in Abuja
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive physiotherapy and physical therapy services at our Abuja clinic, tailored to your unique rehabilitation needs
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <img loading="lazy" decoding="async"
              src='physiotherapy.png'
                // src="https://images.pexels.com/photos/7659652/pexels-photo-7659652.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Black woman receiving physiotherapy treatment"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pain Management</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive pain relief solutions for chronic and acute conditions using evidence-based techniques.
              </p>
              <Link
                to={`/services/${this.id}`}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                Learn More →
              </Link>
              <Link
                to={`/services/${this.id}`}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <img loading="lazy" decoding="async"
              src='/image_one.webp'
                alt="Black woman with baby receiving postnatal care"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cardiovascular Rehabilitation</h3>
              <p className="text-gray-600 mb-4">
                Specialized physiotherapy for women's health, including pre-natal and post-partum care.
              </p>
              <Link
                to={`/services/${this.id}`}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>

          </div> */}

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-white rounded-xl shadow-lg p-3 md:p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <img
                  src={service.image}
                  alt={`${service.title} physiotherapy in Abuja`}
                  className="w-full h-28 md:h-48 object-cover rounded-lg mb-3 md:mb-5"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="hidden md:block text-gray-600 mb-4">{service.description}</p>
                <span className="mt-auto text-sm md:text-base text-blue-600 font-semibold group-hover:text-blue-700">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-200 font-semibold inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conditions We Treat in Abuja</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Physiotherapy at our Garki clinic or in your home for these common problems and more.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {conditions.map((c) => (
              <Link
                key={c.slug}
                to={c.path}
                className="rounded-xl border border-gray-200 p-5 hover:border-blue-600 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-1">{c.h1}</h3>
                <span className="text-blue-600 text-sm font-semibold">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* From the blog */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Physiotherapy advice</h2>
            <Link to="/blog" className="text-blue-600 font-semibold whitespace-nowrap">All articles →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((a) => (
              <Link key={a.slug} to={`/blog/${a.slug}`} className="group bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition-shadow">
                <img loading="lazy" decoding="async" src={a.image} alt={a.title} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600">{a.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Visit the Best Physiotherapy Clinic in Abuja?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards recovery at Adidian Physiotherapy Clinic in Abuja. Our expert physiotherapists are ready to help you achieve optimal health and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold inline-flex items-center justify-center space-x-2"
            >
              <Calendar size={20} />
              <span>Book Appointment</span>
            </Link>
            <a
              href="tel:07065873379"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call: 070-6587-3379</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
