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

// Electrode Scrap Assets
import crushedImg from "../assets/electrode scrap/Crushed-Graphite-Electrode-Scrap.avif";
import bakedImg from "../assets/electrode scrap/baked-electrode-scrap-500x500.webp";
import scrap2Img from "../assets/electrode scrap/graphite-electrode-scrap-2-.jpeg";
import scrapImg from "../assets/electrode scrap/graphite-electrode-scrap.jpg";
import jfifImg from "../assets/electrode scrap/images.jfif";

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
  Scale: () => (
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
        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
      />
    </svg>
  ),
  Truck: () => (
    <svg
      className="w-6 h-6 text-navy"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
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

// ── FAQ Item ──────────────────────────────────────────────────────────────────
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-6 text-left group"
      >
        <span className="font-black text-navy text-base md:text-lg uppercase tracking-tight group-hover:text-wine transition-colors">
          {q}
        </span>
        <span
          className={`w-8 h-8 flex items-center justify-center rounded-full border-2 border-navy text-navy font-black transition-all shrink-0 ml-4 ${
            open ? "bg-wine border-wine text-white rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 font-medium leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const ElectrodeScrap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full min-h-screen lg:h-[85vh] flex items-center justify-center overflow-hidden bg-navy py-24 lg:py-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 mix-blend-multiply"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wine opacity-30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-black opacity-40 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-6 py-2 bg-wine text-white rounded-md text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-2xl shadow-wine/50">
              Mid-Range Carbon Raiser
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter italic leading-[0.9]">
              Graphite{" "}
              <span className="text-wine block md:inline">Electrode Scrap</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed mb-6 md:mb-12 italic">
              Low Sulphur · Low Nitrogen · Cost-Effective Alternative to GPC.
              Imported from China.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl md:text-5xl">
                  ≥98%
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                  Fixed Carbon
                </span>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl md:text-5xl">
                  ≤0.08%
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                  Sulphur (Max)
                </span>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl md:text-5xl">
                  88–94%
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                  Absorption
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal variant="fadeUp" delay={1000}>
            <div className="mt-6 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
              <Link
                to="/rfq"
                className="w-full sm:w-auto bg-wine text-white px-8 sm:px-10 py-4 text-xs sm:text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-xl text-center"
              >
                Get a Quote
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 py-[14px] text-xs sm:text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all text-center"
              >
                Request Sample COA
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-white/5 border-t border-white/10 py-4 hidden lg:block">
          <div className="max-w-7xl mx-auto px-6 flex justify-between text-white/50 text-[10px] font-black uppercase tracking-widest">
            <span>COA per lot</span>
            <span>3rd party inspection</span>
            <span>ISO 9001</span>
            <span>Ex-stock India</span>
            <span>Sizes 1–25mm</span>
          </div>
        </div>
      </section>

      {/* 🧭 Sub Navigation Menu */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-start md:justify-center gap-8 md:gap-16 whitespace-nowrap min-w-max md:min-w-0 mx-auto">
            <Link to="/carbon-raiser#gpc-details" className="py-5 px-2 text-xs md:text-sm font-black uppercase tracking-widest text-gray-400 border-b-4 border-transparent hover:border-navy hover:text-navy transition-all">
              GPC (Premium)
            </Link>
            <span className="py-5 px-2 text-xs md:text-sm font-black uppercase tracking-widest text-navy border-b-4 border-wine transition-all">
              Electrode Scrap
            </span>
            <Link to="/anthracite" className="py-5 px-2 text-xs md:text-sm font-black uppercase tracking-widest text-gray-400 border-b-4 border-transparent hover:border-navy hover:text-navy transition-all">
              Anthracite Coal
            </Link>
          </div>
        </div>
      </div>

      {/* 📖 Introduction Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-32 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft" className="order-2 lg:order-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-black text-navy mb-6 uppercase tracking-tight italic">
                    What is <span className="text-wine">Electrode Scrap?</span>
                  </h2>
                  <div className="w-24 h-2 bg-navy rounded-full"></div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Graphite electrode scrap is the graphitic waste — offcuts,
                  trimmings and machining debris — generated during the
                  manufacture and processing of graphite electrodes for EAF
                  furnaces.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  After crushing, cleaning and screening, it yields a material
                  that has passed through full graphitization at 2,500–3,000°C —
                  the same thermal treatment as GPC — but at a meaningfully
                  lower cost because it is a by-product.
                </p>
                <div className="bg-navy p-10 rounded-none border-l-8 border-wine shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-wine/10 -translate-y-16 translate-x-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  <p className="text-white font-black text-xl italic leading-snug relative z-10">
                    "A carbon raiser with chemistry close to GPC at a price
                    20–35% below standard GPC."
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal
              variant="fadeRight"
              delay={300}
              className="order-1 lg:order-2"
            >
              <div className="bg-gray-50 p-12 border-l-8 border-wine shadow-xl">
                <h3 className="text-2xl font-black text-navy uppercase italic mb-6">
                  The Value Proposition
                </h3>
                <p className="text-gray-700 font-medium mb-6">
                  Practical mid-range choice for cost-conscious buyers who need
                  better quality than anthracite but cannot justify full GPC
                  pricing on every heat.
                </p>
                <ul className="space-y-4">
                  {[
                    "Full Graphitization (3000°C)",
                    "By-product Pricing Advantage",
                    "RP / HP / UHP Origins",
                    "High Absorption (88-94%)",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 font-bold text-navy uppercase text-xs tracking-wider"
                    >
                      <Icons.Zap /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Visual Showcase ───────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h3 className="text-3xl font-black text-navy uppercase italic mb-4">
              Product <span className="text-wine">Gallery</span>
            </h3>
            <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-[10px]">
              High-Graphite Recovery Materials
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: scrapImg,
                title: "Graphite Scrap",
                desc: "Premium UHP origin scrap",
              },
              {
                img: crushedImg,
                title: "Crushed Graphite",
                desc: "Fine-graded 1–5mm sizing",
              },
              {
                img: bakedImg,
                title: "Baked Scrap",
                desc: "Machined offcuts",
              },
              {
                img: scrap2Img,
                title: "Electrode Debris",
                desc: "Recycled EAF graphite",
              },
            ].map((item, i) => (
              <Reveal key={i} variant="fadeUp" delay={i * 100}>
                <div className="group relative overflow-hidden bg-white shadow-lg rounded-xl">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 border-t border-gray-100">
                    <h5 className="font-black text-navy uppercase text-sm mb-1 tracking-wider">
                      {item.title}
                    </h5>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 Full Specifications */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full border-[50px] border-white/5 -rotate-12 scale-150"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic">
              Full <span className="text-wine">Specifications</span>
            </h2>
            <div className="w-32 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <Reveal variant="fadeUp" delay={200}>
            <div className="overflow-x-auto border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-white/10 hover:bg-transparent">
                    <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4">
                      Parameter
                    </TableHead>
                    <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4">
                      Standard Grade
                    </TableHead>
                    <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4 text-wine">
                      Premium Grade
                    </TableHead>
                    <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4 text-white">
                      Fine Powder Grade
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      param: "Fixed Carbon (F.C.) % min",
                      std: "98.0%",
                      pre: "99.0%",
                      fine: "98.5%",
                    },
                    {
                      param: "Sulphur (S) % max",
                      std: "0.08%",
                      pre: "0.05%",
                      fine: "0.06%",
                    },
                    {
                      param: "Nitrogen (N) % max",
                      std: "0.05%",
                      pre: "0.03%",
                      fine: "0.04%",
                    },
                    {
                      param: "Ash % max",
                      std: "1.0%",
                      pre: "0.5%",
                      fine: "0.8%",
                    },
                    {
                      param: "Volatile Matter (VM) % max",
                      std: "0.8%",
                      pre: "0.5%",
                      fine: "0.8%",
                    },
                    {
                      param: "Moisture % max",
                      std: "0.5%",
                      pre: "0.3%",
                      fine: "0.5%",
                    },
                    {
                      param: "Absorption rate",
                      std: "88–91%",
                      pre: "91–94%",
                      fine: "85–90%",
                    },
                    {
                      param: "Bulk density",
                      std: "0.70–0.85 g/cc",
                      pre: "0.75–0.88 g/cc",
                      fine: "0.60–0.75 g/cc",
                    },
                    {
                      param: "Available sizes",
                      std: "1–5mm · 3–8mm · 5–25mm",
                      pre: "Same",
                      fine: "0–1mm · 0.2–1mm",
                    },
                    {
                      param: "Primary use",
                      std: "General EAF/IF recarburizer",
                      pre: "Quality EAF, standard ductile iron",
                      fine: "Ladle trim additions",
                    },
                  ].map((row, i) => (
                    <TableRow
                      key={i}
                      className="border-b border-white/5 hover:bg-white/10 transition-colors"
                    >
                      <TableCell className="font-bold text-white/80 py-4 text-xs">
                        {row.param}
                      </TableCell>
                      <TableCell className="text-white/70 py-4 text-sm">
                        {row.std}
                      </TableCell>
                      <TableCell className="text-wine font-bold py-4 text-sm">
                        {row.pre}
                      </TableCell>
                      <TableCell className="text-white font-bold py-4 text-sm">
                        {row.fine}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">
                * Quality consistency varies by electrode grade (RP, HP, UHP).
              </p>
              <p className="text-[10px] text-white/40 uppercase font-black tracking-widest text-right">
                * HP/UHP origin preferred for lower S/N values.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ⚖️ Comparison Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tighter italic">
              Electrode Scrap <span className="text-wine">vs GPC</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
              When to choose which
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal
              variant="fadeLeft"
              className="bg-white p-10 shadow-xl border-t-4 border-navy"
            >
              <h3 className="text-2xl font-black text-navy uppercase italic mb-6">
                Choose Electrode Scrap When:
              </h3>
              <ul className="space-y-4">
                {[
                  "You produce general-purpose carbon or low-alloy steel where S ≤0.08% and N ≤0.05% meets spec.",
                  "You produce grey iron or standard ductile iron (N 0.03–0.05% Mg treatment window).",
                  "You want significantly better quality than anthracite at a lower cost than GPC.",
                  "You have a reliable source with consistent HP/UHP electrode origin.",
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <Icons.Check />
                    <span className="text-gray-600 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal
              variant="fadeRight"
              className="bg-white p-10 shadow-xl border-t-4 border-wine"
            >
              <h3 className="text-2xl font-black text-wine uppercase italic mb-6">
                Choose GPC Instead When:
              </h3>
              <ul className="space-y-4">
                {[
                  "You produce premium ductile iron (ADI, thin-wall SG iron) where N ≤0.01% is essential.",
                  "You produce bearing steel, spring steel, stainless or tool steel — every ppm of N matters.",
                  "Long-term quality defect costs outweigh the per-MT price saving.",
                  "You need absolute chemical consistency across 100% of lots.",
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-5 h-5 shrink-0 flex items-center justify-center rounded-full bg-wine text-white text-xs font-bold mt-0.5">
                      X
                    </span>
                    <span className="text-gray-600 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🏭 Applications Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tighter italic">
              Applications in <span className="text-wine">India</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "EAF Steelmaking",
                desc: "Primary use — added during charging or as trim. Standard and premium grades active across Raipur, Vizag clusters.",
              },
              {
                title: "Induction Furnace",
                desc: "Strong demand from mid-size IF units (20–50T) in Mandi Gobindgarh, Muzaffarnagar for commodity billet production.",
              },
              {
                title: "Grey Iron Foundries",
                desc: "Consistent carbon equivalent control without the nitrogen penalty of anthracite in cupola and IF furnaces.",
              },
              {
                title: "Ductile Iron Foundries",
                desc: "Suitable where S ≤0.08% and N ≤0.05% is acceptable. First upgrade step for those outgrowing anthracite.",
              },
              {
                title: "Ladle Additions",
                desc: "0–1mm fine powder grade added during tapping for precise carbon trim — fast dissolution.",
              },
            ].map((app, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={100 * idx}>
                <div className="bg-gray-50 p-8 h-full border hover:border-wine transition-all group">
                  <div className="w-10 h-1 bg-navy mb-6 group-hover:bg-wine transition-colors"></div>
                  <h4 className="text-xl font-black text-navy uppercase italic mb-4">
                    {app.title}
                  </h4>
                  <p className="text-gray-500 font-medium">{app.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🏆 Buyer Advantages */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeLeft">
              <h2 className="text-5xl font-black text-navy uppercase italic mb-8 leading-none">
                Buyer <span className="text-wine">Advantages</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-black text-navy uppercase text-sm tracking-widest">
                    Quality & Consistency
                  </h4>
                  <ul className="text-xs space-y-2 text-gray-600 font-bold uppercase">
                    <li>• HP/UHP Source Selection</li>
                    <li>• Full COA Per Lot</li>
                    <li>• 3rd Party Verified</li>
                    <li>• Consolidated FCL with GPC</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-black text-wine uppercase text-sm tracking-widest">
                    Supply & Commercial
                  </h4>
                  <ul className="text-xs space-y-2 text-gray-600 font-bold uppercase">
                    <li>• MOQ 2 MT Trial</li>
                    <li>• 20–35% Cheaper than GPC</li>
                    <li>• 3–7 Day Port Delivery</li>
                    <li>• Flexible Payment Terms</li>
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={300}>
              <div className="bg-navy p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-wine -translate-y-12 translate-x-12 rotate-45"></div>
                <h3 className="text-3xl font-black uppercase italic mb-6">
                  Ex-Stock India
                </h3>
                <p className="text-white/70 font-medium mb-8">
                  Standard 1–5mm grade maintained at JNPT/Mundra for immediate
                  dispatch.
                </p>
                <div className="flex items-center gap-4">
                  <Icons.Truck />
                  <span className="font-black uppercase tracking-widest text-wine text-sm">
                    3–7 Days Delivery
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🤝 Exporter Intent */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase italic mb-8 leading-tight">
              Graphite Electrode Scrap{" "}
              <span className="text-wine">Exporters — Let's Talk</span>
            </h2>

            <div className="bg-gray-50 p-8 border-l-8 border-wine mb-12 text-left">
              <p className="text-navy font-black text-lg italic leading-relaxed">
                "Good electrode scrap is harder to source consistently than most buyers realise — if you have reliable HP or UHP origin material with verifiable COAs, India is a ready market and we are a ready buyer."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-16">
              <p className="text-gray-600 text-base font-medium leading-relaxed">
                India's steel and foundry sector runs on recarburizers — and electrode scrap sits in the sweet spot between anthracite (cheap but dirty) and GPC (clean but expensive). Buyers who have outgrown anthracite but are watching margins come to electrode scrap. That means steady, growing demand — and we are positioned to move it.
              </p>
              <p className="text-gray-600 text-base font-medium leading-relaxed">
                We offer DA or open account terms to suppliers who qualify with consistent COAs. One thing we've learned: suppliers who require LC or advance on every consignment lose out to those who don't — because Indian importers have options, and workable payment terms is often the deciding factor. If your terms are flexible, you'll find us a reliable, growing buyer.
              </p>
            </div>

            <div className="bg-navy p-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-left rounded-xl shadow-2xl">
              <div>
                <h4 className="text-wine font-black uppercase text-sm tracking-widest mb-6 border-b border-white/10 pb-2">
                  What we need from you
                </h4>
                <ul className="text-white/80 text-xs space-y-4 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-wine font-bold">•</span>
                    <span>F.C. ≥98.0% (SGS/BV COA — not just manufacturer's own) · S ≤0.08% · N ≤0.05% · Ash ≤1.0%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wine font-bold">•</span>
                    <span>Electrode origin specified: RP / HP / UHP — HP/UHP strongly preferred for lower S/N variability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wine font-bold">•</span>
                    <span>Sizes: 1–5mm primary · 3–8mm · 5–25mm secondary · clean, no clay or soil contamination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wine font-bold">•</span>
                    <span>Packing: 25kg bags in 1MT jumbo bags or direct 1MT jumbo bags</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-white font-black uppercase text-sm tracking-widest mb-6 border-b border-white/10 pb-2">
                  Ready to Supply?
                </h4>
                <p className="text-white/60 text-xs mb-6 leading-relaxed">
                  Send us your company profile, location, monthly capacity (MT), electrode origin (RP/HP/UHP), typical F.C./S/N %, FOB price, and payment terms offered.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-wine text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-xl text-center"
                >
                  Contact Procurement Team
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-24 bg-[#fcfdfe]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter italic mb-4">
              Frequently Asked <span className="text-wine">Questions</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full" />
          </Reveal>
          <Reveal variant="fadeUp" delay={200}>
            <div className="divide-y divide-gray-100">
              <FAQItem
                q="Q1. What is graphite electrode scrap and where does it come from?"
                a="It is graphitic waste — offcuts and machining debris from graphite electrode manufacturing — crushed and screened to recarburizer sizes. It provides near-GPC quality carbon at 20–35% lower cost because it is a by-product, not a primary manufactured product."
              />
              <FAQItem
                q="Q2. Is electrode scrap quality consistent — or does it vary?"
                a="Quality varies more than GPC because it depends on electrode grade (RP, HP, UHP) and manufacturing source — HP/UHP origin gives lower and more consistent S and N values. We pre-qualify all suppliers by electrode grade and provide third-party COA per lot."
              />
              <FAQItem
                q="Q3. Can electrode scrap be used for ductile iron production?"
                a="Standard grade (N ≤0.05%) suits general ductile iron where your Mg treatment window allows it; for premium ductile iron (ADI, thin-wall) where N must be ≤0.01%, switch to GPC. Share your casting spec and we confirm which grade applies."
              />
              <FAQItem
                q="Q4. What is the cost saving vs GPC and is the quality trade-off worth it?"
                a="Electrode scrap is 20–35% cheaper per MT than GPC at comparable F.C. and S levels — for general EAF steelmaking and standard ductile iron the saving is real and the quality is sufficient. For premium N-sensitive applications, use GPC."
              />
              <FAQItem
                q="Q5. What is the MOQ and how quickly can I get a sample?"
                a="MOQ is 2 MT; samples with full COA are dispatched within 3–7 days. We can also consolidate electrode scrap with GPC in the same container to reduce per-MT freight cost."
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🏁 Call to Action */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-wine/20 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-20 relative z-10 text-white">
          <Reveal
            variant="fadeLeft"
            className="text-center lg:text-left max-w-2xl"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
              Get A <span className="text-wine block md:inline">Quote</span>
            </h2>
            <p className="text-white/40 font-black uppercase tracking-[0.2em] text-xs mb-10 italic">
              Quality & Consistency • Full COA Per Lot • MOQ 2 MT
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <Link
                to="/rfq"
                className="bg-wine text-white px-12 py-6 text-sm font-black hover:bg-white hover:text-navy transition-all shadow-2xl flex items-center gap-4 group"
              >
                <Icons.Truck />
                <span className="uppercase tracking-widest">RFQ Dashboard</span>
              </Link>
              <a
                href="https://wa.me/919258720699"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-12 py-[22px] text-sm font-black hover:bg-white hover:text-navy transition-all uppercase tracking-widest"
              >
                Whatsapp Direct
              </a>
            </div>
          </Reveal>
          <Reveal
            variant="fadeRight"
            className="lg:w-2/5 bg-white p-16 text-navy shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative group overflow-hidden"
          >
            <h4 className="text-2xl font-black uppercase mb-10 italic tracking-widest text-wine underline decoration-4 underline-offset-8">
              Related Links
            </h4>
            <div className="space-y-6">
              <Link
                to="/carbon-raiser"
                className="block p-4 border-l-4 border-navy hover:border-wine bg-gray-50 transition-all group"
              >
                <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-wine">
                  Premium Grade
                </span>
                <h5 className="font-black uppercase text-lg italic">
                  Carbon Raiser GPC
                </h5>
              </Link>
              <Link
                to="/anthracite"
                className="block p-4 border-l-4 border-navy hover:border-wine bg-gray-50 transition-all group"
              >
                <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-wine">
                  Economy Grade
                </span>
                <h5 className="font-black uppercase text-lg italic">
                  Anthracite Coal
                </h5>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ElectrodeScrap;
