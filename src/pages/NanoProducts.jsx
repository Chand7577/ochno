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
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
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
  Microscope: () => (
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
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
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

const NanoProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.freepik.com/premium-photo/fish-oil-omega-3-capsules-vitamin-with-epa-dha-isolated-wooden-background_39768-9232.jpg?w=360"
            alt="Nano Technology Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent"></div>
          {/* Nano particles background effect (abstract) */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-wine/10 blur-[100px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <Badge className="mb-6 py-1 px-4 bg-wine/20 text-wine border-wine/30 text-xs font-bold uppercase tracking-widest">
              Advanced Nano-Technology Formulations
            </Badge>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              NANO <span className="text-wine">NUTRACEUTICAL</span> <br />
              <span className="text-3xl md:text-5xl font-light tracking-widest text-white/60">PRODUCTS & SOLUTIONS</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
              Bridging the gap between GMP-certified nano-manufacturers and global healthcare brands. 
              Supply of high-purity colloidal silver, nano-hydroxyapatite, and bioavailable nutraceuticals.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq">
                <Button variant="wine" className="w-full sm:w-64 h-16 text-lg font-black shadow-2xl shadow-wine/30 uppercase tracking-widest">
                  Bulk Supply Inquiry
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="w-full sm:w-64 h-16 text-lg font-black border-white/20 text-white hover:bg-white/10 uppercase tracking-widest">
                  Partner with Us
                </Button>
              </Link>
            </div>
          </Reveal>
          
          <Reveal variant="fadeUp" delay={1000} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { l: "Certification", v: "GMP Tie-ups" },
              { l: "Markets", v: "B2B & Export" },
              { l: "Bioavailability", v: "20-40x Higher" },
              { l: "Solutions", v: "Private Label" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="text-wine font-black text-xs uppercase tracking-tighter mb-1">{stat.l}</div>
                <div className="text-white text-[10px] font-medium opacity-60 uppercase">{stat.v}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 🧪 Section: Who We Are */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeUp">
              <Badge className="mb-6 bg-navy/5 text-navy border-navy/10 px-4 py-1">Supply Chain Excellence</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 uppercase tracking-tight">
                WHO WE <span className="text-wine">ARE</span>
              </h2>
              <div className="w-24 h-1.5 bg-wine rounded-full mb-10"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                Ochnology Solutions has strategic tie-ups with leading nano-formulation manufacturers in India. 
                We enable healthcare brands, distributors, and export buyers to access cutting-edge nanotechnology 
                without the complexities of direct manufacturing.
              </p>
              <p className="text-gray-500 mb-10 italic">
                "We source and supply — we do not manufacture. Our partnerships allow us to offer consistent quality and full documentation."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "GMP-Certified Partners",
                  "Full Batch Documentation",
                  "Competitive B2B Pricing",
                  "Trial to Commercial Scale",
                  "Export-Ready Packaging",
                  "Private Label Solutions"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-wine shrink-0"><Icons.Check /></div>
                    <span className="text-navy font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="zoomIn" delay={200} className="relative">
              <div className="absolute -inset-10 bg-gray-50 rounded-[3rem] -z-10 blur-3xl opacity-60"></div>
              <div className="bg-navy rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-wine/20 blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
                 <h3 className="text-2xl font-black mb-8 border-l-4 border-wine pl-6 uppercase tracking-tight">Manufacturing Model</h3>
                 <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"><Icons.Beaker /></div>
                      <div>
                        <h4 className="font-bold text-wine mb-1">R&D Tie-ups</h4>
                        <p className="text-white/60 text-xs">Access to labs developing the next gen of nano-medicine.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"><Icons.Shield /></div>
                      <div>
                        <h4 className="font-bold text-wine mb-1">Quality Assurance</h4>
                        <p className="text-white/60 text-xs">Every batch undergoes rigorous testing with COA/MSDS.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"><Icons.Globe /></div>
                      <div>
                        <h4 className="font-bold text-wine mb-1">Export Ready</h4>
                        <p className="text-white/60 text-xs">Regulatory compliance for Middle East, SE Asia & Africa.</p>
                      </div>
                    </div>
                 </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📊 Section: Market Opportunity */}
      <section className="py-32 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 uppercase tracking-tight">
              MARKET <span className="text-wine">OPPORTUNITY</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
              India's nano-nutraceutical sectors are witnessing explosive growth, driven by advanced delivery systems and increasing healthcare awareness.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" className="overflow-x-auto rounded-[3rem] shadow-2xl border border-gray-100 bg-white">
            <Table>
              <TableHeader>
                <TableRow className="bg-navy hover:bg-navy text-white text-[10px] font-black uppercase tracking-widest h-20 border-none">
                  <TableHead className="text-white px-10">Sector</TableHead>
                  <TableHead className="text-white px-10 text-center">India Market Size</TableHead>
                  <TableHead className="text-white px-10 text-center">Growth Rate (CAGR)</TableHead>
                  <TableHead className="text-white px-10">Opportunity Focus</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { s: "Wound Care", m: "₹8,000+ Cr", g: "10–14%", o: "Nano-silver gels & sprays" },
                  { s: "Oral Care", m: "₹12,000+ Cr", g: "10–15%", o: "Nano-hydroxyapatite toothpastes" },
                  { s: "Dental Materials", m: "₹22,000+ Cr", g: "15–20%", o: "SDF gels for caries arrest" },
                  { s: "Nutraceuticals", m: "₹18,000+ Cr", g: "10–15%", o: "Nano-curcumin bioavailability" },
                  { s: "Dermatology / OTC", m: "₹15,000+ Cr", g: "10–12%", o: "Nano-ZnO UV protection" },
                ].map((row, i) => (
                  <TableRow key={i} className={i % 2 === 0 ? "bg-gray-50/50" : "bg-white"}>
                    <TableCell className="font-black text-wine py-8 px-10 text-lg uppercase tracking-tight">{row.s}</TableCell>
                    <TableCell className="font-black text-navy px-10 text-center text-xl">{row.m}</TableCell>
                    <TableCell className="px-10 text-center">
                       <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-black text-sm">
                        <Icons.Zap /> {row.g}
                       </div>
                    </TableCell>
                    <TableCell className="font-medium text-gray-500 px-10 italic">{row.o}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Reveal>
        </div>
      </section>

      {/* 📦 Section: Product Portfolio */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-left mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 uppercase tracking-tight">
              PRODUCT <span className="text-wine">PORTFOLIO</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine rounded-full mb-8"></div>
            <p className="text-gray-500 font-medium max-w-2xl leading-relaxed">
              We supply five core nano-technology based products sourced through our GMP manufacturer tie-ups.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Colloidal Silver */}
            <Reveal variant="zoomIn" delay={100}>
              <div className="group h-full bg-gray-50 rounded-[2.5rem] p-10 border border-transparent hover:border-wine/20 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="mb-8 relative rounded-3xl overflow-hidden h-48 border border-gray-100 shadow-inner">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOYlaZlf7f5Oy3oHI7T3FgR9eoRE1WqSGwwZSFTZvHQ&s"
                    alt="Colloidal Silver"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-navy group-hover:text-white transition-all">
                    <Icons.Shield />
                  </div>
                  <Badge variant="wine" className="absolute top-4 right-4">Wound Care</Badge>
                </div>
                <h3 className="text-2xl font-black text-navy mb-4">Colloidal Silver</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6 flex-grow">
                  Nano-silver suspension that kills bacteria, reduces inflammation, and promotes tissue repair. 
                  Ideal for gels, sprays, and dressings for burns and diabetic wounds.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="p-4 bg-white/50 rounded-2xl border border-gray-100">
                    <p className="text-[10px] font-black uppercase text-wine tracking-widest mb-1">India Market</p>
                    <p className="text-xs font-bold text-navy">₹8,000+ Cr (Growing 10–14% annually)</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-2xl border border-gray-100">
                    <p className="text-[10px] font-black uppercase text-wine tracking-widest mb-1">Global Market</p>
                    <p className="text-xs font-bold text-navy">₹2,40,000+ Cr</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 2. Nano-Hydroxyapatite */}
            <Reveal variant="zoomIn" delay={200}>
              <div className="group h-full bg-gray-50 rounded-[2.5rem] p-10 border border-transparent hover:border-wine/20 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="mb-8 relative rounded-3xl overflow-hidden h-48 border border-gray-100 shadow-inner">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2025/9/542338287/TH/KB/ZN/688621/hydroxyapatite-powder-500x500.jpeg"
                    alt="Nano-Hydroxyapatite"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-navy group-hover:text-white transition-all">
                    <Icons.Zap />
                  </div>
                  <Badge variant="wine" className="absolute top-4 right-4">Oral Care</Badge>
                </div>
                <h3 className="text-2xl font-black text-navy mb-4">Nano-Hydroxyapatite</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6 flex-grow">
                  Biomimetic enamel repair for fluoride-free remineralisation and sensitivity relief. 
                  Used in premium toothpastes, serums, and professional dental products.
                </p>
                <div className="p-4 bg-white/50 rounded-2xl border border-gray-100">
                  <p className="text-[10px] font-black uppercase text-wine tracking-widest mb-1">Export Focus</p>
                  <p className="text-xs font-bold text-navy">Japan, EU, USA Markets</p>
                </div>
              </div>
            </Reveal>

            {/* 3. SDF Gel */}
            <Reveal variant="zoomIn" delay={300}>
              <div className="group h-full bg-navy rounded-[3rem] p-10 shadow-xl flex flex-col transform hover:-translate-y-2 transition-transform duration-500">
                <div className="mb-8 flex justify-between items-start">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shadow-sm text-wine">
                    <Icons.Microscope />
                  </div>
                  <Badge className="bg-wine border-none text-white">Dental Prof.</Badge>
                </div>
                <h3 className="text-2xl font-black text-white mb-4">SDF Gel (38%)</h3>
                <p className="text-white/60 text-sm font-medium leading-relaxed mb-6 flex-grow">
                  Silver Diamine Fluoride in precise gel form. Non-invasive caries arrest for children 
                  and elderly. Painless, drill-free dentistry solutions.
                </p>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-[10px] font-black uppercase text-wine tracking-widest mb-1">India Growth</p>
                  <p className="text-xs font-bold text-white">15–20% CAGR (Rapid Adoption)</p>
                </div>
              </div>
            </Reveal>

            {/* 4. Nano-Curcumin */}
            <Reveal variant="zoomIn" delay={400}>
              <div className="group h-full bg-gray-50 rounded-[2.5rem] p-10 border border-transparent hover:border-wine/20 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="mb-8 flex justify-between items-start">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-navy group-hover:text-white transition-all">
                    <Icons.Beaker />
                  </div>
                  <Badge variant="wine">Nutraceutical</Badge>
                </div>
                <h3 className="text-2xl font-black text-navy mb-4">Nano-Curcumin</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6 flex-grow">
                  Water-soluble nano form with 20–40x higher bioavailability vs standard curcumin. 
                  Anti-inflammatory, antioxidant, and immunity booster.
                </p>
                <div className="p-4 bg-white/50 rounded-2xl border border-gray-100">
                  <p className="text-[10px] font-black uppercase text-wine tracking-widest mb-1">Buyers</p>
                  <p className="text-xs font-bold text-navy">Supplement Brands, Functional Foods</p>
                </div>
              </div>
            </Reveal>

            {/* 5. Nano Zinc Oxide */}
            <Reveal variant="zoomIn" delay={500}>
              <div className="group h-full bg-gray-50 rounded-[2.5rem] p-10 border border-transparent hover:border-wine/20 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="mb-8 flex justify-between items-start">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-navy group-hover:text-white transition-all">
                    <Icons.Shield />
                  </div>
                  <Badge variant="wine">Derma / OTC</Badge>
                </div>
                <h3 className="text-2xl font-black text-navy mb-4">Nano ZnO</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6 flex-grow">
                  Antibacterial, antiviral, and UV-protective at nanoscale. 
                  Essential for premium sunscreens, baby care, and antimicrobial creams.
                </p>
                <div className="p-4 bg-white/50 rounded-2xl border border-gray-100">
                  <p className="text-[10px] font-black uppercase text-wine tracking-widest mb-1">Growth</p>
                  <p className="text-xs font-bold text-navy">10–12% CAGR in India</p>
                </div>
              </div>
            </Reveal>

            {/* CTA Box */}
            <Reveal variant="zoomIn" delay={600}>
              <div className="h-full bg-gradient-to-br from-wine to-wine/80 rounded-[3rem] p-10 flex flex-col justify-center items-center text-center shadow-2xl">
                <h3 className="text-2xl font-black text-white mb-4 uppercase leading-tight">Need a Custom <br /> Formulation?</h3>
                <p className="text-white/80 text-sm mb-8">We can source wide range of nano formulations based on your specific requirements.</p>
                <Link to="/contact">
                  <Button className="bg-white text-wine font-black hover:bg-navy hover:text-white transition-colors h-14 px-8 rounded-2xl uppercase tracking-widest">Inquire Now</Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 👥 Section: Who We Supply */}
      <section className="py-32 bg-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <Reveal variant="fadeUp">
                <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight leading-none">
                  WHO WE <br /><span className="text-wine">SUPPLY</span>
                </h2>
                <div className="w-24 h-1.5 bg-wine rounded-full mb-12"></div>
                <div className="space-y-6">
                   {[
                    { t: "Distributors", d: "Pharmaceutical and nutraceutical distributors — domestic and export." },
                    { t: "Healthcare Brands", d: "Looking for ready-to-sell nano-formulations for their portfolio." },
                    { t: "Institutional", d: "Hospitals, clinic chains, and institutional procurement departments." },
                    { t: "Private Label", d: "Buyers looking to sell under their own unique brand name." }
                   ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 bg-wine/20 rounded-2xl flex items-center justify-center shrink-0 text-wine font-black">0{i+1}</div>
                      <div>
                        <h4 className="font-bold text-white mb-2">{item.t}</h4>
                        <p className="text-white/40 text-xs leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                   ))}
                </div>
              </Reveal>

              <Reveal variant="zoomIn" delay={200} className="flex flex-col justify-center">
                 <div className="bg-white rounded-[3rem] p-12 text-navy relative shadow-2xl">
                    <h3 className="text-3xl font-black mb-8 uppercase tracking-tight text-center">Export <span className="text-wine">Geographies</span></h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                       {["Middle East", "Southeast Asia", "Africa", "Global Markets"].map((geo, i) => (
                        <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                           <div className="w-2 h-2 bg-wine rounded-full"></div>
                           <span className="font-bold text-sm">{geo}</span>
                        </div>
                       ))}
                    </div>
                    <div className="bg-navy p-8 rounded-3xl text-center">
                       <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">Documentation Standards</p>
                       <div className="flex flex-wrap justify-center gap-3">
                          <span className="px-3 py-1 bg-white/10 rounded-lg text-white text-[10px] font-black">COA</span>
                          <span className="px-3 py-1 bg-white/10 rounded-lg text-white text-[10px] font-black">MSDS</span>
                          <span className="px-3 py-1 bg-white/10 rounded-lg text-white text-[10px] font-black">GMP</span>
                          <span className="px-3 py-1 bg-white/10 rounded-lg text-white text-[10px] font-black">REGULATORY</span>
                       </div>
                    </div>
                 </div>
              </Reveal>
           </div>
        </div>
      </section>

      {/* ⭐ Section: Why Ochnology Solutions */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 uppercase tracking-tight">
              WHY <span className="text-wine">OCHNOLOGY SOLUTIONS</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Established Tie-ups", d: "Direct partnerships with GMP-certified manufacturers — quality assured at source." },
              { t: "Sourcing Advantage", d: "We bridge the gap between specialised manufacturers and end buyers — saving you sourcing effort." },
              { t: "Flexible Supply", d: "Trial quantities available before bulk commitment to ensure product-market fit." },
              { t: "Ready Portfolio", d: "Access to ready-to-sell formulations that are already market-validated." },
              { t: "Private Labeling", d: "Sell under your own brand name with applicable minimum order quantities." },
              { t: "Commercial Support", d: "Competitive pricing through established relationships — better than the spot market." }
            ].map((adv, i) => (
              <Reveal key={i} delay={i * 100} variant="fadeUp">
                <div className="h-full bg-[#f8f9fb] p-10 rounded-[2.5rem] border border-transparent hover:border-wine/20 transition-all group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-wine group-hover:text-white transition-all"><Icons.Check /></div>
                  <h4 className="text-xl font-black text-navy mb-4">{adv.t}</h4>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">{adv.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ❓ Section: FAQs */}
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
              { q: "Can we provide samples?", a: "Yes, samples with COA and TDS can be arranged. Typical lead time for sample delivery is 5–7 working days." },
              { q: "Which markets do we supply?", a: "We supply across India and have a strong export network to the Middle East, Southeast Asia, and Africa." },
              { q: "What documents are provided?", a: "We provide COA, MSDS, and all relevant regulatory documents with every order. Full export documentation can also be arranged." },
              { q: "Can we supply other nano products?", a: "Yes, our manufacturer network allows us to source and supply a wide range of custom nano formulations based on your specific requirements." },
              { q: "What are the payment terms?", a: "We work strictly on advance payment terms for all domestic and export orders." }
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 100} variant="fadeUp">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 group hover:border-wine/20 transition-all">
                  <h4 className="text-lg font-black text-navy mb-4 flex items-center gap-4">
                    <span className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center text-wine text-xs shrink-0 font-black">Q{i+1}</span>
                    {faq.q}
                  </h4>
                  <p className="text-gray-500 font-medium leading-relaxed pl-12">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🏁 Footer CTA */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-blue-900/40"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
          <Reveal variant="fadeUp">
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">
              ADVANCE YOUR BRAND WITH <br />
              <span className="text-wine">NANO TECHNOLOGY</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
              Secure your supply of high-bioavailability formulations. Trial quantities available. 
              Contact our sourcing team today for a custom proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq" className="w-full sm:w-auto">
                <Button variant="wine" className="w-full sm:w-64 h-16 text-lg font-black shadow-2xl shadow-wine/40 uppercase tracking-widest">Get Quotation</Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-64 h-16 text-lg font-black border-white/20 text-white hover:bg-white/10 uppercase tracking-widest">Speak to Expert</Button>
              </Link>
            </div>
            <div className="mt-16 flex items-center justify-center gap-12 opacity-30">
               <div className="text-[10px] font-black uppercase tracking-[0.2em]">GMP CERTIFIED SUPPLY</div>
               <div className="text-[10px] font-black uppercase tracking-[0.2em]">EXPORT DOCUMENTED</div>
               <div className="text-[10px] font-black uppercase tracking-[0.2em]">NANO FORMULATIONS</div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default NanoProducts;
