import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">MLExpress</h3>
            <p className="text-gray-300">
              Professional cleaning services for homes and offices. 
              We provide reliable, efficient, and eco-friendly cleaning solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.317C4.25 14.81 3.885 13.18 3.885 11.5c0-1.682.365-3.312 1.241-4.173.875-.827 2.026-1.315 3.323-1.315 1.297 0 2.448.488 3.323 1.315.876.861 1.241 2.491 1.241 4.173 0 1.68-.365 3.31-1.241 4.171-.875.827-2.026 1.317-3.323 1.317zm7.718-1.317c-.875.827-2.026 1.317-3.323 1.317-1.297 0-2.448-.49-3.323-1.317-.876-.861-1.241-2.491-1.241-4.171 0-1.682.365-3.312 1.241-4.173.875-.827 2.026-1.315 3.323-1.315 1.297 0 2.448.488 3.323 1.315.876.861 1.241 2.491 1.241 4.173 0 1.68-.365 3.31-1.241 4.171z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Residential Cleaning</li>
              <li className="text-gray-300">Office Cleaning</li>
              <li className="text-gray-300">Deep Cleaning</li>
              <li className="text-gray-300">Move-in/Move-out</li>
              <li className="text-gray-300">Post Construction</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>📍 123 Main Street, City, State 12345</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@mlexpress.com</p>
              <p>🕒 Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 MLExpress Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;