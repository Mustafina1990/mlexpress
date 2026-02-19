import { Link } from 'react-router-dom';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Hem', path: '/' },
    { name: 'Tjänster', path: '/services' },
    { name: 'Om Oss', path: '/about' },
    { name: 'Kontakt', path: '/contact' }
  ];

  const services = [
    'Hemstädning',
    'Företagsstädning',
    'Storstädning',
    'Flyttstädning',
    'Byggstädning',
    'Akutstädning'
  ];

  const serviceAreas = [
    'Stockholm City',
    'Östermalm',
    'Södermalm',
    'Vasastan',
    'Norrmalm',
    'Närområden'
  ];

  return (
    <footer className="relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #0F172A 100%)'
    }}>
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Luxury Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="ML Expresstäd AB" 
                  className="h-16 w-16 object-contain"
                  style={{filter: 'drop-shadow(0 10px 25px rgba(251, 191, 36, 0.4))'}}
                />
              </div>
              <div>
                <span className="text-2xl font-bold font-['Playfair_Display'] bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent whitespace-nowrap">
                  ML Expresstäd AB
                </span>
                <div className="text-xs text-gray-300 font-medium tracking-wide">Lyxig Städexcellens</div>
              </div>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed font-light">
              Exklusiv städservice i Stockholm och omgivande områden. Vi erbjuder 
              premium städtjänster för hem och företag.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-['Playfair_Display'] text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text">
              Snabblänkar
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 transform inline-block group text-sm"
                  >
                    <span className="relative">
                      {link.name}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 group-hover:w-full transition-all duration-300"></div>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-['Playfair_Display'] text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text">
              Premium Tjänster
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm font-light hover:text-yellow-300 transition-colors duration-300">
                  • {service}
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium group transition-colors duration-300"
            >
              <span>Alla Tjänster</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-['Playfair_Display'] text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text">
              Kontakt
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <PhoneIcon className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="sms:+46765523187"
                    className="text-gray-200 hover:text-yellow-300 transition-colors block font-medium text-sm"
                  >
                    +46 76 552 31 87
                  </a>
                  <p className="text-gray-400 text-xs">SMS endast</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:contact@mlexpress.se"
                    className="text-gray-200 hover:text-yellow-300 transition-colors block font-medium text-sm"
                  >
                    contact@mlexpress.se
                  </a>
                  <p className="text-gray-400 text-xs">Svar under dagen</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-200 font-medium text-sm">Stockholm & Närområden</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <ClockIcon className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-200 font-medium text-sm">Mån-Fre: 08:00-18:00</p>
                  <p className="text-gray-400 text-xs">Lör: 08:00-14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-900 py-6 border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-gray-400 text-sm font-light">
              © 2025 ML Expresstäd AB. Alla rättigheter förbehållna.
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                Integritetspolicy
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                Användarvillkor
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
   <div className="flex gap-4 mt-4 relative z-10">
  <a 
    href="https://www.facebook.com/profile.php?id=61584200515030"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white"
  >
    Facebook
  </a>

  <a 
    href="https://www.instagram.com/mlexpress.se/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white"
  >
    Instagram
  </a>
</div> </footer>
  );
};

export default Footer;
