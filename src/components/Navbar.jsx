import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Hem', href: '/' },
    { name: 'Tjänster', href: '/services' },
    { name: 'Om oss', href: '/about' },
    { name: 'Kontakt', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="luxury-card sticky top-0 z-50 border-0 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="ML Expresstäd AB" 
                  className="navbar-logo h-16 w-16 object-contain hover:scale-105 transition-transform duration-300"
                  style={{filter: 'drop-shadow(0 10px 20px rgba(251, 191, 36, 0.3))'}}
                />
              </div>
              <div>
                <span className="text-2xl font-bold font-['Playfair_Display'] luxury-text-gradient">
                  ML Expresstäd<span className="ml-1">AB</span>
                </span>
                <div className="navbar-tagline text-xs text-gray-600 -mt-1 font-medium tracking-wide">Professionell städexcellens</div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="navbar-nav hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative ${
                  isActive(item.href)
                    ? 'text-white royal-gradient shadow-lg'
                    : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:shadow-lg'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 gold-gradient rounded-full translate-y-2"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden luxury-card border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-5 py-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-white royal-gradient shadow-lg'
                    : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:shadow-lg'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-4">
              <a
                href="sms:+46765523187"
                className="flex items-center space-x-3 px-5 py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                <PhoneIcon className="h-6 w-6" />
                <span className="text-base">+46 76 552 31 87</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;