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
import limestoneImage from "../assets/limestone.jpeg";
import limestoneVideo from "../assets/limestone-video.mp4";
import yellowishLimestone from "../assets/yellowish-limestone.jpg";
import lightGreyLimestone from "../assets/light-grey-limestone.jpg";
import limestoneReport from "../assets/docs/Indian Limestone report.PDF";

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
  Cement: () => (
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
  Steel: () => (
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
        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
      />
    </svg>
  ),
  Construction: () => (
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
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  ),
  Chemical: () => (
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

const Limestone = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={limestoneImage}
            alt="Limestone Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
          <Reveal variant="fadeUp" delay={200}>
            <Badge className="mb-6 mt-12">
              Calcium Carbonate (CaCO₃) · Natural Stone · High Purity
            </Badge>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight uppercase">
              Lime <span className="text-wine">Stone</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              A high-quality sedimentary rock primarily composed of calcium
              carbonate (CaCO₃). Essential for cement production, steel
              manufacturing, and chemical industries. Our limestone is sourced
              from premium mines, ensuring high quality, bulk availability, and
              competitive pricing.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { l: "Calcium Carbonate", v: "High Purity" },
                { l: "Forms", v: "Lumps & Powder" },
                { l: "Silica Content", v: "1% – 10% Range" },
                { l: "Availability", v: "Large Bulk Supply" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md"
                >
                  <div className="text-wine font-black text-xs uppercase tracking-tighter mb-1">
                    {stat.l}
                  </div>
                  <div className="text-white text-xs font-medium opacity-60">
                    {stat.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq">
                <Button variant="wine">Request Quote</Button>
              </Link>
              <a
                href="https://wa.me/919258720699"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">Consult Expert</Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🔬 About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeUp">
              <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
                About <span className="text-wine">Limestone</span>
              </h2>
              <div className="w-24 h-1 bg-wine rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                Limestone is a naturally occurring stone composed primarily of
                calcium carbonate (CaCO₃). It is formed over millions of years
                through the accumulation of sea shells, coral, and other mineral
                debris. Due to its versatile properties, it is one of the most
                widely used minerals in heavy industries.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-wine/10 p-2 rounded-lg">
                    <Icons.Layers />
                  </div>
                  <div>
                    <h4 className="font-black text-navy">Origin & Formation</h4>
                    <p className="text-gray-500 text-sm">
                      Formed from marine organic debris and calcium minerals
                      over geological eras.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-wine/10 p-2 rounded-lg">
                    <Icons.Globe />
                  </div>
                  <div>
                    <h4 className="font-black text-navy">
                      Global Availability
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Vast reserves in India with strategic export advantages
                      for bulk supply.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-wine/5 rounded-[3rem] group-hover:bg-wine/10 transition-colors"></div>
                <div className="relative bg-gray-100 rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl">
                  <video
                    src={limestoneVideo}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🎨 Characteristics Section */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Physical <span className="text-wine">Properties</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full"></div>
          </Reveal>

          <div className="grid grid-cols-1 gap-12 mx-auto">
            <Reveal variant="fadeUp" delay={100}>
              <Card className="border-t-8 border-wine bg-white shadow-sm hover:shadow-xl transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-black text-navy">
                    Available Colors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <li className="flex flex-col items-center gap-6 font-bold text-navy/80 p-6 rounded-3xl hover:bg-gray-50 transition-all group border border-transparent hover:border-wine/10">
                      <div className="w-full h-48 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all">
                        <img
                          src={limestoneImage}
                          alt="White Limestone"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-2xl font-black text-[#002d52] mb-1">
                          White
                        </span>
                        <span className="text-sm text-wine font-bold uppercase tracking-[0.2em]">
                          High Purity
                        </span>
                      </div>
                    </li>
                    <li className="flex flex-col items-center gap-6 font-bold text-navy/80 p-6 rounded-3xl hover:bg-gray-50 transition-all group border border-transparent hover:border-wine/10">
                      <div className="w-full h-48 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all">
                        <img
                          src={lightGreyLimestone}
                          alt="Light Grey Limestone"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-2xl font-black text-[#002d52] mb-1">
                          Light Grey
                        </span>
                        <span className="text-sm text-wine font-bold uppercase tracking-[0.2em]">
                          Standard Grade
                        </span>
                      </div>
                    </li>
                    <li className="flex flex-col items-center gap-6 font-bold text-navy/80 p-6 rounded-3xl hover:bg-gray-50 transition-all group border border-transparent hover:border-wine/10">
                      <div className="w-full h-48 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all">
                        <img
                          src={yellowishLimestone}
                          alt="Yellowish Limestone"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-2xl font-black text-[#002d52] mb-1">
                          Yellowish (Buff)
                        </span>
                        <span className="text-sm text-wine font-bold uppercase tracking-[0.2em]">
                          Natural Earth
                        </span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal
              variant="fadeUp"
              delay={300}
              className="max-w-4xl mx-auto w-full mt-12"
            >
              <h3 className="text-3xl font-black text-navy text-center mb-8 uppercase tracking-tight">
                Forms & <span className="text-wine">Grades</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative group rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                  <div className="h-64 w-full">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrzsf9hBQi6d1rjLEMkG2JXOQNmlmATat_Mw&s"
                      alt="Limestone Lumps"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent flex flex-col justify-end p-8 pointer-events-none">
                    <span className="font-black text-white text-3xl italic mb-2">
                      Lumps
                    </span>
                    <div>
                      <Badge className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm px-4 py-1 pointer-events-auto">
                        Crushed Stone
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="relative group rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                  <div className="h-64 w-full">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPcFF4iUZ4UDUXI-boEup7yW_T9nwzGcwvw&s"
                      alt="Limestone Powder"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-wine/90 via-wine/40 to-transparent flex flex-col justify-end p-8 pointer-events-none">
                    <span className="font-black text-white text-3xl italic mb-2">
                      Powder
                    </span>
                    <div>
                      <Badge className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm px-4 py-1 pointer-events-auto">
                        Fine Graded
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📊 Detailed Specifications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Technical <span className="text-wine">Specifications</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto">
              Comprehensive chemical analysis and industrial standards for our
              Limestone grades.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* 🇮🇳 General Limestone Specification (India) */}
            <Reveal variant="fadeUp">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-navy p-6 text-white text-center">
                  <h3 className="text-xl font-black uppercase tracking-tight italic">
                    General Spec (India)
                  </h3>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50/80 hover:bg-gray-50/80 border-none">
                      <TableHead className="px-6 text-navy font-black uppercase text-[10px] tracking-widest">
                        Parameter (%)
                      </TableHead>
                      <TableHead className="px-6 text-right text-navy font-black uppercase text-[10px] tracking-widest">
                        Range
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { label: "CaCO₃", val: "44% – 52%" },
                      { label: "CaO", val: "42% – 52%" },
                      { label: "MgCO₃", val: "0.5% – 4%" },
                      { label: "SiO₂ (Silica)", val: "2% – 5%" },
                      { label: "Al₂O₃", val: "0.5% – 2.5%" },
                      { label: "Fe₂O₃", val: "0.5% – 2%" },
                      { label: "Moisture", val: "< 2%" },
                    ].map((item, i) => (
                      <TableRow
                        key={i}
                        className="border-b border-gray-50 hover:bg-gray-50/30 transition-colors"
                      >
                        <TableCell className="px-6 py-4 font-black text-navy italic">
                          {item.label}
                        </TableCell>
                        <TableCell className="px-6 py-4 text-right">
                          <span className="text-lg font-black text-wine">
                            {item.val}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="bg-[#f8f9fb] p-4 border-t border-gray-100 text-[10px] text-navy/60 italic font-medium">
                  Note: Low-silica limestone is found in specific Indian
                  regions.
                </div>
              </div>
            </Reveal>

            {/* 📋 Premium Buyer Specification */}
            <Reveal variant="fadeUp" delay={200}>
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-wine p-6 text-white text-center">
                  <h3 className="text-xl font-black uppercase tracking-tight italic">
                    Premium Specs India
                  </h3>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50/80 hover:bg-gray-50/80 border-none">
                      <TableHead className="px-6 text-navy font-black uppercase text-[10px] tracking-widest">
                        Parameter
                      </TableHead>
                      <TableHead className="px-6 text-right text-navy font-black uppercase text-[10px] tracking-widest">
                        Buyer Standard
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { p: "CaCO3 (%)", s: "Min. 94%" },
                      { p: "MgCO3 (%)", s: "2.5%" },
                      { p: "Moisture (%)", s: "Max. 2%" },
                      { p: "Al2O3 + Fe2O3 (%)", s: "Max. 0.1%" },
                      { p: "CaSO4 (%)", s: "Max. 0.15%" },
                      { p: "Silica (%)", s: "Max. 1.5%" },
                      { p: "TOC (%)", s: "Max. 0.2%" },
                      { p: "Size (mm)", s: "20–40 mm" },
                    ].map((row, i) => (
                      <TableRow
                        key={i}
                        className="border-b border-gray-50 hover:bg-gray-50/30 transition-colors"
                      >
                        <TableCell className="px-6 py-4 font-black text-navy italic">
                          {row.p}
                        </TableCell>
                        <TableCell className="px-6 py-4 text-right">
                          <span className="text-lg font-black text-wine">
                            {row.s}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="bg-[#f8f9fb] p-4 border-t border-gray-100 text-[10px] text-navy/60 italic font-medium">
                  Targeted for international export and high-purity industrial
                  use.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* 🧪 Verified Lab Analysis Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
              Certified Lab Report
            </span>
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Specifications of LimeStone{" "}
              <span className="text-wine">import from Oman -</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto">
              Real-world test results for our Oman premium grade limestone,
              showing exceptional purity and consistent sizing.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
            {/* Chemical Analysis Table */}
            <Reveal variant="fadeUp" className="xl:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-[#002d52] p-6 text-white flex items-center justify-between">
                  <h3 className="text-xl font-black uppercase tracking-tight italic">
                    Chemical Analysis
                  </h3>
                  <Badge className="bg-white/10 text-white border-white/20">
                    ASTM C25 / IS 2109
                  </Badge>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50/80 hover:bg-gray-50/80 border-none">
                      <TableHead className="px-8 text-navy font-black uppercase text-[10px] tracking-widest text-left">
                        Specifications
                      </TableHead>
                      <TableHead className="w-[150px] pl-18 text-navy font-black uppercase text-[10px] tracking-widest text-center ">
                        Method
                      </TableHead>
                      <TableHead className="px-8 text-navy font-black uppercase text-[10px] tracking-widest text-right">
                        Results (%)
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { s: "CaO", m: "ASTM C25", r: "55.10" },
                      { s: "CaCO₃", m: "ASTM C25", r: "98.34" },
                      { s: "MgO", m: "ASTM C25", r: "0.35" },
                      { s: "SiO₂", m: "ASTM C25", r: "0.12" },
                      { s: "Al₂O₃", m: "ASTM C25", r: "0.056" },
                      { s: "Fe₂O₃", m: "ASTM C25", r: "0.040" },
                      { s: "Moisture", m: "IS 2109", r: "0.18" },
                    ].map((row, i) => (
                      <TableRow
                        key={i}
                        className="border-b border-gray-50 hover:bg-gray-50/30 transition-colors"
                      >
                        <TableCell className="px-8 py-4 font-black text-navy italic text-left">
                          {row.s}
                        </TableCell>
                        <TableCell className="w-[150px] py-4 pl-[4rem]">
                          <div className="flex justify-center">
                            <span className="inline-block px-3 py-1 bg-gray-100 rounded-md text-gray-500 font-bold text-[10px] uppercase">
                              {row.m}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="px-8 py-4 text-right">
                          <span className="text-xl font-black text-wine">
                            {row.r}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Reveal>

            {/* Size Analysis Table */}
            <Reveal variant="fadeUp" delay={200}>
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden h-full">
                <div className="bg-wine p-6 text-white flex items-center justify-between">
                  <h3 className="text-xl font-black uppercase tracking-tight italic">
                    Size Analysis
                  </h3>
                  <Badge className="bg-white/10 text-white border-white/20">
                    Sieve Test
                  </Badge>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50/80 hover:bg-gray-50/80 border-none">
                      <TableHead className="px-6 text-navy font-black uppercase text-[10px] tracking-widest">
                        Fraction
                      </TableHead>
                      <TableHead className="px-6 text-right text-navy font-black uppercase text-[10px] tracking-widest">
                        Results (%)
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { s: "Above 60 MM", r: "0.10" },
                      { s: "Between 30-60 MM", r: "95.04" },
                      { s: "Below 30 MM", r: "4.86" },
                    ].map((row, i) => (
                      <TableRow
                        key={i}
                        className="border-b border-gray-50 hover:bg-gray-50/30 transition-colors"
                      >
                        <TableCell className="px-6 py-8 font-black text-navy italic">
                          {row.s}
                        </TableCell>
                        <TableCell className="px-6 py-8 text-right">
                          <span className="text-2xl font-black text-[#002d52]">
                            {row.r}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="p-6 bg-[#f8f9fb] border-t border-gray-100">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center">
                    95%+ Consistency in 30-60mm range
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="fadeUp" className="max-w-3xl mx-auto mt-16">
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
              <svg
                className="w-12 h-12 text-[#002d52] mb-4"
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
              <h4 className="font-bold text-2xl mb-2 text-[#002d52]">
                Official Lab Report
              </h4>
              <p className="text-gray-500 text-sm mb-8">
                View or download the complete Third-Party certification.
              </p>

              <div className="relative group w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-inner mb-6">
                <div className="h-[400px] w-full overflow-hidden">
                  <iframe
                    src={`${limestoneReport}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=1`}
                    className="w-full h-full border-none"
                    title="Limestone Report Preview"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#002d52]/10 transition-all flex items-center justify-center pointer-events-none">
                  <div
                    className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto cursor-pointer"
                    onClick={() => window.open(limestoneReport, "_blank")}
                  >
                    <span className="bg-[#88204a] text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
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
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View Full PDF Report
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={limestoneReport}
                download="Indian_Limestone_Report.pdf"
                className="w-full"
              >
                <Button
                  variant="wine"
                  className="w-full flex items-center justify-center py-6 text-sm"
                >
                  <Icons.Download /> Download Complete Report
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🌏 Global Market Comparison Section */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-black text-navy mb-4 uppercase tracking-tight">
              Global <span className="text-wine">Market Comparison</span>
            </h2>
            <p className="text-gray-500 font-medium">
              Detailed comparison of Limestone supply and quality across major
              producing nations.
            </p>
          </Reveal>

          <Reveal className="overflow-x-auto rounded-[2rem] shadow-xl border border-gray-100 bg-white">
            <Table>
              <TableHeader>
                <TableRow className="bg-wine hover:bg-wine text-white text-[10px] font-black uppercase tracking-widest h-14 border-none">
                  <TableHead className="text-white px-8">Country</TableHead>
                  <TableHead className="text-white px-8">Quality</TableHead>
                  <TableHead className="text-white px-8">Price</TableHead>
                  <TableHead className="text-white px-8">
                    Supply Level
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { c: "India", q: "High", p: "Low", s: "High (Advantageous)" },
                  { c: "China", q: "Medium", p: "Medium/High", s: "High" },
                  { c: "USA", q: "Very High", p: "Very High", s: "Low Export" },
                  { c: "Vietnam", q: "Good", p: "Medium", s: "Medium" },
                  { c: "Turkey", q: "Good", p: "Medium", s: "Medium" },
                  { c: "UAE", q: "Medium", p: "High", s: "Low" },
                ].map((row, i) => (
                  <TableRow
                    key={i}
                    className={i % 2 === 0 ? "bg-gray-50/50" : ""}
                  >
                    <TableCell className="font-black text-navy py-6 px-8">
                      {row.c}
                    </TableCell>
                    <TableCell className="font-bold text-navy px-8">
                      {row.q}
                    </TableCell>
                    <TableCell className="font-bold text-wine px-8">
                      {row.p}
                    </TableCell>
                    <TableCell className="font-bold text-gray-500 px-8">
                      {row.s}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Reveal>
        </div>
      </section>

      {/* 🚀 Applications Section */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Industrial <span className="text-wine">Applications</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                t: "Cement Industry",
                d: "Primary raw material for manufacturing Portland cement and mortar.",
                icon: <Icons.Cement />,
              },
              {
                t: "Steel Production",
                d: "Used as a fluxing agent in blast furnaces to remove impurities from steel.",
                icon: <Icons.Steel />,
              },
              {
                t: "Construction",
                d: "Crushed limestone used for road base, aggregate, and building stone.",
                icon: <Icons.Construction />,
              },
              {
                t: "Chemical Processing",
                d: "Used in the production of lime, soda ash, and various calcium-based chemicals.",
                icon: <Icons.Chemical />,
              },
            ].map((app, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <Card className="h-full border-none shadow-sm hover:shadow-2xl transition-all bg-white rounded-[2rem] p-8 group overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-wine/5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform"></div>
                  <div className="relative z-10">
                    {app.icon}
                    <h4 className="text-xl font-black text-navy mb-4 border-l-4 border-wine pl-4">
                      {app.t}
                    </h4>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">
                      {app.d}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 Calcined Limestone Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeUp">
              <h2 className="text-4xl font-black text-navy mb-6 uppercase tracking-tight">
                Calcined <span className="text-wine">Limestone</span>
              </h2>
              <div className="w-20 h-1 bg-wine rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                Calcined limestone is produced by heating high-calcium limestone at
                elevated temperatures to remove carbon dioxide (CO₂), converting
                calcium carbonate (CaCO₃) into calcium oxide (CaO), commonly known
                as quicklime.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8 font-medium">
                It is widely used in steel, construction, water treatment, sugar,
                paper and chemical industries due to its high reactivity and strong
                alkaline properties. Depending on the application, it is available
                in lump, powder and customized size forms with varying CaO purity
                levels. High-calcium grades are preferred for steelmaking, flue gas
                treatment and industrial processing applications where low silica
                and low magnesium content are important.
              </p>
              <div className="bg-[#f8f9fb] p-6 rounded-2xl border border-gray-100">
                <p className="text-navy font-bold italic text-sm">
                  Ochnology Solutions supports the sourcing and supply of calcined
                  limestone for industrial buyers with bulk supply capability, COA
                  support and customized sizing options.
                </p>
              </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={200}>
              <div className="grid grid-cols-1 gap-6">
                {[
                  "High CaO purity levels",
                  "Available in lumps & powder",
                  "Customized sizing options",
                  "Steel & Chemical industry ready",
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 bg-[#f8f9fb] p-6 rounded-2xl border border-gray-100 group hover:bg-white hover:shadow-xl transition-all duration-300"
                  >
                    <div className="bg-wine/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                      <Icons.Check />
                    </div>
                    <span className="font-black text-navy uppercase text-xs tracking-widest">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* 🔬 Ultra Low Sulphur Calcined Lime (Steel Industry) */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeUp">
              <span className="text-wine font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Specialized Metallurgy</span>
              <h2 className="text-4xl font-black text-navy mb-8 uppercase tracking-tight leading-none">
                Ultra Low Sulphur <br />
                <span className="text-wine">Calcined Lime</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium">
                Engineered specifically for high-end steel manufacturing (Basic Oxygen Furnaces and Electric Arc Furnaces), our Ultra Low Sulphur Calcined Lime (Quicklime) ensures maximum dephosphorization and desulphurization efficiency. With <span className="text-wine font-bold italic">Sulphur levels as low as 0.05%</span>, it prevents contamination of the steel melt, ensuring superior structural integrity.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                 {[
                   { t: "Fast Reactivity", d: "Optimal slaking time" },
                   { t: "High CaO", d: "94% Min Purity" },
                   { t: "Sulphur < 0.05%", d: "Steel Grade standard" },
                   { t: "Controlled Sizing", d: "Lump or Powder" },
                 ].map((feat, i) => (
                   <div key={i} className="flex items-center gap-4 group">
                     <div className="w-10 h-10 bg-wine/10 rounded-xl flex items-center justify-center text-wine group-hover:bg-wine group-hover:text-white transition-all duration-300">
                        <Icons.Check />
                     </div>
                     <div>
                       <div className="text-xs font-black text-navy uppercase tracking-widest">{feat.t}</div>
                       <div className="text-[10px] font-bold text-gray-400 uppercase">{feat.d}</div>
                     </div>
                   </div>
                 ))}
              </div>
            </Reveal>

            <Reveal variant="zoomIn" delay={200}>
              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-wine/5 rounded-full -translate-y-12 translate-x-12 blur-3xl group-hover:bg-wine/10 transition-colors"></div>
                <h3 className="text-xl font-black text-navy uppercase mb-8 border-l-4 border-wine pl-6 tracking-tight flex justify-between items-center">
                   Chemical Composition
                   <span className="text-[10px] bg-wine/5 text-wine px-3 py-1 rounded-full tracking-widest">Lot No: OCH-ULS-94</span>
                </h3>
                
                <div className="space-y-4">
                  {[
                    { n: "Calcium Oxide (CaO)", f: "CaO", c: "94.15%", primary: true },
                    { n: "Silicon Dioxide", f: "SiO₂", c: "1.00%" },
                    { n: "Magnesium Oxide", f: "MgO", c: "1.50%" },
                    { n: "Iron Oxide", f: "Fe₂O₃", c: "0.15%" },
                    { n: "Aluminium Oxide", f: "Al₂O₃", c: "0.15%" },
                    { n: "Sulphur (Ultra Low)", f: "S", c: "0.05%", special: true },
                  ].map((row, i) => (
                    <div key={i} className={`flex justify-between items-center p-4 rounded-2xl transition-all hover:bg-gray-50 border border-transparent hover:border-gray-100 ${row.primary ? 'bg-navy/5 border-navy/10' : ''}`}>
                       <div>
                         <div className={`text-xs font-black uppercase tracking-widest ${row.special ? 'text-wine' : 'text-navy'}`}>{row.n}</div>
                         <div className="text-[10px] text-gray-400 font-bold tracking-widest">{row.f}</div>
                       </div>
                       <div className={`text-lg font-black ${row.primary ? 'text-navy' : row.special ? 'text-wine' : 'text-navy/70'}`}>
                         {row.c}
                       </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
                   <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">
                     CAS No: 1305-78-8 <br />
                     Quick Lime / Burn Lime
                   </div>
                   <div className="text-[10px] font-black text-wine uppercase tracking-[0.2em] animate-pulse">
                     High Reactivity Grade
                   </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🏁 Footer CTA */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <Reveal variant="fadeUp">
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">
              High-Quality <span className="text-wine">Limestone Supply</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light">
              Secure your bulk supply of premium Limestone today. We offer
              competitive pricing, verified quality, and global logistics
              support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq">
                <Button variant="wine">Get Quotation</Button>
              </Link>
              <a href={limestoneReport} download="Indian_Limestone_Report.pdf">
                <Button variant="outline" className="flex items-center">
                  <Icons.Download /> Download Report
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline">Contact Sales</Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Limestone;
