
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Quality: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-primary py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
            alt="Laboratory Precision Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center px-6 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-8">
             <span className="text-secondary text-xs font-black uppercase tracking-[0.4em]">International Export Standards</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Standardized Excellence</h1>
          <p className="text-white/60 max-w-2xl mx-auto font-medium uppercase tracking-widest text-xs">Certified Quality Control Across Every Single Grain</p>
        </div>
      </section>

      {/* Regulatory Compliance Framework */}
      <section className="py-24 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-8">Regulatory Compliance <br />& National Standards</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Sefa-Agri & Integrated Business Ventures operates in total alignment with Ghana's strict regulatory framework for food safety and industrial trade.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-secondary">
                  <h4 className="font-bold text-primary mb-2">FDA Ghana</h4>
                  <p className="text-xs text-gray-500">Fully licensed facility for production and packaging of aromatic rice.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-primary">
                  <h4 className="font-bold text-primary">GSA Standards</h4>
                  <p className="text-xs text-gray-500">Compliant with GS 749:2020 standards for long-grain aromatic varieties.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center">
                  <img src="https://www.businessghana.com/cms/webroot/img/items/thumb_2025-03-05-224402SEFA-AGRI_LOGO_B_1-1.jpg" alt="FDA Logo Placeholder" className="grayscale opacity-50 h-20 w-auto" />
               </div>
               <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center translate-y-8">
                  <span className="text-4xl font-serif font-bold text-gray-300">GSA</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Traceability */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Total Batch Traceability</h2>
            <p className="text-gray-600">From the specific acre of land to the wholesaler's shelf.</p>
          </div>
          <div className="relative max-w-5xl mx-auto">
             <div className="absolute top-1/2 left-0 right-0 h-1 bg-secondary/20 hidden md:block -translate-y-1/2"></div>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { step: "Soil ID", desc: "Every farm is GPS-mapped to track soil health history." },
                  { step: "Harvest Log", desc: "Date and weather conditions recorded for every batch." },
                  { step: "Mill Scan", desc: "Real-time monitoring during the polishing and sorting phase." },
                  { step: "Unique ID", desc: "QR/Batch codes on every bag for instant origin identification." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all">
                     <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-6 font-bold">{i+1}</div>
                     <h4 className="font-bold text-primary mb-2">{item.step}</h4>
                     <p className="text-[10px] text-gray-500 leading-relaxed uppercase font-black tracking-widest">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Advanced Laboratory Testing */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-[4rem] h-[500px] overflow-hidden shadow-2xl border-8 border-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800" 
                  alt="Quality Control Expert in Lab" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-8">In-House Laboratory Testing</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                We operate a state-of-the-art testing facility in Kasoa where every batch is analyzed for chemical, physical, and sensory attributes before it leaves our warehouse.
              </p>
              <div className="space-y-6">
                 {[
                   { label: "Aroma Volatility Test", desc: "Ensuring the jasmine-like fragrance is locked into every grain." },
                   { label: "Moisture Profiling", desc: "Preventing mold and ensuring long-term shelf stability for exports." },
                   { label: "Purity & Stone Detection", desc: "Automated optical scanning for 100% stone-free assurance." }
                 ].map((t, i) => (
                   <div key={i} className="flex gap-5 group">
                      <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all">0{i+1}</div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">{t.label}</h4>
                        <p className="text-sm text-gray-500">{t.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Quality (Eco-Safety) */}
      <section className="py-24 bg-primary text-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
               <div className="lg:w-1/2">
                  <h2 className="text-4xl font-serif font-bold text-secondary mb-8">Eco-Safety Protocols</h2>
                  <p className="text-gray-300 leading-relaxed mb-10">Our commitment to quality extends to the environment. We believe that safe food starts with a healthy planet.</p>
                  <ul className="space-y-6">
                     <li className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-secondary"></div>
                        <span className="font-medium">Zero synthetic pesticide residue testing.</span>
                     </li>
                     <li className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-secondary"></div>
                        <span className="font-medium">Regular soil heavy metal screening.</span>
                     </li>
                     <li className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-secondary"></div>
                        <span className="font-medium">Biodegradable packaging research initiatives.</span>
                     </li>
                  </ul>
               </div>
               <div className="lg:w-1/2">
                  <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" alt="Sustainable Farm Field" className="rounded-[3rem] shadow-2xl opacity-80" />
               </div>
            </div>
         </div>
      </section>

      {/* Staff Training & Safety Protocols */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">The Human Element of Quality</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">Technology is only as good as the people who operate it. We invest heavily in our workforce.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Hygiene Training", icon: "🧼", desc: "Rigorous daily sanitation protocols for all mill floor workers." },
              { title: "Safe Handling", icon: "🧤", desc: "Minimal touch processing using automated machinery systems." },
              { title: "QC Certifications", icon: "📜", desc: "Continuous professional development for our safety auditors." },
              { title: "Emergency Response", icon: "🚨", desc: "Industry-leading workplace safety and hazardous management." }
            ].map((p, i) => (
              <div key={i} className="p-10 bg-white rounded-3xl border border-gray-100 hover:-translate-y-2 transition-transform shadow-sm">
                <div className="text-4xl mb-6">{p.icon}</div>
                <h4 className="font-bold text-primary mb-3">{p.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
