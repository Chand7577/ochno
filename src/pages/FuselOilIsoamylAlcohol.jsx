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

// Reports
import fuselOilReport from "../assets/docs/3rd_party_lab_report_fusel_oil.pdf";
import iaaTestReport from "../assets/docs/iaa_test_report.pdf";

// Images
import fuselOilSample from "../assets/images/fusel_oil_sample.jpg";
import fuselOilDrums from "../assets/images/fusel_oil_drums.jpg";

// Fuse Folder Assets (Fusel Oil)
import fuseImg1 from "../assets/fuse/WhatsApp Image 2026-05-05 at 5.21.54 PM (1).jpeg";
import fuseImg2 from "../assets/fuse/WhatsApp Image 2026-05-05 at 5.21.54 PM (2).jpeg";
import fuseImg3 from "../assets/fuse/WhatsApp Image 2026-05-05 at 5.21.54 PM.jpeg";
import fuseImg4 from "../assets/fuse/WhatsApp Image 2026-05-05 at 5.21.55 PM (1).jpeg";
import fuseImg5 from "../assets/fuse/WhatsApp Image 2026-05-05 at 5.21.55 PM.jpeg";
import fuseImg6 from "../assets/fuse/WhatsApp Image 2026-05-05 at 5.21.56 PM.jpeg";
import fuseVid1 from "../assets/fuse/WhatsApp Video 2026-05-05 at 5.21.56 PM.mp4";

