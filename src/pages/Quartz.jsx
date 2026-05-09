import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import combinedImg from "../assets/combined.jpg";

// â”€â”€ Icons â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const Icons = {
  MapPin: () => (
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
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  Grade: () => (
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
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  Energy: () => (
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
  Document: () => (
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
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
};

// â”€â”€ Reveal Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

const Quartz = () => {
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />
      {/* ðŸš€ Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1625479610681-f789345a8157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVhcnR6fGVufDB8fDB8fHww"
            alt="Quartz Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-4 py-1.5 bg-wine/20 border border-wine/50 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              Industrial Minerals & Materials
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              Quartz & <span className="text-wine">Quartzite</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              High-purity silicon dioxide solutions tailored for global
              metallurgy, glass production, and electronics industries.
            </p>
          </Reveal>
          <Reveal
            variant="fadeUp"
            delay={800}
            className="mt-12 flex justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-wine text-white px-8 py-4 rounded-xl font-bold hover:bg-wine/90 transition-all shadow-xl hover:-translate-y-1"
            >
              Request Samples
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ðŸ’Ž Difference Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeLeft">
              <div className="max-w-xl">
                <h2 className="text-4xl font-black text-navy mb-6">
                  Understanding the{" "}
                  <span className="text-wine">Difference</span>
                </h2>
                <div className="w-20 h-1.5 bg-wine rounded-full mb-8"></div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  While often confused, Quartz and Quartzite serve distinct
                  industrial roles based on their geological formation and
                  chemical purity levels. Knowing which one fits your specific
                  industry is key to optimizing production.
                </p>

                <div className="space-y-6">
                  <div className="bg-[#f8f9fb] p-6 rounded-2xl border-l-4 border-navy">
                    <h3 className="font-bold text-navy text-xl mb-2">
                      Quartz (Pure Mineral)
                    </h3>
                    <p className="text-gray-600 text-sm">
                      High chemical purity with SiOâ‚‚ levels ranging from{" "}
                      <strong>96% to 99.9%</strong>. Primary usage includes
                      glass manufacturing, electronics, and precision optics.
                    </p>
                  </div>
                  <div className="bg-[#f8f9fb] p-6 rounded-2xl border-l-4 border-wine">
                    <h3 className="font-bold text-navy text-xl mb-2">
                      Quartzite (Metamorphic Rock)
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Stronger and highly heat-resistant with SiOâ‚‚ levels of{" "}
                      <strong>94% to 96%</strong>. Ideal for heavy-duty steel
                      smelting and refractory linings.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeRight" delay={300}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-wine/10 rounded-3xl blur-2xl group-hover:bg-wine/20 transition-all"></div>
                <img
                  src={combinedImg}
                  alt="Quartz Samples"
                  className="relative w-full rounded-2xl shadow-2xl border border-gray-100"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ðŸ‡®ðŸ‡³ Quartz in India (Regional Grades) */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Quartz Sourcing <span className="text-wine">in India</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              India is a powerhouse of diverse quartz minerals. We strategically
              source specific grades from distinct geological regions to
              perfectly match varying industrial requirements.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal delay={100} variant="fadeUp">
              <div className="flex gap-5 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all h-full">
                <div className="mt-1">
                  <Icons.MapPin />
                </div>
                <div>
                  <h4 className="text-xl font-black text-navy mb-1">
                    Andhra Pradesh / Telangana
                  </h4>
                  <p className="text-sm font-bold text-wine mb-3 uppercase tracking-wider">
                    High Purity Quartz (99â€“99.9% SiOâ‚‚)
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Produces premium export and glass grade material. Due to its
                    exceptional chemical purity, it is highly sought after
                    globally, though availability remains limited.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200} variant="fadeUp">
              <div className="flex gap-5 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all h-full">
                <div className="mt-1">
                  <Icons.MapPin />
                </div>
                <div>
                  <h4 className="text-xl font-black text-navy mb-1">
                    Tamil Nadu / Karnataka
                  </h4>
                  <p className="text-sm font-bold text-wine mb-3 uppercase tracking-wider">
                    Industrial Quartz
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Mines in this southern region yield excellent
                    industrial-grade quartz, which is extensively utilized for
                    ceramic manufacturing and performance ferro-alloy
                    applications.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300} variant="fadeUp">
              <div className="flex gap-5 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all h-full">
                <div className="mt-1">
                  <Icons.MapPin />
                </div>
                <div>
                  <h4 className="text-xl font-black text-navy mb-1">
                    Rajasthan / Gujarat
                  </h4>
                  <p className="text-sm font-bold text-wine mb-3 uppercase tracking-wider">
                    Quartz & Quartzite
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A highly active, durable mining belt producing hard quartz
                    and quartzite rocks perfectly suited for aggressive steel
                    manufacturing and refractory ramming mass.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400} variant="fadeUp">
              <div className="flex gap-5 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all h-full">
                <div className="mt-1">
                  <Icons.MapPin />
                </div>
                <div>
                  <h4 className="text-xl font-black text-navy mb-1">
                    Odisha / Northeast
                  </h4>
                  <p className="text-sm font-bold text-wine mb-3 uppercase tracking-wider">
                    Medium Grade
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    These sectors supply large quantities of medium-grade bulk
                    silica elements, forming the backbone material for foundry
                    casting and civil construction industries.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ðŸ­ Industry Usage by Grade */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Industry Usage <span className="text-wine">by Grade</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Steel & Ferro Alloys",
                desc: "Quartzite lumps (95â€“98% SiOâ‚‚) are used as a fluxing agent in steel production to remove impurities.",
                icon: <Icons.Energy />,
                img: "https://tiimg.tistatic.com/fp/2/004/371/ferrous-alloys-070.jpg",
                spec: "Quartzite Lumps (95â€“98% SiOâ‚‚). We ensure hard, blocky lumps structurally stable enough to withstand severe blast furnace impacts without prematurely reducing to powder.",
                purpose:
                  "Serves as an essential metallurgical fluxing agent. Upon melting, the high silica binds with iron, aluminum, and other basic oxides to form easily removable slag, effectively purifying the base molten steel and forming high-quality ferro-silicon alloys.",
              },
              {
                title: "Glass Industry",
                desc: "High purity quartz (>99.5% SiOâ‚‚, low Fe) is the primary raw material for high-quality container and flat glass.",
                icon: <Icons.Grade />,
                img: "https://www.filmingindo.com/wp-content/uploads/2020/07/Firozabad-the-City-of-Glass-3.jpg",
                spec: "High Purity Quartz Sand (>99.5% SiOâ‚‚). The critical parameter here is ultra-low Iron Oxide (< 0.02% Feâ‚‚Oâ‚ƒ) and Aluminum traces.",
                purpose:
                  "High-grade silica acts as the fundamental network former and literal structural backbone for flat glass, container glass, and specialty optics. High SiO2 with low impurities ensures absolute transparency and extreme chemical durability of the final glass.",
              },
              {
                title: "Solar & Electronics",
                desc: "Ultra-high purity quartz (>99.9%) is required for manufacturing semiconductors and photovoltaic cells.",
                icon: <Icons.Energy />,
                img: "https://images.unsplash.com/photo-1615630859219-0459703c34e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBhbmQlMjBlbGVjdHJvbmljc3xlbnwwfHwwfHx8MA%3D%3D",
                spec: "Ultra-High Purity Quartz Minerals (>99.9% SiOâ‚‚). Refined to the particle level containing absolute minimum to zero parts-per-million of trace transitional metals.",
                purpose:
                  "Melted down to manufacture highly sensitive monocrystalline silicon wafers, advanced semiconductors, and photovoltaic (solar) cells. Exceptional purity is non-negotiable, as microscopic trace elements drastically disrupt electrical conductivity and compromise solar panel efficiency.",
              },
              {
                title: "Refractories",
                desc: "Used in furnace linings and ramming mass due to extreme thermal stability and resistance to chemical attack.",
                icon: <Icons.Globe />,
                img: "https://img2.exportersindia.com/product_images/bc-small/2022/11/10806544/img_202211-1667996110_6507208_1703344.jpg",
                spec: "Hard Quartzite & Fine Quartz Ramming Mass (94-98% SiOâ‚‚). Strictly controlled high thermal parameters and refractoriness.",
                purpose:
                  "Heavily utilized to line induction furnaces, kilns, and create ramming mass matrices. Its tremendous thermal stability, volume expansion properties, and heat-resistance allow the furnace walls to survive operations at 1700Â°C+ without catastrophic structural melting or degradation.",
              },
              {
                title: "Foundry & Casting",
                desc: "Silica sand and quartz grains provide the necessary structural integrity for high-precision molds.",
                icon: <Icons.Document />,
                img: "https://akpferrocast.com/wp-content/uploads/2024/08/castiron.webp",
                spec: "Premium Silica Sand & Micro-Quartz Grains (96-98% SiOâ‚‚). Must feature uniform grain size, sub-angular grain shapes, and high thermal resistance.",
                purpose:
                  "Packed tightly around industrial metal patterns alongside binding agents to create high-precision, heat-resistant casting molds for molten metal pouring. The uniform quartz size allows built-up gases to safely escape during pouring while preventing the mold from prematurely fusing with the molten metal.",
              },
              {
                title: "Chemicals",
                desc: "Used as a raw material for silicon-based chemical production and performance fillers.",
                icon: <Icons.Grade />,
                img: "https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlbWljYWxzfGVufDB8fDB8fHww",
                spec: "Micronized Quartz Powder / Industrial Silica Powder (98%+ SiOâ‚‚). Inert and flawlessly milled to specific micron particle sizes.",
                purpose:
                  "Serves inherently as a foundational raw material component to produce sodium silicate, high-grade silica gels, silicone formulas, and specialized fertilizers. It also acts as an inert reinforcing filler enhancing density in paints, advanced rubber, and industrial epoxies.",
              },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 100} variant="zoomIn">
                <div
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all h-full group flex flex-col cursor-pointer relative"
                  onClick={() => setSelectedApp(item)}
                >
                  <div className="absolute inset-0 bg-navy/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-sm">
                    <span className="text-white font-bold tracking-widest uppercase border border-white/40 px-6 py-3 rounded-full">
                      Explore Technical Specs
                    </span>
                  </div>
                  <div className="p-8 pb-4 relative z-0">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-navy mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-auto overflow-hidden h-48 relative z-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ðŸ“¦ Forms & Sizing Section */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wine/20 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <Reveal variant="fadeLeft" className="md:w-1/2">
              <h2 className="text-4xl font-black mb-8">
                Available Sizes <span className="text-wine">& Forms</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 font-light">
                We supply Quartz and Quartzite in multiple forms to suit your
                specific operational needs, from bulk smelting to precision
                manufacturing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Grit / Grains",
                    line: "Precision sized particles, extensively used in foundry casting molds, water filtration layers, and advanced texturing.",
                  },
                  {
                    title: "Lumps",
                    line: "Aggregated large sizes optimized exclusively for heavy-duty steel furnaces, smelting operations, and ferro-alloys.",
                  },
                  {
                    title: "Powder / Micronized",
                    line: "Ultra-fine grounding required for delicate applications in the paint, pigment, and specialty chemical industries.",
                  },
                  {
                    title: "Blocks",
                    line: "Raw or sawn solid natural quartzite blocks meant for specialized construction linings and high-temperature masonry.",
                  },
                ].map((form, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md"
                  >
                    <h4 className="font-bold text-white mb-2">{form.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {form.line}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal variant="fadeRight" className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://plus.unsplash.com/premium_photo-1692592468351-5f63fa1e62a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVhcnR6fGVufDB8fDB8fHww"
                  alt="Quartz 1"
                  className="rounded-2xl shadow-2xl"
                />
                <img
                  src="https://plus.unsplash.com/premium_photo-1707074548959-12771d64799a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVhcnR6aXRlfGVufDB8fDB8fHww"
                  alt="Quartz 2"
                  className="rounded-2xl shadow-2xl mt-8"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ðŸ† Why Buyers Choose Ochnology â€” Quartz */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-wine/10 border border-wine/20 text-wine rounded-full text-xs font-black tracking-widest uppercase mb-4">
              Glass, Steel & Solar Buyers Ask:
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">
              Why not source quartz{" "}
              <span className="text-wine">directly from the mine?</span>
            </h2>
            <div className="w-20 h-1 bg-wine mx-auto rounded-full mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Quartz mining in India is scattered, inconsistent, and
              grade-variable by geology. Here is why aggregated sourcing wins.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={100} className="my-14">
            <div className="bg-navy text-white rounded-3xl p-10 md:p-14 relative overflow-hidden max-w-4xl mx-auto">
              <div className="absolute top-0 right-0 w-72 h-72 bg-wine/20 rounded-full blur-[80px] -mr-36 -mt-36" />
              <div className="relative z-10">
                <p className="text-wine font-bold text-sm uppercase tracking-widest mb-4">
                  The Quartz Sourcing Reality
                </p>
                <p className="text-2xl md:text-3xl font-black leading-tight mb-6">
                  A glass plant in Vietnam needs SiO2 above 99.5% and Fe below
                  0.02%. Individual mines in Andhra Pradesh produce varying
                  grades within the same quarry.
                </p>
                <p className="text-gray-300 text-lg font-light leading-relaxed">
                  Individual mine owners sell what they have, not what you need.
                  Without a multi-mine aggregator who has tested across
                  geological belts, you risk importing a full container of
                  off-spec material that shuts down your furnace.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                badge: "Multi-Region Sourcing",
                title: "Grade-Matched Sourcing by Region",
                desc: "We source from AP/Telangana for glass-grade (99%+), Rajasthan for steel-grade quartzite, and Karnataka for foundry-grade silica. Our geological knowledge means you get the right grade for your application, not the closest available lot.",
              },
              {
                badge: "No Dependency Risk",
                title: "Multiple Mines, One Reliable Supply",
                desc: "A single mine can face monsoon shutdowns, blasting restrictions, or royalty disputes. We maintain active relationships with 15+ quarries so your quarterly order never misses a shipment due to any single source disruption.",
              },
              {
                badge: "Spec-Locked Pricing",
                title: "Prices Better Than Mine-Gate Rates",
                desc: "Individual buyers negotiating with a single mine owner get listed prices. We buy in consolidated volumes across multiple mines and pass the discount forward. Our CIF prices are comparable to or better than what you would pay FOB at the quarry.",
              },
              {
                badge: "Quality Verified Before Dispatch",
                title: "Pre-Shipment Lab Testing Included",
                desc: "Every shipment of quartz for glass or solar applications is tested at NABL-certified labs for SiO2, Fe2O3, Al2O3, and TiO2 before container loading. You receive the test report with the shipping documents, not after arrival.",
              },
              {
                badge: "Flexible Volumes",
                title: "Trial Lots to Full Bulk Contracts",
                desc: "Unlike mines that insist on minimum 100 MT truck lots of the same grade, we can supply a mixed container trial: Quartz lumps + quartzite + grit in one shipment. You qualify the material without committing to a full bulk order.",
              },
              {
                badge: "Ports & Docs Expertise",
                title: "Export-Ready for Glass, Solar & Steel",
                desc: "We handle the full export cycle including phytosanitary, weight certification, COO for preferential duty, and destination-specific packing. Our team at Vizag, Mundra, and Chennai ports ensures your container passes inspection without delays.",
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
                  Need a Specific SiO2 % for Your Industry?
                </h3>
                <p className="text-white/70 text-sm">
                  Tell us your application, grade, quantity, and destination. We
                  will source and quote within 48 hours.
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
                  href="https://wa.me/919258720699?text=I%20need%20Quartz%20from%20India.%20Please%20share%20pricing%20and%20grade%20details."
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

      {/* ❓ Frequently Asked Questions */}
      <section className="py-24 bg-[#f8f9fb] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Frequently Asked <span className="text-wine">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-6"></div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                q: "What is the difference between quartz and quartzite?",
                a: "Quartz is a naturally occurring mineral (SiO₂), while quartzite is a metamorphic rock formed from sandstone under high pressure and temperature. Quartz is typically used in powders and granules, whereas quartzite is used in lumps for industrial and refractory applications."
              },
              {
                q: "What industries use quartz and quartzite?",
                a: "They are widely used in Glass manufacturing, Ceramics and tiles, Ferroalloys and steel industry, Foundries, Refractories, Engineered stone/slabs, and Paints and coatings."
              },
              {
                q: "What specifications are important when buying quartz?",
                a: "Key parameters include SiO₂ purity (typically 98%–99.9%), Fe₂O₃ content (critical for glass/ceramics), Particle size (powder, granules, lumps), Whiteness, and Moisture content."
              },
              {
                q: "What specifications are important for quartzite?",
                a: "Important factors include SiO₂ content (generally 95%+), Size (10–50 mm, 20–80 mm, etc.), Low impurities (Fe, Al₂O₃), and High thermal resistance (for refractory use)."
              },
              {
                q: "Do you supply quartz and quartzite in bulk quantities?",
                a: "Yes. We handle bulk supply for both domestic and export markets. Typical volumes range from 1 container to 100+ MT per month, depending on grade and application."
              },
              {
                q: "Can you supply customized sizes and specifications?",
                a: "Yes. We supply Lumps (various size ranges), Granules, and Powder (custom mesh sizes). Specifications can be tailored based on end-use industry requirements."
              },
              {
                q: "Do you provide test reports and samples?",
                a: "Yes. We provide COA (Certificate of Analysis), product photos and videos, and physical samples for approval before order confirmation."
              },
              {
                q: "Do you export quartz and quartzite outside India?",
                a: "Yes. We export to multiple countries and also work with international buyers looking for reliable Indian supply sources."
              },
              {
                q: "Can you help source quartz or quartzite from different origins?",
                a: "Yes. Apart from Indian material, we also assist in sourcing from international suppliers (including China and other regions) based on pricing and specification requirements."
              },
              {
                q: "What are the typical payment terms?",
                a: "Payment terms depend on order size and engagement structure. We work with standard industry practices suitable for bulk trade."
              },
              {
                q: "How do I choose the right quartz for my application?",
                a: "Selection depends on your industry: Glass requires high purity and low iron. Ceramics need controlled particle size and whiteness. Ferroalloys require specific lump sizes and high SiO₂. We can guide you based on your exact requirement."
              },
              {
                q: "Why should we work with Ochnology Solutions?",
                a: "We position ourselves as a supply partner, not just a trader. We offer multiple sourcing options (India + international), competitive pricing, consistent quality control, experience in bulk trade and logistics, and the ability to handle both small and large volume requirements."
              }
            ].map((faq, i) => (
              <Reveal key={i} variant="fadeUp" delay={i * 50}>
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-wine/20 transition-all">
                  <h4 className="text-navy font-black text-lg mb-3 flex items-start gap-3">
                    <span className="text-wine text-2xl leading-none">Q.</span>
                    {faq.q}
                  </h4>
                  <p className="text-gray-600 font-medium text-sm leading-relaxed pl-8">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 📞 Final CTA */}
      <section className="bg-wine py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Ready to Optimize Your Industrial Feedstock?
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
              Get in touch with our technical sales team for custom gradations,
              lab reports, and bulk pricing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/contact"
                className="bg-white text-wine px-10 py-5 rounded-2xl font-black hover:bg-navy hover:text-white transition-all shadow-2xl"
              >
                Contact Technical Sales
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
                WhatsApp Enquiry
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modal for App details */}
      {selectedApp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm"
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl transform transition-all scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-56 relative border-b border-gray-100">
              <img
                src={selectedApp.img}
                alt={selectedApp.title}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-black rounded-full p-2 backdrop-blur-md transition-colors shadow-lg border border-white/20"
                onClick={() => setSelectedApp(null)}
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-wine/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg border border-white/20">
                  {selectedApp.title}
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-5">
                <div className="bg-[#f8f9fb] p-5 rounded-2xl border border-gray-100">
                  <span className="block font-black text-navy mb-2 text-xs uppercase tracking-widest text-wine flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                    Required Specifications
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {selectedApp.spec}
                  </p>
                </div>

                <div className="bg-[#f8f9fb] p-5 rounded-2xl border border-gray-100">
                  <span className="block font-black text-navy mb-2 text-xs uppercase tracking-widest text-wine flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      ></path>
                    </svg>
                    Core Operational Purpose
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {selectedApp.purpose}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quartz;
