import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table.jsx";

// ── Icons ──────────────────────────────────────────────────────────────────
const Icons = {
  Check: () => (
    <svg className="w-5 h-5 text-wine shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Recycle: () => (
    <svg className="w-10 h-10 text-wine mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  Globe: () => (
    <svg className="w-8 h-8 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014.5 9 15.3 15.3 0 01-4.5 9 15.3 15.3 0 01-4.5-9 15.3 15.3 0 014.5-9z" />
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

const RecoveredCarbonBlack = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const faqs = [
    { q: "What is Recovered Carbon Black (rCB)?", a: "It is recycled carbon black produced by processing waste tyres via pyrolysis. It serves as a sustainable and cost-effective alternative to virgin carbon black." },
    { q: "How is it different from Virgin Carbon Black?", a: "Virgin Carbon Black is made from petroleum, while rCB is recycled from tyres. rCB is more eco-friendly and significantly cheaper while providing comparable reinforcement." },
    { q: "Where is the demand strongest in India?", a: "Gujarat (Vapi, Ankleshwar) and Maharashtra (Mumbai, Pune) are top markets due to heavy rubber, chemical, and plastic industrial density." },
    { q: "Which international markets prefer rCB?", a: "Vietnam, Bangladesh, and Indonesia are major buyers due to their strong rubber manufacturing sectors and preference for cost-sensitive raw materials." },
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2024/11/464793940/NW/DU/EC/11173428/carbon-black-powder.jpg"
            alt="Recovered Carbon Black powder background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wine opacity-20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-6 py-2 bg-wine text-white rounded-none text-[10px] font-black tracking-[0.4em] uppercase mb-8 shadow-2xl">
              Circular Economy | Waste Tyre Pyrolysis
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter italic leading-none">
              Recovered <span className="text-wine block md:inline">Carbon Black</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-lg md:text-2xl text-white/70 max-w-4xl mx-auto font-bold leading-relaxed mb-12 uppercase italic">
              The Sustainable Reinforcement Alternative for High-Performance Industrial Applications
            </p>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <div className="text-center">
              <span className="block text-4xl md:text-6xl font-black text-white italic">25%+</span>
              <span className="text-wine text-[10px] font-black uppercase tracking-widest mt-2 block">Cost Savings</span>
            </div>
            <div className="w-px h-16 bg-white/10 hidden md:block"></div>
            <div className="text-center">
              <span className="block text-4xl md:text-6xl font-black text-white italic">ECO</span>
              <span className="text-wine text-[10px] font-black uppercase tracking-widest mt-2 block">Certified Material</span>
            </div>
          </div>
          <Reveal variant="fadeUp" delay={800} className="flex flex-wrap justify-center gap-6">
            <Link to="/rfq" className="bg-wine text-white px-12 py-6 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-2xl">RFQ Dashboard</Link>
            <a href="https://wa.me/919258720699" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-12 py-[22px] text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all">Whatsapp Support</a>
          </Reveal>
        </div>
      </section>

      {/* 🖼 Product Gallery Strip */}
      <section className="bg-white py-0">
        <div className="grid grid-cols-3 h-[280px] md:h-[380px]">
          <div className="relative overflow-hidden group">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2024/11/464793940/NW/DU/EC/11173428/carbon-black-powder.jpg"
              alt="Carbon Black Powder"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
              <span className="p-4 text-white font-black uppercase text-xs tracking-widest">Carbon Black Powder</span>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2024/6/426445574/MI/OI/ZE/150551939/black-carbon-granules.jpg"
              alt="Black Carbon Granules"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-wine/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
              <span className="p-4 text-white font-black uppercase text-xs tracking-widest">Carbon Granules</span>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://5.imimg.com/data5/HM/XI/IU/SELLER-91170163/waste-tyre-black-carbon-powder.jpg"
              alt="Waste Tyre Carbon Black"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
              <span className="p-4 text-white font-black uppercase text-xs tracking-widest">Waste Tyre rCB</span>
            </div>
          </div>
        </div>
      </section>

      {/* 📖 The Process & Definition */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-black text-navy uppercase italic tracking-tighter">
                  What is <span className="text-wine">rCB?</span>
                </h2>
                <div className="w-24 h-2 bg-navy mb-8"></div>
                <p className="text-gray-600 text-lg leading-relaxed font-medium italic">
                  Recovered Carbon Black (rCB) is a recycled industrial material produced by heating waste tyres in an oxygen-free <strong>pyrolysis process</strong>. 
                  This breaks down old rubber into oil, gas, and a high-purity black powder that serves as a powerful reinforcer.
                </p>
                <div className="bg-navy p-10 rounded-none border-l-8 border-wine shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-wine/10 -translate-y-16 translate-x-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  <p className="text-white font-black text-xl italic leading-snug relative z-10">
                    "Recovered Carbon Black serves as a cost-effective alternative to virgin carbon black, supporting the global transition to a circular economy."
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeRight" className="bg-gray-50 border-y-8 border-navy shadow-2xl overflow-hidden group">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2024/6/426445574/MI/OI/ZE/150551939/black-carbon-granules.jpg"
                  alt="Black Carbon Granules product"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/40 to-transparent"></div>
              </div>
              <div className="p-12">
                <h3 className="text-2xl font-black text-navy uppercase italic mb-8 border-b border-gray-200 pb-4 text-center">Industrial Hubs & Hub Markets</h3>
                <div className="space-y-8">
                  {[
                    { r: "Gujarat (Top Market)", c: "Vapi, Ankleshwar, Ahmedabad, Surat", d: "Rubber + Chemical + Plastic hub." },
                    { r: "Maharashtra", c: "Mumbai, Pune, Nagpur", d: "Tyre + Plastic + Coating industries." },
                    { r: "Tamil Nadu", c: "Chennai, Coimbatore", d: "Tyre, Auto, and Rubber hub." },
                    { r: "North India", c: "Panipat, Ludhiana, Meerut", d: "Plastic, Recycling, and Local Rubber units." }
                  ].map((hub, i) => (
                    <div key={i} className="group/item">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-black text-wine text-xs uppercase tracking-widest">{hub.r}</span>
                        <span className="text-[10px] font-bold text-gray-400 group-hover/item:text-navy transition-colors">{hub.c}</span>
                      </div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{hub.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📊 Segment Analysis */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-4">Core <span className="text-wine">Buyer Segments</span></h2>
            <div className="w-24 h-1 bg-wine mx-auto"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Tyre Manufacturers", d: "Used in Tyres, Tubes, and Conveyor belts. A major cost-saving alternative for leading brands.", icon: <Icons.Factory /> },
              { t: "Rubber Product Makers", d: "Footwear (chappals, soles), mats, seals, and gaskets. Enhances strength & durability.", icon: <Icons.Check /> },
              { t: "Plastic & Masterbatch", d: "Provides black color and reinforcement for pipes, packaging, and cables.", icon: <Icons.Recycle /> },
              { t: "Paint, Ink & Coating", d: "Widely used as a coloring agent and black pigment for industrial coatings.", icon: <Icons.Zap /> }
            ].map((seg, i) => (
              <Reveal key={i} delay={i * 100} className="bg-white/5 p-10 border border-white/10 hover:bg-wine/10 transition-all group h-full text-center">
                <div className="mb-8 flex justify-center group-hover:scale-110 transition-transform">{seg.icon}</div>
                <h4 className="text-xl font-black uppercase italic mb-4 text-wine">{seg.t}</h4>
                <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest leading-relaxed">{seg.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🌍 Global Supply & Export Markets */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <Reveal variant="fadeLeft">
              <div className="bg-gray-50 border-l-8 border-navy shadow-2xl relative overflow-hidden group">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src="https://5.imimg.com/data5/HM/XI/IU/SELLER-91170163/waste-tyre-black-carbon-powder.jpg"
                    alt="Waste tyre recovered carbon black"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/40 to-transparent"></div>
                </div>
                <div className="p-12">
                <h3 className="text-3xl font-black text-navy uppercase italic mb-8 border-b border-wine pb-4">Global Production Rankings</h3>
                <div className="space-y-10">
                  {[
                    { n: "01", c: "China", d: "World's largest tyre producer + consumer with a massive recycling industry." },
                    { n: "02", c: "India", d: "Rapidly growing recycling market with high export potential and low-cost pyrolysis." },
                    { n: "03", c: "United States", d: "Advanced recycling technology producing top-tier high quality rCB." }
                  ].map((rank, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <span className="text-wine font-black text-3xl tracking-tighter">{rank.n}</span>
                      <div>
                        <h5 className="font-black text-navy uppercase text-sm mb-2">{rank.c}</h5>
                        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">{rank.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
                </div>
            </Reveal>
            <Reveal variant="fadeRight" className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-navy uppercase italic">Strategic <span className="text-wine">Export Markets</span></h2>
              <p className="text-gray-500 font-medium text-lg leading-relaxed italic">
                We supply to price-sensitive and quality-conscious buyers across emerging industrial regions worldwide.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { c: "Vietnam", d: "Strong rubber/tyre manufacturing hub." },
                  { c: "Bangladesh", d: "High preference for cheap raw materials." },
                  { c: "Indonesia", d: "Strong tyre & plastic industries." },
                  { c: "Turkey", d: "Key hub for Euro-Asian rubber/coatings." },
                  { c: "UAE", d: "Major trading and re-export hub." },
                  { c: "Egypt", d: "Growing rubber & construction sector." },
                  { c: "Nigeria", d: "Emerging African low-cost material demand." }
                ].map((market, i) => (
                  <div key={i} className="p-5 border border-gray-100 hover:border-wine transition-all bg-gray-50/30">
                    <h5 className="font-black text-navy text-xs uppercase mb-2 tracking-widest">{market.c}</h5>
                    <p className="text-[10px] text-gray-400 font-bold uppercase italic">{market.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🏁 Why Buy From Us */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-navy uppercase italic">Why Source <span className="text-wine">From Ochnology?</span></h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Consistent Quality", d: "Controlled ash content and reliable performance in every batch." },
              { t: "Competitive Pricing", d: "Sasta aur Tikau: The most cost-effective alternative to virgin carbon black." },
              { t: "Direct Sourcing", d: "Material sourced directly from trusted pyrolysis plant manufacturers." },
              { t: "Ready Stock", d: "Quick delivery via streamlined export logistics from JNPT and Mundra." },
              { t: "Flexible Terms", d: "Custom solutions for both small R&D and large bulk buyers." },
              { t: "COA & Support", d: "Complete documentation and technical support provided for all applications." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all border-t-4 border-wine group">
                <h4 className="font-black text-navy uppercase text-sm mb-6 italic tracking-widest group-hover:text-wine transition-colors">{item.t}</h4>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-relaxed italic">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy uppercase italic tracking-tighter">Frequently Asked <span className="text-wine">Questions</span></h2>
            <div className="w-24 h-1 bg-wine mx-auto mt-4"></div>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 100}>
                <div className={`bg-gray-50 border transition-all duration-500 ${activeFaq === idx ? "border-wine shadow-xl ring-1 ring-wine/10" : "border-gray-100 shadow-sm"}`}>
                  <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full px-8 py-7 text-left flex justify-between items-center group">
                    <span className={`font-black uppercase text-sm transition-colors duration-300 ${activeFaq === idx ? "text-wine" : "text-navy group-hover:text-wine"}`}>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${activeFaq === idx ? "bg-wine text-white rotate-180" : "bg-white text-navy shadow-sm"}`}>
                      <Icons.Chevron className="w-4 h-4" />
                    </div>
                  </button>
                  <div className={`px-8 transition-all duration-500 ease-in-out overflow-hidden ${activeFaq === idx ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="pt-6 border-t border-gray-200">
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
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full border-[150px] border-wine rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Reveal variant="zoomIn">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">
              Get A <span className="text-wine">Quote</span>
            </h2>
            <p className="text-white/40 font-black uppercase tracking-[0.3em] text-xs mb-12 italic">
              Sustainable Carbon Solutions • India's Leading rCB Exporter
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

export default RecoveredCarbonBlack;
