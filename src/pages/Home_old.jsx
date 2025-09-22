import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  SparklesIcon, 
  ClockIcon, 
  UserGroupIcon,
  ShieldCheckIcon,
  StarIcon,
  HeartIcon,
  HomeIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const features = [
    {
      icon: CheckCircleIcon,
      title: 'Professional Quality',
      description: 'Our trained professionals deliver exceptional cleaning results every time with attention to detail.'
    },
    {
      icon: SparklesIcon,
      title: 'Eco-Friendly Products',
      description: 'We use environmentally safe cleaning products that are safe for your family and pets.'
    },
    {
      icon: ClockIcon,
      title: 'Reliable & Punctual',
      description: 'We arrive on time and complete our work efficiently, respecting your valuable time.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Fully Insured',
      description: 'All our staff are background-checked, insured, and bonded for your peace of mind.'
    }
  ];

  const services = [
    {
      title: 'Residential Cleaning',
      description: 'Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas.',
      price: 'Starting at $80',
      icon: HomeIcon,
      features: ['Weekly/Bi-weekly/Monthly', 'Custom cleaning plans', 'Same team every visit']
    },
    {
      title: 'Commercial Cleaning',
      description: 'Professional office and commercial space cleaning for businesses of all sizes.',
      price: 'Starting at $120',
      icon: BuildingOfficeIcon,
      features: ['Flexible scheduling', 'After-hours service', 'Customized protocols']
    },
    {
      title: 'Deep Cleaning',
      description: 'Thorough deep cleaning service perfect for move-ins, post-construction, or seasonal cleaning.',
      price: 'Starting at $150',
      icon: WrenchScrewdriverIcon,
      features: ['Move-in/move-out', 'Post-construction', 'One-time service']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Downtown',
      rating: 5,
      text: 'Sparkle Clean transformed my home! Their team is professional, thorough, and always on time. I highly recommend their services.',
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      location: 'Business District',
      rating: 5,
      text: 'Outstanding commercial cleaning service. Our office has never looked better. The team is reliable and pays attention to every detail.',
      image: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Suburbia',
      rating: 5,
      text: 'I love coming home to a spotless house! Sparkle Clean has made my life so much easier. Worth every penny!',
      image: '👩‍🏫'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <SparklesIcon className="h-4 w-4" />
              <span>Professional Cleaning Services Since 2020</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Home Deserves a
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Sparkle Clean
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your space with our professional cleaning services. We deliver exceptional results 
              with eco-friendly products, giving you more time to focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
              >
                <span>📞</span>
                <span>Call Now: (123) 456-7890</span>
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">5★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
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