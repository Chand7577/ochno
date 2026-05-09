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
  MapPin: () => (
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
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  Atom: () => (
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
        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12s4.03 8.25 9 8.25z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15.75c2.9 0 5.25-1.679 5.25-3.75s-2.35-3.75-5.25-3.75S6.75 9.929 6.75 12s2.35 3.75 5.25 3.75z"
      />
      <circle cx="12" cy="12" r="1.5" />
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

const Feldspar = () => {
  const [activeTab, setActiveTab] = useState("potash");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://tiimg.tistatic.com/fp/1/008/152/a-grade-solid-reddish-potash-feldspar-lumps-for-ceramic-industry-259.jpg"
            alt="Feldspar Mineral"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/30 to-navy/15"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-4 py-1.5 bg-wine/20 border border-wine/50 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              Industrial Minerals | Mine Owners
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              Potash & Soda <span className="text-wine">Feldspar</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Leading seller and exporter of premium ceramic and glass grade
              Feldspar from India. Directly sourced from the rich mines of
              Rajasthan.
            </p>
          </Reveal>
          <Reveal
            variant="fadeUp"
            delay={800}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <Icons.Check />
              <span className="text-white text-sm font-medium">
                Consistent Al₂O₃ Content
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <Icons.Check />
              <span className="text-white text-sm font-medium">
                500–2000 MT/month Supply
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🔬 What is Feldspar? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeLeft">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-wine/5 rounded-full blur-3xl"></div>
                <h2 className="text-4xl font-black text-navy mb-6">
                  Superior <span className="text-wine">Fluxing Agents</span>
                </h2>
                <div className="w-20 h-1.5 bg-wine rounded-full mb-8"></div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Feldspar is a complex group of aluminosilicate minerals
                  containing potassium, sodium, and calcium. In industrial
                  applications, it is prized as a powerful fluxing agent that
                  reduces the melting temperature in ceramic and glass
                  manufacturing.
                </p>
                <div className="bg-[#f8f9fb] p-8 rounded-3xl border border-gray-100 flex gap-6">
                  <div className="w-12 h-12 bg-wine/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Icons.Atom />
                  </div>
                  <p className="text-gray-600 font-medium italic">
                    "Feldspar reduces melting temperature in ceramic and glass
                    manufacturing, significantly improving efficiency and final
                    finish quality."
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeRight" delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform">
                  <h3 className="text-xl font-bold text-navy mb-4">
                    Mine To Container
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Technical depth that separates us from standard traders. We
                    manage the entire flow from Rajasthan mines to your port.
                  </p>
                </div>
                <div className="p-8 bg-navy text-white rounded-3xl shadow-xl hover:-translate-y-2 transition-transform">
                  <h3 className="text-xl font-bold mb-4">XRF Analysis</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Consistent monitoring of K₂O, Na₂O, Al₂O₃, and Fe₂O₃ levels
                    using in-house analysis for batch stability.
                  </p>
                </div>
                <div className="p-8 bg-white/50 rounded-3xl border border-dashed border-gray-300 sm:col-span-2">
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Lead Time
                      </span>
                      <span className="text-navy font-black text-lg">
                        15–20 Days
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Established
                      </span>
                      <span className="text-navy font-black text-lg">
                        7+ Years
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Min Order
                      </span>
                      <span className="text-navy font-black text-lg">
                        25 MT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📸 Visual Gallery */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tighter italic">
              Material <span className="text-wine">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Explore the raw and processed forms of our premium Indian Feldspar,
              sourced directly from Rajasthan's richest mining belts.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Reveal variant="zoomIn" className="group relative aspect-video overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFWEaQBfQ7OKYq4YIqAsud9rMtp2bht4_Eg&s"
                alt="Feldspar Lumps"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <h4 className="text-white text-2xl font-black uppercase italic mb-2">High-Grade Lumps</h4>
                <p className="text-gray-300 text-sm font-bold uppercase tracking-widest">Raw Mineral Extraction</p>
              </div>
            </Reveal>

            <Reveal variant="zoomIn" delay={200} className="group relative aspect-video overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img
                src="https://5.imimg.com/data5/PS/VX/MY-4472419/indian-feldspar.jpg"
                alt="Indian Feldspar Powder"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <h4 className="text-white text-2xl font-black uppercase italic mb-2">Micronised Powder</h4>
                <p className="text-gray-300 text-sm font-bold uppercase tracking-widest">Processed Ceramic Grade</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📊 Types & TDS Section */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Types of <span className="text-wine">Feldspar</span>
            </h2>
            <p className="text-gray-500 font-medium mb-8">
              Technical Data Sheets & Grade Comparisons
            </p>

            <div className="inline-flex bg-gray-100 p-1.5 rounded-2xl">
              <button
                onClick={() => setActiveTab("potash")}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === "potash" ? "bg-white text-wine shadow-lg" : "text-gray-400 hover:text-navy"}`}
              >
                Potash Feldspar
              </button>
              <button
                onClick={() => setActiveTab("soda")}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === "soda" ? "bg-white text-navy shadow-lg" : "text-gray-400 hover:text-navy"}`}
              >
                Soda Feldspar
              </button>
            </div>
          </Reveal>

          <div className="max-w-4xl mx-auto">
            {activeTab === "potash" ? (
              <Reveal variant="zoomIn" key="potash">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="p-10 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <h3 className="text-3xl font-black text-navy mb-2">
                        Potash Feldspar (K-Feldspar)
                      </h3>
                      <span className="px-3 py-1 bg-wine/10 text-wine rounded-full text-xs font-bold uppercase tracking-wider">
                        High K₂O Content
                      </span>
                    </div>
                    <a
                      href="/assets/docs/TDS-Potash-Feldspar.pdf"
                      download
                      className="bg-wine text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-wine/90 transition-all"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                      </svg>
                      Download TDS
                    </a>
                  </div>
                  <div className="p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <h4 className="font-bold text-navy mb-4 border-b pb-2">
                          Primary Characteristics
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3 text-gray-600 text-sm">
                            <span className="w-2 h-2 bg-wine rounded-full"></span>
                            <strong>Potassium Oxide (K₂O):</strong> 10–12%
                          </li>
                          <li className="flex items-center gap-3 text-gray-600 text-sm">
                            <span className="w-2 h-2 bg-wine rounded-full"></span>
                            <strong>Application:</strong> Preferred in ceramics
                            & tiles
                          </li>
                          <li className="flex items-center gap-3 text-gray-600 text-sm">
                            <span className="w-2 h-2 bg-wine rounded-full"></span>
                            <strong>Benefit:</strong> Improves translucency &
                            finish
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-4 border-b pb-2">
                          Whiteness Index
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                          Critical for high-end sanitaryware and tiles. We
                          maintain a high whiteness index through controlled
                          sourcing and micro-processing.
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-xs font-bold text-navy">
                            GE Brightness Index Check per batch
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ) : (
              <Reveal variant="zoomIn" key="soda">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="p-10 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <h3 className="text-3xl font-black text-navy mb-2">
                        Soda Feldspar (Na-Feldspar)
                      </h3>
                      <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-xs font-bold uppercase tracking-wider">
                        High Na₂O Content
                      </span>
                    </div>
                    <a
                      href="/assets/docs/TDS-Soda-Feldspar.pdf"
                      download
                      className="bg-navy text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-navy/90 transition-all"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                      </svg>
                      Download TDS
                    </a>
                  </div>
                  <div className="p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <h4 className="font-bold text-navy mb-4 border-b pb-2">
                          Primary Characteristics
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3 text-gray-600 text-sm">
                            <span className="w-2 h-2 bg-navy rounded-full"></span>
                            <strong>Sodium Oxide (Na₂O):</strong> ≥ 7%
                          </li>
                          <li className="flex items-center gap-3 text-gray-600 text-sm">
                            <span className="w-2 h-2 bg-navy rounded-full"></span>
                            <strong>Application:</strong> Glass manufacturing
                          </li>
                          <li className="flex items-center gap-3 text-gray-600 text-sm">
                            <span className="w-2 h-2 bg-navy rounded-full"></span>
                            <strong>Benefit:</strong> Effective network modifier
                            & Soda Ash partial replacement
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-4 border-b pb-2">
                          Glass Durability
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                          Ensures chemical durability and improves the thermal
                          and structural stability of glass containers and
                          sheets.
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-xs font-bold text-navy">
                            Tight SiO₂ / Al₂O₃ Balance Control
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* 🚀 Application Spectrum */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Industry-Specific <span className="text-wine">Solutions</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Different industries require unique mineral profiles. We
              understand these nuances.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ceramics & Tiles",
                usage:
                  "Acts as flux at 1150–1300°C. Reduces vitrification temp and improves translucency.",
                grade: "Recommended: K-spar Potash Grade",
                icon: "🏺",
              },
              {
                title: "Glass Manufacturing",
                usage:
                  "Network modifier, replaces soda ash partially. Improves chemical durability and finish.",
                grade: "Recommended: Glass Grade Soda Feldspar",
                icon: "🍷",
              },
              {
                title: "Sanitaryware",
                usage:
                  "Critical whiteness requirements. Ensures consistent plasticity in body formulation.",
                grade: "Recommended: Premium Potash Grade",
                icon: "🚿",
              },
              {
                title: "Paints & Coatings",
                usage:
                  "Functional extender. Improves scrub resistance and offers low oil absorption.",
                grade: "Recommended: Ultra-fine Paint Grade",
                icon: "🎨",
              },
              {
                title: "Welding Electrodes",
                usage:
                  "Aluminum oxide (Al₂O₃) source. Critical particle size for optimal coating adhesion.",
                grade: "Recommended: Specialized Electrode Grade",
                icon: "⚡",
              },
              {
                title: "Rubber & Plastics",
                usage:
                  "Acts as a filler. Improves surface hardness and chemical resistance.",
                grade: "Available: Surface Treated (Stearic Acid Coated)",
                icon: "🚙",
              },
            ].map((app, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <div className="bg-[#f8f9fb] p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all h-full group">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                    {app.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {app.usage}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-wine text-xs font-black uppercase tracking-wider">
                      {app.grade}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🚢 Export Destinations Section */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="1000" height="1000" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <Reveal variant="fadeUp">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Global Export Hub
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light mb-16">
              Ochnology signals stability and consistency to global partners. We
              serve diverse industries across multiple continents.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Bangladesh",
                details: "Top Buyer (Tiles & Sanitaryware)",
              },
              { name: "Turkey", details: "High-K Potash Preferred" },
              { name: "UAE / Gulf", details: "Glass & Construction" },
              { name: "S. Korea / Japan", details: "High-end Applications" },
              { name: "Egypt / Nigeria", details: "Growth Hubs" },
              {
                name: "Indonesia / Thailand",
                details: "Ceramic Manufacturing",
              },
              { name: "Italy / Spain", details: "Premium Grade Tiles" },
              { name: "Vietnam", details: "Sanitaryware Production" },
            ].map((dest, i) => (
              <Reveal key={i} delay={i * 50} variant="fadeUp">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                  <h4 className="font-bold text-xl mb-1">{dest.name}</h4>
                  <p className="text-gray-400 text-xs">{dest.details}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ⚙️ Quality Control */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <Reveal variant="fadeLeft">
                <h2 className="text-4xl font-black text-navy mb-6">
                  Meticulous <span className="text-wine">Quality Control</span>
                </h2>
                <p className="text-gray-600 mb-8 font-medium">
                  From mine extraction to final container loading, we enforce
                  technical protocols that ensure your batch is exactly what was
                  ordered.
                </p>
                <div className="space-y-4">
                  {[
                    "In-house XRF Analysis per lot",
                    "GE Brightness Meter verification",
                    "Laser Particle Size Analysis",
                    "Composite sampling every 50 MT",
                    "Pre-shipment (SGS/Intertek) available",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <Icons.Check />
                      <span className="text-navy font-bold text-sm tracking-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Reveal variant="fadeRight" delay={200} className="sm:col-span-2">
                <div className="bg-[#f8f9fb] p-8 rounded-3xl border border-gray-100">
                  <h4 className="text-xl font-bold text-navy mb-4">
                    Quality Rejection Policy
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Safety first: any lot failing the predetermined Fe₂O₃ limits
                    or failing to meet moisture levels is automatically
                    re-processed or rejected. No compromises on industrial grade
                    consistency.
                  </p>
                </div>
              </Reveal>
              <Reveal variant="zoomIn" delay={400}>
                <div className="bg-wine p-8 rounded-3xl text-white">
                  <h4 className="text-xl font-bold mb-4">Chemical Trust</h4>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    Detailed chemical analysis on SiO₂, Al₂O₃, K₂O, Na₂O, and
                    CaO for every single shipment.
                  </p>
                  <Icons.MapPin />
                </div>
              </Reveal>
              <Reveal variant="zoomIn" delay={600}>
                <div className="bg-navy p-8 rounded-3xl text-white">
                  <h4 className="text-xl font-bold mb-4">Physical Stability</h4>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    Controlled particle size distribution (D10, D50, D90)
                    ensures consistent firing behavior in your kilns.
                  </p>
                  <div className="w-10 h-1bg-white/20 rounded-full"></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Frequently Asked <span className="text-wine">Questions</span>
            </h2>
            <div className="w-20 h-1 bg-wine mx-auto rounded-full mb-4"></div>
            <p className="text-gray-500 font-medium italic">
              General queries from Mineral Buyers
            </p>
          </Reveal>

          <div className="space-y-4">
            {[
              {
                q: "What is the difference between potash and soda feldspar?",
                a: "Potash feldspar contains higher K₂O (potassium oxide) and is preferred for ceramics/tiles for better strength. Soda feldspar contains higher Na₂O (sodium oxide) and is preferred for glass manufacturing due to better melting behavior.",
              },
              {
                q: "What K₂O % can you guarantee consistently?",
                a: "We typically guarantee 10–12% K₂O for potash feldspar. Consistency is maintained through batch-wise quality checks and sourcing from pre-qualified mines.",
              },
              {
                q: "Can you supply low iron feldspar for glass use?",
                a: "Yes, we can supply specialized grades with Fe₂O₃ below 0.05% for high-end glass applications. This requires careful material selection and advanced beneficiation.",
              },
              {
                q: "What mesh sizes are available?",
                a: "We customize powder sizes to 200, 325, and 400 mesh depending on your specification for paint, welding, or ceramic glazes.",
              },
              {
                q: "Do you provide samples?",
                a: "Yes, small lab samples can be provided for testing and approval. Courier charges may apply, but the samples themselves are complimentary for verified buyers.",
              },
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-navy text-lg mb-3 flex gap-4">
                    <span className="text-wine">Q.</span> {faq.q}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed pl-8">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Partnership Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-100 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Reveal variant="fadeLeft">
                <h2 className="text-4xl font-black text-navy mb-6">
                  Supplier Partnership Opportunity
                </h2>
                <p className="text-gray-600 font-medium mb-8">
                  We are actively looking to expand our network of Rajasthan &
                  Gujarat mine owners and crusher operators.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Icons.Check />
                    <span className="text-gray-500 font-medium">
                      Guaranteed monthly offtake
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icons.Check />
                    <span className="text-gray-500 font-medium">
                      On-time payments (Advance or PDC)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icons.Check />
                    <span className="text-gray-500 font-medium">
                      Technical guidance for export grade production
                    </span>
                  </li>
                </ul>
              </Reveal>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6">
              <Reveal variant="fadeRight">
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <h4 className="text-xl font-bold text-navy mb-4">
                    Partner with Ochnology
                  </h4>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                    Mine owners with min 200 MT/month output and K₂O ≥ 10% or
                    Na₂O ≥ 7% are encouraged to connect for long-term export
                    contracts.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-navy text-white px-8 py-4 rounded-2xl font-black hover:bg-wine transition-all shadow-lg"
                  >
                    Contact Procurement Team
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 🏁 Call to Action */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-8">
              Ready to Source Premium Feldspar?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/rfq"
                className="bg-wine text-white px-10 py-5 rounded-2xl font-black hover:bg-navy transition-all shadow-xl shadow-wine/20"
              >
                Detailed Quote Request
              </Link>
              <a
                href="https://wa.me/919258720699"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy border-2 border-navy px-10 py-5 rounded-2xl font-black hover:bg-navy hover:text-white transition-all"
              >
                WhatsApp Requirement
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Feldspar;
