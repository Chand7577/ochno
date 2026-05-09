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
  Zap: () => (
    <svg className="w-6 h-6 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
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

const ActivatedCarbon = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const faqs = [
    { q: "What is the primary benefit of Activated Carbon?", a: "Its massive surface area and millions of tiny pores allow it to absorb impurities, smells, colors, and toxins like a high-performance industrial sponge." },
    { q: "How do Coal-based and Coconut-based carbon differ?", a: "Coal-based is stronger and more durable with larger pores, ideal for industrial wastewater and air filtration. Coconut-based has higher purity and smaller pores, making it the gold standard for drinking water (RO), pharma, and food industries." },
    { q: "How often should Activated Carbon be replaced in water plants?", a: "Replacement cycles vary by plant size and usage, typically ranging from 1 to 3 months. Small plants use ~10-20kg monthly, while large bottled water plants can consume 500kg+ per month." },
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/1/WG/AG/OA/5356791/activated-carbon-powder.jpg"
            alt="Activated Carbon powder background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wine opacity-20 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-6 py-2 bg-wine text-white rounded-none text-[10px] font-black tracking-[0.4em] uppercase mb-8 shadow-2xl">
              High-Porosity | Absorption Mastery
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter italic leading-none">
              Activated <span className="text-wine block md:inline">Carbon</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-lg md:text-2xl text-white/70 max-w-4xl mx-auto font-bold leading-relaxed mb-12 uppercase italic">
              Premium Coconut Shell & Coal Based Solutions for Purification, Filtration & Mining
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
              src="https://5.imimg.com/data5/SELLER/Default/2023/1/WG/AG/OA/5356791/activated-carbon-powder.jpg"
              alt="Activated Carbon Powder"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
              <span className="p-4 text-white font-black uppercase text-xs tracking-widest">Carbon Powder</span>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/11/364749962/XO/DV/QT/4617212/activated-carbon-1000-iv-500x500.jpg"
              alt="Activated Carbon 1000 IV"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-wine/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
              <span className="p-4 text-white font-black uppercase text-xs tracking-widest">1000 IV Grade</span>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://5.imimg.com/data5/ANDROID/Default/2020/12/LT/MK/QS/111515836/product-jpeg-500x500.jpg"
              alt="Activated Carbon granules"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
              <span className="p-4 text-white font-black uppercase text-xs tracking-widest">Granular Carbon</span>
            </div>
          </div>
        </div>
      </section>

      {/* 📖 Deep Extraction: What is Activated Carbon */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-black text-navy uppercase italic tracking-tighter">
                  The <span className="text-wine">Science</span> of Pores
                </h2>
                <div className="w-24 h-2 bg-navy mb-8"></div>
                <p className="text-gray-600 text-lg leading-relaxed font-medium italic">
                  Activated carbon (activated charcoal) is a specialized carbon material processed to have millions of tiny pores. This unique structure acts like an industrial sponge, soaking up impurities, chemicals, and toxins with unmatched efficiency.
                </p>
                <div className="bg-navy p-10 rounded-none border-l-8 border-wine shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-wine/10 -translate-y-16 translate-x-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  <p className="text-white font-black text-xl italic leading-snug relative z-10">
                    "Activated carbon creates a microscopic filtration network that effectively removes bad smells, colors, and hazardous chemicals from air and water."
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeRight" className="bg-gray-50 p-12 border-y-8 border-navy shadow-2xl">
              <h3 className="text-2xl font-black text-navy uppercase italic mb-8 border-b border-gray-200 pb-4 text-center text-wine">Indian Production Hubs</h3>
              <div className="space-y-8">
                {[
                  { r: "Tamil Nadu (No. 1 Hub)", c: "Pollachi, Coimbatore, Tirupur", d: "Export-quality coconut shell based carbon hub. Highest global demand." },
                  { r: "Kerala", c: "Strategic Coastal Cluster", d: "Strong network of small to medium coconut raw material manufacturers." },
                  { r: "Gujarat", c: "Industrial Coal Base", d: "Focused on heavy industrial-scale coal-based activated carbon production." },
                  { r: "West Bengal", c: "Mining Integrated", d: "Leveraging coal availability for high-durability industrial filtration products." }
                ].map((hub, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-black text-wine text-xs uppercase tracking-widest">{hub.r}</span>
                      <span className="text-[10px] font-bold text-gray-400 group-hover:text-navy transition-colors">{hub.c}</span>
                    </div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">{hub.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📊 Technical Comparison */}
      <section className="py-24 bg-navy text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-4">Material <span className="text-wine">Intelligence</span></h2>
            <div className="w-24 h-1 bg-wine mx-auto"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all shadow-xl overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://5.imimg.com/data5/ANDROID/Default/2020/12/LT/MK/QS/111515836/product-jpeg-500x500.jpg"
                  alt="Coal-based activated carbon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
                <span className="absolute bottom-4 left-6 text-wine font-black text-xs uppercase tracking-widest">Coal-Based Carbon</span>
              </div>
              <div className="p-12">
                <ul className="space-y-6">
                  {[
                    { l: "Strength", v: "Strong & Hard (Non-brittle)" },
                    { l: "Structure", v: "Large Pore Architecture" },
                    { l: "Primary Use", v: "Wastewater, Gases, Fumes" },
                    { l: "Price Range", v: "₹60 – ₹120 / kg" }
                  ].map((item, i) => (
                    <li key={i} className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">{item.l}</span>
                      <span className="text-white font-bold text-xs uppercase italic">{item.v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-wine/5 border border-wine/20 hover:bg-wine/10 transition-all shadow-xl overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2023/11/364749962/XO/DV/QT/4617212/activated-carbon-1000-iv-500x500.jpg"
                  alt="Coconut shell activated carbon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
                <span className="absolute bottom-4 left-6 text-wine font-black text-xs uppercase tracking-widest">Coconut-Shell Based</span>
              </div>
              <div className="p-12">
                <ul className="space-y-6">
                  {[
                    { l: "Strength", v: "Medium to High" },
                    { l: "Structure", v: "Fine Micro-Pore Network" },
                    { l: "Primary Use", v: "Drinking Water, Pharma, Gold" },
                    { l: "Price Range", v: "₹90 – ₹180 / kg" }
                  ].map((item, i) => (
                    <li key={i} className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-wine font-black text-[10px] uppercase tracking-widest">{item.l}</span>
                      <span className="text-white font-bold text-xs uppercase italic">{item.v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 Application Segments */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase italic mb-4">Global <span className="text-wine">Applications</span></h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Filtering Excellence Across Key Industrial Verticals</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "RO Water Plants", d: "No. 1 Market. Essential for smell and chlorine removal in home filters and bottled water plants.", icon: <Icons.Check /> },
              { t: "Pharma Industry", d: "High-purity purification for medicines, syrups, and chemical filtration.", icon: <Icons.Recycle /> },
              { t: "Food & Beverage", d: "Color removal for sugar refining, edible oils, juices, and alcohol purification.", icon: <Icons.Zap /> },
              { t: "Gold Recovery", d: "The gold standard for mining operations. Coconut carbon is most effective for extraction.", icon: <Icons.Globe /> }
            ].map((app, i) => (
              <Reveal key={i} delay={i * 100} className="bg-gray-50 p-10 border border-gray-100 hover:border-wine transition-all group h-full">
                <div className="mb-8 group-hover:scale-110 transition-transform">{app.icon}</div>
                <h4 className="text-xl font-black uppercase italic mb-4 text-navy group-hover:text-wine transition-colors">{app.t}</h4>
                <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed italic">{app.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 Consumption Guide */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft">
              <h2 className="text-4xl font-black text-navy uppercase italic mb-8">Supply <span className="text-wine">Benchmarks</span></h2>
              <p className="text-gray-500 font-medium mb-12 text-lg">
                We assist local RO suppliers and industrial factories in estimating their monthly carbon consumption based on plant capacity.
              </p>
              <div className="space-y-4">
                {[
                  { p: "Small Plant (1K-2K LPH)", c: "10 – 20 kg / month" },
                  { p: "Medium Plant (5K-10K LPH)", c: "40 – 80 kg / month" },
                  { p: "Large Plant (20K+ LPH)", c: "150 – 500+ kg / month" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center p-6 bg-white border border-gray-100 shadow-sm">
                    <span className="font-black text-navy uppercase text-xs tracking-widest">{row.p}</span>
                    <span className="text-wine font-black italic text-xs uppercase">{row.c}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal variant="fadeRight" className="bg-navy p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-wine -translate-y-16 translate-x-16 rotate-45"></div>
              <h3 className="text-3xl font-black uppercase italic mb-8">Target Buyer Regions</h3>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { r: "Delhi NCR Cluster", d: "Delhi, Noida, Ghaziabad, Meerut. Massive RO + Water Jar demand." },
                  { r: "Industrial Belts", d: "Okhla, Bawana, Sahibabad. Heavy ETP/STP and Factory use." },
                  { r: "Pharma Hubs", d: "Noida and Okhla filtration sectors." }
                ].map((region, i) => (
                  <div key={i} className="border-b border-white/10 pb-4">
                    <h5 className="font-black text-wine uppercase text-sm mb-2">{region.r}</h5>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest italic">{region.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🏁 Why Source From Us */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-navy uppercase italic">Why Buy <span className="text-wine">From Ochnology?</span></h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Direct Import Advantage", d: "We source directly from trusted manufacturers in India and China, ensuring best prices." },
              { t: "Competitive Pricing", d: "Highly competitive rates without compromising on industry-standard quality." },
              { t: "Assured Quality", d: "All products supplied with proper COA and meet required industrial standards." },
              { t: "Reliable Supply", d: "Consistent stock availability for timely delivery and business continuity." },
              { t: "Flexible Quantity", d: "We cater to both small trial orders and massive bulk industrial requirements." },
              { t: "Quick Support", d: "Fast communication and prompt technical support for all filtration inquiries." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-10 shadow-sm hover:shadow-xl transition-all border-b-4 border-wine group">
                <h4 className="font-black text-navy uppercase text-sm mb-6 italic tracking-widest group-hover:text-wine transition-colors">{item.t}</h4>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-relaxed italic">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy uppercase italic tracking-tighter">Frequently Asked <span className="text-wine">Questions</span></h2>
            <div className="w-24 h-1 bg-wine mx-auto mt-4"></div>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 100}>
                <div className={`bg-white border transition-all duration-500 ${activeFaq === idx ? "border-wine shadow-xl ring-1 ring-wine/10" : "border-gray-100 shadow-sm"}`}>
                  <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full px-8 py-7 text-left flex justify-between items-center group">
                    <span className={`font-black uppercase text-sm transition-colors duration-300 ${activeFaq === idx ? "text-wine" : "text-navy group-hover:text-wine"}`}>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${activeFaq === idx ? "bg-wine text-white rotate-180" : "bg-gray-50 text-navy shadow-sm"}`}>
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
          <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-wine rounded-full translate-x-1/2 translate-y-1/2 blur-[100px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Reveal variant="zoomIn">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">
              Get A <span className="text-wine">Quote</span>
            </h2>
            <p className="text-white/40 font-black uppercase tracking-[0.3em] text-xs mb-12 italic">
              Premium Filtration Solutions • India's Trusted Activated Carbon Partner
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

export default ActivatedCarbon;
