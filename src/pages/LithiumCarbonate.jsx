import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import li1 from "../assets/li-1.png";
import li2 from "../assets/li-2.png";
import liPowder from "../assets/lithium carbonate/Lithium-Carbonate-Powder.jpg";
import liProduct from "../assets/lithium carbonate/product-jpeg-250x250.webp";
import liCalcite from "../assets/lithium carbonate/calcite1-500x500.webp";

// ── Icons ──────────────────────────────────────────────────────────────────
const Icons = {
  Battery: () => (
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
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
  Factory: () => (
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
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
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
  Filter: () => (
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
        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
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

const LithiumCarbonate = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "What is Lithium Carbonate?",
      a: "Lithium Carbonate (Li₂CO₃) is a key lithium compound used in batteries, ceramics, glass, and specialty chemical applications.",
    },
    {
      q: "What are the main uses of Lithium Carbonate?",
      a: "Lithium Carbonate is used in Lithium-ion batteries (EV & energy storage), Glass and ceramics industry, Greases and lubricants, and Specialty chemical applications.",
    },
    {
      q: "What grades of Lithium Carbonate are available?",
      a: "The two main grades are Battery Grade (High purity, used in lithium-ion batteries) and Industrial/Technical Grade (Used in glass, ceramics, and other applications).",
    },
    {
      q: "What specifications are important when buying Lithium Carbonate?",
      a: "Key parameters include Li₂CO₃ purity (%), Impurities (Na, K, Ca, Mg, Fe), Moisture content, and Particle size / bulk density. Battery-grade material requires very low impurity levels.",
    },
    {
      q: "Do you supply Lithium Carbonate in bulk quantities?",
      a: "Yes. We supply for industrial and commercial applications. Typical quantities include 1 MT trial orders and container-level supply for regular buyers.",
    },
    {
      q: "What is the packaging of Lithium Carbonate?",
      a: "Lithium Carbonate is typically supplied in 25 kg bags and Jumbo bags for bulk orders.",
    },
    {
      q: "Is Lithium Carbonate hazardous or regulated?",
      a: "Lithium Carbonate is a regulated chemical in many countries, especially for battery-related applications. Proper documentation and compliance are required.",
    },
    {
      q: "Can you ensure consistent quality?",
      a: "Yes. We provide a COA (Certificate of Analysis), ensure batch consistency, and offer sample approval before bulk supply.",
    },
    {
      q: "What are the payment terms?",
      a: "We follow structured trade terms: Advance payment, RTGS against dispatch/loading, or LC (Letter of Credit) for export orders.",
    },
    {
      q: "Do you offer both virgin and recovered Lithium Carbonate?",
      a: "Yes. We offer both virgin (primary) for high-purity battery applications and recovered/reprocessed options for cost-sensitive industrial uses like glass and ceramics.",
    },
  ];

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />
      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1768592919143-7c7830788180?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGl0aGl1bSUyMGNhcmJvbmF0ZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Lithium Carbonate Tech"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-4 py-1.5 bg-wine/20 border border-wine/50 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              Strategic Mineral Solutions
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Lithium Carbonate <span className="text-wine">(Li₂CO₃)</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Leading supplier and exporter of high-purity Battery and
              Industrial grade Lithium Carbonate. Providing reliable,
              multi-origin sourcing with competitive global pricing.
            </p>
          </Reveal>
          <Reveal
            variant="fadeUp"
            delay={800}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-wine text-white px-8 py-4 rounded-xl font-bold hover:bg-wine/90 transition-all shadow-xl hover:-translate-y-1"
            >
              Check Latest Price (FOB/CIF)
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-md"
            >
              Request COA & Specs
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 🔬 General Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeLeft">
              <div className="max-w-xl">
                <h2 className="text-4xl font-black text-navy mb-6">
                  Powering the{" "}
                  <span className="text-wine">Energy Transition</span>
                </h2>
                <div className="w-20 h-1.5 bg-wine rounded-full mb-8"></div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Lithium Carbonate is an essential white salt, widely
                  recognized as a critical raw material for the production of
                  lithium-ion battery cathodes. Beyond energy storage, it serves
                  as a high-performance flux in specialized glass and ceramic
                  manufacturing.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Ochnology provides a robust supply chain for Li₂CO₃, bridging
                  the gap between high-yield mining origins in South America &
                  China and industrial demand across Asia and Europe.
                </p>

                <div className="bg-[#f8f9fb] p-8 rounded-3xl border-l-8 border-wine">
                  <h4 className="text-navy font-bold text-lg mb-2">
                    Available Grades:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="w-2 h-2 bg-wine rounded-full"></div>
                      Battery Grade (Purity ≥ 99.5%)
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="w-2 h-2 bg-navy rounded-full"></div>
                      Technical / Industrial Grade (Purity ≥ 99.0%)
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeRight" delay={300} className="relative">
              <div className="relative group">
                <img
                  src={li1}
                  alt="Lithium Salt Technical"
                  className="rounded-[2.5rem] shadow-2xl relative z-10 w-full"
                />
                <div className="absolute -inset-4 bg-navy/5 rounded-[3rem] blur-2xl group-hover:bg-wine/5 transition-all z-0"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🖼️ Visual Material Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl font-black text-navy uppercase tracking-tight italic">
              Material <span className="text-wine">Showcase</span>
            </h2>
            <div className="w-16 h-1 bg-wine mx-auto mt-4"></div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal variant="zoomIn" delay={200} className="group">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src={liPowder}
                  alt="High Purity Lithium Carbonate"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="text-white font-black text-xs uppercase tracking-widest bg-wine px-3 py-1">High Purity</span>
                </div>
              </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={400} className="group">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src={liProduct}
                  alt="Battery Grade Powder"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="text-white font-black text-xs uppercase tracking-widest bg-navy px-3 py-1">Battery Grade</span>
                </div>
              </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={600} className="group">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src={liCalcite}
                  alt="Raw Mineral Ore"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="text-white font-black text-xs uppercase tracking-widest bg-wine px-3 py-1">Raw Ore</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📊 Grade Comparison Cards */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Battery Grade */}
            <Reveal variant="fadeUp" className="h-full">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 h-full hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-wine transition-colors">
                  <Icons.Battery />
                </div>
                <h3 className="text-3xl font-black text-navy mb-4">
                  Battery <span className="text-wine">Grade</span>
                </h3>
                <p className="text-gray-500 font-light mb-8 leading-relaxed">
                  Engineered for high-performance Lithium Iron Phosphate (LFP)
                  and ternary cathode materials. Stringent control over metallic
                  impurities ensures battery safety and cycle life.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    { l: "Purity", v: "≥ 99.5%" },
                    { l: "Magnetics (Fe)", v: "≤ 0.0001%" },
                    { l: "Ca / Mg Content", v: "< 0.005%" },
                    { l: "Particle Size", v: "D50: 3.5 – 6.0 µm" },
                  ].map((spec, i) => (
                    <li
                      key={i}
                      className="flex justify-between border-b border-gray-100 pb-2"
                    >
                      <span className="text-gray-400 text-sm">{spec.l}</span>
                      <span className="text-navy font-bold text-sm">
                        {spec.v}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <p className="text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest">
                    Primary Uses
                  </p>
                  <p className="text-navy font-bold text-sm">
                    EV Batteries, Energy Storage Systems, Consumer Electronics.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Industrial Grade */}
            <Reveal variant="fadeUp" delay={200} className="h-full">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 h-full hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-wine/80 transition-colors">
                  <Icons.Filter />
                </div>
                <h3 className="text-3xl font-black text-navy mb-4">
                  Technical <span className="text-gray-400">Grade</span>
                </h3>
                <p className="text-gray-500 font-light mb-8 leading-relaxed">
                  Cost-effective grade for applications where trace metallic
                  impurities do not impact the electrochemical signature.
                  Excellent fluxing capabilities for silica-based industries.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    { l: "Purity", v: "≥ 99.0%" },
                    { l: "Iron (Fe)", v: "≤ 0.003%" },
                    { l: "Sulfates (SO4)", v: "< 0.1%" },
                    { l: "Form", v: "Fine Crystal / Powder" },
                  ].map((spec, i) => (
                    <li
                      key={i}
                      className="flex justify-between border-b border-gray-100 pb-2"
                    >
                      <span className="text-gray-400 text-sm">{spec.l}</span>
                      <span className="text-navy font-bold text-sm">
                        {spec.v}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <p className="text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest">
                    Primary Uses
                  </p>
                  <p className="text-navy font-bold text-sm">
                    Glass Strength, Ceramic Glazes, Aluminum Smelting,
                    Lubricants.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🏭 Contract Manufacturing Model */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wine/20 rounded-full blur-[100px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal variant="fadeLeft" className="mb-16">
            <h2 className="text-4xl font-black mb-6">
              Controlled Production via{" "}
              <span className="text-wine">Partner Facilities</span>
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl">
              Ochnology utilizes a sophisticated{" "}
              <strong>Contract Manufacturing & Flexible Sourcing model</strong>{" "}
              to ensure unmatched quality control and supply chain stability.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                t: "Controlled Parameters",
                d: "Production is aligned strictly to our specific quality parameters at local partner plants.",
                icon: <Icons.Factory />,
              },
              {
                t: "Batch Consistency",
                d: "Rigorous monitoring ensures that every shipment maintain exact batch consistency across orders.",
                icon: <Icons.Filter />,
              },
              {
                t: "Multi-Origin Strategy",
                d: "Flexible raw material sourcing from China, Chile, or Australia based on your specific purity needs.",
                icon: <Icons.Globe />,
              },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 150} variant="zoomIn">
                <div className="h-full bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                  <div className="mb-6">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-4">{item.t}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 Why Partners Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <Reveal variant="fadeLeft" className="flex-1">
              <h2 className="text-4xl font-black text-navy mb-8">
                Strategic Supplier <span className="text-wine">Advantages</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 font-light">
                We don't just supply minerals; we engineer supply chains. Our
                hybrid model allows us to offer the agility of a trader with the
                technical oversight of a manufacturer.
              </p>
              <div className="space-y-6">
                {[
                  {
                    t: "FOB / CIF Flexibility",
                    d: "Global export handling with expertise in Indian, Asian, and South American logistics.",
                  },
                  {
                    t: "Custom Specifications",
                    d: "Ability to process material to custom particle size or impurity profile for specific industrial setups.",
                  },
                  {
                    t: "Competitive Global Pricing",
                    d: "Through direct raw material aggregation and efficient partner-plant utilization.",
                  },
                ].map((point, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-12 h-12 bg-[#f8f9fb] rounded-xl flex items-center justify-center group-hover:bg-wine/10 transition-colors">
                      <div className="w-2 h-2 bg-wine rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-navy mb-1">{point.t}</h4>
                      <p className="text-gray-500 text-sm">{point.d}</p>
                    </div>
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
                src={li2}
                alt="Strategic Supply Chain"
                className="rounded-3xl shadow-2xl skew-x-1 w-full"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🏆 Why Buyers Choose Ochnology — Lithium Carbonate */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-wine/10 border border-wine/20 text-wine rounded-full text-xs font-black tracking-widest uppercase mb-4">
              Battery & Industrial Buyers Ask:
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">
              Why not buy Li₂CO₃ <span className="text-wine">directly from a Chinese factory?</span>
            </h2>
            <div className="w-20 h-1 bg-wine mx-auto rounded-full mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              A question every EV battery and glass buyer asks. Here is the commercial answer that factories will never tell you.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={100} className="my-14">
            <div className="bg-navy text-white rounded-3xl p-10 md:p-14 relative overflow-hidden max-w-4xl mx-auto">
              <div className="absolute top-0 right-0 w-72 h-72 bg-wine/20 rounded-full blur-[80px] -mr-36 -mt-36" />
              <div className="relative z-10">
                <p className="text-wine font-bold text-sm uppercase tracking-widest mb-4">The Supply Chain Reality</p>
                <p className="text-2xl md:text-3xl font-black leading-tight mb-6">
                  Chinese factories set MOQs of 20+ MT, demand full LC at sight, and offer zero flexibility on specifications once the order is placed.
                </p>
                <p className="text-gray-300 text-lg font-light leading-relaxed">
                  Battery-grade Li2CO3 is volatile in pricing (linked to lithium spot markets) and highly specification-sensitive. A factory that ships at 99.3% purity instead of 99.5% can shut down your cathode production line. You need a partner who understands both the chemistry and the commercial negotiation.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: "🌐",
                badge: "Multi-Origin Sourcing",
                title: "China, Chile, or Australia — Best Rate, Right Time",
                desc: "Lithium prices shift between origins by 10-20% depending on the quarter. We monitor all three sources and route your order through whichever origin delivers the best FOB pricing at the time of your purchase, without locking you into one supplier.",
              },
              {
                icon: "📊",
                badge: "No Price Manipulation",
                title: "Transparent Spot Pricing Access",
                desc: "Factory sales teams work on margin — they will never pass a spot dip to you. As an independent aggregator, our incentive is your repeat order, not squeezing each shipment. We share market rate data with every quotation.",
              },
              {
                icon: "🔬",
                badge: "Batch Consistency Guaranteed",
                title: "COA Backed, Every Single Container",
                desc: "Battery-grade Li2CO3 for LFP cathodes requires Fe below 0.0001% and Ca below 0.005%. We contract with partner plants to our exact parameters, test every batch at certified labs, and share COA before loading. You get what the spec says.",
              },
              {
                icon: "💳",
                badge: "Flexible Commercial Terms",
                title: "MOQ From 1 MT, Not 20 MT",
                desc: "Chinese factories insist on 20-50 MT minimum orders. We supply from 1 MT for R&D qualification through to 100 MT+ bulk contracts. Your pilot batch and your production scale order come from the same verified source and spec.",
              },
              {
                icon: "📦",
                badge: "Packaging & HS Code Ready",
                title: "Export Compliant for Battery Industry",
                desc: "We handle hazardous goods classification (Li2CO3 is irritant-classified), compliant inner/outer packaging, MSDS, import-country-specific documentation, and preferential HS-code routing. No customs surprises for your logistics team.",
              },
              {
                icon: "⚡",
                badge: "Faster Response",
                title: "48-Hour Quote vs. 5-Day Factory Cycle",
                desc: "Writing directly to a Chinese factory means waiting for their export department, a translator, and a sales coordinator. We respond within 48 hours with a fully itemized quote, COA reference, and shipping timeline. Your procurement team closes faster.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} variant="fadeUp">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-wine/30 hover:shadow-xl transition-all h-full">
                  <div className="text-4xl mb-5">{item.icon}</div>
                  <span className="inline-block px-3 py-1 bg-wine/10 text-wine text-xs font-bold rounded-full uppercase tracking-wider mb-4">{item.badge}</span>
                  <h3 className="text-xl font-black text-navy mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fadeUp" delay={200} className="mt-14">
            <div className="bg-wine rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Need Battery-Grade or Technical Grade Li₂CO₃?</h3>
                <p className="text-white/70 text-sm">Submit your purity requirement, quantity, and delivery port. We quote with a COA reference within 48 hours.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link to="/rfq" className="bg-white text-wine px-8 py-4 rounded-2xl font-black hover:bg-navy hover:text-white transition-all shadow-lg">
                  Submit RFQ
                </Link>
                <a href="https://wa.me/919258720699?text=I%20need%20Lithium%20Carbonate%20pricing%20and%20COA%20details." target="_blank" rel="noopener noreferrer"
                  className="bg-navy text-white px-8 py-4 rounded-2xl font-black hover:bg-navy/80 transition-all flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.393 0 0 5.393 0 12.032c0 2.126.549 4.195 1.593 6.02L.055 24l6.096-1.598A11.933 11.933 0 0012.031 24c6.638 0 12.031-5.394 12.031-12.033S18.669 0 12.031 0zm3.842 17.26c-.164.462-.953.904-1.344.965-.91.135-2.072.102-3.8-1.002-2.126-1.359-3.486-3.771-3.585-3.904-.102-.132-.857-1.144-.857-2.183 0-1.04.536-1.547.728-1.748.191-.192.42-.24.55-.24h.392c.164 0 .38.064.593.588.225.556.55 1.346.6 1.444.05.102.081.222.016.353-.066.132-.1.21-.197.324-.097.114-.2.247-.282.342-.09.096-.188.204-.08.384.11.18.49.799 1.053 1.302.726.65 1.332.85 1.513.946.182.096.289.084.398-.036.11-.12.47-.547.596-.732.126-.186.252-.15.42-.09.168.06.1065.504 1.25.576.185.072.311.114.358.174.047.06.047.348-.117.81z" /></svg>
                  WhatsApp Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ❓ Frequently Asked Questions */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy uppercase italic">
              Frequently Asked <span className="text-wine">Questions</span>
            </h2>
            <div className="w-20 h-1 bg-wine mx-auto mt-4 rounded-full"></div>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 100}>
                <div
                  className={`bg-[#f8f9fb] border transition-all duration-500 ${activeFaq === idx ? "border-wine shadow-xl shadow-wine/5 ring-1 ring-wine/5" : "border-gray-100 shadow-sm"}`}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full px-8 py-7 text-left flex justify-between items-center group"
                  >
                    <span
                      className={`font-black uppercase text-sm transition-colors duration-300 ${activeFaq === idx ? "text-wine" : "text-navy group-hover:text-wine"}`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${activeFaq === idx ? "bg-wine text-white rotate-180" : "bg-white text-navy shadow-sm"}`}
                    >
                      <Icons.Chevron className="w-4 h-4" />
                    </div>
                  </button>
                  <div
                    className={`px-8 transition-all duration-500 ease-in-out overflow-hidden ${activeFaq === idx ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="pt-6 border-t border-gray-200/50">
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

      {/* Call to Action */}
      <section className="py-20 bg-wine text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Secure Your Contract Supply Channel Today
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
              Get in touch with our technical team to discuss production slots,
              custom gradations, and quarterly bulk contracts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/contact"
                className="bg-white text-wine px-10 py-5 rounded-2xl font-black hover:bg-navy hover:text-white transition-all shadow-2xl"
              >
                Contact Expert Supply Team
              </Link>
              <a
                href="https://wa.me/919258720699"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white px-10 py-5 rounded-2xl font-black hover:bg-navy/90 transition-all flex items-center justify-center gap-3"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 0C5.393 0 0 5.393 0 12.032c0 2.126.549 4.195 1.593 6.02L.055 24l6.096-1.598A11.933 11.933 0 0012.031 24c6.638 0 12.031-5.394 12.031-12.033S18.669 0 12.031 0zm3.842 17.26c-.164.462-.953.904-1.344.965-.91.135-2.072.102-3.8-1.002-2.126-1.359-3.486-3.771-3.585-3.904-.102-.132-.857-1.144-.857-2.183 0-1.04.536-1.547.728-1.748.191-.192.42-.24.55-.24h.392c.164 0 .38.064.593.588.225.556.55 1.346.6 1.444.05.102.081.222.016.353-.066.132-.1.21-.197.324-.097.114-.2.247-.282.342-.09.096-.188.204-.08.384.11.18.49.799 1.053 1.302.726.65 1.332.85 1.513.946.182.096.289.084.398-.036.11-.12.47-.547.596-.732.126-.186.252-.15.42-.09.168.06.1065.504 1.25.576.185.072.311.114.358.174.047.06.047.348-.117.81z" />
                </svg>
                WhatsApp Global Desk
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default LithiumCarbonate;
