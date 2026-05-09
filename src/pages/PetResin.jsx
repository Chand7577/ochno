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
import petHero from "../assets/images/pet_resin_hero.jpg";
import petGranules from "../assets/images/pet_granules.png";
import petPackaging from "../assets/images/pet_packaging.jpg";

// ── Icons ──────────────────────────────────────────────────────────────────
const Icons = {
  Check: () => (
    <svg className="w-5 h-5 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Globe: () => (
    <svg className="w-6 h-6 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  Box: () => (
    <svg className="w-6 h-6 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  Truck: () => (
    <svg className="w-6 h-6 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-6 0a1 1 0 001-1m-6 0a1 1 0 001-1" />
    </svg>
  ),
  Flask: () => (
    <svg className="w-6 h-6 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 102.828 2.828l3.182-3.182a4 4 0 001.022-.547l2.387-.477a4 4 0 002.573-.345l.318-.158a4 4 0 002.573-.345l2.387.477a4 4 0 001.022.547l3.182 3.182a2 2 0 102.828-2.828l-2.387-2.387z" />
    </svg>
  ),
};

// ── Reveal Component ─────────────────────────────────────────────────────────
const VARIANTS = {
  fadeUp: { h: "opacity-0 translate-y-12 blur-sm", v: "opacity-100 translate-y-0 blur-none" },
  fadeLeft: { h: "opacity-0 -translate-x-12 blur-sm", v: "opacity-100 translate-x-0 blur-none" },
  fadeRight: { h: "opacity-0 translate-x-12 blur-sm", v: "opacity-100 translate-x-0 blur-none" },
  zoomIn: { h: "opacity-0 scale-95 blur-sm", v: "opacity-100 scale-100 blur-none" },
};

const Reveal = ({ children, variant = "fadeUp", delay = 0, duration = 800, threshold = 0.1, className = "" }) => {
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
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const { h, v } = VARIANTS[variant] || VARIANTS.fadeUp;

  return (
    <div
      ref={ref}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
      className={`transition-all ease-out ${visible ? v : h} ${className}`}
    >
      {children}
    </div>
  );
};