// ── Icons ──────────────────────────────────────────────────────────────────
const Icons = {
  Download: () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3" />
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
        d="M19.428 15.341A8.001 8.001 0 004.586 11H19.428zM9 11V9a2 2 0 012-2h2a2 2 0 012 2v2M5.291 13.414c1.1.33 2.232.586 3.709.586 1.477 0 2.61-.256 3.71-.586"
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
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014.5 9 15.3 15.3 0 01-4.5 9 15.3 15.3 0 01-4.5-9 15.3 15.3 0 014.5-9z"
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
      { threshold }
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

const FuselOilIsoamylAlcohol = () => {
  const [showAllSpecs, setShowAllSpecs] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specRows = [
    { param: "Colour", fusel: "Molasses-based: Pale yellow to dark brown · Grain-based: Water white to golden yellow", iaa: "Colourless liquid" },
    { param: "Odour", fusel: "Pungent", iaa: "Pungent" },
    { param: "Specific Gravity (20°C)", fusel: "0.815–0.835", iaa: "0.808–0.810" },
    { param: "Distillation range (97%)", fusel: "76°C to 132°C", iaa: "Boiling point 130–132°C" },
    { param: "Non-volatile matter % max", fusel: "0.01%", iaa: "—" },
    { param: "Moisture (KF) %", fusel: "Max 20%", iaa: "Max 0.2%" },
    { param: "Acidity", fusel: "—", iaa: "0.10%" },
    { param: "Assay (GC) — Amyl alcohol %", fusel: "60–85%", iaa: "Min. 99%" },
    { param: "GC — Ethanol %", fusel: "0–15%", iaa: "—" },
    { param: "GC — 1-Propanol %", fusel: "0–15%", iaa: "—" },
    { param: "GC — Iso Butanol %", fusel: "5–25%", iaa: "—" },
    { param: "GC — 1-Butanol %", fusel: "0–15%", iaa: "—" },
    { param: "GC — High boiling compounds %", fusel: "< 5%", iaa: "—" },
    { param: "Packing", fusel: "HDPE drums", iaa: "200L HDPE drums (with or without pallets)" },
  ];

  const visibleRows = showAllSpecs ? specRows : specRows.slice(0, 6);

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 mix-blend-multiply"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wine opacity-20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-6 py-2 bg-wine text-white rounded-md text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-2xl shadow-wine/50">
              Distillery By-products & Derivatives
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter italic leading-[0.9]">
              Fusel Oil & <span className="text-wine block md:inline">Isoamyl Alcohol</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed mb-12 italic">
              Premium India-origin bio-based alcohols for Flavours, Fragrances, Pharma, and Mining Beneficiation.
            </p>
          </Reveal>
          
          <Reveal variant="fadeUp" delay={800}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq" className="bg-wine text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-2xl text-center">
                Request A Quote
              </Link>
              <a href="https://wa.me/919258720699" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-10 py-[18px] text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all">
                Whatsapp Direct
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 📖 Definitions Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <Reveal variant="fadeLeft">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-black text-navy mb-6 uppercase tracking-tight italic">
                    What is <span className="text-wine">Fusel Oil?</span>
                  </h2>
                  <div className="w-24 h-2 bg-navy rounded-full mb-6"></div>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    Fusel oil is a complex mixture of several higher alcohols (predominantly isoamyl alcohol) produced as a by-product of alcoholic fermentation in distilleries. In India, it is primarily derived from molasses or grain-based ethanol production. It is a pungent, oily liquid used as a cost-effective high-boiling solvent or as a raw material for refining into high-purity isoamyl alcohol.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeRight" delay={300}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-black text-navy mb-6 uppercase tracking-tight italic">
                    What is <span className="text-wine">Isoamyl Alcohol (IAA)?</span>
                  </h2>
                  <div className="w-24 h-2 bg-wine rounded-full mb-6"></div>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    Isoamyl Alcohol (also known as Isopentyl alcohol) is a purified 3-methyl-1-butanol, distilled from fusel oil. It is a colourless liquid with a characteristic pungent odour and a burning taste. Our IAA is available in Assay ≥98% or ≥99% purities, widely used in flavour and fragrance, pharmaceutical synthesis, mining beneficiation, and as a high-performance chemical intermediate.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📸 Product Showcase */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal variant="fadeLeft">
              <div className="relative group overflow-hidden shadow-2xl">
                <img src={fuseImg1} alt="Fusel Oil Sample" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-10">
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase italic mb-2 tracking-tighter">Verified Product Quality</h3>
                    <p className="text-white/60 text-sm font-medium uppercase tracking-widest">Premium Bio-Based Alcohols</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeRight" delay={200}>
              <div className="relative group overflow-hidden shadow-2xl">
                <img src={fuseImg2} alt="Industrial Packaging" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/80 to-transparent flex items-end p-10">
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase italic mb-2 tracking-tighter">Industrial Packaging</h3>
                    <p className="text-white/60 text-sm font-medium uppercase tracking-widest">200L HDPE Drums · Export Ready</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🎥 Video & Inspection Gallery */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy uppercase italic mb-4">On-Site <span className="text-wine">Verification</span></h2>
            <p className="text-gray-400 font-black uppercase tracking-widest text-[10px]">Real-time logistics and material inspection</p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal variant="fadeLeft">
              <div className="relative aspect-video bg-navy rounded-3xl overflow-hidden shadow-2xl border-b-8 border-wine group">
                <video 
                  src={fuseVid1} 
                  poster={fuseImg3}
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                />
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-[10px] font-black uppercase tracking-widest bg-navy/50 backdrop-blur-md px-3 py-1 rounded-full">Inspection Log</span>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              <Reveal variant="zoomIn" delay={200}>
                <img src={fuseImg4} alt="Inspection 1" className="w-full h-40 object-cover rounded-2xl shadow-lg border border-white/10" />
              </Reveal>
              <Reveal variant="zoomIn" delay={300}>
                <img src={fuseImg5} alt="Inspection 2" className="w-full h-40 object-cover rounded-2xl shadow-lg border border-white/10" />
              </Reveal>
              <Reveal variant="zoomIn" delay={400} className="col-span-2">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img src={fuseImg6} alt="Inspection 3" className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-navy/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-black uppercase text-[10px] tracking-widest border border-white px-4 py-2">View Logistics Detail</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 📊 Full Specifications */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">
              Technical <span className="text-wine">Specifications</span>
            </h2>
            <div className="w-32 h-1 bg-wine mx-auto rounded-full"></div>
          </Reveal>

          <Reveal variant="fadeUp" delay={200}>
            <div className="overflow-x-auto border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-white/10 hover:bg-transparent">
                    <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4">Parameter</TableHead>
                    <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4">Fusel Oil</TableHead>
                    <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4 text-wine">Isoamyl Alcohol (IAA) ≥99%</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visibleRows.map((row, i) => (
                    <TableRow key={i} className="border-b border-white/5 hover:bg-white/10 transition-colors">
                      <TableCell className="font-bold text-white/80 py-4 text-xs">{row.param}</TableCell>
                      <TableCell className="text-white/70 py-4 text-sm">{row.fusel}</TableCell>
                      <TableCell className="text-wine font-bold py-4 text-sm">{row.iaa}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAllSpecs(!showAllSpecs)}
                className="bg-wine/10 text-wine border border-wine/20 px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-wine hover:text-white transition-all rounded-full flex items-center gap-2"
              >
                {showAllSpecs ? (
                  <>
                    Show Less <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"/></svg>
                  </>
                ) : (
                  <>
                    Read Full Specifications <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  </>
                )}
              </button>
            </div>
          </Reveal>

          <Reveal variant="fadeUp" delay={400} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 border border-white/10">
                <h4 className="text-wine font-black uppercase text-sm mb-4 italic tracking-widest">Additional Notes</h4>
                <ul className="text-white/60 text-xs space-y-2 font-bold uppercase tracking-wider">
                  <li>• All lots: GC assay certificate, specific gravity, water content, flash point, MSDS</li>
                  <li>• Food grade / FSSAI compliant IAA available on request</li>
                  <li>• Kosher / Halal certification available for food and fragrance grade</li>
                  <li>• Hazmat classification: Flammable liquid Class 3 (UN 1105)</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🏭 Applications */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tighter italic">
              Key <span className="text-wine">Applications</span>
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Flavour and Fragrance",
                desc: "Over 65% of global volume is converted into isoamyl acetate (banana oil). Used in confectionery, beverages, dairy and perfumes. Bio-based origin is a key advantage for exports to Europe and USA."
              },
              {
                title: "Pharmaceutical Manufacturing",
                desc: "Used as an intermediate for analgesics, anti-inflammatory drugs and antiseptic formulations. Vital in over 290 generic drug formulations as an API intermediate."
              },
              {
                title: "Mineral Beneficiation",
                desc: "Deployed as a frother in froth flotation systems to separate copper, gold and other mineral ores. Enhances froth stability and selectivity in flotation cells."
              },
              {
                title: "Industrial Solvents",
                desc: "High-boiling solvent for paints, lacquers, coatings and resins. Controlled evaporation rate and high solvency power make them ideal for industrial formulations."
              },
              {
                title: "Chemical Synthesis",
                desc: "Intermediate for producing isoamyl esters like butyrate (pear), formate and propionate. Also used for isoamyl nitrite (vasodilator) and plasticisers."
              },
              {
                title: "Agrochemicals & Biofuels",
                desc: "Solvent and carrier in pesticide formulations. Research into fusel oil as a biofuel blending component is gaining traction due to high energy density."
              }
            ].map((app, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={100 * idx}>
                <div className="bg-gray-50 p-8 h-full border hover:border-wine transition-all group">
                  <div className="w-10 h-1 bg-navy mb-6 group-hover:bg-wine transition-colors"></div>
                  <h4 className="text-xl font-black text-navy uppercase italic mb-4">{app.title}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">{app.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Section 5: Why buy from us */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy uppercase italic mb-4">Section 5 — Why <span className="text-wine">buy from us</span></h2>
            <div className="w-24 h-1 bg-wine mx-auto"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-navy p-10 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 group-hover:scale-110 transition-transform duration-700">
                <Icons.Beaker />
              </div>
              <h4 className="text-wine font-black uppercase text-xs tracking-[0.2em] mb-8 border-b border-white/10 pb-4">Quality & consistency</h4>
              <ul className="space-y-4">
                {[
                  "Fixed distillery origin — consistent GC assay lot to lot",
                  "Full COA per lot: GC assay, specific gravity, water, flash point, acidity",
                  "Food / pharma grade available with FSSAI documentation",
                  "MSDS per IMDG / ADR hazmat format — every consignment"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-sm font-medium text-gray-300 italic">
                    <span className="text-wine">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-wine p-10 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 group-hover:scale-110 transition-transform duration-700">
                <Icons.Globe />
              </div>
              <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8 border-b border-white/10 pb-4">Supply & commercial</h4>
              <ul className="space-y-4">
                {[
                  "Both fusel oil and IAA from one supplier — simplified procurement",
                  "MOQ 200L (1 drum) for trial orders — easy qualification",
                  "200L drums, standard export packaging available",
                  "Competitive FOB / CIF pricing to your port"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-sm font-medium text-white/80 italic">
                    <span className="text-white">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🤝 Section 6A & 7: Market Engagement */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Section 6A: Indian Distilleries */}
            <Reveal variant="fadeLeft" className="bg-white p-10 shadow-xl border-t-4 border-navy rounded-b-[2rem]">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-black text-navy uppercase italic">Section 6A — Partner With Us</h3>
                <span className="bg-navy text-white text-[8px] font-black px-3 py-1 rounded-full uppercase">For Distilleries</span>
              </div>
              <p className="text-gray-600 mb-8 text-sm font-medium leading-relaxed">
                India's ethanol industry generates fusel oil as a consistent by-product — yet many distilleries treat it as waste. We help distilleries unlock better value by connecting them to premium export markets.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h5 className="text-[10px] font-black text-wine uppercase tracking-widest mb-4">Why partner with us:</h5>
                  <ul className="space-y-3">
                    {[
                      "We pay export-market prices, not domestic scrap prices",
                      "We handle all export documentation, MSDS, and shipping",
                      "Consistent monthly off-take (Min 1,000L/month)",
                      "Full excise and GST compliance maintenance",
                      "Refinement value-addition sharing arrangements available"
                    ].map((text, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <Icons.Check />
                        <span className="text-gray-600 text-xs font-bold">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 border-l-4 border-navy">
                  <h5 className="text-[10px] font-black text-navy uppercase tracking-widest mb-2">To start a conversation:</h5>
                  <p className="text-gray-400 text-[10px] font-medium leading-loose italic">
                    Distillery name · State · Ethanol type (molasses / grain) · Approx monthly fusel oil available (litres) · Contact number
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Section 7: Foreign Buyers */}
            <Reveal variant="fadeRight" className="bg-white p-10 shadow-xl border-t-4 border-wine rounded-b-[2rem]">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-black text-wine uppercase italic">Section 7 — Foreign Buyers</h3>
                <span className="bg-wine text-white text-[8px] font-black px-3 py-1 rounded-full uppercase">Global Distribution</span>
              </div>
              <p className="text-gray-600 mb-8 text-sm font-medium leading-relaxed">
                We export fusel oil and isoamyl alcohol to fragrance manufacturers, pharmaceutical companies, and mining chemical suppliers in the Middle East, Southeast Asia, Europe and Africa.
              </p>

              <div className="space-y-8">
                <div>
                  <h5 className="text-[10px] font-black text-navy uppercase tracking-widest mb-4">Supply Highlights:</h5>
                  <ul className="space-y-3">
                    {[
                      "Consistent GC assay lot-to-lot (Fixed origin)",
                      "UN-certified 200L/210L HDPE Drums",
                      "Competitive FOB / CIF pricing globally",
                      "MSDS provided with every export shipment",
                      "Ongoing supply or Spot consignments"
                    ].map((text, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <Icons.Check />
                        <span className="text-gray-600 text-xs font-bold">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-wine/5 p-6 border-l-4 border-wine">
                  <h5 className="text-[10px] font-black text-wine uppercase tracking-widest mb-2">To Enquire:</h5>
                  <p className="text-gray-400 text-[10px] font-medium leading-loose italic">
                    Company · Country · Product (fusel oil / IAA 98% / IAA 99%) · Qty/month (MT or litres) · Application · Port of discharge · Contact
                  </p>
                </div>
              </div>

              <Link to="/contact" className="inline-block mt-8 text-wine font-black uppercase tracking-widest border-b-2 border-wine hover:text-navy hover:border-navy transition-all text-[10px]">
                Enquire Now
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📜 Technical Documentation */}
      <section className="py-24 bg-[#002d52] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl font-black text-white uppercase italic mb-4">Technical <span className="text-wine">Documentation</span></h2>
            <p className="text-white/60 font-medium max-w-2xl mx-auto uppercase text-xs tracking-widest">Live preview of verified lab analysis and third-party test reports.</p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Fusel Oil Report Preview */}
            <Reveal variant="fadeLeft" delay={200}>
              <div className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center">
                <div className="w-full mb-6">
                  <div className="h-[400px] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-inner relative group">
                    <iframe
                      src={`${fuselOilReport}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=1`}
                      className="w-full h-full border-none"
                      title="Fusel Oil Lab Report Preview"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-all flex items-center justify-center pointer-events-none">
                      <div 
                        className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto"
                      >
                        <a 
                          href={fuselOilReport} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-wine text-white px-6 py-2.5 rounded-full text-sm font-black shadow-lg flex items-center gap-2 uppercase tracking-widest"
                        >
                          View Full Report
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-navy font-black text-xl uppercase italic mb-2">Fusel Oil Lab Report</h4>
                <p className="text-gray-500 text-sm mb-6">Complete composition & assay verification.</p>
                <a href={fuselOilReport} download="3rd_Party_Lab_Report_Fusel_Oil.pdf" className="w-full bg-navy text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-wine transition-all flex items-center justify-center gap-2">
                  <Icons.Download /> Download PDF
                </a>
              </div>
            </Reveal>

            {/* IAA Report Preview */}
            <Reveal variant="fadeRight" delay={400}>
              <div className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center">
                <div className="w-full mb-6">
                  <div className="h-[400px] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-inner relative group">
                    <iframe
                      src={`${iaaTestReport}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=1`}
                      className="w-full h-full border-none"
                      title="IAA Test Report Preview"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-all flex items-center justify-center pointer-events-none">
                      <div 
                        className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto"
                      >
                        <a 
                          href={iaaTestReport} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-wine text-white px-6 py-2.5 rounded-full text-sm font-black shadow-lg flex items-center gap-2 uppercase tracking-widest"
                        >
                          View Full Report
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-navy font-black text-xl uppercase italic mb-2">IAA Test Report</h4>
                <p className="text-gray-500 text-sm mb-6">Purity & physical property analysis.</p>
                <a href={iaaTestReport} download="Isoamyl_Alcohol_Test_Report.pdf" className="w-full border-2 border-navy text-navy py-[14px] rounded-xl font-black uppercase text-xs tracking-widest hover:bg-navy hover:text-white transition-all flex items-center justify-center gap-2">
                  <Icons.Download /> Download PDF
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy uppercase italic mb-4">Frequently Asked <span className="text-wine">Questions</span></h2>
            <div className="w-24 h-1 bg-wine mx-auto"></div>
          </Reveal>

          <div className="space-y-6">
            {[
              { q: "What is the difference between fusel oil and isoamyl alcohol?", a: "Fusel oil is the crude by-product (60–70% isoamyl + other alcohols). Isoamyl alcohol is the purified version (≥98–99%) used in fragrance, pharma, and food production." },
              { q: "Why is isoamyl alcohol commercially important?", a: "It has a banana-like odour and is used to make isoamyl acetate (banana flavour) widely used in food, beverages and perfumes." },
              { q: "What purity is required for food and fragrance use?", a: "Typically ≥99% purity with low water content and colour. Certifications like FSSAI, Kosher, or Halal are available for food and fragrance grade." },
              { q: "What is the standard packing?", a: "Domestic supply is in Tanker loads. Export supply is in 210-litre UN-certified HDPE drums. We do NOT supply in ISO tanks." },
              { q: "Can samples be provided?", a: "No — fusel oil and isoamyl alcohol are hazardous, and couriers like DHL, FedEx, etc. do not accept them." },
              { q: "What are the payment terms?", a: "Export: 50% advance, balance against scan BL. Domestic: ₹1 lakh advance, balance against LR / E-way bill. LC is not accepted." },
              { q: "What documents are provided?", a: "COA, MSDS and relevant compliance documents (FSSAI, IMDG) are provided with each supply." }
            ].map((faq, i) => (
              <Reveal key={i} variant="fadeUp" delay={i * 100} className="border-b border-gray-100 pb-6">
                <h4 className="text-navy font-black uppercase text-sm mb-3 italic tracking-tight">Q: {faq.q}</h4>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{faq.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🏁 Call to Action */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-20 relative z-10">
          <Reveal variant="fadeLeft" className="text-center lg:text-left max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">
              Source <span className="text-wine block md:inline">Premium</span> Alcohols
            </h2>
            <p className="text-white/50 font-black uppercase tracking-[0.2em] text-xs mb-10 italic">
                Bio-Based Origin • Full COA Per Lot • Global Logistics Support
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <Link to="/rfq" className="bg-wine text-white px-12 py-6 text-sm font-black hover:bg-white hover:text-navy transition-all shadow-2xl uppercase tracking-widest">
                Request A Quote
              </Link>
              <a href="https://wa.me/919258720699" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-12 py-[22px] text-sm font-black hover:bg-white hover:text-navy transition-all uppercase tracking-widest">
                Whatsapp Direct
              </a>
            </div>
          </Reveal>
          <Reveal variant="fadeRight" className="lg:w-2/5 bg-white/5 p-12 text-white border border-white/10 backdrop-blur-md">
            <h4 className="text-2xl font-black uppercase mb-8 italic tracking-widest text-wine underline decoration-4 underline-offset-8">
              Supply Highlights
            </h4>
            <ul className="space-y-6">
                {[
                    "Fixed distillery origin for consistent chemistry",
                    "Assay ≥99% available for high-purity applications",
                    "MSDS per IMDG / ADR hazmat format provided",
                    "Competitive FOB / CIF pricing globally",
                    "MOQ 200L (1 drum) for trial orders",
                    "FSSAI / Kosher / Halal compliance available"
                ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                        <Icons.Check />
                        <span className="text-white/80 font-medium text-sm leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default FuselOilIsoamylAlcohol;
