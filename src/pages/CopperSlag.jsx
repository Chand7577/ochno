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

const CopperSlag = () => {
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/1/DE/QT/VF/4722109/copper-slag.jpg"
            alt="Copper Slag Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-4 py-1.5 bg-wine/20 border border-wine/50 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              FOB MUNDRA / NHAVA SHEVA
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              Copper Slag <span className="text-wine">Abrasive</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Graded Blasting Grit from India. Angular granules · Mohs hardness
              6–7 · Free silica &lt;0.1% · Container lots from 20 MT.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300">
              <Link
                to="/contact"
                className="bg-wine text-white px-8 py-4 rounded-full font-bold hover:bg-wine/90 transition-all shadow-lg hover:shadow-wine/50 text-lg"
              >
                Get a Quote / Request Sample
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-wine py-4 sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-white text-sm font-bold uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <Icons.Check /> Non-toxic, non-hazardous
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> MSDS available
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> SGS inspection on request
            </span>
          </div>
        </div>
      </div>

      {/* 📊 Trust Bar Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {[
              {
                value: "Available",
                label: "Monthly MT Output",
                sub: "Consistent factory supply",
              },
              {
                value: "Gulf & SE Asia",
                label: "Export Markets",
                sub: "UAE, Bangladesh, Vietnam etc.",
              },
              {
                value: "50kg & 1MT",
                label: "Packaging Options",
                sub: "Bags, Jumbo Bags, Bulk",
              },
              {
                value: "10-15 Days",
                label: "Lead Time",
                sub: "Fresh order to loading",
              },
            ].map((stat, idx) => (
              <Reveal
                key={idx}
                delay={idx * 100}
                variant="fadeUp"
                className="text-center pt-8 md:pt-0 first:pt-0 px-4"
              >
                <div className="text-4xl font-black text-navy mb-2">
                  {stat.value}
                </div>
                <div className="text-wine font-bold text-sm uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-500 text-xs">{stat.sub}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🔬 Product Specifications Section */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Product <span className="text-wine">Specifications</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-6"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                grade: "Fine Grade (G25)",
                size: "0.2 – 0.5 mm",
                profile: "1.0 – 2.5 mils",
                pressure: "80 – 90 PSI",
                bestFor: "Fine surface prep, pipelines",
                color: "border-wine",
              },
              {
                grade: "Medium Grade (G16)",
                size: "0.5 – 1.0 mm",
                profile: "2.5 – 4.0 mils",
                pressure: "90 – 100 PSI",
                bestFor: "General steel, tanks, bridges",
                color: "border-navy",
              },
              {
                grade: "Coarse Grade (G12)",
                size: "1.0 – 2.0 mm",
                profile: "3.5 – 5.0 mils",
                pressure: "100 – 110 PSI",
                bestFor: "Heavy rust, ship hulls",
                color: "border-gray-400",
              },
            ].map((item, idx) => (
              <Reveal
                key={idx}
                delay={idx * 150}
                variant="fadeUp"
                className="h-full"
              >
                <div
                  className={`flex flex-col bg-white p-8 rounded-3xl shadow-sm border-t-8 ${item.color} h-full hover:shadow-xl transition-all relative`}
                >
                  <h3 className="text-2xl font-black text-navy mb-4 pr-10">
                    {item.grade}
                  </h3>
                  <div className="w-12 h-1 bg-gray-100 mb-6"></div>

                  <div className="flex-1 space-y-4 mb-6">
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase">
                        Grit size
                      </span>
                      <p className="text-lg font-bold text-navy">{item.size}</p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase">
                        Surface profile
                      </span>
                      <p className="text-gray-600">{item.profile}</p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase">
                        Recommended pressure
                      </span>
                      <p className="text-gray-600">{item.pressure}</p>
                    </div>
                    <div className="bg-[#f8f9fb] p-3 rounded-xl border border-gray-100">
                      <span className="block text-xs font-bold text-wine uppercase">
                        Best for
                      </span>
                      <p className="text-navy text-sm font-medium">
                        {item.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fadeUp" delay={300}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-black text-navy mb-8 text-center">
                General Technical Data
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Hardness (Mohs)", value: "6.0 – 7.0" },
                  { label: "Specific gravity", value: "3.4 – 3.8 g/cc" },
                  { label: "Bulk density", value: "1.9 – 2.1 MT/m³" },
                  { label: "Free silica", value: "< 0.1%" },
                  { label: "Fe₂O₃ %", value: "50 – 60%" },
                  { label: "SiO₂ %", value: "25 – 35%" },
                  { label: "Colour", value: "Black / Dark Grey" },
                  { label: "Shape", value: "Angular, multi-faceted" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center bg-[#f8f9fb] p-4 rounded-xl border border-gray-50"
                  >
                    <span className="block text-xs font-bold text-wine uppercase mb-2">
                      {stat.label}
                    </span>
                    <p className="text-lg font-black text-navy">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-center gap-6">
                <span className="flex items-center justify-center gap-2">
                  <Icons.Check /> Non-magnetic
                </span>
                <span className="flex items-center justify-center gap-2">
                  <Icons.Check /> COA with every consignment
                </span>
                <span className="flex items-center justify-center gap-2">
                  <Icons.Check /> Custom size cuts available (10MT+)
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🚀 Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Where Copper Slag Abrasive is{" "}
              <span className="text-wine">Used</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "Shipbuilding & Ship Repair",
                img: "https://img.freepik.com/premium-photo/industrial-ship-repair-maintenance-executed-by-skilled-workers-dry-dock-marine-vessel_229760-1833.jpg",
                desc: "Hull cleaning, removing old paint and rust before repainting; standard blasting media in dry docks worldwide",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Copper slag is the globally preferred abrasive for marine
                      maintenance. Its high density and sharp angularity allow
                      it to strip heavy marine growth, old anti-fouling paints,
                      and deep-seated corrosion back to the white metal (SA
                      2.5/3.0) with minimal effort.
                    </p>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-sm uppercase tracking-wider">
                        Key Benefit:
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Achieves a consistent 3.5–5.0 mil profile required for
                        heavy-duty marine epoxy systems in dry docks.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                t: "Oil & Gas",
                img: "https://images.livemint.com/img/2021/08/29/original/423faf38-08dc-11ec-b8f3-bbff6bb4670c_1630264942273.jpg",
                desc: "Pipeline external coating preparation, refinery tank cleaning, offshore platform maintenance",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Used extensively for pipeline external coating preparation
                      and maintenance of offshore platforms. The low free silica
                      content (&lt;0.1%) makes it a safer alternative to sand
                      for open blasting in refineries and coastal facilities.
                    </p>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-sm uppercase tracking-wider">
                        Process:
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Removes mill scale and corrosion from large storage tank
                        surfaces and pipeline joints before protective wrapping.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                t: "Steel Fabrication",
                img: "https://tjsvgalvan.com/wp-content/uploads/2020/05/Fabrication-4.jpg",
                desc: "Surface preparation before primer and protective coating application on structural steel",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Essential for structural steel fabrication where a strong
                      mechanical bond is required for primers. It effectively
                      removes processing scale and prepares the steel for
                      welding or high-performance coating.
                    </p>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-sm uppercase tracking-wider">
                        Surface Prep:
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Provides an ideal anchor pattern for architectural
                        coatings and fireproofing materials.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                t: "Infrastructure",
                img: "https://www.wbcsd.org/wp-content/uploads/2024/11/Natural-Infrastructure-for-Business_i1500-jpg.webp",
                desc: "Heavy-duty rust removal and surface profiling for bridges, water towers before painting",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Trusted for large-scale infrastructure projects like
                      bridges and water storage towers. Its rapid cutting speed
                      reduces labor hours on massive surface areas, making
                      project timelines more manageable.
                    </p>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-sm uppercase tracking-wider">
                        Standard:
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Commonly used in maintenance projects involving old lead
                        paints (following proper environmental controls).
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                t: "Concrete & Construction",
                img: "https://i0.wp.com/civilblog.org/wp-content/uploads/2015/03/Inspection-during-concreting.jpg?fit=640%2C480&ssl=1",
                desc: "Partial sand replacement in ready-mix (BIS IS 383:2016); road base construction; railroad ballast",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Beyond abrasive blasting, copper slag is an approved fine
                      aggregate substitute in concrete per Indian Standard BIS
                      IS 383:2016. It enhances the density and durability of
                      concrete mixtures.
                    </p>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-sm uppercase tracking-wider">
                        Sustainability:
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        A sustainable alternative to river sand that increases
                        compressive strength in paved blocks and road bases.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                t: "Automotive & Industrial",
                img: "https://ichef.bbci.co.uk/news/480/cpsprodpb/13315/production/_108731687_gettyimages-1161457925.jpg.webp",
                desc: "Component deburring, descaling castings, general surface finishing",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Used in industrial wheel blast and air blast systems for
                      de-scaling large castings and deburring metal components.
                      The fine grades provide a smooth, uniform finish for
                      precision parts.
                    </p>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-sm uppercase tracking-wider">
                        Finishing:
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Ideal for achieving specific surface textures on
                        industrial machinery before final finishing.
                      </p>
                    </div>
                  </div>
                ),
              },
            ].map((app, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <div
                  className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-[#f8f9fb] h-full flex flex-col cursor-pointer"
                  onClick={() => setSelectedApp(app)}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={app.img}
                      alt={app.t}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-xl font-black text-navy mb-3">
                      {app.t}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      {app.desc}
                    </p>
                    <div className="flex justify-center mt-3 h-6">
                      <span className="text-xs uppercase tracking-widest font-bold text-wine opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        View Details &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Why Buy From Us */}
      <section className="py-24 bg-navy text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Why Buy <span className="text-wine">From Us</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal variant="fadeLeft">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md h-full">
                <h3 className="text-2xl font-bold text-wine mb-6 flex items-center gap-3">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Supply & Quality
                </h3>
                <ul className="space-y-4">
                  {[
                    "Consistent source — same smelter origin, stable chemistry lot to lot",
                    "Properly graded and screened — no oversized or fines contamination",
                    "COA with every shipment — Fe₂O₃, SiO₂, free silica, size fraction",
                    "SGS / Intertek pre-shipment inspection available on request",
                    "Sample dispatched within 3–4 days before bulk order",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className="mt-1 text-wine shrink-0">
                        <Icons.Check />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fadeRight">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md h-full">
                <h3 className="text-2xl font-bold text-wine mb-6 flex items-center gap-3">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                  Logistics & Commercial
                </h3>
                <ul className="space-y-4">
                  {[
                    "Container lots from 20 MT — no need to fill a vessel",
                    "FOB Mundra / Nhava Sheva / Chennai — all major trade lanes covered",
                    "50kg bags or 1MT jumbo bags — your choice of packaging",
                    "MSDS, BL, COA, packing list — complete documentation set",
                    "Payment on committed timelines — reliable, transparent settlement",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className="mt-1 text-wine shrink-0">
                        <Icons.Check />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🌍 Target Export Markets */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Target Export <span className="text-wine">Markets</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                region: "UAE, Saudi Arabia, Qatar, Oman",
                desc: "Large ship repair yards, oil refinery maintenance, pipeline projects; active importers of Indian abrasive copper slag in 20–25 MT container lots.",
              },
              {
                region: "Bangladesh",
                desc: "World's largest ship-breaking industry (Chittagong), active ship repair sector; consistent, high-volume buyer of Indian copper slag; road import via Petrapole / Benapole also possible.",
              },
              {
                region: "Indonesia, Vietnam, Malaysia",
                desc: "Growing shipbuilding and steel fabrication industries; increasing demand for cost-effective blasting media.",
              },
              {
                region: "India Domestic",
                desc: "Shipyards (Vizag, Kochi, Goa, Mumbai), oil refineries (HPCL, BPCL, IOCL contractors), infrastructure contractors; road transport delivery available.",
              },
            ].map((market, i) => (
              <Reveal key={i} delay={i * 100} variant="fadeUp">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex gap-6 items-start h-full group hover:border-wine transition-colors">
                  <div className="w-12 h-12 rounded-full bg-wine/10 text-wine flex items-center justify-center shrink-0 group-hover:bg-wine group-hover:text-white transition-colors">
                    <Icons.MapPin />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy mb-3">
                      {market.region}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {market.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 📦 Packaging, Logistics & Documentation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-12 text-center">
            <h2 className="text-4xl font-black text-navy mb-4">
              Packaging, Logistics &{" "}
              <span className="text-wine">Documentation</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="bg-[#f8f9fb] p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <Reveal variant="fadeRight" delay={100}>
                  <div>
                    <h4 className="text-lg font-bold text-wine mb-2 uppercase tracking-wider text-sm flex items-center gap-2">
                      Packaging
                    </h4>
                    <ul className="space-y-2 text-gray-600 font-medium">
                      <li>• 50kg woven PP bags with PE liner (standard)</li>
                      <li>• 500kg / 1MT jumbo bags</li>
                      <li>• Palletised on request</li>
                    </ul>
                  </div>
                </Reveal>
                <Reveal variant="fadeRight" delay={200}>
                  <div>
                    <h4 className="text-lg font-bold text-wine mb-2 uppercase tracking-wider text-sm flex items-center gap-2">
                      Shipping & Transit
                    </h4>
                    <ul className="space-y-2 text-gray-600 font-medium">
                      <li>
                        • <strong>FCL:</strong> 20-foot container holds approx
                        22–24 MT
                      </li>
                      <li>
                        • <strong>Ports:</strong> Mundra (primary), Nhava Sheva
                        / JNPT, Chennai
                      </li>
                      <li>
                        • <strong>Incoterms:</strong> FOB, CFR, CIF
                      </li>
                      <li>
                        • <strong>Transit:</strong> Gulf 10-14 days | Bangladesh
                        7-10 days | SE Asia 15-20 days
                      </li>
                    </ul>
                  </div>
                </Reveal>
              </div>
              <div className="space-y-8">
                <Reveal variant="fadeLeft" delay={100}>
                  <div>
                    <h4 className="text-lg font-bold text-wine mb-2 uppercase tracking-wider text-sm flex items-center gap-2">
                      Documentation Required
                    </h4>
                    <ul className="space-y-2 text-gray-600 font-medium">
                      <li>• Bill of Lading & Commercial Invoice</li>
                      <li>• Certificate of Analysis & Packing List</li>
                      <li>• MSDS & Country of Origin</li>
                      <li>• SGS Report (if requested)</li>
                    </ul>
                  </div>
                </Reveal>
                <Reveal variant="fadeLeft" delay={200}>
                  <div>
                    <h4 className="text-lg font-bold text-wine mb-2 uppercase tracking-wider text-sm flex items-center gap-2">
                      Customs & Compliance
                    </h4>
                    <ul className="space-y-2 text-gray-600 font-medium">
                      <li>
                        • <strong>HS Code:</strong> 2620.30 (slag, ash from
                        copper manufacturing)
                      </li>
                      <li>• Non-hazardous, non-radioactive</li>
                      <li>• Clean customs clearance at most destinations</li>
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ❓ FAQ */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Frequently Asked <span className="text-wine">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                q: "1. What grit size should I use for ship hull blasting?",
                a: "For ship hull cleaning and heavy rust removal, the coarse grade (G12, 1.0–2.0mm) is recommended — it delivers a 3.5–5.0 mil surface profile at 100–110 PSI, which is the standard requirement for marine coating systems. For pipeline or finer surface work, the medium grade (G16, 0.5–1.0mm) is the correct choice.",
              },
              {
                q: "2. Is Indian copper slag non-hazardous — will it clear customs without issues?",
                a: "Yes. Indian copper slag has free silica below 0.1% — well within safe limits — and is classified as non-hazardous and non-toxic under international standards. It clears customs without special permits in UAE, Bangladesh, Indonesia and most other destinations. We provide a full MSDS and non-hazardous declaration with every shipment.",
              },
              {
                q: "3. What is the minimum order quantity and can I get a sample first?",
                a: "Minimum bulk order is 20 MT (one 20-foot container). We dispatch a 1 kg sample via DHL or courier within 3–4 days so you can test the grit size and quality before committing. Sample comes with a full COA showing chemistry and size analysis.",
              },
              {
                q: "4. Can copper slag be used as a sand replacement in concrete?",
                a: "Yes — copper slag is approved as a fine aggregate substitute in concrete under BIS IS 383:2016 in India, and research confirms it improves compressive and flexural strength. It is increasingly used in government road projects and ready-mix concrete plants as a sustainable alternative to natural river sand. Contact us for construction-grade pricing, which differs from abrasive grade.",
              },
              {
                q: "5. What documents do you provide for export shipments?",
                a: "Every export shipment comes with: Bill of Lading, Certificate of Analysis, commercial invoice, packing list, MSDS, Country of Origin certificate, and a non-hazardous declaration. SGS or Intertek pre-shipment inspection can be arranged on request at buyer's cost. LC documentation is handled as per your bank's requirements.",
              },
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 100} variant="fadeUp">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold text-navy mb-3">{faq.q}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🏁 CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal variant="fadeUp">
            <div className="bg-navy rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-wine/20 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Ready to Source{" "}
                  <span className="text-wine">Copper Slag?</span>
                </h2>
                <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                  Join hundreds of shipyards and industrial facilities worldwide
                  sourcing high-grade Indian blasting grit.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    to="/rfq"
                    className="w-full sm:w-auto bg-wine text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:text-navy transition-all transform hover:-translate-y-1 shadow-lg shadow-wine/20"
                  >
                    Request Bulk Quote
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto border-2 border-white/20 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:text-navy transition-all transform hover:-translate-y-1"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
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
            <div className="h-64 relative border-b border-gray-100">
              <img
                src={selectedApp.img}
                alt={selectedApp.t}
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
            </div>
            <div className="p-10">
              <h4 className="text-3xl font-black text-navy mb-4">
                {selectedApp.t}
              </h4>
              <div className="w-16 h-1.5 bg-wine rounded-full mb-6"></div>
              {selectedApp.details}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CopperSlag;
