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

// Carbon Raiser Assets
import additiveImg from "../assets/carbon raiser/carbon-raiser-additive-250x250.webp";
import raiserImg from "../assets/carbon raiser/carbon-raisers-c--500x500.webp";
import riserJpg from "../assets/carbon raiser/carbon-riser.jpg";
import foundryImg from "../assets/carbon raiser/foundry-carbon-riser-500x500.webp";

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
  Truck: () => (
    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
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

// ── FAQ Item ──────────────────────────────────────────────────────────────────
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-6 text-left group">
        <span className="font-black text-navy text-base md:text-lg uppercase tracking-tight group-hover:text-wine transition-colors">{q}</span>
        <span className={`w-8 h-8 flex items-center justify-center rounded-full border-2 border-navy text-navy font-black transition-all shrink-0 ml-4 ${open ? "bg-wine border-wine text-white rotate-45" : ""}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-6" : "max-h-0"}`}>
        <p className="text-gray-600 font-medium leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const Gpc = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full min-h-screen lg:h-[85vh] flex items-center justify-center overflow-hidden bg-navy py-24 lg:py-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 mix-blend-multiply"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wine opacity-30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-black opacity-40 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-6 py-2 bg-wine text-white rounded-md text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-2xl shadow-wine/50">
              Premium Carbon Raiser
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter italic leading-[0.9]">
              GPC — <span className="text-wine block md:inline">Graphitized Coke</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed mb-4 md:mb-12 italic">
              Premium Carbon Raiser for Steel, Ductile Iron &amp; Special Alloys. Imported from China.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-6 md:mb-16">
              {[
                { val: "99.7%", label: "Max Fixed Carbon" },
                { val: "≤0.05%", label: "Max Sulphur" },
                { val: "90–95%", label: "Absorption Rate" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-white font-black text-4xl md:text-5xl">{s.val}</span>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 mt-6 md:mt-0">
                <Link to="/rfq" className="w-full sm:w-auto bg-wine text-white px-8 sm:px-10 py-4 text-xs sm:text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-xl text-center">
                    Get a Quote
                </Link>
                <Link to="/contact" className="w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 py-[14px] text-xs sm:text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all text-center">
                    Request Sample COA
                </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-white/5 border-t border-white/10 py-4 hidden lg:block">
            <div className="max-w-7xl mx-auto px-6 flex justify-between text-white/50 text-[10px] font-black uppercase tracking-widest">
                <span>ISO 9001</span>
                <span>SGS inspection available</span>
                <span>COA per lot</span>
                <span>REACH compliance</span>
                <span>Ex-stock India</span>
            </div>
        </div>
      </section>

      {/* 🧭 Sub Navigation Menu */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-start md:justify-center gap-8 md:gap-16 whitespace-nowrap min-w-max md:min-w-0 mx-auto">
            <span className="py-5 px-2 text-xs md:text-sm font-black uppercase tracking-widest text-navy border-b-4 border-wine transition-all">
              GPC (Premium)
            </span>
            <Link to="/electrode-scrap" className="py-5 px-2 text-xs md:text-sm font-black uppercase tracking-widest text-gray-400 border-b-4 border-transparent hover:border-navy hover:text-navy transition-all">
              Electrode Scrap
            </Link>
            <Link to="/anthracite" className="py-5 px-2 text-xs md:text-sm font-black uppercase tracking-widest text-gray-400 border-b-4 border-transparent hover:border-navy hover:text-navy transition-all">
              Anthracite Coal
            </Link>
          </div>
        </div>
      </div>



      {/* 📖 Introduction Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-32 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft" className="order-2 lg:order-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-black text-navy mb-6 uppercase tracking-tight italic">
                    What is <span className="text-wine">GPC?</span>
                  </h2>
                  <div className="w-24 h-2 bg-navy rounded-full"></div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Graphitized Petroleum Coke (GPC) is made from high-quality petroleum coke heated at 2,500–3,500°C in a graphitization furnace. This extreme heat restructures the carbon atoms into an ordered graphite crystal lattice — permanently transforming the material.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  The result: ultra-high purity carbon with a graphite structure. Most impurities — sulphur, nitrogen, metal oxides — are vaporized during the process. What remains is the cleanest, most efficient carbon raiser available for steelmaking and foundry use.
                </p>
                <div className="bg-navy p-10 rounded-none border-l-8 border-wine shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-wine/10 -translate-y-16 translate-x-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  <p className="text-white font-black text-xl italic leading-snug relative z-10">
                    "Fast carbon pickup, ultra-low sulphur and nitrogen, minimal ash and slag formation — consistent heat after heat."
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeRight" delay={300} className="order-1 lg:order-2">
              <div className="bg-gray-50 p-12 border-l-8 border-wine shadow-xl">
                 <h3 className="text-2xl font-black text-navy uppercase italic mb-6">Key Advantage</h3>
                 <p className="text-gray-700 font-medium mb-6">
                    Permanently restructured carbon lattice at 3500°C ensures superior absorption and thermodynamic stability in the melt.
                 </p>
                 <ul className="space-y-4">
                    {[
                        "Graphitized crystal structure",
                        "Ultra-low N (30-300 ppm)",
                        "High Absorption (90-95%)",
                        "Consistent COA per lot"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 font-bold text-navy uppercase text-xs tracking-wider">
                            <Icons.Zap /> {item}
                        </li>
                    ))}
                 </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Visual Showcase ───────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h3 className="text-3xl font-black text-navy uppercase italic mb-4">Product <span className="text-wine">Gallery</span></h3>
            <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-[10px]">Graphitized Petroleum Coke & Additives</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: raiserImg, title: "Graphitized Coke", desc: "Premium 99.5% Fixed Carbon" },
              { img: foundryImg, title: "Foundry Carbon", desc: "Ideal for ductile iron melts" },
              { img: riserJpg, title: "Carbon Riser", desc: "High absorption coke granules" },
              { img: additiveImg, title: "Carbon Additive", desc: "Fine mesh carbon enhancer" }
            ].map((item, i) => (
              <Reveal key={i} variant="fadeUp" delay={i * 100}>
                <div className="group relative overflow-hidden bg-white shadow-lg rounded-xl">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 border-t border-gray-100">
                    <h5 className="font-black text-navy uppercase text-sm mb-1 tracking-wider">{item.title}</h5>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 Full Specifications */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full border-[50px] border-white/5 -rotate-12 scale-150"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic">
              Full <span className="text-wine">Specifications</span>
            </h2>
            <div className="w-32 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <Reveal variant="fadeUp" delay={200}>
            <div className="overflow-x-auto border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                <Table>
                    <TableHeader>
                        <TableRow className="border-b border-white/10 hover:bg-transparent">
                            <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4">Parameter</TableHead>
                            <TableHead className="text-wine text-[10px] uppercase tracking-widest font-black py-4">Premium GPC</TableHead>
                            <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4">Standard GPC</TableHead>
                            <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4 text-white">Economy GPC</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[
                            { param: "Fixed Carbon (F.C.) % min", pre: "99.5%", std: "98.5%", eco: "98.0%" },
                            { param: "Sulphur (S) % max", pre: "0.03%", std: "0.05%", eco: "0.10%" },
                            { param: "Nitrogen (N) % max", pre: "0.010%", std: "0.030%", eco: "0.050%" },
                            { param: "Ash % max", pre: "0.3%", std: "0.7%", eco: "1.0%" },
                            { param: "Volatile Matter (VM) % max", pre: "0.3%", std: "0.8%", eco: "1.0%" },
                            { param: "Moisture % max", pre: "0.3%", std: "0.5%", eco: "0.5%" },
                            { param: "Graphitization degree", pre: "≥98%", std: "≥95%", eco: "≥90%" },
                            { param: "Absorption rate", pre: "93–95%", std: "90–93%", eco: "88–90%" },
                            { param: "Bulk density", pre: "0.78–0.85 g/cc", std: "0.75–0.82 g/cc", eco: "0.72–0.80 g/cc" },
                            { param: "Primary use", pre: "Ductile iron, special steel", std: "EAF/IF steelmaking, grey iron", eco: "Cost-sensitive EAF" },
                        ].map((row, i) => (
                            <TableRow key={i} className="border-b border-white/5 hover:bg-white/10 transition-colors">
                                <TableCell className="font-bold text-white/80 py-4 text-xs">{row.param}</TableCell>
                                <TableCell className="text-wine font-bold py-4 text-sm">{row.pre}</TableCell>
                                <TableCell className="text-white/70 py-4 text-sm">{row.std}</TableCell>
                                <TableCell className="text-white font-bold py-4 text-sm">{row.eco}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="mt-8">
                <p className="text-[10px] text-white/40 uppercase font-black tracking-widest italic text-center">Note: 1–5mm is the most widely used size — balances fast dissolution with easy handling and minimal fines dust.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ⚖️ Preferred Recarburizer Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tighter italic">
                Why GPC is the <span className="text-wine">Preferred Choice</span>
                </h2>
                <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { t: "Ultra-low Sulphur", d: "0.02–0.05% S reduces adverse effect on spheroidization in ductile iron and prevents hot shortness in steel." },
                    { t: "Ultra-low Nitrogen", d: "30–300 ppm N prevents sub-surface porosity and strain ageing — no other carbon raiser matches GPC here." },
                    { t: "High Absorption", d: "90–95% rate — graphite structure dissolves rapidly. Less material per heat, more predictable pickup." },
                    { t: "Improved Nucleation", d: "Graphite nuclei promote nodule formation in ductile iron and improve distribution in grey iron." },
                    { t: "Reduces Pig Iron", d: "Higher carbon recovery from scrap allows increased scrap usage, reducing expensive pig iron in the charge." },
                    { t: "Extends Lining Life", d: "Clean dissolution with no slag protects furnace and ladle linings, reducing maintenance costs." }
                ].map((item, i) => (
                    <Reveal key={i} variant="fadeUp" delay={100 * i}>
                        <div className="bg-white p-10 h-full shadow-xl border-t-4 border-navy hover:border-wine transition-all">
                            <h4 className="text-xl font-black text-navy uppercase italic mb-4">{item.t}</h4>
                            <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.d}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

      {/* 🏭 Applications Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tighter italic">
              Critical <span className="text-wine">Applications</span>
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ductile Iron Foundries",
                desc: "The standard choice — S below 0.05% and N below 300 ppm essential for successful Magnesium treatment."
              },
              {
                title: "Special Steel Grades",
                desc: "Stainless, bearing, tool, and spring steel require strict S/N control that only premium GPC provides."
              },
              {
                title: "EAF Steelmaking",
                desc: "Precise carbon trim additions after refining — hit target %C without increasing impurity levels."
              },
              {
                title: "Induction Furnace",
                desc: "Preferred for consistent heat-to-heat chemistry and low slag formation during melting."
              },
              {
                title: "Grey Iron Foundries",
                desc: "Stabilises carbon equivalent (CE), improves morphology, machinability, and casting surface finish."
              },
              {
                title: "Precision Casting",
                desc: "Consistent carbon control in high-value aerospace and automotive investment castings."
              }
            ].map((app, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={100 * idx}>
                <div className="bg-gray-50 p-8 h-full border hover:border-wine transition-all group">
                  <div className="w-10 h-1 bg-navy mb-6 group-hover:bg-wine transition-colors"></div>
                  <h4 className="text-xl font-black text-navy uppercase italic mb-4">{app.title}</h4>
                  <p className="text-gray-500 font-medium">{app.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🏆 Buyer Advantages */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeLeft">
                <h2 className="text-5xl font-black text-navy uppercase italic mb-8 leading-none">
                    Buyer <span className="text-wine">Advantages</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h4 className="font-black text-navy uppercase text-sm tracking-widest">Quality & Consistency</h4>
                        <ul className="text-xs space-y-2 text-gray-600 font-bold uppercase">
                            <li>• Fixed Plant Source in China</li>
                            <li>• Graphitization Degree Verified</li>
                            <li>• Full COA Per Lot</li>
                            <li>• SGS/Intertek Inspection</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-black text-wine uppercase text-sm tracking-widest">Supply & Commercial</h4>
                        <ul className="text-xs space-y-2 text-gray-600 font-bold uppercase">
                            <li>• All 3 Grades Available</li>
                            <li>• Ex-stock Indian Ports</li>
                            <li>• LCL trial from 500kg</li>
                            <li>• Competitive CIF/DAP Pricing</li>
                        </ul>
                    </div>
                </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={300}>
                <div className="bg-navy p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-wine -translate-y-12 translate-x-12 rotate-45"></div>
                    <h3 className="text-3xl font-black uppercase italic mb-6">Logistics Overview</h3>
                    <ul className="text-white/70 font-medium space-y-3 text-sm">
                        <li>• Packaging: 25/50kg or 1MT Jumbo Bags</li>
                        <li>• One 20-ft FCL: approx 22–23 MT</li>
                        <li>• Ports: JNPT / Nhava Sheva, Mundra</li>
                        <li>• Transit from China: 15–20 days sea</li>
                    </ul>
                    <div className="flex items-center gap-4 mt-8">
                        <Icons.Truck />
                        <span className="font-black uppercase tracking-widest text-wine text-sm">Ex-Stock: 3–7 Days Delivery</span>
                    </div>
                </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🤝 Supplier Intent */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <Reveal variant="fadeUp">
                <h2 className="text-4xl md:text-5xl font-black text-navy uppercase italic mb-8 leading-tight">
                    GPC Producers & <span className="text-wine">Export Partners</span>
                </h2>
                <p className="text-gray-600 text-lg font-medium leading-relaxed mb-12">
                    We are regular monthly importers with an active Indian buyer network. We offer D/P or open account terms to qualified suppliers. Flexible payment terms are essential for building volume in the Indian market.
                </p>
                <div className="bg-navy p-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div>
                        <h4 className="text-wine font-black uppercase text-sm tracking-widest mb-4">Quality Requirements</h4>
                        <ul className="text-white/60 text-xs space-y-2 font-medium">
                            <li>• F.C. ≥98.5% (SGS/BV COA)</li>
                            <li>• S ≤0.05% · N ≤0.03%</li>
                            <li>• Graphitization ≥95%</li>
                            <li>• Size: 1–5mm (≥90% in range)</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-black uppercase text-sm tracking-widest mb-4">Send Us</h4>
                        <ul className="text-white/60 text-xs space-y-2 font-medium">
                            <li>• Company Profile & Location</li>
                            <li>• Monthly Supply Capacity</li>
                            <li>• Detailed F.C./S/N Analysis</li>
                            <li>• Current FOB Price Offer</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12">
                    <Link to="/contact" className="inline-block bg-wine text-white px-12 py-5 text-sm font-black uppercase tracking-widest hover:bg-navy transition-all shadow-xl">
                        Offer Your Supply
                    </Link>
                </div>
            </Reveal>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-24 bg-[#fcfdfe]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter italic mb-4">
              Frequently Asked <span className="text-wine">Questions</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full" />
          </Reveal>
          <Reveal variant="fadeUp" delay={200}>
            <div className="divide-y divide-gray-100">
              <FAQItem 
                q="Q1. What makes GPC different from calcined petroleum coke (CPC)?" 
                a="GPC is graphitized at 2,500–3,500°C restructuring carbon into an ordered graphite lattice — giving S as low as 0.02–0.05% and absorption 90–95% vs CPC's 0.3–0.5% S and 80–90% absorption. GPC delivers better total value through higher recovery and cleaner melts." 
              />
              <FAQItem 
                q="Q2. What particle size of GPC should I use for my induction furnace?" 
                a="1–5mm is standard for induction furnaces — fast dissolution without dust loss. For ladle trim additions, 0.2–1mm gives faster dissolution; avoid sizes above 8mm in IF as they dissolve too slowly before tapping." 
              />
              <FAQItem 
                q="Q3. My ductile iron castings have porosity — can GPC help?" 
                a="Porosity in ductile iron is often caused by excess nitrogen. Switching to premium GPC (N ≤0.010%) is frequently the fastest fix. GPC also improves nodule count through its graphite crystal nucleation effect." 
              />
              <FAQItem 
                q="Q4. What is absorption rate and why does it matter commercially?" 
                a="Absorption rate is the percentage of added carbon that actually reaches the melt. GPC's 90–95% vs anthracite's 75–85% means less material per heat. Always calculate cost per unit of carbon delivered, not cost per tonne purchased." 
              />
              <FAQItem 
                q="Q5. Can I get a sample and COA before placing a bulk order?" 
                a="Yes — we dispatch 500g–1kg samples with full COA (F.C., S, N, Ash, VM, Moisture, size analysis) within 3–5 days for industrial testing." 
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🏁 Call to Action */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-wine/20 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-20 relative z-10 text-white">
          <Reveal variant="fadeLeft" className="text-center lg:text-left max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
              Get A <span className="text-wine block md:inline">Quote</span>
            </h2>
            <p className="text-white/40 font-black uppercase tracking-[0.2em] text-xs mb-10 italic">
                Premium Carbon • ISO Certified • Ex-Stock India
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <Link to="/rfq" className="bg-wine text-white px-12 py-6 text-sm font-black hover:bg-white hover:text-navy transition-all shadow-2xl flex items-center gap-4 group">
                <Icons.Truck />
                <span className="uppercase tracking-widest">RFQ Dashboard</span>
              </Link>
              <a href="https://wa.me/919258720699" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-12 py-[22px] text-sm font-black hover:bg-white hover:text-navy transition-all uppercase tracking-widest">
                Whatsapp Direct
              </a>
            </div>
          </Reveal>
          <Reveal variant="fadeRight" className="lg:w-2/5 bg-white p-16 text-navy shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative group overflow-hidden">
            <h4 className="text-2xl font-black uppercase mb-10 italic tracking-widest text-wine underline decoration-4 underline-offset-8">
              Related Products
            </h4>
            <div className="space-y-6">
                <Link to="/anthracite" className="block p-4 border-l-4 border-navy hover:border-wine bg-gray-50 transition-all group">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-wine">Economy Grade</span>
                    <h5 className="font-black uppercase text-lg italic">Anthracite Coal</h5>
                </Link>
                <Link to="/electrode-scrap" className="block p-4 border-l-4 border-navy hover:border-wine bg-gray-50 transition-all group">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-wine">Mid-Range Grade</span>
                    <h5 className="font-black uppercase text-lg italic">Electrode Scrap</h5>
                </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Gpc;
