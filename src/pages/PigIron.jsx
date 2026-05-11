import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  Docs: () => (
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
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
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

const PigIron = () => {
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
            src="https://4.imimg.com/data4/BF/UV/MY-26023508/basic-pig-iron.jpg"
            alt="Pig Iron Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-40">
          <Reveal variant="fadeUp" delay={200}>
            <Badge variant="default" className="mb-6 mt-12">
              All Grades · Full Specifications · BIS IS 13602 Compliant
            </Badge>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              Indian <span className="text-wine">Pig Iron</span> Source
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Indian Pig Iron — Basic, Foundry, SG Nodular & High Purity Grades — Export to Middle East, Southeast Asia & Beyond.
              <br />
              <span className="text-white font-medium">Fe 92%+  ·  C 3.5–4.5%  ·  BIS IS 13602 compliant  ·  Container lots from 20 MT  ·  FOB Goa / Vizag / Nhava Sheva</span>
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq" className="w-full sm:w-auto">
                <Button variant="wine" className="w-full">
                  Request Quote / Sample Analysis
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">
                  Supply Pig Iron to Us
                </Button>
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
              <Icons.Check /> COA with every lot
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> SGS inspection available
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> BIS IS 13602 Compliant
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> Non-Exclusivity Partnership
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
                value: "8-9 Mn MT",
                label: "India's Annual Output",
                sub: "Merchant / exportable surplus",
              },
              {
                value: "BIS Certified",
                label: "IS 13602 Compliant",
                sub: "Foundry, Basic, SG & Special",
              },
              {
                value: "0.95 MTPA",
                label: "Major Merchant Plant",
                sub: "Sesa Vedanta (Goa) & Others",
              },
              {
                value: "20 MT",
                label: "Min. FCL Order",
                sub: "approx 400-500 pigs",
              },
              {
                value: "15 Days",
                label: "Rapid Lead Time",
                sub: "Order to container loading",
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
                <div className="text-gray-500 text-sm">{stat.sub}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🔬 Grades & Full Specifications */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Indian Pig Iron{" "}
              <span className="text-wine">Full Specifications</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-4xl mx-auto font-medium text-lg leading-relaxed">
              All grades are commercially available from Indian blast furnace plants. Physical form: ingots / pigs — approx 5–8 kg each · size 140mm × 140mm × 70mm (standard Indian pig).
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Foundry Grade (FG1–FG4)",
                suit: "Grey Iron foundries, Cupola, Induction",
                chem: "C: 3.5–4.5%, Si: 1.25–3.50% (Graded), Mn: 0.50–1.00%",
                usp: "Silicon determines graphite morphology",
                color: "border-wine",
              },
              {
                name: "Basic Pig Iron",
                suit: "Steelmaking (EAF/IF)",
                chem: "C: 3.5–4.5%, Si: <1.00%, Mn: <1.00%, P: <0.15%",
                usp: "Clean iron substitute for scrap charge",
                color: "border-navy",
              },
              {
                name: "SG / Nodular Grade",
                suit: "Ductile Iron (ISO 2531 pipes)",
                chem: "Mn: <0.3%, S: <0.03%, P: <0.06%",
                usp: "Ensures reliable magnesium nodularisation",
                color: "border-gray-400",
              },
              {
                name: "Specialty Grades",
                suit: "HPPI, Low Mn, Low P Basic",
                chem: "Custom chemistry within range",
                usp: "Meets Tier 1 automotive OEM standards",
                color: "border-wine",
              },
            ].map((grade, idx) => (
              <Reveal
                key={idx}
                delay={idx * 150}
                variant="fadeUp"
                className="h-full"
              >
                <Card
                  className={`flex flex-col bg-white rounded-3xl shadow-sm border-t-8 ${grade.color} h-full hover:shadow-xl transition-all relative border-x-0 border-b-0`}
                >
                  <CardHeader className="p-8 pb-0">
                    <CardTitle className="text-xl font-black text-navy mb-4 leading-tight">
                      {grade.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 flex-1 space-y-6">
                    <div className="w-10 h-1 bg-gray-100 mb-6"></div>
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Process Suitability
                      </span>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {grade.suit}
                      </p>
                    </div>
                    <div className="bg-[#f8f9fb] p-3 rounded-xl border border-gray-100">
                      <span className="block text-[10px] font-bold text-wine uppercase tracking-widest mb-1">
                        Target Chemistry
                      </span>
                      <p className="text-navy font-bold text-base tracking-tight">
                        {grade.chem}
                      </p>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Advantage
                      </span>
                      <p className="text-gray-500 text-sm font-medium leading-relaxed italic">
                        "{grade.usp}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-navy p-4 md:px-8 md:py-4 rounded-2xl text-white shadow-xl">
              <span className="text-wine font-black uppercase tracking-widest text-sm">
                COA Provided Per Lot:
              </span>
              <span className="text-white/80 text-sm font-light">
                C, Si, Mn, S, P, Ti, Fe analyzed by XRF / OES (Optical Emission
                Spectrometry)
              </span>
            </div>
            <p className="mt-6 text-gray-500 text-sm italic">
              * Custom chemistry within range available for regular buyers of
              100 MT+/month.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 🚀 Industry Applications — Which Grade Do You Need? */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Which Grade Do <span className="text-wine">You Need?</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Click on an application to view in-depth metallurgical
              requirements and grade suitability.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "Foundries (Grey Iron)",
                img: "https://vietnamcastiron.com/wp-content/uploads/2020/12/oem-grey-cast-iron-valve.jpg",
                desc: "Engine blocks, agricultural castings, machine tool bases, pipes, and manhole covers.",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed text-base">
                      Grey iron foundries using cupola and induction furnaces
                      require Foundry FG grades. The Silicon (Si) content is
                      critical here as it determines graphite morphology and
                      overall casting properties.
                    </p>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-xs uppercase tracking-wider">
                        Metallurgical Note:
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Lower silicon is preferred for higher strength
                        engineering castings, while higher silicon improves
                        fluidity for thin-walled decorative parts.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                t: "Ductile Iron Foundries",
                img: "https://5.imimg.com/data5/SELLER/Default/2022/4/ZK/PU/WK/150556201/silicon-grade-pig-iron-500x500.jpg",
                desc: "ISO 2531 pipes, automotive knuckles, brake callipers, and wind turbine components.",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed text-base">
                      SG Nodular or HPPI grades are mandatory for ductile iron.
                      High mechanical properties are achieved through proper
                      nodularisation.
                    </p>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-xs uppercase tracking-wider">
                        Core Requirement:
                      </span>
                      <p className="text-wine font-bold text-sm leading-relaxed text-center py-1">
                        Mn &lt;0.3% · S &lt;0.03%
                      </p>
                      <p className="text-gray-600 text-sm italic mt-1 text-center">
                        Mandatory for reliable Magnesium nodularisation.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                t: "Steelmaking (EAF / IF)",
                img: "https://www.enggpro.com/blogs/wp-content/uploads/2023/11/Steel-Tubing-in-Industrial-Applications.jpg",
                desc: "As a clean scrap substitute to dilute tramp elements from common scrap charges.",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Basic grade pig iron is essential in melt shops producing
                      quality flat and long products. It dilutes undesirable
                      tramp elements like Copper (Cu), Tin (Sn), Chromium (Cr),
                      and Nickel (Ni) found in scrap.
                    </p>
                  </div>
                ),
              },
              {
                t: "Stainless Steel Route",
                img: "https://media.istockphoto.com/id/511814244/photo/metal-pipes.jpg?s=612x612&w=0&k=20&c=O9rag2H5VVM2B_AcLp98D42jvt9ZD3qhSeCI59Ii_q4=",
                desc: "Clean iron source for stainless melt shops where Phosphorus (P) control is critical.",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Low Phosphorus and low Sulphur basic grades provide a
                      reliable high-purity iron units source for sophisticated
                      stainless melt operations.
                    </p>
                  </div>
                ),
              },
              {
                t: "Automotive OEM Supply",
                img: "https://images.financialexpressdigital.com/2026/03/car-manufacturing_20250830180707_20260108193658_20260227134331_20260327113732_20260328123512.jpg?w=1200",
                desc: "Exhaustive supply to Toyota, Hyundai, and Bosch supplier foundries across Asia.",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      India is a preferred exporter to Tier 1 and Tier 2
                      foundries in Thailand, Indonesia, and South Korea. Major
                      OEM chains approve Indian HPPI for safety-critical
                      automotive castings.
                    </p>
                  </div>
                ),
              },
              {
                t: "Infrastructure & White Goods",
                img: "https://media.istockphoto.com/id/532021273/photo/construction-in-progress-of-a-mass-rapid-transit-line.jpg?s=612x612&w=0&k=20&c=8kxfQnLdTiprqxGVzYGlBxEK5cQhRdfs2WqYiB5gbLU=",
                desc: "Manhole covers, road furniture, pump bodies, and electric motor frames.",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Utilizes mid-range Foundry FG grades for massive
                      infrastructure volumes and low P foundry grades for Grey
                      iron pump/compressor components requiring precision
                      machining.
                    </p>
                  </div>
                ),
              },
            ].map((app, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <Card
                  className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer bg-[#f8f9fb] h-full flex flex-col border-none"
                  onClick={() => setSelectedApp(app)}
                >
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={app.img}
                      alt={app.t}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <CardHeader className="p-6 pb-0">
                    <CardTitle className="text-lg font-black text-navy mb-2">
                      {app.t}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-1 flex flex-col">
                    <CardDescription className="text-gray-500 text-sm leading-relaxed flex-1">
                      {app.desc}
                    </CardDescription>
                    <div className="flex justify-center mt-3 h-4">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-wine opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        View Documentation Details &rarr;
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Why Buy From Us — Buyer Advantages (Exhaustive) */}
      <section className="py-24 bg-navy text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Why Buy <span className="text-wine">From Us?</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light leading-relaxed">
              We leverage India's massive blast furnace capacity and strategic port locations to provide consistent, high-purity Pig Iron for global foundry and steelmaking applications.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal variant="fadeLeft">
              <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md h-full space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-wine mb-6 flex items-center gap-3">
                    <Icons.Check /> Quality & Consistency
                  </h3>
                  <ul className="space-y-4 text-gray-300 text-sm">
                    <li>• Fixed plant source — same blast furnace origin, stable chemistry lot to lot</li>
                    <li>• Full COA: C, Si, Mn, S, P, Ti per shipment — no surprises in your furnace</li>
                    <li>• BIS IS 13602 — grade-certified material from merchant BF plants</li>
                    <li>• SGS / Intertek inspection at loading port available on request</li>
                    <li>• Reference sample retained per lot — traceable for any quality query</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-xl font-bold text-wine mb-6 flex items-center gap-3">
                    <Icons.TrendingUp /> Technical Support
                  </h3>
                  <ul className="space-y-4 text-gray-300 text-sm">
                    <li>• Grade selection support — share your application, we recommend</li>
                    <li>• Chemistry customisation for regular buyers of 50 MT+/month</li>
                    <li>• Technical data sheet per grade with typical casting properties</li>
                    <li>• Trial lot with full COA available before long-term commitment</li>
                    <li>• Metallurgical queries answered — we understand foundry applications</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeRight">
              <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md h-full space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-wine mb-6 flex items-center gap-3">
                    <Icons.Check /> Supply & Pricing
                  </h3>
                  <ul className="space-y-4 text-gray-300 text-sm">
                    <li>• Direct plant source — no middlemen, competitive FOB factory gate pricing</li>
                    <li>• Container lots from 20 MT — no vessel minimum required</li>
                    <li>• Long-term supply contracts available — fix volume and price cycles</li>
                    <li>• Multiple grades from one supplier — simplifies your procurement process</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-xl font-bold text-wine mb-6 flex items-center gap-3">
                    <Icons.Docs /> Logistics & Documentation
                  </h3>
                  <ul className="space-y-4 text-gray-300 text-sm">
                    <li>• Export from Mormugao (Goa), Vizag, Nhava Sheva, Chennai</li>
                    <li>• 20 MT container: ~400–500 pigs per FCL, palletised or loose</li>
                    <li>• Full docs: BL, COA, Packing List, Commercial Invoice, COO, MSDS</li>
                    <li>• Flexible incoterms: FOB, CFR, CIF | Payment Terms: TT, LC</li>
                    <li>• Lead time: 15 days from order to container loading</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🇮🇳 Partner With Us — Supplier Advantages (Exhaustive) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Partner With Us — <span className="text-wine">Supplier Advantages</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8" />
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              We consistently help Indian blast furnace plants achieve better price realisation and reliable offtake through professional export channels.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <Reveal variant="fadeLeft">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 h-full">
                <div className="space-y-8">
                  <div className="group">
                    <h4 className="text-base font-black text-navy mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-wine rounded-full group-hover:h-8 transition-all"></span>
                      Better Price Realisation
                    </h4>
                    <ul className="text-gray-500 text-sm leading-relaxed space-y-2 pl-3.5 border-l border-gray-100">
                      <li>• Export market pricing — consistently above domestic foundry rates</li>
                      <li>• Grade-linked pricing — HPPI and low P grades earn meaningful premium</li>
                      <li>• Consistent monthly buying — no boom-bust in your despatch volumes</li>
                      <li>• No arbitrary quality deductions without COA evidence</li>
                    </ul>
                  </div>
                  <div className="group">
                    <h4 className="text-base font-black text-navy mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-wine rounded-full group-hover:h-8 transition-all"></span>
                      Reliable Offtake
                    </h4>
                    <ul className="text-gray-500 text-sm leading-relaxed space-y-2 pl-3.5 border-l border-gray-100">
                      <li>• Monthly committed purchase quantity — plan your blast furnace campaign</li>
                      <li>• We absorb export demand variation — your production moves consistently</li>
                      <li>• Long-term supply agreement for plants wanting volume certainty</li>
                      <li>• We handle all export documentation, freight and compliance</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="group">
                    <h4 className="text-base font-black text-navy mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-wine rounded-full group-hover:h-8 transition-all"></span>
                      Payment That Works
                    </h4>
                    <ul className="text-gray-500 text-sm leading-relaxed space-y-2 pl-3.5 border-l border-gray-100">
                      <li>• Payment on committed timelines — always know your settlement date</li>
                      <li>• Structured payment cycle aligned to your casting schedule</li>
                      <li>• No delays — we operate on confirmed export receivables</li>
                      <li>• Transparent settlement — bank transfer with clear invoice reference</li>
                    </ul>
                  </div>
                  <div className="group">
                    <h4 className="text-base font-black text-navy mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-wine rounded-full group-hover:h-8 transition-all"></span>
                      Partnership & Support
                    </h4>
                    <ul className="text-gray-500 text-sm leading-relaxed space-y-2 pl-3.5 border-l border-gray-100">
                      <li>• Free lab testing of your material before you commit</li>
                      <li>• Technical guidance on meeting export grade specifications</li>
                      <li>• Access to international buyer network for additional channels</li>
                      <li>• No exclusivity — supply us alongside existing buyers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeRight">
              <div className="bg-[#f8f9fb] p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-sm">
                <h4 className="text-2xl font-black text-navy mb-2 tracking-tight">
                  Supplier Inquiry Form
                </h4>
                <p className="text-gray-400 text-xs font-semibold mb-8 uppercase tracking-widest">
                  Blast Furnace / Merchant Plants
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">
                        Company Name
                      </label>
                      <Input placeholder="Company Name" className="bg-white border-gray-100 focus:border-wine" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">
                        Plant Location (State)
                      </label>
                      <Input placeholder="Plant Location" className="bg-white border-gray-100 focus:border-wine" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">
                        Grade Produced
                      </label>
                      <Input placeholder="Basic / Foundry / SG" className="bg-white border-gray-100 focus:border-wine" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">
                        Monthly Output (MT)
                      </label>
                      <Input placeholder="Monthly Output" className="bg-white border-gray-100 focus:border-wine" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">
                      Typical Chemistry (C / Si / Mn / S / P)
                    </label>
                    <textarea
                      rows="3"
                      className="w-full bg-white border border-gray-100 focus:border-wine p-3 rounded-xl text-sm outline-none shadow-sm resize-none text-navy"
                      placeholder="e.g. C: 4.1, Si: 0.8, Mn: 0.7..."
                    />
                  </div>
                  <div className="space-y-1 pb-4">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">
                      Contact Number
                    </label>
                    <Input type="tel" placeholder="Contact Number" className="bg-white border-gray-100 focus:border-wine" />
                  </div>
                  <Button type="submit" variant="wine" className="w-full">
                    Start Partnership Enquiry
                  </Button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🇮🇳 Industry Insight — Why Source From India */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4 uppercase tracking-tighter">
              India's Pig Iron Industry — <span className="text-wine">Why Source From India</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full" />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeLeft">
              <div className="space-y-6 text-gray-600 leading-relaxed font-medium text-sm">
                <p>
                  India's annual pig iron production stands at{" "}
                  <span className="text-wine font-black tracking-widest underline decoration-2 decoration-wine/20">
                    ~8–9 Million MT
                  </span>
                  . Significant exportable surplus comes from advanced merchant plants in{" "}
                  <span className="text-navy font-bold">
                    Goa, Chhattisgarh (Raipur / Bhilai cluster), Jharkhand, West Bengal, and Odisha
                  </span>
                  .
                </p>
                <p>
                  Indian pig iron is competitively priced vs Brazilian, Russian and Ukrainian origins. Major producers like{" "}
                  <span className="text-navy font-bold">Sesa Vedanta</span> (Goa, 0.95 MTPA capacity) ensure consistent quality with low tramp element content (clean iron units).
                </p>
                <div className="bg-white p-6 rounded-[2rem] border border-gray-200 shadow-sm space-y-6">
                  <h5 className="text-navy font-black text-xs uppercase tracking-widest border-b border-gray-100 pb-3 flex items-center gap-2">
                    <Icons.Check /> Strategic Advantages
                  </h5>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                    {[
                      "BIS IS 13602 Certified",
                      "Low Tramp Elements",
                      "Stable BF Chemistry",
                      "Direct Container Lots",
                      "Freight Advantage",
                      "Reliable Lead Times",
                    ].map((adv, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-[11px] font-bold text-gray-500"
                      >
                        <span className="w-1.5 h-1.5 bg-wine rounded-full"></span>{" "}
                        {adv}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeRight">
              <div className="bg-navy rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-wine/30 to-transparent opacity-50" />
                <h4 className="text-xl font-black mb-8 flex items-center gap-3 relative z-10 uppercase tracking-widest text-wine">
                  <Icons.MapPin /> Export Markets Served
                </h4>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {[
                    "UAE",
                    "Saudi Arabia",
                    "Qatar",
                    "Bangladesh",
                    "Sri Lanka",
                    "Indonesia",
                    "Vietnam",
                    "Malaysia",
                    "South Korea",
                    "Egypt",
                    "Nigeria",
                  ].map((country, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-white/10 rounded-xl text-[10px] font-black border border-white/5 uppercase tracking-tighter text-center whitespace-nowrap"
                    >
                      {country}
                    </span>
                  ))}
                </div>
                <p className="mt-10 text-white/50 text-[10px] leading-relaxed italic relative z-10 font-light">
                  Indian pig iron is favored for its reliable chemistry and proximity to Gulf and Southeast Asian ports — providing a distinct freight advantage vs Brazil or Russia.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ❓ Exhaustive FAQ (7 Questions) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "Q1. What types of pig iron are available?",
                a: "We supply: Basic Pig Iron for steelmaking, Foundry Grade for castings, and SG Grade for ductile iron.",
              },
              {
                q: "Q2. Why is silicon (Si) important?",
                a: "Silicon controls casting properties. Higher Si → better fluidity; Lower Si → higher strength.",
              },
              {
                q: "Q3. What is SG pig iron used for?",
                a: "SG pig iron is used for ductile (nodular) iron castings, requiring extremely low sulphur and controlled chemistry to ensure reliable nodularisation.",
              },
              {
                q: "Q4. What is the minimum order quantity?",
                a: "Minimum order is typically one container (20–25 MT) to ensure export logistics viability.",
              },
              {
                q: "Q5. Do we provide test reports?",
                a: "Yes, we provide a full COA (Certificate of Analysis) with every shipment and can arrange pre-shipment samples if required.",
              },
              {
                q: "Q6. Is Indian pig iron reliable?",
                a: "Yes, Indian pig iron is known for consistent quality and stable supply, effectively replacing Brazilian and Russian origins in many global markets.",
              },
              {
                q: "Q7. What are the payment terms and delivery time?",
                a: "We work with TT / LC. Delivery is usually 15 days from order confirmation to container loading at major Indian ports.",
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

      {/* 🏁 CTA Section */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal variant="fadeUp">
            <div className="bg-navy rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-wine/25 to-transparent"></div>
              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  Secure Your Clean{" "}
                  <span className="text-wine">Iron Units</span>
                </h2>
                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                  Join hundreds of foundries and melt shops globally sourcing
                  premium Pig Iron from India. WhatsApp our export desk for
                  current FOB pricing.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link to="/rfq" className="w-full sm:w-auto">
                    <Button variant="wine" className="w-full">
                      Request Quote
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/919258720699?text=I%20need%20Pig%20Iron%20from%20India."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button variant="outline" className="w-full gap-4">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.031 0C5.393 0 0 5.393 0 12.032c0 2.126.549 4.195 1.593 6.02L.055 24l6.096-1.598A11.933 11.933 0 0012.031 24c6.638 0 12.031-5.394 12.031-12.033S18.669 0 12.031 0zm3.842 17.26c-.164.462-.953.904-1.344.965-.91.135-2.072.102-3.8-1.002-2.126-1.359-3.486-3.771-3.585-3.904-.102-.132-.857-1.144-.857-2.183 0-1.04.536-1.547.728-1.748.191-.192.42-.24.55-.24h.392c.164 0 .38.064.593.588.225.556.55 1.346.6 1.444.05.102.081.222.016.353-.066.132-.1.21-.197.324-.097.114-.2.247-.282.342-.09.096-.188.204-.08.384.11.18.49.799 1.053 1.302.726.65 1.332.85 1.513.946.182.096.289.084.398-.036.11-.12.47-.547.596-.732.126-.186.252-.15.42-.09.168.06.1065.504 1.25.576.185.072.311.114.358.174.047.06.047.348-.117.81z" />
                      </svg>
                      WhatsApp Now
                    </Button>
                  </a>
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
          <div className="p-10">
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
            <div className="mt-10 border-t border-gray-100 pt-8">
              <Button
                onClick={() => setSelectedApp(null)}
                variant="default"
                className="w-full"
              >
                Close Technical Details
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PigIron;
