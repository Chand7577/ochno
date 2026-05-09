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

// Anthracite Assets
import steamCoalImg from "../assets/anthracite-coal/200mm-black-steam-coal-250x250.webp";
import anthraciteImg from "../assets/anthracite-coal/anthracite-coal-500x500.webp";
import calcinedImg from "../assets/anthracite-coal/calcined-anthracite-coal.webp";
import jharkhandImg from "../assets/anthracite-coal/jharkhand-jhariya-steam-coal.jpg";

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
  Flame: () => (
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
        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.879 16.121A3 3 0 1012.015 11L11 14l2.828 2.828"
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

// ── FAQ Item ──────────────────────────────────────────────────────────────────
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-6 text-left group">
        <span className="font-black text-navy text-base md:text-lg uppercase tracking-tight group-hover:text-wine transition-colors">{q}</span>
        <span className={`w-8 h-8 flex items-center justify-center rounded-full border-2 border-navy text-navy font-black transition-all shrink-0 ml-4 ${open ? "bg-wine border-wine text-white rotate-45" : ""}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-6" : "max-h-0"}`}>
        <p className="text-gray-600 font-medium leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const AnthraciteCoal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 mix-blend-multiply"></div>
          {/* Abstract dark shapes for coal visual */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black opacity-30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-wine opacity-20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-6 py-2 bg-wine text-white rounded-md text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-2xl shadow-wine/50">
              Economy Carbon Raiser
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter italic leading-[0.9]">
              Calcined <span className="text-wine block md:inline">Anthracite Coal</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed mb-12 italic">
              Economy Carbon Raiser for EAF Steelmaking & Grey Iron Foundries. Imported from China & Vietnam.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="flex flex-wrap justify-center gap-10 mb-12">
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl md:text-5xl">90-95%</span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                  Fixed Carbon
                </span>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl md:text-5xl">≤0.5%</span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                  Sulphur
                </span>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl md:text-5xl">0-25mm</span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                  Sizes Available
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fadeUp" delay={1000}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq" className="bg-wine text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-2xl flex items-center gap-4 text-center">
                Request A Quote
              </Link>
              <a href="https://wa.me/919258720699" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-10 py-[18px] text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all">
                Whatsapp Direct
              </a>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-white/5 border-t border-white/10 py-3 hidden md:block">
            <div className="max-w-7xl mx-auto px-6 flex justify-between text-white/50 text-[10px] font-black uppercase tracking-widest">
                <span>ISO 9001</span>
                <span>COA per lot</span>
                <span>SGS inspection available</span>
                <span>Ex-stock India</span>
                <span>Competitive CIF pricing</span>
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
            <Link to="/electrode-scrap" className="py-5 px-2 text-xs md:text-sm font-black uppercase tracking-widest text-gray-400 border-b-4 border-transparent hover:border-navy hover:text-navy transition-all">
              Electrode Scrap
            </Link>
            <span className="py-5 px-2 text-xs md:text-sm font-black uppercase tracking-widest text-navy border-b-4 border-wine transition-all">
              Anthracite Coal
            </span>
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
                    What is <span className="text-wine">CAC?</span>
                  </h2>
                  <div className="w-24 h-2 bg-navy rounded-full"></div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Calcined anthracite coal (CAC) is produced by heat-treating natural anthracite at high temperature — gas calcined (GCA) at ~1,280°C or electrically calcined (ECA) at up to 2,000°C. 
                  The process removes moisture and volatile matter, raising fixed carbon from the raw anthracite level of 85–92% to a consistent 90–95% in the finished product. 
                  Main production origins are Ningxia and Inner Mongolia, China.
                </p>
                <div className="bg-navy p-10 rounded-none border-l-8 border-wine shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-wine/10 -translate-y-16 translate-x-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  <p className="text-white font-black text-xl italic leading-snug relative z-10">
                    "India's 600+ induction furnace units and hundreds of EAF steel plants make it one of Asia's largest markets for CAC."
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeRight" delay={300} className="order-1 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="aspect-square bg-navy p-8 flex flex-col justify-center text-white shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <h4 className="font-black text-4xl mb-4 italic">GCA</h4>
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-white/70 mb-4">Gas Calcined Anthracite (~1,280°C)</p>
                  <ul className="text-[10px] text-white/50 space-y-2 uppercase tracking-wider font-bold">
                      <li>F.C. 90–93%</li>
                      <li>S 0.3–0.5%</li>
                      <li>Standard economy grade for general EAF/IF.</li>
                  </ul>
                </div>
                <div className="aspect-square bg-wine p-8 flex flex-col justify-center text-white shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Icons.Flame />
                  <h4 className="font-black text-4xl mt-4 mb-4 italic">ECA</h4>
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-white/70 mb-4">Electrically Calcined (up to 2,000°C)</p>
                  <ul className="text-[10px] text-white/50 space-y-2 uppercase tracking-wider font-bold">
                      <li>F.C. 93–97%</li>
                      <li>S ≤0.3%</li>
                      <li>Better conductivity, mid-range between GCA & GPC.</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Visual Showcase ───────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h3 className="text-3xl font-black text-navy uppercase italic mb-4">Product <span className="text-wine">Gallery</span></h3>
            <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-[10px]">Natural & Calcined Coal Origins</p>
          </Reveal>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { img: anthraciteImg, title: "Anthracite Coal", desc: "Premium high-carbon natural coal" },
              { img: calcinedImg, title: "Calcined Anthracite", desc: "Heat-treated for higher purity" }
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
                    <h5 className="font-black text-navy uppercase text-sm mb-1 tracking-wider">{item.title}</h5>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 Grade Specifications */}
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
                            <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4">Parameter</TableHead>
                            <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4">GCA Standard (90%)</TableHead>
                            <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4 text-wine">GCA Premium (93%)</TableHead>
                            <TableHead className="text-white/40 text-[10px] uppercase tracking-widest font-black py-4 text-white">ECA Grade (95%)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[
                            { param: "Fixed Carbon (F.C.) % min", gca90: "90.0%", gca93: "93.0%", eca95: "95.0%" },
                            { param: "Sulphur (S) % max", gca90: "0.50%", gca93: "0.40%", eca95: "0.30%" },
                            { param: "Nitrogen (N) %", gca90: "0.8–1.2%", gca93: "0.6–1.0%", eca95: "0.5–0.8%" },
                            { param: "Ash % max", gca90: "8.0%", gca93: "6.0%", eca95: "4.5%" },
                            { param: "Volatile Matter (VM) % max", gca90: "2.5%", gca93: "1.5%", eca95: "1.0%" },
                            { param: "Moisture % max", gca90: "1.0%", gca93: "0.8%", eca95: "0.5%" },
                            { param: "Absorption rate", gca90: "75–83%", gca93: "80–85%", eca95: "82–87%" },
                            { param: "Electrical resistivity", gca90: "1,250–1,450 µΩm", gca93: "1,100–1,350 µΩm", eca95: "650–900 µΩm" },
                            { param: "Available sizes", gca90: "0–1mm · 1–5mm · 3–8mm · 5–25mm", gca93: "Same as Standard", eca95: "1–5mm · 3–10mm · 5–15mm" },
                            { param: "Primary use", gca90: "General EAF/IF steelmaking, grey iron cupola", gca93: "EAF quality steel, cost-conscious IF units", eca95: "EAF steelmaking, better conductivity apps" },
                        ].map((row, i) => (
                            <TableRow key={i} className="border-b border-white/5 hover:bg-white/10 transition-colors">
                                <TableCell className="font-bold text-white/80 py-4 text-xs">{row.param}</TableCell>
                                <TableCell className="text-white/70 py-4 text-sm">{row.gca90}</TableCell>
                                <TableCell className="text-wine font-bold py-4 text-sm">{row.gca93}</TableCell>
                                <TableCell className="text-white font-bold py-4 text-sm">{row.eca95}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ⚖️ Anthracite vs GPC */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tighter italic">
                Anthracite <span className="text-wine">vs GPC</span>
                </h2>
                <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <Reveal variant="fadeLeft" className="bg-white p-10 shadow-xl border-t-4 border-navy">
                    <h3 className="text-2xl font-black text-navy uppercase italic mb-6">Right Choice When:</h3>
                    <ul className="space-y-4">
                        {[
                            "You produce carbon steel, low-alloy steel or grey iron where nitrogen content is not a critical constraint.",
                            "Cost per MT of carbon delivered matters more than absorption speed (35-50% cheaper per MT than GPC).",
                            "You run a large EAF with a foaming slag practice — injected anthracite generates CO bubbles that foam the slag, stabilize the arc, and reduce power consumption.",
                            "You are blending with GPC (e.g. 60-70% anthracite) to manage total recarburizer cost while maintaining acceptable quality."
                        ].map((text, i) => (
                            <li key={i} className="flex gap-4 items-start">
                                <Icons.Check />
                                <span className="text-gray-600 font-medium">{text}</span>
                            </li>
                        ))}
                    </ul>
                </Reveal>
                <Reveal variant="fadeRight" className="bg-white p-10 shadow-xl border-t-4 border-wine">
                    <h3 className="text-2xl font-black text-wine uppercase italic mb-6">Wrong Choice When:</h3>
                    <ul className="space-y-4">
                        {[
                            "You produce ductile iron — nitrogen above 0.3% in your recarburizer causes porosity every time.",
                            "You produce low-nitrogen special steel (bearing, spring, tool steel).",
                            "You need maximum absorption speed per heat. (Anthracite has a tight carbon molecular structure, meaning heat absorption is slower than GPC)."
                        ].map((text, i) => (
                            <li key={i} className="flex gap-4 items-start">
                                <span className="w-5 h-5 shrink-0 flex items-center justify-center rounded-full bg-wine text-white text-xs font-bold mt-0.5">X</span>
                                <span className="text-gray-600 font-medium">{text}</span>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </div>
      </section>

      {/* 🏭 Applications in India */}
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
                desc: "Added during charging as a foaming agent and carbon source. GCA standard is perfect for commodity long products (TMT bar, wire rod). ECA is used for better quality."
              },
              {
                title: "Induction Furnace",
                desc: "Used for general-purpose carbon steel billets. Cost-sensitive IF operators utilize CAC where sulphur and nitrogen specs are not overly tight."
              },
              {
                title: "Grey Iron Foundries",
                desc: "Added with coke charge for agricultural castings, manhole covers, and counterweights (grey iron tolerates higher nitrogen than ductile iron)."
              },
              {
                title: "EAF Slag Foaming",
                desc: "CAC injected to maintain foaming slag. This stabilizes the arc, significantly reducing power consumption and electrode wear."
              },
              {
                title: "Carbon Blending",
                desc: "Many buyers blend 60–70% anthracite with 30–40% GPC — a cost-effective strategy maintaining acceptable quality for IF steel."
              }
            ].map((app, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={100 * idx}>
                <div className="bg-gray-50 p-8 h-full border hover:border-wine transition-all group">
                  <div className="w-10 h-1 bg-navy mb-6 group-hover:bg-wine transition-colors"></div>
                  <h4 className="text-xl font-black text-navy uppercase italic mb-4">{app.title}</h4>
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
                        <h4 className="font-black text-navy uppercase text-sm tracking-widest">Quality & Consistency</h4>
                        <ul className="text-xs space-y-2 text-gray-600 font-bold uppercase">
                            <li>• Fixed Origin (Ningxia/Inner Mongolia)</li>
                            <li>• Moisture/Volatiles Controlled</li>
                            <li>• Full COA Per Lot</li>
                            <li>• SGS/Intertek Inspection</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-black text-wine uppercase text-sm tracking-widest">Supply & Commercial</h4>
                        <ul className="text-xs space-y-2 text-gray-600 font-bold uppercase">
                            <li>• Both GCA & ECA Available</li>
                            <li>• Ex-stock Indian Ports</li>
                            <li>• MOQ from 2 MT</li>
                            <li>• Competitive CIF/DAP Pricing</li>
                        </ul>
                    </div>
                </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={300}>
                <div className="bg-navy p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-wine -translate-y-12 translate-x-12 rotate-45"></div>
                    <h3 className="text-3xl font-black uppercase italic mb-6">Logistics Overview</h3>
                    <ul className="text-white/70 font-medium space-y-3 text-sm">
                        <li>• Packaging: 25kg or 1MT Jumbo Bags</li>
                        <li>• Container: 20–24 MT per 20-ft FCL</li>
                        <li>• Ex-stock Delivery: 3–7 days (GCA 1-5mm)</li>
                        <li>• Fresh Import: 30–40 days from order</li>
                    </ul>
                    <div className="flex items-center gap-4 mt-8">
                        <Icons.Truck />
                        <span className="font-black uppercase tracking-widest text-wine text-sm">Pan-India Delivery Network</span>
                    </div>
                </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🤝 Supplier Intent */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <Reveal variant="fadeUp">
                <h2 className="text-4xl md:text-5xl font-black text-navy uppercase italic mb-8 leading-tight">
                    Anthracite Producers & <span className="text-wine">Exporters</span>
                </h2>
                <p className="text-gray-600 text-lg font-medium leading-relaxed mb-6">
                    India consumes millions of tonnes of calcined anthracite annually — and we're one of the importers bringing it in. If you have consistent quality and workable terms, there's good volume here for you.
                </p>
                <p className="text-gray-600 text-lg font-medium leading-relaxed mb-12">
                    We prefer long-term supplier relationships and work on D/P or open account terms for suppliers who qualify. Flexible payment terms is the difference between a one-time trial and a relationship that grows.
                </p>
                <div className="bg-navy p-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div>
                        <h4 className="text-wine font-black uppercase text-sm tracking-widest mb-4">Quality Requirements</h4>
                        <ul className="text-white/60 text-xs space-y-2 font-medium">
                            <li>• GCA: F.C. ≥90% · S ≤0.5% · Ash ≤8%</li>
                            <li>• ECA: F.C. ≥95% · S ≤0.3% · Ash ≤4.5%</li>
                            <li>• Primary Size: 1–5mm</li>
                            <li>• Secondary Sizes: 0–1mm, 3–8mm</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-black uppercase text-sm tracking-widest mb-4">Send Us</h4>
                        <ul className="text-white/60 text-xs space-y-2 font-medium">
                            <li>• Company & Location</li>
                            <li>• Monthly Supply Capacity</li>
                            <li>• F.C./S/Ash % Specs</li>
                            <li>• FOB Price & Payment Terms</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12">
                    <Link to="/contact" className="inline-block bg-wine text-white px-12 py-5 text-sm font-black uppercase tracking-widest hover:bg-navy transition-all shadow-xl">
                        Offer Your Supply
                    </Link>
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
                q="Q1. What is the difference between GCA and ECA anthracite?" 
                a="GCA (gas calcined, ~1,280°C) reaches F.C. 90–93% — standard economy grade for general EAF and IF steelmaking. ECA (electrically calcined, up to 2,000°C) reaches F.C. 93–97% with better conductivity — a mid-range step up between GCA and GPC in both performance and price." 
              />
              <FAQItem 
                q="Q2. Can anthracite be used for ductile iron production?" 
                a="No — anthracite nitrogen of 0.5–1.2% is far too high for ductile iron; nitrogen above 0.3% causes sub-surface porosity and poor nodule formation. For ductile iron, GPC with N ≤0.03% is the only safe carbon raiser." 
              />
              <FAQItem 
                q="Q3. Why is anthracite absorption rate lower than GPC?" 
                a="Anthracite has a tight, non-graphitized carbon structure that dissolves more slowly in molten metal than GPC's graphite crystal. Factor this into your cost-per-MT-of-carbon-delivered calculation before comparing prices purely on a per-tonne basis." 
              />
              <FAQItem 
                q="Q4. What is EAF slag foaming and how does anthracite help?" 
                a="Injecting anthracite into EAF slag generates CO gas that foams the slag — this covers the arc, reduces heat loss, lowers power consumption and cuts electrode wear. It is one of the most valuable uses of CAC and a genuine cost-saving practice in large EAF plants." 
              />
              <FAQItem 
                q="Q5. What is the minimum order quantity and lead time?" 
                a="MOQ is 2 MT; samples dispatched within 3–7 days with full COA. Standard container is 20–24 MT — ex-stock GCA 1–5mm delivers in 3–7 days; fresh import from China takes 30–40 days." 
              />
            </div>
          </Reveal>
        </div>
      </section>
      {/* 🏁 Call to Action */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-20 relative z-10">
          <Reveal variant="fadeLeft" className="text-center lg:text-left max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black text-navy mb-8 tracking-tighter uppercase italic leading-none">
              Get A <span className="text-wine block md:inline">Quote</span>
            </h2>
            <p className="text-gray-500 font-black uppercase tracking-[0.2em] text-xs mb-10 italic">
                Quality & Consistency • Full COA Per Lot • MOQ 2 MT
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <Link to="/rfq" className="bg-navy text-white px-12 py-6 text-sm font-black hover:bg-wine transition-all shadow-2xl flex items-center gap-4 group">
                <Icons.Truck />
                <span className="uppercase tracking-widest">RFQ Dashboard</span>
              </Link>
              <a href="https://wa.me/919258720699" target="_blank" rel="noopener noreferrer" className="border-2 border-navy text-navy px-12 py-[22px] text-sm font-black hover:bg-navy hover:text-white transition-all uppercase tracking-widest">
                Whatsapp Direct
              </a>
            </div>
          </Reveal>
          <Reveal variant="fadeRight" className="lg:w-2/5 bg-navy p-16 text-white shadow-[0_50px_100px_-20px_rgba(30,41,59,0.5)] relative group overflow-hidden">
            <h4 className="text-2xl font-black uppercase mb-10 italic tracking-widest text-wine underline decoration-4 underline-offset-8">
              Supply Details
            </h4>
            <ul className="space-y-6">
                {[
                    "Fixed origin (Ningxia/Inner Mongolia) for consistent chemistry",
                    "SGS / Intertek inspection at origin available",
                    "Ex-stock at JNPT/Mundra for GCA standard 1–5mm (3-7 days)",
                    "Fresh import 30-40 days for non-stock sizes",
                    "Competitive CIF / DAP pricing to your plant",
                    "Flexible payment terms for long-term relationships"
                ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                        <div className="mt-1"><Icons.Check /></div>
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

export default AnthraciteCoal;
