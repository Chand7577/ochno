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

import techUrea from "../assets/urea/techical grade urea.jpeg";
import adblueUrea from "../assets/urea/WhatsApp Image 2026-05-02 at 2.08.20 PM.jpeg";
import ureaVid1 from "../assets/urea/WhatsApp Video 2026-05-02 at 2.08.19 PM.mp4";
import ureaVid2 from "../assets/urea/WhatsApp Video 2026-05-02 at 2.08.20 PM.mp4";
import ureaVid3 from "../assets/urea/WhatsApp Video 2026-05-02 at 2.08.20 PM (1).mp4";

// ── Icons ──────────────────────────────────────────────────────────────────
const Icons = {
  Check: () => (
    <svg
      className="w-5 h-5 text-wine"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Alert: () => (
    <svg
      className="w-6 h-6 text-wine"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  ),
  Globe: () => (
    <svg
      className="w-6 h-6 text-wine"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014.5 9 15.3 15.3 0 01-4.5 9 15.3 15.3 0 01-4.5-9 15.3 15.3 0 014.5-9z"
      />
    </svg>
  ),
  Truck: () => (
    <svg
      className="w-6 h-6 text-navy"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
      />
    </svg>
  ),
  Chevron: ({ className = "w-4 h-4" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  ),
};

// ── Reveal Component ─────────────────────────────────────────────────────────
const VARIANTS = {
  fadeUp: {
    h: "opacity-0 translate-y-12 blur-sm",
    v: "opacity-100 translate-y-0 blur-none",
  },
  fadeLeft: {
    h: "opacity-0 -translate-x-12 blur-sm",
    v: "opacity-100 translate-x-0 blur-none",
  },
  fadeRight: {
    h: "opacity-0 translate-x-12 blur-sm",
    v: "opacity-100 translate-x-0 blur-none",
  },
  zoomIn: {
    h: "opacity-0 scale-95 blur-sm",
    v: "opacity-100 scale-100 blur-none",
  },
};

const Reveal = ({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = "",
}) => {
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
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out ${visible ? v : h} ${className}`}
    >
      {children}
    </div>
  );
};

const Urea = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "What is technical grade urea?",
      a: "Industrial urea without neem coating, used for chemicals and manufacturing. Not the same as subsidised fertiliser urea in India.",
    },
    {
      q: "Can private companies import urea in India?",
      a: "Yes. Technical and AdBlue grade urea can be freely imported and sold to industrial buyers. Fertiliser urea is government-controlled.",
    },
    {
      q: "Why can’t fertiliser urea be used for AdBlue?",
      a: "It contains higher biuret and impurities. AdBlue requires ISO 22241 compliant urea (biuret ≤0.3%).",
    },
    {
      q: "Difference between technical and AdBlue grade?",
      a: "Technical grade → industrial use. AdBlue grade → stricter purity for DEF (automotive use).",
    },
    {
      q: "MOQ and samples?",
      a: "MOQ: 2 MT. Samples: 3–7 days with COA.",
    },
    {
      q: "What type of suppliers do we work with?",
      a: "We work with producers and export-ready suppliers who can support regular monthly volume supply on credit-based flexible terms (DA/OA). We value long-term stability over one-time spot shipments.",
    },
    {
      q: "What are your standard payment terms?",
      a: "Standard terms include RTGS against loading for domestic buyers, or flexible terms for established long-term relations. For exporters, we prefer DA/OA terms to build mutual trust.",
    },
    {
      q: "Can new suppliers collaborate with us?",
      a: "Yes. We welcome new suppliers looking to enter the Indian market with consistent quality and competitive pricing.",
    },
    {
      q: "What information should suppliers share?",
      a: "Please provide your Company Name, Country, Product Grade, Monthly Capacity, FOB Price, and Contact Details.",
    },
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* 🚀 Hero Section — redesigned */}
      <section className="relative w-full min-h-screen flex flex-col bg-navy overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_70%_50%,_rgba(110,0,40,0.18)_0%,_transparent_60%)]"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-[radial-gradient(ellipse_at_30%_80%,_rgba(0,45,82,0.6)_0%,_transparent_70%)]"></div>
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "60px 60px" }}>
          </div>
        </div>

        {/* Main content grid */}
        <div className="relative z-10 flex-1 max-w-[1400px] mx-auto w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center pt-28 pb-8 lg:pt-32 lg:pb-16">

          {/* Left — Text Content */}
          <div className="flex flex-col justify-center pr-0 lg:pr-16">
            <Reveal variant="fadeLeft" delay={100}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-wine"></div>
                <span className="text-wine text-[9px] font-black tracking-[0.5em] uppercase">Industrial Urea Supply</span>
              </div>
            </Reveal>

            <Reveal variant="fadeLeft" delay={250}>
              <h1 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.88] mb-6">
                Technical<br />
                <span className="text-wine italic">&amp; AdBlue</span><br />
                Grade Urea
              </h1>
            </Reveal>

            <Reveal variant="fadeLeft" delay={400}>
              <div className="space-y-4 mb-10">
                <p className="text-white/60 font-medium text-base lg:text-lg leading-relaxed max-w-xl italic">
                  High Purity Industrial Urea — Imported from China, Oman, Russia & Middle East. Supplied to Indian Resin manufacturers, AdBlue blenders & Chemical plants.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] text-white/40 font-black uppercase tracking-widest">
                  <span>ISO 22241 Compliant</span>
                  <span className="text-wine">•</span>
                  <span>BIS IS 2660 Compliant</span>
                  <span className="text-wine">•</span>
                  <span>Prilled & Granular</span>
                  <span className="text-wine">•</span>
                  <span>50kg & Bulk</span>
                </div>
              </div>
            </Reveal>

            {/* Stat chips */}
            <Reveal variant="fadeLeft" delay={550}>
              <div className="flex flex-wrap gap-3 mb-12">
                {[
                  { val: "≥99%", lbl: "Urea Content" },
                  { val: "≥46%", lbl: "Nitrogen" },
                  { val: "≤0.3%", lbl: "Biuret (AdBlue)" },
                  { val: "2 MT", lbl: "Min Order" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-center px-5 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-wine/50 hover:bg-white/10 transition-all duration-300">
                    <span className="text-white font-black text-xl">{s.val}</span>
                    <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest mt-0.5">{s.lbl}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal variant="fadeLeft" delay={700}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/rfq"
                  className="h-14 px-10 bg-wine text-white text-[11px] font-black hover:bg-white hover:text-navy transition-all shadow-lg shadow-wine/30 uppercase tracking-[0.2em] flex items-center justify-center gap-3 border-2 border-wine"
                >
                  <Icons.Truck />
                  <span>Enquire for Supply</span>
                </Link>
                <Link
                  to="/contact"
                  className="h-14 px-10 border-2 border-white/20 text-white text-[11px] font-black hover:border-white hover:bg-white/10 transition-all uppercase tracking-[0.2em] flex items-center justify-center"
                >
                  Offer Your Supply
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right — Product Image Stack */}
          <Reveal variant="fadeRight" delay={400} className="relative hidden lg:flex items-center justify-center">
            {/* Back card */}
            <div className="absolute top-4 right-0 w-[85%] aspect-[4/5] bg-wine/10 border border-wine/20 rounded-3xl rotate-3"></div>
            {/* Main image */}
            <div className="relative w-[85%] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
              <img
                src={techUrea}
                alt="Technical Grade Urea — High Purity Prills"
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
              {/* Image label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="w-8 h-[3px] bg-wine mb-2"></div>
                  <p className="text-white font-black text-xs uppercase tracking-widest">Technical Grade</p>
                  <p className="text-white/50 text-[10px] font-bold uppercase">High Purity Prills / Granules</p>
                </div>
                <div className="w-12 h-12 bg-wine/20 border border-wine/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-wine font-black text-xs">BIS</span>
                </div>
              </div>
            </div>
            {/* Floating AdBlue badge */}
            <div className="absolute -bottom-4 -left-6 bg-navy border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-4 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                <img src={adblueUrea} alt="AdBlue Grade" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-wine font-black text-[10px] uppercase tracking-widest">AdBlue Grade</p>
                <p className="text-white/60 text-[10px] font-bold">ISO 22241 Compliant</p>
                <p className="text-white font-black text-xs">Biuret ≤ 0.3%</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Trust strip */}
        <div className="relative z-10 w-full bg-white/5 border-t border-white/10 py-4 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-wrap justify-between gap-4 text-white/50 text-[10px] font-black uppercase tracking-widest">
            <span>COA with every lot</span>
            <span>ISO 22241 Compliant</span>
            <span>BIS IS 2660 Compliant</span>
            <span>MSDS Available</span>
            <span>GST 12% Applicable</span>
          </div>
        </div>
      </section>

      {/* 📖 The India Context Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-32 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft">
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-black text-navy mb-6 uppercase tracking-tight italic">
                    Three Types of Urea, <span className="text-wine">Three Different Rules</span>
                  </h2>
                  <div className="w-24 h-2 bg-navy rounded-full"></div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  In India, urea is not just one product — it is three legally distinct products with different import rules, tax rates, and end-use regulations. Understanding this distinction is critical for compliance.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 p-6 bg-gray-50 border-l-4 border-navy">
                    <div className="font-black text-2xl text-navy/20">01</div>
                    <div>
                      <h4 className="font-black text-navy uppercase mb-1">Agricultural Urea</h4>
                      <p className="text-sm text-gray-500 italic mb-2">Controlled price: ₹242 per 45kg bag.</p>
                      <p className="text-xs text-gray-400">Subsidised, government-canalised import only via STEs (MMTC, STC, RCF). Private traders are legally restricted from importing or selling this.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 border-l-4 border-wine shadow-lg shadow-wine/5">
                    <div className="font-black text-2xl text-wine/40">02</div>
                    <div>
                      <h4 className="font-black text-wine uppercase mb-1">Technical Grade Urea</h4>
                      <p className="text-sm text-gray-500 font-bold mb-2">No neem coating, no subsidy. GST is 12%.</p>
                      <p className="text-xs text-gray-400">Standard term in India for industrial-grade urea used in chemicals, resins, and adhesives. Private trade is fully permitted.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 border-l-4 border-navy">
                    <div className="font-black text-2xl text-navy/20">03</div>
                    <div>
                      <h4 className="font-black text-navy uppercase mb-1">AdBlue Grade Urea</h4>
                      <p className="text-sm text-gray-500 italic mb-2">Also called Automotive or DEF Grade.</p>
                      <p className="text-xs text-gray-400">A sub-category of technical grade with tighter purity (Biuret ≤0.3%) for Diesel Exhaust Fluid blending. Free private trade allowed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeRight" delay={300}>
              <div className="bg-navy p-12 rounded-3xl shadow-2xl relative overflow-hidden text-white">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-wine/20 rounded-full blur-3xl"></div>
                <h3 className="text-3xl font-black uppercase italic mb-8 border-b border-white/10 pb-4">
                  The Neem <span className="text-wine">Coating Factor</span>
                </h3>
                <p className="text-white/80 font-medium leading-relaxed mb-8">
                  Fertiliser grade urea in India is mandatorily coated with neem oil (min 0.035%) to prevent diversion to industrial use.
                </p>
                <div className="bg-white/5 p-8 border border-white/10 space-y-4">
                  <p className="text-sm italic">"Neem coating makes fertiliser urea completely unsuitable for industrial processes — it contaminates resins, damages AdBlue SCR systems, and interferes with chemical reactions."</p>
                  <p className="text-wine font-black text-xs uppercase tracking-widest">Technical Grade = No Neem Coating</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📊 Grade Specifications */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic text-center">
              Full <span className="text-wine">Specifications</span>
            </h2>
            <div className="w-32 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <Reveal variant="fadeUp" delay={200}>
            <div className="overflow-x-auto border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-white/10 hover:bg-transparent">
                    <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-6">Parameter</TableHead>
                    <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-6">Technical Grade Urea</TableHead>
                    <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-6 text-wine">AdBlue Grade (ISO 22241)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { p: "Urea content % min", t: "99.0%", a: "99.5%" },
                    { p: "Nitrogen (N) % min", t: "46.0%", a: "46.0%" },
                    { p: "Biuret % max", t: "1.0%", a: "0.3%" },
                    { p: "Moisture % max", t: "0.5%", a: "0.2%" },
                    { p: "Aldehyde (as HCHO)", t: "—", a: "≤5 mg/kg" },
                    { p: "Free Ammonia (as NH₃)", t: "≤150 ppm", a: "≤2 mg/kg" },
                    { p: "Heavy metals (Fe, Cu, Cr, Zn)", t: "—", a: "≤0.2 mg/kg each" },
                    { p: "Neem coating", t: "None", a: "None" },
                    { p: "Form", t: "Prilled or granular", a: "Prilled preferred" },
                    { p: "Standard", t: "BIS IS 2660", a: "ISO 22241 / DIN 70070" },
                    { p: "GST rate", t: "12%", a: "12%" },
                    { p: "Primary use", t: "Resins, adhesives, feed, pharma, dyes", a: "AdBlue/DEF blending for BS-VI vehicles" },
                  ].map((row, i) => (
                    <TableRow key={i} className="border-b border-white/5 hover:bg-white/10 transition-colors">
                      <TableCell className="font-bold text-white/80 py-6 text-xs">{row.p}</TableCell>
                      <TableCell className="text-white/70 py-6 text-sm">{row.t}</TableCell>
                      <TableCell className="text-wine font-black py-6 text-sm">{row.a}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-8 bg-white/5 p-6 border-l-4 border-wine">
              <p className="text-xs text-white/60 font-medium leading-relaxed">
                <span className="text-wine font-black uppercase mr-2">Key note on AdBlue:</span> 
                DEF is a precise mixture of 32.5% urea and 67.5% deionised water. Heavy metals limits in ISO 22241 are extremely strict — even trace levels of copper, iron or chromium can destroy an SCR catalyst.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🏭 Applications Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tighter italic">
              Industrial <span className="text-wine">Applications</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Serving the fastest-growing manufacturing segments in India</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal variant="fadeLeft">
              <h3 className="text-2xl font-black text-navy uppercase italic mb-8 flex items-center gap-3">
                <div className="w-10 h-1 bg-navy"></div> Technical Grade
              </h3>
              <div className="mb-8 overflow-hidden rounded-2xl shadow-xl aspect-video relative group">
                <img 
                  src={techUrea} 
                  alt="Technical Grade Urea" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { t: "UF & MUF Resin Manufacturing", d: "Largest industrial segment; UF/MUF resins used in plywood, MDF, particleboard, and laminates. India has 500+ manufacturers where urea is a primary raw material." },
                  { t: "Animal Feed Industry", d: "Non-protein nitrogen source in cattle and buffalo feed; serving the massive dairy industries in Gujarat, UP, and Punjab." },
                  { t: "Pharma & Cosmetics", d: "High-purity urea as a penetration enhancer in topical creams, moisturisers, and dermatological preparations." },
                  { t: "NOx Reduction (SNCR)", d: "Power plants, cement kilns, and waste incinerators use aqueous urea solution for Selective Non-Catalytic Reduction of nitrogen oxides." }
                ].map((app, i) => (
                  <div key={i} className="bg-gray-50 p-6 border-l-4 border-navy hover:shadow-xl transition-all">
                    <h4 className="font-black text-navy uppercase text-sm mb-2">{app.t}</h4>
                    <p className="text-xs text-gray-500 font-medium">{app.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="fadeRight">
              <h3 className="text-2xl font-black text-wine uppercase italic mb-8 flex items-center gap-3">
                <div className="w-10 h-1 bg-wine"></div> AdBlue Grade
              </h3>
              <div className="mb-8 overflow-hidden rounded-2xl shadow-xl aspect-video relative group">
                <img 
                  src={adblueUrea} 
                  alt="AdBlue Grade Urea" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-wine/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { t: "DEF Blending Plants", d: "Dozens of units across India mixing ISO-grade urea with deionised water at 32.5% concentration." },
                  { t: "Automotive OEM Chain", d: "Approved AdBlue for Tata Motors, Ashok Leyland, Mahindra, Volvo India, and Mercedes trucks; all BS-VI vehicles require it." },
                  { t: "Fleet Operations", d: "Large truck fleets, logistics companies, and mining operators requiring bulk DEF supply for BS-VI compliance." },
                  { t: "Marine & Industrial SCR", d: "Large diesel generators, marine engines, and industrial boilers with SCR emission control systems." }
                ].map((app, i) => (
                  <div key={i} className="bg-gray-50 p-6 border-l-4 border-wine hover:shadow-xl transition-all">
                    <h4 className="font-black text-wine uppercase text-sm mb-2">{app.t}</h4>
                    <p className="text-xs text-gray-500 font-medium">{app.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🎬 Product Showcase Gallery */}
      <section className="py-24 bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter italic">
              Product <span className="text-wine">Glimpses</span>
            </h2>
            <p className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Real-time footage of our urea supply & loading</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ureaVid1, ureaVid2, ureaVid3].map((vid, i) => (
              <Reveal key={i} variant="zoomIn" delay={i * 200}>
                <div 
                  onClick={() => setActiveVideo(vid)}
                  className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black aspect-[9/16] md:aspect-video cursor-pointer"
                >
                  <video 
                    src={vid} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                  
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
                    <div className="w-16 h-16 bg-wine/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <div className="w-10 h-1 bg-wine mb-2"></div>
                    <p className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Supply Clip 0{i + 1}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ⚖️ Import Rules Comparison */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tighter italic">
              Why Private Traders <span className="text-wine">Can Import</span>
            </h2>
            <p className="text-gray-500 font-black uppercase tracking-[0.2em] text-[10px]">The Legal Distinction in India</p>
          </Reveal>

          <Reveal variant="fadeUp">
            <div className="overflow-x-auto rounded-2xl shadow-2xl bg-white border border-gray-100">
              <Table>
                <TableHeader>
                  <TableRow className="bg-navy text-white">
                    <TableHead className="text-white/60 text-[10px] uppercase tracking-widest font-black py-6">Feature</TableHead>
                    <TableHead className="text-white/60 text-[10px] uppercase tracking-widest font-black py-6">Agricultural Urea</TableHead>
                    <TableHead className="text-wine text-[10px] uppercase tracking-widest font-black py-6">Industrial / AdBlue Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { f: "Private Import Allowed?", a: "❌ No — Govt STEs Only", i: "✅ Yes" },
                    { f: "GST Rate", a: "5% (Subsidised)", i: "12%" },
                    { f: "Neem Coating?", a: "Mandatory", i: "None" },
                    { f: "Price Control?", a: "Yes — Controlled MRP", i: "No — Market Price" },
                    { f: "Our Supply?", a: "Not Applicable", i: "✅ We Supply" },
                  ].map((row, i) => (
                    <TableRow key={i} className="border-b border-gray-50 hover:bg-gray-50/50">
                      <TableCell className="font-black text-navy py-6 text-xs uppercase">{row.f}</TableCell>
                      <TableCell className="text-gray-400 py-6 text-sm">{row.a}</TableCell>
                      <TableCell className="text-navy font-bold py-6 text-sm">{row.i}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm italic">
                Reason: Agricultural urea is subsidised, creating diversion risk. Technical grade carries no subsidy, allowing free private trade.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🌍 Source Countries & Why Buy From Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <Reveal variant="fadeLeft">
              <h3 className="text-3xl font-black text-navy uppercase italic mb-8 border-l-8 border-navy pl-6">
                Global <span className="text-wine">Sourcing Network</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { c: "China", d: "World's largest producer; Shandong & Shanxi clusters. Primary source for industrial grade." },
                  { c: "Oman", d: "OMIFCO — High-quality prilled urea with excellent logistics proximity to India." },
                  { c: "Russia", d: "EuroChem & UralChem; large-scale production with competitive FOB pricing." },
                  { c: "Middle East", d: "SAFCO (Saudi), Fertil (UAE), and Fertiglobe; premium granular & prilled grades." },
                  { c: "Indonesia", d: "PKT (Pupuk Kalimantan Timur) and Pupuk Sriwidjaja; proximity advantage for East India." },
                  { c: "Egypt", d: "El Nasr Fertilizers and Fertil Egypt; emerging source with competitive pricing." }
                ].map((item, i) => (
                  <div key={i} className="p-4 border border-gray-100 hover:border-wine transition-all group">
                    <h4 className="text-navy font-black uppercase text-[10px] mb-1 group-hover:text-wine transition-colors">{item.c}</h4>
                    <p className="text-[9px] text-gray-500 font-bold leading-tight uppercase">{item.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="fadeRight">
              <h3 className="text-3xl font-black text-navy uppercase italic mb-8 border-l-8 border-wine pl-6">
                Why <span className="text-wine">Buy From Us</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-navy font-black uppercase text-xs mb-4 underline decoration-wine underline-offset-4">Quality & Consistency</h4>
                  <ul className="space-y-3">
                    {[
                      "Fixed origin source — consistent purity lot to lot",
                      "Full COA: Urea %, N %, Biuret %, Moisture, Metals",
                      "ISO 22241 certified for AdBlue grade",
                      "BIS IS 2660 compliant for technical grade",
                      "MSDS, COO, Packing List with every lot"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center group">
                        <div className="w-1.5 h-1.5 bg-wine rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-gray-600 font-bold text-[11px] uppercase tracking-wide">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-navy font-black uppercase text-xs mb-4 underline decoration-wine underline-offset-4">Supply & Commercial</h4>
                  <ul className="space-y-3">
                    {[
                      "Both grades available from a single supplier",
                      "MOQ 2 MT — easy trial before full container",
                      "Ex-stock at JNPT / Mundra — 3–7 day delivery",
                      "Competitive CIF / DAP pricing to your plant",
                      "Payment on committed timelines"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center group">
                        <div className="w-1.5 h-1.5 bg-wine rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-gray-600 font-bold text-[11px] uppercase tracking-wide">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🧪 Technical Documentation — Report Preview Pattern */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tighter italic">
              Technical <span className="text-wine">Documentation</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Verified Batch Analysis & Compliance Certificates</p>
          </Reveal>

          <div className="max-w-2xl mx-auto">
            <Reveal variant="fadeUp">
              <div className="bg-white border border-gray-200 p-12 shadow-sm hover:shadow-xl transition-all">
                <div className="flex flex-col items-center mb-8">
                  <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-black text-navy uppercase italic">Batch COA Preview</h4>
                  <p className="text-xs text-gray-500 font-bold mt-2 uppercase tracking-widest">Available Upon Request</p>
                </div>

                <div className="relative group w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 aspect-[4/3] mb-8 flex items-center justify-center">
                  <div className="text-center px-12">
                    <p className="text-[10px] font-black text-navy/20 uppercase tracking-widest mb-4 italic">Security Encrypted Preview</p>
                    <p className="text-[11px] text-gray-400 font-bold uppercase leading-relaxed">
                      Detailed Technical Data Sheets (TDS) and COA for Technical & AdBlue grades are shared after RFQ verification.
                    </p>
                  </div>
                </div>

                <Link to="/contact" className="inline-flex items-center gap-3 text-navy font-black uppercase text-[10px] tracking-widest border-b-2 border-navy hover:text-wine hover:border-wine transition-all pb-1">
                  Request Sample Report <Icons.Chevron className="w-3 h-3 -rotate-90" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🤝 Suppliers Welcome Section */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <Reveal variant="fadeUp">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter italic">
              Exporters & <span className="text-wine">Producers Welcome</span>
            </h2>
            <p className="text-white/70 text-lg font-medium max-w-3xl mx-auto mb-12 italic">
              India's industrial urea market is growing at 15-20% annually. We are looking for reliable partners for long-term supply programs.
            </p>
            <div className="bg-white/5 p-12 border border-white/10 rounded-3xl text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                <div>
                  <h5 className="font-black text-white text-[10px] uppercase mb-4 underline decoration-wine underline-offset-4 tracking-[0.2em]">Technical Grade Specs</h5>
                  <p className="text-[11px] leading-loose uppercase tracking-wider font-bold text-white/60">Urea ≥99.0% · Nitrogen ≥46% · Biuret ≤1.0% · Moisture ≤0.5% · No neem coating</p>
                </div>
                <div>
                  <h5 className="font-black text-white text-[10px] uppercase mb-4 underline decoration-wine underline-offset-4 tracking-[0.2em]">AdBlue Grade Specs</h5>
                  <p className="text-[11px] leading-loose uppercase tracking-wider font-bold text-white/60">ISO 22241 compliant · Biuret ≤0.3% · Heavy metals within limits · Prilled preferred</p>
                </div>
              </div>
              <div className="mt-10 pt-10 border-t border-white/10 flex flex-col gap-8">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <p className="text-wine font-black italic uppercase tracking-widest text-xs">✦ Prefer credit-based flexible terms (DA / OA)</p>
                  <Link to="/contact" className="bg-wine text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-xl">Contact Sourcing</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[9px] text-white/30 uppercase font-bold tracking-widest italic">
                  <p>Send: Company · Country · Grade · Capacity · FOB Price · Payment Terms</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 📦 Logistics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="mb-16">
            <h2 className="text-4xl font-black text-navy uppercase italic">
              Logistics <span className="text-wine">& Packaging</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Packaging Options", d: "50kg HDPE bags (std), 25kg bags (AdBlue), 1MT jumbo bags, or bulk FCL." },
              { t: "Container Load", d: "One 20-ft FCL: approx 22–24 MT of bagged urea." },
              { t: "Port Coverage", d: "JNPT / Nhava Sheva, Mundra, Hazira, and Chennai ports." },
              { t: "Lead Times", d: "Ex-stock: 3–7 days | Fresh import: 25–40 days depending on origin." }
            ].map((log, i) => (
              <div key={i} className="p-8 bg-gray-50 border border-gray-100 hover:border-navy transition-all">
                <h4 className="font-black text-navy uppercase text-xs mb-4">{log.t}</h4>
                <p className="text-sm text-gray-500 font-medium">{log.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-navy text-white/60 text-[10px] font-black uppercase tracking-[0.3em] text-center">
            HS CODE: 3102.10 (Urea, whether or not in aqueous solution)
          </div>
        </div>
      </section>

      {/* ❓ FAQs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy uppercase italic">Frequently Asked <span className="text-wine">Questions</span></h2>
          </Reveal>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 100}>
                <div 
                  className={`bg-white border transition-all duration-500 ${activeFaq === idx ? "border-wine shadow-xl shadow-wine/5 ring-1 ring-wine/5" : "border-gray-100 shadow-sm"}`}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full px-8 py-7 text-left flex justify-between items-center group"
                  >
                    <span className={`font-black uppercase text-sm transition-colors duration-300 ${activeFaq === idx ? "text-wine" : "text-navy group-hover:text-wine"}`}>
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${activeFaq === idx ? "bg-wine text-white rotate-180" : "bg-gray-50 text-navy"}`}>
                      <Icons.Chevron className="w-4 h-4" />
                    </div>
                  </button>
                  <div
                    className={`px-8 transition-all duration-500 ease-in-out overflow-hidden ${activeFaq === idx ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="pt-6 border-t border-gray-50">
                      <p className="text-gray-600 text-sm font-medium leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🏁 CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-20 relative z-10">
          <Reveal variant="fadeLeft" className="text-center lg:text-left max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black text-navy mb-8 tracking-tighter uppercase italic leading-none">
              Get A <span className="text-wine block md:inline">Quote</span>
            </h2>
            <p className="text-gray-500 font-black uppercase tracking-[0.2em] text-xs mb-10 italic">
              Quality & Consistency • Full COA Per Lot • MOQ 2 MT
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <Link to="/rfq" className="bg-navy text-white px-12 py-6 text-sm font-black hover:bg-wine transition-all shadow-2xl flex items-center gap-4 group">
                <Icons.Truck />
                <span className="uppercase tracking-widest">RFQ Dashboard</span>
              </Link>
              <a href="https://wa.me/919258720699" target="_blank" rel="noopener noreferrer" className="border-2 border-navy text-navy px-12 py-[22px] text-sm font-black hover:bg-navy hover:text-white transition-all uppercase tracking-widest">
                Whatsapp Direct
              </a>
            </div>
          </Reveal>
          <Reveal variant="fadeRight" className="lg:w-2/5 bg-navy p-16 text-white shadow-[0_50px_100px_-20px_rgba(30,41,59,0.5)] relative group overflow-hidden">
            <h4 className="text-2xl font-black uppercase mb-10 italic tracking-widest text-wine underline decoration-4 underline-offset-8">
              Supply Details
            </h4>
            <ul className="space-y-6">
              {[
                "Fixed origin source for consistent chemistry",
                "ISO 22241 / BIS IS 2660 compliant",
                "Ex-stock at JNPT/Mundra (3-7 days delivery)",
                "Fresh import 30-40 days for bulk orders",
                "Competitive CIF / DAP pricing to your plant",
                "Flexible payment terms for long-term relations"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="mt-1"><Icons.Check /></div>
                  <span className="text-white/80 font-medium text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 🎬 Video Modal Overlay */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 transition-all duration-500 animate-in fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors p-2"
            onClick={() => setActiveVideo(null)}
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <video 
              src={activeVideo} 
              className="w-full h-full object-contain"
              controls 
              autoPlay 
              playsInline
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Urea;
