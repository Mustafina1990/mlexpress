import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
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
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';
import FloralSideDecoration from '../components/FloralSideDecoration';

const Contact = () => {
  const location = useLocation();
  
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

  // Handle URL parameters to pre-fill service
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        service: serviceParam
      }));
    }
  }, [location.search]);

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
    
    try {
      // EmailJS configuration
      const serviceID = 'service_b54jta9'; // Your actual service ID
      const templateID = 'template_mlexpress'; // Your template ID (update if different)
      const publicKey = 'RZkbfClXLJeqyJY_Q'; // Your public key
      
      // Prepare template parameters matching your EmailJS template
      const templateParams = {
        subject: 'Ny kundförfrågan från ML Expresstäd AB',
        name: formData.name,
        email: formData.email,
        reply_to: formData.email,
        phone: formData.phone,
        // Formatted HTML message for email body
        message_html: `
<strong>Ny förfrågan från ML Expresstäd AB webbplats</strong><br><br>

<strong>📧 KONTAKTINFORMATION:</strong><br>
• Namn: ${formData.name}<br>
• E-post: ${formData.email}<br>
• Telefon: ${formData.phone}<br><br>

<strong>🏠 TJÄNSTINFORMATION:</strong><br>
• Tjänst: ${formData.service}<br>
• Fastighetstyp: ${formData.propertyType}<br>
• Kvadratmeter: ${formData.squareFootage}<br>
• Frekvens: ${formData.frequency}<br><br>

<strong>📅 SCHEMA:</strong><br>
• Önskat datum: ${formData.date}<br>
• Tid: ${formData.time}<br>
• Adress: ${formData.address}<br><br>

<strong>💬 MEDDELANDE:</strong><br>
${formData.message}<br><br>

<hr>
<em>Skickat automatiskt från ML expresstäd AB webbplats</em>
        `
      };

      // Send email using EmailJS
      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      if (result.status === 200) {
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
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      setFormStatus('error');
      
      // Fallback to mailto as backup
      const emailBody = `
Ny förfrågan från ML Expresstäd AB webbplats:

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
      
      const mailtoLink = `mailto:contact@mlexpress.se?subject=Ny förfrågan från ML Expresstäd AB&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        setFormStatus('');
      }, 3000);
    }
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
      details: ['contact@mlexpress.se', 'Vi svarar under dagen'],
      link: 'mailto:contact@mlexpress.se'
    },
    {
      icon: MapPinIcon,
      title: 'Serviceområde',
      details: ['Stockholm & närområden', 'Premium service täckning'],
      link: '#service-area'
    },
    {
      icon: ClockIcon,
      title: 'Öppettider',
      details: ['Mån-Fre: 08:00-18:00', 'Lör-Sön: 09:00-16:00'],
      link: null
    }
  ];

  const serviceAreas = [
    'Stockholm City', 'Östermalm', 'Södermalm', 'Vasastan', 'Norrmalm',
    'Gamla Stan', 'Kungsholmen', 'Djurgården', 'Bromma', 'Solna',
    'Sundbyberg', 'Nacka', 'Lidingö', 'Danderyd', 'Täby',
    'Sollentuna', 'Upplands Väsby', 'Järfälla', 'Huddinge', 'Tyresö'
  ];

  const services = [
    { value: 'Hemstädning', label: 'Hemstädning', icon: HomeIcon },
    { value: 'Företagsstädning & Trapphusstädning', label: 'Företagsstädning & Trapphusstädning', icon: BuildingOfficeIcon },
    { value: 'Storstädning', label: 'Storstädning', icon: WrenchScrewdriverIcon },
    { value: 'Byggstädning', label: 'Byggstädning', icon: ClipboardDocumentCheckIcon },
    { value: 'Flyttstädning', label: 'Flyttstädning', icon: CalendarDaysIcon }
  ];

  const frequencies = [
    { value: 'weekly', label: 'Veckovis' },
    { value: 'biweekly', label: 'Varannan vecka' },
    { value: 'monthly', label: 'Månadsvis' },
    { value: 'onetime', label: 'Engångstjänst' }
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
        {/* Side Floral Decorations */}
        <FloralSideDecoration bottomPosition="8rem" />
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 py-24">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 luxury-card px-6 py-3 rounded-full text-sm font-medium mb-8 border border-yellow-400/30">
              <SparklesIcon className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400">Kontakta oss</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold font-['Playfair_Display'] mb-8 leading-tight">
              <span className="text-white block mb-2">Redo att</span>
              <span className="block relative pb-2" style={{
                background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #FBBF24 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1.1'
              }}>
                komma igång?
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-yellow-500/20 blur-lg -z-10"></div>
              </span>
            </h1>
            <p className="hero-subtitle text-xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              <strong className="text-yellow-300">Fyll i formuläret nedan</strong> så kontaktar vi dig. 
              Vi skapar en anpassad städplan som passar dina behov och budget. 
              Snabbt svar garanterat!
            </p>
            <div className="mb-8">
              <p className="text-lg text-gray-200 font-medium">
                🔽 <span className="text-yellow-300">Huvudsättet att beställa:</span> Fyll i formuläret nedan 🔽
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
              Hur du kontaktar oss
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Vi rekommenderar starkt att du använder formuläret nedan för snabbast service
            </p>
          </div>
          
          <div className="grid-responsive grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primary Method - Form */}
            <div className="service-card luxury-card text-center p-8 border-2 border-yellow-400 relative">
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
              <p className="text-sm text-yellow-600 font-semibold">📧 Skickas till: contact@mlexpress.se</p>
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
      <section id="contact-form" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Form Introduction */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-transparent bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text mb-6">
                Beställ din städtjänst
              </h2>
              <div className="luxury-card p-6 mb-8 border-2 border-yellow-400">
                <p className="text-lg text-gray-700 font-medium mb-2">
                  🎯 <strong className="text-yellow-600">Huvudsättet att beställa service</strong>
                </p>
                <p className="text-gray-600">
                  Fyll i formuläret nedan så kontaktar vi dig under dagen med en detaljerad offert. 
                  Formuläret skickas direkt till vårt team.
                </p>
                <p className="text-sm text-blue-600 mt-3 font-semibold">
                  📧 Skickas automatiskt till: contact@mlexpress.se
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
                    <p className="text-green-700 text-sm">Vi kontaktar dig under dagen med din offert.</p>
                  </div>
                </div>
              )}
              
              {formStatus === 'sending' && (
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8 flex items-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
                  <p className="text-blue-800">Skickar din förfrågan...</p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8 flex items-center">
                  <ClockIcon className="h-6 w-6 text-yellow-600 mr-3" />
                  <div>
                    <p className="text-yellow-800 font-semibold">Automatisk e-post misslyckades</p>
                    <p className="text-yellow-700 text-sm">Din e-postklient öppnas som backup. Skicka e-posten manuellt.</p>
                  </div>
                </div>
              )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fullständigt namn *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Ditt fullständiga namn"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-postadress *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="din@email.com"
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
                        Tjänsttyp *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Välj en tjänst</option>
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
                      Fastighetsadress *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Fullständig adress inklusive stad och postnummer"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fastighetstyp
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Välj typ</option>
                        <option value="apartment">Lägenhet</option>
                        <option value="house">Hus</option>
                        <option value="condo">Bostadsrätt</option>
                        <option value="office">Kontor</option>
                        <option value="retail">Butik</option>
                        <option value="other">Annat</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kvadratmeter
                      </label>
                      <select
                        name="squareFootage"
                        value={formData.squareFootage}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Välj storlek</option>
                        <option value="under50">Under 50 kvm</option>
                        <option value="50-100">50-100 kvm</option>
                        <option value="100-150">100-150 kvm</option>
                        <option value="150-200">150-200 kvm</option>
                        <option value="over200">Över 200 kvm</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Frekvens
                      </label>
                      <select
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Välj frekvens</option>
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
                        Önskat datum
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
                        Önskad tid
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Välj tid</option>
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
                      Ytterligare detaljer
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Eventuella särskilda önskemål, fokusområden eller frågor..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Skicka min förfrågan
                  </button>
                </form>

              {/* Quick Tips */}
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mt-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Tips för bättre offert</h3>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ange korrekt kvadratmeter</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Nämn speciella krav</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Inkludera önskat schema</span>
                  </li>
                                    <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Notera husdjur eller allergier</span>
                  </li>
                </ul>
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
              Områden vi täcker
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi betjänar Stockholm och omkringliggande områden med stolthet
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
              Ser du inte ditt område i listan? Vi kan fortfarande hjälpa dig!
            </p>
            <a
              href="sms:+46765523187"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              SMS oss för att kolla: +46 76 552 31 87
            </a>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Redo att boka din städning?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Gå med i vår familj av hundratals nöjda kunder. Få ditt utrymme skinande rent idag!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="sms:+46765523187"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Skicka SMS: +46 76 552 31 87
            </a>
            <a
              href="mailto:contact@mlexpress.se"
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