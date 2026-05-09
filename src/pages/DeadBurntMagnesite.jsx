import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";

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
  Flame: ({ className = "w-6 h-6 text-wine" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.879 16.121A3 3 0 1012.015 11L11 14l2.828 2.828"
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
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  Download: () => (
    <svg
      className="w-5 h-5 transition-transform group-hover:translate-y-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 9l5 5m0 0l5-5m-5 5V3"
      />
    </svg>
  ),
  Shield: () => (
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
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
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
      { threshold },
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

const DeadBurntMagnesite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Hero: Split Screen Asymmetric Design */}
      <section className="relative w-full h-[70vh] md:h-[80vh] min-h-[500px] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-navy h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 relative z-10">
          <Reveal variant="fadeRight">
            <div className="w-20 h-1 bg-wine mb-8"></div>
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-black text-white leading-[0.9] uppercase tracking-tighter">
              Dead Burnt
              <br />
              <span className="text-wine italic">Magnesite</span>
            </h1>
            <p className="text-white/60 mt-10 text-lg max-w-md font-medium leading-relaxed">
              Premium Sintered Periclase | 1500°C - 2000°C
              <br />
              <br />A high-density form of magnesium oxide (MgO) produced via
              intense calcination for exceptional refractory and structural
              strength.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <div className="border border-white/20 p-5 min-w-[140px]">
                <div className="text-4xl text-white font-black italic">98%</div>
                <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-2 font-bold">
                  Peak MgO
                </div>
              </div>
              <div className="border border-white/20 p-5 min-w-[140px]">
                <div className="text-4xl text-white font-black italic">
                  2852°
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-2 font-bold">
                  Melting Pt.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="w-full md:w-1/2 h-full bg-gray-100 relative group overflow-hidden">
          <img
            src="https://naretra.com/wp-content/uploads/2024/12/dead-burned-magnesite-01.webp"
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-out"
            alt="DBM Materials"
          />
          {/* Overlay gradient to blend bottom edge on mobile */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent md:hidden"></div>
          {/* subtle noise texture / pattern */}
          <div className="absolute inset-0 bg-navy/20 mix-blend-multiply"></div>
        </div>
      </section>

      {/* 📊 Bento Box Key Properties */}
      <section className="pt-24 pb-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-white">
        <div className="text-center md:text-left mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
          <Reveal variant="fadeRight">
            <h2 className="text-4xl md:text-6xl font-black text-navy uppercase tracking-tighter leading-none">
              Physical & <br /> Chemical{" "}
              <span className="italic text-wine">Profile</span>
            </h2>
          </Reveal>
          <Reveal variant="fadeLeft">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs max-w-sm">
              Engineering-grade specifications distinguishing DBM from other
              magnesia derivatives.
            </p>
          </Reveal>
        </div>

        {/* CSS Grid for Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 min-h-[600px]">
          {/* Main Block - MgO */}
          <Reveal
            variant="fadeUp"
            className="md:col-span-2 md:row-span-1 bg-gray-50 p-10 md:p-12 flex flex-col justify-end border border-gray-100 hover:border-navy transition-colors"
          >
            <div className="text-wine text-6xl md:text-8xl font-black mb-4 tracking-tighter">
              90-98%
            </div>
            <h3 className="text-2xl font-black text-navy uppercase tracking-widest">
              Magnesium Oxide (MgO)
            </h3>
            <p className="text-gray-500 mt-2 font-medium max-w-xl">
              Uncompromising purity to ensure your refractoriness standards are
              met. Highly crystalline output leaves virtually no organic matter.
            </p>
          </Reveal>

          {/* Tall Block - Thermal */}
          <Reveal
            variant="fadeLeft"
            delay={150}
            className="md:col-span-1 md:row-span-2 bg-navy p-10 md:p-12 flex flex-col justify-between text-white shadow-xl relative overflow-hidden group"
          >
            <div className="absolute -right-20 -top-20 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
              <Icons.Flame className="w-96 h-96 text-white" />
            </div>
            <div className="relative z-10">
              <span className="inline-block py-1.5 px-4 border border-white/20 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                Thermal Resilience
              </span>
              <h3 className="text-5xl font-black leading-[0.9] tracking-tighter uppercase italic">
                Withstands <br /> 2852°C
              </h3>
            </div>
            <p className="text-white/60 font-medium mt-16 leading-relaxed relative z-10">
              An exceptionally high melting point suitable for severe thermal
              stress environments like blast furnaces, cement kilns, and steel
              manufacturing.
            </p>
          </Reveal>

          {/* Small Block 1 - Density */}
          <Reveal
            variant="fadeUp"
            delay={300}
            className="md:col-span-1 md:row-span-1 bg-[#fcfdfe] p-10 md:p-12 flex flex-col justify-end border border-gray-100 hover:border-wine transition-colors group"
          >
            <div className="text-navy text-4xl md:text-5xl font-black mb-4 tracking-tight group-hover:scale-105 transition-transform origin-left">
              3.0 - 3.5
              <br />
              <span className="text-2xl">g/cm³</span>
            </div>
            <h3 className="text-lg font-bold text-navy uppercase tracking-widest">
              Bulk Density
            </h3>
            <div className="w-12 h-1 bg-wine mt-4"></div>
          </Reveal>

          {/* Small Block 2 - Structure */}
          <Reveal
            variant="fadeUp"
            delay={450}
            className="md:col-span-1 md:row-span-1 bg-wine text-white p-10 md:p-12 flex flex-col justify-end shadow-lg relative"
          >
            <div className="absolute top-8 right-8 mix-blend-overlay opacity-30">
              {/* Hexagon icon hint for crystal */}
              <svg
                className="w-16 h-16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.5L21.5 8v8L12 21.5 2.5 16V8L12 2.5z" />
              </svg>
            </div>
            <div className="text-white text-3xl md:text-4xl font-black mb-4 italic">
              Periclase
            </div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
              Crystal Grain Structure
            </h3>
            <p className="text-white/90 font-medium text-sm mt-3 leading-relaxed">
              Structurally inert formulation prevents slaking and carbonation
              breakdown.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 📖 Sintering Info Panel */}
      <section className="relative z-20 px-6 md:px-12 max-w-[1400px] mx-auto pt-16 pb-24 border-t border-gray-100">
        <Reveal variant="fadeUp" delay={200}>
          <div className="bg-wine p-10 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row gap-10 items-center justify-between border-l-8 border-navy relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

            <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none lg:w-1/3">
              The Sintering
              <br />
              Advantage
            </h2>
            <div className="lg:w-2/3 text-white/90 font-medium text-lg lg:border-l border-white/20 lg:pl-10 relative z-10">
              <p className="leading-relaxed text-justify">
                <strong>Dead Burnt Magnesite</strong> is crafted by calcining
                natural magnesite ore (MgCO₃) at extreme temperatures. Unlike
                caustic calcined magnesia, which is processed at much lower
                heat, our DBM undergoes an intense sintering phase.
                <br />
                <br />
                This process causes the MgO crystals to expand, fortifying into
                a highly crystalline <em>periclase</em> structure that is
                uniquely dense, exceptionally hard, and possesses virtually zero
                reactivity with water and CO₂.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 🛠️ Grades & Technical Data Section */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-wine/5 skew-x-12 translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Col: Grades */}
            <div className="lg:w-2/3">
              <Reveal variant="fadeRight">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-[2px] bg-wine"></span>
                  <span className="text-wine font-black tracking-[0.3em] uppercase text-xs">
                    Technical Specifications
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">
                  Grades of DBM <br />
                  <span className="italic text-wine">We Supply</span>
                </h2>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { grade: "85–88% MgO", desc: "Commercial Refractory Grade" },
                  { grade: "90–92% MgO", desc: "Standard Industrial Grade" },
                  { grade: "94–96% MgO", desc: "High Performance Grade" },
                  { grade: "97%+ High Purity", desc: "Premium Sintered Grade" },
                ].map((item, i) => (
                  <Reveal
                    key={i}
                    variant="fadeUp"
                    delay={i * 100}
                    className="group"
                  >
                    <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-wine transition-all duration-300 flex justify-between items-end">
                      <div>
                        <div className="text-3xl font-black italic mb-2 tracking-tight group-hover:text-wine transition-colors">
                          {item.grade}
                        </div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
                          {item.desc}
                        </div>
                      </div>
                      <button className="flex flex-col items-center gap-2 group/btn">
                        <div className="w-10 h-10 bg-wine/20 rounded-full flex items-center justify-center text-wine group-hover/btn:bg-wine group-hover/btn:text-white transition-all">
                          <Icons.Download />
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-widest opacity-40 group-hover/btn:opacity-100">
                          TDS
                        </span>
                      </button>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right Col: Sizes & Capacity */}
            <div className="lg:w-1/3 flex flex-col gap-12">
              <Reveal variant="fadeLeft">
                <div className="bg-wine p-10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <Icons.Globe />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-4">
                    Available Sizes
                  </h3>
                  <ul className="space-y-6">
                    {[
                      { size: "0–5 mm", type: "Standard Granulometry" },
                      { size: "5–15 mm", type: "Coarse Aggregate" },
                      {
                        size: "Powder",
                        type: "100 / 200 Mesh Fine Grain",
                      },
                    ].map((item, i) => (
                      <li key={i} className="flex justify-between items-center">
                        <div>
                          <p className="text-lg font-bold">{item.size}</p>
                          <p className="text-[10px] uppercase text-white/50 tracking-widest font-bold">
                            {item.type}
                          </p>
                        </div>
                        <div className="w-8 h-[1px] bg-white/20"></div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal variant="fadeLeft" delay={200}>
                <div className="bg-white/5 border border-white/10 p-10 flex flex-col justify-center">
                  <h3 className="text-wine font-black text-xs uppercase tracking-[0.3em] mb-4">
                    Supply Capability
                  </h3>
                  <div className="text-4xl font-black tracking-tighter mb-6 italic">
                    500–2000 MT/mo
                  </div>
                  <div className="space-y-3">
                    {[
                      "Container + Bulk Shipments",
                      "Consistent Lot Supply",
                      "Custom Packaging (Big Bags)",
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-wine"></div>
                        <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 🏭 Industrial Applications */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <Reveal variant="fadeRight">
              <h2 className="text-5xl md:text-7xl font-black text-navy uppercase tracking-tighter leading-none">
                Industries <br />
                <span className="text-wine italic">We Supply</span>
              </h2>
            </Reveal>
            <Reveal variant="fadeLeft">
              <p className="max-w-md text-gray-500 font-medium text-lg border-l-4 border-wine pl-6">
                Critical refractory components for high-temperature thermal
                processing environments across the globe.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Steel Plants",
                desc: "Electric Arc Furnaces (EAF) & Ladles",
                num: "01",
              },
              {
                title: "Refractory",
                desc: "Brick Manufacturing & Monolithics",
                num: "02",
              },
              {
                title: "Cement Kilns",
                desc: "High-Calcite Calcination Zones",
                num: "03",
              },
              {
                title: "Glass Furnaces",
                desc: "Regenerator Checkers & Crowns",
                num: "04",
              },
            ].map((item, i) => (
              <Reveal
                key={i}
                variant="fadeUp"
                delay={i * 100}
                className="group cursor-default"
              >
                <div className="h-full border border-gray-100 p-10 hover:border-navy transition-all duration-500 relative overflow-hidden">
                  <span className="absolute -right-4 -top-8 text-9xl font-black text-gray-50 group-hover:text-wine/5 transition-colors pointer-events-none">
                    {item.num}
                  </span>
                  <div className="relative z-10">
                    <div className="w-12 h-1 bg-wine mb-8 group-hover:w-full transition-all duration-500"></div>
                    <h3 className="text-2xl font-black text-navy uppercase tracking-tight mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🛡️ Value Proposition */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="bg-navy p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-wine via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Reveal variant="fadeRight">
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic mb-8">
                    Why Buyers Choose <br />
                    <span className="text-wine">Och DBM</span>
                  </h2>
                  <p className="text-white/50 font-medium mb-10 max-w-sm">
                    We bridge the gap between premium global production and
                    unparalleled local technical support.
                  </p>
                </Reveal>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    title: "Batch Consistency",
                    text: "Consistent MgO % across every single batch supplied.",
                  },
                  {
                    title: "Impurity Control",
                    text: "Strictly controlled Fe₂O₃ and SiO₂ levels for purity.",
                  },
                  {
                    title: "Supply Security",
                    text: "Reliable alternative to volatile China market fluctuations.",
                  },
                  {
                    title: "High-Temp Stability",
                    text: "Optimized for the most severe thermal environments.",
                  },
                ].map((item, i) => (
                  <Reveal key={i} variant="fadeUp" delay={i * 100}>
                    <div className="flex gap-4">
                      <div className="mt-1">
                        <Icons.Check />
                      </div>
                      <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2">
                          {item.title}
                        </h4>
                        <p className="text-white/40 text-[11px] leading-relaxed font-bold">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🤝 Alternating Layout: Buyers vs Exporters */}
      <section className="bg-[#fcfdfe] py-32 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-24 hidden md:block">
            <Reveal variant="fadeUp">
              <span className="text-outline uppercase text-8xl font-black opacity-5 tracking-tighter pointer-events-none select-none">
                Strategic Partnership
              </span>
            </Reveal>
          </div>

          {/* Buyers Row */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-32">
            <div className="lg:w-1/2 relative w-full lg:order-1 order-2">
              <Reveal variant="zoomIn">
                <div className="aspect-[4/5] md:aspect-square bg-gray-200 overflow-hidden relative shadow-2xl">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2025/1/478966168/PZ/EP/HT/202860124/dead-burnt-magnesite.jpg"
                    className="w-full h-full object-cover filter contrast-125"
                    alt="Industrial Manufacturing"
                  />
                  <div className="absolute inset-0 border-[16px] border-white/20 mix-blend-overlay"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 bg-wine text-white items-center justify-center flex p-6 shadow-2xl flex-col">
                  <span className="font-black text-3xl md:text-5xl mb-1 mt-2 tracking-tighter">
                    25<span className="text-2xl md:text-3xl ml-1">MT</span>
                  </span>
                  <span className="text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-center mt-2">
                    Min. Trial
                    <br />
                    Order
                  </span>
                </div>
              </Reveal>
            </div>
            <div className="lg:w-1/2 lg:order-2 order-1 mb-12 lg:mb-0">
              <Reveal variant="fadeLeft">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-12 h-[2px] bg-wine"></span>
                  <span className="text-wine font-black tracking-widest uppercase text-[10px]">
                    For Bulk Buyers
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-navy uppercase tracking-tighter leading-[1.1] italic mb-8">
                  Reliable Supply, <br /> No Compromises.
                </h2>
                <p className="text-gray-500 text-lg mb-10 font-medium leading-relaxed max-w-lg">
                  We understand that large DBM purchases are capital-intensive.
                  Our approach focuses on understanding your business first—then
                  matching you with verified suppliers for durable trade
                  relationships.
                </p>
                <div className="space-y-5">
                  {[
                    "Access to premium Chinese, Russian, and Turkish DBM producers.",
                    "Scalable grades from 90% to 98% MgO across any requested grain size.",
                    "Comprehensive COA and rigorous inspection coverage on every shipment.",
                    "A dedicated direct point of contact assigned to manage your entire lifecycle.",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 md:p-5 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.02)] border-l-4 border-transparent hover:border-wine transition-all group"
                    >
                      <div className="mt-0.5 text-wine group-hover:scale-110 transition-transform">
                        <Icons.Check />
                      </div>
                      <span className="text-navy font-bold text-sm tracking-wide leading-relaxed">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Exporters Row */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20">
            <div className="lg:w-1/2 relative w-full lg:order-1 order-2">
              <Reveal variant="zoomIn">
                <div className="aspect-[4/5] md:aspect-square  overflow-hidden relative shadow-2xl">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3XnlRvRd6vqQxBdowwFQldZmj4ZUx_jOog&s"
                    className="w-full h-full object-cover opacity-60 mix-blend-screen scale-105"
                    alt="Container Exporting Logistics"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy to-transparent"></div>
                </div>
                <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-36 h-36 md:w-56 md:h-56 bg-white border border-gray-100 flex p-6 md:p-10 shadow-2xl flex-col justify-center">
                  <span className="font-black text-navy text-4xl md:text-6xl mb-2 tracking-tighter italic">
                    1000s
                  </span>
                  <span className="text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">
                    Of Metric Tons
                    <br />
                    Consumed Monthly
                  </span>
                </div>
              </Reveal>
            </div>
            <div className="lg:w-1/2 lg:order-2 order-1 mb-12 lg:mb-0">
              <Reveal variant="fadeRight">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-wine font-black tracking-widest uppercase text-[10px]">
                    For Exporters
                  </span>
                  <span className="w-12 h-[2px] bg-wine"></span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-navy uppercase tracking-tighter leading-[1.1] italic mb-8">
                  Tap into the <br /> Refractory Boom.
                </h2>
                <p className="text-gray-500 text-lg mb-10 font-medium leading-relaxed max-w-lg">
                  India's refractory and steel sector consumes massive volumes
                  of DBM every month. Serious buyers here aren't looking for
                  single shipments—they are actively seeking multi-year sourcing
                  arrangements.
                </p>
                <div className="space-y-5">
                  {[
                    "Secure repeat monthly volume orders — bypass volatile one-off spot buys.",
                    "Engage strictly with vetted buyers possessing proven import credibility.",
                    "We navigate the complex India-side logistics, customs clearing, & documentation.",
                    "Suppliers who offer competitive payment structures receive priority algorithmic matching.",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 md:p-5 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.02)] border-l-4 border-transparent hover:border-navy transition-all group"
                    >
                      <div className="mt-0.5 text-navy group-hover:scale-110 transition-transform">
                        <Icons.Check />
                      </div>
                      <span className="text-navy font-bold text-sm tracking-wide leading-relaxed">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 🏁 Minimalist Full Width CTA */}
      <section className="bg-navy relative py-32 md:py-40 overflow-hidden border-t-8 border-wine">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          {/* Massive background text */}
          <span className="text-[120px] md:text-[250px] font-black italic tracking-tighter text-white whitespace-nowrap">
            PROCUREMENT
          </span>
        </div>

        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-wine/20 rounded-full blur-[100px]"></div>
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Reveal variant="fadeUp">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-8 leading-[0.9]">
              Begin with a <br />
              <span className="text-wine">Conversation</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
              Whether you are looking to secure a continuous supply line or
              expand your market export reach—share your requirements and we
              will build the bridge.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link
                to="/rfq"
                className="bg-wine text-white px-10 py-5 text-sm md:text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-navy transition-colors shadow-2xl flex items-center justify-center gap-3 group"
              >
                <span>Submit Requirement</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="border border-white/20 text-white px-10 py-5 text-sm md:text-xs font-black uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white transition-colors flex items-center justify-center"
              >
                Contact Trade Desk
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default DeadBurntMagnesite;
