
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=2000",
    title: "Nourishing Generations with Trust",
    subtitle: `Experience the pure taste of Ghana with ${BUSINESS_INFO.subsidiary}.`,
    cta: "Explore Products",
    link: "/products"
  },
  {
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=2000",
    title: "Premium Quality, Locally Grown",
    subtitle: "FDA Certified aromatic rice cultivated in the heart of the Central Region.",
    cta: "Our Heritage",
    link: "/about"
  },
  {
    image: "https://images.unsplash.com/photo-1590333746433-31778939634d?auto=format&fit=crop&q=80&w=2000",
    title: "Empowering Local Communities",
    subtitle: "Supporting over 500+ smallholder farmers through sustainable agribusiness.",
    cta: "Partner With Us",
    link: "/contact"
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Slider Section */}
      <section className="relative h-[85vh] bg-primary overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-primary/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-20">
              <div className={`max-w-2xl transition-all duration-700 delay-300 transform ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="inline-flex items-center px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-full mb-6">
                  <span className="text-secondary text-sm font-bold tracking-widest uppercase">Ghana's Finest</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif text-white font-bold leading-tight mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={slide.link}
                    className="bg-secondary text-primary font-bold px-10 py-4 rounded-xl hover:bg-white transition-all text-center shadow-lg transform hover:-translate-y-1"
                  >
                    {slide.cta}
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-primary transition-all text-center"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                index === currentSlide ? 'w-12 bg-secondary' : 'w-3 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Our Specialized Divisions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Specialized Divisions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Integrated solutions driving the Ghanaian agricultural landscape forward.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" alt="General Merchandise" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent flex flex-col justify-end p-12">
                <h3 className="text-2xl font-bold text-white mb-4">General Merchandise</h3>
                <p className="text-gray-200 text-sm mb-6">Scaling agricultural supply chains and delivering high-quality general trade goods across Ghana.</p>
                <Link to="/about" className="text-secondary font-bold uppercase text-xs tracking-widest flex items-center group-hover:gap-4 transition-all">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" alt="Rice Production" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent flex flex-col justify-end p-12">
                <h3 className="text-2xl font-bold text-white mb-4">Premium Rice Production</h3>
                <p className="text-gray-200 text-sm mb-6">Producers of {BUSINESS_INFO.subsidiary}. FDA certified and grown for unmatched quality.</p>
                <Link to="/products" className="text-secondary font-bold uppercase text-xs tracking-widest flex items-center group-hover:gap-4 transition-all">
                  View Products <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey of a Single Grain (Process Section) */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-serif font-bold text-primary mb-8 leading-tight">The Journey of a <br /><span className="text-secondary">Single Grain</span></h2>
              <p className="text-gray-600 mb-10 leading-relaxed">From the fertile soils of the Central Region to your dinner table, we maintain absolute control over every stage of production.</p>
              <div className="space-y-4">
                 {['Sourcing', 'Cultivation', 'Milling', 'Distribution'].map((step, idx) => (
                   <div key={idx} className="flex items-center gap-4 text-primary font-bold">
                      <div className="w-8 h-8 rounded-full border-2 border-secondary flex items-center justify-center text-xs">{idx + 1}</div>
                      {step}
                   </div>
                 ))}
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">🚜</div>
                  <h4 className="font-bold text-primary mb-2">1. Precision Sourcing</h4>
                  <p className="text-xs text-gray-500">We select only the highest grade jasmine seeds from verified cooperatives.</p>
               </div>
               <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">🌱</div>
                  <h4 className="font-bold text-primary mb-2">2. Ethical Cultivation</h4>
                  <p className="text-xs text-gray-500">Climate-smart farming techniques that preserve the soil and the aroma.</p>
               </div>
               <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">🏢</div>
                  <h4 className="font-bold text-primary mb-2">3. State-of-the-Art Milling</h4>
                  <p className="text-xs text-gray-500">Our Kasoa facility uses cold-press milling to keep nutrients intact.</p>
               </div>
               <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">🚚</div>
                  <h4 className="font-bold text-primary mb-2">4. Rapid Distribution</h4>
                  <p className="text-xs text-gray-500">Ensuring freshness from warehouse to wholesaler in record time.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate News & Insights */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">News & Market Insights</h2>
              <p className="text-gray-500">Staying connected with our community and the global agribusiness trade.</p>
            </div>
            <button className="hidden md:block text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">
              View All Press Releases
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                date: "March 2025", 
                title: "Expansion of Kasoa Processing Facility", 
                desc: "Sefa-Agri announces a 40% increase in milling capacity to meet growing festive demand.",
                img: "https://images.unsplash.com/photo-1541014741259-df549fa9ba6f?auto=format&fit=crop&q=80&w=400"
              },
              { 
                date: "February 2025", 
                title: "New Sustainable Farming Program", 
                desc: "Empowering 100 new smallholder farmers with irrigation technology in the Central Region.",
                img: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&q=80&w=400"
              },
              { 
                date: "January 2025", 
                title: "FDA Certification Renewal", 
                desc: "Successfully passed annual safety audit with 100% compliance across all production lines.",
                img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=400"
              }
            ].map((news, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="rounded-[2rem] overflow-hidden h-64 mb-6 shadow-sm group-hover:shadow-xl transition-all">
                  <img src={news.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={news.title} />
                </div>
                <p className="text-secondary font-black text-[10px] uppercase tracking-widest mb-3">{news.date}</p>
                <h4 className="text-xl font-bold text-primary mb-3 leading-tight group-hover:text-secondary transition-colors">{news.title}</h4>
                <p className="text-sm text-gray-500 line-clamp-2">{news.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Export Readiness Banner */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
             <h2 className="text-3xl font-serif font-bold text-white mb-4 italic">Exporting Excellence Beyond Borders</h2>
             <p className="text-gray-400">Our logistical network is fully optimized for cross-border trade within the ECOWAS region.</p>
          </div>
          <Link to="/contact" className="bg-secondary text-primary font-bold px-10 py-5 rounded-2xl hover:bg-white transition-all shadow-xl whitespace-nowrap">
            Inquire About Export
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
