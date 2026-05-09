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

// ── Asset Imports ───────────────────────────────────────────────────────────
import heroImg from "../assets/calcined.jpeg";
import rawImg from "../assets/images/products/calcined-bauxite/image_2.jpeg";
import grainImg from "../assets/images/products/calcined-bauxite/image_6.jpeg";
import chartTech from "../assets/images/products/calcined-bauxite/image_3.jpg";
import compareTable from "../assets/images/products/calcined-bauxite/image_5.png";
import globalSources from "../assets/images/products/calcined-bauxite/image_7.jpg";

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

const CalcinedBauxite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6p3YdEMaxNIF8UOQkKx0Qm7KC_R9HBAX85A&s"
            alt="Calcined Bauxite Rotary Kiln"
            className="w-full h-full object-cover scale-110 motion-safe:animate-[pulse_8s_infinite]"
          />
          <div className="absolute inset-0 bg-navy/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-6 py-2 bg-wine text-white rounded-md text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-2xl shadow-wine/50">
              Refractory • Abrasive • Cement Grade
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter italic leading-[0.9]">
              Calcined{" "}
              <span className="text-wine block md:inline">Bauxite</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed mb-12 italic">
              High-purity heat-resistant minerals refined through precision
              calcination at 1600°C+ for extreme industrial durability.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl md:text-5xl">
                  88%
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                  Max Alumina
                </span>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl md:text-5xl">
                  1600°C
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                  Calcinated Temp
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 📖 Introduction Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-32 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft" className="order-2 lg:order-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-black text-navy mb-6 uppercase tracking-tight italic">
                    The <span className="text-wine text-6xl">Pure</span> Essence
                  </h2>
                  <div className="w-24 h-2 bg-navy rounded-full"></div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  It is a highly refined form of raw bauxite ore. When raw
                  bauxite is subjected to extreme temperatures reaching 1600°C,
                  all inherent moisture and volatile impurities are completely
                  driven off. This rigorous thermal process is known as
                  **Calcination**. The resulting material is exceptionally hard,
                  dense, and possesses outstanding heat-resistant properties.
                </p>
                <div className="bg-navy p-10 rounded-none border-l-8 border-wine shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-wine/10 -translate-y-16 translate-x-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  <p className="text-white font-black text-2xl italic leading-snug relative z-10">
                    "From Gujarat (Jamnagar) to Chhattisgarh, India provides
                    some of the most consistent Gibbsite Bauxite for the global
                    refractory industry."
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  {[
                    "88% Alumina Purity",
                    "High Bulk Density",
                    "Rotary Kiln Processed",
                    "Shaft Kiln Grades",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Icons.Check />
                      <span className="font-black text-navy text-[10px] uppercase tracking-widest">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal
              variant="fadeRight"
              delay={300}
              className="order-1 lg:order-2"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square bg-gray-200 overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                  <img
                    src={rawImg}
                    alt="Raw Bauxite"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-navy p-8 flex flex-col justify-end text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <h4 className="font-black text-5xl mb-4 italic">60-88%</h4>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 leading-loose">
                    Alumina (Al₂O₃) Concentration range across grades
                  </p>
                </div>
                <div className="aspect-square bg-wine p-8 flex flex-col justify-center items-center text-white shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 text-center">
                  <Icons.Flame />
                  <h4 className="font-black text-2xl mt-6 uppercase tracking-tighter">
                    Rotary Kiln
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 mt-2">
                    Superior Thermal Consistency
                  </p>
                </div>
                <div className="aspect-square bg-white overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                  <img
                    src={grainImg}
                    alt="Calcined Grains"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📊 Grade Specifications */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full border-[50px] border-white/5 -rotate-12 scale-150"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center mb-20 relative z-10">
          <Reveal variant="fadeUp">
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic">
              Purity & <span className="text-wine">Grades</span>
            </h2>
            <div className="w-32 h-1 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-white/50 max-w-2xl mx-auto font-medium text-lg italic">
              Standard industrial classifications based on precise Alumina
              content targets.
            </p>
          </Reveal>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              grade: "Refractory Grade",
              purity: "80% – 88%",
              use: "Furnace interiors, high-heat bricks, and iron/steel industry vessel linings.",
              features: [
                "Max Temperature Resistance",
                "High Strength",
                "Low Impurity",
              ],
              color: "bg-wine",
            },
            {
              grade: "Abrasive Grade",
              purity: "75% – 80%",
              use: "Industrial grinding wheels, polishing compounds, and precision finishing.",
              features: [
                "Extreme Hardness",
                "Consistent Mesh Size",
                "Low Moisture",
              ],
              color: "bg-white/10",
            },
            {
              grade: "Cement Grade",
              purity: "40% – 50%",
              use: "High-Alumina Cement (HAC) and rapid-hardening sustainable concrete.",
              features: [
                "Clinker Optimization",
                "Wear Resistance",
                "Rapid Setting",
              ],
              color: "bg-white/5",
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 150} variant="fadeUp">
              <div
                className={`${item.color} p-12 h-full border border-white/10 hover:border-wine transition-all group relative`}
              >
                <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-8xl italic select-none">
                  0{i + 1}
                </div>
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight italic">
                  {item.grade}
                </h3>
                <div className="text-6xl font-black text-wine group-hover:scale-110 transition-transform origin-left mb-10 italic">
                  {item.purity}
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-8 font-medium">
                  {item.use}
                </p>
                <div className="space-y-3">
                  {item.features.map((f, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/80"
                    >
                      <div className="w-1 h-3 bg-wine"></div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ⚙️ Processing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:flex gap-20 items-center">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <Reveal variant="fadeLeft">
              <h2 className="text-5xl font-black text-navy mb-10 uppercase tracking-tight italic leading-none">
                The <span className="text-wine">Calcination</span> Cycle
              </h2>
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Primary Crushing",
                    desc: "Raw bauxite from mines is mechanically crushed into uniform fractions for consistent heating.",
                    color: "bg-navy",
                  },
                  {
                    step: "02",
                    title: "High-Thermal Treatment",
                    desc: "Crushed material enters Rotary or Shaft Kilns where it is baked at 1600°C+ to remove water (H₂O) and impurities.",
                    color: "bg-wine",
                  },
                  {
                    step: "03",
                    title: "Grinding & Sizing",
                    desc: "Post-calcination material is ground into various mesh sizes (8-325 mesh) as per industry application.",
                    color: "bg-navy",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div
                      className={`${item.color} w-16 h-16 text-white flex items-center justify-center font-black shrink-0 text-2xl italic group-hover:scale-110 transition-transform`}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-black text-navy uppercase text-xl mb-3 tracking-wide italic">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-base leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="lg:w-1/2 relative">
            <Reveal
              variant="zoomIn"
              className="bg-[#fcfdfe] p-1 shadow-2xl relative z-10"
            >
              <img
                src={chartTech}
                alt="Technical Specifications"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </Reveal>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-wine/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* 📸 Visual Gallery */}
      <section className="py-24 bg-[#f8f9fb] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tighter italic">
              Material <span className="text-wine">Gallery</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Visualizing the transformation from raw ore to high-purity
              calcined minerals.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal
              variant="zoomIn"
              className="group relative aspect-square overflow-hidden rounded-[2.5rem] shadow-xl"
            >
              <img
                src={rawImg}
                alt="Raw Bauxite"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <h4 className="text-white text-xl font-black uppercase italic mb-2">
                  Raw Ore
                </h4>
                <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest">
                  Mine Extraction
                </p>
              </div>
            </Reveal>
            <Reveal
              variant="zoomIn"
              delay={150}
              className="group relative aspect-square overflow-hidden rounded-[2.5rem] shadow-xl border-4 border-white"
            >
              <img
                src={grainImg}
                alt="Calcined Grains"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <h4 className="text-white text-xl font-black uppercase italic mb-2">
                  Refined Grains
                </h4>
                <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest">
                  Post-Calcination
                </p>
              </div>
            </Reveal>
            <Reveal
              variant="zoomIn"
              delay={300}
              className="group relative aspect-square overflow-hidden rounded-[2.5rem] shadow-xl"
            >
              <img
                src={chartTech}
                alt="Quality Chart"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <h4 className="text-white text-xl font-black uppercase italic mb-2">
                  Technical Analysis
                </h4>
                <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest">
                  Grade Certification
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🌏 Global Comparison */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] flex items-center justify-center">
          <img
            src={globalSources}
            alt="Map Background"
            className="w-full scale-150"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal variant="fadeUp" className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">
              Global Source <span className="text-wine">Analysis</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto uppercase tracking-widest text-xs font-black">
              Technical Differentiators: China vs India vs Guyana
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <div className="p-12 lg:p-16 bg-navy/50 backdrop-blur-xl">
              <h4 className="font-black text-white text-4xl mb-12 uppercase italic tracking-tighter border-b-4 border-wine pb-4 inline-block">
                Origin: China
              </h4>
              <div className="space-y-8">
                {[
                  { label: "Alumina Purity", val: "85% - 90%" },
                  { label: "Iron Content", val: "1.5% - 2.5%" },
                  { label: "Bulk Density", val: "3.2 - 3.4 g/cm³" },
                  { label: "Pricing", val: "Premium / High" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-end border-b border-white/5 pb-4"
                  >
                    <span className="text-white/30 font-black uppercase text-[10px] tracking-widest">
                      {row.label}
                    </span>
                    <span className="text-white font-black text-2xl italic tracking-tighter">
                      {row.val}
                    </span>
                  </div>
                ))}
                <div className="bg-white/5 p-8 mt-12 rounded-none border-l-4 border-wine">
                  <p className="text-white/80 font-bold italic leading-relaxed text-sm">
                    "China remains the largest producer, but environmental
                    regulations frequently cause supply fluctuations, making
                    Indian alternatives highly attractive for global buyers."
                  </p>
                </div>
              </div>
            </div>

            <div className="p-12 lg:p-16 bg-wine/5 backdrop-blur-xl">
              <h4 className="font-black text-white text-4xl mb-12 uppercase italic tracking-tighter border-b-4 border-white/10 pb-4 inline-block">
                Origin: India
              </h4>
              <div className="space-y-8">
                {[
                  { label: "Alumina Purity", val: "75% - 85%" },
                  { label: "Iron Content", val: "2.0% - 5.0%" },
                  { label: "Bulk Density", val: "2.8 - 3.1 g/cm³" },
                  { label: "Pricing", val: "Competitive / Value" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-end border-b border-white/5 pb-4"
                  >
                    <span className="text-white/30 font-black uppercase text-[10px] tracking-widest">
                      {row.label}
                    </span>
                    <span className="text-white font-black text-2xl italic tracking-tighter">
                      {row.val}
                    </span>
                  </div>
                ))}
                <div className="bg-white/5 p-8 mt-12 rounded-none border-l-4 border-white/20">
                  <p className="text-white/80 font-bold italic leading-relaxed text-sm">
                    "India (Gujarat/Chhattisgarh) offers consistent quality for
                    Road Surfacing, Abrasives, and Cement grades with very
                    reliable supply chains."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 Why Buyers Choose India */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <Reveal variant="fadeLeft">
                <h2 className="text-5xl font-black text-navy mb-8 uppercase italic leading-none">
                  Why <span className="text-wine">Global Buyers</span> Choose
                  India?
                </h2>
                <div className="space-y-10">
                  {[
                    {
                      title: "Environmental Reliability",
                      desc: "Unlike China's frequent province-wide shutdowns, India's calcination plants offer continuous year-round supply.",
                    },
                    {
                      title: "Gibbsite Bauxite Advantages",
                      desc: "Indian bauxite is primarily Gibbsite-type, which is easier and more cost-effective to process for Alumina refineries.",
                    },
                    {
                      title: "Geographical Strategic Hub",
                      desc: "Ocean freight from Indian ports (Gujarat) to major markets is highly economical compared to Guinea or Australia.",
                    },
                    {
                      title: "Flexible Export Terms",
                      desc: "International buyers benefit from reliable standards and flexible payment structures offered by Indian manufacturers.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                      <div className="mt-1">
                        <Icons.Check />
                      </div>
                      <div>
                        <h5 className="font-black text-navy uppercase text-lg mb-2 tracking-tight italic">
                          {item.title}
                        </h5>
                        <p className="text-gray-500 text-sm leading-relaxed font-semibold">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="lg:w-1/2">
              <Reveal variant="zoomIn">
                <img
                  src={compareTable}
                  alt="Quality Comparison"
                  className="w-full shadow-2xl skew-y-3"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 🏗️ Cement Grade Deep Dive */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wine/[0.02] rounded-full -translate-y-48 translate-x-48"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4">
            <Reveal variant="fadeLeft">
              <Icons.Factory />
              <h4 className="text-4xl font-black text-navy mt-8 uppercase leading-tight italic">
                Cement Grade <br />
                <span className="text-wine">Optimization</span>
              </h4>
              <p className="mt-8 text-gray-500 leading-relaxed font-medium text-lg italic border-l-4 border-navy pl-6">
                Primarily utilized in the manufacturing of High-Alumina Cement
                (HAC). This specialized grade can comfortably withstand extreme
                temperatures exceeding 1600°C.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Reveal
              variant="fadeUp"
              delay={200}
              className="bg-white p-12 shadow-2xl border border-gray-100 group"
            >
              <div className="w-12 h-1 bg-wine mb-8 group-hover:w-full transition-all duration-700"></div>
              <h5 className="font-black text-navy uppercase text-xl mb-6 tracking-tight italic">
                Wait-Free Hardening
              </h5>
              <p className="text-gray-500 text-base leading-relaxed font-medium">
                HAC cement formulated with calcined bauxite begins to set within
                just 2-4 hours, achieving full structural strength and maximum
                durability in under 24 hours.
              </p>
              <div className="mt-10 flex items-center gap-4 text-wine font-black text-xs uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                Rapid Setting Technology
              </div>
            </Reveal>
            <Reveal
              variant="fadeUp"
              delay={400}
              className="bg-white p-12 shadow-2xl border border-gray-100 group"
            >
              <div className="w-12 h-1 bg-navy mb-8 group-hover:w-full transition-all duration-700"></div>
              <h5 className="font-black text-navy uppercase text-xl mb-6 tracking-tight italic">
                Extreme Floors
              </h5>
              <p className="text-gray-500 text-base leading-relaxed font-medium">
                Ideal for heavy-duty industrial floors, airport runways, and
                anti-skid roads where continuous heavy traffic and severe
                abrasive stress are persistent challenges.
              </p>
              <div className="mt-10 flex items-center gap-4 text-navy font-black text-xs uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                Anti-Skid Hardness (8-9 Mohs)
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🏁 Call to Action */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-20 relative z-10">
          <Reveal
            variant="fadeLeft"
            className="text-center lg:text-left max-w-2xl"
          >
            <h2 className="text-6xl md:text-8xl font-black text-navy mb-8 tracking-tighter uppercase italic leading-none">
              Get A <span className="text-wine block md:inline">Quote</span>
            </h2>
            <p className="text-gray-500 font-black uppercase tracking-[0.4em] text-xs mb-10 italic">
              Global Standards • Verified Reliability • Flexible Logistics
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <Link
                to="/rfq"
                className="bg-navy text-white px-12 py-6 text-sm font-black hover:bg-wine transition-all shadow-2xl flex items-center gap-4 group"
              >
                <Icons.Truck />
                <span className="uppercase tracking-widest">RFQ Dashboard</span>
              </Link>
              <a
                href="https://wa.me/919258720699"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-navy text-navy px-12 py-[22px] text-sm font-black hover:bg-navy hover:text-white transition-all uppercase tracking-widest"
              >
                Whatsapp Direct
              </a>
            </div>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="font-black text-[10px] tracking-widest">
                SCABAL INDIA
              </span>
              <span className="font-black text-[10px] tracking-widest">
                DYNAMIC EXIM
              </span>
              <span className="font-black text-[10px] tracking-widest">
                HENAN QINGJIANG
              </span>
              <span className="font-black text-[10px] tracking-widest">
                GLOBAL SOURCE
              </span>
            </div>
          </Reveal>
          <Reveal
            variant="fadeRight"
            className="lg:w-2/5 bg-navy p-16 text-white shadow-[0_50px_100px_-20px_rgba(30,41,59,0.5)] relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
              <Icons.Flame />
            </div>
            <h4 className="text-2xl font-black uppercase mb-10 italic tracking-widest text-wine underline decoration-4 underline-offset-8">
              Composition
            </h4>
            <div className="relative z-10 overflow-hidden rounded-xl border border-white/10">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-white/10 bg-white/5">
                    <TableHead className="text-white/40 text-[10px] font-black uppercase tracking-widest px-6 h-10">
                      Component
                    </TableHead>
                    <TableHead className="text-right text-white/40 text-[10px] font-black uppercase tracking-widest px-6 h-10">
                      Value
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { label: "Alumina (Al₂O₃)", val: "60% - 88%" },
                    { label: "Silica (SiO₂)", val: "6% - 12%" },
                    { label: "Iron Oxide (Fe₂O₃)", val: "2% - 5%" },
                    { label: "Titanium Oxide (TiO₂)", val: "2% - 4%" },
                    { label: "Bulk Density", val: "2.8 - 3.4 g/cm³" },
                  ].map((row, i) => (
                    <TableRow
                      key={i}
                      className="border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <TableCell className="px-6 py-4">
                        <span className="text-white/80 text-xs font-bold uppercase tracking-wider">
                          {row.label}
                        </span>
                      </TableCell>
                      <TableCell className="px-6 py-4 text-right">
                        <span className="font-black italic text-wine text-lg tracking-tighter">
                          {row.val}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default CalcinedBauxite;
