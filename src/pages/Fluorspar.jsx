import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import heroImage from "../assets/fluorspar_hero.jpg";
import fluorsparVideo from "../assets/fluorpsar.mp4";
import fluorsparImage from "../assets/fluorspar.jpeg";

// ── Icons ──────────────────────────────────────────────────────────────────
const Icons = {
  Check: () => (
    <svg className="w-5 h-5 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  MapPin: () => (
    <svg className="w-6 h-6 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Globe: () => (
    <svg className="w-6 h-6 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Factory: () => (
    <svg className="w-6 h-6 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Download: () => (
    <svg className="w-5 h-5 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
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
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const { h, v } = VARIANTS[variant] || VARIANTS.fadeUp;
  return (
    <div
      ref={ref}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
      className={`transition-all ease-out ${visible ? v : h} ${className}`}
    >
      {children}
    </div>
  );
};

const Fluorspar = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    if (faqOpen === index) {
      setFaqOpen(null);
    } else {
      setFaqOpen(index);
    }
  };

  const productGrades = [
    { grade: "Acidspar (AHF grade)", caf2: "97% min", sio2: "1.0%", caco3: "0.5%", fe2o3: "0.15%", s: "0.03%", use: "HF / AHF manufacturing", tds: "#" },
    { grade: "Acidspar (97.5%)", caf2: "97.5% min", sio2: "0.8%", caco3: "0.3%", fe2o3: "0.10%", s: "0.02%", use: "Refrigerants, fluoropolymers", tds: "#" },
    { grade: "Metspar", caf2: "85–92%", sio2: "3.0%", caco3: "2.0%", fe2o3: "0.30%", s: "0.05%", use: "Steel, aluminium flux", tds: "#" },
    { grade: "Ceramic grade", caf2: "90–95%", sio2: "2.5%", caco3: "1.5%", fe2o3: "0.25%", s: "—", use: "Enamel, glass, ceramic frit", tds: "#" },
    { grade: "Optical / UV grade", caf2: "99%+ min", sio2: "0.1%", caco3: "—", fe2o3: "0.05%", s: "—", use: "Optical lenses, semiconductors", tds: "#" }
  ];

  const faqs = [
    { q: "What is the difference between acid grade and metallurgical grade fluorspar?", a: "Acid grade fluorspar typically contains ≥97% CaF₂ and is used in hydrofluoric acid and chemical production. Metallurgical grade fluorspar contains 80–90% CaF₂ and is primarily used in steelmaking as a flux to improve slag fluidity." },
    { q: "What CaF₂ % can we consistently supply?", a: "We supply: Acid Grade: 97% minimum, Metallurgical Grade: 80–90%. Custom specifications can also be arranged based on specific application requirements." },
    { q: "What are the key impurities to check in fluorspar?", a: "Key parameters include: SiO₂ (Silica), Sulfur (S), Phosphorus (P), and Calcium Carbonate (CaCO₃). Maintaining low impurity levels is critical for both chemical and metallurgical applications." },
    { q: "What is the typical size available for fluorspar?", a: "We supply Lumps: 10–50 mm / 10–70 mm and Powder / fines for chemical applications. Sizes can be customized as per requirement." },
    { q: "Do we provide samples before bulk order?", a: "Yes, we provide samples for testing and approval before confirming bulk shipments." },
    { q: "What is our minimum order quantity (MOQ)?", a: "MOQ depends on grade and origin, but typically: 1 container (20–25 MT) for trial orders. Bulk supply available for long-term contracts." },
    { q: "Can we supply fluorspar regularly on a long-term basis?", a: "Yes, we work with multiple global suppliers, ensuring consistent and uninterrupted supply for long-term requirements." },
    { q: "What payment terms do we accept when selling?", a: "We generally work with LC (Letter of Credit) and TT (Advance / Partial Advance). Terms can be discussed based on order size and relationship." },
    { q: "Are we looking to collaborate with fluorspar exporters?", a: "Yes, we actively collaborate with global fluorspar miners and exporters for long-term supply to Indian buyers." },
    { q: "What specifications do we look for from suppliers?", a: "We typically look for Acid grade (≥97% CaF₂) and Metallurgical grade (80–90% CaF₂), with consistent quality across shipments." },
    { q: "Which countries are we sourcing from?", a: "Currently sourcing from China and South Africa. We are open to collaboration with suppliers from Mongolia, Mexico, and other regions." },
    { q: "How can suppliers connect with us?", a: "Suppliers can share Product specifications, Test reports, and Company profile. We are open to long-term supply partnerships." }
  ];

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Fluorspar Mineral" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/60 to-navy/80"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-16">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-4 py-1.5 bg-wine/20 border border-wine/50 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              Functional Minerals | Global Sourcing
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              High-Grade <span className="text-wine">Fluorspar</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed mb-4">
              Sourced from China, South Africa & Mexico — Reliable Supply for Indian Industry
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Acidspar (97%+ CaF₂), Metspar (85–95% CaF₂), Ceramic grade — bulk & bagged
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-wine text-white px-8 py-4 rounded-xl font-bold hover:bg-wine/90 transition-all shadow-lg text-center">
              Request a Quote
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-navy transition-all shadow-lg text-center">
              Offer Your Supply
            </Link>
          </Reveal>
          <Reveal variant="fadeUp" delay={1000} className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <Icons.Globe />
              <span className="text-white text-sm font-medium">Global Network</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <Icons.Factory />
              <span className="text-white text-sm font-medium">Multiple Industries Supplied</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 💎 Material Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <Reveal variant="fadeLeft" className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-wine/5 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                <img 
                  src="https://5.imimg.com/data5/AH/PS/LZ/SELLER-3241042/fluorspar-powder-500x500.jpg" 
                  alt="Fluorspar Powder" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square lg:aspect-[4/3]"
                />
              </div>
            </Reveal>
            <Reveal variant="fadeRight" className="lg:w-1/2">
              <h2 className="text-3xl font-black text-navy mb-6">
                Premium <span className="text-wine">Fluorspar Powder</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our ultra-fine fluorspar powder is processed using advanced milling technology to ensure consistent particle size and high chemical purity. Sourced from the world's best mines, it meets the most stringent industrial standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#f8f9fb] rounded-xl border border-gray-100">
                  <span className="block text-wine font-bold text-xl">97%+</span>
                  <span className="text-gray-500 text-sm font-medium">CaF₂ Acid Grade Purity</span>
                </div>
                <div className="p-4 bg-[#f8f9fb] rounded-xl border border-gray-100">
                  <span className="block text-wine font-bold text-xl">200 Mesh</span>
                  <span className="text-gray-500 text-sm font-medium">Standard Particle Size</span>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <Icons.Check />
                </div>
                <p className="text-navy font-bold text-sm italic">
                  "Highest quality consistency for chemical & refrigerant manufacturing."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📊 Product Grades Catalogue */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Product Grades <span className="text-wine">Catalogue</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We supply fluorspar in lump (25–75mm), gravel (6–25mm), and powder (200 mesh) forms. Custom specifications available on request.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={200}>
            <div className="overflow-x-auto bg-[#f8f9fb] rounded-3xl border border-gray-100 shadow-sm p-4 md:p-8">
              <table className="w-full text-left border-collapse min-w-max">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-4 px-4 font-bold text-navy">Grade</th>
                    <th className="py-4 px-4 font-bold text-navy">CaF₂ %</th>
                    <th className="py-4 px-4 font-bold text-navy">SiO₂ max</th>
                    <th className="py-4 px-4 font-bold text-navy">CaCO₃ max</th>
                    <th className="py-4 px-4 font-bold text-navy">Fe₂O₃ max</th>
                    <th className="py-4 px-4 font-bold text-navy">S max</th>
                    <th className="py-4 px-4 font-bold text-navy">Primary Use</th>
                    <th className="py-4 px-4 font-bold text-navy text-center">TDS</th>
                  </tr>
                </thead>
                <tbody>
                  {productGrades.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-bold text-wine">{row.grade}</td>
                      <td className="py-4 px-4 font-semibold text-gray-700">{row.caf2}</td>
                      <td className="py-4 px-4 text-gray-600">{row.sio2}</td>
                      <td className="py-4 px-4 text-gray-600">{row.caco3}</td>
                      <td className="py-4 px-4 text-gray-600">{row.fe2o3}</td>
                      <td className="py-4 px-4 text-gray-600">{row.s}</td>
                      <td className="py-4 px-4 text-gray-600 italic text-sm">{row.use}</td>
                      <td className="py-4 px-4 text-center">
                        <a 
                          href={row.tds} 
                          className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-wine/5 text-wine hover:bg-wine hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                          title="Download TDS"
                        >
                          <Icons.Download />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-8 text-center bg-white p-4 rounded-xl border border-gray-100">
                <p className="text-navy font-bold text-sm">Downloadable COA / typical test report for each grade available as PDF.</p>
                <p className="text-gray-500 text-sm mt-1">Tell us your exact spec — we will source it.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🇮🇳 Domestic vs Imported Specs */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeLeft">
              <h2 className="text-4xl font-black text-navy mb-6">
                Why India Needs to <span className="text-wine">Import High-Grade</span> Fluorspar
              </h2>
              <div className="w-20 h-1.5 bg-wine rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                India's reserves (~12–13 million tonnes) and annual production (~40,000–50,000 MT) fall far below domestic industrial demand. The largest deposits are in Ambadongar (Gujarat) and parts of Rajasthan.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                While Indian grades (70-85% CaF₂) are sufficient for cement and some steel fluxes, HF / AHF manufacturing requires 97%+ CaF₂ — domestic material cannot meet this. The refrigerant chain requires ultra-low SiO₂, making the industry entirely import-dependent.
              </p>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <Icons.Check />
                </div>
                <p className="text-navy font-bold text-sm">
                  We supply BIS specification compliant fluorspar (IS 1070) with strict testing.
                </p>
              </div>
            </Reveal>

            <Reveal variant="fadeRight" delay={300}>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-navy mb-6 text-center border-b pb-4">Comparison: Indian vs Import Grade</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm font-bold text-gray-400 uppercase tracking-wide">
                    <span>Parameter</span>
                    <span className="text-right">Import (China/SA)</span>
                  </div>
                  
                  {[
                    { p: "CaF₂ %", dom: "70–85%", imp: "97%+" },
                    { p: "SiO₂ %", dom: "5–12%", imp: "<1%" },
                    { p: "CaCO₃ %", dom: "3–8%", imp: "<0.5%" },
                    { p: "Fe₂O₃ %", dom: "0.5–2%", imp: "<0.15%" },
                    { p: "Physical Form", dom: "Inconsistent Lump", imp: "Sorted & Consistent" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0 relative">
                      <span className="font-bold text-navy w-1/3">{row.p}</span>
                      <span className="text-gray-400 text-sm absolute left-1/3 ml-4">{row.dom} (India)</span>
                      <span className="font-bold text-wine text-right w-1/3">{row.imp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🚀 Industry Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Who Buys Fluorspar <span className="text-wine">in India & Why?</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-6"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "HF & AHF Manufacturing", d: "Largest segment. Requires consistent 97%+ acidspar. HF is the entry point for the entire fluorochemical chain.", i: "⚗️" },
              { t: "Refrigerants & Fluoropolymers", d: "PTFE, PVDF, FKM manufacturers. Rapid growth from China+1 trend needs pure acidspar supply.", i: "❄️" },
              { t: "Steel & Alloy", d: "Metspar as flux in EAF, BOF. Lowers slag viscosity, improves desulphurisation. Ranges 85–92% CaF₂.", i: "⚙️" },
              { t: "Aluminium Smelting", d: "Flux in electrolytic cells (Hall-Héroult process), reducing bath temperatures efficiently.", i: "🏗️" },
              { t: "Glass & Ceramics", d: "Opacity agent, flux to lower melting point. Used in architectural glass & ceramic frit.", i: "🏺" },
              { t: "Cement Industry", d: "Mineraliser in clinker formation. Reduces kiln temp and improves grindability.", i: "🏭" },
              { t: "Welding Electrodes", d: "Flux coating component where mid-purity metspar grades are highly sufficient.", i: "⚡" },
              { t: "Optical & Semiconductor", d: "UV-grade CaF₂ for lens blanks, lithography windows — a niche but high-value segment.", i: "🔬" }
            ].map((app, index) => (
              <Reveal key={index} variant="zoomIn" delay={index * 50}>
                <div className="bg-[#f8f9fb] rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all h-full">
                  <div className="text-4xl mb-4">{app.i}</div>
                  <h3 className="font-bold text-navy text-lg mb-2">{app.t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{app.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🌍 Sourcing Map & Demand */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.1"/>
             </pattern>
             <rect width="100" height="100" fill="url(#grid)" />
           </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal variant="fadeLeft">
              <h2 className="text-4xl font-black mb-6 border-b border-white/20 pb-4">
                Global Sourcing Hubs
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-wine text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">China</h4>
                    <p className="text-gray-400 text-sm">60% of global supply. Inner Mongolia, Hunan deposits. Primary quality source for high-grade acidspar.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-wine text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">South Africa</h4>
                    <p className="text-gray-400 text-sm">Bushveld complex. High-purity acidspar, low impurities, consistent lump. Preferred for HF production.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-wine text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Mexico & Mongolia</h4>
                    <p className="text-gray-400 text-sm">Mexico handles competitive metspar. Mongolia is a fast-growing exporter for quality acidspar.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
                <h4 className="font-bold text-lg mb-2">Foreign Exporters:</h4>
                <p className="text-sm text-gray-300">Are you a fluorspar miner or trading company? Send us your specification right away.</p>
                <Link to="/contact" className="mt-4 inline-block bg-white text-navy px-6 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                  Contact Us
                </Link>
              </div>
            </Reveal>

            <Reveal variant="fadeRight" delay={300}>
              <h2 className="text-4xl font-black mb-6 border-b border-white/20 pb-4">
                The Supply Gap
              </h2>
              <ul className="space-y-5">
                <li className="bg-[#002d52] p-5 rounded-xl border border-white/10">
                  <h4 className="font-bold text-wine mb-1">Fluorochemicals & China+1</h4>
                  <p className="text-gray-300 text-sm">Growing demand for PTFE, R-32, R-125 is pushing Indian HF requirement to over 200,000 MT/year.</p>
                </li>
                <li className="bg-[#002d52] p-5 rounded-xl border border-white/10">
                  <h4 className="font-bold text-wine mb-1">EV Battery Boom</h4>
                  <p className="text-gray-300 text-sm">LiPF₆ electrolyte salts require ultra-pure HF feed. India is rapidly building capacity, needing high-grade acidspar.</p>
                </li>
                <li className="bg-[#002d52] p-5 rounded-xl border border-white/10">
                  <h4 className="font-bold text-wine mb-1">Structurally Import Dependent</h4>
                  <p className="text-gray-300 text-sm">With domestic yield at 50,000 MT against massive demand, 70-75% of high-grade fluorspar is imported annually.</p>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📸 Visual Experience */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter mb-4">
              Visual <span className="text-wine">Gallery</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Industrial footage and high-purity fluorspar samples from our global sourcing network.
            </p>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            {/* Video Feature */}
            <Reveal variant="fadeLeft" className="lg:col-span-2 relative aspect-video overflow-hidden rounded-3xl shadow-2xl group">
              <video 
                src={fluorsparVideo} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <h4 className="text-white text-2xl font-black">Industrial Sourcing</h4>
                  <p className="text-gray-300">Live footage from our processing and loading facilities.</p>
                </div>
              </div>
            </Reveal>

            {/* Image Feature 1 */}
            <Reveal variant="fadeRight" className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl group">
              <img 
                src={fluorsparImage} 
                alt="High-Grade Fluorspar" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <h4 className="text-white text-xl font-black">Acid Grade Spar</h4>
                  <p className="text-gray-300">High-purity CaF₂ 97% min.</p>
                </div>
              </div>
            </Reveal>

            {/* Image Feature 2 */}
            <Reveal variant="fadeRight" delay={200} className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl group">
              <img 
                src="https://s.alicdn.com/@sc04/kf/H8819ed618aba4dfd9571edb18847f497B/Mongolia-Minerals-Caf2-Fluorspar-Fluorite-Powder-Price-Verification-in-Lumps-80-Fine-100kg.jpg_300x300.jpg" 
                alt="Mongolian Fluorspar Lumps" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <h4 className="text-white text-xl font-black">Mongolian Minerals</h4>
                  <p className="text-gray-300">High-grade lumps & fine powder.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ❓ FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Frequently Asked <span className="text-wine">Questions</span>
            </h2>
            <div className="w-20 h-1 bg-wine mx-auto rounded-full mb-4"></div>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 50}>
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-[#f8f9fb]">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-100 transition-colors focus:outline-none"
                  >
                    <span className="font-bold text-navy truncate flex-1 pr-4">Q. {faq.q}</span>
                    <svg 
                      className={`w-5 h-5 text-wine transition-transform duration-300 flex-shrink-0 ${faqOpen === index ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${faqOpen === index ? "max-h-[500px] py-4 bg-white border-t border-gray-100" : "max-h-0 py-0"}`}>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🏁 Call to Action */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal variant="zoomIn">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Are you looking for Fluorspar?
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Connect with our team for bulk orders, specification matching, or exporting opportunities to India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/rfq" className="bg-wine text-white px-10 py-5 rounded-xl font-bold hover:bg-wine/80 transition-all shadow-xl">
                Get Quotation
              </Link>
              <a href="https://wa.me/919258720699" target="_blank" rel="noopener noreferrer" className="bg-white text-navy px-10 py-5 rounded-xl font-bold hover:bg-gray-200 transition-all shadow-xl">
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Fluorspar;
