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
  Battery: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Recycle: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  Globe: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Factory: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Leaf: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  ChevronDown: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  ),
  ChevronUp: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  )
};

// ── Reveal Component ─────────────────────────────────────────────────────────
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

  const variants = {
    fadeUp: { h: "opacity-0 translate-y-12 blur-sm", v: "opacity-100 translate-y-0 blur-none" },
    fadeLeft: { h: "opacity-0 -translate-x-12 blur-sm", v: "opacity-100 translate-x-0 blur-none" },
    fadeRight: { h: "opacity-0 translate-x-12 blur-sm", v: "opacity-100 translate-x-0 blur-none" },
    zoomIn: { h: "opacity-0 scale-95 blur-sm", v: "opacity-100 scale-100 blur-none" },
  };

  const { h, v } = variants[variant] || variants.fadeUp;

  return (
    <div ref={ref} style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }} className={`transition-all ease-out ${visible ? v : h} ${className}`}>
      {children}
    </div>
  );
};

const CobaltSulphate = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [isExpanded, setIsExpanded] = useState(false);

  const specs = [
    { p: "Chemical formula", v: "CoSO₄·7H₂O", i: "CoSO₄·7H₂O", r: "CoSO₄·7H₂O" },
    { p: "Cobalt (Co) content %", v: "≥20.5%", i: "≥20.0%", r: "≥19.5–20.0%" },
    { p: "Assay (CoSO₄) %", v: "≥99.0%", i: "≥98.0%", r: "≥96.0–98.0%" },
    { p: "Iron (Fe) ppm max", v: "≤5 ppm", i: "≤20 ppm", r: "≤50 ppm" },
    { p: "Nickel (Ni) ppm max", v: "≤10 ppm", i: "≤50 ppm", r: "≤100 ppm" },
    { p: "Copper (Cu) ppm max", v: "≤5 ppm", i: "≤20 ppm", r: "≤50 ppm" },
    { p: "Manganese (Mn) ppm max", v: "≤5 ppm", i: "≤30 ppm", r: "≤80 ppm" },
    { p: "Sodium (Na) ppm max", v: "≤20 ppm", i: "≤50 ppm", r: "≤100 ppm" },
    { p: "Chloride (Cl⁻) ppm max", v: "≤10 ppm", i: "≤30 ppm", r: "≤50 ppm" },
    { p: "Moisture % max", v: "0.5%", i: "1.0%", r: "1.5%" },
    { p: "Appearance", v: "Pink/red crystalline powder", i: "Pink/red crystalline", r: "Pink/red crystalline" },
    { p: "Solubility", v: "Completely soluble in water", i: "Completely soluble", r: "Completely soluble" },
    { p: "pH (5% solution)", v: "3.5–5.0", i: "3.5–5.5", r: "3.5–5.5" },
    { p: "Molecular weight", v: "281.10 g/mol", i: "281.10 g/mol", r: "281.10 g/mol" },
    { p: "Origin", v: "China / Finland", i: "China", r: "India (certified recyclers)" },
    { p: "Price position", v: "Premium", i: "Standard", r: "Cost-effective (15-30% lower)" },
  ];

  return (
    <div className="bg-[#fcfaff] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Hero Section - Dynamic & Modern */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-wine/90 via-navy/95 to-black/90 z-10"></div>
          <img
            src="https://static.wixstatic.com/media/f8f344_c8ac995b896e46f8ad1fdce873585d97~mv2.jpg/v1/fill/w_1000,h_1000,al_c/f8f344_c8ac995b896e46f8ad1fdce873585d97~mv2.jpg"
            alt="Cobalt Sulphate Background"
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          {/* Animated particles or glow effects could be added here */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wine/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-6 py-2 bg-white/10 border border-white/20 text-wine rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-xl">
              Precision Chemical Solutions
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
              COBALT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-wine to-purple-400">SULPHATE</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <span className="text-xl text-gray-300 font-light border-r border-white/20 pr-6">CoSO₄·7H₂O</span>
              <span className="text-xl text-gray-300 font-light border-r border-white/20 pr-6">Co ≥ 20.5%</span>
              <span className="text-xl text-gray-300 font-light">Dual-Grade Availability</span>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-12 italic">
              "Virgin Imported Grade · Recycled India Grade — Two Sources, Two Price Points, One Supplier"
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800} className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/rfq" className="bg-wine text-white px-10 py-5 rounded-2xl font-black hover:bg-white hover:text-wine transition-all shadow-[0_20px_50px_rgba(136,32,74,0.3)] hover:-translate-y-1">
              Enquire for Supply
            </Link>
            <Link to="/contact" className="bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition-all backdrop-blur-md">
              Offer Your Supply
            </Link>
          </Reveal>
          
          {/* Trust Strip */}
          <Reveal variant="zoomIn" delay={1000} className="mt-20 pt-10 border-t border-white/5">
             <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:opacity-100 transition-opacity">
                {["COA Included", "MSDS Available", "Assay ≥98%", "ISO 9001", "Sample in 3–5 Days"].map((text, i) => (
                  <span key={i} className="text-white text-xs font-bold tracking-widest uppercase">{text}</span>
                ))}
             </div>
          </Reveal>
        </div>
      </section>

      {/* 🔬 Section 2: Dual Sourcing Model - The "Nice Different Layout" */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">
              A Strategic <span className="text-wine">Distinction</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              We supply cobalt sulphate from two distinct sources — tailored for purity requirements or cost-efficiency.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Virgin Grade Card */}
            <Reveal variant="fadeLeft" className="group">
              <div className="relative h-full bg-[#f8f9fb] p-12 rounded-[3rem] overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:bg-white">
                <div className="absolute top-0 right-0 w-40 h-40 bg-wine/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-wine text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <Icons.Shield />
                  </div>
                  <h3 className="text-3xl font-black text-navy mb-6">Virgin Cobalt Sulphate <span className="text-wine block text-xl">(Imported)</span></h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Produced from primary cobalt metal or high-purity intermediate compounds. Sourced from premier refining chains in China and Finland.
                  </p>
                  <ul className="space-y-4 mb-10">
                    {["Highest Purity (Battery Grade)", "Standard for Cathode Precursors", "Used in High-Spec Electroplating", "Pharmaceutical Compliant"].map((li, i) => (
                      <li key={i} className="flex items-center gap-3 text-navy font-bold text-sm">
                        <div className="w-1.5 h-1.5 bg-wine rounded-full"></div> {li}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-8 border-t border-gray-200">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 block mb-2">Ideal for</span>
                    <p className="text-navy font-bold">EV Batteries & Precision Electronics</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Recycled Grade Card */}
            <Reveal variant="fadeRight" delay={200} className="group">
              <div className="relative h-full bg-[#002d52] p-12 rounded-[3rem] overflow-hidden border border-white/5 transition-all duration-500 hover:shadow-2xl hover:bg-[#003463]">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-wine/10 rounded-full -ml-20 -mb-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 text-white">
                  <div className="w-16 h-16 bg-white/10 text-wine rounded-2xl flex items-center justify-center mb-8 backdrop-blur-xl">
                    <Icons.Recycle />
                  </div>
                  <h3 className="text-3xl font-black mb-6">Recycled Cobalt Sulphate <span className="text-wine block text-xl">(India Origin)</span></h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Produced by certified Indian battery recyclers via hydrometallurgical processing of end-of-life Li-ion batteries and industrial scrap.
                  </p>
                  <ul className="space-y-4 mb-10">
                    {["15–30% Significant Cost Savings", "Lower Carbon Footprint (ESG)", "Alternative to DRC Supply Chains", "Batch-to-Batch COA Stability"].map((li, i) => (
                      <li key={i} className="flex items-center gap-3 text-white font-bold text-sm">
                        <div className="w-1.5 h-1.5 bg-wine rounded-full"></div> {li}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-8 border-t border-white/10">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-2">Ideal for</span>
                    <p className="text-white font-bold">General Electroplating, Agriculture & Pigments</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📸 Section: Material Showcase */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">Material <span className="text-wine">Showcase</span></h2>
            <p className="text-gray-500">Visual inspection of high-purity cobalt sulphate crystals and powder.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal variant="zoomIn" delay={200} className="group">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src="https://5.imimg.com/data5/GC/FG/MY-2320013/cobalt-sulphate.jpg"
                  alt="Cobalt Sulphate Crystals"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white font-bold">Premium Crystals</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={400} className="group">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2023/8/334318366/FK/HP/BQ/1060162/cobalt-sulphate-250x250.jpg"
                  alt="Industrial Grade Powder"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white font-bold">Industrial Grade</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={600} className="group">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2025/3/492489499/WI/FH/GH/139302294/cobalt-sulphate-powder-500x500.png"
                  alt="High Purity Powder"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white font-bold">Battery Grade Powder</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📊 Section 3: Technical Specifications - Comparison View */}
      <section className="py-32 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">Technical <span className="text-wine">Specifications</span></h2>
            <p className="text-gray-500">Comprehensive comparative analysis of available grades.</p>
          </Reveal>

          <Reveal variant="zoomIn">
            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
              <Table>
                <TableHeader className="bg-navy">
                  <TableRow className="hover:bg-navy">
                    <TableHead className="text-white font-bold h-16 px-8">Parameter</TableHead>
                    <TableHead className="text-white font-bold">Virgin Battery</TableHead>
                    <TableHead className="text-white font-bold">Virgin Industrial</TableHead>
                    <TableHead className="text-white font-bold">Recycled (India)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(isExpanded ? specs : specs.slice(0, 6)).map((row, idx) => (
                    <TableRow key={idx} className={idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"}>
                      <TableCell className="font-bold text-navy px-8 py-5">{row.p}</TableCell>
                      <TableCell className="text-gray-600 font-medium">{row.v}</TableCell>
                      <TableCell className="text-gray-600 font-medium">{row.i}</TableCell>
                      <TableCell className="text-wine font-bold">{row.r}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="p-6 flex justify-center border-t border-gray-100 bg-gray-50/30">
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2 text-wine font-black uppercase tracking-widest text-xs hover:gap-3 transition-all"
                >
                  {isExpanded ? (
                    <>Show Less <Icons.ChevronUp /></>
                  ) : (
                    <>Read More <Icons.ChevronDown /></>
                  )}
                </button>
              </div>
              <div className="p-8 bg-navy/5">
                <p className="text-xs text-gray-500 leading-relaxed">
                  * Heavy metals compliance documentation available for agricultural and feed-grade use. COA per lot includes Co %, Fe, Ni, Cu, Mn, Na, Cl⁻, moisture, pH, and appearance verification.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🏢 Section 4: Application Ecosystem - Grid Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">Application <span className="text-wine">Ecosystem</span></h2>
            <p className="text-gray-500">Powering high-growth industries across the globe.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "Battery Materials",
                g: "Virgin Grade Only",
                d: "Critical precursor for LCO, NMC, and NCA cathode manufacturing. Projected global market value of $14.85B by 2036.",
                icon: <Icons.Battery />
              },
              {
                t: "Electroplating",
                g: "Both Grades",
                d: "Provides hard, glossy, and corrosion-resistant coatings for aerospace parts, electronics, and industrial tools.",
                icon: <Icons.Factory />
              },
              {
                t: "Pigments & Ceramics",
                g: "Industrial / Recycled",
                d: "Essential for producing Cobalt Blue and Violet pigments. Used as a desiccant in premium paints and varnishes.",
                icon: <Icons.Leaf />
              },
              {
                t: "Animal Feed",
                g: "Agri / Recycled",
                d: "Added to ruminant feed (cattle/sheep) to support B12 synthesis and prevent deficiency-led growth impairment.",
                icon: <Icons.Globe />
              },
              {
                t: "Industrial Catalysts",
                g: "Industrial Grade",
                d: "Used in petroleum refining (hydrodesulphurisation) and various chemical synthesis processes.",
                icon: <Icons.Shield />
              },
              {
                t: "Soil Amendment",
                g: "Recycled Grade",
                d: "Corrects cobalt-deficient soils to improve legume nitrogen fixation through rhizobium bacteria stimulation.",
                icon: <Icons.Leaf />
              }
            ].map((app, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <div className="group h-full bg-[#f8f9fb] p-10 rounded-[2.5rem] border border-gray-100 hover:border-wine/20 hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-white text-wine rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-wine group-hover:text-white transition-colors">
                    {app.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-wine mb-2 block">{app.g}</span>
                  <h4 className="text-xl font-bold text-navy mb-4">{app.t}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{app.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ♻️ Section 5: The Recycled Advantage - High Impact */}
      <section className="py-32 bg-navy relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-wine/20 rounded-full blur-[150px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft">
              <span className="text-wine font-black uppercase tracking-[0.3em] text-sm mb-6 block">Sustainability First</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">The Recycled Grade <span className="text-wine">Commercial Edge</span></h2>
              <p className="text-gray-400 text-lg font-light mb-10 leading-relaxed">
                Why recycled cobalt sulphate is the preferred choice for cost-conscious, ESG-compliant industrial leaders.
              </p>
              
              <div className="space-y-8">
                {[
                  { t: "30% Cost Efficiency", d: "Recycled material is typically 15–30% cheaper per kg than virgin imported cobalt at equivalent cobalt content." },
                  { t: "75% Lower Emissions", d: "Dramatically lower GHG emissions compared to virgin mining extraction. Ideal for circular economy requirements." },
                  { t: "Geopolitical Stability", d: "Alternative to DRC-concentrated supply chains (70%+ global supply). Politically stable India-origin sourcing." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-wine/20 text-wine rounded-xl flex items-center justify-center shrink-0">
                      <Icons.Shield />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{item.t}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            
            <Reveal variant="zoomIn" className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
                <img 
                  src="https://3.imimg.com/data3/FX/HY/MY-3360450/cobalt-sulphate-500x500.jpg" 
                  alt="Recycled Cobalt Sulphate"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-2xl font-black mb-2">Verified Recycled Content</p>
                  <p className="text-gray-400 text-sm">Meets South Korean and European circular economy mandates for battery material sourcing.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🤝 Section 6: Why buy from us */}
      <section className="py-24 bg-[#fcfaff]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-16">
            <h2 className="text-4xl font-black text-navy uppercase italic tracking-tight">
              Why buy <span className="text-wine">from us</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine rounded-full mt-4"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal variant="fadeLeft" className="h-full">
              <div className="bg-white border border-gray-100 p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all h-full relative group">
                <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 group-hover:scale-110 transition-transform duration-700">
                  <Icons.Shield />
                </div>
                <h3 className="text-2xl font-black text-wine uppercase tracking-[0.2em] mb-10 border-b border-gray-100 pb-4 italic">
                  Quality & consistency
                </h3>
                <ul className="space-y-6">
                  {[
                    "Both virgin and recycled grades from one supplier",
                    "Full COA per lot: Co%, Fe, Ni, Cu, Mn, Na, Cl⁻, moisture, pH",
                    "MSDS format with every consignment",
                    "Battery-grade precision with industrial-grade cost options"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-navy font-medium italic">
                      <span className="text-wine text-xl">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fadeRight" className="h-full">
              <div className="bg-white border border-gray-100 p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all h-full relative group">
                <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 group-hover:scale-110 transition-transform duration-700">
                  <Icons.Factory />
                </div>
                <h3 className="text-2xl font-black text-navy uppercase tracking-[0.2em] mb-10 border-b border-gray-100 pb-4 italic">
                  Supply & commercial
                </h3>
                <ul className="space-y-6">
                  {[
                    "MOQ 25 kg for trial orders — no large commitment",
                    "Competitive pricing — virgin and recycled price options",
                    "Sample with COA dispatched within 3–5 days",
                    "Drum, bag supply options available"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-navy font-medium italic">
                      <span className="text-wine text-xl">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#f8f9fb] rounded-[4rem] p-12 md:p-20 relative overflow-hidden border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-wine via-navy to-wine"></div>
            <div className="max-w-4xl">
              <Reveal variant="fadeUp">
                <h2 className="text-4xl md:text-5xl font-black text-navy mb-8">Foreign Suppliers <span className="text-wine">Welcome</span></h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  We are active importers for the Indian market. We value supplier partnerships built on mutual trust and commercial flexibility, focusing on long-term credit-based arrangements as we grow our volumes.
                </p>
              </Reveal>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <Reveal variant="fadeUp" delay={200}>
                  <h4 className="font-black text-navy uppercase tracking-widest text-sm mb-6 border-l-4 border-wine pl-4">We Look For</h4>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li>• Cobalt content ≥20.0% / Assay ≥98%</li>
                    <li>• Fe ≤20 ppm / Ni ≤50 ppm</li>
                    <li>• COA per lot (SGS/BV preferred)</li>
                    <li>• 25kg PE-lined bags or drums</li>
                  </ul>
                </Reveal>
                <Reveal variant="fadeUp" delay={400}>
                  <h4 className="font-black text-navy uppercase tracking-widest text-sm mb-6 border-l-4 border-wine pl-4">Start a Conversation</h4>
                  <p className="text-gray-600 text-sm mb-4">Please share: Company, Country, Grade, Capacity (MT), FOB Price, and Payment Terms.</p>
                  <a href="mailto:bd@ochnology.com" className="text-wine font-black hover:underline">bd@ochnology.com</a>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚚 Logistics & FAQ Grid */}
      <section className="py-32 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Logistics */}
            <div className="lg:col-span-1">
              <Reveal variant="fadeLeft">
                <h2 className="text-3xl font-black text-navy mb-10">Logistics & <span className="text-wine">Supply</span></h2>
                <div className="space-y-6">
                  {[
                    { l: "Packaging", v: "25kg / 50kg Bags, 200L Drums" },
                    { l: "HS Code", v: "2833.29 (Cobalt Sulphate)" },
                    { l: "Import Ports", v: "JNPT, Mundra, Chennai" },
                    { l: "Import Transit", v: "15–28 Days (China/Finland)" },
                    { l: "Export Transit", v: "10–28 Days (Globally)" },
                    { l: "Ex-Stock Lead", v: "3–7 Business Days" }
                  ].map((item, i) => (
                    <div key={i} className="pb-4 border-b border-gray-200">
                      <span className="text-[10px] font-black uppercase text-gray-400 block mb-1">{item.l}</span>
                      <p className="text-navy font-bold">{item.v}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* FAQ */}
            <div className="lg:col-span-2">
              <Reveal variant="fadeUp">
                <h2 className="text-3xl font-black text-navy mb-10">Common <span className="text-wine">Queries</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { q: "Virgin vs Recycled difference?", a: "Virgin offers highest purity for EV batteries. Recycled is 15-30% cheaper and ideal for industrial use with slightly higher impurities." },
                    { q: "Can recycled be used for batteries?", a: "Only if upgraded to battery-grade purity. Standard recycled material is typically reserved for industrial applications." },
                    { q: "Why important for EV batteries?", a: "It is a key cathode precursor that significantly improves energy density and thermal stability of the battery cell." },
                    { q: "What documentation is provided?", a: "Full COA, MSDS, recycler certifications, and sustainability reports are provided with every consignment." },
                    { q: "What is the MOQ?", a: "25 kg for trial orders. We support both R&D-scale testing and large-scale bulk quarterly contracts." },
                    { q: "Hazard classification?", a: "GHS Category 2 (Suspected carcinogen). PPE is mandatory. We provide comprehensive safety documentation." }
                  ].map((faq, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                      <p className="font-black text-navy mb-3">Q. {faq.q}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 📞 Final CTA */}
      <section className="bg-wine py-24 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-5xl font-black mb-8 tracking-tighter">Secure Your Cobalt <span className="opacity-50">Supply Channel</span></h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto font-light">
              Contact our technical team for custom gradations, spot pricing, and bulk delivery timelines across India and global markets.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-white text-wine px-12 py-5 rounded-2xl font-black hover:bg-navy hover:text-white transition-all shadow-2xl">
                Contact Technical Sales
              </Link>
              <a href="https://wa.me/919258720699" target="_blank" rel="noopener noreferrer" className="bg-navy text-white px-12 py-5 rounded-2xl font-black hover:bg-navy/90 transition-all flex items-center justify-center gap-3">
                WhatsApp Enquiry
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default CobaltSulphate;
