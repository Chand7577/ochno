import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";

// --- Gallery Images ----------------------------------------------------------
import wGallery1 from "../assets/wollastonite-gallery-1.jpg";
import wGallery2 from "../assets/wollastonite-gallery-2.jpeg";
import wGallery3 from "../assets/wollastonite-gallery-3.jpeg";
import wGallery4 from "../assets/wollastonite-gallery-4.jpeg";

// --- Icons -------------------------------------------------------------
const Icons = {
  Ceramics: () => (
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
  Plastic: () => (
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
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    </svg>
  ),
  Paint: () => (
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
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    </svg>
  ),
  Friction: () => (
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
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  Metallurgy: () => (
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
  Sealants: () => (
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
        d="M14.5 2.5a2.121 2.121 0 013 3L7 16H4v-3L14.5 2.5z"
      />
    </svg>
  ),
  Agriculture: () => (
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
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    </svg>
  ),
  Check: () => (
    <svg
      className="w-6 h-6 text-wine"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
};

// --- Reveal Component --------------------------------------------------

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

// --- Wollastonite Page Component ---------------------------------------

const Wollastonite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWxc6IH5QfSAMCH1gTylJcWJxmRe3-KCJHw&s"
            alt="Wollastonite Ore"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp">
            <span className="inline-block px-4 py-1.5 bg-wine/20 border border-wine/50 text-wine rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              CaSiO3 95%+ . Aspect ratio up to 15:1 . Bright white . 200 to
              10 mesh . Rajasthan & Gujarat origin
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={200}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
              India's Premium <span className="text-wine">Wollastonite</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              High-Aspect-Ratio Acicular Grade for Ceramics, Plastics, Paints &
              Metallurgy — <span className="text-white font-medium">Shipped Worldwide.</span>
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

      {/* Product Grades Catalogue */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter mb-4">
              Product Grades <span className="text-wine">Catalogue</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              We process full chemistry control (CaSiO3, SiO2, CaO,
              Fe2O3, Al2O3, MgO, TiO2, LOI) provided per lot. Custom
              mesh and surface treatment on request.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: "Standard Powder (SP)",
                casi: "92%",
                aspect: "3:1 - 5:1",
                mesh: "200 mesh / D50 25um",
                bright: "82-86",
                fe: "0.5%",
                use: "Ceramics body, glaze, paint filler",
              },
              {
                type: "Fine Powder (FP)",
                casi: "93%",
                aspect: "4:1 - 6:1",
                mesh: "325 mesh / D50 15um",
                bright: "84-88",
                fe: "0.4%",
                use: "Premium ceramics, coatings, sealants",
              },
              {
                type: "High Aspect Ratio (HAR)",
                casi: "95%",
                aspect: "10:1 - 15:1",
                mesh: "D50 50-80um",
                bright: "88-92",
                fe: "0.3%",
                use: "Plastics reinforcement, nylon/PP compounds",
              },
              {
                type: "Surface Treated (ST-HAR)",
                casi: "95%",
                aspect: "10:1 - 15:1",
                mesh: "D50 50-80um",
                bright: "88-92",
                fe: "0.3%",
                use: "Nylon 6/66, PP, TPE compounds - coupling agent coated",
              },
              {
                type: "Lump / Crushed Grade",
                casi: "90-92%",
                aspect: "-",
                mesh: "3-50mm",
                bright: "78-84",
                fe: "0.6%",
                use: "Metallurgy flux, cement kiln, slag conditioner",
              },
              {
                type: "Ultra-fine (UF)",
                casi: "95%+",
                aspect: "5:1 - 8:1",
                mesh: "D50 5-10um",
                bright: "90-94",
                fe: "0.2%",
                use: "Premium paints, friction materials, speciality coatings",
              },
            ].map((grade, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                variant="fadeUp"
                className="h-full"
              >
                <div className="bg-[#f8f9fb] rounded-3xl p-8 border border-gray-100 hover:border-wine/30 hover:shadow-xl transition-all h-full flex flex-col group">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-black text-navy group-hover:text-wine transition-colors tracking-tight pr-4">
                      {grade.type}
                    </h3>
                    <div className="text-wine bg-wine/10 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap hidden sm:block">
                      CaSiO3 {grade.casi}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6 flex-grow">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">
                        Aspect Ratio
                      </span>
                      <span className="text-navy font-black text-sm">
                        {grade.aspect}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">Mesh / Size</span>
                      <span className="text-navy font-black text-sm">
                        {grade.mesh}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">Brightness</span>
                      <span className="text-navy font-black text-sm">
                        {grade.bright}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">
                        Fe2O3 max
                      </span>
                      <span className="text-navy font-black text-sm">
                        {grade.fe}
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">
                      Primary Use
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {grade.use}
                    </p>
                    <button className="text-wine text-sm font-bold uppercase tracking-widest hover:text-navy transition-colors flex items-center gap-2">
                      Download TDS <Icons.Check />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Trust Bar inside Product Catalogue section */}
          <Reveal
            delay={200}
            className="mt-16 bg-navy text-white rounded-3xl p-8 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/20"
          >
            <div className="flex-1 py-4 md:py-0 md:px-8 text-center flex justify-center items-center flex-col">
              <span className="text-4xl font-black text-wine mb-2">15,000+</span>
              <span className="text-sm text-gray-300 font-medium">
                MT Exported Per Year
              </span>
            </div>
            <div className="flex-1 py-4 md:py-0 md:px-8 text-center flex justify-center items-center flex-col">
              <span className="text-4xl font-black text-wine mb-2">25+</span>
              <span className="text-sm text-gray-300 font-medium">
                Years of Processing & Export
              </span>
            </div>
            <div className="flex-1 py-4 md:py-0 md:px-8 text-center flex justify-center items-center flex-col">
              <span className="text-4xl font-black text-wine mb-2">
                48 Hrs
              </span>
              <span className="text-sm text-gray-300 font-medium">
                Samples Lead Time
              </span>
            </div>
            <div className="flex-1 py-4 md:py-0 md:px-8 text-center flex justify-center items-center flex-col">
              <span className="text-4xl font-black text-wine mb-2">
                Ex-Stock
              </span>
              <span className="text-sm text-gray-300 font-medium">
                Bulk Port Availability
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Origin, Geology & Sourcing Map */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wine/20 rounded-full blur-[100px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Origin, Geology & <span className="text-wine">Sourcing Map</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light leading-relaxed">
              India holds ~40% of global wollastonite reserves. We leverage this
              unique geology to supply highly acicular, natural bright white
              grades.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Reveal
              delay={100}
              variant="fadeUp"
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md"
            >
              <h3 className="text-2xl font-black mb-4 text-wine">
                Rajasthan
                <br />
                <span className="text-sm text-gray-400 uppercase tracking-widest font-normal">
                  Sirohi, Dungarpur, Pali
                </span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Largest reserves; high-purity CaSiO3, naturally bright white,
                low Fe2O3 - ideal for plastics and paints applications
                where colour is critical.
              </p>
            </Reveal>
            <Reveal
              delay={200}
              variant="fadeUp"
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md"
            >
              <h3 className="text-2xl font-black mb-4 text-wine">
                Gujarat
                <br />
                <span className="text-sm text-gray-400 uppercase tracking-widest font-normal">
                  Chhota Udaipur, Bharuch
                </span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Good quality deposits; closer to Mundra port - providing a
                significant logistics and shipping advantage for global exports.
              </p>
            </Reveal>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-3xl text-navy">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-black mb-4">Geology Note</h4>
                <p className="text-gray-600 mb-4 leading-relaxed tracking-tight">
                  Wollastonite forms at the contact zone between limestone and
                  silica-rich intrusions (skarn deposits) under high temperature
                  and pressure. India's Precambrian terrain is ideal, producing
                  naturally acicular (needle-shaped) crystals with exceptional
                  aspect ratios.
                </p>
                <div className="bg-wine/10 border border-wine/20 rounded-xl p-4 mt-6">
                  <p className="text-sm text-wine font-bold leading-relaxed">
                    Key Note: HAR grades require special milling - impact
                    mills preserve needle length better than ball mills. We
                    utilize dedicated HAR processing lines.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-black mb-4">Processing Chain</h4>
                <div className="flex flex-wrap gap-2 text-sm font-bold">
                  <span className="bg-[#f8f9fb] px-3 py-2 rounded-lg border border-gray-100">
                    Open-pit mining
                  </span>{" "}
                  {"->"}
                  <span className="bg-[#f8f9fb] px-3 py-2 rounded-lg border border-gray-100">
                    Jaw crushing
                  </span>{" "}
                  {"->"}
                  <span className="bg-[#f8f9fb] px-3 py-2 rounded-lg border border-gray-100 text-wine">
                    Rod milling / Impact milling
                  </span>{" "}
                  {"->"}
                  <span className="bg-[#f8f9fb] px-3 py-2 rounded-lg border border-gray-100">
                    Air classification
                  </span>{" "}
                  {"->"}
                  <span className="bg-[#f8f9fb] px-3 py-2 rounded-lg border border-gray-100">
                    Surface treatment
                  </span>{" "}
                  {"->"}
                  <span className="bg-[#f8f9fb] px-3 py-2 rounded-lg border border-gray-100">
                    Packaging
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#f8f9fb] p-8 rounded-2xl border-l-4 border-wine text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="font-black text-xl md:text-2xl max-w-2xl">
                Are you a wollastonite mine owner, crusher or grinding unit in
                Rajasthan or Gujarat?
              </p>
              <Link
                to="/contact"
                className="bg-navy text-white px-8 py-4 rounded-xl font-bold whitespace-nowrap hover:bg-wine transition-colors"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications Deep-dive */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter mb-4">
              Industry <span className="text-wine">Applications Deep-Dive</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Wollastonite's acicular morphology gives it functional properties
              no other white filler can replicate.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                t: "Ceramics & Tiles",
                d: "Largest market. Primary flux in ceramic bodies — reduces firing temperatures by 50–100°C (significant energy saving). Controls shrinkage, improves green strength, and ideal for fast-fire wall tiles, sanitaryware, and technical glazes. High thermal expansion coefficient compatibility.",
                icon: <Icons.Ceramics />,
              },
              {
                t: "Plastics & Polymer Compounds",
                d: "HAR grade reinforces nylon (PA6/PA66), polypropylene, and ABS — improves flexural modulus, reduces warpage, and enhances dimensional stability. Replaces or supplements glass fibre at lower cost and lower equipment abrasion. Surface-treated grade improves matrix adhesion.",
                icon: <Icons.Plastic />,
              },
              {
                t: "Paints & Coatings",
                d: "Functional extender replacing TiO₂ partially. Improves scrub resistance, reduces gloss where needed, and flattens sheen. In anti-corrosion coatings, acts as a barrier pigment due to needle-like orientation. Reduces cracking in exterior paints.",
                icon: <Icons.Paint />,
              },
              {
                t: "Friction Materials",
                d: "Superior asbestos replacement as reinforcing fibre in brake pads and linings. Improves thermal stability, reduces brake fade, and meets stringent global environmental regulations. Major growth segment in asbestos phase-out markets.",
                icon: <Icons.Friction />,
              },
              {
                t: "Metallurgy",
                d: "Lump/crushed grade used as flux in steel and iron foundries. Lowers slag melting point, improves slag fluidity, and acts as an efficient slag conditioner in EAF / BOF processes. Also critical in high-quality welding flux formulations.",
                icon: <Icons.Metallurgy />,
              },
              {
                t: "Sealants & Adhesives",
                d: "Improves thixotropy in sealants and reduces slump. Widely used in construction boards as a primary functional filler for high-performance fibre cement panels.",
                icon: <Icons.Sealants />,
              },
              {
                t: "Agriculture",
                d: "Slowly releases essential calcium and silicon — used as a superior soil amendment in silicon-deficient soils. A growing technical niche for sustainable soil health management.",
                icon: <Icons.Agriculture />,
              },
            ].map((app, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                variant="zoomIn"
                className="h-full"
              >
                <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-wine/30 transition-all group h-full flex flex-col">
                  <div className="mb-6 bg-[#f8f9fb] w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-wine group-hover:text-white transition-colors">
                    {app.icon}
                  </div>
                  <h4 className="text-xl font-black text-navy mb-3">{app.t}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {app.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Section 6: Why Buy From Us */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-wine/10 rounded-full blur-[120px] -ml-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <span className="text-wine font-black uppercase tracking-widest text-sm mb-4 block">
              Section 6
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
              Why Buy <span className="text-wine">From Us?</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light leading-relaxed">
              We leverage India's vast reserves and our technical processing expertise to provide consistent, high-performance Wollastonite for global industrial applications.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal variant="fadeLeft">
              <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md h-full space-y-8">
                <h3 className="text-2xl font-black text-white flex items-center gap-4">
                  <div className="w-12 h-12 bg-wine rounded-2xl flex items-center justify-center shrink-0">
                    <Icons.Check />
                  </div>
                  Quality & Consistency
                </h3>
                <ul className="space-y-4 text-gray-300 text-sm font-medium">
                  {[
                    "Fixed mine source — same geology, same chemistry, lot to lot",
                    "In-house XRF and particle size lab — every lot tested before dispatch",
                    "COA with every shipment — no chasing for documents",
                    "SGS / Intertek pre-shipment inspection available on request",
                    "Reference sample retained 12 months per lot",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="mt-1 shrink-0">
                        <Icons.Check />
                      </div>
                      <p className="group-hover:text-white transition-colors">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fadeRight">
              <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md h-full space-y-8">
                <h3 className="text-2xl font-black text-white flex items-center gap-4">
                  <div className="w-12 h-12 bg-wine rounded-2xl flex items-center justify-center shrink-0">
                    <Icons.Check />
                  </div>
                  Pricing & Supply Reliability
                </h3>
                <ul className="space-y-4 text-gray-300 text-sm font-medium">
                  {[
                    "Direct mine access — no middleman margin built in",
                    "Long-term pricing contracts available — protects your cost of goods",
                    "Ex-stock at Indian port for urgent orders — no 45-day wait",
                    "Competitive vs Chinese wollastonite — similar quality, better supply chain visibility",
                    "No minimum quantity increase without 30-day prior notice",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="mt-1 shrink-0">
                        <Icons.Check />
                      </div>
                      <p className="group-hover:text-white transition-colors">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fadeLeft" delay={100}>
              <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md h-full space-y-8">
                <h3 className="text-2xl font-black text-white flex items-center gap-4">
                  <div className="w-12 h-12 bg-wine rounded-2xl flex items-center justify-center shrink-0">
                    <Icons.Check />
                  </div>
                  Technical Support
                </h3>
                <ul className="space-y-4 text-gray-300 text-sm font-medium">
                  {[
                    "Grade recommendation based on your exact application",
                    "Custom mesh, aspect ratio or surface treatment developed for MOQ 2 MT+",
                    "Technical data sheets and application notes provided",
                    "Trial sample with full COA before any bulk commitment",
                    "Application testing support — we work with your R&D team",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="mt-1 shrink-0">
                        <Icons.Check />
                      </div>
                      <p className="group-hover:text-white transition-colors">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fadeRight" delay={100}>
              <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md h-full space-y-8">
                <h3 className="text-2xl font-black text-white flex items-center gap-4">
                  <div className="w-12 h-12 bg-wine rounded-2xl flex items-center justify-center shrink-0">
                    <Icons.Check />
                  </div>
                  Logistics & Compliance
                </h3>
                <ul className="space-y-4 text-gray-300 text-sm font-medium">
                  {[
                    "Export from Mundra / Nhava Sheva / Chennai — all major lanes covered",
                    "LCL available — no need to fill a full container for trials",
                    "Full compliance documentation ready — no delays at your end",
                    "Flexible incoterms: FOB, CIF, CFR, DDP for regular buyers",
                    "DHL sample dispatch within 2-3 days — qualify your grade quickly",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="mt-1 shrink-0">
                        <Icons.Check />
                      </div>
                      <p className="group-hover:text-white transition-colors">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🤝 Section 7: Partner With Us */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-wine font-black uppercase tracking-widest text-sm mb-4 block">
              Section 7
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tight">
              Partner <span className="text-wine">With Us</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
              Are you a Wollastonite mine owner, crusher, or grinding unit in Rajasthan or Gujarat? We offer consistent, premium-priced export offtake.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <Reveal variant="fadeLeft">
              <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 h-full flex flex-col">
                <h3 className="text-2xl font-black text-navy mb-6">Better Price Realisation</h3>
                <ul className="space-y-4 text-gray-600 text-sm font-medium mb-8">
                  {[
                    "Export market pricing — consistently 15-25% above what local ceramic factories pay",
                    "We buy consistently month-on-month — no seasonal price crashes",
                    "Grade-based pricing — better quality gets better price, fairly evaluated",
                    "No arbitrary deductions or quality rejections without XRF evidence",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="mt-1 shrink-0">
                        <Icons.Check />
                      </div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-auto w-full text-center bg-navy text-white px-8 py-5 rounded-2xl font-bold hover:bg-wine transition-all shadow-lg"
                >
                  Register as Supplier {"->"}
                </Link>
              </div>
            </Reveal>

            <Reveal variant="fadeRight">
              <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 h-full flex flex-col">
                <h3 className="text-2xl font-black text-navy mb-6">Reliable, Flexible Offtake</h3>
                <ul className="space-y-4 text-gray-600 text-sm font-medium mb-8">
                  {[
                    "Monthly committed purchase quantity — plan your production with confidence",
                    "We absorb seasonal demand variation — your output doesn't sit in stock",
                    "Trial supply welcome — start with a single truck load, grow from there",
                    "We handle all export paperwork, documentation and freight — zero burden on you",
                    "Long-term supply agreement available for mines wanting volume certainty",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="mt-1 shrink-0">
                        <Icons.Check />
                      </div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-auto w-full text-center bg-wine text-white px-8 py-5 rounded-2xl font-bold hover:bg-navy transition-all shadow-lg"
                >
                  Discuss Export Offtake {"->"}
                </Link>
              </div>
            </Reveal>

            <Reveal variant="fadeLeft" delay={100}>
              <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 h-full flex flex-col">
                <h3 className="text-2xl font-black text-navy mb-6">Payment Terms That Work For You</h3>
                <ul className="space-y-4 text-gray-600 text-sm font-medium mb-8">
                  {[
                    "Payment on committed timelines — always know when to expect your funds",
                    "Structured payment schedule aligned to your production cycle",
                    "No payment delays — we run on export receivables, not local market credit cycles",
                    "Transparent settlement — bank transfer with clear invoice reference every time",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="mt-1 shrink-0">
                        <Icons.Check />
                      </div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fadeRight" delay={100}>
              <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 h-full flex flex-col">
                <h3 className="text-2xl font-black text-navy mb-6">Support & Partnership</h3>
                <ul className="space-y-4 text-gray-600 text-sm font-medium mb-8">
                  {[
                    "Free lab testing of your ore sample — know your grade before you quote",
                    "Technical guidance on processing to meet export specs",
                    "We help you get ISO / documentation if needed for long-term partnership",
                    "No exclusivity demanded — supply us alongside your existing buyers",
                    "Referral to other export opportunities within our network",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="mt-1 shrink-0">
                        <Icons.Check />
                      </div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter mb-4">
              Frequently Asked <span className="text-wine">Questions</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
          </Reveal>

          <div className="space-y-4">
            {[
              {
                q: "What price can you offer for wollastonite?",
                a: "Pricing depends on grade, mesh size, and quantity. Share your requirement and we will provide a competitive FOB/CIF quote quickly.",
              },
              {
                q: "How fast can you dispatch material?",
                a: "For standard grades, dispatch can be arranged within a short timeframe depending on availability and order size. Generally 15-20 days for bulk.",
              },
              {
                q: "Can I start with a trial order before bulk purchase?",
                a: "Yes, trial quantities or sample shipments can be arranged before committing to full container loads.",
              },
              {
                q: "Do you supply consistent quality for repeat orders?",
                a: "Yes, we work with selected processors and maintain consistency across shipments with proper quality checks.",
              },
              {
                q: "Which countries do you export to?",
                a: "We regularly supply to Africa, Middle East, and Southeast Asia markets.",
              },
              {
                q: "What payment terms do you offer?",
                a: "We accept TT and LC payment terms, with flexibility based on order volume and long-term partnership.",
              },
              {
                q: "Can you match or improve pricing compared to other suppliers?",
                a: "We always aim to offer competitive pricing with reliable quality and supply stability... share your target price and we will evaluate.",
              },
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 50} variant="fadeUp">
                <div className="bg-[#f8f9fb] p-6 rounded-2xl border border-gray-100">
                  <h4 className="text-lg font-black text-navy mb-2">{faq.q}</h4>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Experience */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter mb-4">
              Visual <span className="text-wine">Experience</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Explore the pure acicular structure and high-brightness quality of
              our Indian Wollastonite.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                img: wGallery1,
                title: "Acicular Ore",
                desc: "High-purity needle-like crystal structure",
              },
              {
                img: "https://df2sm3urulav.cloudfront.net/tenants/gr/uploads/content/topsxylf9n1dvimh.jpg",
                title: "Ultra-fine Powder",
                desc: "200-500 mesh brilliant white powder",
              },
              {
                img: "https://5.imimg.com/data5/SELLER/Default/2025/5/515246031/SG/PY/JF/2957592/wollastonite-powder-500x500.jpg",
                title: "Industrial Grade Powder",
                desc: "Consistent 200-mesh white powder",
              },
              {
                img: "https://www.dakotamatrix.com/images/products/wollastonite37242a.jpg",
                title: "Sample Testing",
                desc: "Rigorous quality check for lot consistency",
              },
              {
                img: "https://5.imimg.com/data5/SELLER/Default/2023/12/372496453/HU/RM/PK/2115738/wollastonite-mineral-250x250.jpg",
                title: "Mineral Lumps",
                desc: "Raw Wollastonite directly from mines",
              },
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgNfRvhlEHyJUyW0Xgwq9T9U_2Y1seMnDv9M6W4NZd20WLjQ8Ry4hFdeh8Qs1ZZ0qPnlEdtP_L409_Sia45ZtssaI&s&ec=121630504",
                title: "Bulk Sourcing",
                desc: "Large-scale logistics for global dispatch",
              },
            ].map((item, i) => (
              <Reveal
                key={i}
                delay={i * 150}
                variant="zoomIn"
                className="group relative aspect-square overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <h4 className="text-white text-xl font-black mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.desc}
                  </p>
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
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Get Premier Wollastonite Direct
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
              Ready to reduce firing temperatures or reinforce polymers? Request
              a sample today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/contact"
                className="bg-white text-wine px-12 py-5 rounded-2xl font-black hover:bg-navy hover:text-white transition-all shadow-2xl"
              >
                Request Competitive Quote
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

export default Wollastonite;
