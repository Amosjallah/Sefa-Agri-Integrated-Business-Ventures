
import React, { useState } from 'react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setSubmitted(true);
  };

  const faqs = [
    { q: "How do I become a distributor?", a: "To become a distributor, please fill out the inquiry form below or call us directly. We require a minimum order volume for wholesale pricing." },
    { q: "Do you offer international export?", a: "Yes, we are export-ready and handle bulk orders for international markets. We comply with all necessary export regulations and documentation." },
    { q: "Where is Sefa-Agri Natural Aromatic Rice produced?", a: "Our rice is grown and milled in the Central Region of Ghana, specifically supported by our operations in Kasoa." },
    { q: "Is your rice FDA certified?", a: "Absolutely. All our products are certified by the Ghana Food and Drugs Authority, ensuring they meet national safety and quality standards." }
  ];

  return (
    <div className="bg-white">
      {/* Contact Header */}
      <section className="py-20 bg-gray-50 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Get in touch with Sefa-Agri for orders, partnerships, or general inquiries.</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-secondary/10 p-3 rounded-full mr-4">📞</div>
                    <div>
                      <p className="text-sm font-bold text-primary uppercase tracking-wider">Phone</p>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="text-lg text-gray-700 hover:text-secondary font-medium">{BUSINESS_INFO.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-secondary/10 p-3 rounded-full mr-4">📍</div>
                    <div>
                      <p className="text-sm font-bold text-primary uppercase tracking-wider">Address</p>
                      <p className="text-lg text-gray-700">{BUSINESS_INFO.location}, {BUSINESS_INFO.region}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Regional Sales Points</h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="p-4 border-l-4 border-secondary bg-gray-50">
                    <p className="font-bold text-primary">Greater Accra Hub</p>
                    <p>Serving central business districts and supermarkets.</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary bg-gray-50">
                    <p className="font-bold text-primary">Central Region Mill</p>
                    <p>Primary processing and bulk collection point (Kasoa).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                {submitted ? (
                  <div className="text-center py-20">
                    <h3 className="text-3xl font-serif font-bold text-primary mb-4">Message Sent!</h3>
                    <p className="text-gray-600 mb-8">Thank you for contacting Sefa-Agri. Our team will get back to you shortly.</p>
                    <button onClick={() => setSubmitted(false)} className="text-primary font-bold underline">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" placeholder="Your Name" required className="w-full px-5 py-3 bg-gray-50 border rounded-lg focus:border-secondary outline-none" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                      <input type="email" placeholder="Email Address" required className="w-full px-5 py-3 bg-gray-50 border rounded-lg focus:border-secondary outline-none" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <input type="tel" placeholder="Phone Number" required className="w-full px-5 py-3 bg-gray-50 border rounded-lg focus:border-secondary outline-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    <textarea rows={5} placeholder="Inquiry Details" required className="w-full px-5 py-3 bg-gray-50 border rounded-lg focus:border-secondary outline-none resize-none" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                    <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-accent transition-all shadow-lg transform hover:-translate-y-1">
                      Send Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Media Relations */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-secondary mb-12">Connect With Us Online</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { label: "Facebook", handle: "@SefaAgriGhana", icon: "📘" },
              { label: "LinkedIn", handle: "Sefa-Agri Ventures", icon: "💼" },
              { label: "Instagram", handle: "@sefa_agri_rice", icon: "📸" },
              { label: "WhatsApp", handle: "0500242191", icon: "💬" }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                <p className="font-bold text-white">{s.label}</p>
                <p className="text-xs text-secondary tracking-widest uppercase font-black">{s.handle}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 pt-10 border-t border-white/10 max-w-2xl mx-auto">
            <p className="text-gray-400 mb-6">For press inquiries, high-resolution media assets, or interview requests:</p>
            <a href="mailto:media@sefaagri.com" className="text-secondary font-bold text-lg hover:underline">media@sefaagri.com</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
