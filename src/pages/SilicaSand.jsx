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

//  Icons 
const Icons = {
  Glass: () => (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 000 2.828l.632.632A2 2 0 006.1 22h11.8a2 2 0 001.828-1.18l.632-.632a2 2 0 000-2.828l-2.387-2.387zM12 2v4m0 0a4 4 0 100 8 4 4 0 000-8z"
      />
    </svg>
  ),
  Foundry: () => (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 000 2.828l.632.632A2 2 0 006.1 22h11.8a2 2 0 001.828-1.18l.632-.632a2 2 0 000-2.828l-2.387-2.387zM12 2v4m0 0a4 4 0 100 8 4 4 0 000-8z"
      />
    </svg>
  ),
  Filter: () => (
    <svg
      className="w-8 h-8"
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
  Industrial: () => (
    <svg
      className="w-8 h-8"
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
      className="w-8 h-8"
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
      className="w-8 h-8"
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
  ChevronDown: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  ),
  ChevronUp: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  ),
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
};

//  Reveal Component 
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

  const variants = {
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

  const { h, v } = variants[variant] || variants.fadeUp;

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

const SilicaSand = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isExpanded, setIsExpanded] = useState(false);

  const specs = [
    {
      p: "SiO2 % min",
      glass: "99.5%",
      foundry: "98.0%",
      filtration: "98.0%",
      construction: "95.0%",
      paint: "97.0%",
    },
    {
      p: "Fe2O3 % max",
      glass: "0.020.05%",
      foundry: "0.10%",
      filtration: "0.10%",
      construction: "0.30%",
      paint: "0.10%",
    },
    {
      p: "Al2O3 % max",
      glass: "0.50%",
      foundry: "1.00%",
      filtration: "0.80%",
      construction: "2.00%",
      paint: "1.00%",
    },
    {
      p: "TiO2 % max",
      glass: "0.02%",
      foundry: "0.05%",
      filtration: "0.05%",
      construction: "0.10%",
      paint: "0.05%",
    },
    {
      p: "CaO + MgO % max",
      glass: "0.30%",
      foundry: "0.50%",
      filtration: "0.50%",
      construction: "1.00%",
      paint: "0.50%",
    },
    {
      p: "Loss on Ignition %",
      glass: "<=0.2%",
      foundry: "<=0.5%",
      filtration: "<=0.3%",
      construction: "<=1.0%",
      paint: "<=0.3%",
    },
    {
      p: "Clay Content % max",
      glass: "0.1%",
      foundry: "0.3%",
      filtration: "0.2%",
      construction: "0.5%",
      paint: "0.2%",
    },
    {
      p: "Moisture % max",
      glass: "0.5%",
      foundry: "1.0%",
      filtration: "0.5%",
      construction: "2.0%",
      paint: "0.5%",
    },
    {
      p: "AFS Grain Fineness",
      glass: "",
      foundry: "AFS 3070",
      filtration: "",
      construction: "",
      paint: "",
    },
    {
      p: "Grain Size / Mesh",
      glass: "150-600 m",
      foundry: "0.10.5mm",
      filtration: "0.41.4mm",
      construction: "04mm, 08mm",
      paint: "100-300 mesh",
    },
    {
      p: "Grain Shape",
      glass: "Sub-angular",
      foundry: "Sub-rounded",
      filtration: "Rounded",
      construction: "Angular",
      paint: "Ground Powder",
    },
    {
      p: "Colour",
      glass: "White",
      foundry: "Off-white",
      filtration: "White",
      construction: "Buff/Grey",
      paint: "White",
    },
    {
      p: "Standard",
      glass: "IS 3018",
      foundry: "AFS / IS 1918",
      filtration: "AWWA B100",
      construction: "IS 383",
      paint: "",
    },
  ];

  return (
    <div className="bg-[#fcfaff] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/*  Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/95 to-black/90 z-10"></div>
          <img
            src="https://uploadstarmaccom.blob.core.windows.net/uploads/2020/11/silica-sands-image.jpg"
            alt="Washed Silica Sand"
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wine/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-6 py-2 bg-white/10 border border-white/20 text-wine rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-xl">
              Industrial Minerals & Materials
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9]">
              SILICA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-wine to-purple-400">
                SAND
              </span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <span className="text-xl text-gray-300 font-light border-r border-white/20 pr-6">
                SiO2 &gt;= 99.5%
              </span>
              <span className="text-xl text-gray-300 font-light border-r border-white/20 pr-6">
                Fe2O3 &lt;= 0.02%
              </span>
              <span className="text-xl text-gray-300 font-light">
                Exported to 80+ Countries
              </span>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-12 italic">
              "Glass Grade - Foundry Grade - Filtration Grade - Construction
              Grade - Exporting Worldwide"
            </p>
          </Reveal>
          <Reveal
            variant="fadeUp"
            delay={800}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link
              to="/rfq"
              className="bg-wine text-white px-10 py-5 rounded-2xl font-black hover:bg-white hover:text-wine transition-all shadow-[0_20px_50px_rgba(136,32,74,0.3)] hover:-translate-y-1"
            >
              Request a Quote / Sample COA
            </Link>
            <a
              href="https://wa.me/919-258720-699"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-3"
            >
              WhatsApp Enquiry
            </a>
          </Reveal>

          <Reveal
            variant="zoomIn"
            delay={1000}
            className="mt-20 pt-10 border-t border-white/5"
          >
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:opacity-100 transition-opacity">
              {[
                "ISO 9001",
                "COA Per Lot",
                "AFS Tested",
                "MSDS Available",
                "Sample in 35 Days",
              ].map((text, i) => (
                <span
                  key={i}
                  className="text-white text-xs font-bold tracking-widest uppercase"
                >
                  {text}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/*  Section: India's Global Position */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft">
              <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 leading-tight">
                India: A Global <span className="text-wine">Powerhouse</span> in
                Silica Sand
              </h2>
              <p className="text-gray-600 text-lg font-light mb-8 leading-relaxed">
                India is among the world's top silica sand exporters, leading
                globally in sand export volumes. Silica sand is freely
                exportable from India with no government restrictions or
                licensing requirements for industrial grades.
              </p>
              <div className="space-y-6">
                {[
                  {
                    t: "Vast Deposits",
                    d: "Key deposits in Gujarat (Kutch/Rajkot), Rajasthan (Jaipur), and Andhra Pradesh (Nellore).",
                  },
                  {
                    t: "Market Growth",
                    d: "Projected to reach USD 38.3 Billion by 2034 with a 4.7% CAGR, driven by glass & foundry sectors.",
                  },
                  {
                    t: "Top Destinations",
                    d: "Regular shipments to Bangladesh, Nepal, UAE, Kenya, Qatar, Sri Lanka, and SE Asia.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-wine/10 text-wine rounded-xl flex items-center justify-center shrink-0">
                      <Icons.Globe />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-navy mb-1">
                        {item.t}
                      </h4>
                      <p className="text-gray-500 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal variant="zoomIn" className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
                <img
                  src="https://5.imimg.com/data5/ANDROID/Default/2025/3/494-999850/JU/KQ/DW/356-18867/product-jpeg.jpg"
                  alt="Silica Sand Mine"
                  className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <p className="text-2xl font-black mb-2">Strategic Sourcing</p>
                  <p className="text-gray-300 text-sm font-light">
                    Direct mine access ensures consistent quality and
                    competitive FOB pricing from Mundra, Kandla, and Vizag
                    ports.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/*  Section: Technical Specifications */}
      <section className="py-32 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Full Grade <span className="text-wine">Specifications</span>
            </h2>
            <p className="text-gray-500">
              Comprehensive technical analysis across various industrial grades.
            </p>
          </Reveal>

          <Reveal variant="zoomIn">
            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <Table className="min-w-[1000px]">
                  <TableHeader className="bg-navy">
                    <TableRow className="hover:bg-navy">
                      <TableHead className="text-white font-bold h-16 px-8">
                        Parameter
                      </TableHead>
                      <TableHead className="text-white font-bold">
                        Glass Grade
                      </TableHead>
                      <TableHead className="text-white font-bold">
                        Foundry Grade
                      </TableHead>
                      <TableHead className="text-white font-bold">
                        Filtration Grade
                      </TableHead>
                      <TableHead className="text-white font-bold">
                        Construction
                      </TableHead>
                      <TableHead className="text-white font-bold">
                        Paint & Coating
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(isExpanded ? specs : specs.slice(0, 7)).map(
                      (row, idx) => (
                        <TableRow
                          key={idx}
                          className={
                            idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                          }
                        >
                          <TableCell className="font-bold text-navy px-8 py-5 whitespace-nowrap">
                            {row.p}
                          </TableCell>
                          <TableCell className="text-wine font-bold">
                            {row.glass}
                          </TableCell>
                          <TableCell className="text-gray-600 font-medium">
                            {row.foundry}
                          </TableCell>
                          <TableCell className="text-gray-600 font-medium">
                            {row.filtration}
                          </TableCell>
                          <TableCell className="text-gray-500">
                            {row.construction}
                          </TableCell>
                          <TableCell className="text-gray-600 font-medium">
                            {row.paint}
                          </TableCell>
                        </TableRow>
                      ),
                    )}
                  </TableBody>
                </Table>
              </div>
              <div className="p-6 flex justify-center border-t border-gray-100 bg-gray-50/30">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2 text-wine font-black uppercase tracking-widest text-xs hover:gap-3 transition-all"
                >
                  {isExpanded ? (
                    <>
                      Show Less <Icons.ChevronUp />
                    </>
                  ) : (
                    <>
                      Read More <Icons.ChevronDown />
                    </>
                  )}
                </button>
              </div>
              <div className="p-10 bg-navy/5 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="font-black text-navy uppercase text-sm mb-4">
                    Additional Technical Notes
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Solar Glass: Ultra-low Fe2O3 (<=0.02%) for max transmission.",
                      "Custom Mesh: Available for orders of 5 MT and above.",
                      "Frac Sand: High sphericity and crush resistance on request.",
                      "COA: Includes SiO2, Fe2O3, Al2O3, TiO2, clay & moisture.",
                    ].map((note, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-600">
                        <div className="mt-1">
                          <Icons.Check />
                        </div>{" "}
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/50 p-6 rounded-2xl border border-white">
                  <p className="text-xs text-gray-500 leading-relaxed italic">
                    * All parameters are tested at ISO 17025 accredited labs.
                    AFS grain fineness number is verified using standard sieve
                    analysis protocols for foundry applications.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/*  Material Showcase - Added Product Image */}
          <Reveal variant="fadeUp" delay={200} className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
              <div className="rounded-[2rem] overflow-hidden shadow-lg border-4 border-[#f8f9fb]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0c1tCnatmwQ8PRoGFCaEInvSSm7tHs8mqdw&s"
                  alt="Silica Sand Close-up"
                  className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-navy mb-4">
                  Precision <span className="text-wine">Grain Control</span>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
                  "Our advanced sieving technology ensures a uniform grain size
                  distribution, critical for foundry moulding and high-precision
                  glass manufacturing."
                </p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-navy/5 rounded-lg text-[10px] font-bold text-navy uppercase tracking-widest">
                    Washed & Dried
                  </div>
                  <div className="px-4 py-2 bg-navy/5 rounded-lg text-[10px] font-bold text-navy uppercase tracking-widest">
                    Iron Controlled
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/*  Section: Applications */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">
              Industrial <span className="text-wine">Applications</span>
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto font-light">
              Who uses Indian silica sand and why? Powering essential industries
              across the globe.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "Glass Manufacturing",
                d: "Primary material for float, container, solar, and fiber glass. Ultra-low iron (<=0.02%) prevents green tints in precision glass.",
                icon: <Icons.Glass />,
                grade: "Glass Grade",
              },
              {
                t: "Foundry & Casting",
                d: "Used to create moulds/cores for metal casting. Withstands heat >1700C. AFS 3070 ensures perfect surface finish.",
                icon: <Icons.Foundry />,
                grade: "Foundry Grade",
              },
              {
                t: "Water Filtration",
                d: "Removes sediment and turbidity. Uniform rounded grains prevent compaction and optimize filtration efficiency.",
                icon: <Icons.Filter />,
                grade: "Filtration Grade",
              },
              {
                t: "Construction",
                d: "Essential for high-strength concrete, mortar, and asphalt mixes. Exported in bulk for infrastructure projects.",
                icon: <Icons.Industrial />,
                grade: "Construction Grade",
              },
              {
                t: "Paints & Coatings",
                d: "Ground silica (100-300 mesh) improves abrasion resistance and matt finish as a functional extender.",
                icon: <Icons.Shield />,
                grade: "Paint Grade",
              },
              {
                t: "Industrial Fillers",
                d: "Used in rubber and adhesives to improve hardness and reduce tack. Sourced for chemical stability.",
                icon: <Icons.Glass />,
                grade: "Industrial Grade",
              },
            ].map((app, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <div className="group h-full bg-[#f8f9fb] p-10 rounded-[2.5rem] border border-gray-100 hover:border-wine/20 hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-white text-wine rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-wine group-hover:text-white transition-colors">
                    {app.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-wine mb-2 block">
                    {app.grade}
                  </span>
                  <h4 className="text-xl font-bold text-navy mb-4">{app.t}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {app.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/*   Section: WHY BUY FROM US */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-wine/20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
              WHY BUY <span className="text-wine">FROM US</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal variant="fadeLeft">
              <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-xl h-full space-y-10 group hover:bg-white/10 transition-all duration-500">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-wine rounded-2xl flex items-center justify-center shadow-2xl shadow-wine/40">
                    <Icons.Shield />
                  </div>
                  <h3 className="text-3xl font-black text-white">Quality & Consistency</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "Fixed origin sourcing (Gujarat, Rajasthan, Andhra Pradesh) ensures consistent SiO2 and Fe2O3 lot to lot.",
                    "Full COA per lot: SiO2%, Fe2O3%, Al2O3%, grain size, moisture, and clay content.",
                    "AFS grain fineness number rigorously tested for all foundry grade shipments.",
                    "Third-party inspection (SGS / Intertek) at origin available upon buyer request.",
                    "Complete MSDS and Certificate of Origin (COO) provided with every single consignment.",
                  ].map((point, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="mt-1 bg-wine/20 p-1.5 rounded-full text-wine shrink-0">
                        <Icons.Check />
                      </div>
                      <span className="text-gray-300 text-lg font-medium leading-tight">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fadeRight">
              <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-xl h-full space-y-10 group hover:bg-white/10 transition-all duration-500">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-navy border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl shadow-navy/40">
                    <Icons.Globe />
                  </div>
                  <h3 className="text-3xl font-black text-white">Supply & Logistics</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "Single-window supply for all grades: Glass, Foundry, Filtration, Construction, and Paint.",
                    "Low MOQ of 1 MT supported  allowing easy trial before full container commitment.",
                    "Strategic export handling from FOB Mundra, Kandla, Vizag, and Chennai ports.",
                    "Highly competitive FOB / CIF pricing optimized for your specific destination port.",
                    "Rapid sample dispatch within 35 days to accelerate your qualification process.",
                  ].map((point, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="mt-1 bg-wine/20 p-1.5 rounded-full text-wine shrink-0">
                        <Icons.Check />
                      </div>
                      <span className="text-gray-300 text-lg font-medium leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal variant="fadeUp" className="mt-20">
             <div className="bg-wine/10 border border-wine/20 p-8 rounded-3xl text-center max-w-4xl mx-auto">
                <p className="text-gray-300 text-lg">
                   <span className="text-wine font-black uppercase tracking-widest text-sm block mb-2">Mine Owners & Processors</span>
                   We source directly from Gujarat, Rajasthan, and Andhra Pradesh. If you have a washing and grading plant with consistent quality output (SiO2 98%, Fe2O3 0.10%) and reliable monthly capacity (Min 100 MT), partner with us for global export volumes.
                </p>
             </div>
          </Reveal>
        </div>
      </section>


      {/*  Section: Origin & Processing (Section 8) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 uppercase tracking-tight">
              ORIGIN & <span className="text-wine">PROCESSING</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <Reveal variant="fadeLeft" className="space-y-12">
                {[
                  {
                    r: "Gujarat (Kutch, Rajkot, Bharuch)",
                    d: "Natural white silica sand  high purity, closest to Mundra and Kandla export ports; glass and foundry grade primary origin."
                  },
                  {
                    r: "Rajasthan (Jaipur, Alwar, Ajmer)",
                    d: "Quartz-rich silica sand; good for foundry, paint and construction grades."
                  },
                  {
                    r: "Andhra Pradesh (Nellore, Ongole)",
                    d: "Premium glass-grade silica with very low iron; close to Vizag and Chennai ports."
                  }
                ].map((region, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 bg-navy/5 text-navy rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white transition-all duration-500">
                       <Icons.Globe />
                    </div>
                    <div>
                       <h4 className="text-2xl font-black text-navy mb-2">{region.r}</h4>
                       <p className="text-gray-500 text-lg leading-relaxed font-light">{region.d}</p>
                    </div>
                  </div>
                ))}
             </Reveal>

             <Reveal variant="fadeRight">
                <div className="bg-[#f8f9fb] p-12 rounded-[4rem] border border-gray-100 shadow-xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-wine/5 rounded-full -mr-16 -mt-16"></div>
                   <h3 className="text-3xl font-black text-navy mb-10 border-l-8 border-wine pl-8">The Processing Chain</h3>
                   <div className="space-y-8">
                      {[
                        "Mining & Extraction",
                        "Washing (Removing clay and fines)",
                        "Drying (Solar or Rotary)",
                        "Sizing (Precision screening / sieving)",
                        "Magnetic Separation (For low-iron grades)",
                        "Packaging & Quality Lab Check"
                      ].map((step, i) => (
                        <div key={i} className="flex items-center gap-6">
                           <div className="w-10 h-10 bg-wine text-white rounded-xl flex items-center justify-center font-black text-sm">
                              {i + 1}
                           </div>
                           <span className="text-navy font-bold text-lg">{step}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/*  Section: Partner With Us (Section 7) */}
      <section className="py-32 bg-[#fcfaff] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft">
               <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 leading-tight uppercase tracking-tighter">
                  Partner With Us  <br/>
                  <span className="text-wine">Mine Owners & Processors</span>
               </h2>
               <p className="text-gray-600 text-xl font-light leading-relaxed mb-10 italic">
                  "We source silica sand from Gujarat, Rajasthan and Andhra Pradesh mines and processing units. If you have a washing and grading plant with consistent quality output and reliable monthly production capacity, we want to hear from you."
               </p>
               <div className="bg-white p-10 rounded-[3rem] shadow-lg border border-gray-100">
                  <h4 className="text-xs font-black text-wine uppercase tracking-[0.3em] mb-8">Verification Requirements:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {[
                        "SiO2 >=98%",
                        "Fe2O3 <=0.10% (Lower for glass grade)",
                        "Consistent Grain Size",
                        "Moisture <=1%",
                        "Clean, Free from Clay Lumps",
                        "Minimum 100 MT/month"
                     ].map((req, i) => (
                        <div key={i} className="flex items-center gap-4">
                           <Icons.Check />
                           <span className="text-navy font-bold text-sm">{req}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </Reveal>

            <Reveal variant="fadeRight">
               <div className="bg-navy p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-wine/20 rounded-full blur-[100px] -mr-32 -mb-32"></div>
                  <h3 className="text-3xl font-black mb-10">Procurement Enquiry</h3>
                  <form className="space-y-6 relative z-10">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-wine outline-none transition-all" />
                        <input type="text" placeholder="Location of Mine/Plant" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-wine outline-none transition-all" />
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Current Monthly Capacity" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-wine outline-none transition-all" />
                        <input type="text" placeholder="Contact Number" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-wine outline-none transition-all" />
                     </div>
                     <textarea placeholder="Describe your grading & washing setup..." rows="4" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-wine outline-none transition-all"></textarea>
                     <button type="button" className="w-full bg-wine text-white py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-wine transition-all shadow-xl shadow-wine/20">
                        Submit Procurement Info
                     </button>
                  </form>
               </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/*  Section: Logistics & FAQ */}

      <section className="py-32 bg-[#fcfaff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <Reveal variant="fadeLeft">
                <h2 className="text-3xl font-black text-navy mb-10">
                  Logistics <span className="text-wine">Framework</span>
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      l: "Packaging",
                      v: "50kg PP Bags, 1MT Jumbo Bags, Bulk FCL",
                    },
                    {
                      l: "20-ft FCL Capacity",
                      v: "2225 MT (Grade dependent)",
                    },
                    { l: "Primary Ports", v: "Mundra, Kandla, Vizag, Chennai" },
                    { l: "HS Code", v: "2505.10 (Silica & Quartz Sands)" },
                    { l: "Transit (Gulf)", v: "8-12 Days" },
                    { l: "Transit (SE Asia)", v: "12-18 Days" },
                  ].map((item, i) => (
                    <div key={i} className="pb-4 border-b border-gray-200">
                      <span className="text-[10px] font-black uppercase text-gray-400 block mb-1">
                        {item.l}
                      </span>
                      <p className="text-navy font-bold">{item.v}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-2">
              <Reveal variant="fadeUp">
                <h2 className="text-3xl font-black text-navy mb-10">
                  Common <span className="text-wine">Queries</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      q: "Glass vs Foundry difference?",
                      a: "Glass grade requires high SiO2 (>=99.5%) and ultra-low Fe2O3 (<=0.02%). Foundry grade focuses on grain size (AFS) and thermal stability.",
                    },
                    {
                      q: "What is the AFS number?",
                      a: "AFS indicates grain fineness. Low AFS (25-35) is for coarse castings; High AFS (50-70) is for a smooth casting finish.",
                    },
                    {
                      q: "Is it freely exportable?",
                      a: "Yes, industrial silica sand is freely exportable from India without licenses, subject to standard mining regulations.",
                    },
                    {
                      q: "What is the MOQ?",
                      a: "1 MT for trial orders. Standard bulk shipments are 20-25 MT per 20-ft container.",
                    },
                    {
                      q: "Do you supply washed sand?",
                      a: "Yes, we provide raw, washed, dried, and precision-sieved grades based on your technical requirement.",
                    },
                    {
                      q: "Payment Terms?",
                      a: "We typically operate on Advance T/T or Letter of Credit (LC) terms for international exports.",
                    },
                  ].map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                    >
                      <p className="font-black text-navy mb-3">Q. {faq.q}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/*  Final CTA */}
      <section className="bg-wine py-24 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-5xl font-black mb-8 tracking-tighter">
              Scale Your Silica <span className="opacity-50">Supply Chain</span>
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto font-light">
              Contact our export desk for current FOB/CIF pricing, technical
              datasheets, and logistics planning to your destination port.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/contact"
                className="bg-white text-wine px-12 py-5 rounded-2xl font-black hover:bg-navy hover:text-white transition-all shadow-2xl"
              >
                Get Export Quote
              </Link>
              <a
                href="https://wa.me/919-258720-699"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white px-12 py-5 rounded-2xl font-black hover:bg-navy/90 transition-all flex items-center justify-center gap-3"
              >
                WhatsApp Business Enquiry
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default SilicaSand;
