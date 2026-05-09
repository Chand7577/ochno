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
  Download: () => (
    <svg
      className="w-5 h-5 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3"
      />
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
  Factory: () => (
    <svg
      className="w-8 h-8 text-wine mb-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  Lab: () => (
    <svg
      className="w-8 h-8 text-wine mb-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  ),
  Shield: () => (
    <svg
      className="w-6 h-6 text-wine"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
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
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
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
      { threshold: 0.1 }
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

const AluminiumPowder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Premium Redesigned Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-20 overflow-hidden bg-navy">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-20 grayscale hover:grayscale-0 transition-all duration-1000">
             <img 
               src="https://media.licdn.com/dms/image/v2/D4D12AQFRnky8JZ5X3A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1688407151099?e=2147483647&v=beta&t=qXBcrOmwYAM9kV3dnoDy0YmQ1C1rRQuG5SMNvsbwC0I" 
               alt="Aluminium Industry" 
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
                Metallurgy & Coatings Specialist
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
              Aluminium <br />
              <span className="text-wine">Powder & Paste</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10 border-l-2 border-wine/30 pl-6">
              Exporting high-purity Special Grade, Atomized, and Leafing Paste 
              sourced from premium Indian manufacturers. Optimized for 
              <span className="text-white font-bold italic ml-1">agrochemicals, pigments, and advanced metallurgy.</span>
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
                  Hazmat (UN 1396) Ready
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="zoomIn" delay={400} className="hidden lg:block">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-wine/20 to-transparent rounded-[3rem] blur-2xl group-hover:from-wine/40 transition-all duration-1000"></div>

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl"></div>
                
                <h3 className="text-xl font-black text-white uppercase mb-8 tracking-tight flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-wine"></span>
                  Supply Highlights
                </h3>

                <div className="grid grid-cols-1 gap-6">
                  {[
                    {
                      label: "Purity Range",
                      val: "99.7% Min",
                      desc: "Optimized for high-end metallurgy",
                    },
                    {
                      label: "Particle Morphology",
                      val: "Spherical & Flake",
                      desc: "Coarse to superfine distributions",
                    },
                    {
                      label: "Leafing Effect",
                      val: "Mirror Finish",
                      desc: "Superior coverage (10L - 35L)",
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
                    <div className="text-white font-black text-xl">25kg/100kg</div>
                    <div className="text-white/30 text-[8px] font-bold uppercase tracking-widest">
                      Standard Packaging
                    </div>
                  </div>
                  <div className="text-center border-l border-white/10">
                    <div className="text-white font-black text-xl">1500+</div>
                    <div className="text-white/30 text-[8px] font-bold uppercase tracking-widest">
                      Export Containers
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-wine p-6 rounded-3xl shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500">
                <div className="text-white font-black text-2xl uppercase tracking-tighter leading-none">
                  UN <br /> 1396
                </div>
                <div className="text-white/50 text-[8px] font-bold uppercase tracking-widest mt-2">
                  Hazmat Compliant
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🛡️ Trust Strip */}
      <div className="bg-white border-b border-gray-100 py-8 relative z-20 -mt-12 mx-6 rounded-[2.5rem] shadow-2xl max-w-7xl lg:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-10">
          {[
            { label: "COA per lot", icon: <Icons.Shield /> },
            { label: "MSDS Documentation", icon: <Icons.Layers /> },
            { label: "Custom Sizing", icon: <Icons.Lab /> },
            { label: "Sample in 3–5 Days", icon: <Icons.Truck /> },
            { label: "Global Acceptance", icon: <Icons.Globe /> },
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-4 justify-center border-r border-gray-100 last:border-none">
              <div className="p-3 bg-wine/5 rounded-2xl scale-75">{item.icon}</div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-navy/70 text-center md:text-left">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 📦 Product Categories */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
            Product <span className="text-wine">Categories</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-3xl mx-auto">
            We export three distinct aluminium product categories from India — each serving different industries with different physical characteristics and applications.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Special Grade Aluminium Powder",
              desc: "Fine flakes for agriculture, pyrotechnics, pigments and general industrial use.",
              icon: <Icons.Layers />,
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvNrA6MXqtpD4g5S1n3J6eorunV1TJNJYfSg&s",
            },
            {
              title: "Atomized Aluminium Powder",
              desc: "High-purity spherical powder for metallurgy, foundry, 3D printing and coatings.",
              icon: <Icons.Factory />,
              img: "https://media.licdn.com/dms/image/v2/D4D12AQFRnky8JZ5X3A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1688407151099?e=2147483647&v=beta&t=qXBcrOmwYAM9kV3dnoDy0YmQ1C1rRQuG5SMNvsbwC0I",
            },
            {
              title: "Leafing Aluminium Paste",
              desc: "Metallic pigment paste in mineral spirit for paints, coatings and printing inks.",
              icon: <Icons.Lab />,
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ8eprRvRFdv38eCUmnGvb8ncGQSWAOT_fHw&s",
            },
          ].map((cat, i) => (
            <Reveal key={i} delay={i * 200} variant="zoomIn">
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all bg-white rounded-[2.5rem] group overflow-hidden relative">
                <div className="h-48 overflow-hidden relative">
                   <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8 relative z-10">
                  <div className="mb-6 p-4 bg-white rounded-2xl w-fit group-hover:bg-wine/10 group-hover:scale-110 transition-all duration-500 shadow-lg -mt-16 relative">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-black text-navy mb-4 border-l-4 border-wine pl-4 uppercase">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-medium leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 🔬 Special Grade Aluminium Powder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <Reveal variant="fadeUp">
              <span className="text-wine font-black uppercase tracking-widest text-sm mb-4 block">Section 3</span>
              <h2 className="text-4xl font-black text-navy mb-6 uppercase tracking-tight leading-none">
                Special Grade <br /> <span className="text-wine">Aluminium Powder</span>
              </h2>
              <h3 className="text-wine font-bold uppercase text-xs mb-2 italic">What it is and how it is made</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Special grade aluminium powder is produced by stamping or ball milling of aluminium flakes to fine powder form. Different grades are produced by controlling particle size distribution and surface treatment — each grade is optimised for a specific application. These are freely exportable and in strong global demand across Asia, Africa and the Middle East.
              </p>
              <div className="space-y-4">
                {[
                  "Freely exportable from India",
                  "Strong global demand in Asia, Africa & Middle East",
                  "Optimised particle size distribution",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icons.Check />
                    <span className="font-bold text-navy text-sm uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={200}>
              <div className="bg-[#f8f9fb] rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-lg font-black uppercase mb-6 italic text-navy border-b pb-4">Grade Specifications</h3>
                <Table>
                  <TableHeader>
                    <TableRow className="border-none hover:bg-transparent">
                      <TableHead className="font-black text-navy uppercase text-[10px]">Grade</TableHead>
                      <TableHead className="font-black text-navy uppercase text-[10px]">Bulk Density</TableHead>
                      <TableHead className="font-black text-navy uppercase text-[10px] text-right">Size</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { g: "DDD", d: "~0.25 gm/cc", s: "<45 µm" },
                      { g: "DF", d: "~0.32 gm/cc", s: "85% < 45 µm" },
                      { g: "RP", d: "~0.35 gm/cc", s: "40–55 µm" },
                      { g: "SSS Flakes", d: "~0.35 gm/cc", s: "80% < 45 µm" },
                    ].map((row, i) => (
                      <TableRow key={i} className="border-gray-100">
                        <TableCell className="font-black text-wine italic">{row.g}</TableCell>
                        <TableCell className="text-navy font-medium">{row.d}</TableCell>
                        <TableCell className="text-right font-black text-navy">{row.s}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "DDD Grade", d: "General industrial use — pyrotechnics, metal finishing, chemical reactions." },
              { t: "DF Grade", d: "Paints and pigments — provides metallic effect in coatings, superior for certain finishes." },
              { t: "RP Grade", d: "Agrochemical formulations — carrier for fumigant tablets and pesticide dusts." },
              { t: "SSS Flakes", d: "Sparklers, decorative powders, fireworks — expanding demand in Asia and Africa." },
            ].map((app, i) => (
              <Reveal key={i} delay={i * 100} variant="fadeUp" className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-black text-navy mb-2 uppercase text-sm border-l-2 border-wine pl-3">{app.t}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{app.d}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-orange-50 border-l-4 border-orange-400 text-[10px] text-orange-800 font-bold uppercase tracking-widest flex items-center">
              Note: Aluminium powder is a flammable solid — Class 4.1 hazmat (UN 1396). Full IMDG documentation provided.
            </div>
            <div className="p-4 bg-navy/5 border-l-4 border-navy/20 text-[10px] text-navy/60 font-bold uppercase tracking-widest leading-relaxed">
              Packaging: 25 kg drums (standard) · Poly-lined bag packaging · Sealed moisture-resistant containers.
            </div>
          </div>
        </div>
      </section>

      {/* ⚪ Atomized Aluminium Powder */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <Reveal variant="zoomIn">
              <div className="bg-navy rounded-3xl p-8 shadow-2xl text-white">
                <h3 className="text-lg font-black uppercase mb-6 italic border-b border-white/10 pb-4">Spherical Specifications</h3>
                <Table>
                  <TableHeader>
                    <TableRow className="border-none hover:bg-transparent">
                      <TableHead className="font-black text-white/50 uppercase text-[10px]">Grade</TableHead>
                      <TableHead className="font-black text-white/50 uppercase text-[10px]">Density</TableHead>
                      <TableHead className="font-black text-white/50 uppercase text-[10px] text-right">Size Range</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { g: "Coarse", d: "~0.8 gm/cc", s: "100–250 µm" },
                      { g: "Fine", d: "~0.6 gm/cc", s: "20–75 µm" },
                      { g: "Superfine", d: "~0.45 gm/cc", s: "<20 µm" },
                    ].map((row, i) => (
                      <TableRow key={i} className="border-white/5">
                        <TableCell className="font-black text-wine italic">{row.g}</TableCell>
                        <TableCell className="text-white/70 font-medium">{row.d}</TableCell>
                        <TableCell className="text-right font-black text-white">{row.s}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Reveal>
            <Reveal variant="fadeUp" delay={200}>
              <span className="text-wine font-black uppercase tracking-widest text-sm mb-4 block">Section 4</span>
              <h2 className="text-4xl font-black text-navy mb-6 uppercase tracking-tight leading-none">
                Atomized <br /> <span className="text-wine">Aluminium Powder</span>
              </h2>
              <h3 className="text-wine font-bold uppercase text-xs mb-2 italic">What it is and how it is made</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                Atomized aluminium powder is produced by forcing molten aluminium through a nozzle and breaking it into fine droplets using high-pressure gas (air or nitrogen). The rapid solidification produces spherical particles with excellent flow and packing density — critical for powder metallurgy, sintering and additive manufacturing applications where irregular particle shape causes process problems.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Coarse", d: "Foundry fluxes, metal joining, deoxidation in steel casting." },
                  { t: "Fine", d: "Sintered components in powder metallurgy, friction materials for brakes." },
                  { t: "Superfine", d: "Additive manufacturing (3D printing), rocket propellant, high-res coatings." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-wine mt-2 shrink-0" />
                    <div>
                      <h4 className="font-black text-navy uppercase text-sm">{item.t}</h4>
                      <p className="text-gray-500 text-xs">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-navy/5 border-l-4 border-navy/20 text-[10px] text-navy/60 font-bold uppercase tracking-widest leading-relaxed">
                Packaging: 25 kg / 100 kg drums · 1,000 kg jumbo bags · Custom packaging on request. <br />
                Storage: Keep away from moisture & ignition sources — sealed containers essential for superfine grades.
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ✨ Leafing Aluminium Paste */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <span className="text-wine font-black uppercase tracking-widest text-sm mb-4 block">Section 5</span>
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Leafing <span className="text-wine">Aluminium Paste</span>
            </h2>
            <h3 className="text-wine font-bold uppercase text-xs mb-2 italic">What it is and how it is made</h3>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Leafing aluminium paste is produced by ball milling of aluminium flakes in the presence of mineral spirit and fatty acids. The result is a metallic pigment paste where flat aluminium flakes orient parallel to the coating surface (leafing effect) — creating a bright, mirror-like metallic finish with excellent reflectivity and barrier properties against moisture and UV.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { g: "10L", c: "14,000", d: "Roofing & anti-corrosive coatings" },
              { g: "20L", c: "22,000", d: "Aerosol sprays, decorative paints" },
              { g: "30L", c: "26,000", d: "Architectural coatings, textile printing" },
              { g: "35L", c: "32,000", d: "Automotive paints, premium printing inks" },
            ].map((grade, i) => (
              <Reveal key={i} delay={i * 100} className="bg-navy p-8 rounded-[2rem] text-white flex flex-col items-center text-center shadow-xl">
                <span className="text-wine font-black text-3xl mb-2">{grade.g}</span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Coverage: {grade.c} cm²/g</span>
                <p className="text-white/70 text-xs font-medium leading-relaxed">{grade.d}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="bg-wine/5 p-8 rounded-3xl border border-wine/10 max-w-4xl mx-auto text-center">
            <h4 className="font-black text-navy uppercase mb-4 tracking-wider">Why coverage matters</h4>
            <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
              Higher water coverage means the aluminium flakes are thinner and have a larger surface area — providing more metallic brilliance per gram. This allows manufacturers to use less paste to achieve the same effect, offsetting higher costs.
            </p>
            <div className="pt-4 border-t border-wine/10 grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px] font-black uppercase tracking-widest text-navy/60">
               <div>Packaging: 25 kg mild steel drums (standard) · Export standard pigment shipment</div>
               <div>Markets: Strong demand in Middle East, South Asia & Eastern Europe for metallic effect coatings</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🌍 Export Markets */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">
              Global <span className="text-wine">Export Markets</span>
            </h2>
            <p className="text-white/50 font-medium">Strategic supply to growing industrial hubs across Middle East, Asia, and Africa.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { r: "Middle East", m: "UAE, Saudi, Qatar, Oman", u: "Roofing, anti-corrosive coatings, foundry, construction." },
              { r: "Southeast Asia", m: "Indonesia, Vietnam, Malaysia", u: "Agrochemicals (RP grade), general industrial, decorative." },
              { r: "Africa", m: "Nigeria, Kenya, Egypt, SA", u: "Pyrotechnics (SSS), agrochemicals, paint & coatings." },
              { r: "Eastern Europe", m: "Poland, Romania, etc.", u: "Automotive pigments (35L), powder metallurgy, industrial." },
              { r: "South Asia", m: "Bangladesh, Sri Lanka, Nepal", u: "Leafing paste for coatings, general industrial powder." },
            ].map((market, i) => (
              <Reveal key={i} delay={i * 100} className="border border-white/10 p-8 rounded-3xl hover:bg-white/5 transition-colors">
                <h4 className="text-wine font-black text-xl mb-2">{market.r}</h4>
                <p className="text-white/40 text-[10px] font-bold uppercase mb-4 tracking-widest">{market.m}</p>
                <p className="text-white/70 text-sm leading-relaxed">{market.u}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Why Buy From Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal variant="fadeUp">
              <h2 className="text-4xl font-black text-navy mb-8 uppercase tracking-tight">
                Quality & <span className="text-wine">Supply Advantage</span>
              </h2>
              <div className="space-y-8">
                {[
                  { t: "Consistency", d: "Fixed Indian manufacturer source ensuring consistent particle size and bulk density lot to lot." },
                  { t: "Compliance", d: "Full COA (Size, Purity, Moisture) and MSDS per IMDG / ADR format provided with every lot." },
                  { t: "Flexibility", d: "MOQ 25 kg for trials with custom particle sizes and packaging available for regular orders." },
                  { t: "FOB / CIF", d: "FOB Mundra / Nhava Sheva / Chennai — all major export ports with competitive pricing." },
                  { t: "Lead Time", d: "Ex-stock 7–14 days; production order 21–30 days for large quantities." },
                  { t: "Samples", d: "Sample with COA arranged within 3–5 days for product qualification." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icons.Check />
                    </div>
                    <div>
                      <h4 className="font-black text-navy uppercase text-sm mb-1">{item.t}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="zoomIn" delay={200} className="bg-[#f8f9fb] p-10 rounded-[3rem] border border-gray-100 shadow-xl">
              <h3 className="text-2xl font-black text-navy mb-6 uppercase">Hazmat & Compliance</h3>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                Aluminium products are classified as hazardous materials for transport. We provide complete documentation to ensure smooth customs and safety:
              </p>
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-white rounded-2xl border border-gray-200">
                  <span className="text-wine font-black text-[10px] block mb-1">UN 1396</span>
                  <p className="text-navy font-bold text-xs uppercase tracking-wider">Aluminium Powder (Class 4.1 Flammable Solid)</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-gray-200">
                  <span className="text-wine font-black text-[10px] block mb-1">LEAFING PASTE HAZMAT</span>
                  <p className="text-navy font-bold text-[10px] uppercase tracking-wider">UN 1369 (p-nitrosodimethylaniline) does not apply · paste is typically non-hazardous if flash point &gt;60°C</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-gray-200">
                  <span className="text-wine font-black text-[10px] block mb-1">HS CODES</span>
                  <p className="text-navy font-bold text-[10px] uppercase tracking-wider">7603.10 (Non-lamellar) · 7603.20 (Lamellar / Paste)</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-gray-200">
                  <span className="text-wine font-black text-[10px] block mb-1">COMPLIANCE</span>
                  <p className="text-navy font-bold text-xs uppercase tracking-wider">Accepted in EU, GCC, African & SE Asian Markets</p>
                </div>
              </div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] leading-relaxed">
                IMDG / IATA Documentation: Hazmat declaration, packing certificate, emergency information sheet provided. <br />
                MSDS per GHS format provided with every consignment for receiver's safety data file.
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ⚓ Logistics */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Packaging", d: "25kg / 100kg drums or 1MT jumbo bags (atomized)." },
              { t: "Lead Time", d: "Ex-stock 7-14 days; production orders 21-30 days." },
              { t: "Ports", d: "Mundra, Nhava Sheva, Chennai, Kolkata." },
              { t: "Transit", d: "8-28 days depending on global destination." },
            ].map((log, i) => (
              <Reveal key={i} delay={i * 100} className="text-center">
                <h4 className="text-wine font-black text-sm uppercase mb-2 tracking-widest">{log.t}</h4>
                <p className="text-navy font-bold text-base">{log.d}</p>
              </Reveal>
            ))}
          </div>
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
              { q: "What is the difference between special grade and atomized aluminium powder?", a: "Special grade is flake-shaped and used in pigments, agrochemicals and pyrotechnics. Atomized powder is spherical and mainly used in powder metallurgy, sintering and metal printing." },
              { q: "What does “leafing” mean in aluminium paste?", a: "Leafing means aluminium flakes align on the coating surface, creating high shine, reflectivity and moisture resistance." },
              { q: "Which grade is used in agrochemical formulations?", a: "RP grade is commonly used in agrochemical and fumigant formulations due to its fine particle size and high reactivity." },
              { q: "Is aluminium powder hazardous for shipping?", a: "Yes. Aluminium powder is classified as a flammable material under IMDG regulations. Full MSDS and shipping documents are provided." },
              { q: "What is the minimum order quantity?", a: "MOQ starts from 25 kg for trial orders. Custom particle sizes are available for regular bulk orders." },
              { q: "Can custom particle sizes be supplied?", a: "Yes. Custom particle sizes and narrow distributions are available for regular bulk orders." },
              { q: "What are the payment terms?", a: "Advance payment is preferred for new orders. LC at sight can also be discussed for suitable bulk export orders." },
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 100} className="border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <h4 className="font-black text-navy mb-4 text-lg border-l-4 border-wine pl-4">{faq.q}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{faq.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🏁 Footer CTA */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <Reveal variant="fadeUp">
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight leading-none">
              Premium <span className="text-wine">Aluminium Export</span> Solutions
            </h2>
            <p className="text-white/40 text-lg mb-10 font-light max-w-2xl mx-auto">
              Secure your supply of high-purity aluminium powder and paste. Consistent quality, full documentation, and global logistics support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq">
                <Button variant="wine" className="px-10 py-6">Get Quotation</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="px-10 py-6">Contact Sales</Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default AluminiumPowder;
