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

// Images
import cacPackaging from "../assets/images/cac_packaging.jpg";
import cacSample from "../assets/images/cac_sample.jpg";

// ── Icons ──────────────────────────────────────────────────────────────────
const Icons = {
  Check: () => (
    <svg className="w-5 h-5 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Flame: () => (
    <svg className="w-6 h-6 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-6 h-6 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
  Factory: () => (
    <svg className="w-8 h-8 text-wine mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Layers: () => (
    <svg className="w-8 h-8 text-wine mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  Beaker: () => (
    <svg className="w-8 h-8 text-wine mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Droplet: () => (
    <svg className="w-8 h-8 text-wine mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
  ),
  Cone: () => (
    <svg className="w-8 h-8 text-wine mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l-8 18h16z M6 14h12 M9 8h6" />
    </svg>
  ),
  Thermometer: () => (
    <svg className="w-8 h-8 text-wine mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
};

// ── Reveal Component ─────────────────────────────────────────────────────────
const VARIANTS = {
  fadeUp: { h: "opacity-0 translate-y-12 blur-sm", v: "opacity-100 translate-y-0 blur-none" },
  fadeLeft: { h: "opacity-0 -translate-x-12 blur-sm", v: "opacity-100 translate-x-0 blur-none" },
  fadeRight: { h: "opacity-0 translate-x-12 blur-sm", v: "opacity-100 translate-x-0 blur-none" },
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

const CalciumAluminateCement = () => {
  const [showAllSpecs, setShowAllSpecs] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const specRows = [
    { p: "Al₂O₃ % min", c40: "38–42%", c50: "48–52%", c70: "68–72%", c80: "78–82%" },
    { p: "CaO %", c40: "35–40%", c50: "28–35%", c70: "18–25%", c80: "12–18%" },
    { p: "SiO₂ % max", c40: "5.0%", c50: "4.0%", c70: "1.0%", c80: "0.5%" },
    { p: "Fe₂O₃ % max", c40: "3.0%", c50: "2.5%", c70: "0.3%", c80: "0.3%" },
    { p: "Initial setting time", c40: "2–4 hours", c50: "2–5 hours", c70: "3–6 hours", c80: "3–8 hours" },
    { p: "24h comp. strength", c40: "≥40 MPa", c50: "≥50 MPa", c70: "≥60 MPa", c80: "≥60 MPa" },
    { p: "Max service temp", c40: "1,350°C", c50: "1,450°C", c70: "1,600°C", c80: "1,700°C" },
    { p: "Colour", c40: "Grey/brown", c50: "Grey", c70: "White/cream", c80: "White" },
    { p: "Standard", c40: "ASTM C1157 · EN 14647", c50: "ASTM C1157 · EN 14647", c70: "EN 14647", c80: "EN 14647" },
    { p: "Origin", c40: "China", c50: "China / Turkey", c70: "China / Turkey / France", c80: "France / China" },
    { p: "Primary Use", c40: "Refractory castables, rapid repair, wastewater", c50: "Monolithic refractories, ladles, tundishes", c70: "High-temp refractories, EAF linings", c80: "Ultra-high temp, kiln furniture" },
  ];

  const visibleRows = showAllSpecs ? specRows : specRows.slice(0, 5);

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* SEO hidden keywords */}
      <div className="hidden">
        calcium aluminate cement India · high alumina cement supplier India · CAC 70 importer India · refractory cement India · aluminous cement India · calcium aluminate cement for castables · CAC 40 supplier India · high alumina cement refractory India · calcium aluminate cement price India · CAC importer India
      </div>

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 mix-blend-multiply"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wine opacity-20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-6 py-2 bg-wine text-white rounded-md text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-2xl shadow-wine/50">
              High-Alumina Refractory Binder
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic leading-[0.9]">
              Calcium <span className="text-wine block md:inline">Aluminate Cement</span>
            </h1>
            <p className="text-white/70 font-bold text-xl md:text-2xl tracking-widest uppercase mb-8">
              CAC 40 · CAC 50 · CAC 70 · CAC 80
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-base md:text-xl text-white/80 max-w-4xl mx-auto font-medium leading-relaxed mb-8">
              Imported & Supplied to Indian Refractory, Steel & Infrastructure Industry
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/60 text-sm font-bold uppercase tracking-wider mb-12">
              <span>Al₂O₃ 40–80%</span> <span className="hidden md:inline">•</span>
              <span>Rapid strength gain (80% in 6–24 hrs)</span> <span className="hidden md:inline">•</span>
              <span>Thermal resistance to 1,700°C</span> <span className="hidden md:inline">•</span>
              <span>Sulphate & chemical corrosion resistant</span> <span className="hidden md:inline">•</span>
              <span>Imported from China, Turkey, France</span> <span className="hidden md:inline">•</span>
              <span>CIF Indian ports</span>
            </div>
          </Reveal>
          
          <Reveal variant="fadeUp" delay={800}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="bg-wine text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-2xl text-center">
                Request A Quote / Sample COA
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
              <span className="border border-white/20 px-3 py-1 rounded">ISO 9001</span>
              <span className="border border-white/20 px-3 py-1 rounded">COA per lot</span>
              <span className="border border-white/20 px-3 py-1 rounded">ASTM C1157 / EN 14647 compliant</span>
              <span className="border border-white/20 px-3 py-1 rounded">Sample in 3–5 days</span>
              <span className="border border-white/20 px-3 py-1 rounded">25kg bags & bulk supply</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 📖 Introduction & Market */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-black text-navy mb-6 uppercase tracking-tight italic">
                    What is <span className="text-wine">Calcium Aluminate Cement?</span>
                  </h2>
                  <div className="w-24 h-2 bg-navy rounded-full mb-6"></div>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium mb-4">
                    Calcium Aluminate Cement (CAC) — also called high alumina cement or aluminous cement — is a specialty hydraulic binder produced by fusing or sintering bauxite and limestone at high temperature. 
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium mb-4">
                    The primary mineral phases are calcium monoaluminate (CaO·Al₂O₃) and calcium dialuminate (CaO·2Al₂O₃) — these give CAC its defining properties that ordinary Portland cement cannot match.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    CAC is not a construction cement in the conventional sense. It is a precision industrial binder used where three specific performance requirements exist simultaneously — high-temperature resistance up to 1,700°C, rapid strength development and chemical corrosion resistance.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeRight" delay={300}>
              <div className="bg-gray-50 p-10 border-l-4 border-wine shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 text-9xl text-wine/5 font-black -mt-4 -mr-4 italic">2024</div>
                <h3 className="text-2xl font-black text-navy uppercase italic mb-6">Global & Indian Market Context</h3>
                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                  The global CAC market was valued at USD 4.5 billion in 2024 and is projected to reach USD 7.5 billion by 2033 at a CAGR of 5.7% — driven by the steel sector's shift toward electric arc furnaces requiring CAC-based monolithic refractories.
                </p>
                <div className="bg-white p-6 border border-gray-100 rounded-lg">
                  <p className="text-navy font-black text-lg italic leading-snug">
                    "In India, where EAF adoption grew by 18% in 2023–24, CAC demand for refractory castables surged 22%."
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium mt-6">
                  India does not produce CAC at meaningful commercial scale. CAC 50, 70 and 80 are almost entirely imported. India's CAC imports are growing at 15–20% annually driven by EAF steel expansion, petrochemical investment and wastewater infrastructure spending.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ⚖️ OPC vs CAC */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy uppercase italic mb-4">The key difference from <span className="text-wine">ordinary cement</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
              Most buyers encounter CAC for the first time when ordinary Portland cement fails in their application. The table below explains why:
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={200} className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-100">
            <Table>
              <TableHeader>
                <TableRow className="bg-navy hover:bg-navy border-none">
                  <TableHead className="text-white font-black uppercase tracking-widest py-6">Property</TableHead>
                  <TableHead className="text-white/70 font-black uppercase tracking-widest py-6">Ordinary Portland Cement</TableHead>
                  <TableHead className="text-wine font-black uppercase tracking-widest py-6 bg-navy/90">Calcium Aluminate Cement</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { p: "Max service temp", opc: "300°C (degrades above)", cac: "1,300–1,700°C (grade dependent)" },
                  { p: "Time to 80% strength", opc: "28 days", cac: "6–24 hours" },
                  { p: "Sulphate resistance", opc: "Poor — primary failure mode", cac: "Excellent" },
                  { p: "Chemical resistance", opc: "Moderate", cac: "High — acids, alkalis, H₂S" },
                  { p: "Alumina (Al₂O₃) content", opc: "5–8%", cac: "40–80%" },
                  { p: "Primary application", opc: "General construction", cac: "Refractories, rapid repair, chemical environments" },
                  { p: "Relative cost", opc: "Low", cac: "5–15x higher than OPC" }
                ].map((row, i) => (
                  <TableRow key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <TableCell className="font-bold text-navy py-4">{row.p}</TableCell>
                    <TableCell className="text-gray-500 py-4 font-medium">{row.opc}</TableCell>
                    <TableCell className="text-navy font-black py-4 bg-wine/5">{row.cac}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Reveal>
          <Reveal variant="fadeUp" delay={300} className="mt-8 text-center">
             <p className="text-navy font-bold italic bg-wine/10 inline-block px-6 py-3 rounded-full">
              The alumina content is the defining parameter — higher Al₂O₃ = higher service temperature, better chemical resistance, better hot strength. Grade selection (CAC 40/50/70/80) is always a function of your maximum service temperature and chemical environment.
             </p>
          </Reveal>
        </div>
      </section>

      {/* 📊 Full Grade Specifications */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">
              Full Grade <span className="text-wine">Specifications</span>
            </h2>
            <div className="w-32 h-1 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-white/60 font-medium">COA per lot: Al₂O₃%, CaO%, SiO₂%, Fe₂O₃%, initial & final setting time, 24-hour and 28-day compressive strength</p>
          </Reveal>

          <Reveal variant="fadeUp" delay={200}>
            <div className="overflow-x-auto border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm mb-10">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-white/10 hover:bg-transparent">
                    <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4">Parameter</TableHead>
                    <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4">CAC 40</TableHead>
                    <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4">CAC 50</TableHead>
                    <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4 text-wine">CAC 70</TableHead>
                    <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4 text-white">CAC 80</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visibleRows.map((row, i) => (
                    <TableRow key={i} className="border-b border-white/5 hover:bg-white/10 transition-colors">
                      <TableCell className="font-bold text-white/80 py-4 text-xs">{row.p}</TableCell>
                      <TableCell className="text-white/70 py-4 text-sm">{row.c40}</TableCell>
                      <TableCell className="text-white/70 py-4 text-sm">{row.c50}</TableCell>
                      <TableCell className="text-wine font-bold py-4 text-sm">{row.c70}</TableCell>
                      <TableCell className="text-white font-bold py-4 text-sm">{row.c80}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-8 flex justify-center mb-16">
              <button
                onClick={() => setShowAllSpecs(!showAllSpecs)}
                className="bg-wine/10 text-wine border border-wine/20 px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-wine hover:text-white transition-all rounded-full flex items-center gap-2"
              >
                {showAllSpecs ? (
                  <>
                    Show Less <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"/></svg>
                  </>
                ) : (
                  <>
                    Read Full Specifications <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                  <h4 className="text-wine font-black text-sm uppercase mb-2">Grade Notes</h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-4"><strong>CAC 40</strong> suits rapid repair, self-leveling floors, non-shrink grouts and low-duty refractory castables — most cost-effective grade.</p>
                  <p className="text-white/70 text-sm leading-relaxed"><strong>CAC 70</strong> is the dominant market grade — high alumina, low iron (Fe₂O₃ ≤0.3%), suitable for white/cream colour-sensitive applications.</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                  <h4 className="text-wine font-black text-sm uppercase mb-2">LCC Formulation</h4>
                  <p className="text-white/70 text-sm leading-relaxed">Low cement castables (LCC) use CAC at 3–8% addition — better hot strength, lower porosity than conventional castables using 15–25% CAC.</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                  <h4 className="text-wine font-black text-sm uppercase mb-2">Critical Storage</h4>
                  <p className="text-white/70 text-sm leading-relaxed">Storage critical: sealed moisture-proof bags only — even brief humidity exposure causes premature hydration. Shelf life 6 months from manufacture.</p>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🏭 Applications in India */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tighter italic">
              Applications in <span className="text-wine">India</span>
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Icons.Factory,
                title: "Refractory castables for steel industry",
                desc: "Refractories absorbed 55% of global CAC volume in 2024 — Indian EAF steel plants (Raipur, Vizag, Kutch clusters) are primary buyers of CAC 50, 60 and 70 for ladle and tundish linings, tap hole repair and emergency furnace patching. CAC consumption in Indian steel refractories grew 22% in 2023–24 driven by EAF adoption — a structural, multi-year demand driver."
              },
              {
                icon: Icons.Layers,
                title: "Refractory castable manufacturers",
                desc: "India has 200+ refractory castable manufacturers supplying steel, cement, glass and non-ferrous industries. These manufacturers buy CAC as a binder — blended with calcined alumina, fused alumina and other aggregates — to produce their branded castable products. This is a large, consistent domestic buyer segment purchasing monthly."
              },
              {
                icon: Icons.Beaker,
                title: "Petrochemical and chemical plants",
                desc: "The chemical sector accounted for 22% of global CAC demand in 2024, driven by ethylene cracker furnace linings, reactor vessels and process equipment linings where aggressive chemical environments destroy ordinary refractory materials rapidly. Indian refineries and petrochemical complexes in Gujarat, Maharashtra and Odisha are active buyers."
              },
              {
                icon: Icons.Droplet,
                title: "Wastewater infrastructure",
                desc: "CAC 40-based mortars resist hydrogen sulphide-induced biogenic sulphuric acid corrosion in sewage pipelines and tunnels — H₂S generated by bacteria in sewage attacks ordinary concrete aggressively. CAC-modified concrete extends pipe and tunnel service life from 10–15 years to 50+ years. India's urban sewage expansion under Smart Cities Mission and AMRUT schemes is driving growing CAC demand in this segment."
              },
              {
                icon: Icons.Cone,
                title: "Rapid repair and construction",
                desc: "CAC's ability to reach 80% final strength in 6 hours makes it ideal for road and runway repairs, bridge deck patching, industrial floor restoration — wherever extended curing closure causes significant operational loss. Airport runway repairs and expressway maintenance contractors are active buyers."
              },
              {
                icon: Icons.Thermometer,
                title: "Cement kilns, glass furnaces and non-ferrous smelting",
                desc: "CAC castables used in transition zones and burning zones of cement kilns, glass tank linings, and aluminium/copper/zinc smelter linings — where extreme temperatures and aggressive chemical slags destroy standard refractories within weeks."
              }
            ].map((app, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={100 * idx}>
                <div className="bg-gray-50 p-8 h-full border hover:border-wine transition-all group">
                  <app.icon />
                  <div className="w-10 h-1 bg-navy mb-6 group-hover:bg-wine transition-colors"></div>
                  <h4 className="text-xl font-black text-navy uppercase italic mb-4">{app.title}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">{app.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Sourcing & Partners */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal variant="fadeLeft" className="bg-white p-10 shadow-xl border-t-4 border-navy">
              <h3 className="text-2xl font-black text-navy uppercase italic mb-6">Why Buy From Us:</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-wine font-black text-xs uppercase tracking-[0.2em] mb-4">Quality & Consistency</h4>
                  <ul className="space-y-4">
                    {[
                      "All four grades (CAC 40/50/70/80) from one supplier",
                      "Full COA per lot: Al₂O₃%, CaO%, SiO₂%, Fe₂O₃%, setting time, compressive strength",
                      "SGS / Intertek inspection at origin available",
                      "MSDS and technical data sheet per grade"
                    ].map((text, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <Icons.Check />
                        <span className="text-gray-600 font-medium text-sm">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-wine font-black text-xs uppercase tracking-[0.2em] mb-4">Supply & Commercial</h4>
                  <ul className="space-y-4">
                    {[
                      "MOQ 2 MT for trial orders — no large commitment",
                      "Ex-stock at JNPT / Mundra for CAC 40 and CAC 50 standard grades",
                      "Competitive CIF / DAP pricing to your plant",
                      "Sample with COA dispatched within 3–5 days",
                      "Lead time: ex-stock 3–7 days · fresh import 25–35 days"
                    ].map((text, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <Icons.Check />
                        <span className="text-gray-600 font-medium text-sm">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-10 p-6 bg-navy text-white text-[10px] font-bold uppercase tracking-[0.2em] italic space-y-2">
                <p>Source Countries:</p>
                <p>China — largest volume, most competitive pricing; primary source for CAC 40 and CAC 50. Major producers: Zhengzhou Kerui, Kaifeng Datong, Henan Haojiaye</p>
                <p>Turkey (Çimsa) — high quality CAC 50 and 70, consistent European-standard documentation; Çimsa invested USD 31.75 million in capacity expansion in 2024</p>
                <p>France (Imerys / Kerneos / Secar) — premium CAC 70 and 80 (SECAR 71 brand widely specified); preferred by EPC contractors requiring European documentation for international projects</p>
              </div>
            </Reveal>
            <Reveal variant="fadeRight" className="bg-white p-10 shadow-xl border-t-4 border-wine">
              <h3 className="text-2xl font-black text-wine uppercase italic mb-6">Foreign Suppliers Welcome:</h3>
              <p className="text-gray-600 mb-4 font-medium">India's growing steel, refractory and infrastructure sectors are creating consistent and expanding demand for CAC — particularly CAC 50, 70 and 80 which are almost entirely imported. If you are a CAC manufacturer or export trading company looking for a reliable Indian buyer, we are worth talking to.</p>
              <p className="text-gray-600 mb-8 font-medium">We value supplier partnerships built on mutual trust and commercial flexibility. If you are open to structured, credit-based arrangements that allow both sides to build confidence over time, we would genuinely like to hear from you.</p>
              
              <div className="space-y-4 mb-8">
                <div className="text-xs font-bold text-navy uppercase tracking-widest border-b pb-2">What We Look For:</div>
                <div className="space-y-4 text-[10px] font-bold text-gray-500 uppercase">
                  <div className="flex flex-col border-b border-gray-50 pb-2">
                    <span className="text-navy">CAC 40</span>
                    <span>Al₂O₃ ≥38% · Setting time within EN 14647 limits · COA per lot · Origin: China</span>
                  </div>
                  <div className="flex flex-col border-b border-gray-50 pb-2">
                    <span className="text-navy">CAC 50</span>
                    <span>Al₂O₃ ≥48% · 24h strength ≥50 MPa · COA per lot · Origin: China / Turkey</span>
                  </div>
                  <div className="flex flex-col border-b border-gray-50 pb-2">
                    <span className="text-navy">CAC 70</span>
                    <span>Al₂O₃ ≥68% · Fe₂O₃ ≤0.3% · COA per lot (SGS/BV preferred) · Origin: China / Turkey / France</span>
                  </div>
                  <div className="flex flex-col border-b border-gray-50 pb-2">
                    <span className="text-navy">CAC 80</span>
                    <span>Al₂O₃ ≥78% · Fe₂O₃ ≤0.3% · Origin: France / China</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 border-l-2 border-navy text-xs font-medium text-gray-600 mb-6">
                To start a conversation provide: Company · Country · Grade(s) available · Al₂O₃ % · Monthly capacity (MT) · FOB price · Payment terms · Contact
              </div>
              <Link to="/contact" className="inline-block text-wine font-black uppercase tracking-widest border-b-2 border-wine hover:text-navy hover:border-navy transition-all">
                Start a Conversation
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📦 Logistics & Packaging */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy uppercase italic mb-4">Logistics <span className="text-wine">& Storage</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Packaging", d: "25kg multilayer moisture-resistant paper bags (critical — CAC degrades on humidity exposure) · 1MT jumbo bags · bulk FCL" },
              { t: "Storage", d: "dry, sealed, covered warehouse · away from floor contact · use within 6 months of manufacture date" },
              { t: "Ports", d: "JNPT / Nhava Sheva (primary) · Mundra · Chennai" },
              { t: "Transit", d: "China 15–20 days · Turkey 18–24 days · France 22–28 days" },
              { t: "HS Code", d: "2523.90 (other hydraulic cements — calcium aluminate cement)" },
              { t: "Inland delivery", d: "Raipur (steel/refractory cluster) · Vizag · Bhilai · Pune · Ahmedabad · Mumbai" },
              { t: "Lead time", d: "ex-stock CAC 40/50: 3–7 days · CAC 70/80 fresh import: 25–35 days" }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-none border border-gray-100">
                <h5 className="font-black text-navy uppercase text-xs mb-3 italic tracking-widest">{item.t}</h5>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy uppercase italic mb-4">Frequently Asked <span className="text-wine">Questions</span></h2>
            <div className="w-24 h-1 bg-wine mx-auto"></div>
          </Reveal>

          <div className="space-y-6">
            {[
              { q: "Q1. What is calcium aluminate cement and how is it different from ordinary Portland cement?", a: "CAC is a specialty hydraulic binder with 40–80% alumina — it withstands temperatures up to 1,700°C and resists sulphate and acid attack that destroys ordinary Portland cement (5–8% alumina, max 300°C). CAC also reaches 80% final strength in 6–24 hours vs 28 days for OPC." },
              { q: "Q2. Which CAC grade should I specify for my EAF steel plant ladle lining?", a: "CAC 50 for general duty ladles and CAC 70 for ladles handling aggressive slags or higher pouring temperatures — specify your maximum service temperature and slag chemistry and we will confirm the appropriate grade and mix design recommendation." },
              { q: "Q3. Can CAC be used to repair sewage pipes and tunnels?", a: "Yes — CAC 40 resists biogenic sulphuric acid (H₂SO₄) generated by H₂S gas in sewage environments, which destroys ordinary concrete rapidly. CAC-modified concrete in sewage infrastructure extends service life from 10–15 years to 50+ years." },
              { q: "Q4. What is the difference between low cement castables (LCC) and conventional castables?", a: "Conventional castables use 15–25% CAC; LCC uses 3–8% CAC with microsilica and dispersants — giving lower porosity, higher density and better hot strength. The CAC grade and addition level must match your specific castable system design." },
              { q: "Q5. What is the minimum order and sample lead time?", a: "MOQ is 2 MT for trial orders; samples with full COA (Al₂O₃%, CaO%, SiO₂%, Fe₂O₃%, setting time, 24-hour strength) dispatched within 3–5 days. Contact us with your grade and application and we confirm stock availability and pricing." },
              { q: "Q6. How should CAC be stored to prevent quality degradation?", a: "Store in dry, sealed, moisture-proof conditions — even brief humidity exposure triggers premature hydration and reduces strength development significantly. Use sealed bags in a covered dry warehouse, no floor contact, and use within 6 months of the manufacture date on the bag." }
            ].map((faq, i) => (
              <Reveal key={i} variant="fadeUp" delay={i * 100} className="bg-white p-6 shadow-sm mb-4 border-l-4 border-transparent hover:border-wine transition-all">
                <h4 className="text-navy font-black text-sm mb-3 italic tracking-tight">{faq.q}</h4>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{faq.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🏁 Call to Action */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-20 relative z-10">
          <Reveal variant="fadeLeft" className="text-center lg:text-left max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">
              High <span className="text-wine block md:inline">Alumina</span> Solutions
            </h2>
            <p className="text-white/50 font-black uppercase tracking-[0.2em] text-xs mb-10 italic">
                Quality & Consistency • Full COA Per Lot • Global Logistics
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <Link to="/contact" className="bg-wine text-white px-12 py-6 text-sm font-black hover:bg-white hover:text-navy transition-all shadow-2xl uppercase tracking-widest">
                Request A Quote
              </Link>
              <a href="https://wa.me/919258720699" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-12 py-[22px] text-sm font-black hover:bg-white hover:text-navy transition-all uppercase tracking-widest">
                Whatsapp Direct
              </a>
            </div>
            <div className="mt-8 text-white/50 text-xs italic text-left max-w-md hidden lg:block">
              Required inquiry details: Company · State/City · Grade (CAC 40/50/70/80) · Application (refractory castable / steel ladle / wastewater / rapid repair / petrochemical) · Qty/month (MT) · Delivery location
            </div>
          </Reveal>
          <Reveal variant="fadeRight" className="lg:w-2/5 bg-white/5 p-12 text-white border border-white/10 backdrop-blur-md">
            <h4 className="text-2xl font-black uppercase mb-8 italic tracking-widest text-wine underline decoration-4 underline-offset-8">
              Supply Highlights
            </h4>
            <ul className="space-y-6">
                {[
                    "Standard Grades: CAC 40, 50, 70, 80",
                    "European (Secar 71) and Chinese origin",
                    "Moisture-proof multilayer packaging",
                    "Ex-stock availability at JNPT / Mundra",
                    "Full technical support for mix design",
                    "SGS / Intertek certified consignments"
                ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                        <Icons.Check />
                        <span className="text-white/80 font-medium text-sm leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default CalciumAluminateCement;
