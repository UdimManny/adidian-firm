import React from 'react';
import { Shield, Activity, Zap, Waves, Stethoscope, Users, Brain, Heart } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { conditions } from '../data/conditions';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Preventive Services',
      icon: Shield,
      color: 'bg-blue-50 text-blue-600',
      image: '/physiooffice.webp',
      services: [
        'Health education and wellness programs',
        'Injury prevention and risk assessment',
        'Ergonomic consultations',
        'Fitness and exercise programs'
      ]
    },
    {
      title: 'Rehabilitative Services',
      icon: Activity,
      color: 'bg-green-50 text-green-600',
      image: '/rehab.avif',
      services: [
        'Pain management (headaches, chronic pain)',
        'Orthopedic rehabilitation (sports injury, post-op)',
        'Neurological rehabilitation (stroke, spinal cord)',
        'Cardiovascular rehabilitation',
        'Pediatric rehabilitation',
        'Geriatric physiotherapy'
      ]
    },
    {
      title: 'Therapeutic Services',
      icon: Zap,
      color: 'bg-purple-50 text-purple-600',
      image: '/therapy-opt.webp',
      services: [
        'Manual therapy',
        'Exercise therapy',
        'Electrotherapy',
        'Hydrotherapy',
        'Pain management'
      ]
    },
    {
      title: 'Specialized Services',
      icon: Waves,
      color: 'bg-orange-50 text-orange-600',
      image: '/therapy.webp',
      services: [
        'Sports physiotherapy',
        "Women's health physiotherapy",
        'Occupational health physiotherapy',
        'Prosthetics and orthotics placement',
        'Relaxation massages and spa'
      ]
    },
    {
      title: 'Diagnostic Services',
      icon: Stethoscope,
      color: 'bg-red-50 text-red-600',
      image: '/diagnosis.webp',
      services: [
        'Biomechanical assessment',
        'Movement analysis',
        'Functional capacity evaluation',
        'Neurological assessment'
      ]
    },
    {
      title: 'Supportive Services',
      icon: Heart,
      color: 'bg-pink-50 text-pink-600',
      image: '/support.webp',
      services: [
        'Disability support and advocacy',
        'Chronic disease management',
        'Palliative care',
        'Mental health support'
      ]
    }
  ];

  return (
    <div>
      <SEO
        title="Physiotherapy Services in Abuja | Pain, Sports, Stroke & Women's Health"
        description="Physiotherapy services at our Abuja clinic: pain management, sports rehabilitation, neurological and stroke rehab, women's health, paediatrics, geriatric care and massage."
        breadcrumbs={[{ name: "Services", path: "/services" }]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Physiotherapy Services in Abuja</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our physiotherapy clinic in Abuja offers a comprehensive range of physical therapy services, customized to meet your specific needs 
              and help you achieve optimal health and wellness. Serving patients throughout Garki, Wuse, Maitama, and all areas of Abuja.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-36 md:h-48 overflow-hidden">
                    <img loading="lazy" decoding="async"
                      src={category.image}
                      alt={`${category.title} - Black healthcare professional`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${category.color} flex items-center justify-center mb-4 md:mb-6`}>
                      <IconComponent size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-gray-600 text-sm flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Physiotherapy Consultation Options in Abuja</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Users className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Physical Consultation</h4>
                      <p className="text-gray-600">In-person sessions at our Abuja physiotherapy clinic for hands-on treatment and comprehensive care</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Brain className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Phone Consultation</h4>
                      <p className="text-gray-600">Remote physiotherapy consultations for initial assessment, follow-ups, and guidance for patients across Abuja</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="tel:07065873379"
                    className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-200 font-semibold inline-block"
                  >
                    Book Your Consultation
                  </a>
                </div>
              </div>
              <div>
                <img loading="lazy" decoding="async"
               src='/image_nine.webp'
                  // src="https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg"
                  alt="Black physiotherapist consulting with patient"
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ergonomic Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ergonomic Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized workplace health solutions to prevent injuries and improve productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Ergonomic Consultations',
                description: 'Professional workplace assessments and recommendations',
                icon: '🏢'
              },
              {
                title: 'Wellness Programs',
                description: 'Comprehensive employee health and wellness initiatives',
                icon: '💪'
              },
              {
                title: 'Injury Prevention',
                description: 'Proactive strategies to prevent workplace injuries',
                icon: '🛡️'
              },
              {
                title: 'On-site Sessions',
                description: 'Personalized physiotherapy sessions at your workplace',
                icon: '🏥'
              }
            ].map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our expert physiotherapy team in Abuja will help you find the best treatment option for your needs and customize your rehabilitation plan to reach your goals at the most affordable cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07065873379"
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold"
            >
              Call: 070-6587-3379
            </a>
            <a
              href="mailto:adidianphysiotherapyclinic@gmail.com"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Inpatient Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Inpatient Physiotherapy Services in Abuja</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive inpatient rehabilitation services at our Abuja physiotherapy clinic with state-of-the-art equipment and evidence-based approaches
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img loading="lazy" decoding="async"
              src='/therapy-opt.webp'
                // src="hjpeg"
                alt="Black physiotherapist in rehabilitation center"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Inpatient Physiotherapy Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                Adidian Physiotherapy Clinic is a leading Outpatient and Inpatient physiotherapy clinic in Abuja with Doctors and Nurses on stand-by, 
                readily equipped to attend to your specific rehabilitation needs. We use state-of-art physiotherapy equipment and evidence-based 
                approaches to restore patients back to optimal function.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our Abuja physiotherapy clinic has partnered with Alliance Hospital, Hillshore Clinics and Health resorts. The rehabilitation 
                centre specializes in post-traumatic cases like post-op physiotherapy rehabilitation (patients recovering from major 
                surgeries, orthopedic surgeries, Brain and Spine Surgeries and Spinal cord injuries).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-50 rounded-xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Frequent check-up by your health care Nurses to administer any treatment, care and medications needed
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Morning, Mid-day and Evening Physiotherapy Sessions for at least 4 times to 6 times per week
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Your meals will be served specifically according to your Doctor and Dietician recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Visitation is allowed by family and friends scheduled for evening hours
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Conditions We Admit</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Stroke
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Brain and Spinal Cord Injury
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Fractures
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Amputations
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Neurological disorders (Parkinson's, Muscular Dystrophy, Multiple Sclerosis)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Myopathy
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Multiple Trauma
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Admission Requirements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Requirements for Admission:</h5>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Patients must be 18 years and above
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Must have a rehabilitation related condition diagnosed by Doctor
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Patient must be mentally stable to cooperate with rehabilitation
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Must be comprehensive and coherent in speech for better communication
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Must require the care of a Physician specific to rehabilitation
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Must be willing to participate with clinical staff (Nurses and Doctors)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Must have a Post-rehabilitation discharge plan (Home-programs)
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Cases We Do Not Admit:</h5>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Patients under 18 years of age and above 95 years of age
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Patients in need of Intensive Care
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Patient with mental disorders
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Patients with severe Dementia and Schizophrenia
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Patients that have impaired speech and vision
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Burns patients
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  If patients under this condition is referred to our clinic, we can recommend other alternative centers.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-blue-600 text-white rounded-2xl p-12">
            <h4 className="text-2xl font-bold mb-4">Your Recovery Journey Starts Here</h4>
            <p className="text-lg mb-6 opacity-90">
              Your recovery and wellness begins with you. It begins with your mindset and positive approach to your condition. 
              Your willingness, eagerness and faith to participate in the rehabilitative programs will really go a long way 
              in your recovery during your stay.
            </p>
            <p className="mb-8 opacity-90">
              Remember our goal: bringing you back to optimal function! The joint efforts of you, your Physician, 
              your Physiotherapist, Nurses and Occupational therapists will work to achieve our set goals.
            </p>
            <a
              href="tel:07065873379"
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold"
            >
              Contact Us to Book Admission
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;