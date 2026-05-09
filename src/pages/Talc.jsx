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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion.jsx";
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
  Beaker: () => (
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
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 002.828 2.828l2.387-2.387a2 2 0 00.547-1.022l.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l.417-2.086a2 2 0 00-1.022-2.387l-2.387-2.387a2 2 0 00-2.828 2.828l2.387 2.387a2 2 0 001.022.547l2.086.417"
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
  Layers: () => (
    <svg className="w-6 h-6 text-wine" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
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

const Talc = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialRows = 5;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradesData = [
    {
      param: "Talc content % min",
      cosmetic: "98%",
      pharma: "98.5%",
      plastics: "94–96%",
      paint: "92–95%",
      ceramic: "90–94%",
      paper: "92–95%",
      industrial: "88–92%",
    },
    {
      param: "MgO %",
      cosmetic: "28–32%",
      pharma: "28–32%",
      plastics: "27–31%",
      paint: "27–31%",
      ceramic: "26–30%",
      paper: "27–31%",
      industrial: "25–30%",
    },
    {
      param: "SiO2 %",
      cosmetic: "57–62%",
      pharma: "57–62%",
      plastics: "57–62%",
      paint: "56–62%",
      ceramic: "55–62%",
      paper: "56–62%",
      industrial: "54–62%",
    },
    {
      param: "Fe2O3 % max",
      cosmetic: "0.15%",
      pharma: "0.10%",
      plastics: "0.30%",
      paint: "0.35%",
      ceramic: "0.50%",
      paper: "0.30%",
      industrial: "0.60%",
    },
    {
      param: "CaO % max",
      cosmetic: "0.50%",
      pharma: "0.50%",
      plastics: "0.80%",
      paint: "1.00%",
      ceramic: "1.50%",
      paper: "1.00%",
      industrial: "2.00%",
    },
    {
      param: "Al2O3 % max",
      cosmetic: "0.30%",
      pharma: "0.30%",
      plastics: "0.50%",
      paint: "0.60%",
      ceramic: "1.00%",
      paper: "0.60%",
      industrial: "1.50%",
    },
    {
      param: "LOI %",
      cosmetic: "4–6%",
      pharma: "4–6%",
      plastics: "4–6%",
      paint: "4–7%",
      ceramic: "4–8%",
      paper: "4–7%",
      industrial: "5–8%",
    },
    {
      param: "Moisture % max",
      cosmetic: "0.5%",
      pharma: "0.3%",
      plastics: "0.5%",
      paint: "0.5%",
      ceramic: "1.0%",
      paper: "0.5%",
      industrial: "1.0%",
    },
    {
      param: "Whiteness / GE",
      cosmetic: "92–96",
      pharma: "93–96",
      plastics: "88–92",
      paint: "88–92",
      ceramic: "84–90",
      paper: "88–92",
      industrial: "80–86",
    },
    {
      param: "Mesh / D50",
      cosmetic: "400–1250 mesh / D50 5–12µm",
      pharma: "200–400 mesh / D50 10–20µm",
      plastics: "400–800 mesh / D50 8–15µm",
      paint: "325–500 mesh / D50 10–20µm",
      ceramic: "200–325 mesh",
      paper: "325–500 mesh / D50 8–15µm",
      industrial: "200–325 mesh",
    },
    {
      param: "Heavy metals",
      cosmetic: "EU 1223/2009 compliance",
      pharma: "IP/BP/USP limits",
      plastics: "—",
      paint: "—",
      ceramic: "—",
      paper: "—",
      industrial: "—",
    },
    {
      param: "Asbestos testing",
      cosmetic: "XRD per lot - Free declaration",
      pharma: "XRD per lot",
      plastics: "On request",
      paint: "On request",
      ceramic: "—",
      paper: "—",
      industrial: "—",
    },
    {
      param: "Microbial limits",
      cosmetic: "Total aerobic, yeast/mould",
      pharma: "IP/BP/USP limits",
      plastics: "—",
      paint: "—",
      ceramic: "—",
      paper: "—",
      industrial: "—",
    },
    {
      param: "Surface treatment",
      cosmetic: "None (natural)",
      pharma: "None",
      plastics: "Stearic acid/Silane available",
      paint: "None",
      ceramic: "None",
      paper: "None",
      industrial: "Stearic acid available",
    },
  ];

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvYlJSjp5a6DMdHvWnNZkAgZn_uvQuWXUFQ&s" // Representative mineral mining
            alt="Talc Mining Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
          <Reveal variant="fadeUp" delay={200}>
            <Badge className="mb-6 mt-12">
              Asbestos-Free Certified · 200 - 1250 Mesh · Rajasthan Origin
            </Badge>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight uppercase">
              Premium <span className="text-wine">Talc Powder</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              India's highest purity Talc (92–98%) for Cosmetic, Pharmaceutical,
              and Industrial applications. Sourced from the premium Udaipur
              belt, our talc offers exceptional whiteness (80–96 GE) and
              micronised precision.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              {[
                { l: "High Purity", v: "92% – 98% Talc" },
                { l: "Whiteness", v: "80 – 96 GE" },
                { l: "Micronised", v: "Up to 1250 Mesh" },
                { l: "Certified", v: "Asbestos-Free" },
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
          <Reveal variant="fadeUp" delay={1000}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq">
                <Button variant="wine" size="lg">
                  Request Sample / Quote
                </Button>
              </Link>
              <a
                href="https://wa.me/919258720699"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  Supply Talc to Us
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 📊 Trust Bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl font-black text-navy">7 Days</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Sample Lead Time
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-black text-navy">XRD</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Asbestos-Free Certified
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-black text-navy">2 MT</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Custom Grades MOQ
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-black text-navy">Global</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Worldwide Export
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔬 Technical Grade Specifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Grade <span className="text-wine">Specifications</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Complete chemical and physical parameters for all commercial
              grades.
            </p>
          </Reveal>

          <Reveal className="overflow-x-auto rounded-[2rem] shadow-xl border border-gray-100 bg-white">
            <Table>
              <TableHeader>
                <TableRow className="bg-navy hover:bg-navy text-white text-[10px] font-black uppercase tracking-widest h-14 border-none">
                  <TableHead className="text-white px-6 min-w-[200px]">
                    Parameter
                  </TableHead>
                  <TableHead className="text-white px-4">Cosmetic</TableHead>
                  <TableHead className="text-white px-4">Pharma</TableHead>
                  <TableHead className="text-white px-4">Plastics</TableHead>
                  <TableHead className="text-white px-4">Paint</TableHead>
                  <TableHead className="text-white px-4">Ceramic</TableHead>
                  <TableHead className="text-white px-4">Paper</TableHead>
                  <TableHead className="text-white px-4">Industrial</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradesData.slice(0, isExpanded ? gradesData.length : initialRows).map((row, i) => (
                  <TableRow
                    key={i}
                    className={`${i % 2 === 0 ? "bg-gray-50/50" : ""} transition-all duration-500`}
                  >
                    <TableCell className="font-black text-wine py-4 px-6">
                      {row.param}
                    </TableCell>
                    <TableCell className="text-xs font-bold text-navy px-4">
                      {row.cosmetic}
                    </TableCell>
                    <TableCell className="text-xs font-bold text-navy px-4">
                      {row.pharma}
                    </TableCell>
                    <TableCell className="text-xs font-medium text-gray-500 px-4">
                      {row.plastics}
                    </TableCell>
                    <TableCell className="text-xs font-medium text-gray-500 px-4">
                      {row.paint}
                    </TableCell>
                    <TableCell className="text-xs font-medium text-gray-500 px-4">
                      {row.ceramic}
                    </TableCell>
                    <TableCell className="text-xs font-medium text-gray-500 px-4">
                      {row.paper}
                    </TableCell>
                    <TableCell className="text-xs font-medium text-gray-500 px-4">
                      {row.industrial}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Reveal>

          <div className="mt-10 flex justify-center">
            <Button 
              variant="outline" 
              onClick={() => setIsExpanded(!isExpanded)}
              className="border-wine text-wine hover:bg-wine hover:text-white rounded-full px-10 py-6 font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-wine/20 flex items-center gap-3 group"
            >
              {isExpanded ? "Show Less Specifications" : "Show All Specifications"}
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-3xl border border-gray-100 italic text-sm text-gray-500">
            * Micronised grades with D50 as fine as 2–3µm available for premium
            cosmetic and pharma buyers. Custom mesh or surface treatment
            available for orders of 2 MT and above.
          </div>
        </div>
      </section>

      {/* 🛡️ Ethical Sourcing & Safety */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeUp">
              <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
                Ethical Sourcing & <span className="text-wine">Safety</span>
              </h2>
              <div className="w-24 h-1 bg-wine rounded-full mb-8"></div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 p-2 rounded-lg text-green-700">
                    <Icons.Check />
                  </div>
                  <div>
                    <h4 className="font-black text-navy uppercase text-sm">
                      Asbestos-Free Declaration
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Udaipur belt talc is naturally asbestos-free. We provide
                      formal per-lot XRD testing documentation (ISO 22262)
                      required for compliance in EU and US markets.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-wine/10 p-2 rounded-lg">
                    <Icons.Globe />
                  </div>
                  <div>
                    <h4 className="font-black text-navy uppercase text-sm">
                      Licensed Mining Operations
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      We source exclusively from licensed mining operations in
                      Rajasthan. No informal or artisanal mining sources.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-wine/10 p-2 rounded-lg">
                    <Icons.Check />
                  </div>
                  <div>
                    <h4 className="font-black text-navy uppercase text-sm">
                      Ethical Standards
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Child-labour-free and ethical sourcing declarations are
                      available for global supply chains requiring transparency.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal
              variant="zoomIn"
              delay={200}
              className="bg-navy p-12 rounded-[3rem] text-white"
            >
              <h3 className="text-2xl font-black mb-6">
                Udaipur Belt Advantage
              </h3>
              <p className="text-gray-400 mb-8 font-light leading-relaxed">
                Rajasthan accounts for 80%+ of India's talc production. The
                Udaipur-Dungarpur-Sirohi region is globally recognized for
                world-class deposits that are naturally high purity (95–98%),
                bright white, and low iron.
              </p>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-wine font-bold text-xs uppercase mb-2">
                  Formation Geology
                </div>
                <div className="text-sm font-medium">
                  Hydrothermal alteration of dolomitic limestone produces platy,
                  lamellar crystals with excellent lubricity and high aspect
                  ratio.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🚀 Industry Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Industrial <span className="text-wine">Applications</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "Cosmetics & Personal Care",
                d: "Base for face powder, foundation, and baby powder. Valued for softness (Mohs 1), lubricity, and oil absorption.",
                f: "Asbestos-free certification is critical here.",
                icon: <Icons.Beaker />,
              },
              {
                t: "Pharmaceuticals",
                d: "Tablet lubricant and glidant. Reduces friction in tablet presses. Also used as an excipient in topical formulations.",
                f: "Compliant with IP/BP/USP standards.",
                icon: <Icons.Beaker />,
              },
              {
                t: "Plastics & Polymers",
                d: "Nucleates crystallization in PP, improving stiffness and heat deflection temperature. Used in automotive bumpers and dashboards.",
                f: "Platy morphology (high aspect ratio) is critical.",
                icon: <Icons.Factory />,
              },
              {
                t: "Paints & Coatings",
                d: "Functional extender that improves barrier resistance and provides a matt finish. Particles create a physical moisture barrier.",
                f: "Reduces mud-cracking in primers.",
                icon: <Icons.Layers />,
              },
              {
                t: "Ceramics & Sanitaryware",
                d: "Lowers firing temperature and improves whiteness. Controls thermal expansion in technical ceramics like steatite.",
                f: "Ideal for wall tiles and technical parts.",
                icon: <Icons.Globe />,
              },
              {
                t: "Paper & Rubber",
                d: "Filler for smoothness and opacity in paper. Reinforcing filler and anti-tack agent in rubber compounding.",
                f: "Stearic acid coated grades preferred for rubber.",
                icon: <Icons.Factory />,
              },
            ].map((app, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <Card className="h-full border-none shadow-sm hover:shadow-2xl transition-all bg-gray-50 rounded-[2rem] p-8 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform origin-left">
                    {app.icon}
                  </div>
                  <h4 className="text-xl font-black text-navy mb-4 border-l-4 border-wine pl-4">
                    {app.t}
                  </h4>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed mb-4">
                    {app.d}
                  </p>
                  <Badge
                    variant="outline"
                    className="border-wine/20 text-wine/80"
                  >
                    {app.f}
                  </Badge>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Partnership Advantages */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-wine/5 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">
              Why Partner <span className="text-wine">With Us</span>
            </h2>
            <div className="w-24 h-1 bg-wine rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-wine">
                For Foreign Buyers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Direct mine access - No middleman",
                  "Every lot lab-tested (XRF/XRD)",
                  "Lead times: 12–20 days for bulk",
                  "Flexible Incoterms (FOB, CIF, DDP)",
                  "Custom mesh & surface treatments",
                  "LCL shipments from 500kg",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icons.Check />
                    <span className="text-sm font-medium text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-wine">For Mine Owners</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "20-30% better price realization",
                  "Consistent month-on-month buying",
                  "Zero export documentation burden",
                  "Prompt and structured payment",
                  "Free lab testing for whiteness & %",
                  "Technical guidance for export specs",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-wine">
                      <Icons.Check />
                    </div>
                    <span className="text-sm font-medium text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Talc <span className="text-wine">FAQ</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "Is your talc asbestos-free?",
                a: "Yes, all cosmetic and pharma grade talc is asbestos-free and tested via XRD. Certificates are provided with every shipment.",
              },
              {
                q: "What is the difference between cosmetic and pharma grade talc?",
                a: "Cosmetic grade is optimized for skin feel and purity in makeup, while Pharma grade meets strict IP/BP/USP pharmacopoeia standards for medical lubricants and excipients.",
              },
              {
                q: "What particle sizes are available?",
                a: "We supply from 200 mesh to 1250 mesh, including micronised grades. Custom particle sizes can be developed on request for orders above 2 MT.",
              },
              {
                q: "Can I get a sample before ordering?",
                a: "Yes, free samples (500g–1kg) are provided with COA for testing before any bulk supply. Standard lead time is 7 days via DHL.",
              },
              {
                q: "How does Indian talc compare globally?",
                a: "Indian talc from the Rajasthan belt offers high purity, excellent lamellar structure, and better supply chain transparency compared to many other global sources.",
              },
            ].map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-[#f8f9fb] px-8 rounded-3xl border border-gray-100"
              >
                <AccordionTrigger className="text-base font-black text-navy">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed text-base font-medium pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 🏁 Footer CTA */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <Reveal variant="fadeUp">
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">
              Secure Your <span className="text-wine">Talc Supply</span> Today
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light">
              Get technical grade recommendation matched to your exact
              application. Sample dispatch within 7 days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq">
                <Button variant="wine" size="lg">
                  Get Current Quotation
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Export Desk
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Talc;
