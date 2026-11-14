import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Short main menu; Testimonials and Blog live in the mobile menu and footer.
  const navigationItems = [
    { path: '/services', label: 'Services' },
    { path: '/conditions', label: 'Conditions' },
    { path: '/about', label: 'About' },
    { path: '/team', label: 'Team' },
    { path: '/faq', label: 'FAQs' },
    { path: '/contact', label: 'Contact' },
  ];
  const mobileItems = [
    { path: '/', label: 'Home' },
    ...navigationItems.slice(0, 4),
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/faq', label: 'FAQs' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];
  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
          //  className="flex items-center"
           >
            <Link to="/" title="Best Physiotherapy Clinic in Abuja">
              {/* Adidian Physiotherapy */}
              <div className='flex items-center gap-1'>
                <img src="/logo.jpg" alt="Adidian Physiotherapy Clinic Abuja Logo" 
                className='w-[44px] h-auto' width={44} height={44}/>
                <div className='text-blue-600 font-[700] leading-tight'>Adidian Physiotherapy<span className='hidden sm:inline'> Clinic</span></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`whitespace-nowrap text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  isActive(item.path) ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Call Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+2347065873379"
              className="whitespace-nowrap bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>070-6587-3379</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {mobileItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`block w-full text-left py-3 px-4 text-base font-medium transition-colors duration-200 hover:text-blue-600 ${
                  isActive(item.path) ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+2347065873379"
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;