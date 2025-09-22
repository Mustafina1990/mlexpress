import { Link } from 'react-router-dom';
import { 
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
  GlobeAltIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const values = [
    {
      icon: HeartIcon,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority. We go above and beyond to exceed your expectations with every service.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Trust & Reliability',
      description: 'All our team members are background-checked, insured, and bonded. Your home and business are safe with us.'
    },
    {
      icon: SparklesIcon,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from our cleaning techniques to customer service.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Eco-Friendly',
      description: 'We use environmentally responsible cleaning products that are safe for your family, pets, and the planet.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Thompson',
      role: 'Founder & CEO',
      image: '👩‍💼',
      bio: 'With over 10 years in the cleaning industry, Sarah founded ML expresstäd AB with a vision to provide exceptional cleaning services that busy families and businesses can rely on.',
      experience: '10+ years'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Operations Manager',
      image: '👨‍💻',
      bio: 'Mike ensures our cleaning teams are properly trained and equipped to deliver consistent, high-quality results. He oversees quality control and customer satisfaction.',
      experience: '7+ years'
    },
    {
      name: 'Emily Chen',
      role: 'Customer Success Manager',
      image: '👩‍💼',
      bio: 'Emily is dedicated to ensuring every customer has an exceptional experience. She handles scheduling, special requests, and maintains our high service standards.',
      experience: '5+ years'
    },
    {
      name: 'David Wilson',
      role: 'Head of Training',
      image: '👨‍🏫',
      bio: 'David develops our training programs and ensures all team members are equipped with the latest cleaning techniques and safety protocols.',
      experience: '8+ years'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '5,000+', label: 'Cleanings Completed' },
    { number: '5', label: 'Years in Business' },
    { number: '4.9/5', label: 'Average Rating' }
  ];

  const achievements = [
    {
      icon: TrophyIcon,
      title: 'Best Cleaning Service 2024',
      description: 'Local Business Excellence Award'
    },
    {
      icon: StarIcon,
      title: '4.9/5 Customer Rating',
      description: 'Based on 200+ verified reviews'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Fully Licensed & Insured',
      description: 'Complete protection for our clients'
    },
    {
      icon: UserGroupIcon,
      title: 'Trained Professionals',
      description: 'All staff certified and background-checked'
    }
  ];

  const whyChooseUs = [
    'Experienced and trained cleaning professionals',
    'Eco-friendly and safe cleaning products',
    'Flexible scheduling to fit your needs',
    'Satisfaction guarantee on all services',
    'Competitive pricing with no hidden fees',
    'Fully insured and bonded team',
    'Same team for consistency and trust',
    'Emergency and last-minute cleaning available'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <SparklesIcon className="h-4 w-4" />
              <span>About ML expresstäd AB</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted Cleaning Professionals
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Since 2020
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're more than just a cleaning company. We're your trusted partners in creating 
              clean, healthy, and comfortable spaces where you can thrive. Our commitment to 
              excellence has made us the preferred choice for hundreds of satisfied customers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  ML expresstäd AB was founded in 2020 with a simple mission: to provide reliable, 
                  high-quality cleaning services that give people more time to focus on what matters 
                  most to them. What started as a small local business has grown into a trusted name 
                  in professional cleaning services.
                </p>
                <p>
                  Our founder, Sarah Thompson, recognized the need for a cleaning service that truly 
                  cared about its customers' homes and businesses. She assembled a team of dedicated 
                  professionals who share her commitment to excellence and attention to detail.
                </p>
                <p>
                  Today, we're proud to serve hundreds of customers across the community, from busy 
                  families to growing businesses. Our success is built on trust, reliability, and 
                  an unwavering commitment to delivering exceptional results every time.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-2xl">
              <div className="text-6xl mb-6 text-center">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                To transform spaces and lives through exceptional cleaning services, 
                giving our customers the gift of time and peace of mind while maintaining 
                the highest standards of quality, trust, and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape how we serve our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional cleaning services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <div className="text-sm text-gray-500 mb-4">{member.experience} experience</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition and credentials that demonstrate our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <achievement.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose ML expresstäd AB?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand that inviting someone into your home or business is a big decision. 
                Here's why hundreds of customers trust us with their cleaning needs:
              </p>
              <div className="grid grid-cols-1 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-2xl">
              <div className="text-center">
                <HandRaisedIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Satisfaction Guarantee</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We stand behind our work. If you're not completely satisfied with our service, 
                  we'll return within 24 hours to make it right at no additional cost.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">24-Hour</div>
                  <div className="text-gray-600">Service Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join our family of satisfied customers and discover why ML expresstäd AB is the 
            trusted choice for professional cleaning services. Get your free estimate today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Estimate
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

export default About;