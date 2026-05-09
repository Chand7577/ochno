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

const CarbonRaiser = () => {
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
              Steelmaking &amp; Foundry Additives
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter italic leading-[0.9]">
              Carbon <span className="text-wine block md:inline">Raisers</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed mb-4 md:mb-12 italic">
              Premium, Mid-Range, and Economy Carbon Additives for Steel, Ductile Iron &amp; Special Alloys. Imported from China.
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
            <Link to="/gpc" className="py-5 px-2 text-xs md:text-sm font-black uppercase tracking-widest text-gray-400 border-b-4 border-transparent hover:border-navy hover:text-navy transition-all">
              GPC (Premium)
            </Link>
            <Link to="/electrode-scrap" className="py-5 px-2 text-xs md:text-sm font-black uppercase tracking-widest text-gray-400 border-b-4 border-transparent hover:border-navy hover:text-navy transition-all">
              Electrode Scrap
            </Link>
            <Link to="/anthracite" className="py-5 px-2 text-xs md:text-sm font-black uppercase tracking-widest text-gray-400 border-b-4 border-transparent hover:border-navy hover:text-navy transition-all">
              Anthracite Coal
            </Link>
          </div>
        </div>
      </div>


      {/* 📖 Portfolio Overview */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tighter italic">
              Our Carbon Raiser <span className="text-wine">Portfolio</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 font-medium text-lg">Choose the right grade for your specific metallurgical requirements.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal variant="fadeUp" delay={100} className="h-full">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col h-full border-t-4 border-wine">
                <span className="text-wine font-black text-xs uppercase tracking-widest mb-2">Premium Grade</span>
                <h3 className="text-2xl font-black text-navy uppercase italic mb-4">GPC</h3>
                <p className="text-gray-600 font-medium text-sm mb-6 flex-grow">Graphitized Petroleum Coke. The ultimate carbon raiser with ultra-low sulphur and nitrogen. Ideal for premium ductile iron and special alloys.</p>
                <div className="bg-gray-50 p-4 rounded-xl mb-6">
                   <div className="flex justify-between text-xs font-bold text-navy mb-2"><span className="uppercase text-gray-500">F.C.</span> <span>≥98–99.5%</span></div>
                   <div className="flex justify-between text-xs font-bold text-navy mb-2"><span className="uppercase text-gray-500">Sulphur</span> <span>≤0.03–0.05%</span></div>
                   <div className="flex justify-between text-xs font-bold text-navy"><span className="uppercase text-gray-500">Nitrogen</span> <span>≤0.03%</span></div>
                </div>
                <Link to="/gpc" className="block text-center bg-wine text-white py-3 rounded-lg font-black uppercase text-xs tracking-widest hover:bg-navy transition-colors mt-auto">View GPC Details →</Link>
              </div>
            </Reveal>
            <Reveal variant="fadeUp" delay={200} className="h-full">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col h-full border-t-4 border-navy">
                <span className="text-navy font-black text-xs uppercase tracking-widest mb-2">Mid-Range Grade</span>
                <h3 className="text-2xl font-black text-navy uppercase italic mb-4">Electrode Scrap</h3>
                <p className="text-gray-600 font-medium text-sm mb-6 flex-grow">Graphite electrode offcuts and debris. Highly graphitized, offering near-GPC quality at a 20–35% cost reduction. Great for general EAF.</p>
                <div className="bg-gray-50 p-4 rounded-xl mb-6">
                   <div className="flex justify-between text-xs font-bold text-navy mb-2"><span className="uppercase text-gray-500">F.C.</span> <span>≥98.0%</span></div>
                   <div className="flex justify-between text-xs font-bold text-navy mb-2"><span className="uppercase text-gray-500">Sulphur</span> <span>≤0.05–0.08%</span></div>
                   <div className="flex justify-between text-xs font-bold text-navy"><span className="uppercase text-gray-500">Nitrogen</span> <span>≤0.05%</span></div>
                </div>
                <Link to="/electrode-scrap" className="block text-center bg-navy text-white py-3 rounded-lg font-black uppercase text-xs tracking-widest hover:bg-wine transition-colors mt-auto">View Electrode Scrap →</Link>
              </div>
            </Reveal>
            <Reveal variant="fadeUp" delay={300} className="h-full">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col h-full border-t-4 border-gray-400">
                <span className="text-gray-500 font-black text-xs uppercase tracking-widest mb-2">Economy Grade</span>
                <h3 className="text-2xl font-black text-navy uppercase italic mb-4">Anthracite Coal</h3>
                <p className="text-gray-600 font-medium text-sm mb-6 flex-grow">Calcined / Electrically Calcined Anthracite. The cost-effective workhorse for basic steelmaking and grey iron foundries.</p>
                <div className="bg-gray-50 p-4 rounded-xl mb-6">
                   <div className="flex justify-between text-xs font-bold text-navy mb-2"><span className="uppercase text-gray-500">F.C.</span> <span>90–95%</span></div>
                   <div className="flex justify-between text-xs font-bold text-navy mb-2"><span className="uppercase text-gray-500">Sulphur</span> <span>0.2–0.3%</span></div>
                   <div className="flex justify-between text-xs font-bold text-navy"><span className="uppercase text-gray-500">Nitrogen</span> <span>0.5% (approx)</span></div>
                </div>
                <Link to="/anthracite" className="block text-center bg-gray-200 text-navy py-3 rounded-lg font-black uppercase text-xs tracking-widest hover:bg-gray-300 transition-colors mt-auto">View Anthracite Coal →</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CarbonRaiser;
