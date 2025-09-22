import { Link } from 'react-router-dom';
import { CheckCircleIcon, SparklesIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const features = [
    {
      icon: CheckCircleIcon,
      title: 'Professional Quality',
      description: 'Our trained professionals deliver exceptional cleaning results every time.'
    },
    {
      icon: SparklesIcon,
      title: 'Eco-Friendly Products',
      description: 'We use environmentally safe cleaning products that are safe for your family and pets.'
    },
    {
      icon: ClockIcon,
      title: 'Reliable Schedule',
      description: 'We arrive on time and complete our work efficiently, respecting your schedule.'
    },
    {
      icon: UserGroupIcon,
      title: 'Trusted Team',
      description: 'All our staff are background-checked, insured, and trained professionals.'
    }
  ];

  const services = [
    {
      title: 'Residential Cleaning',
      description: 'Complete home cleaning services tailored to your needs.',
      price: 'Starting at $80',
      image: '🏠'
    },
    {
      title: 'Office Cleaning',
      description: 'Professional office and commercial space cleaning.',
      price: 'Starting at $120',
      image: '🏢'
    },
    {
      title: 'Deep Cleaning',
      description: 'Thorough deep cleaning for special occasions or move-ins.',
      price: 'Starting at $150',
      image: '🧽'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Cleaning Services You Can Trust
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Reliable, efficient, and eco-friendly cleaning solutions for your home and office
            </p>
            <div className="space-x-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Get Free Quote
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MLExpress?
            </h2>
            <p className="text-lg text-gray-600">
              We're committed to providing the best cleaning experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Popular Services
            </h2>
            <p className="text-lg text-gray-600">
              Professional cleaning solutions for every need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-4 text-center">{service.image}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">{service.price}</span>
                  <Link
                    to="/contact"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free, no-obligation quote
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
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;