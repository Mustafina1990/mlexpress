import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  SparklesIcon,
  HomeIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    propertyType: '',
    squareFootage: '',
    frequency: '',
    date: '',
    time: '',
    message: '',
    address: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Create email content
    const emailBody = `
Ny förfrågan från ML expresstäd AB webbplats:

Namn: ${formData.name}
E-post: ${formData.email}
Telefon: ${formData.phone}
Tjänst: ${formData.service}
Fastighetstyp: ${formData.propertyType}
Kvadratmeter: ${formData.squareFootage}
Frekvens: ${formData.frequency}
Önskat datum: ${formData.date}
Tid: ${formData.time}
Adress: ${formData.address}

Meddelande:
${formData.message}
    `;
    
    // Create mailto link for testing
    const mailtoLink = `mailto:mystafinayulija@gmail.com?subject=Ny förfrågan från ML expresstäd AB&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setFormStatus('success');
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        propertyType: '',
        squareFootage: '',
        frequency: '',
        date: '',
        time: '',
        message: '',
        address: ''
      });
      setFormStatus('');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'SMS',
      details: ['+46 76 552 31 87', 'Skicka SMS när som helst - Vi svarar snabbt'],
      link: 'sms:+46765523187'
    },
    {
      icon: EnvelopeIcon,
      title: 'E-post',
      details: ['info@mlexpresstad.se', 'Vi svarar inom 2 timmar'],
      link: 'mailto:info@mlexpresstad.se'
    },
    {
      icon: MapPinIcon,
      title: 'Serviceområde',
      details: ['Stockholm & Närområden', 'Premium service coverage'],
      link: '#service-area'
    },
    {
      icon: ClockIcon,
      title: 'Office Hours',
      details: ['Mon-Fri: 8AM-6PM', 'Sat-Sun: 9AM-4PM'],
      link: null
    }
  ];

  const serviceAreas = [
    'Downtown', 'Midtown', 'Uptown', 'East Side', 'West End', 
    'Suburbs North', 'Suburbs South', 'Business District', 
    'Historic District', 'University Area'
  ];

  const services = [
    { value: 'residential', label: 'Residential Cleaning', icon: HomeIcon },
    { value: 'commercial', label: 'Commercial Cleaning', icon: BuildingOfficeIcon },
    { value: 'deep', label: 'Deep Cleaning', icon: WrenchScrewdriverIcon },
    { value: 'movein', label: 'Move-in/Move-out', icon: CalendarDaysIcon }
  ];

  const frequencies = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'biweekly', label: 'Bi-weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'onetime', label: 'One-time' }
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Luxury Hero Section */}
      <section className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 30%, #1E3A8A 70%, #0F172A 100%)'
      }}>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 luxury-card px-6 py-3 rounded-full text-sm font-medium mb-8 border border-yellow-400/30">
              <SparklesIcon className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-200">Få Din Kostnadsfria Offert</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-['Playfair_Display'] mb-8">
              <span className="text-white block mb-2">Redo att</span>
              <span className="luxury-text-gradient block relative">
                Komma igång?
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-yellow-500/20 blur-lg -z-10"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              <strong className="text-yellow-400">Fyll i formuläret nedan</strong> för att få din kostnadsfria, 
              förpliktelsefria offert. Vi skapar en anpassad städplan som passar dina behov och budget. 
              Snabbt svar garanterat!
            </p>
            <div className="mb-8">
              <p className="text-lg text-gray-300 font-medium">
                🔽 <span className="text-yellow-400">Huvudsättet att beställa:</span> Fyll i formuläret nedan 🔽
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-transparent bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text mb-4">
              Hur Du Kontaktar Oss
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Vi rekommenderar starkt att du använder formuläret nedan för snabbast service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primary Method - Form */}
            <div className="luxury-card text-center p-8 border-2 border-yellow-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold">
                REKOMMENDERAS
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <ClipboardDocumentCheckIcon className="h-10 w-10 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold font-['Playfair_Display'] text-transparent bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text mb-4">
                Beställningsformulär
              </h3>
              <p className="text-gray-600 leading-relaxed font-light mb-4">
                Fyll i det detaljerade formuläret nedan för att få din kostnadsfria offert. Detta är det snabbaste sättet att få service.
              </p>
              <p className="text-sm text-yellow-600 font-semibold">📧 Skickas till: mystafinayulija@gmail.com</p>
            </div>
            
            {/* Secondary Methods */}
            {contactInfo.slice(0,2).map((info, index) => (
              <div key={index} className="luxury-card text-center p-8">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className={`${idx === 0 ? 'text-blue-600 font-semibold' : 'text-gray-600 text-sm'}`}>
                      {info.link && idx === 0 ? (
                        <a href={info.link} className="hover:text-blue-700 transition-colors">
                          {detail}
                        </a>
                      ) : detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Huvudformulär för Beställning */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Form Introduction */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-transparent bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text mb-6">
                Beställ Din Städtjänst
              </h2>
              <div className="luxury-card p-6 mb-8 border-2 border-yellow-400">
                <p className="text-lg text-gray-700 font-medium mb-2">
                  🎯 <strong className="text-yellow-600">Huvudsättet att beställa service</strong>
                </p>
                <p className="text-gray-600">
                  Fyll i formuläret nedan så kontaktar vi dig inom 2 timmar med en detaljerad offert. 
                  Formuläret skickas direkt till vårt team.
                </p>
                <p className="text-sm text-blue-600 mt-3 font-semibold">
                  📧 Skickas automatiskt till: mystafinayulija@gmail.com
                </p>
              </div>
            </div>
            
            {/* Quote Form */}
            <div className="luxury-card p-10">
              {formStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8 flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <p className="text-green-800 font-semibold">Tack! Din förfrågan har skickats.</p>
                    <p className="text-green-700 text-sm">Vi kontaktar dig inom 2 timmar med din offert.</p>
                  </div>
                </div>
              )}
              
              {formStatus === 'sending' && (
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8 flex items-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
                  <p className="text-blue-800">Skickar din förfrågan...</p>
                </div>
              )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefonnummer *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+46 76 552 31 87"
                      />
                      <p className="text-xs text-gray-500 mt-1">Vi kontaktar dig via SMS eller e-post</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Full address including city and zip code"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Type
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select type</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="office">Office</option>
                        <option value="retail">Retail</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Square Footage
                      </label>
                      <select
                        name="squareFootage"
                        value={formData.squareFootage}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select size</option>
                        <option value="under1000">Under 1,000 sq ft</option>
                        <option value="1000-2000">1,000-2,000 sq ft</option>
                        <option value="2000-3000">2,000-3,000 sq ft</option>
                        <option value="3000-4000">3,000-4,000 sq ft</option>
                        <option value="over4000">Over 4,000 sq ft</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Frequency
                      </label>
                      <select
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select frequency</option>
                        {frequencies.map((freq) => (
                          <option key={freq.value} value={freq.value}>
                            {freq.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Any special requests, areas of focus, or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Get My Free Quote
                  </button>
                </form>
              </div>
            </div>

            {/* Emergency Contact & Info */}
            <div className="space-y-8">
              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <ClockIcon className="h-6 w-6 mr-2" />
                  Emergency Cleaning
                </h3>
                <p className="text-red-700 mb-4">
                  Need immediate cleaning services? We offer 24/7 emergency cleaning for urgent situations.
                </p>
                <a
                  href="tel:+1234567890"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
                >
                  Call Emergency Line
                </a>
              </div>

              {/* Quick Tips */}
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Quick Tips for Better Quotes</h3>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Provide accurate square footage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mention any special requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Include preferred schedule</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Note any pets or allergies</span>
                  </li>
                </ul>
              </div>

              {/* Response Time */}
              <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-green-800 mb-4">Response Guarantee</h3>
                <p className="text-green-700">
                  Vi garanterar att kontakta dig inom 2 timmar under vardagar (8-18) 
                  och inom 4 timmar helger. Ditt formulär skickas direkt till vårt team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
                <div className="text-green-700">
                  <div className="text-3xl font-bold mb-2">2 Hours</div>
                  <p>Average response time for quotes during business hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="service-area" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We proudly serve the greater metro area and surrounding communities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg text-center">
                <div className="text-blue-600 font-semibold">{area}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Don't see your area listed? We may still be able to help!
            </p>
            <a
              href="tel:+1234567890"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Call us to check: (123) 456-7890
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How far in advance should I book?
              </h3>
              <p className="text-gray-600">
                We recommend booking at least 48 hours in advance for regular cleaning services. 
                For deep cleaning or special events, 1 week advance notice is preferred.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do I need to provide cleaning supplies?
              </h3>
              <p className="text-gray-600">
                No! We bring all our own professional-grade, eco-friendly cleaning supplies and equipment. 
                You don't need to provide anything.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are your staff insured and bonded?
              </h3>
              <p className="text-gray-600">
                Yes, all our team members are fully insured, bonded, and background-checked. 
                We carry comprehensive liability insurance for your peace of mind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What if I'm not satisfied with the service?
              </h3>
              <p className="text-gray-600">
                We offer a 100% satisfaction guarantee. If you're not completely happy with our service, 
                we'll return within 24 hours to make it right at no additional cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Your Cleaning?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join hundreds of satisfied customers. Get your space sparkling clean today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="sms:+46765523187"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Skicka SMS: +46 76 552 31 87
            </a>
            <a
              href="mailto:info@mlexpresstad.se"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Skicka E-post
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;