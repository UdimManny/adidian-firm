import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap } from 'lucide-react';

// This is a template component. In a real app, the content would be dynamic
// based on a URL parameter (e.g., /services/:serviceId)

const ServiceDetail: React.FC = () => {
  const service = {
    title: 'Pain Management',
    image: '/physiotherapy.png',
    intro: 'Our primary goal is to help you overcome pain and regain control of your life. We use a combination of advanced diagnostics and proven therapeutic techniques to address the root cause of your discomfort.',
    conditions: [
      'Chronic Back and Neck Pain',
      'Arthritis and Joint Pain',
      'Fibromyalgia and Chronic Fatigue',
      'Headaches and Migraines',
      'Nerve Pain (e.g., Sciatica)',
      'Post-Surgical Pain'
    ],
    approach: [
      'Manual Therapy (Joint Mobilization & Soft Tissue Release)',
      'Therapeutic Exercise Programs',
      'Pain Neuroscience Education',
      'Modalities like Ultrasound and TENS for pain relief',
      'Customized Home Exercise Programs'
    ]
  };

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section 
        className="bg-cover bg-center py-24 text-white" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${service.image})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold">{service.title}</h1>
          <p className="mt-4 text-xl max-w-3xl">Dedicated care to help you move freely and live without pain.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">A Personalised Approach to Pain Relief</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{service.intro}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Conditions We Treat</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.conditions.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="text-green-500 w-6 h-6 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Treatment Approach</h3>
                <ul className="space-y-4">
                  {service.approach.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Zap className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: CTA */}
            <aside className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Your Consultation</h3>
                <p className="text-gray-600 mb-6">Take the first step towards a pain-free life. Our team is ready to help.</p>
                <Link 
                  to="/contact"
                  className="w-full text-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold block"
                >
                  Book an Appointment
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
