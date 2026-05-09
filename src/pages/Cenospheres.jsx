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
  Bolt: () => (
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
        d="M13 10V3L4 14h7v7l9-11h-7z"
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
        d="M12 14l9-5-9-5-9 5 9 5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
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
  Flame: () => (
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
        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z"
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

const Cenospheres = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "What are Cenospheres?",
      a: "Cenospheres are lightweight, hollow microspheres composed mainly of silica and alumina, obtained as a by-product from coal combustion in thermal power plants.",
    },
    {
      q: "What are the main uses of Cenospheres?",
      a: "Cenospheres are used in Oil & gas drilling (cementing), construction materials (lightweight concrete, plasters), paints and coatings, refractories, and polymer composites.",
    },
    {
      q: "What are the key advantages of Cenospheres?",
      a: "Key advantages include low density, high strength-to-weight ratio, thermal insulation properties, reduced material consumption, and improved workability in mixes.",
    },
    {
      q: "What specifications are important when buying Cenospheres?",
      a: "Important parameters include Density (bulk/true), Particle size distribution, Crush strength, SiO₂ and Al₂O₃ content, and Moisture.",
    },
    {
      q: "What grades of Cenospheres are available?",
      a: "Cenospheres are classified based on density (low, medium, high), size range (fine to coarse), and application-specific grades (oil well, construction, fillers).",
    },
    {
      q: "Do you supply Cenospheres in bulk quantities?",
      a: "Yes. We supply in bulk for domestic and export markets, from 1-2 MT trial orders to regular monthly container-level supply.",
    },
    {
      q: "What is the packaging of Cenospheres?",
      a: "Typically supplied in Jumbo bags (500–1000 kg) or customized packaging based on specific requirements.",
    },
    {
      q: "Can you ensure consistent quality?",
      a: "Yes. We work with reliable sources and ensure consistent grading, controlled density range, COA with each shipment, and sample approval before bulk supply.",
    },
    {
      q: "What are the payment terms?",
      a: "We follow structured trade terms: Advance payment, RTGS against dispatch/loading, or LC (Letter of Credit) for export orders.",
    },
    {
      q: "What makes Cenospheres pricing vary?",
      a: "Pricing depends on density (lower density = higher price), purity, quality, application grade, and availability from power plants.",
    },
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://3.imimg.com/data3/JS/HX/MY-1575378/cenosphere.jpg"
            alt="Cenospheres Microspheres"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-5 py-1.5 bg-wine text-white rounded-none text-xs font-black tracking-[0.3em] uppercase mb-8 shadow-2xl shadow-wine/40">
              Lightweight Fillers | Coal Fly Ash Derived
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">
              Premium <span className="text-wine">Cenospheres</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-lg md:text-2xl text-white/70 max-w-4xl mx-auto font-bold leading-relaxed mb-12 uppercase italic">
              High-Strength Hollow Microspheres for Oilfield, Construction,
              Paints & Plastics
            </p>
          </Reveal>
          <Reveal
            variant="fadeUp"
            delay={800}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link
              to="/rfq"
              className="bg-wine text-white px-10 py-5 font-black hover:bg-white hover:text-navy transition-all shadow-2xl"
            >
              BULK QUOTE
            </Link>
            <a
              href="https://wa.me/919258720699"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-10 py-4 font-black hover:bg-white hover:text-navy transition-all"
            >
              WHATSAPP SUPPORT
            </a>
          </Reveal>
        </div>
      </section>


      {/* 🔩 Premium Metallurgy Solutions Section */}
      <section className="py-24 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeLeft">
              <div className="space-y-6">
                <span className="bg-wine/10 text-wine px-4 py-1.5 rounded-none text-[10px] font-black uppercase tracking-widest inline-block">
                  Complementary Product Range
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter italic leading-tight">
                  High-Grade <span className="text-wine">Cast Iron Powder</span>
                </h2>
                <div className="w-20 h-2 bg-wine"></div>
                <p className="text-gray-600 text-lg font-medium leading-relaxed italic">
                  Beyond lightweight fillers, we provide precision-engineered metal powders for heavy industrial applications, including sintering, chemical production, and magnetic component manufacturing.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    "Sintered Parts",
                    "Chemical Catalysts",
                    "Magnetic Flux",
                    "Surface Coatings",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Icons.Check />
                      <span className="font-black text-navy text-xs uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeRight" className="relative">
              <div className="absolute inset-0 bg-wine/10 -rotate-3 scale-105"></div>
              <div className="relative border-8 border-white shadow-2xl overflow-hidden">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2024/7/438799829/DZ/II/NF/161492395/cast-iron-powder.jpg"
                  alt="Cast Iron Powder"
                  className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-navy/90 p-6 backdrop-blur-sm">
                  <p className="text-white text-xs font-black uppercase tracking-[0.2em] italic">Precision Metallurgy | Bulk Supply</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📖 Definition Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight italic">
                    What are{" "}
                    <span className="text-wine text-5xl">Cenospheres</span>?
                  </h2>
                  <div className="w-20 h-2 bg-navy rounded-full"></div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Cenospheres are lightweight, hollow, inert microspheres
                  derived from coal fly ash. Although they constitute only
                  **0.1% to 2% of fly ash by weight**, their unique properties
                  make selective extraction highly economically meaningful. They
                  are widely utilized as a precision filler material to reduce
                  weight, improve structural strength, and enhance insulation
                  without compromising performance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Icons.Check />
                    <span className="font-black text-navy text-xs uppercase tracking-widest">
                      Low Density Fillers
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icons.Check />
                    <span className="font-black text-navy text-xs uppercase tracking-widest">
                      High Compressive Strength
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal
              variant="fadeRight"
              delay={300}
              className="bg-navy p-12 text-white shadow-2xl"
            >
              <h3 className="text-2xl font-black mb-8 uppercase italic border-b border-wine pb-4">
                The Formation Sequence
              </h3>
              <div className="space-y-8 text-sm">
                <div className="flex gap-6">
                  <span className="text-wine font-black text-2xl shrink-0">
                    01
                  </span>
                  <p className="font-bold">
                    Coal particles melt into molten droplets within the 1,200°C
                    – 1,700°C combustion zone.
                  </p>
                </div>
                <div className="flex gap-6">
                  <span className="text-wine font-black text-2xl shrink-0">
                    02
                  </span>
                  <p className="font-bold">
                    Trapped internal gases—typically a mixture of **Nitrogen and
                    Carbon Dioxide**—expand, inflating the droplet.
                  </p>
                </div>
                <div className="flex gap-6">
                  <span className="text-wine font-black text-2xl shrink-0">
                    03
                  </span>
                  <p className="font-bold">
                    Surface tension retains the gas bubble, forming a symmetric
                    hollow sphere.
                  </p>
                </div>
                <div className="flex gap-6">
                  <span className="text-wine font-black text-2xl shrink-0">
                    04
                  </span>
                  <p className="font-bold">
                    Rapid cooling solidifies the glassy amorphous shell,
                    preserving the ultra-lightweight architecture.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📊 Technical Specifications */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:flex gap-16 items-start">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <Reveal variant="fadeLeft">
              <h2 className="text-4xl font-black text-navy mb-8 uppercase tracking-tight">
                Physical <span className="text-wine italic">Benchmarks</span>
              </h2>
              <div className="overflow-x-auto bg-white shadow-2xl border border-gray-100">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-navy text-white uppercase text-[10px] font-black tracking-widest shadow-lg">
                      <th className="py-5 px-6">Metric Properties</th>
                      <th className="py-5 px-6">Typical Range / Value</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      {
                        p: "Particle Diameter",
                        v: "10 – 500 μm (Avg: 50–200 μm)",
                      },
                      { p: "Bulk Density", v: "0.25 – 0.45 g/cm³" },
                      { p: "True Particle Density", v: "0.4 – 0.8 g/cm³" },
                      { p: "Shell Wall Thickness", v: "2 – 10 μm" },
                      { p: "Compressive Strength", v: "Up to 150 MPa" },
                      { p: "Melting Point", v: "1,200 – 1,500°C" },
                      { p: "Color Palette", v: "Grey, White, or Off-white" },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-4 px-6 font-bold text-navy uppercase text-xs">
                          {row.p}
                        </td>
                        <td className="py-4 px-6 text-wine font-black italic">
                          {row.v}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
          <div className="lg:w-1/2">
            <Reveal variant="fadeRight">
              <h2 className="text-4xl font-black text-navy mb-8 uppercase tracking-tight">
                Chemical <span className="text-wine italic">Matrix</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Silicon Dioxide (SiO₂)",
                    val: "50 – 65%",
                    color: "bg-navy",
                  },
                  {
                    label: "Aluminium Oxide (Al₂O₃)",
                    val: "25 – 35%",
                    color: "bg-wine",
                  },
                  {
                    label: "Iron Oxide (Fe₂O₃)",
                    val: "1 – 8%",
                    color: "bg-navy",
                  },
                  {
                    label: "Trace Oxides (CaO, MgO)",
                    val: "Remainder",
                    color: "bg-gray-200 text-navy",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`${item.color} ${item.color.includes("text-navy") ? "" : "text-white"} p-8 shadow-xl`}
                  >
                    <span className="block text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">
                      {item.label}
                    </span>
                    <span className="text-3xl font-black italic uppercase">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-white border border-gray-100 flex gap-4">
                <Icons.Bolt />
                <p className="text-sm text-gray-500 font-medium leading-relaxed italic">
                  The glassy amorphous aluminosilicate shell provides
                  exceptional chemical stability and resistance to most acids
                  and alkalis.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🏗️ Applications Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <Reveal variant="fadeUp">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">
              Global <span className="text-wine">Applications</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-bold uppercase tracking-widest text-xs">
              Versatility across high-performance industrial sectors.
            </p>
          </Reveal>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              t: "Construction",
              d: "Incorporated into lightweight concrete, plaster, and grouting compounds to enhance thermal/acoustic insulation.",
            },
            {
              t: "Oil & Gas",
              d: "Used in cement slurries to control hydrostatic pressure during operations in deep wells, reducing formation fracturing.",
            },
            {
              t: "Aerospace",
              d: "Used in syntactic foams for buoyancy modules and ablative thermal protection systems in body panels.",
            },
            {
              t: "Paints & Coatings",
              d: "Ideal for exterior architectural coatings and marine applications to improve texture and insulation.",
            },
            {
              t: "Plastics",
              d: "Enhances stiffness and reduces shrinkage in thermoplastic and thermoset composites for industrial goods.",
            },
            {
              t: "Refractories",
              d: "Suitable for kiln furniture, insulation boards, and furnace linings due to low thermal conductivity.",
            },
          ].map((app, i) => (
            <Reveal
              key={i}
              delay={i * 100}
              variant="fadeUp"
              className="bg-white p-10 border border-gray-100 hover:border-wine transition-all hover:shadow-2xl group"
            >
              <h4 className="text-xl font-black text-navy mb-4 uppercase tracking-tight group-hover:text-wine transition-colors italic">
                {app.t}
              </h4>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {app.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 🌏 Sourcing Hub Section */}
      <section className="py-24 bg-navy text-white relative flex flex-col items-center text-center">
        <div className="absolute inset-0 opacity-50 bg-[url('https://tiimg.tistatic.com/fp/1/001/569/industrial-cenospheres-238.jpg')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal variant="zoomIn">
            <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter italic italic">
              Why Source from <span className="text-wine">India</span>?
            </h2>
            <p className="text-lg text-white/70 mb-12 font-bold leading-relaxed">
              India accounts for nearly **25% of global Cenosphere demand**. Our
              extensive network of coal-fired thermal power plants ensures an
              abundant, consistent supply of high-quality material that
              frequently outperforms competing origins.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 hover:border-wine transition-colors">
                <span className="block text-3xl font-black text-wine mb-2">
                  1/4th
                </span>
                <span className="text-[10px] uppercase font-black tracking-widest opacity-40">
                  World Export share
                </span>
              </div>
              <div className="p-8 border border-white/10 hover:border-wine transition-colors">
                <span className="block text-3xl font-black text-white mb-2">
                  TPP
                </span>
                <span className="text-[10px] uppercase font-black tracking-widest opacity-40">
                  Direct Plant Sourcing
                </span>
              </div>
              <div className="p-8 border border-white/10 hover:border-wine transition-colors">
                <span className="block text-3xl font-black text-wine mb-2">
                  SPEED
                </span>
                <span className="text-[10px] uppercase font-black tracking-widest opacity-40">
                  Streamlined Export Docs
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* ❓ Frequently Asked Questions */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
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
                  className={`bg-white border transition-all duration-500 ${activeFaq === idx ? "border-wine shadow-xl shadow-wine/5 ring-1 ring-wine/5" : "border-gray-100 shadow-sm"}`}
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
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${activeFaq === idx ? "bg-wine text-white rotate-180" : "bg-gray-50 text-navy"}`}
                    >
                      <Icons.Chevron className="w-4 h-4" />
                    </div>
                  </button>
                  <div
                    className={`px-8 transition-all duration-500 ease-in-out overflow-hidden ${activeFaq === idx ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="pt-6 border-t border-gray-100">
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

      {/* 🏁 Call to Action */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <Reveal variant="fadeLeft" className="lg:w-1/2">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-navy/40 mb-4 block">
              Ochnology Solution Pvt. Ltd.
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-navy mb-8 uppercase tracking-tighter italic">
              Logistics & <span className="text-wine">Freight</span> Mastery
            </h2>
            <p className="text-gray-500 font-bold mb-10 leading-relaxed text-lg italic uppercase">
              Backed by pre-established freight partnerships and streamlined
              export documentation, we move orders from plant to port faster
              than most exporters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/rfq"
                className="bg-navy text-white px-10 py-5 font-black hover:bg-wine transition-all shadow-2xl"
              >
                ORDER TRACKING
              </Link>
              <a
                href="https://wa.me/919258720699"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-navy text-navy px-10 py-4 font-black hover:bg-navy hover:text-white transition-all"
              >
                DIRECT LOGISTICS
              </a>
            </div>
          </Reveal>
          <Reveal
            variant="fadeRight"
            className="lg:w-1/2 bg-gray-50 p-12 shadow-2xl relative border-t-8 border-wine"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Icons.Atom />
            </div>
            <h3 className="text-xl font-black uppercase mb-8 italic tracking-widest text-navy">
              Global Service Regions
            </h3>
            <div className="space-y-4">
              {[
                { l: "Middle East", d: "Strategic Supply" },
                { l: "USA & Europe", d: "Full Compliance" },
                { l: "Southeast Asia", d: "Rapid Transit" },
                { l: "Documentation", d: "Lab-Tested Batches" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-gray-200 pb-2"
                >
                  <span className="text-navy font-bold uppercase text-xs tracking-tight">
                    {row.l}
                  </span>
                  <span className="font-black italic text-wine text-xs uppercase">
                    {row.d}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest italic leading-relaxed">
              *We deliver on time, every time. No intermediaries, full
              traceability.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Cenospheres;