const PetResin = () => {
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
            src={petHero}
            alt="PET Resin Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/85 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
          <Reveal variant="fadeUp" delay={200}>
            <Badge variant="default" className="mb-6 mt-12 bg-wine hover:bg-wine/90">
              Premium Bottle Grade · ADD-Free Vietnam & South Korea Origin
            </Badge>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight uppercase">
              PET <span className="text-wine">RESIN</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed mb-12">
              High-purity Polyethylene Terephthalate for Water, CSD, and Edible Oil packaging. 
              IV 0.76–0.86 dl/g · Food Contact Compliant · Global Sourcing Expertise.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq" className="w-full sm:w-auto">
                <Button variant="wine" className="w-full px-8 py-6 text-lg rounded-full">
                  Enquire for Supply
                </Button>
              </Link>
              <a
                href="https://wa.me/919258720699?text=Interested%20in%20offering%20PET%20Resin%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" className="w-full gap-3 px-8 py-6 text-lg rounded-full border-white text-white hover:bg-white hover:text-navy transition-all">
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
              <Icons.Check /> COA with IV & AA Tested
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> FSSAI Food Contact Compliant
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> ADD-Free Vietnam Origin
            </span>
            <span className="flex items-center gap-2">
              <Icons.Check /> Sample with COA in 3–5 days
            </span>
          </div>
        </div>
      </div>

      {/* 📊 Market Stats Bar */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y divide-gray-200 md:divide-y-0 md:divide-x">
            {[
              { value: "5.5 Million", label: "Market Size", sub: "Annual demand in MT (India)" },
              { value: "11% CAGR", label: "Market Growth", sub: "Driven by beverage & pharma" },
              { value: "≤1 ppm", label: "AA Content", sub: "Beverage grade standard" },
              { value: "ADD-Free", label: "Vietnam Origin", sub: "Preferred for cost-efficiency" },
            ].map((stat, idx) => (
              <Reveal key={idx} delay={idx * 100} variant="fadeUp" className="text-center pt-8 md:pt-0 first:pt-0 px-4">
                <div className="text-4xl font-black text-navy mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-wine font-black text-[10px] uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-gray-400 text-[10px] font-medium">{stat.sub}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🔄 India's PET Landscape */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeLeft">
              <h2 className="text-4xl font-black text-navy mb-8 tracking-tight leading-tight">
                INDIA'S <span className="text-wine">PET LANDSCAPE</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                India is the world's largest importer of bottle grade PET resin, with a massive domestic consumption driven by the beverage and consumer goods sectors.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-wine">
                  <h3 className="text-xl font-black text-navy mb-3">Sourcing Preference</h3>
                  <p className="text-gray-500">
                    Vietnam dominates the import landscape (60% of shipments), followed by South Korea and Thailand. These origins are preferred due to being ADD-free.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-navy">
                  <h3 className="text-xl font-black text-navy mb-3">Sustainability & rPET</h3>
                  <p className="text-gray-500">
                    By 2030, major brand owners like PepsiCo and Coca-Cola plan to use 100% recycled PET. Food-grade rPET facilities are rapidly expanding in India.
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal variant="zoomIn" className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
               <img 
                src={petGranules} 
                alt="PET Granules" 
                className="w-full h-full object-cover p-12 bg-white"
               />
               <div className="absolute inset-0 bg-navy/20"></div>
               <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl max-w-xs shadow-lg">
                  <p className="text-navy font-black text-sm mb-2 uppercase tracking-widest">Anti-Dumping Note</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    India imposes ADD on China-origin PET. Vietnam origin is ADD-free and preferred for cost parity.
                  </p>
               </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🔬 Product Specs & Grades */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 tracking-tight uppercase">
              PET <span className="text-wine">Specifications</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Standard Bottle",
                sub: "IV 0.76–0.80 dl/g",
                desc: "The workhorse of the industry. Optimized for standard water and CSD bottles (500ml–2L).",
                tags: ["Water", "Soft Drinks", "Edible Oil"]
              },
              {
                title: "High IV Grade",
                sub: "IV 0.82–0.86 dl/g",
                desc: "Superior molecular strength. Designed for large containers (5L+), hot-fill juices, and barrier bottles.",
                tags: ["Large Jars", "Hot Fill", "Pressure Rated"]
              },
              {
                title: "Food Grade rPET",
                sub: "IV 0.80–0.84 dl/g",
                desc: "Certified recycled content for sustainability-driven brands. Complies with FSSAI & FDA standards.",
                tags: ["Sustainable", "Certified", "Brand Loyalty"]
              }
            ].map((grade, i) => (
              <Reveal key={i} delay={i * 200} variant="fadeUp">
                <div className="bg-[#f8f9fb] p-10 rounded-[2.5rem] h-full border border-gray-100 hover:shadow-xl transition-all group">
                  <div className="mb-6">
                    <h3 className="text-3xl font-black text-navy group-hover:text-wine transition-colors">{grade.title}</h3>
                    <p className="text-wine font-bold text-sm tracking-widest uppercase">{grade.sub}</p>
                  </div>
                  <p className="text-gray-500 mb-8 leading-relaxed">{grade.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {grade.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-black uppercase tracking-widest bg-white px-3 py-1 rounded-full text-navy border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Technical Comparison Table */}
          <Reveal variant="fadeUp">
            <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
              <h3 className="text-2xl font-black text-navy mb-8 border-l-4 border-wine pl-4">Technical Comparison — Premium Grades</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-navy hover:bg-navy">
                      <TableHead className="text-white font-black uppercase tracking-widest py-6">Parameter</TableHead>
                      <TableHead className="text-white font-black uppercase tracking-widest text-center">Standard Bottle</TableHead>
                      <TableHead className="text-white font-black uppercase tracking-widest text-center">High IV Grade</TableHead>
                      <TableHead className="text-white font-black uppercase tracking-widest text-center">rPET Food Grade</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { p: "Intrinsic Viscosity (IV) dl/g", v: ["0.76–0.80", "0.82–0.86", "0.80–0.84"] },
                      { p: "Acetaldehyde (AA) ppm max", v: ["≤1.0", "≤1.0", "≤1.0"] },
                      { p: "Diethylene Glycol (DEG) % max", v: ["1.5%", "1.2%", "1.5%"] },
                      { p: "Colour b* (yellowness) max", v: ["≤2.0", "≤1.8", "≤3.0"] },
                      { p: "Moisture % max", v: ["≤0.2%", "≤0.2%", "≤0.2%"] },
                      { p: "CEG meq/kg", v: ["≤25", "≤20", "≤30"] },
                      { p: "Origin", v: ["Vietnam / S. Korea", "Vietnam / S. Korea", "India (Certified)"] }
                    ].map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "bg-gray-50/50" : ""}>
                        <TableCell className="font-bold text-navy py-4">{row.p}</TableCell>
                        {row.v.map((val, j) => (
                          <TableCell key={j} className="text-center font-medium text-gray-600">{val}</TableCell>
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
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 tracking-tight uppercase">
              Consumer <span className="text-wine">Applications</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "Beverages (CSD & Water)",
                img: "https://images.unsplash.com/photo-1544203379-e137fbf9d332?q=80&w=2070&auto=format&fit=crop",
                desc: "Standard IV (0.76–0.80) is the market leader for packaged drinking water and carbonated drinks."
              },
              {
                t: "Edible Oil & Ghee",
                img: "https://images.unsplash.com/photo-1474979266404-7eaacbadcbaf?q=80&w=2070&auto=format&fit=crop",
                desc: "Superior transparency and chemical resistance for healthy edible oil packaging."
              },
              {
                t: "Personal & Home Care",
                img: "https://images.unsplash.com/photo-1610461821840-2ff5ad124475?q=80&w=2070&auto=format&fit=crop",
                desc: "Highly versatile for shampoo bottles, body wash, and liquid detergent containers."
              },
              {
                t: "Pharma Packaging",
                img: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=2070&auto=format&fit=crop",
                desc: "Upgrading from glass to PET for syrup bottles and healthcare supplements."
              },
              {
                t: "Hot Fill & Large Jars",
                img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop",
                desc: "High IV (0.82–0.86) provides the thermal stability required for hot-fill juices and large water jars."
              },
              {
                t: "Sustainability (rPET)",
                img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop",
                desc: "Food-grade recycled PET resin to help brands meet EPR targets and sustainability goals."
              }
            ].map((app, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <Card className="group overflow-hidden rounded-[2.5rem] border-none shadow-sm hover:shadow-2xl transition-all h-full bg-white">
                  <div className="h-56 overflow-hidden relative">
                    <img src={app.img} alt={app.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <CardHeader className="p-8 pb-0">
                    <CardTitle className="text-xl font-black text-navy">{app.t}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-4">
                    <p className="text-gray-500 text-sm leading-relaxed">{app.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Buyer Advantages */}
      <section className="py-24 bg-navy text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">
              Sourcing <span className="text-wine">Advantages</span>
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
                  Quality Assurance
                </h3>
                <ul className="space-y-6 text-gray-300 text-base font-medium">
                  <li className="flex gap-4">
                    <span className="text-wine shrink-0">•</span>
                    Fixed origin supply from Vietnam and South Korea for consistent IV.
                  </li>
                  <li className="flex gap-4">
                    <span className="text-wine shrink-0">•</span>
                    Full COA per lot covering IV, AA, DEG, Colour, and Moisture.
                  </li>
                  <li className="flex gap-4">
                    <span className="text-wine shrink-0">•</span>
                    FSSAI & FDA documentation support for food-contact compliance.
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fadeRight">
              <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md h-full space-y-10">
                <h3 className="text-2xl font-black text-white flex items-center gap-4">
                  <div className="w-12 h-12 bg-wine rounded-2xl flex items-center justify-center shrink-0">
                    <Icons.Check />
                  </div>
                  Commercial Flexibility
                </h3>
                <ul className="space-y-6 text-gray-300 text-base font-medium">
                  <li className="flex gap-4">
                    <span className="text-wine shrink-0">•</span>
                    MOQ of 1 MT for trial orders and testing purposes.
                  </li>
                  <li className="flex gap-4">
                    <span className="text-wine shrink-0">•</span>
                    Ex-stock availability at major Indian ports (Nhava Sheva, Mundra).
                  </li>
                  <li className="flex gap-4">
                    <span className="text-wine shrink-0">•</span>
                    Competitive CIF / DAP pricing with ADD-free Vietnamese origin.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🌍 Logistics Section */}
      <section className="py-24 bg-white text-navy">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 tracking-tight uppercase">
              Global <span className="text-wine">Logistics</span>
            </h2>
          </Reveal>

          <Reveal variant="zoomIn" className="mb-16">
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 bg-white">
              <img src={petPackaging} alt="PET Resin Packaging" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent flex items-center p-12">
                <div className="max-w-md">
                  <h4 className="text-3xl font-black text-white uppercase italic mb-4">Standard Export Packaging</h4>
                  <p className="text-white/80 font-medium leading-relaxed">
                    25kg PP/PE bags multi-layered and 1,000kg–1,100kg Jumbo bags with UV protection, optimized for sea transit and long-term storage.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal variant="fadeLeft" className="bg-[#f8f9fb] p-12 rounded-[3rem] border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-black text-wine mb-8 flex items-center gap-4">
                <Icons.Truck /> Logistics Data
              </h3>
              <ul className="space-y-4 text-gray-500">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Standard Packaging</span>
                  <span className="text-navy font-bold text-right">25kg Bag in 1MT Big Bags</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>FCL Capacity (20-ft)</span>
                  <span className="text-navy font-bold text-right">20–22 MT</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Primary Entry Ports</span>
                  <span className="text-navy font-bold text-right">Nhava Sheva, Mundra, Chennai</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Transit Time (Vietnam)</span>
                  <span className="text-navy font-bold text-right">10–14 Days</span>
                </li>
              </ul>
            </Reveal>

            <Reveal variant="fadeRight" className="bg-[#f8f9fb] p-12 rounded-[3rem] border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-black text-wine mb-8 flex items-center gap-4">
                <Icons.Flask /> Procurement Data
              </h3>
              <ul className="space-y-4 text-gray-500">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>HS Code</span>
                  <span className="text-navy font-bold text-right">3907.61 (Bottle Grade)</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Sample Dispatch</span>
                  <span className="text-navy font-bold text-right">3–5 Days with COA</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Lead Time (Import)</span>
                  <span className="text-navy font-bold text-right">25–40 Days</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Inland Delivery</span>
                  <span className="text-navy font-bold text-right">Pan-India Network</span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ❓ FAQs */}
      <section className="py-24 bg-[#f8f9fb]">
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
                  q: "What is IV in PET and why is it important?",
                  a: "Intrinsic Viscosity (IV) indicates the molecular strength of the resin. A higher IV means stronger bottles. Standard water bottles use 0.76–0.80 IV, while hot-fill or large containers require 0.82–0.86 IV."
                },
                {
                  q: "Why is acetaldehyde (AA) content important?",
                  a: "AA can affect the taste of the contents. Beverage bottles require very low AA (≤1 ppm) to avoid any off-flavour, especially for packaged drinking water."
                },
                {
                  q: "Why import PET from Vietnam instead of China?",
                  a: "India imposes anti-dumping duties on PET resin from China. Vietnam origin is ADD-free, resulting in a more competitive landed price for Indian manufacturers."
                },
                {
                  q: "When is the best time to buy PET resin in India?",
                  a: "Prices usually dip in January–February before the summer beverage season peak (March–June). Strategic buyers build inventory early to avoid supply tightness."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200 py-4">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal variant="zoomIn" className="bg-navy p-16 rounded-[4rem] relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-wine/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Secure Your Sourcing Strategy</h2>
             <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
               From standard water bottles to specialty hot-fill applications, we provide the technical expertise and logistics support you need.
             </p>
             <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Link to="/rfq">
                 <Button variant="wine" className="px-12 py-8 text-xl rounded-full w-full sm:w-auto">Request a Quote</Button>
               </Link>
               <a href="tel:+919258720699">
                 <Button variant="outline" className="px-12 py-8 text-xl rounded-full border-white text-white hover:bg-white hover:text-navy w-full sm:w-auto">Call Our Experts</Button>
               </a>
             </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default PetResin;
