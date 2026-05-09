import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";

// ── Icons ──────────────────────────────────────────────────────────────────
const Icons = {
  Check: () => (
    <svg className="w-5 h-5 text-wine shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Factory: () => (
    <svg className="w-8 h-8 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Zap: () => (
    <svg className="w-6 h-6 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Globe: () => (
    <svg className="w-6 h-6 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014.5 9 15.3 15.3 0 01-4.5 9 15.3 15.3 0 01-4.5-9 15.3 15.3 0 014.5-9z" />
    </svg>
  ),
  Chevron: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  ),
};

// ── Reveal Component ─────────────────────────────────────────────────────────
const VARIANTS = {
  fadeUp: { h: "opacity-0 translate-y-12 blur-sm", v: "opacity-100 translate-y-0 blur-none" },
  fadeLeft: { h: "opacity-0 -translate-x-12 blur-sm", v: "opacity-100 translate-x-0 blur-none" },
  fadeRight: { h: "opacity-0 translate-x-12 blur-sm", v: "opacity-100 translate-x-0 blur-none" },
  zoomIn: { h: "opacity-0 scale-95 blur-sm", v: "opacity-100 scale-100 blur-none" },
};

const Reveal = ({ children, variant = "fadeUp", delay = 0, duration = 800, threshold = 0.1, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  const { h, v } = VARIANTS[variant] || VARIANTS.fadeUp;
  return (
    <div ref={ref} style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }} className={`transition-all ease-out ${visible ? v : h} ${className}`}>
      {children}
    </div>
  );
};

