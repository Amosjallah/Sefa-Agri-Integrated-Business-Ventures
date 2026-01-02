
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://www.businessghana.com/cms/webroot/img/items/thumb_2025-03-05-224402SEFA-AGRI_LOGO_B_1-1.jpg" 
              alt="Sefa-Agri Logo" 
              className="h-12 w-auto object-contain transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-colors hover:text-secondary ${
                  location.pathname === item.path ? 'text-secondary' : 'text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-accent transition-all shadow-md active:scale-95"
            >
              Contact Support
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen border-t' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-4 text-base font-semibold rounded-md ${
                location.pathname === item.path ? 'text-secondary bg-gray-50' : 'text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t mt-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="block w-full text-center bg-primary text-white px-5 py-4 rounded-xl font-bold"
            >
              Call Now: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
