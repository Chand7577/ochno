import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";

// ── Gallery Images ──────────────────────────────────────────────────────────
import micaGallery1 from "../assets/mica-gallery-1.jpg";
import micaGallery2 from "../assets/mica-gallery-2.jpg";
import micaGallery3 from "../assets/mica-gallery-3.jpg";
import micaGallery4 from "../assets/mica-gallery-4.jpg";

// ── Icons ──────────────────────────────────────────────────────────────────
const Icons = {
  Cosmetics: () => (
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
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
  Electrical: () => (
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
  Electronics: () => (
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
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
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
  Building: () => (
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

// ── Mica Page Component ──────────────────────────────────────────────

const Mica = () => {
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
            src={micaGallery1}
            alt="Mica flakes close-up"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp">
            <span className="inline-block px-4 py-1.5 bg-wine/20 border border-wine/50 text-wine rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              wet ground, dry ground, sheet, splittings, flakes — custom mesh
              and coating available
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={200}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
              India's Premium <span className="text-wine">Mica</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Muscovite, Phlogopite & Synthetic Grades for Cosmetics,
              Electricals & Industry — Shipped Worldwide.
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
      </section>

      {/* 🧱 Product Grades Catalogue */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter mb-4">
              Product Grades <span className="text-wine">Catalogue</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Custom mesh size, coating type and packaging available on request.
              Downloadable TDS for each product.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: "Wet Ground Mica",
                source: "Muscovite",
                specs:
                  "D50: 10–150µm, aspect ratio 40:1+, whiteness 85–92, moisture <0.5%",
                use: "Cosmetics, paint, plastics filler",
              },
              {
                type: "Dry Ground Mica",
                source: "Muscovite / Phlogopite",
                specs:
                  "Mesh: 60–325, brightness 78–88, SiO₂ %, Al₂O₃ %, Fe₂O₃ max",
                use: "Joint compound, roofing, rubber, wallboard",
              },
              {
                type: "Coated Mica (TiO₂/Fe₂O₃)",
                source: "Muscovite",
                specs:
                  "Particle size 5–200µm, pearlescent effect, colours (silver, gold, bronze), REACH cert",
                use: "Cosmetics (eyeshadow, lipstick, highlighter), automotive paint",
              },
              {
                type: "Sheet Mica",
                source: "Muscovite / Phlogopite",
                specs:
                  "V-1 to V-4 grade, thickness 0.1–3mm, dielectric strength, heat resistance to 500°C / 1000°C",
                use: "Electrical insulation, heating elements, capacitor plates",
              },
              {
                type: "Mica Splittings",
                source: "Muscovite / Phlogopite",
                specs:
                  'Size: 1"×1" to 4"×4", thickness <0.1mm, clear / ruby / green grades',
                use: "Mica paper, reconstituted mica boards, commutator mica",
              },
              {
                type: "Mica Powder (Cosmetic)",
                source: "Muscovite",
                specs:
                  "D50 15–35µm, whiteness 90+, heavy metals per EU 1223/2009, no child-labour declaration",
                use: "Makeup, skincare, soap, candle making",
              },
              {
                type: "Phlogopite Mica",
                source: "Phlogopite",
                specs:
                  "Heat stability to 1000°C, MgO content, flexibility, low Al₂O₃",
                use: "High-temp insulation, welding rods, foundry",
              },
            ].map((product, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                variant="fadeUp"
                className="h-full"
              >
                <div className="bg-[#f8f9fb] rounded-3xl p-8 border border-gray-100 hover:border-wine/30 hover:shadow-xl transition-all h-full flex flex-col">
                  <span className="inline-block px-3 py-1 bg-navy/10 text-navy text-xs font-bold rounded-full uppercase tracking-wider mb-4 self-start">
                    {product.source}
                  </span>
                  <h3 className="text-2xl font-black text-navy mb-4 group-hover:text-wine transition-colors tracking-tight">
                    {product.type}
                  </h3>
                  <div className="space-y-4 mb-6 flex-grow">
                    <div>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">
                        Key Specs
                      </p>
                      <p className="text-navy text-sm font-medium leading-relaxed">
                        {product.specs}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">
                        Primary Use
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {product.use}
                      </p>
                    </div>
                  </div>
                  <button className="text-wine text-sm font-bold uppercase tracking-widest hover:text-navy transition-colors flex items-center gap-2">
                    Request TDS <Icons.Check />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🌍 Origin, Geology & Sourcing */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wine/20 rounded-full blur-[100px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Origin, Geology & <span className="text-wine">Sourcing Map</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light leading-relaxed">
              India supplies ~60% of the world's sheet mica and is a dominant
              force in ground mica. Our direct sourcing network ensures you get
              consistent, premium grades.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Reveal
              delay={100}
              variant="fadeUp"
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md"
            >
              <h3 className="text-xl font-black mb-4 text-wine">
                Jharkhand
                <br />
                <span className="text-sm text-gray-400 uppercase tracking-widest font-normal">
                  Koderma, Giridih, Hazaribagh
                </span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                World's finest muscovite sheet mica — ruby, green, clear grades;
                V-1 quality available.
              </p>
            </Reveal>
            <Reveal
              delay={200}
              variant="fadeUp"
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md"
            >
              <h3 className="text-xl font-black mb-4 text-wine">
                Andhra Pradesh
                <br />
                <span className="text-sm text-gray-400 uppercase tracking-widest font-normal">
                  Nellore district
                </span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Large-scale muscovite, major source for ground mica and
                splittings export.
              </p>
            </Reveal>
            <Reveal
              delay={300}
              variant="fadeUp"
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md"
            >
              <h3 className="text-xl font-black mb-4 text-wine">
                Rajasthan
                <br />
                <span className="text-sm text-gray-400 uppercase tracking-widest font-normal">
                  Bhilwara, Ajmer, Tonk
                </span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Phlogopite and muscovite; growing processing hub with modern
                grinding units.
              </p>
            </Reveal>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-3xl text-navy">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-black mb-4">Brief Geology</h4>
                <p className="text-gray-600 mb-4 leading-relaxed tracking-tight">
                  <span className="font-bold">Muscovite:</span> Forms in
                  pegmatites (Al-rich, K-rich environments). <br />
                  <span className="font-bold">Phlogopite:</span> Forms in
                  Mg-rich metamorphic zones.
                  <br />
                  <br />
                  This underlying geology determines chemical properties and
                  heat resistance for various applications.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-black mb-4">Processing Chain</h4>
                <div className="flex flex-wrap gap-2 text-sm font-bold">
                  <span className="bg-[#f8f9fb] px-3 py-2 rounded-lg border border-gray-100">
                    Mine
                  </span>{" "}
                  →
                  <span className="bg-[#f8f9fb] px-3 py-2 rounded-lg border border-gray-100">
                    Hand Cobbing
                  </span>{" "}
                  →
                  <span className="bg-[#f8f9fb] px-3 py-2 rounded-lg border border-gray-100">
                    Sizing
                  </span>{" "}
                  →
                  <span className="bg-[#f8f9fb] px-3 py-2 rounded-lg border border-gray-100 text-wine">
                    Sheet Grading OR Crushing
                  </span>{" "}
                  →
                  <span className="bg-[#f8f9fb] px-3 py-2 rounded-lg border border-gray-100">
                    Grinding (dry/wet)
                  </span>{" "}
                  →
                  <span className="bg-[#f8f9fb] px-3 py-2 rounded-lg border border-gray-100">
                    Classification
                  </span>{" "}
                  →
                  <span className="bg-[#f8f9fb] px-3 py-2 rounded-lg border border-gray-100 text-wine">
                    Surface Treatment
                  </span>{" "}
                  →
                  <span className="bg-[#f8f9fb] px-3 py-2 rounded-lg border border-gray-100">
                    Packaging
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#f8f9fb] p-8 rounded-2xl border-l-4 border-wine text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="font-black text-xl md:text-2xl">
                Are you a mica mine, cobbing unit or grinding processor in
                Jharkhand, AP or Rajasthan?
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

      {/* 🏭 Industry Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter mb-4">
              Industry <span className="text-wine">Applications</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Mica has more diverse end-use industries than almost any other
              mineral. We cater to exact specifications.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                t: "Cosmetics & Personal Care",
                d: "EU/USA/Japan markets. Wet ground muscovite & TiO₂-coated pearlescent mica for eyeshadow, foundation, blush. Key concerns: heavy metals (EU 1223/2009 limits), particle size, ethical sourcing, REACH.",
                icon: <Icons.Cosmetics />,
              },
              {
                t: "Paints & Coatings",
                d: "Dry/wet ground mica as functional extender — improves barrier properties, reduces cracking, enhances sheen. High aspect ratio critical. Used in automotive primers, marine paints.",
                icon: <Icons.Paint />,
              },
              {
                t: "Electrical Insulation",
                d: "Sheet mica & splittings for commutator mica, slot wedges, heating elements, capacitor plates. Phlogopite preferred for high-temp (500-1000°C). Dielectric strength is key.",
                icon: <Icons.Electrical />,
              },
              {
                t: "Electronics & EV Batteries",
                d: "Mica tape for cable wrapping, thermal management sheets, fire-resistant barriers in lithium-ion battery packs. Fast-growing demand from EV sector.",
                icon: <Icons.Electronics />,
              },
              {
                t: "Plastics & Rubber",
                d: "Dry ground mica as reinforcing filler — improves stiffness, reduces warpage in injection-moulded nylon/PP; reduces creep in HDPE pipes.",
                icon: <Icons.Plastic />,
              },
              {
                t: "Construction",
                d: "Mica in joint compounds (drywall finishing), acoustic ceiling tiles, roofing felt. US and European construction sector is a large buyer of dry ground mica.",
                icon: <Icons.Building />,
              },
              {
                t: "Welding Electrodes & Foundry",
                d: "Phlogopite mica powder as flux coating binder; improves slag fluidity and arc stability.",
                icon: <Icons.Shield />,
              },
              {
                t: "Candle & Soap Making",
                d: "Cosmetic-grade mica powder for craft and D2C segments (Amazon, Etsy suppliers).",
                icon: <Icons.Check />,
              },
            ].map((app, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                variant="zoomIn"
                className="h-full"
              >
                <div className="bg-[#f8f9fb] p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-wine/30 transition-all group h-full flex flex-col">
                  <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-wine group-hover:text-white transition-colors">
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

      {/* ⭐ Types of Mica We Export */}
      <section className="py-24 bg-[#f8f9fb] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter mb-4">
              Types of Mica <span className="text-wine">We Export</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal
              delay={100}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <h3 className="text-2xl font-black text-wine mb-4">
                1. Muscovite Mica
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Most widely used. Excellent electrical insulation and high
                dielectric strength.
              </p>
              <p className="font-bold text-xs uppercase tracking-widest text-navy mb-2">
                Applications:
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-wine"></div>{" "}
                  Electrical insulation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-wine"></div>{" "}
                  Paints & coatings
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-wine"></div>{" "}
                  Plastics & rubber
                </li>
              </ul>
            </Reveal>

            <Reveal
              delay={200}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <h3 className="text-2xl font-black text-wine mb-4">
                2. Phlogopite Mica
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Better thermal resistance than muscovite. Suitable for
                high-temperature applications.
              </p>
              <p className="font-bold text-xs uppercase tracking-widest text-navy mb-2">
                Applications:
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-wine"></div>{" "}
                  Foundries
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-wine"></div>{" "}
                  Welding electrodes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-wine"></div> Heat
                  insulation systems
                </li>
              </ul>
            </Reveal>

            <Reveal
              delay={300}
              className="bg-navy p-10 rounded-3xl shadow-2xl border border-navy text-white relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-wine/20 rounded-full blur-[40px]"></div>
              <h3 className="text-2xl font-black text-white mb-4 relative z-10">
                3. Forms Available
              </h3>
              <ul className="space-y-4 text-sm text-gray-300 relative z-10 mt-6">
                <li className="flex items-center gap-3">
                  <Icons.Check /> Mica flakes (coarse / fine)
                </li>
                <li className="flex items-center gap-3">
                  <Icons.Check /> Mica powder (200 / 325 mesh / custom)
                </li>
                <li className="flex items-center gap-3">
                  <Icons.Check /> Mica sheets / blocks
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📸 Visual Gallery */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter mb-4">
              Visual <span className="text-wine">Gallery</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Explore our premium mica products and large-scale sourcing
              infrastructure.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                img: micaGallery3,
                title: "Fine Mica Powder",
                desc: "Cosmetic & industrial grade powder",
              },
              {
                img: micaGallery4,
                title: "Sourcing Operations",
                desc: "Direct from Indian mica mines",
              },
              {
                img: "https://images.jdmagicbox.com/quickquotes/images_main/natural-mica-sheet-802724238-fha1g60f.jpg",
                title: "Natural Mica Sheet",
                desc: "Premium muscovite sheet mica for electrical insulation",
              },
              {
                img: "https://5.imimg.com/data5/SELLER/Default/2020/12/MK/YJ/YD/13213799/muscovite-super-white-mica-scrap.JPG",
                title: "Muscovite Super White Scrap",
                desc: "High-whiteness muscovite scrap for industrial processing",
              },
            ].map((item, i) => (
              <Reveal
                key={i}
                delay={i * 150}
                variant="zoomIn"
                className="group relative aspect-video overflow-hidden rounded-3xl shadow-xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <h4 className="text-white text-2xl font-black mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-24 bg-white">
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
                q: "What is the difference between muscovite and phlogopite mica?",
                a: "Muscovite offers better electrical insulation, while phlogopite performs better in high-temperature applications.",
              },
              {
                q: "What mesh sizes can you supply?",
                a: "We can supply mica powder from 100 mesh up to 500 mesh, including custom sizes based on your requirement.",
              },
              {
                q: "Do you provide samples before bulk orders?",
                a: "Yes, samples can be arranged for quality evaluation before confirming bulk shipments.",
              },
              {
                q: "What industries use mica?",
                a: "Mica is widely used in paints, plastics, rubber, electronics, cosmetics, and construction industries.",
              },
              {
                q: "What is the minimum order quantity?",
                a: "Typically, 1 x 20 FT container, but smaller trial quantities can be discussed.",
              },
              {
                q: "Can you supply consistent quality for repeat orders?",
                a: "Yes, we work with selected suppliers to maintain consistency across shipments.",
              },
              {
                q: "How is Indian mica different from other origins?",
                a: "Indian mica is known for its natural purity, cost competitiveness, and strong processing ecosystem.",
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

      {/* Call to Action */}
      <section className="py-20 bg-wine text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Source Premium Mica Direct from India
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
              Discuss your specific grade requirements, custom mesh sizes, and
              quarterly bulk contracts with our expert team.
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

export default Mica;
