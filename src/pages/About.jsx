import { Link } from 'react-router-dom';
import { ShieldCheckIcon, HeartIcon, StarIcon } from '@heroicons/react/24/solid';

const About = () => {
  const values = [
    {
      icon: ShieldCheckIcon,
      title: 'Reliability',
      description: 'We show up on time, every time, and deliver consistent quality service you can count on.'
    },
    {
      icon: HeartIcon,
      title: 'Care',
      description: 'We treat your home and office with the same care and attention we would give our own.'
    },
    {
      icon: StarIcon,
      title: 'Excellence',
      description: 'We strive for perfection in every cleaning task, ensuring your complete satisfaction.'
    }
  ];

  const team = [
    {
      name: 'Maria Lopez',
      role: 'Founder & CEO',
      bio: 'With over 15 years in the cleaning industry, Maria founded MLExpress to provide reliable, professional cleaning services.',
      image: '👩‍💼'
    },
    {
      name: 'James Wilson',
      role: 'Operations Manager',
      bio: 'James ensures our team delivers consistent quality and manages our daily operations with precision.',
      image: '👨‍💼'
    },
    {
      name: 'Sarah Chen',
      role: 'Customer Success',
      bio: 'Sarah leads our customer service team and ensures every client receives exceptional support.',
      image: '👩‍💻'
    },
    {
      name: 'David Rodriguez',
      role: 'Quality Control',
      bio: 'David oversees our quality standards and training programs to maintain our high service level.',
      image: '👨‍🔧'
    }
  ];

  const stats = [
    { number: '5+', label: 'Years in Business' },
    { number: '500+', label: 'Happy Clients' },
    { number: '10,000+', label: 'Cleanings Completed' },
    { number: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About MLExpress</h1>
          <p className="text-xl text-blue-100">
            Your trusted partner in professional cleaning services
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  MLExpress was founded in 2019 with a simple mission: to provide reliable, 
                  professional cleaning services that give our clients more time to focus on 
                  what matters most to them.
                </p>
                <p>
                  Starting as a small family business, we've grown through word-of-mouth 
                  recommendations and our unwavering commitment to quality. We understand 
                  that inviting someone into your home or office requires trust, and we 
                  work hard every day to earn and maintain that trust.
                </p>
                <p>
                  Today, we serve hundreds of satisfied customers across the city, from 
                  busy families to growing businesses. Our team of trained professionals 
                  brings the same level of care and attention to every cleaning job, 
                  whether it's a weekly home visit or a one-time deep clean.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-9xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Award-Winning Service</h3>
              <p className="text-gray-600">Recognized for excellence in customer service and quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <value.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-blue-100">
              Numbers that speak to our experience and reliability
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              The dedicated professionals behind MLExpress
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose MLExpress?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Fully Insured & Bonded</h4>
                  <p className="text-gray-600">Complete protection for your peace of mind</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Background-Checked Staff</h4>
                  <p className="text-gray-600">All team members are thoroughly vetted</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Eco-Friendly Products</h4>
                  <p className="text-gray-600">Safe for your family, pets, and environment</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Satisfaction Guarantee</h4>
                  <p className="text-gray-600">We'll make it right if you're not completely satisfied</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Flexible Scheduling</h4>
                  <p className="text-gray-600">We work around your schedule and needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Competitive Pricing</h4>
                  <p className="text-gray-600">Quality service at fair, transparent rates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the MLExpress Difference?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of satisfied customers who trust us with their cleaning needs
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Your Free Quote Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;