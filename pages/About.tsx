
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gray-50 py-24 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">Our Legacy & Vision</h1>
          <p className="text-gray-600 max-w-2xl mx-auto uppercase tracking-[0.3em] text-[10px] font-black">Building a Sustainable Future for Ghana</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block h-1 w-20 bg-secondary mb-8"></div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-10 leading-tight">The Sefa-Agri Journey</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  <strong>{BUSINESS_INFO.name}</strong> was founded on the principle that Ghanaian agriculture has the potential to lead the West African market. Based in Kasoa, we recognized early on that quality assurance and local empowerment were the missing ingredients in the rice industry.
                </p>
                <p>
                  Our flagship project, <strong>{BUSINESS_INFO.subsidiary}</strong>, represents years of collaboration with local agronomists and farmers to perfect a variety that is not only high-yielding but exceptionally aromatic.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-6 relative">
              <div className="overflow-hidden rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600" 
                  alt="Lush Ghanaian Farmland" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-xl translate-y-12 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1590333746433-31778939634d?auto=format&fit=crop&q=80&w=600" 
                  alt="Rice Harvest Close-up" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones of Growth (Timeline) */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Milestones of Excellence</h2>
            <p className="text-gray-500">Our trajectory of growth from a local startup to a regional powerhouse.</p>
          </div>
          <div className="relative">
             <div className="absolute top-0 bottom-0 left-1/2 w-px bg-secondary hidden md:block"></div>
             <div className="space-y-12 relative z-10">
                {[
                  { year: "2018", title: "Inception", desc: "Sefa-Agri & Integrated Business Ventures established in Kasoa to bridge agricultural supply gaps." },
                  { year: "2020", title: "FDA Certification", desc: "Official certification of our Aromatic Rice, opening doors to national retail chains." },
                  { year: "2022", title: "Strategic Expansion", desc: "Milling capacity doubled and our smallholder farmer network grew to over 500 members." },
                  { year: "2025", title: "Export Readiness", desc: "Launched West African distribution network focusing on Cote d'Ivoire and Togo." }
                ].map((m, i) => (
                  <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 flex flex-col items-center md:items-end md:text-right">
                       <div className={`md:w-full p-8 bg-white rounded-3xl shadow-sm border border-gray-100 ${i % 2 === 0 ? '' : 'md:text-left'}`}>
                          <span className="text-secondary font-black text-2xl mb-2 block">{m.year}</span>
                          <h4 className="text-xl font-bold text-primary mb-3">{m.title}</h4>
                          <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                       </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-secondary hidden md:block"></div>
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Strategic Pillars */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10">
              <h3 className="text-3xl font-serif font-bold text-secondary mb-6">Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                To transform the Ghanaian rice industry by producing premium, aromatic grains that meet global standards, while empowering local smallholder farmers and ensuring national food security.
              </p>
            </div>
            <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10">
              <h3 className="text-3xl font-serif font-bold text-secondary mb-6">Our Vision</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                To be the leading integrated agribusiness venture in West Africa, synonymous with trust, quality, and innovative sustainable agriculture by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Executive Cabinet */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">The Executive Cabinet</h2>
            <p className="text-gray-500">Visionaries leading the next era of Ghanaian agriculture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { 
                name: "Managing Director", 
                role: "Strategic Growth & CEO", 
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
                bio: "Expert in regional trade and large-scale agricultural investment." 
              },
              { 
                name: "Operations Director", 
                role: "Supply Chain & COO", 
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
                bio: "Overseeing our state-of-the-art milling facility and logistics hub." 
              },
              { 
                name: "Technical Lead", 
                role: "Agronomy & Quality", 
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
                bio: "Leading our FDA compliance and sustainable farming initiatives." 
              }
            ].map((leader, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-secondary rounded-full transform scale-0 group-hover:scale-105 transition-transform duration-500 -z-10"></div>
                  <img 
                    src={leader.img} 
                    alt={leader.name} 
                    className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl group-hover:border-secondary transition-all duration-500"
                  />
                </div>
                <h4 className="text-2xl font-bold text-primary mb-1">{leader.name}</h4>
                <p className="text-secondary font-black uppercase tracking-widest text-[10px] mb-4">{leader.role}</p>
                <p className="text-gray-500 text-sm max-w-xs mx-auto italic">"{leader.bio}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Strategic Infrastructure */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl font-serif font-bold text-primary mb-8 leading-tight">State-of-the-Art <br /><span className="text-secondary">Processing Power</span></h2>
                 <p className="text-gray-600 mb-8 leading-relaxed">Our facility in Kasoa serves as the nerve center of our operations. We have invested in advanced European milling technology to ensure our aromatic rice maintains its natural integrity.</p>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                       <span className="text-3xl block mb-2">⚡</span>
                       <h5 className="font-bold text-primary">High Throughput</h5>
                       <p className="text-[10px] text-gray-500 uppercase tracking-widest">Efficiency Redefined</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                       <span className="text-3xl block mb-2">🧊</span>
                       <h5 className="font-bold text-primary">Cold Milling</h5>
                       <p className="text-[10px] text-gray-500 uppercase tracking-widest">Nutrient Preservation</p>
                    </div>
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg h-64 w-full object-cover" alt="Processing machinery" />
                 <img src="https://images.unsplash.com/photo-1596733430284-f7437f49772c?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg translate-y-8 h-64 w-full object-cover" alt="Logistics warehouse" />
              </div>
           </div>
        </div>
      </section>

      {/* Environmental & Social Governance (ESG) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif font-bold text-primary mb-8">Environmental & Social Stewardship</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                At Sefa-Agri, we recognize that our growth is intrinsically linked to the health of our environment and the well-being of our community in Kasoa.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex gap-5">
                  <div className="text-3xl">🌿</div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Climate-Smart Farming</h4>
                    <p className="text-xs text-gray-500">Utilizing water-efficient irrigation and organic soil amendments.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="text-3xl">🤝</div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Social Empowerment</h4>
                    <p className="text-xs text-gray-500">Direct technical training for over 500+ rural farming households.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[500px]">
               <div className="rounded-[4rem] overflow-hidden shadow-2xl h-full border-8 border-gray-50">
                  <img src="https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&q=80&w=800" alt="Sustainable Agribusiness" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-secondary text-primary p-10 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl">
                 Committed to Net-Zero
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
