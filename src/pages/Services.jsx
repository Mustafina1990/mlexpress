import { Link } from 'react-router-dom';
import { 
  HomeIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  SparklesIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const mainServices = [
    {
      title: 'Residential Cleaning',
      description: 'Complete home cleaning services designed to keep your living space spotless and comfortable. Our residential cleaning covers every corner of your home with meticulous attention to detail.',
      icon: HomeIcon,
      price: 'Starting at $80',
      duration: '1-3 hours',
      frequency: 'Weekly, Bi-weekly, Monthly',
      features: [
        'Kitchen deep cleaning and sanitization',
        'Bathroom cleaning and disinfection',
        'Bedroom and living room cleaning',
        'Floor vacuuming and mopping',
        'Dusting all surfaces and furniture',
        'Trash removal and bin cleaning',
        'Window sill and mirror cleaning',
        'Custom cleaning upon request'
      ],
      addOns: [
        { name: 'Inside oven cleaning', price: '+$25' },
        { name: 'Inside refrigerator cleaning', price: '+$20' },
        { name: 'Inside windows', price: '+$3 per window' },
        { name: 'Garage cleaning', price: '+$40' }
      ]
    },
    {
      title: 'Commercial Cleaning',
      description: 'Professional office and commercial space cleaning services for businesses of all sizes. We maintain a clean, healthy, and productive work environment for your team and clients.',
      icon: BuildingOfficeIcon,
      price: 'Starting at $120',
      duration: '2-4 hours',
      frequency: 'Daily, Weekly, Custom schedule',
      features: [
        'Office space cleaning and organization',
        'Conference room and meeting space cleaning',
        'Restroom cleaning and sanitization',
        'Break room and kitchen area cleaning',
        'Floor cleaning and maintenance',
        'Trash and recycling management',
        'Surface disinfection and sanitization',
        'After-hours cleaning available'
      ],
      addOns: [
        { name: 'Carpet deep cleaning', price: '+$50' },
        { name: 'Window cleaning (exterior)', price: '+$5 per window' },
        { name: 'Warehouse cleaning', price: 'Custom quote' },
        { name: 'Event cleanup', price: 'Custom quote' }
      ]
    },
    {
      title: 'Deep Cleaning',
      description: 'Comprehensive deep cleaning service that goes beyond regular maintenance. Perfect for move-ins, post-construction cleanup, seasonal cleaning, or when you need a fresh start.',
      icon: WrenchScrewdriverIcon,
      price: 'Starting at $150',
      duration: '4-8 hours',
      frequency: 'One-time, Seasonal',
      features: [
        'Detailed cleaning of all rooms',
        'Inside appliance cleaning',
        'Cabinet and drawer cleaning',
        'Baseboards and trim cleaning',
        'Light fixture cleaning',
        'Air vent cleaning',
        'Behind furniture cleaning',
        'Detailed bathroom and kitchen deep clean'
      ],
      addOns: [
        { name: 'Pressure washing', price: '+$100' },
        { name: 'Carpet steam cleaning', price: '+$75' },
        { name: 'Upholstery cleaning', price: '+$60' },
        { name: 'Attic/basement cleaning', price: '+$80' }
      ]
    }
  ];

  const specialtyServices = [
    {
      title: 'Post-Construction Cleanup',
      description: 'Specialized cleaning after renovation or construction work',
      icon: ClipboardDocumentCheckIcon,
      price: 'Custom Quote'
    },
    {
      title: 'Move-In/Move-Out',
      description: 'Complete cleaning for property transitions',
      icon: UserGroupIcon,
      price: 'Starting at $200'
    },
    {
      title: 'Event Cleanup',
      description: 'Pre and post-event cleaning services',
      icon: CalendarDaysIcon,
      price: 'Starting at $100'
    },
    {
      title: 'Emergency Cleaning',
      description: '24/7 emergency cleaning services',
      icon: ClockIcon,
      price: 'Starting at $120'
    }
  ];

  const cleaningProcess = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We assess your space and discuss your specific cleaning needs and preferences.'
    },
    {
      step: 2,
      title: 'Custom Cleaning Plan',
      description: 'We create a tailored cleaning plan that fits your schedule and budget.'
    },
    {
      step: 3,
      title: 'Professional Service',
      description: 'Our trained team arrives with all supplies and delivers exceptional results.'
    },
    {
      step: 4,
      title: 'Quality Assurance',
      description: 'We perform a final inspection to ensure everything meets our high standards.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <SparklesIcon className="h-4 w-4" />
              <span>Professional Cleaning Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Cleaning
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From regular home maintenance to deep commercial cleaning, we offer comprehensive 
              services tailored to meet your specific needs and exceed your expectations.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Main Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of professional cleaning services
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{service.price}</div>
                        <div className="text-sm text-gray-600">Base Price</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{service.duration}</div>
                        <div className="text-sm text-gray-600">Duration</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{service.frequency}</div>
                        <div className="text-sm text-gray-600">Frequency</div>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-md hover:shadow-lg inline-block"
                    >
                      Book This Service
                    </Link>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">What's Included:</h4>
                    <div className="grid grid-cols-1 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-4">Optional Add-ons:</h4>
                    <div className="space-y-2">
                      {service.addOns.map((addon, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-700">{addon.name}</span>
                          <span className="text-blue-600 font-semibold">{addon.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialty Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Additional services for special situations and unique cleaning needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialtyServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-lg font-bold text-blue-600 mb-4">{service.price}</div>
                <Link
                  to="/contact"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cleaning Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure consistent, high-quality results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cleaningProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote. We'll help you choose 
            the perfect cleaning plan for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+1234567890"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Call (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;