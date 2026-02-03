import React from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { letter: 'A', word: 'Accessibility', description: 'We make quality care accessible to everyone' },
    { letter: 'D', word: 'Diligence', description: 'We approach every case with careful attention' },
    { letter: 'I', word: 'Innovative', description: 'We use cutting-edge techniques and treatments' },
    { letter: 'D', word: 'Distinguished', description: 'We maintain the highest standards of excellence' },
    { letter: 'I', word: 'Industrious', description: 'We work tirelessly for your recovery' },
    { letter: 'A', word: 'Affordability', description: 'We provide exceptional value for our services' },
    { letter: 'N', word: 'Noble', description: 'We serve with integrity and compassion' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Our Physiotherapy Clinic in Abuja</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established in 2023, Adidian has grown from a home-service provider to the leading physiotherapy clinic in Abuja, 
              driven by our commitment to exceptional patient care and community wellness throughout the FCT.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
              src='image_eight.jpg'
                // src="https://images.pexels.com/photos/5794057/pexels-photo-5794057.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Black physiotherapist with patient"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story as Abuja's Premier Physiotherapy Clinic</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Adidian Physiotherapy Clinic was established in 2023 in Abuja, beginning as a home-service care provider. 
                  We started by moving from one patient's house to the next across Abuja, rendering exceptional physiotherapy services to 
                  numerous patients throughout Garki, Wuse, Maitama, and surrounding areas.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our ever-growing desire to provide the best physical therapy intervention in Abuja motivated us to 
                  establish this clinic. We recognized the need for accessible, high-quality physiotherapy 
                  services that truly understood and served Abuja's unique healthcare needs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we employ competent, licensed, goal-oriented physiotherapists with both academic prowess 
                  and clinical excellence, making us the top physiotherapy clinic in Abuja. From our 
                  inception till today, we continue to serve the Abuja community with the same founding core values and guiding 
                  principles that have led to our growth and success as the leading physiotherapy clinic in the FCT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Goal</h3>
              <p className="text-gray-600 text-sm">
                Deliver personalized, evidence-based physiotherapy services in a compassionate and supportive 
                environment, prioritizing patient care, comfort and satisfaction.
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-xl">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm">
                Help people get back to living life free from pain and discomfort. You won't need to frequently 
                visit your doctors, living life full of energy and vitality.
              </p>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-xl">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-sm">
                Revolutionize physiotherapy by providing pioneering, evidence-based treatments that transform 
                lives and empower a healthier, more active community.
              </p>
            </div>

            <div className="text-center p-8 bg-orange-50 rounded-xl">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Community</h3>
              <p className="text-gray-600 text-sm">
                Serving everyone from infants to elderly, workers, athletes, and families seeking healing 
                and wellness in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Vision as Abuja's Leading Physiotherapy Clinic</h2>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where our physiotherapy clinic in Abuja is recognized as a global leader in physiotherapy 
                innovation and excellence, where our team comprises the most talented, compassionate, 
                and dedicated physiotherapy professionals serving the Abuja community and beyond.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Our patients across Abuja achieve remarkable physiotherapy outcomes, exceeding expectations and improving quality of life</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">We collaborate with healthcare leaders in Abuja and researchers to advance physiotherapy practices</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">We make a lasting impact on patients, the Abuja community, and the physiotherapy profession at large</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">We push boundaries of what's possible in physiotherapy treatment, setting new standards for clinics in Abuja</p>
                </div>
              </div>
            </div>
            
            <div>
              <img
              src='blackphysio.webp'
                // src="blackphysio.webp?auto=compress&cs=tinysrgb&w=800"
                alt="Black physiotherapist consulting with patient"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Serve at Our Abuja Physiotherapy Clinic</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive physiotherapy care extends to everyone in the Abuja community, from infants to elderly, 
              addressing diverse health and wellness needs across all areas of the FCT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Infants to elderly people of all ages',
              'Those with persistent pain seeking relief',
              'People on pain medications needing permanent solutions',
              'Workers needing occupational and ergonomic help',
              'Ante-natal and post-natal women',
              'Those seeking fitness and weight management',
              'People with mobility, sitting, or sleeping difficulties',
              'Children with delayed developmental milestones',
              'Athletes requiring specialized physiotherapy',
              'Accident victims and trauma survivors',
              'People seeking general fitness and wellness',
              'Those unsatisfied with previous physiotherapy results',
              'Individuals needing relaxation and cosmetic therapy'
            ].map((audience, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{audience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADIDIAN Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">We Stand For ADIDIAN</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                    {value.letter}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{value.word}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;