const SodaAsh = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const faqs = [
    { q: "What is the difference between Light and Dense Soda Ash?", a: "Chemical-wise, they are both Sodium Carbonate (Na₂CO₃). The difference lies in bulk density and particle size. Light Soda Ash is a fine powder (0.5-0.6 g/cm³), while Dense Soda Ash is granular and heavier (0.9-1.1 g/cm³)." },
    { q: "Which industries use Dense Soda Ash the most?", a: "The glass industry is the largest consumer (60-70%), as Dense Soda Ash is easier to handle in glass furnace operations and effectively lowers the melting point of silica." },
    { q: "Does Soda Ash dissolve in water?", a: "Yes, Soda Ash is highly water-soluble and forms an alkaline (basic) solution, which makes it ideal for pH control and cleaning applications." },
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2024/1/375550116/PO/YI/YL/509899/soda-ash-light.jpg"
            alt="Soda Ash Light powder"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40"></div>
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-wine opacity-20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-6 py-2 bg-wine text-white rounded-none text-[10px] font-black tracking-[0.4em] uppercase mb-8 shadow-2xl shadow-wine/40">
              Sodium Carbonate | Na₂CO₃
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter italic leading-none">
              Premium <span className="text-wine block md:inline">Soda Ash</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-lg md:text-2xl text-white/70 max-w-4xl mx-auto font-bold leading-relaxed mb-12 uppercase italic">
              The Essential Industrial Alkali for Glass, Detergents, and Chemical Manufacturing
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800} className="flex flex-wrap justify-center gap-6">
            <Link to="/rfq" className="bg-wine text-white px-12 py-6 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-2xl">Bulk RFQ Dashboard</Link>
            <a href="https://wa.me/919258720699" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-12 py-[22px] text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all">Whatsapp Support</a>
          </Reveal>
        </div>
      </section>

      {/* 🖼 Product Gallery Strip */}
      <section className="bg-white py-0">
        <div className="grid grid-cols-3 h-[280px] md:h-[380px]">
          <div className="relative overflow-hidden group">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2024/1/375550116/PO/YI/YL/509899/soda-ash-light.jpg"
              alt="Soda Ash Light"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
              <span className="p-4 text-white font-black uppercase text-xs tracking-widest">Light Soda Ash</span>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpw0y1MxfehSZBxlwO1YDg3Jj6Wc7lWRTiEQ&s"
              alt="Soda Ash industrial grade"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-wine/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
              <span className="p-4 text-white font-black uppercase text-xs tracking-widest">Industrial Grade</span>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2024/3/401620542/MI/UY/NW/213058173/soda-ash-dense-500x500.png"
              alt="Soda Ash Dense"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
              <span className="p-4 text-white font-black uppercase text-xs tracking-widest">Dense Soda Ash</span>
            </div>
          </div>
        </div>
      </section>

      {/* 📖 Deep Extraction: Types of Soda Ash */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Reveal variant="fadeUp">
              <h2 className="text-4xl md:text-6xl font-black text-navy uppercase italic tracking-tighter mb-4">Industrial <span className="text-wine">Classifications</span></h2>
              <div className="w-24 h-2 bg-navy mx-auto"></div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal variant="fadeLeft" className="bg-gray-50 border-l-8 border-navy shadow-xl group hover:shadow-2xl transition-all overflow-hidden">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2024/1/375550116/PO/YI/YL/509899/soda-ash-light.jpg"
                  alt="Soda Ash Light powder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent"></div>
              </div>
              <div className="p-12">
                <h3 className="text-3xl font-black text-navy uppercase italic mb-6">Light Soda Ash</h3>
                <p className="text-gray-600 font-bold mb-8 uppercase text-xs tracking-widest">Bulk Density: ~0.5 – 0.6 g/cm³</p>
                <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                  A fine, lightweight powder form used extensively in industries where rapid dissolution and high surface area are critical.
                </p>
                <div className="space-y-4">
                  <h4 className="font-black text-wine uppercase text-xs tracking-widest">Key Applications:</h4>
                  {[ "Detergent & Soap Manufacturing", "Chemical Processing", "Textile Bleaching & Dyeing", "Water Softening" ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Icons.Check />
                      <span className="text-[11px] font-black text-navy uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeRight" className="bg-navy border-l-8 border-wine shadow-xl group hover:shadow-2xl transition-all overflow-hidden">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2024/3/401620542/MI/UY/NW/213058173/soda-ash-dense-500x500.png"
                  alt="Soda Ash Dense granules"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
              </div>
              <div className="p-12">
                <h3 className="text-3xl font-black text-white uppercase italic mb-6">Dense Soda Ash</h3>
                <p className="text-wine font-black mb-8 uppercase text-xs tracking-widest">Bulk Density: ~0.9 – 1.1 g/cm³</p>
                <p className="text-white/60 font-medium mb-8 leading-relaxed">
                  A granular, heavy form specifically engineered for the glass industry. Its particle size allows for uniform mixing and easy handling.
                </p>
                <div className="space-y-4">
                  <h4 className="font-black text-wine uppercase text-xs tracking-widest">Key Applications:</h4>
                  {[ "Flat Glass (Window Pane)", "Bottle & Container Glass", "Solar Panel Glass", "Sodium Silicate Production" ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Icons.Check />
                      <span className="text-[11px] font-black text-white/80 uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🏭 Industrial Footprint */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase italic mb-4">Core <span className="text-wine">Industrial Hubs</span></h2>
            <div className="w-20 h-1 bg-navy mx-auto"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { t: "Firozabad (The Glass City)", h: "Dense Soda Ash Center", d: "400+ glass units focusing on bottles, bangles, and industrial glassware. The largest consumer segment in India." },
              { t: "Ghaziabad & Noida", h: "Detergent & Soap Hub", d: "A major cluster for local and national detergent brands. Heavy reliance on Light Soda Ash for builder formulations." },
              { t: "Surat & Ludhiana", h: "Textile Processing", d: "Used extensively for dyeing, bleaching, and pH control in fabric processing units." },
              { t: "Mithapur (Gujarat)", h: "Production Powerhouse", d: "Home to Tata Chemicals, the largest producer of Soda Ash in India." },
              { t: "Baddi & Haridwar", h: "FMCG Clusters", d: "Strategic locations for major FMCG plants like HUL, P&G, and Patanjali Ayurveda." },
              { t: "Tamil Nadu", h: "Chemical Manufacturing", d: "Established presence of key players like DCW Limited, supplying the southern industrial belt." }
            ].map((hub, i) => (
              <Reveal key={i} delay={i * 100} className="bg-white p-10 border border-gray-100 hover:border-wine transition-all shadow-sm hover:shadow-xl">
                <h4 className="text-lg font-black text-navy uppercase mb-2 italic">{hub.t}</h4>
                <p className="text-wine text-[10px] font-black uppercase tracking-widest mb-6">{hub.h}</p>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">{hub.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🌏 Major Buyer Segments */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft">
              <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8">Strategic <span className="text-wine">Buyers</span></h2>
              <div className="space-y-6">
                {[
                  { s: "Glass Industry", d: "Number 1 consumer (60-70% share). Soda ash lowers the melting point of silica, making it indispensable for window, bottle, and solar glass." },
                  { s: "Detergent & Soap", d: "Second largest segment. Acts as a builder and cleaning agent in washing powders and liquid detergents." },
                  { s: "Textile & Paper", d: "Used for pH control, bleaching, and fabric processing in Surat, Panipat, and Ludhiana clusters." },
                  { s: "Water Treatment", d: "Essential for industrial effluent treatment (ETP/STP) to maintain optimal pH levels." },
                  { s: "Chemical Manufacturing", d: "Continuous bulk buyer for producing sodium silicate, sodium bicarbonate, and high-performance pigments." }
                ].map((seg, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <span className="text-wine font-black text-2xl group-hover:scale-125 transition-transform">0{i+1}</span>
                    <div>
                      <h5 className="font-black text-white uppercase text-sm mb-1 tracking-widest underline underline-offset-4 decoration-wine/50">{seg.s}</h5>
                      <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest leading-relaxed italic">{seg.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal variant="fadeRight" className="bg-white/5 p-12 border border-white/10 relative">
              <Icons.Globe />
              <h3 className="text-3xl font-black text-wine uppercase italic my-8">Global Production Influence</h3>
              <p className="text-white/70 font-medium leading-relaxed mb-10 text-lg">
                <strong>China</strong> remains the world's largest producer of Soda Ash, primarily through the Solvay process. Their low-cost production and huge chemical industry footprint define global market dynamics.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 text-center">
                  <span className="block text-3xl font-black text-wine mb-2">No. 1</span>
                  <span className="text-[10px] uppercase font-black tracking-widest opacity-40">China (Global Share)</span>
                </div>
                <div className="p-6 bg-white/5 text-center text-white">
                  <span className="block text-3xl font-black mb-2">TOP 3</span>
                  <span className="text-[10px] uppercase font-black tracking-widest opacity-40">India (Consumption)</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🏁 Why Buy From Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase italic mb-4 tracking-tighter">Why Source <span className="text-wine">Ochnology Soda Ash?</span></h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Direct Sourcing", d: "Material sourced directly from trusted manufacturers in Gujarat and Tamil Nadu." },
              { t: "Best Market Price", d: "Leveraging bulk supply chains to offer competitive pricing for all grades." },
              { t: "Quick Dispatch", d: "Assured delivery timelines with efficient logistics from Mithapur and export ports." },
              { t: "Full Documentation", d: "Every shipment is accompanied by COA, Invoice, and E-way bill for complete transparency." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-10 shadow-sm border-b-8 border-navy hover:shadow-xl transition-all">
                <Icons.Zap />
                <h4 className="font-black text-navy uppercase text-sm mt-6 mb-4 italic tracking-widest underline decoration-wine decoration-2">{item.t}</h4>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed italic">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy uppercase italic">Frequently Asked <span className="text-wine">Questions</span></h2>
            <div className="w-20 h-1 bg-wine mx-auto mt-4"></div>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 100}>
                <div className={`bg-white border transition-all duration-500 ${activeFaq === idx ? "border-wine shadow-xl" : "border-gray-100 shadow-sm"}`}>
                  <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full px-8 py-7 text-left flex justify-between items-center group">
                    <span className={`font-black uppercase text-sm transition-colors duration-300 ${activeFaq === idx ? "text-wine" : "text-navy group-hover:text-wine"}`}>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${activeFaq === idx ? "bg-wine text-white rotate-180" : "bg-gray-50 text-navy"}`}>
                      <Icons.Chevron className="w-4 h-4" />
                    </div>
                  </button>
                  <div className={`px-8 transition-all duration-500 ease-in-out overflow-hidden ${activeFaq === idx ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="pt-6 border-t border-gray-100">
                      <p className="text-gray-600 text-sm font-medium leading-relaxed italic">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🏁 CTA Section */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Reveal variant="zoomIn">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">
              Get A <span className="text-wine">Quote</span>
            </h2>
            <p className="text-white/40 font-black uppercase tracking-[0.3em] text-xs mb-12 italic">
              Premium Soda Ash Supply • Bulk Industrial Orders • Export Ready
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq" className="bg-wine text-white px-12 py-6 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-2xl flex items-center gap-4 group">
                <Icons.Zap /> <span>Request Bulk RFQ</span>
              </Link>
              <a href="https://wa.me/919258720699" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-12 py-[22px] text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all">
                Direct Whatsapp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default SodaAsh;
