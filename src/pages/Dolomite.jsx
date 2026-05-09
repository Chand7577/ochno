import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import dolomiteVid1 from "../assets/dolomite.mp4";
import dolomiteVid2 from "../assets/Dolomite (2).mp4";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog.jsx";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import { Badge } from "../components/ui/badge.jsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion.jsx";

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
  TrendingUp: () => (
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
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  ),
  Box: () => (
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
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4"
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
        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-6 0a1 1 0 001-1m-6 0a1 1 0 001-1"
      />
    </svg>
  ),
  Download: () => (
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
        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3"
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

const Dolomite = () => {
  const [selectedApp, setSelectedApp] = useState(null);

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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2va77cph48Xn3rN_OT6704LAVOB-BRyquaQ&s"
            alt="Dolomite Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
          <Reveal variant="fadeUp" delay={200}>
            <Badge variant="default" className="mb-6 mt-12">
              Premium Grade · 98% Carbonate · Prompt Delivery
            </Badge>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight uppercase">
              Premium <span className="text-wine">Dolomite</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Agricultural, Glass, Refractory & Industrial Grades. MgO 18–40% ·
              100 to 500 mesh · FOB Mundra / Kandla. High-quality deposits with
              naturally bright white colour.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq" className="w-full sm:w-auto">
                <Button variant="wine" className="w-full">
                  Request Quote / Sample
                </Button>
              </Link>
              <a
                href="https://wa.me/919258720699?text=Interested%20in%20Dolomite%20grades."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" className="w-full gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.031 0C5.393 0 0 5.393 0 12.032c0 2.126.549 4.195 1.593 6.02L.055 24l6.096-1.598A11.933 11.933 0 0012.031 24c6.638 0 12.031-5.394 12.031-12.033S18.669 0 12.031 0zm3.842 17.26c-.164.462-.953.904-1.344.965-.91.135-2.072.102-3.8-1.002-2.126-1.359-3.486-3.771-3.585-3.904-.102-.132-.857-1.144-.857-2.183 0-1.04.536-1.547.728-1.748.191-.192.42-.24.55-.24h.392c.164 0 .38.064.593.588.225.556.55 1.346.6 1.444.05.102.081.222.016.353-.066.132-.1.21-.197.324-.097.114-.2.247-.282.342-.09.096-.188.204-.08.384.11.18.49.799 1.053 1.302.726.65 1.332.85 1.513.946.182.096.289.084.398-.036.11-.12.47-.547.596-.732.126-.186.252-.15.42-.09.168.06.1065.504 1.25.576.185.072.311.114.358.174.047.06.047.348-.117.81z" />
                  </svg>
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-wine py-4 sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-6 font-black uppercase tracking-[0.2em] text-[10px] text-white overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex justify-center gap-12">
            <span className="flex items-center gap-2">
              <Icons.Check /> COA with every lot
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> Rajasthan origin
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> Sample in 7 days
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> Professional Grade Sourcing
            </span>
          </div>
        </div>
      </div>

      {/* 📊 Trust Bar Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 divide-y divide-gray-200 md:divide-y-0 md:divide-x">
            {[
              {
                value: "18-40%",
                label: "MgO Range",
                sub: "Optimized for all uses",
              },
              {
                value: "50%",
                label: "India's Output",
                sub: "From Rajasthan belt",
              },
              {
                value: "500kg",
                label: "LCL Access",
                sub: "Minimum for trials",
              },
              {
                value: "88-94",
                label: "Whiteness",
                sub: "Pharma & Animal grades",
              },
              {
                value: "15 Days",
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
                <div className="text-4xl font-black text-navy mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-wine font-black text-[10px] uppercase tracking-widest mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-[10px] font-medium">
                  {stat.sub}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🎥 Material Showcase Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Material <span className="text-wine">Showcase</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-500 max-w-3xl mx-auto font-medium text-base leading-relaxed">
              Experience the exceptional quality and consistency of our premium Dolomite materials straight from the source.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Reveal variant="fadeUp" delay={100}>
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border-4 border-[#f8f9fb] group relative">
                <video
                  src={dolomiteVid1}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent pointer-events-none flex flex-col justify-end p-8">
                  <h4 className="text-2xl font-black text-white mb-1">Premium Quality</h4>
                  <p className="text-white/80 text-sm font-medium tracking-wide">Direct Source Inspection</p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={200}>
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border-4 border-[#f8f9fb] group relative">
                <video
                  src={dolomiteVid2}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/80 via-wine/20 to-transparent pointer-events-none flex flex-col justify-end p-8">
                  <h4 className="text-2xl font-black text-white mb-1">Consistent Grading</h4>
                  <p className="text-white/80 text-sm font-medium tracking-wide">Ready for Dispatch</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🔬 Product Grades & Specifications */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4Uppercase tracking-tight">
              Dolomite{" "}
              <span className="text-wine">Grades & Full Specifications</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-500 max-w-3xl mx-auto font-medium text-base leading-relaxed">
              We supply six distinct grades, from raw powder for agriculture to
              highly sintered clinker for steel linings. Full chemistry
              verification (XRF) provided per lot.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                t: "Agricultural Grade",
                chem: "MgCO₃ 38–42% · SiO₂ <3.0%",
                mesh: "100/200 Mesh",
                focus: "Soil pH Correction",
                color: "wine",
                tds: "#",
              },
              {
                t: "Glass & Ceramic",
                chem: "MgCO₃ 38–44% · Fe₂O₃ <0.15%",
                mesh: "200/300/400 Mesh",
                focus: "Durability & Thermal Control",
                color: "navy",
                tds: "#",
              },
              {
                t: "Animal Feed / Pharma",
                chem: "MgCO₃ 40–44% · Fe₂O₃ <0.10%",
                mesh: "200 to 500 Mesh",
                focus: "High Whiteness & Purity",
                color: "gray-400",
                tds: "#",
              },
              {
                t: "Steel Flux / Industrial",
                chem: "MgCO₃ 36–42% · SiO₂ <2.5%",
                mesh: "0–50mm lumps / Crushed",
                focus: "Slag Regulation in BOF/EAF",
                color: "navy",
                tds: "#",
              },
              {
                t: "Calcined Dolomite",
                chem: "MgO 32–38% (Free) · Free CaO",
                mesh: "Powder / 1-5mm Granules",
                focus: "Fired at 800–900°C (CO₂ driven off)",
                color: "wine",
                tds: "#",
              },
              {
                t: "Sintered / Dead Burnt",
                chem: "MgO 35–40% · Bulk Density 3.0",
                mesh: "1–25mm Clinker",
                focus: "Fired at 1450–1550°C (Inert Clinker)",
                color: "gray-700",
                tds: "#",
              },
            ].map((grade, idx) => (
              <Reveal
                key={idx}
                delay={idx * 150}
                variant="fadeUp"
                className="h-full"
              >
                <Card
                  className={`flex flex-col bg-white rounded-[2.5rem] shadow-sm border-t-[10px] border-${grade.color === "wine" ? "wine" : "navy"} h-full group hover:shadow-2xl transition-all border-x-0 border-b-0`}
                >
                  <CardHeader className="p-10 pb-0">
                    <CardTitle className="text-2xl font-black text-navy mb-6 leading-tight">
                      {grade.t}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-10 pt-0 space-y-6 flex-1">
                    <div className="bg-[#f8f9fb] p-4 rounded-2xl border border-gray-100">
                      <span className="block text-[10px] font-black text-wine uppercase tracking-[0.2em] mb-3">
                        Target Chemistry
                      </span>
                      <p className="text-navy font-bold text-sm tracking-tight leading-loose">
                        {grade.chem}
                      </p>
                    </div>
                    <div>
                      <span className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">
                        Available Form
                      </span>
                      <p className="text-navy font-black text-sm">
                        {grade.mesh}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-10 pt-0">
                    <a
                      href={grade.tds}
                      className="flex items-center gap-2 text-wine text-xs font-black uppercase tracking-widest hover:text-navy transition-colors"
                    >
                      Download TDS <Icons.Download />
                    </a>
                  </CardFooter>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* 📊 Full Technical Comparison Table (Shadcn UI style) */}
          <Reveal variant="fadeUp" delay={200} className="mt-20">
            <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
              <Table>
                <TableHeader>
                  <TableRow className="bg-navy hover:bg-navy border-none">
                    <TableHead className="text-white font-black uppercase tracking-widest h-16 border-r border-white/10">
                      Parameter
                    </TableHead>
                    <TableHead className="text-white font-black uppercase tracking-widest h-16 border-r border-white/10 text-center">
                      Agricultural
                    </TableHead>
                    <TableHead className="text-white font-black uppercase tracking-widest h-16 border-r border-white/10 text-center">
                      Industrial / Steel
                    </TableHead>
                    <TableHead className="text-white font-black uppercase tracking-widest h-16 border-r border-white/10 text-center">
                      Glass & Ceramic
                    </TableHead>
                    <TableHead className="text-white font-black uppercase tracking-widest h-16 border-r border-white/10 text-center">
                      Animal Feed
                    </TableHead>
                    <TableHead className="text-white font-black uppercase tracking-widest h-16 border-r border-white/10 text-center">
                      Calcined
                    </TableHead>
                    <TableHead className="text-white font-black uppercase tracking-widest h-16 text-center">
                      Sintered
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      label: "CaCO₃ / CaO",
                      vals: [
                        "54–58%",
                        "52–58%",
                        "52–56%",
                        "55–60%",
                        "CaO 38–42%",
                        "CaO 36–40%",
                      ],
                      highlight: true,
                    },
                    {
                      label: "MgCO₃ / MgO",
                      vals: [
                        "38–42%",
                        "36–42%",
                        "38–44%",
                        "40–44%",
                        "MgO 32–38%",
                        "MgO 35–40%",
                      ],
                      highlight: true,
                    },
                    {
                      label: "SiO₂ % Max",
                      vals: ["3.0%", "2.5%", "1.5%", "1.0%", "2.0%", "1.5%"],
                      highlight: false,
                    },
                    {
                      label: "Fe₂O₃ % Max",
                      vals: ["0.5%", "0.5%", "0.15%", "0.10%", "0.5%", "0.5%"],
                      highlight: false,
                    },
                    {
                      label: "Whiteness (GE)",
                      vals: [
                        "80–86",
                        "75–84",
                        "86–92",
                        "88–94",
                        "85–90",
                        "N/A",
                      ],
                      highlight: false,
                    },
                    {
                      label: "LOI %",
                      vals: [
                        "45–48%",
                        "44–48%",
                        "44–48%",
                        "44–48%",
                        "<1.0%",
                        "<0.5%",
                      ],
                      highlight: true,
                      italic: true,
                    },
                  ].map((row, i) => (
                    <TableRow
                      key={i}
                      className={i % 2 === 0 ? "bg-gray-50/50" : ""}
                    >
                      <TableCell className="font-black text-wine border-r border-gray-100 py-6">
                        {row.label}
                      </TableCell>
                      {row.vals.map((v, j) => (
                        <TableCell
                          key={j}
                          className={`text-center border-r border-gray-50 font-bold py-6 ${j === 5 ? "border-r-0" : ""} ${row.highlight && j >= 4 ? "text-wine" : "text-navy"} ${row.italic ? "italic" : ""}`}
                        >
                          {v}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Reveal>

          <Reveal className="mt-16 text-center">
            <p className="max-w-4xl mx-auto text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">
              COA Verification: CaO · MgO · SiO₂ · Fe₂O₃ · Al₂O₃ · LOI ·
              Moisture · Whiteness (GE). Packaging: 50kg PP Bags · 1–1.2 MT
              Jumbo Bags · Clinker Bulk.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 🚀 Industry Applications */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4Uppercase tracking-tight">
              Strategic{" "}
              <span className="text-wine">Industrial Applications</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-500 max-w-3xl mx-auto font-medium text-base">
              Click on an application to view technical requirements and process
              benefits.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "Agriculture & Soil Health",
                img: "https://twobrothersindiashop.com/cdn/shop/articles/DSC00110.jpg?v=1653467970&width=1500",
                desc: "Largest domestic application; used for pH correction and dual Ca+Mg nutrient supply.",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 text-base leading-relaxed">
                      Dolomite powder corrects soil pH in acidic environments by
                      neutralising excess H⁺ ions. Unlike standard lime, it
                      supplies both Calcium and Magnesium, which are critical
                      for sustainable crop yields.
                    </p>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-xs uppercase tracking-widest">
                        Industry Standard:
                      </span>
                      <p className="text-gray-600 text-sm italic">
                        Ground to 100–200 mesh. Used extensively under India's
                        Soil Health Card Scheme.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                t: "Glass Manufacturing",
                img: "https://media.licdn.com/dms/image/v2/C5622AQHH3RN31p1YLQ/feedshare-shrink_800/feedshare-shrink_800/0/1592052976888?e=2147483647&v=beta&t=PDLRJRNUtF8oP4ceW-XWwZ-YY6b-oCbt04h_rVcqkPo",
                desc: "Float and container glass batch essential for durability and reducing thermal expansion.",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 text-base leading-relaxed">
                      Essential MgO and CaO source. It lowers melting
                      temperatures and improves chemical durability.
                    </p>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-xs uppercase tracking-widest">
                        Iron Limits:
                      </span>
                      <p className="text-wine font-bold text-sm">
                        Fe₂O₃ below 0.15%
                      </p>
                      <p className="text-gray-500 text-[10px] mt-1 italic">
                        Critical to avoid colouration in high-grade float glass
                        industries.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                t: "Steel Flux (BOF / EAF)",
                img: "https://www.mitconindia.com/wp-content/uploads/2023/09/iron-and-steel-industry_blog-rectangle-images.jpg",
                desc: "Slag regulation in steel furnaces. Calcined dolomite reacts faster than raw stone.",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 text-base leading-relaxed">
                      Used as a fluxing agent to protect refractory linings and
                      regulate slag chemistry. Calcined dolomite (light burnt)
                      reacts significantly faster than raw stone.
                    </p>
                    <p className="text-gray-500 text-xs mt-4">
                      Also utilized in{" "}
                      <span className="text-wine font-bold">
                        water treatment
                      </span>{" "}
                      to neutralise acidic effluent.
                    </p>
                  </div>
                ),
              },
              {
                t: "Animal Feed & Poultry",
                img: "https://cdn.wikifarmer.com/images/detailed/2025/02/Non-Conventional%20Feed%20Sources%20for%20Sustainable%20Poultry%20Farming.png",
                desc: "High-purity source of Ca and Mg for broiler and cattle feed mixes.",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 text-base leading-relaxed">
                      More balanced than pure limestone. We ensure feed-grade
                      compliance with strict heavy metal limits (Pb, As, Cd,
                      Hg).
                    </p>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-xs uppercase tracking-widest">
                        Target Market:
                      </span>
                      <p className="text-gray-500 text-[11px] italic">
                        Large domestic poultry belt: AP, Telangana, Maharashtra.
                      </p>
                      <p className="text-wine font-black text-xs mt-2 uppercase tracking-tighter">
                        Whiteness (GE) 88–94
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                t: "Paints, Rubber & Plastics",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kNMZYUg6tm_jp8agVVZihfFhuj3wKYuCmg&s",
                desc: "Functional extender and filler for exterior emulsions, putty, and inert rubber compounds.",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 text-base leading-relaxed">
                      Improves hiding power in paints and reduces formulation
                      costs. In plastics and rubber, it acts as an inert filler
                      improving hardness.
                    </p>
                    <ul className="grid grid-cols-1 gap-2">
                      <li className="bg-[#f8f9fb] p-2 rounded-lg text-[10px] font-bold text-navy border border-gray-100">
                        • 300–500 Mesh for Exterior Emulsions
                      </li>
                      <li className="bg-[#f8f9fb] p-2 rounded-lg text-[10px] font-bold text-navy border border-gray-100">
                        • Stearic Acid Coated Grade available for Rubber
                      </li>
                    </ul>
                  </div>
                ),
              },
              {
                t: "Refractories (Dead Burnt)",
                img: "https://image.made-in-china.com/202f0j00tDSBejTKCcoa/Low-Price-Refractory-Dead-Burned-Magnesite-Fused-Magnesite-for-Lime-Kilns.webp",
                desc: "High-temperature resistant clinker for EAF linings and kiln furniture.",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 text-base leading-relaxed">
                      Dead burnt dolomite (fired at 1550°C) produces dense,
                      inert CaO+MgO clinker for the most aggressive thermal
                      environments like steel furnace linings and ladle linings.
                    </p>
                    <div className="bg-navy p-3 rounded-xl text-center">
                      <p className="text-white text-[10px] font-black uppercase tracking-widest leading-loose">
                        Bulk Density: 2.8–3.0 g/cc
                      </p>
                    </div>
                  </div>
                ),
              },
            ].map((app, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <Card
                  className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all h-full cursor-pointer flex flex-col border-none"
                  onClick={() => setSelectedApp(app)}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={app.img}
                      alt={app.t}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <CardHeader className="p-8 pb-0">
                    <CardTitle className="text-xl font-black text-navy mb-4">
                      {app.t}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 flex-1 flex flex-col justify-between">
                    <CardDescription className="text-gray-500 text-sm font-medium leading-relaxed mb-6">
                      {app.desc}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-wine font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      View details &rarr;
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Why Buy From Us? */}
      <section className="py-24 bg-navy text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4Uppercase tracking-tight">
              Buyer <span className="text-wine">Advantages</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal variant="fadeLeft">
              <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md h-full space-y-10">
                <h3 className="text-2xl font-black text-white flex items-center gap-4">
                  <div className="w-12 h-12 bg-wine rounded-2xl flex items-center justify-center shrink-0">
                    <Icons.Check />
                  </div>
                  Quality & Consistency
                </h3>
                <ul className="space-y-6 text-gray-300 text-base font-medium">
                  <li className="flex gap-4">
                    <span className="text-wine shrink-0">•</span>
                    Fixed Rajasthan source Quarry with identical chemistry
                    lot-to-lot.
                  </li>
                  <li className="flex gap-4">
                    <span className="text-wine shrink-0">•</span>
                    In-house XRF whiteness testing — every lot checked before
                    dispatch.
                  </li>
                  <li className="flex gap-4">
                    <span className="text-wine shrink-0">•</span>
                    Grade-specific mesh screening to eliminate off-spec
                    particles.
                  </li>
                  <li className="flex gap-4 text-wine font-black uppercase text-xs tracking-widest">
                    Sample + Full COA dispatched in 7 Days
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal variant="fadeRight">
              <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md h-full space-y-10">
                <h3 className="text-2xl font-black text-white flex items-center gap-4">
                  <div className="w-12 h-12 bg-wine rounded-2xl flex items-center justify-center shrink-0">
                    <Icons.Truck />
                  </div>
                  Supply & Logistics
                </h3>
                <ul className="space-y-6 text-gray-300 text-base font-medium">
                  <li className="flex gap-4">
                    <span className="text-wine shrink-0">•</span>
                    Multiple grades from one supplier — simplifying procurement.
                  </li>
                  <li className="flex gap-4">
                    <span className="text-wine shrink-0">•</span>
                    LCL Export available from 500kg — no mandatory container
                    fills for trials.
                  </li>
                  <li className="flex gap-4">
                    <span className="text-wine shrink-0">•</span>
                    Mundra / Kandla FOB for exports · Pan-India road delivery.
                  </li>
                  <li className="flex gap-4 text-wine font-black uppercase text-xs tracking-widest">
                    Payment Terms: TT (Partial Advance) / LC at Sight
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🇮🇳 Partner With Us — Quarry Owners */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 tracking-tight uppercase">
              Partner With Us —{" "}
              <span className="text-wine">Rajasthan Quarry Owners</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8" />
            <p className="text-gray-500 max-w-2xl mx-auto font-medium text-base">
              We provide regular monthly offtake for LUMPS, CRUSHED and GROUND
              grades from Udaipur, Ajmer and Beawar.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <Reveal variant="fadeLeft">
              <div className="h-full flex flex-col justify-center space-y-8">
                <div className="bg-[#f8f9fb] p-8 rounded-3xl border border-gray-100 border-l-[10px] border-l-wine shadow-sm">
                  <h4 className="text-xs font-black text-navy uppercase tracking-[0.2em] mb-4">
                    What We Need:
                  </h4>
                  <ul className="space-y-3 text-gray-600 font-bold text-sm">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-navy rounded-full"></span>{" "}
                      MgO 18%+
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-navy rounded-full"></span>{" "}
                      SiO₂ below 3%
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-navy rounded-full"></span>{" "}
                      Consistency: 50 MT/month Min.
                    </li>
                  </ul>
                </div>
                <div className="bg-[#f8f9fb] p-8 rounded-3xl border border-gray-100 border-l-[10px] border-l-navy shadow-sm">
                  <h4 className="text-xs font-black text-wine uppercase tracking-[0.2em] mb-4">
                    What We Offer:
                  </h4>
                  <ul className="space-y-3 text-gray-600 font-bold text-sm">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-wine rounded-full"></span>{" "}
                      Regular Monthly Offtake
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-wine rounded-full"></span>{" "}
                      Highest Purity Premiums
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-wine rounded-full"></span>{" "}
                      We handle Export & Processing
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeRight">
              <div className="bg-navy rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-wine/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                <h4 className="text-3xl font-black mb-8 relative z-10 transition-all uppercase tracking-tight text-white">
                  Supplier Enquiry
                </h4>
                <form className="space-y-4 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Quarry / District" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Grade (Lumps/Mesh)" />
                    <Input placeholder="MgO % (Approx)" />
                  </div>
                  <Input placeholder="Monthly Output (MT)" />
                  <Input placeholder="Contact Number" />
                  <Button variant="wine" className="w-full mt-4 h-16">
                    Partner With Us
                  </Button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🇮🇳 Origin Insight — Rajasthan Dolomite Belt */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeLeft">
              <div className="space-y-8">
                <h2 className="text-4xl font-black text-navy uppercase tracking-tight">
                  The <span className="text-wine">Rajasthan</span> Advantage
                </h2>
                <div className="space-y-6 text-gray-500 text-base leading-relaxed font-medium">
                  <p>
                    Rajasthan accounts for over{" "}
                    <span className="text-wine font-black tracking-widest">
                      50%
                    </span>{" "}
                    of India’s total dolomite production. The Ajmer, Udaipur,
                    and Beawar regions host the continent's highest-quality
                    deposits, known for their crystalline structure and
                    naturally low iron levels.
                  </p>
                  <p>
                    Formed in Precambrian marine environments, this dolomite is
                    ideal for float glass and white ceramics where GE Whiteness
                    must exceed 86–90% without heavy metal tint.
                  </p>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex gap-6 items-center">
                    <div className="w-16 h-16 bg-navy text-white rounded-2xl flex items-center justify-center shrink-0">
                      <Icons.MapPin />
                    </div>
                    <div>
                      <h5 className="text-sm font-black text-navy uppercase tracking-widest leading-loose">
                        Logistics Advantage:
                      </h5>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-tight">
                        6–8 Hours from Mundra & Kandla Ports
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeRight">
              <div className="bg-navy rounded-[4rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-wine/30 to-transparent"></div>
                <h4 className="text-6xl font-black mb-4 tracking-tighter uppercase tabular-nums">
                  1.0%
                </h4>
                <h5 className="text-xs font-black uppercase tracking-[0.3em] text-wine mb-8">
                  SiO₂ MAX (Food Grade)
                </h5>
                <p className="text-gray-300 font-light text-base leading-relaxed max-w-sm mx-auto">
                  Proximity to major export hubs ensures low inland freight
                  costs for our Bangladesh and Southeast Asian ceramic buyers.
                </p>
                <div className="mt-12 w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ❓ FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy uppercase tracking-tight">
              Frequently Asked <span className="text-wine">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mt-6" />
          </Reveal>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the difference between dolomite and limestone?",
                a: "Dolomite contains both calcium and magnesium (CaMg(CO₃)₂), while limestone is mainly calcium carbonate. Dolomite is preferred where magnesium is also required, such as agriculture, glass batch, and specialized feed applications.",
              },
              {
                q: "Which dolomite grade is suitable for agriculture?",
                a: "Agricultural dolomite typically requires MgO: 18–21% and mesh sizes between 100–200. We also supply specialized 1–5mm granules for automated field application.",
              },
              {
                q: "What Fe₂O₃ level is required for glass-grade dolomite?",
                a: "For high-grade float glass manufacturing, iron levels (Fe₂O₃) must be strictly below 0.10–0.15%. This ensures clear glass output without any green or brown color tint.",
              },
              {
                q: "Can I get a sample before bulk ordering?",
                a: "Yes, we dispatch samples with a full XRF-analyzed COA within 7 days. Trial orders are available on an LCL basis starting from 500kg.",
              },
              {
                q: "What is the difference between calcined and sintered dolomite?",
                a: "Calcined dolomite is light-burnt (800–900°C) and highly reactive, used in steel fluxing and water treatment. Sintered (Dead Burnt) dolomite is fired at 1550°C and is completely inert, used for high-temperature refractory linings.",
              },
              {
                q: "What documentation do you provide for exports?",
                a: "Every export consignment includes a full set: Bill of Lading, Certificate of Analysis (COA), Packing List, Commercial Invoice, Certificate of Origin (COO), and MSDS.",
              },
            ].map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-[#f8f9fb] px-8 rounded-3xl border border-gray-100"
              >
                <AccordionTrigger className="text-lg font-black text-navy hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed font-medium pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 🏁 CTA Section */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp">
            <div className="bg-navy p-12 md:p-24 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-wine/30 to-transparent"></div>
              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight">
                  Ready to Source Premium{" "}
                  <span className="text-wine">Dolomite?</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
                  Access high-purity Maharashtra and Rajasthan deposits with
                  verified chemistry. LCL and FCL options available for global
                  export.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link to="/rfq" className="w-full sm:w-auto">
                    <Button
                      variant="wine"
                      className="w-full transform hover:-translate-y-1"
                    >
                      Request Quote
                    </Button>
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full transform hover:-translate-y-1"
                    >
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Shadcn UI Modal (Dialog) */}
      <Dialog open={!!selectedApp} onOpenChange={() => setSelectedApp(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-[3rem] border-none">
          <div className="h-64 relative">
            <img
              src={selectedApp?.img}
              alt={selectedApp?.t}
              className="w-full h-full object-cover"
            />
            <button
              className="absolute top-6 right-6 bg-navy text-white rounded-full p-2 hover:bg-wine transition-colors shadow-lg z-20"
              onClick={() => setSelectedApp(null)}
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-12">
            <DialogHeader>
              <div className="inline-block w-fit px-3 py-1 bg-wine/10 text-wine rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                Application Details
              </div>
              <DialogTitle className="text-3xl font-black text-navy mb-4 uppercase tracking-tighter">
                {selectedApp?.t}
              </DialogTitle>
            </DialogHeader>
            <div className="w-16 h-1.5 bg-wine rounded-full mb-8"></div>
            <div className="mt-4">{selectedApp?.details}</div>
            <div className="mt-12 border-t border-gray-100 pt-8">
              <Button
                onClick={() => setSelectedApp(null)}
                variant="default"
                className="w-full"
              >
                Close details
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dolomite;
