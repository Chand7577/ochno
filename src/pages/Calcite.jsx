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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card.jsx";
import { Button } from "../components/ui/button.jsx";
import { Badge } from "../components/ui/badge.jsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion.jsx";

// Images
import calciteHero from "../assets/images/calcite_lumps_2.jpg";
import calciteLumps from "../assets/images/calcite_lumps_1.jpg";
import calcitePowder from "../assets/images/calcite_powder.jpg";
import calcitePackaging from "../assets/images/calcite_packaging.jpg";

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

const Calcite = () => {
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
            src={calciteHero}
            alt="Calcite Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/85 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
          <Reveal variant="fadeUp" delay={200}>
            <Badge
              variant="default"
              className="mb-6 mt-12 bg-wine hover:bg-wine/90"
            >
              Dual Business Model · Global Export & Import
            </Badge>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight uppercase">
              CALCITE <span className="text-wine">CaCO₃</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed mb-12">
              Premium Ground Calcium Carbonate (GCC) & Precipitated Calcium
              Carbonate (PCC). From 100 mesh to Nano-grades. Serving PVC,
              Paints, Paper, and Pharma industries globally.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq" className="w-full sm:w-auto">
                <Button
                  variant="wine"
                  className="w-full px-8 py-6 text-lg rounded-full"
                >
                  Enquire for Supply
                </Button>
              </Link>
              <a
                href="https://wa.me/919258720699?text=Interested%20in%20offering%20Calcite%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="w-full gap-3 px-8 py-6 text-lg rounded-full border-white text-white hover:bg-white hover:text-navy transition-all"
                >
                  Offer Your Supply
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
              <Icons.Check /> COA per lot
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> Whiteness & Particle Size Tested
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> MSDS Available
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> Sample in 3–5 days
            </span>
          </div>
        </div>
      </div>

      {/* 📊 Market Stats Bar */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y divide-gray-200 md:divide-y-0 md:divide-x">
            {[
              {
                value: "34%",
                label: "Import Growth",
                sub: "Annual demand in India",
              },
              {
                value: "10,495+",
                label: "Annual Shipments",
                sub: "Imported to India",
              },
              {
                value: "99%",
                label: "Max Purity",
                sub: "Rajasthan Calcite Ore",
              },
              {
                value: "Nano",
                label: "PCC Grades",
                sub: "D50 down to 0.07 µm",
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

      {/* 🔄 Dual Business Model Section */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeLeft">
              <h2 className="text-4xl font-black text-navy mb-8 tracking-tight leading-tight">
                THE DUAL <span className="text-wine">BUSINESS MODEL</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                India both exports calcite/GCC and imports specialty grades — we
                operate on both sides.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-wine">
                  <h3 className="text-xl font-black text-navy mb-3">
                    Export Side — India GCC
                  </h3>
                  <p className="text-gray-500">
                    India is a significant exporter of ground calcium carbonate
                    (GCC) — 4,880 export shipments in 2023–24, growing at 23%
                    annually. India’s Rajasthan and Gujarat deposits produce
                    high-purity calcite (CaCO₃ 97–99%) with good whiteness —
                    competitive for paints, rubber, paper and construction
                    filler in Nepal, Bangladesh, Russia and Africa. Export is
                    completely free — no restrictions, no licensing.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-navy">
                  <h3 className="text-xl font-black text-navy mb-3">
                    Import Side — Specialty Coated GCC & PCC
                  </h3>
                  <p className="text-gray-500">
                    India imports 10,495 shipments of calcium carbonate annually
                    — primarily coated GCC and PCC from Vietnam, Malaysia and
                    Egypt. Indian domestic deposits lack the whiteness (GE 95+),
                    ultra-fine particle size (D50 1–3 µm) and consistent stearic
                    acid coating quality required by PVC pipe manufacturers and
                    rigid PVC compounders. We import and supply these grades to
                    Indian industry.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal
              variant="zoomIn"
              className="relative h-[500px] rounded-[3rem] overflow-hidden"
            >
              <img
                src={calciteLumps}
                alt="Calcite Ore"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/20"></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🔬 Understanding Grades */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 tracking-tight uppercase">
              Understanding <span className="text-wine">The Grades</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full"></div>
          </Reveal>

          <Reveal variant="zoomIn" className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[300px] rounded-[2rem] overflow-hidden shadow-lg group">
                <img
                  src={calcitePowder}
                  alt="Calcite Powder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-black uppercase tracking-widest text-sm">
                    Micronised GCC Powder
                  </span>
                </div>
              </div>
              <div className="relative h-[300px] rounded-[2rem] overflow-hidden shadow-lg group">
                <img
                  src={calcitePackaging}
                  alt="Calcite Packaging"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-wine/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-black uppercase tracking-widest text-sm">
                    Export Ready Packaging
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "GCC",
                sub: "Ground Calcium Carbonate",
                desc: "Produced by mechanical grinding and air classification of natural calcite or limestone — no chemical change. India’s Rajasthan calcite produces GCC with CaCO₃ 97–99% and whiteness 88–94 GE — good for paints, rubber and paper at coarser grades. For ultra-fine (D50 below 5 µm) with whiteness above 95 GE, Vietnam and Malaysia origin is superior.",
                tags: ["Natural", "Cost-effective", "Rajasthan Ore"],
              },
              {
                title: "Coated GCC",
                sub: "Stearic Acid Treated",
                desc: "When GCC powder is surface-treated with stearic acid or zinc stearate, the hydrophilic surface becomes hydrophobic — this dramatically improves compatibility with polymer matrices (PVC, PP, HDPE). The PVC pipe industry specifically requires coated GCC — uncoated grade causes processing problems. India imports large volumes from Vietnam and Malaysia.",
                tags: ["Hydrophobic", "PVC Grade", "Better Dispersion"],
              },
              {
                title: "PCC",
                sub: "Precipitated Calcium Carbonate",
                desc: "Produced by chemical synthesis — burning limestone to lime (CaO), slaking to calcium hydroxide, then reacting with CO₂. Crystal morphology (scalenohedral, rhombohedral, aragonite) and particle size are precisely controlled during precipitation. PCC achieves D50 as low as 0.07 µm (nano-PCC) with very high whiteness (98+ GE). India is the world’s second-largest PCC importer.",
                tags: ["Synthetic", "Nano-Grades", "High Whiteness"],
              },
            ].map((grade, i) => (
              <Reveal key={i} delay={i * 200} variant="fadeUp">
                <div className="bg-[#f8f9fb] p-10 rounded-[2.5rem] h-full border border-gray-100 hover:shadow-xl transition-all group">
                  <div className="mb-6">
                    <h3 className="text-3xl font-black text-navy group-hover:text-wine transition-colors">
                      {grade.title}
                    </h3>
                    <p className="text-wine font-bold text-sm tracking-widest uppercase">
                      {grade.sub}
                    </p>
                  </div>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    {grade.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {grade.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[10px] font-black uppercase tracking-widest bg-white px-3 py-1 rounded-full text-navy border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 Technical Specifications Tables */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 tracking-tight uppercase">
              Technical <span className="text-wine">Specifications</span>
            </h2>
            <p className="text-gray-500 font-medium">
              India GCC (Export) & Imported Coated/PCC Grades
            </p>
          </Reveal>

          {/* Table 1: India GCC */}
          <Reveal variant="fadeUp" className="mb-16">
            <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
              <h3 className="text-2xl font-black text-navy mb-8 border-l-4 border-wine pl-4">
                Domestic GCC (India Export Grades)
              </h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-navy hover:bg-navy">
                      <TableHead className="text-white font-black uppercase tracking-widest py-6">
                        Parameter
                      </TableHead>
                      <TableHead className="text-white font-black uppercase tracking-widest text-center">
                        Coarse GCC
                      </TableHead>
                      <TableHead className="text-white font-black uppercase tracking-widest text-center">
                        Fine GCC
                      </TableHead>
                      <TableHead className="text-white font-black uppercase tracking-widest text-center">
                        Micronised
                      </TableHead>
                      <TableHead className="text-white font-black uppercase tracking-widest text-center">
                        Coated India
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        p: "CaCO₃ % min",
                        v: ["97.0%", "98.0%", "98.5%", "98.0%"],
                      },
                      {
                        p: "Whiteness (GE)",
                        v: ["88–92", "90–94", "92–96", "92–96"],
                      },
                      {
                        p: "Brightness",
                        v: ["86–90", "88–92", "90–95", "90–95"],
                      },
                      {
                        p: "Moisture % max",
                        v: ["0.5%", "0.3%", "0.3%", "0.3%"],
                      },
                      {
                        p: "Fe₂O₃ % max",
                        v: ["0.10%", "0.08%", "0.05%", "0.05%"],
                      },
                      { p: "MgO % max", v: ["1.0%", "0.8%", "0.5%", "0.5%"] },
                      {
                        p: "LOI % (at 900°C)",
                        v: ["42–44%", "42–44%", "42–44%", "42–44%"],
                      },
                      {
                        p: "D50 Particle Size",
                        v: ["15–30 µm", "5–10 µm", "1.5–3 µm", "2–5 µm"],
                      },
                      {
                        p: "D97 Particle Size",
                        v: ["60–100 µm", "20–40 µm", "8–15 µm", "10–20 µm"],
                      },
                      {
                        p: "Bulk Density",
                        v: [
                          "0.8–1.0 g/cc",
                          "0.7–0.9 g/cc",
                          "0.5–0.7 g/cc",
                          "0.5–0.7 g/cc",
                        ],
                      },
                      {
                        p: "Surface Treatment",
                        v: ["None", "None", "None", "Stearic acid coated"],
                      },
                      {
                        p: "Oil Absorption",
                        v: [
                          "18–22 g/100g",
                          "20–25 g/100g",
                          "22–28 g/100g",
                          "Low — 12–18 g/100g",
                        ],
                      },
                      {
                        p: "Origin",
                        v: [
                          "Rajasthan / Gujarat",
                          "Rajasthan / Gujarat",
                          "Rajasthan",
                          "Rajasthan",
                        ],
                      },
                      {
                        p: "Primary Use",
                        v: [
                          "Paints, construction, paper filler",
                          "Paints, rubber, PVC, paper",
                          "Plastics, premium coatings",
                          "PVC, rubber, plastics",
                        ],
                      },
                    ].map((row, i) => (
                      <TableRow
                        key={i}
                        className={i % 2 === 0 ? "bg-gray-50/50" : ""}
                      >
                        <TableCell className="font-bold text-navy py-4">
                          {row.p}
                        </TableCell>
                        {row.v.map((val, j) => (
                          <TableCell
                            key={j}
                            className="text-center font-medium text-gray-600"
                          >
                            {val}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </Reveal>

          {/* Export Destinations */}
          <Reveal variant="fadeUp" className="mb-10">
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8">
              <h4 className="text-sm font-black uppercase tracking-widest text-wine mb-4">
                Export Destinations
              </h4>
              <p className="text-gray-600 font-medium mb-3">
                Nepal (47% of India's exports) · Bangladesh · Russia · Kenya ·
                UAE · Bhutan
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>
                  • India's Rajasthan calcite belt (Udaipur, Alwar, Jodhpur)
                  produces the highest quality domestic GCC — 500+ processors
                  active
                </li>
                <li>
                  • Coated grade (stearic acid) available from Rajasthan
                  processors — suitable for rubber and standard plastic
                  applications
                </li>
                <li>
                  • All grades: COA per lot with CaCO₃%, whiteness, brightness,
                  D50, D97, moisture, oil absorption
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Table 2: Imported Grades */}
          <Reveal variant="fadeUp">
            <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
              <h3 className="text-2xl font-black text-navy mb-4 border-l-4 border-wine pl-4">
                Imported Premium Grades (Vietnam/Malaysia/Egypt)
              </h3>
              <div className="mb-8 bg-[#f8f9fb] rounded-2xl p-6">
                <p className="text-sm font-black uppercase tracking-widest text-wine mb-3">
                  Why Indian Industry Imports
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>
                    • <strong>PVC pipe manufacturers:</strong> require coated
                    GCC with D50 1–3 µm, whiteness ≥95 GE, stearic acid coating
                    ≥1% — Indian domestic grades cannot consistently match this
                    at competitive price
                  </li>
                  <li>
                    • <strong>Rigid PVC compounders:</strong> need nano-PCC (D50
                    0.05–0.1 µm) for impact modifier effect — not produced
                    domestically at scale
                  </li>
                  <li>
                    • <strong>Flexible PVC (cables, flooring):</strong>{" "}
                    scalenohedral PCC for reinforcement and processing
                    improvement
                  </li>
                  <li>
                    • <strong>Paper coating:</strong> ultra-high brightness (GE
                    97+) PCC slurry — Indian GCC too coarse and low brightness
                    for paper coating
                  </li>
                  <li>
                    • <strong>Top Indian importers:</strong> Omya India (32%),
                    Rathi Polychem, specialty plastics compounders across
                    Gujarat, Maharashtra, Tamil Nadu
                  </li>
                </ul>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-wine hover:bg-wine">
                      <TableHead className="text-white font-black uppercase tracking-widest py-6">
                        Parameter
                      </TableHead>
                      <TableHead className="text-white font-black uppercase tracking-widest text-center">
                        Coated GCC (Imp)
                      </TableHead>
                      <TableHead className="text-white font-black uppercase tracking-widest text-center">
                        PCC Scaleno
                      </TableHead>
                      <TableHead className="text-white font-black uppercase tracking-widest text-center">
                        PCC Rhombo
                      </TableHead>
                      <TableHead className="text-white font-black uppercase tracking-widest text-center">
                        Activated PCC
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        p: "CaCO₃ % min",
                        v: ["98.5%", "98.0%", "98.5%", "97.0%"],
                      },
                      {
                        p: "Whiteness (GE)",
                        v: ["95–98", "96–99", "95–98", "94–97"],
                      },
                      {
                        p: "D50 Particle Size",
                        v: [
                          "1–5 µm",
                          "0.5–2 µm",
                          "1–3 µm",
                          "0.05–0.1 µm (nano)",
                        ],
                      },
                      {
                        p: "Moisture % max",
                        v: ["0.3%", "0.3%", "0.3%", "0.5%"],
                      },
                      {
                        p: "Bulk Density",
                        v: [
                          "0.4–0.7 g/cc",
                          "0.3–0.5 g/cc",
                          "0.5–0.7 g/cc",
                          "0.2–0.4 g/cc",
                        ],
                      },
                      {
                        p: "Surface Treatment",
                        v: [
                          "Stearic acid coated",
                          "Stearic acid coated",
                          "None / coated",
                          "Activated",
                        ],
                      },
                      {
                        p: "Oil Absorption",
                        v: [
                          "8–14 g/100g",
                          "10–16 g/100g",
                          "15–20 g/100g",
                          "Very low",
                        ],
                      },
                      {
                        p: "pH (10% suspension)",
                        v: ["8.5–9.5", "8.5–9.5", "9.0–9.5", "8.5–9.5"],
                      },
                      {
                        p: "Origin",
                        v: [
                          "Vietnam / Malaysia / Egypt",
                          "Vietnam / Malaysia",
                          "Vietnam / Egypt",
                          "Vietnam / Malaysia",
                        ],
                      },
                      {
                        p: "Primary Use",
                        v: [
                          "PVC pipes, rigid PVC, plastics",
                          "Flexible PVC, paper, sealants",
                          "Paints, rubber",
                          "Premium PVC, specialty plastics",
                        ],
                      },
                    ].map((row, i) => (
                      <TableRow
                        key={i}
                        className={i % 2 === 0 ? "bg-gray-50/50" : ""}
                      >
                        <TableCell className="font-bold text-navy py-4">
                          {row.p}
                        </TableCell>
                        {row.v.map((val, j) => (
                          <TableCell
                            key={j}
                            className="text-center font-medium text-gray-600"
                          >
                            {val}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🚀 Industry Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 tracking-tight uppercase">
              Industry <span className="text-wine">Applications</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "PVC Pipes & Fittings",
                img: "https://t4.ftcdn.net/jpg/18/94/86/41/360_F_1894864123_frGCbt3FU5t3jFEwSWovAWbCcTvAvUof.jpg",
                desc: "Calcium carbonate is added at 5–25 phr in rigid PVC pipes — reduces cost, improves stiffness, and aids processing. Must be ultra-fine coated GCC or PCC: uncoated or coarse grades cause fish-eyes, surface defects and reduced impact strength. Manufacturers (Supreme, Astral, Finolex supply chain) import coated GCC from Vietnam and Malaysia specifically because domestic grades do not meet D50 and coating quality requirements.",
              },
              {
                t: "Paints & Coatings",
                img: "https://paintmywalls.in/wp-content/uploads/2023/03/Eco-friendly-Natural-Paints.jpg",
                desc: "GCC used as a functional extender in interior and exterior emulsion paints — improves opacity, reduces TiO₂ usage, controls sheen and improves scrub resistance. For exterior paints, coarser GCC (D50 10–20 µm) is standard; for smooth interior finishes, finer grades (D50 3–8 µm) are used. Indian GCC (Rajasthan origin) is competitive for Nepal, Bangladesh and Gulf markets.",
              },
              {
                t: "Rubber & Sealants",
                img: "https://media.istockphoto.com/id/480691906/photo/rubber-latex-collected-in-bowl.jpg?s=612x612&w=0&k=20&c=F_VzQcYBG7NiIIbr2X_YBABFQ75oGOaBkayqyjngD9w=",
                desc: "GCC as reinforcing filler in rubber — improves tensile strength, hardness and abrasion resistance at lower cost than silica. Coated grades are essential for good dispersion. India exports uncoated and coated GCC for rubber applications; also imports finer PCC grades for premium rubber applications.",
              },
              {
                t: "Paper Manufacturing",
                img: "https://www.control-associates.com/website/media/impact-partner/industries/pulp-paper-machine-side.jpg",
                desc: "PCC used as paper filler and coating pigment — improves brightness, smoothness and printability. Ultra-high whiteness (GE 97+) PCC in slurry form is the standard for coated paper and board. India imports PCC for paper applications from Vietnam and Malaysia.",
              },
              {
                t: "Pharma & Food",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBVvYf7TdABoaPkCHCHTcXaCmeEn9RWm7FQ&s",
                desc: "Food-grade and pharma-grade PCC used as calcium supplement, antacid, excipient and stabiliser. Requires strict heavy metals limits and pharmacopoeia compliance (IP/BP/USP). India imports these specialty grades from certified manufacturers.",
              },
              {
                t: "Plastics & Cables",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXtkiaA8MkGfB-92THDDv7HjEvlKNzRASd7Q&s",
                desc: "Flexible PVC (cables, flooring) utilises scalenohedral PCC for reinforcement and processing improvement. Rigid PVC compounders need nano-PCC (D50 0.05–0.1 µm) for impact modifier effect — not produced domestically at scale.",
              },
            ].map((app, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <Card className="group overflow-hidden rounded-[2.5rem] border-none shadow-sm hover:shadow-2xl transition-all h-full bg-[#f8f9fb]">
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={app.img}
                      alt={app.t}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader className="p-8 pb-0">
                    <CardTitle className="text-xl font-black text-navy">
                      {app.t}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-4">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {app.desc}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Section 6: Why Buy From Us */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wine/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <span className="text-wine font-black uppercase tracking-widest text-sm mb-4 block">
              Section 6
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
              Why Buy <span className="text-wine">From Us?</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light leading-relaxed">
              We provide unmatched technical expertise, dual business model advantages, and full quality assurance for both export and import markets.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal variant="fadeLeft">
              <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md h-full space-y-10">
                <h3 className="text-2xl font-black text-white flex items-center gap-4">
                  <div className="w-12 h-12 bg-wine rounded-2xl flex items-center justify-center shrink-0">
                    <Icons.Check />
                  </div>
                  Technical & Dual Model
                </h3>
                <ul className="space-y-6 text-gray-300 text-base font-medium">
                  {[
                    "Dual Expertise: We understand both GCC (natural) and PCC (synthetic) chemistry inside out",
                    "Export & Import Specialists: We know what Indian mines produce best and what needs to be imported",
                    "Single-Window Supply: Get standard Indian GCC and premium imported coated grades from one partner",
                    "Technical Application Support: Helping you choose between GCC/PCC for PVC, masterbatches, or paper",
                    "Dual-Port Logistics: Handling both export from Mundra and import through Nhava Sheva efficiently",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="mt-1.5 shrink-0">
                        <Icons.Check />
                      </div>
                      <p className="group-hover:text-white transition-colors">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fadeRight">
              <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md h-full space-y-10">
                <h3 className="text-2xl font-black text-white flex items-center gap-4">
                  <div className="w-12 h-12 bg-wine rounded-2xl flex items-center justify-center shrink-0">
                    <Icons.Check />
                  </div>
                  Quality & Commercial
                </h3>
                <ul className="space-y-6 text-gray-300 text-base font-medium">
                  {[
                    "Fixed Source Consistency: Rajasthan/Gujarat for export; Vietnam/Malaysia for imported grades",
                    "Full COA per lot: CaCO₃%, Whiteness, D50, D97, Moisture, and Oil Absorption provided proactively",
                    "Third-Party Inspection: SGS / Intertek inspection available on request for global consignments",
                    "Low MOQ: Trial orders starting from 1 MT to help with grade qualification and testing",
                    "Transparent Pricing: Competitive rates for domestic supply, global export, and fresh imports",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="mt-1.5 shrink-0">
                        <Icons.Check />
                      </div>
                      <p className="group-hover:text-white transition-colors">
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

      {/* 🤝 Section 7: Partner With Us */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-wine font-black uppercase tracking-widest text-sm mb-4 block">
              Section 7
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tight">
              Partner <span className="text-wine">With Us</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Whether you are a foreign supplier looking for an Indian distributor or a domestic mine owner seeking export offtake, we offer a professional and reliable partnership.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Card 1: Foreign Suppliers */}
            <Reveal variant="fadeLeft">
              <div className="bg-white p-12 rounded-[4rem] shadow-xl border border-gray-100 h-full flex flex-col">
                <h3 className="text-3xl font-black text-navy mb-6">
                  Foreign <span className="text-wine">Suppliers</span>
                </h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  We are a leading importer and distributor of premium calcium carbonate in India. We help Vietnam, Malaysia, and Egypt-based producers reach high-end Indian masterbatch and PVC manufacturers.
                </p>
                <div className="bg-gray-50 p-8 rounded-3xl mb-8 space-y-6 flex-grow">
                  <div className="text-wine font-bold text-xs uppercase tracking-[0.2em]">What We Source</div>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm text-gray-600">
                      <span className="text-wine font-bold">01.</span>
                      Coated GCC (D50 1–3 µm) for premium PVC/Cable
                    </li>
                    <li className="flex gap-3 text-sm text-gray-600">
                      <span className="text-wine font-bold">02.</span>
                      PCC Scalenohedral (Whiteness ≥96 GE)
                    </li>
                    <li className="flex gap-3 text-sm text-gray-600">
                      <span className="text-wine font-bold">03.</span>
                      High-whiteness limestone lumps for grinding
                    </li>
                  </ul>
                </div>
                <Link to="/contact">
                  <Button variant="navy" className="w-full py-8 text-lg rounded-2xl font-black">
                    Register as Supplier
                  </Button>
                </Link>
              </div>
            </Reveal>

            {/* Card 2: Mine Owners & Processors */}
            <Reveal variant="fadeRight">
              <div className="bg-white p-12 rounded-[4rem] shadow-xl border border-gray-100 h-full flex flex-col">
                <h3 className="text-3xl font-black text-navy mb-6">
                  Mine <span className="text-wine">Owners</span>
                </h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  We source GCC from Rajasthan and Gujarat processors for export to Nepal, Bangladesh, and beyond. If you have a grinding unit with consistent quality, we provide stable, year-round export orders.
                </p>
                <div className="bg-gray-50 p-8 rounded-3xl mb-8 space-y-6 flex-grow">
                  <div className="text-wine font-bold text-xs uppercase tracking-[0.2em]">Minimum Criteria</div>
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b border-gray-200 pb-2 text-sm">
                      <span className="text-gray-500 font-medium">CaCO₃ Purity</span>
                      <span className="text-navy font-black">≥97%</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2 text-sm">
                      <span className="text-gray-500 font-medium">Whiteness</span>
                      <span className="text-navy font-black">≥88 GE</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2 text-sm">
                      <span className="text-gray-500 font-medium">Monthly Output</span>
                      <span className="text-navy font-black">≥50 MT</span>
                    </li>
                  </ul>
                </div>
                <Link to="/contact">
                  <Button variant="wine" className="w-full py-8 text-lg rounded-2xl font-black">
                    Discuss Export Offtake
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🌍 Logistics Section */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight uppercase">
              Global <span className="text-wine">Logistics</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal
              variant="fadeLeft"
              className="bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-black text-wine mb-8 flex items-center gap-4">
                <Icons.Truck /> Export Logistics
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Primary Ports</span>
                  <span className="text-white font-bold text-right">
                    Mundra, Kandla, Kolkata
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Packaging</span>
                  <span className="text-white font-bold text-right">
                    25kg/50kg PP, 1MT Jumbo
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Transit (Bangladesh)</span>
                  <span className="text-white font-bold text-right">
                    5–8 Days
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Transit (Russia)</span>
                  <span className="text-white font-bold text-right">
                    20–28 Days
                  </span>
                </li>
              </ul>
            </Reveal>

            <Reveal
              variant="fadeRight"
              className="bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-black text-wine mb-8 flex items-center gap-4">
                <Icons.Globe /> Import Logistics
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Entry Ports</span>
                  <span className="text-white font-bold text-right">
                    Nhava Sheva, Mundra, Chennai
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Origins</span>
                  <span className="text-white font-bold text-right">
                    Vietnam, Malaysia, Egypt
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Lead Time (Ex-stock)</span>
                  <span className="text-white font-bold text-right">
                    3–7 Days
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Lead Time (Fresh)</span>
                  <span className="text-white font-bold text-right">
                    25–35 Days
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ❓ FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 tracking-tight uppercase">
              Frequently Asked <span className="text-wine">Questions</span>
            </h2>
          </Reveal>

          <Reveal variant="fadeUp">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Why does India import calcium carbonate?",
                  a: "While India produces standard GCC, ultrafine coated grades (D50 1-3 µm) and high-whiteness PCC are imported to meet the stringent quality requirements of the PVC and premium plastics industries.",
                },
                {
                  q: "What is the difference between GCC and PCC?",
                  a: "GCC is naturally milled and cost-effective. PCC is chemically synthesized, allowing for ultra-fine particle sizes and controlled crystal morphology, leading to better performance at a higher cost.",
                },
                {
                  q: "Why is coated GCC required for PVC?",
                  a: "The stearic acid coating makes the mineral hydrophobic, improving its dispersion and bonding within polymer matrices. Uncoated GCC can cause surface defects and processing failures in PVC pipes.",
                },
                {
                  q: "What specs are needed for paint applications?",
                  a: "Standard paints typically require whiteness of 88–92 GE and D50 of 10–20 µm. Premium paints require higher whiteness and a finer particle size.",
                },
                {
                  q: "Can Indian GCC be exported?",
                  a: "Yes, Indian GCC is excellent for standard applications and is widely exported. However, premium PVC grades typically require imported coated GCC.",
                },
                {
                  q: "What is the MOQ and sample lead time?",
                  a: "Our Minimum Order Quantity (MOQ) is 1 MT. Samples along with the Certificate of Analysis (COA) are usually dispatched within 3–5 days.",
                },
                {
                  q: "What are the typical payment terms?",
                  a: "We work primarily on Advance and Letter of Credit (LC) terms. For established buyers, we can discuss custom credit-based arrangements.",
                },
              ].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-gray-100 py-4"
                >
                  <AccordionTrigger className="text-left font-black text-navy hover:text-wine transition-colors text-lg">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-base leading-relaxed pt-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* 📞 Final CTA */}
      <section className="py-20 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal
            variant="zoomIn"
            className="bg-navy p-16 rounded-[4rem] relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-wine/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              Whether you are looking to export Indian GCC or import premium
              coated grades, our technical team is ready to assist.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/rfq">
                <Button
                  variant="wine"
                  className="px-12 py-8 text-xl rounded-full w-full sm:w-auto"
                >
                  Request a Quote
                </Button>
              </Link>
              <a href="tel:+919258720699">
                <Button
                  variant="outline"
                  className="px-12 py-8 text-xl rounded-full border-white text-white hover:bg-white hover:text-navy w-full sm:w-auto"
                >
                  Call Our Experts
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Calcite;
