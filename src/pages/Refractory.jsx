import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import RefactoryImage from "../assets/hero-refactory.jpeg";
import RefacotyImage2 from "../assets/refactory-image.jfif";
// ── Icons ──────────────────────────────────────────────────────────────────
const Icons = {
  Brick: () => (
    <svg
      className="w-8 h-8 text-wine"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  ),
  Castable: () => (
    <svg
      className="w-8 h-8 text-wine"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  ),
  Globe: () => (
    <svg
      className="w-8 h-8 text-wine"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  ),
  Shield: () => (
    <svg
      className="w-8 h-8 text-wine"
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
  Layers: () => (
    <svg
      className="w-8 h-8 text-wine"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  ),
};

// ── Reveal Component ─────────────────────────────────────────────────────────

const config = {
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

  const { h, v } = config[variant];

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

// ── Refractory Page Component ──────────────────────────────────────────────

const Refractory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://keruirefra.com/wp-content/uploads/2024/11/Kerui-Anchor-Refractory-Fire-Bricks.jpg"
            alt="Refractory Bricks & Castables"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp">
            <span className="inline-block px-4 py-1.5 bg-wine/20 border border-wine/50 text-wine rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Industrial Thermal Solutions
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={200}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
              Leading Refractory <span className="text-wine">Solutions</span> in
              India
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              High-performance Bricks & Castables for Steel, Cement & Foundry
              applications. Engineered for temperatures up to{" "}
              <span className="text-white font-bold">1800°C</span>.
            </p>
          </Reveal>
          <Reveal
            variant="fadeUp"
            delay={600}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
          >
            <Link
              to="/contact"
              className="bg-wine text-white px-10 py-5 rounded-2xl font-black hover:bg-wine/90 transition-all shadow-2xl hover:-translate-y-1"
            >
              Check Inventory & Prices
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-black hover:bg-white/20 transition-all backdrop-blur-md"
            >
              Request Technical Datasheet
            </Link>
          </Reveal>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </section>

      {/* 🧱 2A. Refractory Bricks Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
            <Reveal variant="fadeLeft" className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center">
                  <Icons.Brick />
                </div>
                <h2 className="text-4xl font-black text-navy uppercase tracking-tighter">
                  Refractory <span className="text-wine">Bricks</span>
                </h2>
              </div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light">
                Precisely manufactured blocks designed to withstand extreme
                thermal, chemical, and mechanical stress. Our bricks are the
                backbone of high-efficiency kilns and furnaces globally.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: "High Alumina Bricks", d: "30% – 80% Al₂O₃ content" },
                  { t: "Fire Clay Bricks", d: "Versatile thermal stability" },
                  { t: "Magnesia Bricks", d: "High alkaline resistance" },
                  { t: "Silica Bricks", d: "Acidic atmosphere endurance" },
                  { t: "Insulating Bricks", d: "Optimized thermal retention" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#f8f9fb] p-5 rounded-2xl group hover:bg-navy transition-all duration-300"
                  >
                    <h4 className="font-bold text-navy group-hover:text-white mb-1">
                      {item.t}
                    </h4>
                    <p className="text-gray-500 group-hover:text-gray-400 text-sm tracking-tight">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal variant="fadeRight" delay={300} className="flex-1 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl skew-y-3">
                <img
                  src={RefactoryImage}
                  alt="Bricks Production"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 bg-wine/10 rounded-[3rem] -rotate-3 -z-0"></div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                l: "Primary Application",
                v: "Kilns, Furnaces, Ladles",
                icon: "🔥",
              },
              { l: "Temperature Range", v: "Up to 1800°C", icon: "🌡️" },
              {
                l: "Key Advantage",
                v: "High Structural Integrity",
                icon: "💎",
              },
            ].map((spec, i) => (
              <Reveal key={i} delay={i * 150} variant="zoomIn">
                <div className="bg-[#f8f9fb] p-8 rounded-3xl text-center border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="text-4xl mb-4">{spec.icon}</div>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
                    {spec.l}
                  </p>
                  <p className="text-navy font-black text-xl">{spec.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 2B. Refractory Brick Specifications */}
      <section className="py-24 bg-[#f8f9fb] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter mb-4">
              Technical <span className="text-wine">Specifications</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Engineering-grade data for identifying the correct refractory
              composition for your specific thermal environment.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "1. High Alumina Bricks",
                subtitle:
                  "Used in: Steel, cement, kilns, high-temperature zones",
                note: "Higher Al₂O₃ = better performance",
                specs: [
                  { l: "Al₂O₃", v: "45% – 80%+" },
                  { l: "Fe₂O₃", v: "<2.5%" },
                  { l: "Bulk Density", v: "2.3 – 2.8 g/cm³" },
                  { l: "CCS", v: "40 – 80 MPa" },
                  { l: "Apparent Porosity", v: "18 – 25%" },
                  { l: "Refractoriness", v: ">1700°C" },
                ],
              },
              {
                title: "2. Fireclay Bricks",
                subtitle: "Used in: General furnaces, boilers, low-medium temp",
                note: "Cost-effective, widely used",
                specs: [
                  { l: "Al₂O₃", v: "30% – 45%" },
                  { l: "SiO₂", v: "50% – 65%" },
                  { l: "Bulk Density", v: "2.0 – 2.3 g/cm³" },
                  { l: "CCS", v: "20 – 50 MPa" },
                  { l: "Apparent Porosity", v: "20 – 30%" },
                  { l: "Refractoriness", v: "1400 – 1600°C" },
                ],
              },
              {
                title: "3. Magnesia Bricks",
                subtitle: "Used in: Steel plants, basic slag environments",
                note: "High resistance to basic slag",
                specs: [
                  { l: "MgO", v: "85% – 98%" },
                  { l: "CaO", v: "2% – 5%" },
                  { l: "Bulk Density", v: "2.8 – 3.1 g/cm³" },
                  { l: "CCS", v: "50 – 100 MPa" },
                  { l: "Apparent Porosity", v: "15 – 20%" },
                  { l: "Refractoriness", v: ">1800°C" },
                ],
              },
              {
                title: "4. Silica Bricks",
                subtitle: "Used in: Coke ovens, glass furnaces",
                note: "Expansion stability at high heat",
                specs: [
                  { l: "SiO₂", v: "93% – 96%" },
                  { l: "Al₂O₃", v: "<1.5%" },
                  { l: "Bulk Density", v: "1.8 – 2.0 g/cm³" },
                  { l: "CCS", v: "25 – 50 MPa" },
                  { l: "Apparent Porosity", v: "18 – 22%" },
                  { l: "Refractoriness", v: ">1650°C" },
                ],
              },
            ].map((brick, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-navy group-hover:text-wine transition-colors tracking-tight">
                      {brick.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">
                      {brick.subtitle}
                    </p>
                  </div>
                  <div className="text-wine bg-wine/10 p-3 rounded-2xl group-hover:bg-wine group-hover:text-white transition-all">
                    <Icons.Brick />
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {brick.specs.map((s, si) => (
                    <div
                      key={si}
                      className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0"
                    >
                      <span className="text-gray-500 font-medium text-sm">
                        {s.l}
                      </span>
                      <span className="text-navy font-black text-sm">
                        {s.v}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#f8f9fb] p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-2 h-2 bg-wine rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-navy uppercase tracking-wide">
                    {brick.note}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 📐 Sizes & Shapes */}
          <Reveal delay={400} className="mt-16">
            <div className="bg-navy rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-wine/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">
                    Sizes & <span className="text-wine italic">Shapes</span>
                  </h3>
                  <p className="text-gray-400 max-w-md font-light">
                    From standard dimensions for rapid installation to custom
                    engineered shapes for complex furnace geometries.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-auto">
                  {[
                    {
                      t: "Standard Bricks",
                      v: "230 × 114 × 65 mm",
                      d: "Universal standard size",
                    },
                    {
                      t: "Custom Shapes",
                      v: "Arches & Wedges",
                      d: "For rounded geometries",
                    },
                    {
                      t: "Precast Blocks",
                      v: "Heavy Duty",
                      d: "Large scale modularity",
                    },
                  ].map((size, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all text-center md:text-left"
                    >
                      <h4 className="text-wine font-black text-xs uppercase tracking-[0.2em] mb-3">
                        {size.t}
                      </h4>
                      <p className="text-white text-lg font-black mb-1 leading-tight">
                        {size.v}
                      </p>
                      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                        {size.d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🧪 2B. Refractory Castables Section */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <Reveal variant="fadeRight" className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center">
                  <Icons.Castable />
                </div>
                <h2 className="text-4xl font-black text-navy uppercase tracking-tighter">
                  Refractory <span className="text-wine">Castables</span>
                </h2>
              </div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light">
                Unshaped refractories that offer maximum flexibility for complex
                geometries and joint-free linings. Faster installation and easy
                maintenance make them the modern choice for industrial
                efficiency.
              </p>
              <div className="space-y-4">
                {[
                  {
                    t: "Low Cement Castables (LCC)",
                    d: "High density & mechanical strength",
                  },
                  {
                    t: "High Alumina Castables",
                    d: "Superior heat & abrasion resistance",
                  },
                  {
                    t: "Insulating Castables",
                    d: "Lightweight with high porosity",
                  },
                  {
                    t: "Self-flow / Ramming Mass",
                    d: "Vibration-free installation",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-5 items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group hover:border-wine transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-wine/10">
                      <div className="w-2 h-2 bg-navy rounded-full group-hover:bg-wine"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy group-hover:text-wine mb-1">
                        {item.t}
                      </h4>
                      <p className="text-gray-500 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal variant="fadeLeft" delay={300} className="flex-1">
              <div className="relative group">
                <img
                  src="https://cpimg.tistatic.com/6667399/b/4/conventional-castable-powder.jpg"
                  alt="Conventional Castable Powder"
                  className="rounded-[3rem] shadow-2xl group-hover:scale-[1.02] h-[450px] w-full object-cover transition-transform duration-700"
                />
                <div className="absolute -bottom-8 -right-8 bg-wine p-8 rounded-3xl shadow-2xl hidden md:block">
                  <p className="text-white font-black text-3xl">Faster</p>
                  <p className="text-white/80 text-sm tracking-widest uppercase font-bold">
                    Maintenance Cycle
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🏆 Why Buyers Choose Ochnology Section */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wine/20 rounded-full blur-[100px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Strategic Advantage for{" "}
              <span className="text-wine">Industrial Buyers</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Solving the industry's biggest pain points through a verified
              production network and rigorous quality control.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                t: "Network Reliability",
                d: "Working with a network of verified producers means no supply disruptions. If one plant stops, your order stays on schedule.",
                icon: <Icons.Globe />,
              },
              {
                t: "Consistent Quality",
                d: "We solve the 'trial-and-error' supply issue. Every container undergoes pre-dispatch inspection and batch consistency checks.",
                icon: <Icons.Shield />,
              },
              {
                t: "Commercial Flexibility",
                d: "Starting from 1 mixed container (Bricks + Castables). We supply multiple grades in one shipment to optimize your cash flow.",
                icon: <Icons.Layers />,
              },
            ].map((item, idx) => (
              <Reveal
                key={idx}
                delay={idx * 200}
                variant="fadeUp"
                className="h-full"
              >
                <div className="h-full bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md hover:bg-white/10 transition-all group">
                  <div className="mb-8">{item.icon}</div>
                  <h4 className="text-2xl font-black mb-6 group-hover:text-wine transition-colors">
                    {item.t}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {item.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Partnerships Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <Reveal variant="fadeLeft" className="flex-1">
              <h2 className="text-4xl font-black text-navy mb-8 leading-tight">
                Trusted Partner for{" "}
                <span className="text-wine">Refractory Manufacturers</span>
              </h2>
              <p className="text-gray-600 text-lg mb-12 font-light">
                We act as your dedicated export arm, bringing consistent demand
                from global markets while you focus on production excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Access to Global Buyers",
                  "Consistent Export Orders",
                  "Faster Deal Closures",
                  "Better Price Realization",
                  "Complete Export Support",
                  "Scale Without Risk",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-wine rounded-full"></div>
                    <span className="font-bold text-navy text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal
              variant="fadeRight"
              delay={300}
              className="flex-1 w-full overflow-hidden"
            >
              <img
                src="https://res.cloudinary.com/insignia-amarceramic/images/c_scale,w_448,h_448,dpr_2/f_auto,q_auto/v1773218050/ACI-MAIN-UNIT-1000/ACI-MAIN-UNIT-1000.jpg?_i=AA"
                alt="Refractory Manufacturing"
                className="rounded-[3rem] shadow-2xl w-full h-full object-cover object-top"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Buyers Choose Ochnology - Refractory */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-wine/10 border border-wine/20 text-wine rounded-full text-xs font-black tracking-widest uppercase mb-4">
              Steel Plant & Foundry Procurement Ask:
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">
              Why not buy refractories{" "}
              <span className="text-wine">directly from the manufacturer?</span>
            </h2>
            <div className="w-20 h-1 bg-wine mx-auto rounded-full mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Refractory selection is application-critical. Here is why
              multi-supplier sourcing through an expert aggregator is safer and
              cheaper than going direct.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={100} className="my-14">
            <div className="bg-navy text-white rounded-3xl p-10 md:p-14 relative overflow-hidden max-w-4xl mx-auto">
              <div className="absolute top-0 right-0 w-72 h-72 bg-wine/20 rounded-full blur-[80px] -mr-36 -mt-36" />
              <div className="relative z-10">
                <p className="text-wine font-bold text-sm uppercase tracking-widest mb-4">
                  The Refractory Selection Problem
                </p>
                <p className="text-2xl md:text-3xl font-black leading-tight mb-6">
                  Wrong refractory = unplanned furnace shutdown. Each
                  manufacturer specializes in one line — but your furnace may
                  need three different grades across its lining.
                </p>
                <p className="text-gray-300 text-lg font-light leading-relaxed">
                  A dedicated refractory brick manufacturer gives you their
                  product, not the best product for your application. Mixed
                  lining strategies (High-Alumina + Basic + Silica) require
                  sourcing from multiple specialists — that is exactly what we
                  do, consolidated into one order.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: "🏭",
                badge: "Application-Smart Sourcing",
                title: "Right Grade for Each Zone",
                desc: "A BOF needs Basic refractories (MgO-C) at the impact zone, High-Alumina in the side walls, and silica at the working lining top. We source each zone's requirement from the optimal manufacturer, not from one factory's full range.",
              },
              {
                icon: "🔀",
                badge: "Multi-Factory Network",
                title: "20+ Verified Manufacturers, One Order",
                desc: "Your procurement team deals with one point of contact — us. Behind that is our network of 20+ verified refractory plants across India and China. You get competitive pricing from each source, consolidated into a single shipment.",
              },
              {
                icon: "💰",
                badge: "Below OEM Pricing",
                title: "We Price Better Than Factory Direct",
                desc: "Our bulk volume commitments across multiple steel plant clients means we negotiate annual framework contracts with manufacturers. Individual buyers pay list prices. Our clients pay framework-contracted prices — typically 8-15% below factory direct.",
              },
              {
                icon: "🌡️",
                badge: "Thermal Test Reports",
                title: "PCE, CCS, AP Test Reports Provided",
                desc: "We provide full test reports: Pyrometric Cone Equivalent (PCE), Cold Crushing Strength (CCS), Apparent Porosity (AP), and Thermal Shock Resistance for every product lot. Specifying a grade without verification is an operational risk we eliminate.",
              },
              {
                icon: "📦",
                badge: "Mixed Container Supply",
                title: "Partial Brick Relining Quantities",
                desc: "A direct factory insists on full pallet orders — often 5-10 MT per grade minimum. We can supply a mixed container with multiple refractory grades in exact quantities your maintenance shutdown requires. Reduce inventory holding, reduce cost.",
              },
              {
                icon: "🚢",
                badge: "Export Experience",
                title: "Hazardous & Heavy Goods Export Masters",
                desc: "Refractory products are heavy (1-3.5 g/cm3), require reinforced packing, and specific HS codes by composition (MgO-C vs High-Alumina vs Silica). Our export team has handled it all — from Mundra to Malaysia, Gujarat to Germany.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} variant="fadeUp">
                <div className="bg-[#f8f9fb] rounded-3xl p-8 border border-gray-100 hover:border-wine/30 hover:shadow-xl transition-all h-full">
                  <div className="text-4xl mb-5">{item.icon}</div>
                  <span className="inline-block px-3 py-1 bg-wine/10 text-wine text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-black text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fadeUp" delay={200} className="mt-14">
            <div className="bg-wine rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                  Share Your Furnace Lining Requirement
                </h3>
                <p className="text-white/70 text-sm">
                  Tell us the application (BOF, EAF, Ladle, Blast Furnace),
                  grade, and tonnage. Our engineering team will recommend the
                  right grade mix and quote within 48 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  to="/rfq"
                  className="bg-white text-wine px-8 py-4 rounded-2xl font-black hover:bg-navy hover:text-white transition-all shadow-lg"
                >
                  Submit RFQ
                </Link>
                <a
                  href="https://wa.me/919258720699?text=I%20need%20Refractory%20materials%20for%20my%20furnace.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy text-white px-8 py-4 rounded-2xl font-black hover:bg-navy/80 transition-all flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.031 0C5.393 0 0 5.393 0 12.032c0 2.126.549 4.195 1.593 6.02L.055 24l6.096-1.598A11.933 11.933 0 0012.031 24c6.638 0 12.031-5.394 12.031-12.033S18.669 0 12.031 0zm3.842 17.26c-.164.462-.953.904-1.344.965-.91.135-2.072.102-3.8-1.002-2.126-1.359-3.486-3.771-3.585-3.904-.102-.132-.857-1.144-.857-2.183 0-1.04.536-1.547.728-1.748.191-.192.42-.24.55-.24h.392c.164 0 .38.064.593.588.225.556.55 1.346.6 1.444.05.102.081.222.016.353-.066.132-.1.21-.197.324-.097.114-.2.247-.282.342-.09.096-.188.204-.08.384.11.18.49.799 1.053 1.302.726.65 1.332.85 1.513.946.182.096.289.084.398-.036.11-.12.47-.547.596-.732.126-.186.252-.15.42-.09.168.06.1065.504 1.25.576.185.072.311.114.358.174.047.06.047.348-.117.81z" />
                  </svg>
                  WhatsApp Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-wine text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Streamline Your High-Temp Operations
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
              Discuss your specific grade requirements, mixed container options,
              and quarterly bulk contracts with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/contact"
                className="bg-white text-wine px-12 py-5 rounded-2xl font-black hover:bg-navy hover:text-white transition-all shadow-2xl"
              >
                Contact Sourcing Experts
              </Link>
              <a
                href="https://wa.me/919258720699"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white px-12 py-5 rounded-2xl font-black hover:bg-navy/90 transition-all flex items-center justify-center gap-3"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 0C5.393 0 0 5.393 0 12.032c0 2.126.549 4.195 1.593 6.02L.055 24l6.096-1.598A11.933 11.933 0 0012.031 24c6.638 0 12.031-5.394 12.031-12.033S18.669 0 12.031 0zm3.842 17.26c-.164.462-.953.904-1.344.965-.91.135-2.072.102-3.8-1.002-2.126-1.359-3.486-3.771-3.585-3.904-.102-.132-.857-1.144-.857-2.183 0-1.04.536-1.547.728-1.748.191-.192.42-.24.55-.24h.392c.164 0 .38.064.593.588.225.556.55 1.346.6 1.444.05.102.081.222.016.353-.066.132-.1.21-.197.324-.097.114-.2.247-.282.342-.09.096-.188.204-.08.384.11.18.49.799 1.053 1.302.726.65 1.332.85 1.513.946.182.096.289.084.398-.036.11-.12.47-.547.596-.732.126-.186.252-.15.42-.09.168.06.1065.504 1.25.576.185.072.311.114.358.174.047.06.047.348-.117.81z" />
                </svg>
                WhatsApp Support
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Refractory;
