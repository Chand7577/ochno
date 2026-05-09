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

// ── Icons ──────────────────────────────────────────────────────────────────
const Icons = {
  Check: () => (
    <svg
      className="w-5 h-5 text-wine shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Fire: () => (
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
        d="M9.879 16.121A3 3 0 1012.015 11L11 14l.879 2.121z"
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
  Chevron: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
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

// ── Media Imports ───────────────────────────────────────────────────────────
import img1 from "../assets/hardwood coal/WhatsApp Image 2026-05-04 at 12.03.42 PM (1).jpeg";
import img2 from "../assets/hardwood coal/WhatsApp Image 2026-05-04 at 12.03.42 PM (2).jpeg";
import img3 from "../assets/hardwood coal/WhatsApp Image 2026-05-04 at 12.03.42 PM.jpeg";
import img4 from "../assets/hardwood coal/WhatsApp Image 2026-05-04 at 12.03.43 PM.jpeg";
import img5 from "../assets/hardwood coal/WhatsApp Image 2026-05-04 at 12.04.05 PM.jpeg";
import img6 from "../assets/hardwood coal/WhatsApp Image 2026-05-04 at 12.04.08 PM (1).jpeg";
import img7 from "../assets/hardwood coal/WhatsApp Image 2026-05-04 at 12.04.08 PM (2).jpeg";
import img8 from "../assets/hardwood coal/WhatsApp Image 2026-05-04 at 12.04.08 PM.jpeg";

// ── Video Imports ───────────────────────────────────────────────────────────
import vid1 from "../assets/hardwood coal/WhatsApp Video 2026-05-04 at 12.04.03 PM (1).mp4";
import vid2 from "../assets/hardwood coal/WhatsApp Video 2026-05-04 at 12.04.03 PM.mp4";
import vid3 from "../assets/hardwood coal/WhatsApp Video 2026-05-04 at 12.04.04 PM.mp4";
import vid4 from "../assets/hardwood coal/WhatsApp Video 2026-05-04 at 12.04.05 PM (1).mp4";
import vid5 from "../assets/hardwood coal/WhatsApp Video 2026-05-04 at 12.04.05 PM.mp4";
import vid6 from "../assets/hardwood coal/WhatsApp Video 2026-05-04 at 12.04.06 PM (1).mp4";
import vid7 from "../assets/hardwood coal/WhatsApp Video 2026-05-04 at 12.04.06 PM.mp4";
import vid8 from "../assets/hardwood coal/WhatsApp Video 2026-05-04 at 12.04.07 PM (1).mp4";
import vid9 from "../assets/hardwood coal/WhatsApp Video 2026-05-04 at 12.04.07 PM (2).mp4";
import vid10 from "../assets/hardwood coal/WhatsApp Video 2026-05-04 at 12.04.07 PM.mp4";

const HardwoodCharcoal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8];
  const galleryVideos = [vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8, vid9, vid10];

  const faqs = [
    {
      q: "For which applications do we supply hardwood charcoal?",
      a: "We primarily supply for steel plants and ferro silicon / ferro alloy units, where high fixed carbon and consistent quality are critical.",
    },
    {
      q: "Do we supply charcoal for BBQ or filtration use?",
      a: "No — we do not supply for BBQ or filtration applications. Our focus is strictly industrial-grade supply.",
    },
    {
      q: "What sizes do we supply for different uses?",
      a: "Steel / ferro alloy plants → 20–80 mm lumps (as required). Custom sizing is available based on furnace requirement.",
    },
    {
      q: "What are the payment terms?",
      a: "We work on 30% advance and balance against LR / E-way bill.",
    },
    {
      q: "Which countries do we export to?",
      a: "We supply to India and nearby international markets, including Middle East and South Asia, depending on buyer requirement.",
    },
    {
      q: "What quality parameters should I check before buying?",
      a: "Key parameters include: Fixed carbon, Ash content, Moisture, and Size consistency.",
    },
    {
      q: "Do you provide samples and documentation?",
      a: "Yes — samples can be arranged with COA and basic quality details before bulk supply.",
    },
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[75vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img
            src={img3}
            alt="Hardwood Charcoal Hero"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-6 py-2 bg-wine text-white rounded-md text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-2xl shadow-wine/50">
              High-Density Carbon Source
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter italic leading-[0.85]">
              Hardwood{" "}
              <span className="text-wine block md:inline">Charcoal</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed mb-12 italic">
              Premium industrial-grade charcoal derived from high-density woods
              like Babool, Khejri, and Sal. Engineered for maximum calorific
              value and consistent performance in metallurgy and filtration.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="flex flex-wrap justify-center gap-10 mb-12">
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl md:text-5xl">
                  65%-85%
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                  Fixed Carbon
                </span>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl md:text-5xl">
                  7500
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                  KCAL/KG
                </span>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <Icons.Fire />
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                  High Temp
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fadeUp" delay={1000}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/rfq"
                className="bg-wine text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-2xl flex items-center gap-4"
              >
                <Icons.Zap /> Request A Quote
              </Link>
              <a
                href="https://wa.me/919258720699"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-10 py-[18px] text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all"
              >
                Whatsapp Direct
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 📖 Introduction & Process */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft">
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-black text-navy mb-6 uppercase tracking-tight italic leading-none">
                    Pure <span className="text-wine">Carbon Power</span>
                  </h2>
                  <div className="w-24 h-2 bg-navy rounded-full"></div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Our hardwood charcoal is manufactured from 100% natural,
                  high-density wood, ensuring a pure product free from any
                  chemical additives or fillers. Produced in controlled kilns
                  through a precise carbonization process, the wood is heated in
                  an oxygen-free environment to remove moisture and volatile
                  gases, resulting in high-purity solid carbon.
                </p>
                <div className="bg-gray-50 p-10 border-l-8 border-wine shadow-xl">
                  <h4 className="text-navy font-black uppercase text-sm tracking-widest mb-4">
                    Industrial Advantage
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-500 italic">
                      <Icons.Check /> Best for Steel (DRI) & Ferro Silicon
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-500 italic">
                      <Icons.Check /> Ultra-Low Sulphur Content (&lt;0.1%)
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-500 italic">
                      <Icons.Check /> High Bulk Density (180-250 kg/m³)
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeRight" delay={300}>
              <div className="relative group">
                <img
                  src={img6}
                  alt="Charcoal Lumps"
                  className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
                />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[20px] border-wine/10 -z-10"></div>
                <div className="absolute top-10 left-10 p-6 bg-navy text-white font-black italic uppercase text-xs tracking-[0.2em] shadow-2xl">
                  Grade A Lumps
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📊 Technical Specifications */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-4">
              Technical <span className="text-wine">Specs</span>
            </h2>
            <p className="text-white/40 font-black uppercase tracking-widest text-xs italic">
              Chemical Composition & Physical Properties
            </p>
          </Reveal>

          <Reveal variant="fadeUp" className="overflow-x-auto">
            <Table className="min-w-full border-collapse">
              <TableHeader className="bg-white/5">
                <TableRow className="border-b border-white/10 hover:bg-transparent">
                  <TableHead className="text-wine font-black uppercase tracking-widest py-6">
                    Parameter
                  </TableHead>
                  <TableHead className="text-wine font-black uppercase tracking-widest py-6 text-right">
                    Value Range
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { p: "Fixed Carbon", v: "65% – 85%" },
                  { p: "Ash Content", v: "Max 3%" },
                  { p: "Moisture", v: "Max 5% – 8%" },
                  { p: "Volatile Matter", v: "15% – 25%" },
                  { p: "Sulphur", v: "Ultra Low (<0.1%)" },
                  { p: "Calorific Value", v: "6500 – 7500 kcal/kg" },
                  { p: "Bulk Density", v: "180 – 250 kg/m³" },
                ].map((row, i) => (
                  <TableRow
                    key={i}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <TableCell className="py-5 font-bold uppercase italic text-sm">
                      {row.p}
                    </TableCell>
                    <TableCell className="py-5 font-black text-right text-lg">
                      {row.v}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Reveal>
        </div>
      </section>

      {/* 🏭 Application Breakdown */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase italic mb-4">
              Industrial <span className="text-wine">Applications</span>
            </h2>
            <div className="w-24 h-1.5 bg-navy mx-auto rounded-full"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal variant="fadeLeft" className="space-y-8">
              <div className="bg-gray-50 p-10 group hover:bg-navy hover:text-white transition-all duration-500 border-b-4 border-wine h-full">
                <div className="mb-8">
                  <Icons.Factory />
                </div>
                <h3 className="text-3xl font-black uppercase italic mb-6">
                  Metallurgical Plants
                </h3>
                <ul className="space-y-4">
                  <li className="text-sm font-medium opacity-70 flex gap-3">
                    <span className="text-wine font-black">01.</span> **Steel
                    (DRI) / Sponge Iron**: 25mm – 80mm lumps for high-purity
                    reduction.
                  </li>
                  <li className="text-sm font-medium opacity-70 flex gap-3">
                    <span className="text-wine font-black">02.</span> **Ferro
                    Silicon**: 50mm – 150mm (Best 80-120mm) for furnace charge.
                  </li>
                  <li className="text-sm font-medium opacity-70 flex gap-3">
                    <span className="text-wine font-black">03.</span>{" "}
                    **Foundries**: 10mm – 50mm for casting and heat maintenance.
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fadeRight" className="space-y-8">
              <div className="bg-gray-50 p-10 group hover:bg-navy hover:text-white transition-all duration-500 border-b-4 border-wine h-full">
                <div className="mb-8">
                  <Icons.Zap />
                </div>
                <h3 className="text-3xl font-black uppercase italic mb-6">
                  Specialty Uses
                </h3>
                <ul className="space-y-4">
                  <li className="text-sm font-medium opacity-70 flex gap-3">
                    <span className="text-wine font-black">01.</span> **Water
                    Filtration**: Fine powder used in filtration systems for
                    impurity absorption.
                  </li>
                  <li className="text-sm font-medium opacity-70 flex gap-3">
                    <span className="text-wine font-black">02.</span> **Silicon
                    Metal**: High-grade lumps for silicon extraction processes.
                  </li>
                  <li className="text-sm font-medium opacity-70 flex gap-3">
                    <span className="text-wine font-black">03.</span>{" "}
                    **Briquette Mixing**: Fines (0-25mm) used for creating
                    composite fuels.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🌳 Wood Source Highlights */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft" className="grid grid-cols-2 gap-4">
              <img
                src={img1}
                alt="Babool"
                className="w-full h-48 object-cover shadow-lg"
              />
              <img
                src={img4}
                alt="Sal"
                className="w-full h-48 object-cover shadow-lg mt-8"
              />
              <img
                src={img5}
                alt="Teak"
                className="w-full h-48 object-cover shadow-lg -mt-8"
              />
              <img
                src={img8}
                alt="Khejri"
                className="w-full h-48 object-cover shadow-lg"
              />
            </Reveal>

            <Reveal variant="fadeRight">
              <h2 className="text-5xl font-black text-navy uppercase italic mb-8">
                Premium <span className="text-wine">Wood Sources</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    name: "Babool / Acacia",
                    desc: "Best industrial grade with highest density and longest burning time.",
                  },
                  {
                    name: "Khejri",
                    desc: "Premium Rajasthan variety known for low ash and high fixed carbon.",
                  },
                  {
                    name: "Neem & Sal",
                    desc: "Versatile woods providing consistent lumps with minimal fines.",
                  },
                  {
                    name: "Teak & Eucalyptus",
                    desc: "Fast-burning, high-temperature sources for specific furnace requirements.",
                  },
                ].map((wood, i) => (
                  <div
                    key={i}
                    className="flex gap-6 items-start border-l-2 border-wine pl-6"
                  >
                    <div>
                      <h5 className="font-black text-navy uppercase text-sm tracking-widest">
                        {wood.name}
                      </h5>
                      <p className="text-gray-400 text-xs font-bold italic">
                        {wood.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🖼️ Visual Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal className="mb-16">
            <h2 className="text-5xl font-black text-navy uppercase italic">
              Product <span className="text-wine">Gallery</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {galleryImages.map((img, i) => (
              <Reveal key={i} variant="zoomIn" delay={i * 100}>
                <div
                  className="aspect-square overflow-hidden cursor-pointer group relative"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Gallery ${i}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-wine/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-black uppercase text-[10px] tracking-widest border border-white px-4 py-2">
                      View Full
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 🎥 Video Showcase */}
          <Reveal className="mb-16">
            <h2 className="text-5xl font-black text-navy uppercase italic">
              Video <span className="text-wine">Showcase</span>
            </h2>
            <div className="w-24 h-1.5 bg-wine mx-auto rounded-full mt-6"></div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {galleryVideos.map((vid, i) => (
              <Reveal key={i} variant="fadeUp" delay={i * 100}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border-b-8 border-navy bg-black group relative aspect-[9/16] md:aspect-video flex items-center justify-center">
                  <video
                    src={vid}
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🌏 Market Reach */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
            <Reveal variant="fadeLeft">
              <h2 className="text-5xl font-black uppercase italic leading-none">
                Regional <span className="text-wine">Market Strength</span>
              </h2>
            </Reveal>
            <Reveal variant="fadeRight">
              <p className="text-white/40 font-black uppercase tracking-widest text-[10px] max-w-sm text-right">
                Supplying to major industrial hubs across the subcontinent with
                optimized logistics.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              "Rajasthan",
              "Maharashtra",
              "Gujarat",
              "Chhattisgarh",
              "Odisha",
            ].map((state, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                className="p-8 border border-white/10 hover:border-wine transition-all group"
              >
                <span className="text-wine font-black text-xl mb-4 block group-hover:scale-125 transition-transform">
                  {state}
                </span>
                <div className="w-8 h-1 bg-white/20"></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Frequently Asked Questions ───────────────────────────────────── */}
      <section className="py-32 bg-[#fcfdfe] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal variant="fadeUp" className="mb-20 text-center">
            <h3 className="text-4xl md:text-5xl font-black text-navy uppercase italic">
              Frequently Asked <span className="text-wine">Questions</span>
            </h3>
            <p className="text-gray-400 font-black uppercase tracking-widest text-[10px] mt-4">
              Industrial Supply & Technical Clarifications
            </p>
          </Reveal>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 100}>
                <div
                  className={`bg-white border transition-all duration-500 rounded-2xl overflow-hidden ${
                    activeFaq === idx
                      ? "border-wine shadow-2xl shadow-wine/5 ring-1 ring-wine/5"
                      : "border-gray-100 shadow-sm hover:border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full px-8 py-7 text-left flex justify-between items-center group"
                  >
                    <span
                      className={`font-black uppercase text-xs md:text-sm transition-colors duration-300 tracking-widest ${
                        activeFaq === idx
                          ? "text-wine"
                          : "text-navy group-hover:text-wine"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ml-4 ${
                        activeFaq === idx
                          ? "bg-wine text-white rotate-180"
                          : "bg-gray-50 text-navy"
                      }`}
                    >
                      <Icons.Chevron className="w-5 h-5" />
                    </div>
                  </button>
                  <div
                    className={`px-8 transition-all duration-500 ease-in-out overflow-hidden ${
                      activeFaq === idx
                        ? "max-h-[500px] pb-8 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-6 border-t border-gray-50">
                      <p className="text-gray-600 text-sm font-medium leading-relaxed italic">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🏁 Call to Action */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy skew-x-12 translate-x-32 hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeLeft">
              <h2 className="text-6xl font-black text-navy uppercase italic tracking-tighter leading-none mb-8">
                Ready For <span className="text-wine">Bulk Supply?</span>
              </h2>
              <p className="text-gray-500 font-medium italic text-lg mb-12">
                Whether it's High-Carbon Lumps for Ferro Alloys or Standard
                Foundry Grade, Ochnology ensures consistent quality and timely
                dispatch.
              </p>
            </Reveal>
            <Reveal variant="zoomIn" className="flex flex-col gap-6">
              <Link
                to="/rfq"
                className="bg-wine text-white px-12 py-6 text-sm font-black uppercase tracking-widest hover:bg-navy transition-all shadow-2xl flex items-center justify-center gap-4"
              >
                <Icons.Zap /> Request A Quote
              </Link>
              <a
                href="https://wa.me/919258720699"
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 border-white text-white px-12 py-[22px] text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all text-center"
              >
                Contact via WhatsApp
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-navy/95 flex items-center justify-center p-6 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-10 right-10 text-white font-black uppercase text-xs tracking-widest border border-white/20 px-6 py-3 hover:bg-wine hover:border-wine transition-all">
            Close
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain shadow-2xl border-4 border-white/10"
          />
        </div>
      )}
    </div>
  );
};

export default HardwoodCharcoal;
