
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

const Products: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Product Hero */}
      <section className="py-24 bg-gray-50 overflow-hidden border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1 bg-secondary text-primary font-bold text-xs rounded-full mb-6 tracking-widest uppercase">
                Premium Brand
              </div>
              <h1 className="text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                {BUSINESS_INFO.subsidiary}
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed italic">
                "Experience the authentic natural fragrance that has defined Ghanaian hospitality for generations."
              </p>
              
              <div className="space-y-4 mb-10">
                 {[
                   "Naturally long-grained for the perfect fluff",
                   "Grown with zero synthetic chemical boosters",
                   "Milled with state-of-the-art cold-press technology",
                   "Rigid FDA-compliant safety standards"
                 ].map((point, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-secondary"></div>
                      <p className="text-gray-700 font-medium">{point}</p>
                   </div>
                 ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800" 
                  alt="Sefa-Agri Natural Aromatic Rice" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Guide: The Sefa-Agri Way */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif font-bold text-primary mb-8">The Perfect Pot:<br /><span className="text-secondary">Cooking Guide</span></h2>
              <p className="text-gray-600 mb-10 leading-relaxed">To achieve the signature fluffy texture and preserve the natural jasmine aroma, we recommend the following professional preparation method:</p>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Gentle Rinse", desc: "Rinse 1 cup of rice under cold water until clear to remove excess surface starch." },
                  { step: "02", title: "Water Ratio", desc: "Use 1.5 cups of water for every 1 cup of Sefa-Agri Aromatic Rice." },
                  { step: "03", title: "Simmer Low", desc: "Bring to a boil, then cover tightly and simmer on low heat for 15-18 minutes." },
                  { step: "04", title: "Steam Finish", desc: "Turn off heat and let the rice sit covered for 5 minutes before fluffing with a fork." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-3xl font-serif font-bold text-secondary/30">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50 h-[500px]">
                <img src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80&w=800" alt="Cooked Aromatic Rice" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutritional Excellence */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Nutritional Excellence</h2>
            <p className="text-gray-600 leading-relaxed">Our rice is naturally rich in essential nutrients, providing a healthy foundation for every Ghanaian meal.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-10 bg-white border rounded-[2rem] hover:border-secondary transition-colors shadow-sm">
              <div className="text-3xl mb-4">✨</div>
              <h4 className="font-bold text-primary mb-3 text-xl">High Fiber</h4>
              <p className="text-sm text-gray-500">Supports digestive health and sustained energy release throughout the day.</p>
            </div>
            <div className="p-10 bg-white border rounded-[2rem] hover:border-secondary transition-colors shadow-sm">
              <div className="text-3xl mb-4">🌾</div>
              <h4 className="font-bold text-primary mb-3 text-xl">Gluten-Free</h4>
              <p className="text-sm text-gray-500">A safe and versatile staple for various dietary requirements and preferences.</p>
            </div>
            <div className="p-10 bg-white border rounded-[2rem] hover:border-secondary transition-colors shadow-sm">
              <div className="text-3xl mb-4">💪</div>
              <h4 className="font-bold text-primary mb-3 text-xl">Zero Cholesterol</h4>
              <p className="text-sm text-gray-500">Heart-healthy and meticulously processed to maintain natural purity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Storage & Handling Tips */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 p-10 opacity-10 text-8xl">📦</div>
              <div className="relative z-10 max-w-3xl">
                 <h2 className="text-4xl font-serif font-bold text-secondary mb-8">Preserving Freshness</h2>
                 <p className="text-gray-300 text-lg mb-12">To maintain the aromatic oils and prevent moisture damage, follow these handling guidelines:</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="flex gap-4">
                       <div className="text-secondary text-2xl">❄️</div>
                       <div>
                          <h4 className="font-bold mb-1">Cool & Dry</h4>
                          <p className="text-xs text-gray-400">Store in a cool, dark place away from direct sunlight to avoid oil oxidation.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="text-secondary text-2xl">🔒</div>
                       <div>
                          <h4 className="font-bold mb-1">Airtight Containers</h4>
                          <p className="text-xs text-gray-400">Once opened, transfer to an airtight container to keep out pests and humidity.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="text-secondary text-2xl">🚫</div>
                       <div>
                          <h4 className="font-bold mb-1">Separate Odors</h4>
                          <p className="text-xs text-gray-400">Rice absorbs smells. Keep away from strong-smelling spices or chemicals.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="text-secondary text-2xl">🗓️</div>
                       <div>
                          <h4 className="font-bold mb-1">First-In First-Out</h4>
                          <p className="text-xs text-gray-400">Use older batches first to ensure you always enjoy the freshest aroma.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Global Wholesale & Export Specifications */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif font-bold text-primary mb-8">Wholesale & Export Standards</h2>
              <p className="text-lg text-gray-600 mb-10">We provide rigorous technical specifications for our distribution partners across West Africa and beyond.</p>
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-primary text-white uppercase font-black text-xs tracking-widest">
                    <tr>
                      <th className="p-6">Specification</th>
                      <th className="p-6">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="p-6 text-gray-500">Moisture Content</td><td className="p-6 font-bold text-primary">Max 14%</td></tr>
                    <tr><td className="p-6 text-gray-500">Broken Grains</td><td className="p-6 font-bold text-primary">Less than 5%</td></tr>
                    <tr><td className="p-6 text-gray-500">Purity Level</td><td className="p-6 font-bold text-primary">99.8% Stony Free</td></tr>
                    <tr><td className="p-6 text-gray-500">Milling Degree</td><td className="p-6 font-bold text-primary">Double Polished</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="lg:w-1/2 h-[450px]">
               <img src="https://images.unsplash.com/photo-1596733430284-f7437f49772c?auto=format&fit=crop&q=80&w=800" alt="Bulk Warehouse" className="w-full h-full object-cover rounded-[3rem] shadow-2xl border-4 border-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Distributor Support Section */}
      <section className="py-24 bg-white border-t">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Retailer & Distributor Growth</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-12">We don't just supply rice; we support your business growth with point-of-sale branding and marketing materials.</p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
               <div className="p-8 border rounded-3xl hover:bg-gray-50 transition-colors">
                  <h4 className="font-bold text-primary mb-2">Marketing Kits</h4>
                  <p className="text-xs text-gray-400">Posters, banners, and digital assets for your store.</p>
               </div>
               <div className="p-8 border rounded-3xl hover:bg-gray-50 transition-colors">
                  <h4 className="font-bold text-primary mb-2">Inventory Management</h4>
                  <p className="text-xs text-gray-400">Prioritized restocking for high-volume partners.</p>
               </div>
               <div className="p-8 border rounded-3xl hover:bg-gray-50 transition-colors">
                  <h4 className="font-bold text-primary mb-2">Wholesale Logistics</h4>
                  <p className="text-xs text-gray-400">Direct-to-store delivery options for bulk orders.</p>
               </div>
            </div>
            <div className="mt-16">
               <Link to="/contact" className="bg-secondary text-primary font-bold px-12 py-5 rounded-xl shadow-xl hover:-translate-y-1 transition-all">
                  Apply for Distribution
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Products;
