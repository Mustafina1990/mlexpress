import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/solid';

const Services = () => {
  const services = [
    {
      title: 'Residential Cleaning',
      description: 'Complete home cleaning services for busy families',
      price: 'Starting at $80',
      icon: '🏠',
      features: [
        'Kitchen and bathroom deep clean',
        'Vacuum and mop all floors',
        'Dust all surfaces and furniture',
        'Window cleaning (interior)',
        'Trash removal',
        'Bed making and organizing'
      ]
    },
    {
      title: 'Office Cleaning',
      description: 'Professional commercial cleaning for workspaces',
      price: 'Starting at $120',
      icon: '🏢',
      features: [
        'Desk and workstation cleaning',
        'Bathroom sanitization',
        'Kitchen/break room cleaning',
        'Floor cleaning and maintenance',
        'Trash and recycling removal',
        'Conference room setup'
      ]
    },
    {
      title: 'Deep Cleaning',
      description: 'Thorough cleaning for special occasions',
      price: 'Starting at $150',
      icon: '🧽',
      features: [
        'Inside appliance cleaning',
        'Baseboards and crown molding',
        'Light fixtures and ceiling fans',
        'Cabinet front and door cleaning',
        'Detailed bathroom scrubbing',
        'Window sill and track cleaning'
      ]
    },
    {
      title: 'Move-in/Move-out',
      description: 'Complete cleaning for relocations',
      price: 'Starting at $200',
      icon: '📦',
      features: [
        'Complete property cleaning',
        'Appliance interior cleaning',
        'Cabinet and drawer cleaning',
        'Closet cleaning and organizing',
        'Garage and basement cleaning',
        'Final inspection and touch-ups'
      ]
    },
    {
      title: 'Post-Construction',
      description: 'Specialized cleaning after renovations',
      price: 'Custom Quote',
      icon: '🏗️',
      features: [
        'Dust and debris removal',
        'Paint and adhesive removal',
        'Window and glass cleaning',
        'Floor deep cleaning',
        'HVAC vent cleaning',
        'Final polish and detailing'
      ]
    },
    {
      title: 'One-Time Cleaning',
      description: 'Perfect for special events or occasions',
      price: 'Starting at $100',
      icon: '⭐',
      features: [
        'Flexible scheduling',
        'Customizable service',
        'No long-term commitment',
        'Same-day availability',
        'Event preparation cleaning',
        'Holiday cleaning specials'
      ]
    }
  ];

  const addOns = [
    { name: 'Interior Window Cleaning', price: '$3 per window' },
    { name: 'Refrigerator Interior', price: '$25' },
    { name: 'Oven Interior', price: '$25' },
    { name: 'Garage Cleaning', price: '$40' },
    { name: 'Basement Cleaning', price: '$50' },
    { name: 'Laundry Service', price: '$15 per load' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">
            Professional cleaning solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="text-6xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-center block"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Customize your cleaning package with these add-on services
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOns.map((addon, index) => (
                <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                  <span className="font-medium">{addon.name}</span>
                  <span className="text-blue-600 font-bold">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Your Cleaning?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a custom quote based on your specific needs
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:555-123-4567"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;