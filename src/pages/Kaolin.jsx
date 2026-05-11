import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card.jsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table.jsx";
import { Button } from "../components/ui/button.jsx";
import { Badge } from "../components/ui/badge.jsx";

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
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  ),
  Layers: () => (
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
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
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
  Truck: () => (
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
        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
      />
    </svg>
  ),
  Factory: () => (
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
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
};

// ── Reveal Component ─────────────────────────────────────────────────────────
const Reveal = ({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const variants = {
    fadeUp: visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
    zoomIn: visible ? "scale-100 opacity-100" : "scale-95 opacity-0",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

const Kaolin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfdfc] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Redesigned Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-20 overflow-hidden bg-navy">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-20 grayscale hover:grayscale-0 transition-all duration-1000">
             <img 
               src="https://5.imimg.com/data5/IOS/Default/2025/12/567189070/PX/YB/XW/221999280/product-jpeg.jpeg" 
               alt="Kaolin Industrial" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>
          <div className="absolute top-0 right-0 w-[60%] h-full bg-wine/10 -skew-x-12 translate-x-24"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="fadeUp" delay={200}>
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-8">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-wine opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-wine"></span>
              </span>
              <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.3em]">
                Premium Industrial Minerals
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
              Kaolin <br />
              <span className="text-wine">China Clay</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10 border-l-2 border-wine/30 pl-6">
              Processing and exporting high-purity industrial Kaolin from
              India's premium deposits. Brightness up to{" "}
              <span className="text-white font-bold">94%</span> with D50
              optimization for ceramics, paints, and polymer markets.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/rfq">
                <Button
                  variant="wine"
                  className="px-12 py-8 text-sm font-black uppercase tracking-widest shadow-[0_20px_50px_rgba(155,30,71,0.3)] hover:scale-105 transition-transform"
                >
                  Request Quote
                </Button>
              </Link>
              <div className="flex items-center gap-4 text-white/40">
                <div className="h-[1px] w-12 bg-white/10"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  COA / MSDS Included
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="zoomIn" delay={400} className="hidden lg:block">
            <div className="relative group">
              {/* Decorative Element */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-wine/20 to-transparent rounded-[3rem] blur-2xl group-hover:from-wine/40 transition-all duration-1000"></div>

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl"></div>
                
                <h3 className="text-xl font-black text-white uppercase mb-8 tracking-tight flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-wine"></span>
                  Grade Highlights
                </h3>

                <div className="grid grid-cols-1 gap-6">
                  {[
                    {
                      label: "Calcined Brightness",
                      val: "88–94 ISO",
                      desc: "Premium grade for paints & paper",
                    },
                    {
                      label: "Hydrous Whiteness",
                      val: "78–86 GE",
                      desc: "Standard ceramic & filler grade",
                    },
                    {
                      label: "Surface Modified",
                      val: "Silane Coated",
                      desc: "Optimized for cable & polymers",
                    },
                  ].map((spec, i) => (
                    <div
                      key={i}
                      className="group/item p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-[10px] font-black text-wine uppercase tracking-widest">
                          {spec.label}
                        </span>
                        <span className="text-lg font-black text-white group-hover/item:text-wine transition-colors">
                          {spec.val}
                        </span>
                      </div>
                      <p className="text-white/40 text-[10px] font-medium uppercase tracking-wider">
                        {spec.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-white font-black text-xl">100+</div>
                    <div className="text-white/30 text-[8px] font-bold uppercase tracking-widest">
                      Global Clients
                    </div>
                  </div>
                  <div className="text-center border-l border-white/10">
                    <div className="text-white font-black text-xl">5k MT</div>
                    <div className="text-white/30 text-[8px] font-bold uppercase tracking-widest">
                      Monthly Capacity
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-wine p-6 rounded-3xl shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500">
                <div className="text-white font-black text-2xl uppercase tracking-tighter leading-none">
                  ISO <br /> Certified
                </div>
                <div className="text-white/50 text-[8px] font-bold uppercase tracking-widest mt-2">
                  Quality Assured
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🛡️ Trust Strip */}

      {/* 📊 Market Stats */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal variant="fadeUp">
            <span className="text-wine font-black uppercase tracking-widest text-sm mb-4 block">
              Market Insight
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 uppercase tracking-tight leading-none">
              India's Position in <br />{" "}
              <span className="text-wine">Global Kaolin Trade</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
              <p>
                India is a significant global kaolin producer and exporter. With
                major deposits in Gujarat, Rajasthan, and West Bengal, we supply
                high-quality grades ranging from crude lumps to high-brightness
                calcined powder.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  {
                    t: "Global Demand",
                    d: "Projected USD 8.3B by 2030",
                    icon: <Icons.Globe />,
                  },
                  {
                    t: "Regional Hubs",
                    d: "Gujarat & Rajasthan clusters",
                    icon: <Icons.Factory />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4"
                  >
                    <div className="scale-75 opacity-70 bg-white p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-navy font-black text-[10px] uppercase tracking-wider">
                        {item.t}
                      </div>
                      <div className="text-wine font-bold text-xs italic">
                        {item.d}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex gap-12 pt-10 border-t border-gray-50">
              <div>
                <div className="text-3xl font-black text-navy uppercase">
                  7.5%
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Global CAGR
                </div>
              </div>
              <div className="border-l border-gray-100 pl-12">
                <div className="text-3xl font-black text-navy uppercase">
                  100%
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Freely Exportable
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal variant="zoomIn" delay={200} className="relative">
            <div className="bg-navy rounded-[3rem] p-12 text-white relative z-10 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-wine/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <h3 className="text-2xl font-black uppercase mb-8 italic border-b border-white/10 pb-4 flex justify-between items-center">
                <span>Export Destinations</span>
                <Icons.Globe />
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { region: "Middle East", transit: "8–12 Days" },
                  { region: "Southeast Asia", transit: "12–18 Days" },
                  { region: "East Africa", transit: "14–20 Days" },
                  { region: "Europe / Turkey", transit: "16–28 Days" },
                ].map((dest, i) => (
                  <div key={i} className="group">
                    <div className="text-wine font-black text-lg uppercase group-hover:translate-x-1 transition-transform">
                      {dest.region}
                    </div>
                    <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                      {dest.transit}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4 bg-white/5 p-6 rounded-[2rem]">
                <div className="w-10 h-10 bg-wine rounded-xl flex items-center justify-center shrink-0">
                  <Icons.Truck />
                </div>
                <p className="text-white/60 text-[10px] font-medium leading-relaxed italic uppercase tracking-wider">
                  Strategic proximity to Mundra and Kandla ports ensures faster
                  transit and competitive freight rates for global shipments.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 💎 Product Grades */}
      <section className="py-24 bg-[#f8f9f8]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Commercial <span className="text-wine">Grades</span>
            </h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              Kaolin is processed into four distinct commercial grades targeting
              specific industrial requirements.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Crude / Raw Kaolin",
                desc: "Mined and minimally processed; ideal for construction, cement, and basic ceramics.",
                use: "Construction · Cement",
                icon: <Icons.Layers />,
                img: "https://5.imimg.com/data5/SELLER/Default/2023/12/372198024/PR/CE/TD/120310/white-kaolin-clay-250x250.png",
              },
              {
                title: "Washed / Hydrous",
                desc: "Water-washed to remove impurities. Brightness 78–86. Standard for ceramics and paper.",
                use: "Ceramics · Paper Filler",
                icon: <Icons.Factory />,
                img: "https://5.imimg.com/data5/SELLER/Default/2021/5/XQ/OI/PL/2485597/hydrous-kaolin-powder-500x500.jpg",
              },
              {
                title: "Calcined Kaolin",
                desc: "Heat-treated at 1000°C. Brightness 88–94. High opacity; replaces TiO₂ in premium paints.",
                use: "Paints · Rubber · Plastics",
                icon: <Icons.Check />,
                img: "https://5.imimg.com/data5/CI/VD/MY-28469976/kaolin-powder-500x500.jpg",
              },
              {
                title: "Surface Modified",
                desc: "Chemically treated (Silane) for hydrophobic properties and polymer compatibility.",
                use: "Cables · Engineering Plastics",
                icon: <Icons.Shield />,
                img: "https://5.imimg.com/data5/IOS/Default/2025/12/567189070/PX/YB/XW/221999280/product-jpeg.jpeg",
              },
            ].map((grade, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all bg-white rounded-[2.5rem] group overflow-hidden relative border-b-4 border-transparent hover:border-wine">
                  <div className="h-48 overflow-hidden relative">
                     <img src={grade.img} alt={grade.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-8 relative z-10">
                    <div className="mb-6 p-4 bg-gray-50 rounded-2xl w-fit group-hover:bg-wine/10 group-hover:scale-110 transition-all duration-500 flex items-center justify-center -mt-16 relative bg-white shadow-lg">
                      {grade.icon}
                    </div>
                    <h3 className="text-xl font-black text-navy mb-4 border-l-4 border-wine pl-4 uppercase">
                      {grade.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-medium leading-relaxed mb-6">
                      {grade.desc}
                    </p>
                    <div className="pt-6 border-t border-gray-50 mt-auto">
                      <span className="text-[10px] font-black text-wine uppercase tracking-widest bg-wine/5 px-4 py-2 rounded-full">
                        {grade.use}
                      </span>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🧪 Specifications Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-wine font-black uppercase tracking-widest text-sm mb-4 block">
              Section 4
            </span>
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Technical <span className="text-wine">Specifications</span>
            </h2>
          </Reveal>

          <Reveal
            variant="fadeUp"
            className="overflow-x-auto shadow-2xl rounded-[3rem] border border-gray-100"
          >
            <Table>
              <TableHeader className="bg-navy">
                <TableRow className="hover:bg-navy/95 border-none">
                  <TableHead className="w-[200px] font-black text-white uppercase text-[10px] py-6 pl-8">
                    Parameter
                  </TableHead>
                  <TableHead className="font-black text-white uppercase text-[10px] py-6">
                    Crude
                  </TableHead>
                  <TableHead className="font-black text-white uppercase text-[10px] py-6">
                    Washed / Hydrous
                  </TableHead>
                  <TableHead className="font-black text-white uppercase text-[10px] py-6">
                    Calcined
                  </TableHead>
                  <TableHead className="font-black text-white uppercase text-[10px] py-6 pr-8">
                    Surface Modified
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    p: "Al₂O₃ % min",
                    c: "30–34%",
                    w: "34–36%",
                    cl: "36–40%",
                    s: "34–36%",
                  },
                  {
                    p: "SiO₂ %",
                    c: "48–52%",
                    w: "46–50%",
                    cl: "44–48%",
                    s: "46–50%",
                  },
                  {
                    p: "Fe₂O₃ % max",
                    c: "1.5%",
                    w: "0.8%",
                    cl: "0.5%",
                    s: "0.5%",
                  },
                  {
                    p: "TiO₂ % max",
                    c: "1.0%",
                    w: "0.5%",
                    cl: "0.3%",
                    s: "0.3%",
                  },
                  {
                    p: "CaO % max",
                    c: "0.5%",
                    w: "0.3%",
                    cl: "0.2%",
                    s: "0.2%",
                  },
                  {
                    p: "LOI %",
                    c: "12–14%",
                    w: "12–14%",
                    cl: "<1.0%",
                    s: "12–14%",
                  },
                  {
                    p: "Moisture % max",
                    c: "15%",
                    w: "1.5%",
                    cl: "0.5%",
                    s: "1.0%",
                  },
                  {
                    p: "Brightness (ISO)",
                    c: "65–75",
                    w: "78–86",
                    cl: "88–94",
                    s: "85–92",
                  },
                  {
                    p: "Particle size (D50)",
                    c: "5–20 µm",
                    w: "2–8 µm",
                    cl: "0.5–3 µm",
                    s: "1–5 µm",
                  },
                  {
                    p: "pH (20%)",
                    c: "5.0–7.0",
                    w: "5.5–7.5",
                    cl: "5.5–7.5",
                    s: "6.0–8.0",
                  },
                  {
                    p: "Oil Absorption",
                    c: "35–50",
                    w: "30–45",
                    cl: "55–75",
                    s: "25–40",
                  },
                ].map((row, i) => (
                  <TableRow
                    key={i}
                    className="border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <TableCell className="font-black text-navy py-5 pl-8 text-xs">
                      {row.p}
                    </TableCell>
                    <TableCell className="text-gray-500 font-medium text-xs">
                      {row.c}
                    </TableCell>
                    <TableCell className="text-gray-500 font-medium text-xs">
                      {row.w}
                    </TableCell>
                    <TableCell className="text-navy font-bold text-xs">
                      {row.cl}
                    </TableCell>
                    <TableCell className="text-gray-500 font-medium text-xs pr-8">
                      {row.s}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Reveal>
          <div className="mt-8 flex flex-col md:flex-row gap-6">
            <div className="flex-1 p-6 bg-wine/5 rounded-3xl border border-wine/10">
              <h4 className="font-black text-navy uppercase text-[10px] tracking-widest mb-2">
                Customization available
              </h4>
              <p className="text-gray-500 text-[10px] leading-relaxed italic">
                Custom brightness, D50, and surface treatment are available for
                orders of 5 MT and above. Metakaolin (calcined at 700–800°C)
                available on request.
              </p>
            </div>
            <div className="flex-1 p-6 bg-navy/5 rounded-3xl border border-navy/10">
              <h4 className="font-black text-navy uppercase text-[10px] tracking-widest mb-2">
                Compliance
              </h4>
              <p className="text-gray-500 text-[10px] leading-relaxed italic">
                Full COA and MSDS provided with every lot. Standard testing per
                IS 4589 protocols. Ultra-pure cosmetic grades available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🏗️ Applications Grid */}
      <section className="py-24 bg-[#f8f9f8]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-wine font-black uppercase tracking-widest text-sm mb-4 block">
              Section 5
            </span>
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Industrial <span className="text-wine">Applications</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "Ceramics & Sanitaryware",
                d: "Essential plastic clay providing whiteness, strength, and firing stability. Standard for tiles and sanitaryware.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              {
                t: "Paints & Coatings",
                d: "Calcined kaolin improves opacity and scrub resistance while partially replacing expensive TiO₂ pigments.",
                icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
              },
              {
                t: "Paper Manufacturing",
                d: "Used as a filler and coating pigment to improve surface smoothness, brightness, and ink holdout.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                t: "Rubber & Cables",
                d: "Enhances mechanical durability and dielectric strength in rubber compounds and cable insulation.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                t: "Plastics & Polymers",
                d: "Improves stiffness and dimensional stability in PP, HDPE, and PVC as a functional functional filler.",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v14m0-14L4 7m8 4L4 7m0 0v10l8 4",
              },
              {
                t: "Cosmetics & Pharma",
                d: "Ultra-pure grades for facial masks, skincare, and pharmaceutical excipients. Non-toxic and inert.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
              },
            ].map((app, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                variant="fadeUp"
                className="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 bg-wine/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-wine group-hover:text-white transition-all duration-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={app.icon}
                    />
                  </svg>
                </div>
                <h4 className="font-black text-navy uppercase mb-4 text-sm tracking-tight">
                  {app.t}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">
                  {app.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🚢 Logistics & Export */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <Reveal variant="fadeUp">
              <h2 className="text-4xl font-black mb-8 uppercase tracking-tight">
                Logistics & <span className="text-wine">Export Excellence</span>
              </h2>
              <div className="space-y-8">
                {[
                  {
                    t: "Packaging",
                    d: "25kg / 50kg PP bags, 1MT jumbo bags, or bulk FCL options.",
                  },
                  {
                    t: "Capacity",
                    d: "Approximately 22–24 MT per 20-ft FCL (bagged).",
                  },
                  {
                    t: "Major Ports",
                    d: "Mundra, Kandla (Gujarat origin) and Kolkata (West Bengal origin).",
                  },
                  {
                    t: "Lead Time",
                    d: "3–7 days for ex-stock items; 12–18 days for fresh production orders.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-wine rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                      <Icons.Check />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-1">
                        {item.t}
                      </h4>
                      <p className="text-white/50 text-xs leading-relaxed">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={200} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-wine/50 to-navy/50 rounded-[3rem] blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-[#001c33] p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm shadow-2xl">
                <h3 className="text-2xl font-black uppercase mb-10 border-b border-white/10 pb-6 flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-wine"></span>
                  Why Indian Kaolin?
                </h3>
                <div className="grid grid-cols-1 gap-8">
                  {[
                    {
                      t: "Price Advantage",
                      d: "Significantly more cost-competitive than UK or US-origin material.",
                      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    },
                    {
                      t: "Natural Geology",
                      d: "Naturally white kaolin (75–86 brightness) without expensive bleaching.",
                      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                    },
                    {
                      t: "Full Value Chain",
                      d: "From crude to surface modified grades from one regional hub.",
                      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                    },
                    {
                      t: "Export Freedom",
                      d: "No government restrictions, licensing, or quotas for global export.",
                      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                    },
                  ].map((adv, i) => (
                    <div key={i} className="flex items-start gap-6 group/item">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-wine group-hover/item:text-white transition-all duration-300">
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
                            d={adv.icon}
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="font-black text-wine uppercase text-[10px] tracking-[0.2em] block mb-1 group-hover/item:translate-x-1 transition-transform">
                          {adv.t}
                        </span>
                        <p className="text-white/50 text-xs font-medium leading-relaxed">
                          {adv.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 💎 Why Buy From Us */}
      <section className="py-24 bg-[#fcfdfc]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-wine font-black uppercase tracking-widest text-sm mb-4 block">
              Section 7
            </span>
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Why Buy <span className="text-wine">From Us?</span>
            </h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              We ensure reliability, quality, and seamless commercial transactions
              for our global partners.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Quality & Consistency */}
            <Reveal variant="fadeUp" delay={100}>
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 h-full">
                <h3 className="text-2xl font-black text-navy uppercase mb-8 flex items-center gap-4">
                  <span className="w-10 h-10 bg-wine rounded-xl flex items-center justify-center text-white shrink-0">
                    <Icons.Shield />
                  </span>
                  Quality & Consistency
                </h3>
                <ul className="space-y-6">
                  {[
                    "Fixed mine source — consistent brightness and particle size lot to lot",
                    "Full COA per lot: Al₂O₃%, Fe₂O₃%, brightness, whiteness, D50, moisture",
                    "ISO brightness and whiteness tested every lot",
                    "SGS / Intertek inspection at origin available on request",
                    "MSDS and COO with every consignment",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="mt-1.5 shrink-0">
                        <Icons.Check />
                      </div>
                      <p className="text-gray-600 font-medium text-sm leading-relaxed group-hover:text-wine transition-colors">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Supply & Commercial */}
            <Reveal variant="fadeUp" delay={200}>
              <div className="bg-navy p-10 rounded-[3rem] shadow-xl h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-wine/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <h3 className="text-2xl font-black text-white uppercase mb-8 flex items-center gap-4">
                  <span className="w-10 h-10 bg-wine rounded-xl flex items-center justify-center text-white shrink-0">
                    <Icons.Globe />
                  </span>
                  Supply & Commercial
                </h3>
                <ul className="space-y-6">
                  {[
                    "All grades from one supplier — crude, washed, calcined, surface modified",
                    "MOQ 1 MT for trial orders — easy grade qualification",
                    "FOB Mundra / Kandla / Nhava Sheva / Kolkata",
                    "Competitive FOB / CIF pricing to your port",
                    "Sample with COA arranged within 3–5 days",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="mt-1.5 shrink-0">
                        <Icons.Check />
                      </div>
                      <p className="text-white/60 font-medium text-sm leading-relaxed group-hover:text-white transition-colors">
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

      {/* 🤝 Supplier Recruitment */}
      <section className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp">
            <div className="inline-flex items-center gap-2 bg-navy/5 px-6 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-wine rounded-full"></span>
              <span className="text-[10px] font-black text-navy uppercase tracking-widest">
                Mine Owners & Processors
              </span>
            </div>
            <h2 className="text-4xl font-black text-navy mb-6 uppercase tracking-tight">
              Work With <span className="text-wine">Us</span>
            </h2>
            <p className="text-gray-500 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              We source Kaolin from Gujarat, Rajasthan, and West Bengal. If you
              have a washing plant, calcination unit, or micronising facility
              with consistent output and reliable quality, we want to hear from
              you.
            </p>
            <div className="bg-[#f8f9f8] p-8 rounded-[2.5rem] grid grid-cols-1 md:grid-cols-3 gap-6 text-left border border-gray-100 shadow-xl">
              <div>
                <span className="text-wine font-black text-[10px] uppercase block mb-1">
                  Brightness
                </span>
                <p className="text-navy font-bold text-xs">
                  ≥78 (Washed) · ≥88 (Calcined)
                </p>
              </div>
              <div className="border-l border-gray-200 pl-6">
                <span className="text-wine font-black text-[10px] uppercase block mb-1">
                  Quality
                </span>
                <p className="text-navy font-bold text-xs">
                  Fe₂O₃ ≤0.8% · Consistent Particle Size
                </p>
              </div>
              <div className="border-l border-gray-200 pl-6">
                <span className="text-wine font-black text-[10px] uppercase block mb-1">
                  Capacity
                </span>
                <p className="text-navy font-bold text-xs">
                  Monthly output ≥50 MT
                </p>
              </div>
            </div>
            <div className="mt-10">
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="px-10 py-6 font-black uppercase text-xs tracking-widest"
                >
                  Submit Facility Details
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Frequently Asked <span className="text-wine">Questions</span>
            </h2>
          </Reveal>

          <div className="space-y-4">
            {[
              {
                q: "What is the difference between kaolin and china clay?",
                a: "Both are the same mineral. Kaolin is the scientific name derived from 'Kao-ling' in China, while China Clay is the common trade name.",
              },
              {
                q: "What is calcined kaolin?",
                a: "It is kaolin heat-treated at high temperatures (1000°C) to drive off structural water. This results in higher brightness and opacity, ideal for premium paints.",
              },
              {
                q: "Can kaolin replace TiO₂ in paints?",
                a: "Yes, calcined kaolin can partially replace TiO₂ in paint formulations, significantly reducing raw material costs while maintaining opacity.",
              },
              {
                q: "Which brightness grade is suitable for ceramics?",
                a: "Lower brightness grades (65-75) are often used in ceramic bodies, while higher brightness (80+) is preferred for glazes and sanitaryware.",
              },
              {
                q: "What is the minimum order quantity?",
                a: "MOQ starts from 1 MT for trial orders. We arrange samples with COA within 3-5 days for product qualification.",
              },
              {
                q: "Is Indian kaolin suitable for cosmetic and pharma use?",
                a: "Yes, we supply ultra-pure, low heavy-metal grades that are non-toxic and chemically inert for skincare and pharmaceutical applications.",
              },
              {
                q: "What are the payment terms?",
                a: "Advance payment is preferred for new export orders. Letter of Credit (LC) at sight can be discussed for bulk regular shipments.",
              },
            ].map((faq, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                className="border border-gray-100 rounded-[2rem] p-8 hover:shadow-xl transition-all duration-500 bg-white group"
              >
                <h4 className="font-black text-navy mb-4 text-lg border-l-4 border-wine pl-4 group-hover:text-wine transition-colors">
                  {faq.q}
                </h4>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">
                  {faq.a}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🏁 Footer CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-wine opacity-5 -skew-y-6 translate-y-24"></div>
        <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
          <Reveal variant="fadeUp">
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight leading-none">
              Premium <span className="text-wine">Kaolin</span> Solutions
            </h2>
            <p className="text-white/40 text-lg mb-12 font-light max-w-2xl mx-auto">
              Secure your supply of high-purity Indian Kaolin. Consistent
              quality, full documentation, and global logistics support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link to="/rfq">
                <Button
                  variant="wine"
                  className="px-12 py-8 text-sm font-black uppercase tracking-widest shadow-2xl"
                >
                  Get Quotation
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="px-12 py-8 text-sm font-black uppercase tracking-widest border-white/20 text-white hover:bg-white hover:text-navy"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Kaolin;
