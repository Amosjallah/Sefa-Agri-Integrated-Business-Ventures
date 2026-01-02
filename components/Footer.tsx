
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS, BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-8 p-1 bg-white rounded-lg">
              <img 
                src="https://www.businessghana.com/cms/webroot/img/items/thumb_2025-03-05-224402SEFA-AGRI_LOGO_B_1-1.jpg" 
                alt="Sefa-Agri Logo" 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Sefa-Agri & Integrated Business Ventures is a premier Ghanaian agribusiness committed to food security, sustainability, and premium quality rice production.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-secondary font-bold mb-8 text-lg uppercase tracking-widest text-sm">Explore</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-secondary transition-colors text-sm font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Info */}
          <div>
            <h4 className="text-secondary font-bold mb-8 text-lg uppercase tracking-widest text-sm">Featured Brand</h4>
            <p className="text-white font-semibold text-sm mb-4 leading-tight">{BUSINESS_INFO.subsidiary}</p>
            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-secondary uppercase tracking-widest">
              FDA CERTIFIED (GHANA)
            </div>
            <p className="mt-4 text-xs text-gray-400">Supporting over 500+ local smallholder farmers in the Central Region.</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-secondary font-bold mb-8 text-lg uppercase tracking-widest text-sm">Reach Us</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{BUSINESS_INFO.location}, {BUSINESS_INFO.region}<br />{BUSINESS_INFO.country}</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-secondary mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">{BUSINESS_INFO.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}.
          </p>
          <div className="flex gap-6">
             <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Privacy Policy</span>
             <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
