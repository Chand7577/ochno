import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import {
  Card,
  CardContent,
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
  Zap: () => (
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
  Chart: () => (
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
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),
  File: () => (
    <svg
      className="w-5 h-5"
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
    const obs = new IntersectionObserver(
      ([e]) => {
        e.isIntersecting && setVisible(true);
      },
      { threshold: 0.1 },
    );
    ref.current && obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const variants = {
    fadeUp: visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
    zoomIn: visible ? "opacity-100 scale-100" : "opacity-0 scale-95",
    fadeIn: visible ? "opacity-100" : "opacity-0",
  };

  return (
    <div
      ref={ref}
      style={{ transition: "all 0.8s", transitionDelay: `${delay}ms` }}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

const FusedAlumina = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-wine/20"></div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-wine/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Reveal variant="fadeUp" delay={200}>
                <Badge className="mb-6 py-1 px-4 text-xs font-bold uppercase tracking-wider bg-wine/10 text-wine border-wine/20">
                  Imported from China & Global Sources
                </Badge>
              </Reveal>
              <Reveal variant="fadeUp" delay={400}>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                  WHITE & BROWN <br />
                  <span className="text-wine underline decoration-wine/30">
                    FUSED ALUMINA
                  </span>
                </h1>
              </Reveal>
              <Reveal variant="fadeUp" delay={600}>
                <p className="text-xl text-gray-300 max-w-2xl mb-10 font-light leading-relaxed">
                  Reliable Supply for Indian Abrasive, Refractory & Blasting
                  Industry. High-purity WFA (Al₂O₃ ≥99.5%) and tough BFA (Al₂O₃
                  ≥95%) across all FEPA sizes.
                </p>
              </Reveal>

              <Reveal variant="fadeUp" delay={800}>
                <div className="flex flex-wrap gap-4 mb-12">
                  <div className="flex items-center gap-2 text-white/80 text-sm bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Icons.Check /> COA with every lot
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-sm bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Icons.Check /> Ex-stock at JNPT/Mundra
                  </div>
                </div>
              </Reveal>

              <Reveal variant="fadeUp" delay={1000}>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Link to="/rfq" className="w-full sm:w-auto">
                    <Button
                      variant="wine"
                      className="w-full sm:w-64 h-14 text-lg font-bold shadow-2xl shadow-wine/20"
                    >
                      Enquire for Supply
                    </Button>
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full sm:w-64 h-14 text-lg font-bold border-white/20 text-white hover:bg-white/10"
                    >
                      Offer Your Supply
                    </Button>
                  </Link>
                </div>
              </Reveal>

              <Reveal
                variant="fadeUp"
                delay={1200}
                className="mt-12 flex items-center gap-6"
              >
                <a
                  href="https://wa.me/919315826476"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-wine transition-all">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-50">
                      Support & Expert Advice
                    </p>
                    <p className="text-lg font-black">+91 93158 26476</p>
                  </div>
                </a>
              </Reveal>
            </div>

            <Reveal
              variant="zoomIn"
              delay={800}
              className="hidden lg:block relative"
            >
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="h-64 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md overflow-hidden group hover:bg-white/10 transition-all">
                    <div className="p-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icons.Factory />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">
                        Grade: WFA
                      </h3>
                      <p className="text-white/60 text-sm">
                        Al₂O₃ ≥99.5% | White Corundum | Ultra-high purity
                      </p>
                    </div>
                  </div>
                  <div className="h-48 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md overflow-hidden group hover:bg-white/10 transition-all">
                    <div className="p-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icons.Shield />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">
                        Refractory
                      </h3>
                      <p className="text-white/60 text-sm">
                        Aggregates 0–8mm | High-alumina castables
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-48 bg-wine/20 border border-wine/30 rounded-3xl backdrop-blur-md overflow-hidden group hover:bg-wine/30 transition-all">
                    <div className="p-6">
                      <div className="w-12 h-12 bg-wine/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icons.Zap />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">
                        Grade: BFA
                      </h3>
                      <p className="text-white/60 text-sm">
                        Al₂O₃ ≥95% | Brown Corundum | Tough & Impact resistant
                      </p>
                    </div>
                  </div>
                  <div className="h-64 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md overflow-hidden group hover:bg-white/10 transition-all">
                    <div className="p-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icons.Chart />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">
                        FEPA Grit
                      </h3>
                      <p className="text-white/60 text-sm">
                        F4–F220 Macro | P12–P1200 Micro | JIS | ANSI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Abstract decorative circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full z-0"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full z-0"></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📊 Section 2 — Trust Bar */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 grid grid-cols-2 md:grid-cols-5 gap-8 border border-gray-100">
          {[
            { v: "5,000+", l: "MT Supplied/Year", sub: "to Indian Industry" },
            { v: "200+", l: "Plants Served", sub: "Abrasive & Refractory" },
            { v: "99%", l: "Source Reliability", sub: "Direct Factory Link" },
            { v: "WFA/BFA", l: "Dual Grades", sub: "In Stock at JNPT" },
            { v: "3-7 Days", l: "Lead Time", sub: "For Ex-stock Delivery" },
          ].map((stat, i) => (
            <Reveal
              key={i}
              delay={i * 100}
              variant="fadeUp"
              className="text-center"
            >
              <div className="text-3xl font-black text-navy mb-1">{stat.v}</div>
              <div className="text-wine font-bold text-xs uppercase tracking-tighter mb-1">
                {stat.l}
              </div>
              <div className="text-gray-400 text-[10px] font-medium leading-tight">
                {stat.sub}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 📸 Section 2.5 — Material Gallery */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tight leading-none mb-6">
              MATERIAL <span className="text-wine">GRADES & TEXTURES</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg italic">
              Visualizing the purity and grit consistency of our imported Fused
              Alumina range.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal variant="zoomIn" delay={100}>
              <div className="group relative aspect-square overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white transition-all hover:shadow-wine/20">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLL2bUze6VM1pUyaWK-tmkLGhtoS7l_hkS-g&s"
                  alt="White Fused Alumina Lumps"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <h4 className="text-white text-2xl font-black uppercase italic mb-2 tracking-tighter">
                    WFA Lumps
                  </h4>
                  <p className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                    High-Purity Bayer Alumina
                  </p>
                  <div className="w-12 h-1 bg-wine"></div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="zoomIn" delay={250}>
              <div className="group relative aspect-square overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white transition-all hover:shadow-wine/20">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2026/3/589032528/KE/LV/CH/8146802/white-fused-alumina-500x500.jpg"
                  alt="White Fused Alumina Powder"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/90 via-wine/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <h4 className="text-white text-2xl font-black uppercase italic mb-2 tracking-tighter">
                    WFA Powder
                  </h4>
                  <p className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                    Precision Macro & Micro Grit
                  </p>
                  <div className="w-12 h-1 bg-white"></div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="zoomIn" delay={400}>
              <div className="group relative aspect-square overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white transition-all hover:shadow-navy/20">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2024/3/396114254/ED/AB/EI/128036965/brown-fused-alumina-powder.jpg"
                  alt="Brown Fused Alumina Powder"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <h4 className="text-white text-2xl font-black uppercase italic mb-2 tracking-tighter">
                    BFA Powder
                  </h4>
                  <p className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                    Tough Impact Grade Corundum
                  </p>
                  <div className="w-12 h-1 bg-wine"></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ⚪ Section 3 — White Fused Alumina (WFA) */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeUp" className="relative">
              <Badge className="mb-6 bg-navy/5 text-navy border-navy/10 px-4 py-1">
                High Purity & Highly Friable
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 uppercase tracking-tight">
                White Fused <span className="text-wine">Alumina (WFA)</span>
              </h2>
              <div className="w-24 h-1.5 bg-wine rounded-full mb-10"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                Produced by fusing high-purity Bayer process alumina in an
                electric arc furnace at over 2000°C. The result is α-Al₂O₃
                corundum of ultra-high purity and white color. WFA is highly
                friable (self-sharpening), making it mandatory for precision
                grinding where zero iron contamination is critical.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Zero iron contamination — essential for Stainless/Titanium",
                  "Self-sharpening grain for cool cutting action",
                  "Critical low Na₂O content for refractory stability",
                  "Full COA with detailed sieve distribution per lot",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-wine/10 p-1.5 rounded-full text-wine">
                      <Icons.Check />
                    </div>
                    <p className="text-gray-700 font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="zoomIn" delay={200} className="relative">
              <div className="absolute -inset-10 bg-gray-50 rounded-[3rem] -z-10 blur-2xl opacity-50"></div>
              <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-xl">
                <h3 className="text-xl font-black text-navy mb-6 border-l-4 border-wine pl-4">
                  WFA Technical Specifications
                </h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-navy hover:bg-navy text-white text-[10px] font-black uppercase tracking-widest border-none">
                        <TableHead className="text-white px-4">
                          Parameter
                        </TableHead>
                        <TableHead className="text-white px-4 text-center">
                          Abrasive
                        </TableHead>
                        <TableHead className="text-white px-4 text-center">
                          Refractory
                        </TableHead>
                        <TableHead className="text-white px-4 text-center">
                          Micro
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          p: "Al₂O₃ % min",
                          a: "≥99.0%",
                          r: "≥99.5%",
                          m: "≥99.5%",
                        },
                        { p: "SiO₂ % max", a: "0.10%", r: "0.06%", m: "0.05%" },
                        {
                          p: "Fe₂O₃ % max",
                          a: "0.08%",
                          r: "0.06%",
                          m: "0.05%",
                        },
                        { p: "Na₂O % max", a: "0.40%", r: "0.30%", m: "0.25%" },
                        { p: "CaO % max", a: "0.05%", r: "0.02%", m: "0.02%" },
                        { p: "Mohs Hardness", a: "9", r: "9", m: "9" },
                        {
                          p: "Specific Gravity",
                          a: "3.95",
                          r: "3.95",
                          m: "3.95",
                        },
                        {
                          p: "Melting Point",
                          a: "2050°C",
                          r: "2050°C",
                          m: "2050°C",
                        },
                        {
                          p: "Bulk Density",
                          a: "1.75-1.95",
                          r: "1.80-2.00",
                          m: "—",
                        },
                      ].map((row, i) => (
                        <TableRow
                          key={i}
                          className={i % 2 === 0 ? "bg-gray-50/50" : ""}
                        >
                          <TableCell className="font-bold text-wine text-xs py-4 px-4">
                            {row.p}
                          </TableCell>
                          <TableCell className="font-black text-navy text-xs text-center">
                            {row.a}
                          </TableCell>
                          <TableCell className="font-black text-navy text-xs text-center">
                            {row.r}
                          </TableCell>
                          <TableCell className="font-black text-navy text-xs text-center">
                            {row.m}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-8 p-4 bg-navy rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <p className="text-white/60 text-[10px] uppercase font-black tracking-widest mb-2">
                      Available Sizes
                    </p>
                    <p className="text-white text-xs font-medium">
                      FEPA F12–F220 | Refractory 0–8mm | D50 1–45µm
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="flex items-center gap-2 bg-wine hover:bg-wine/80 text-white text-[10px] font-black uppercase px-3 py-2 rounded-lg transition-colors"
                    >
                      <Icons.File /> TDS
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-[10px] font-black uppercase px-3 py-2 rounded-lg transition-colors border border-white/10"
                    >
                      <Icons.File /> MSDS
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🟤 Section 4 — Brown Fused Alumina (BFA) */}
      <section className="py-32 bg-[#f8f9fb] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="zoomIn" className="order-2 lg:order-1 relative">
              <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-xl">
                <h3 className="text-xl font-black text-navy mb-6 border-l-4 border-wine pl-4">
                  BFA Technical Specifications
                </h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-wine hover:bg-wine text-white text-[10px] font-black uppercase tracking-widest border-none">
                        <TableHead className="text-white px-4">
                          Parameter
                        </TableHead>
                        <TableHead className="text-white px-4 text-center">
                          Regular
                        </TableHead>
                        <TableHead className="text-white px-4 text-center">
                          Purity
                        </TableHead>
                        <TableHead className="text-white px-4 text-center">
                          Refractory
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          p: "Al₂O₃ % min",
                          a: "95.0%",
                          r: "97.0%",
                          m: "95.0%",
                        },
                        {
                          p: "TiO₂ %",
                          a: "2.0-3.8%",
                          r: "1.5-2.5%",
                          m: "2.0-3.5%",
                        },
                        { p: "SiO₂ % max", a: "1.5%", r: "1.0%", m: "1.5%" },
                        {
                          p: "Fe₂O₃ % max",
                          a: "0.30%",
                          r: "0.20%",
                          m: "0.30%",
                        },
                        { p: "CaO % max", a: "0.50%", r: "0.40%", m: "0.50%" },
                        {
                          p: "Magnetic % max",
                          a: "0.05%",
                          r: "0.03%",
                          m: "0.05%",
                        },
                        { p: "Mohs Hardness", a: "9", r: "9", m: "9" },
                        {
                          p: "Specific Gravity",
                          a: "3.90-4.10",
                          r: "3.95",
                          m: "3.90-4.10",
                        },
                        {
                          p: "Melting Point",
                          a: "1950°C",
                          r: "1950°C",
                          m: "1950°C",
                        },
                      ].map((row, i) => (
                        <TableRow
                          key={i}
                          className={i % 2 === 0 ? "bg-gray-50/50" : ""}
                        >
                          <TableCell className="font-bold text-wine text-xs py-4 px-4">
                            {row.p}
                          </TableCell>
                          <TableCell className="font-black text-navy text-xs text-center">
                            {row.a}
                          </TableCell>
                          <TableCell className="font-black text-navy text-xs text-center">
                            {row.r}
                          </TableCell>
                          <TableCell className="font-black text-navy text-xs text-center">
                            {row.m}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <p className="text-gray-400 text-[10px] uppercase font-black tracking-widest mb-1">
                      Macro sizes
                    </p>
                    <p className="text-navy text-xs font-black">FEPA F4–F220</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <p className="text-gray-400 text-[10px] uppercase font-black tracking-widest mb-1">
                      Refractory
                    </p>
                    <p className="text-navy text-xs font-black">
                      0–8mm aggregates
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 bg-wine hover:bg-wine/80 text-white text-[10px] font-black uppercase px-4 py-3 rounded-2xl transition-colors"
                  >
                    <Icons.File /> Download TDS
                  </a>
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 bg-navy hover:bg-navy/80 text-white text-[10px] font-black uppercase px-4 py-3 rounded-2xl transition-colors"
                  >
                    <Icons.File /> View MSDS
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" className="order-1 lg:order-2">
              <Badge className="mb-6 bg-wine/5 text-wine border-wine/10 px-4 py-1">
                Tough & Impact Resistant
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 uppercase tracking-tight">
                Brown Fused <span className="text-wine">Alumina (BFA)</span>
              </h2>
              <div className="w-24 h-1.5 bg-wine rounded-full mb-10"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                Produced by fusing calcined bauxite with anthracite and iron
                scrap at ~2000–2200°C. TiO₂ from bauxite remains as a toughening
                agent, giving BFA its characteristic brown color and exceptional
                impact resistance. It's the "workhorse" abrasive for heavy-duty
                grinding of steel and alloys.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  {
                    t: "Toughness Agent",
                    d: "TiO₂ content (2.5-3.8%) makes the grain survive heavy feed rates.",
                  },
                  {
                    t: "Cost Effective",
                    d: "Optimal for general-purpose steel grinding where WFA purity isn't needed.",
                  },
                  {
                    t: "Magnetic Control",
                    d: "Guaranteed magnetic material below 0.05% for wheel stability.",
                  },
                  {
                    t: "Versatile Use",
                    d: "Ideal for grinding wheels, sandblasting, and refractory bricks.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-2xl shadow-sm border border-gray-50"
                  >
                    <h4 className="font-black text-navy text-sm mb-2">
                      {item.t}
                    </h4>
                    <p className="text-gray-500 text-xs font-medium leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ⚖️ Section 5 — Selection Guide */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#88204a_0%,transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              WFA vs BFA — <span className="text-wine">WHICH DO YOU NEED?</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light">
              Plain-language selection guide for Indian industrial buyers based
              on material and application.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                m: "Stainless, Ti, Al, Cu",
                g: "WFA Only",
                d: "Iron from BFA contaminates surface and causes corrosion.",
              },
              {
                m: "HSS, Alloy Steel",
                g: "WFA Preferred",
                d: "Self-sharpening, cool cutting action prevents workpiece burn.",
              },
              {
                m: "Carbon Steel, Cast Iron",
                g: "BFA (Regular)",
                d: "More cost-effective; tough grain survives heavy feed rates.",
              },
              {
                m: "Structural Steel Blast",
                g: "BFA F16-F46",
                d: "Excellent for rust removal and surface prep.",
              },
              {
                m: "Aluminium Profiling Blast",
                g: "Low-iron BFA",
                d: "Special grade to avoid cross-contamination on Al/Cu.",
              },
              {
                m: "Precision Casting",
                g: "WFA Shell",
                d: "High dimensional accuracy and thermal stability.",
              },
              {
                m: "High-Temp Refractory",
                g: "WFA Refractory",
                d: "Purer grade (1600°C+); better slag resistance.",
              },
              {
                m: "Standard Refractory",
                g: "BFA Aggregate",
                d: "Durable for general-duty refractory applications.",
              },
              {
                m: "Lapping & Polishing",
                g: "WFA Micro",
                d: "For optical glass, semiconductor and watch crystals.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 50} variant="zoomIn">
                <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group">
                  <p className="text-wine font-black text-[10px] uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                    Application Material
                  </p>
                  <h4 className="text-white font-bold text-xl mb-3">
                    {item.m}
                  </h4>
                  <div className="inline-block px-3 py-1 bg-wine rounded-lg text-white text-[10px] font-black uppercase mb-4">
                    {item.g}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            variant="fadeUp"
            delay={400}
            className="mt-16 text-center bg-white/5 p-10 rounded-[2rem] border border-white/10"
          >
            <h3 className="text-2xl font-black text-white mb-4 italic">
              Not sure which grade is right for you?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Share your material, application and surface finish requirement —
              our technical team will confirm the exact grade and grit size.
            </p>
            <Link to="/contact">
              <Button variant="wine" className="px-12 h-14 text-lg font-bold">
                Consult Technical Expert
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 🏭 Section 6 — Industry Applications */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-left mb-20 flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 uppercase tracking-tight leading-none">
                INDUSTRY <span className="text-wine">APPLICATIONS</span> IN
                INDIA
              </h2>
              <div className="w-24 h-1.5 bg-wine rounded-full"></div>
            </div>
            <p className="text-gray-500 font-medium text-lg md:text-right max-w-sm">
              Supporting India's manufacturing hubs from Rajkot to Coimbatore.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                t: "Grinding Wheel Manufacturers",
                d: "The largest segment in India. Vitrified and resin-bonded wheels for the Rajkot cluster (200+ units), Pune, and Chennai hubs. All FEPA F-grit sizes.",
                icon: <Icons.Factory />,
              },
              {
                t: "Coated Abrasives",
                d: "BFA P-grit for sandpaper, belts, and flap discs. High-volume consumption by automotive body shops, furniture, and fabrication industries.",
                icon: <Icons.Zap />,
              },
              {
                t: "Refractory Manufacturers",
                d: "WFA aggregate for high-alumina premium castables; BFA for standard bricks and monolithics used in steel plants and cement kilns.",
                icon: <Icons.Shield />,
              },
              {
                t: "Surface Blasting / Shot Blasting",
                d: "BFA F16–F46 for structural steel, bridges, and pipelines. Low-iron BFA for aerospace and aluminium profiles.",
                icon: <Icons.Check />,
              },
              {
                t: "Precision Investment Casting",
                d: "WFA as shell material for high dimensional accuracy. Servicing automotive and aerospace foundries in Rajkot, Pune, and Coimbatore.",
                icon: <Icons.Globe />,
              },
              {
                t: "Lapping and Polishing",
                d: "WFA micro-powder (F280–F1200) for optical glass, watch crystals, and semiconductor wafers.",
                icon: <Icons.Chart />,
              },
              {
                t: "Anti-skid Coatings",
                d: "WFA and BFA coarse grits in epoxy flooring and anti-skid paints for factory floors, ramps, and aircraft hangars.",
                icon: <Icons.Shield />,
              },
              {
                t: "Dental & Dermatology",
                d: "Ultra-fine WFA micro-powder in dental polishing pastes and dermatological microdermabrasion devices.",
                icon: <Icons.Check />,
              },
            ].map((app, i) => (
              <Reveal key={i} delay={i * 100} variant="fadeUp">
                <div className="group h-full bg-gray-50 rounded-[2.5rem] p-10 border border-transparent hover:border-wine/20 hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-wine group-hover:text-white transition-all">
                    {app.icon}
                  </div>
                  <h4 className="text-2xl font-black text-navy mb-4">
                    {app.t}
                  </h4>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    {app.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ Section 7 — Buyer Advantages */}
      <section className="py-32 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 uppercase tracking-tight">
              WHY BUY FROM US —{" "}
              <span className="text-wine">BUYER ADVANTAGES</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                t: "Quality & Consistency",
                items: [
                  "Fixed plant source (No trading mix)",
                  "Full COA with every single lot",
                  "Magnetic material verified <0.05%",
                  "SGS/Intertek inspection available",
                ],
              },
              {
                t: "Supply Reliability",
                items: [
                  "WFA & BFA from one supplier",
                  "Multiple FEPA sizes in stock",
                  "Ex-stock delivery (3-7 days)",
                  "Long-term supply contracts",
                ],
              },
              {
                t: "Technical Support",
                items: [
                  "Grade & grit recommendations",
                  "Custom narrow sieve distributions",
                  "Trial 100-500kg orders supported",
                  "Formulation queries answered",
                ],
              },
              {
                t: "Commercial & Logistics",
                items: [
                  "Competitive CIF / DAP pricing",
                  "25kg & 1MT jumbo bag options",
                  "LCL from 500kg for trials",
                  "REACH, MSDS, COA standard",
                ],
              },
            ].map((section, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <div className="h-full bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col">
                  <h4 className="text-xl font-black text-navy mb-6 pb-4 border-b border-gray-100">
                    {section.t}
                  </h4>
                  <ul className="space-y-4 flex-grow">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="mt-1 text-wine shrink-0">
                          <Icons.Check />
                        </div>
                        <span className="text-gray-600 text-sm font-bold leading-tight">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Section 8 — Foreign Supplier Partnership */}
      <section className="py-32 bg-navy text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeUp">
              <Badge className="mb-6 bg-wine text-white border-none py-1 px-4">
                For Exporters
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">
                Foreign Supplier <span className="text-wine">& Exporter</span>{" "}
                Partnership
              </h2>
              <div className="w-24 h-1.5 bg-wine rounded-full mb-10"></div>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We work directly with fused alumina manufacturers (not traders)
                for the Indian market. Our model is based on long-term, repeat
                shipment programs, not spot trading.
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="font-bold mb-2">What we evaluate:</h4>
                  <p className="text-gray-400 text-sm">
                    Material is evaluated on TiO₂ (BFA), Na₂O (WFA) and sieve
                    consistency, not just Al₂O₃. We welcome manufacturers from
                    China, Malaysia, Japan and other origins.
                  </p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="font-bold mb-2">Dual-Sourcing Approach:</h4>
                  <p className="text-gray-400 text-sm">
                    We prefer partners aligned with stable supply cycles and
                    ongoing volume commitments. Lot-wise COA and controlled
                    magnetic content (≤0.05%) are mandatory.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal
              variant="zoomIn"
              delay={200}
              className="bg-white rounded-[2.5rem] p-10 text-navy shadow-2xl"
            >
              <h3 className="text-2xl font-black mb-6">Exporter Inquiry</h3>
              <p className="text-gray-500 mb-8 text-sm">
                Interested in supplying the Indian market? Provide your plant
                details below.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none focus:border-wine"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none focus:border-wine"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Plant Location"
                  className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none focus:border-wine"
                />
                <div className="grid grid-cols-2 gap-4">
                  <select className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none focus:border-wine">
                    <option>Product Type</option>
                    <option>WFA Only</option>
                    <option>BFA Only</option>
                    <option>Both WFA/BFA</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Al₂O₃ %"
                    className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none focus:border-wine"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Monthly Export Capacity (MT)"
                  className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none focus:border-wine"
                />
                <input
                  type="text"
                  placeholder="Contact Person (Email / WhatsApp)"
                  className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none focus:border-wine"
                />
                <textarea
                  placeholder="Available Grit Sizes & FOB Indication"
                  className="w-full h-32 bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm focus:outline-none focus:border-wine"
                ></textarea>
                <Button
                  variant="wine"
                  className="w-full h-14 font-bold uppercase tracking-widest"
                >
                  Submit Proposal
                </Button>
                <p className="text-center text-[10px] text-gray-400 font-bold uppercase mt-4">
                  Supplier enquiries responded within 24 hours
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📉 Section 9 — Market Context */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 uppercase tracking-tight">
              INDIA'S FUSED ALUMINA MARKET —{" "}
              <span className="text-wine">WHY IMPORTS ARE ESSENTIAL</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full"></div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Reveal
              variant="zoomIn"
              className="bg-gray-50 p-10 rounded-[2.5rem] border border-transparent hover:border-wine/20 transition-all"
            >
              <h4 className="text-navy font-black text-xl mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-wine">
                  <Icons.Globe />
                </span>
                Global Leader
              </h4>
              <p className="text-gray-600 font-medium leading-relaxed">
                India is the world's largest importer of Brown Fused Alumina,
                leading globally with 6,000+ shipments annually, ahead of
                Vietnam and Indonesia.
              </p>
            </Reveal>
            <Reveal
              variant="zoomIn"
              delay={100}
              className="bg-navy p-10 rounded-[2.5rem] text-white"
            >
              <h4 className="text-white font-black text-xl mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shadow-sm text-wine">
                  <Icons.Shield />
                </span>
                Supply Gap
              </h4>
              <p className="text-gray-400 font-medium leading-relaxed">
                India does not produce WFA or BFA domestically at commercial
                scale. 99% of imports originate from China, making reliable
                supply channels critical.
              </p>
            </Reveal>
            <Reveal
              variant="zoomIn"
              delay={200}
              className="bg-gray-50 p-10 rounded-[2.5rem] border border-transparent hover:border-wine/20 transition-all"
            >
              <h4 className="text-navy font-black text-xl mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-wine">
                  <Icons.Chart />
                </span>
                Supply Security
              </h4>
              <p className="text-gray-600 font-medium leading-relaxed">
                Post-COVID, Indian buyers are actively looking beyond China. We
                facilitate supply diversification from Malaysia and Japan
                origins.
              </p>
            </Reveal>
          </div>

          <Reveal
            variant="fadeUp"
            className="mt-16 overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-xl"
          >
            <div className="bg-gray-50 p-6 border-b border-gray-100 flex items-center justify-between">
              <h4 className="text-navy font-black uppercase tracking-tight">
                2025 Indicative Pricing Reference
              </h4>
              <Badge variant="outline">USD / MT FOB</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="p-8">
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2">
                  WFA Abrasive Grade
                </p>
                <p className="text-3xl font-black text-navy">$600 – $1,100</p>
              </div>
              <div className="p-8">
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2">
                  WFA High-Purity Refractory
                </p>
                <p className="text-3xl font-black text-wine">$900 – $1,600</p>
              </div>
              <div className="p-8">
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2">
                  BFA Regular Grade
                </p>
                <p className="text-3xl font-black text-navy">$400 – $700</p>
              </div>
            </div>
            <div className="bg-navy p-4 text-center">
              <p className="text-white/60 text-[10px] font-bold italic uppercase tracking-widest">
                Specific pricing varies with grit size, quantity and origin
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 📋 Section 12 — Dual Contact Forms */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 uppercase tracking-tight">
              GET A <span className="text-wine">QUOTATION</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
              For Indian buyers looking for reliable supply. Response commitment
              within 2 hours.
            </p>
          </Reveal>

          <Reveal
            variant="zoomIn"
            className="max-w-4xl mx-auto bg-gray-50 rounded-[3rem] p-12 border border-gray-100 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-navy uppercase tracking-widest ml-4">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full h-14 bg-white border border-gray-100 rounded-2xl px-6 text-sm focus:outline-none focus:border-wine shadow-sm"
                    placeholder="e.g., Rajkot Grinding Wheels Pvt Ltd"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-navy uppercase tracking-widest ml-4">
                    State / City
                  </label>
                  <input
                    type="text"
                    className="w-full h-14 bg-white border border-gray-100 rounded-2xl px-6 text-sm focus:outline-none focus:border-wine shadow-sm"
                    placeholder="e.g., Gujarat / Rajkot"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-navy uppercase tracking-widest ml-4">
                    Grade Required
                  </label>
                  <select className="w-full h-14 bg-white border border-gray-100 rounded-2xl px-6 text-sm focus:outline-none focus:border-wine shadow-sm">
                    <option>WFA (White)</option>
                    <option>BFA (Brown)</option>
                    <option>Both WFA & BFA</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-navy uppercase tracking-widest ml-4">
                    Primary Application
                  </label>
                  <select className="w-full h-14 bg-white border border-gray-100 rounded-2xl px-6 text-sm focus:outline-none focus:border-wine shadow-sm">
                    <option>Abrasive Manufacturing</option>
                    <option>Refractory / Castables</option>
                    <option>Blasting Media</option>
                    <option>Polishing / Lapping</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-navy uppercase tracking-widest ml-4">
                    FEPA Grit Sizes Needed
                  </label>
                  <input
                    type="text"
                    className="w-full h-14 bg-white border border-gray-100 rounded-2xl px-6 text-sm focus:outline-none focus:border-wine shadow-sm"
                    placeholder="e.g., F16, F24, F60"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navy uppercase tracking-widest ml-4">
                      Quantity per Month (MT)
                    </label>
                    <input
                      type="text"
                      className="w-full h-14 bg-white border border-gray-100 rounded-2xl px-6 text-sm focus:outline-none focus:border-wine shadow-sm"
                      placeholder="e.g., 20 MT"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-navy uppercase tracking-widest ml-4">
                      Preferred Payment Method
                    </label>
                    <select className="w-full h-14 bg-white border border-gray-100 rounded-2xl px-6 text-sm focus:outline-none focus:border-wine shadow-sm">
                      <option>Letter of Credit (LC)</option>
                      <option>Bank Guarantee (BG)</option>
                      <option>Advance / TT</option>
                      <option>Credit Terms (Verified Buyers)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-navy uppercase tracking-widest ml-4">
                  Additional Requirements / Delivery Location
                </label>
                <textarea
                  className="w-full h-32 bg-white border border-gray-100 rounded-2xl p-6 text-sm focus:outline-none focus:border-wine shadow-sm"
                  placeholder="Specific chemistry limits, bag type (25kg/Jumbo), and final delivery plant location."
                ></textarea>
              </div>

              <Button
                variant="wine"
                className="w-full h-16 text-xl font-black uppercase tracking-widest shadow-xl shadow-wine/20"
              >
                Submit Inquiry
              </Button>

              <div className="flex items-center justify-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Buyer enquiries within 2 hours
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Direct Plant COA Verified
                  </span>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ❓ FAQs Section */}
      <section className="py-32 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl font-black text-navy mb-6 uppercase tracking-tight">
              FREQUENTLY ASKED <span className="text-wine">QUESTIONS</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full"></div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                q: "What is the difference between white and brown fused alumina?",
                a: "WFA is high purity (>99.5% Al₂O₃), iron-free, and highly friable, making it ideal for precision grinding of stainless steel and alloy steel. BFA is tougher and more cost-effective (95% Al₂O₃), containing TiO₂ as a toughening agent, suitable for general-purpose grinding of carbon steel and blasting.",
              },
              {
                q: "What grit sizes are available?",
                a: "We supply a full range of FEPA F-grits (F4–F220) for abrasives and refractory aggregate sizes from 0–1mm to 5–8mm. Micro-powders (F280–F1200) and custom narrow sieve distributions are also available on request.",
              },
              {
                q: "Why is TiO₂ important in BFA?",
                a: "TiO₂ acts as a toughening agent. Higher TiO₂ (2.5–3.8%) creates a tougher grain for heavy-duty grinding wheels, while lower TiO₂ (1.5–2.0%) results in a sharper cutting grain preferred for coated abrasives (sandpaper/belts).",
              },
              {
                q: "What is the minimum order and lead time?",
                a: "The minimum order quantity is 500 kg (trial possible). For stock material at JNPT or Mundra, delivery takes 3–10 days. Fresh imports for non-stock sizes typically require 30–40 days.",
              },
              {
                q: "How do import duties affect pricing?",
                a: "Fused alumina is subject to import duties in India. We provide final landed cost (DAP/CIF) including all customs, duties, and logistics costs before order confirmation to ensure full price transparency.",
              },
              {
                q: "Can WFA and BFA be shipped together?",
                a: "Yes, both grades can be consolidated in a single container with separate packing and documentation, which is highly efficient for smaller buyers needing both materials.",
              },
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 100} variant="fadeUp">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 group hover:border-wine/20 transition-all">
                  <h4 className="text-lg font-black text-navy mb-4 flex items-center gap-4">
                    <span className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center text-wine text-xs shrink-0 font-black">
                      Q{i + 1}
                    </span>
                    {faq.q}
                  </h4>
                  <p className="text-gray-500 font-medium leading-relaxed pl-12">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🏁 Footer CTA */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-wine/40"></div>
          <div className="absolute right-0 bottom-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
          <Reveal variant="fadeUp">
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">
              SECURE YOUR SUPPLY OF <br />
              <span className="text-wine">PREMIUM FUSED ALUMINA</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
              Join 200+ Indian manufacturers relying on our consistent quality
              and reliable logistics. Trial orders from 500kg supported.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq" className="w-full sm:w-auto">
                <Button
                  variant="wine"
                  className="w-full sm:w-64 h-14 text-lg font-bold shadow-2xl shadow-wine/40"
                >
                  Get Price Quote
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-64 h-14 text-lg font-bold border-white/20 text-white hover:bg-white/10"
                >
                  Speak to Expert
                </Button>
              </Link>
            </div>
            <div className="mt-16 flex items-center justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-xs font-black uppercase tracking-widest border border-white/20 px-4 py-2 rounded-lg">
                REACH COMPLIANT
              </div>
              <div className="text-xs font-black uppercase tracking-widest border border-white/20 px-4 py-2 rounded-lg">
                ISO 9001:2015
              </div>
              <div className="text-xs font-black uppercase tracking-widest border border-white/20 px-4 py-2 rounded-lg">
                COA VERIFIED
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default FusedAlumina;
