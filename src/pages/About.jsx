import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import { Card } from "../components/ui/card.jsx";

// ── Asset Imports ───────────────────────────────────────────────────────────
import micaImg from "../assets/mica-gallery-1.png";
import bauxiteImg from "../assets/calcined.jpeg";
import wollastoniteImg from "../assets/wollastonite-gallery-1.png";

// About Us Specific Assets
import img1 from "../assets/aboutus/WhatsApp Image 2026-04-30 at 3.32.09 PM.jpeg";
import img2 from "../assets/aboutus/WhatsApp Image 2026-04-30 at 3.32.10 PM.jpeg";
import img3 from "../assets/aboutus/WhatsApp Image 2026-04-30 at 3.32.42 PM.jpeg";
import img4 from "../assets/aboutus/WhatsApp Image 2026-04-30 at 3.33.47 PM.jpeg";
import img5 from "../assets/aboutus/WhatsApp Image 2026-04-30 at 3.33.48 PM (2).jpeg";
import img6 from "../assets/aboutus/WhatsApp Image 2026-04-30 at 3.35.26 PM.jpeg";
import img7 from "../assets/aboutus/WhatsApp Image 2026-04-30 at 3.36.16 PM.jpeg";
import img8 from "../assets/aboutus/WhatsApp Image 2026-04-30 at 3.36.27 PM.jpeg";

import vid1 from "../assets/aboutus/WhatsApp Video 2026-04-30 at 3.34.56 PM.mp4";
import vid2 from "../assets/aboutus/WhatsApp Video 2026-04-30 at 3.36.16 PM.mp4";
import vid3 from "../assets/aboutus/WhatsApp Video 2026-04-30 at 3.36.26 PM.mp4";

// ── Icons ──────────────────────────────────────────────────────────────────
const LucideIcons = {
  ArrowUpRight: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  ),
  Globe: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  ShieldCheck: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  ),
  Award: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6"></circle>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
    </svg>
  ),
  BarChart3: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18"></path>
      <path d="M18 17V9"></path>
      <path d="M13 17V5"></path>
      <path d="M8 17v-3"></path>
    </svg>
  ),
  LinkedIn: () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const variants = {
    fadeUp: visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
    zoomIn: visible ? "scale-100 opacity-100" : "scale-95 opacity-0",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${variants[variant]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ── Video Modal Component ───────────────────────────────────────────────────
const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10 transition-all duration-500 animate-in fade-in"
      onClick={onClose}
    >
      <button
        className="absolute top-10 right-10 text-white hover:text-[#bd1156] transition-colors z-[110]"
        onClick={onClose}
      >
        <svg
          className="w-10 h-10"
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
      <div
        className="relative w-full max-w-6xl aspect-video bg-black shadow-2xl rounded-2xl overflow-hidden scale-in-center animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

const About = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideo = (src) => {
    setSelectedVideo(src);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-[#002d52] font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* ── Section 1: Hero Banner ────────────────────────────────────────── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={vid3} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#002d52]/60 backdrop-blur-[2px] z-10"></div>
        <div className="relative z-20 text-center px-6">
          <Reveal delay={200}>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter italic">
              Legacy of <span className="text-[#88204a]">Excellence</span>
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              Ochnology Solution Pvt Ltd: Empowering global industries through
              precision sourcing and reliable material logistics.
            </p>
          </Reveal>
          <Reveal delay={600} className="flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="px-10 py-5 bg-[#bd1156] text-white font-black uppercase tracking-widest hover:bg-white hover:text-[#002d52] transition-all"
            >
              Request Quote
            </Link>
            <Link
              to="/products"
              className="px-10 py-5 border-2 border-white text-white font-black uppercase tracking-widest hover:bg-white hover:text-[#002d52] transition-all"
            >
              Our Products
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Section 2: Trust / Stats Strip ────────────────────────────────── */}
      <section className="bg-[#002d52] py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { n: "15+", l: "Years Experience" },
            { n: "40+", l: "Countries Served" },
            { n: "10k+", l: "Metric Tons Exported" },
            { n: "500+", l: "Business Partners" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <h3 className="text-4xl font-black text-white mb-2">{s.n}</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-[#bd1156] font-black">
                {s.l}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Section 3: Our Story ─────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal variant="fadeUp">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1 bg-[#bd1156]/10 text-[#bd1156] font-black text-[10px] uppercase tracking-widest">
                Our Narrative
              </span>
              <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-tight">
                Building a <span className="text-[#bd1156]">Global</span> Supply
                Chain
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                Ochnology Solution Private Limited is a global sourcing and
                export company delivering reliable, high-quality products in
                Agro Commodities, Chemicals, Industrial Materials, and Steel &
                Refractory Solutions.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                Backed by strong, long-term partnerships with manufacturers
                across India, we work closely with both clients and producers to
                fulfil customized requirements with precision and
                accountability.
              </p>
              <div className="pt-6">
                <img
                  src={img4}
                  alt="Quality Assurance"
                  className="w-full h-72 object-cover rounded-[2rem] shadow-2xl"
                />
              </div>
            </div>
          </Reveal>
          <Reveal variant="zoomIn" delay={300}>
            <div
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,45,82,0.3)] group cursor-pointer"
              onClick={() => openVideo(vid1)}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src={vid1} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[#002d52]/20 group-hover:bg-[#002d52]/10 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 bg-[#bd1156] rounded-full flex items-center justify-center text-white shadow-2xl">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-xl border border-white/20">
                <p className="text-white font-black text-2xl uppercase italic leading-none">
                  Direct from <br />
                  <span className="text-[#bd1156]">Source</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Section 4: Materials We Export ───────────────────────────────── */}
      <section className="py-24 bg-[#002d52] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#bd1156]/5 -skew-x-12 translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter italic mb-4">
              Prime <span className="text-[#bd1156]">Materials</span>
            </h2>
            <div className="w-24 h-1 bg-[#bd1156] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Silica Fume",
                desc: "Ultra-fine pozzolanic material for high-performance concrete.",
                link: "/silica-fume",
                img: "https://images.unsplash.com/photo-1750639096812-6f2b5e6c024b?q=80&w=500",
              },
              {
                name: "Feldspar",
                desc: "Premium Potash and Soda grades for ceramics and glass.",
                link: "/feldspar",
                img: "https://tiimg.tistatic.com/fp/1/008/152/a-grade-solid-reddish-potash-feldspar-lumps-for-ceramic-industry-259.jpg",
              },
              {
                name: "Calcined Bauxite",
                desc: "High-alumina refractory material for extreme heat resistance.",
                link: "/bauxite",
                img: bauxiteImg,
              },
              {
                name: "Barytes",
                desc: "API 13A grade weighting material for drilling fluids.",
                link: "/barytes",
                img: "https://5.imimg.com/data5/SELLER/Default/2024/6/426933212/AE/FK/IK/149367220/white-baryte-lump-500x500.jpg",
              },
              {
                name: "Mica",
                desc: "Natural and synthetic flakes for insulation and cosmetics.",
                link: "/mica",
                img: micaImg,
              },
              {
                name: "Wollastonite",
                desc: "High aspect ratio mineral for plastics and coatings.",
                link: "/wollastonite",
                img: wollastoniteImg,
              },
            ].map((material, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <Card className="group h-full bg-white border-none shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={material.img}
                      alt={material.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#002d52]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <Link
                        to={material.link}
                        className="p-4 bg-[#bd1156] text-white rounded-full translate-y-10 group-hover:translate-y-0 transition-transform duration-500"
                      >
                        <LucideIcons.ArrowUpRight className="w-6 h-6" />
                      </Link>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black text-[#002d52] uppercase italic mb-4 tracking-tight">
                      {material.name}
                    </h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                      {material.desc}
                    </p>
                    <Link
                      to={material.link}
                      className="inline-flex items-center gap-3 text-[#bd1156] font-black uppercase tracking-widest text-[10px] group/btn"
                    >
                      Explore Specs{" "}
                      <div className="w-8 h-[2px] bg-[#bd1156] group-hover/btn:w-12 transition-all"></div>
                    </Link>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Value Proposition ─────────────────────────────────── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeUp" className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <img
                    src={img1}
                    alt="Operations"
                    className="w-full h-80 object-cover rounded-[2rem] shadow-xl"
                  />
                  <div className="bg-[#bd1156] p-10 rounded-[2rem] text-white">
                    <h4 className="text-4xl font-black italic mb-2">100%</h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                      Quality Compliance
                    </p>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-[#002d52] p-10 rounded-[2rem] text-white">
                    <h4 className="text-4xl font-black italic mb-2">24/7</h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                      Logistics Support
                    </p>
                  </div>
                  <img
                    src={img2}
                    alt="Sourcing"
                    className="w-full h-80 object-cover rounded-[2rem] shadow-xl"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeUp" className="order-1 lg:order-2">
              <div className="space-y-10">
                <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none">
                  Why Industry Leaders <br />
                  <span className="text-[#bd1156]">Choose Ochnology</span>
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      t: "Technical Clarity",
                      d: "We serve manufacturers who need consistent, certified supplies and technical clarity—not just a product quote.",
                    },
                    {
                      t: "Manufacturer Sourcing",
                      d: "Identifying and on-boarding manufacturers based on client-specific technical needs and compliance.",
                    },
                    {
                      t: "Custom Documentation",
                      d: "Coordinating third-party lab testing, packaging customization, and tailored export documentation.",
                    },
                    {
                      t: "Risk Reduction",
                      d: "Offering flexible MOQ options and consolidated shipments to reduce client supply chain risk.",
                    },
                  ].map((prop, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-12 h-12 shrink-0 bg-[#002d52] flex items-center justify-center text-white font-black group-hover:bg-[#bd1156] transition-colors">
                        0{i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-black uppercase italic mb-2">
                          {prop.t}
                        </h4>
                        <p className="text-gray-500 font-light leading-relaxed">
                          {prop.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Section 6: Our Operations ────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">
              Ground <span className="text-[#bd1156]">Operations</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Real-time snapshots from our processing centers and logistics hubs
              across India.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal variant="zoomIn" delay={100}>
              <div className="h-[400px] rounded-[2rem] overflow-hidden shadow-xl group">
                <img
                  src={img5}
                  alt="Operations 1"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={200}>
              <div
                className="h-[400px] rounded-[2rem] overflow-hidden shadow-xl group cursor-pointer relative"
                onClick={() => openVideo(vid2)}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  <source src={vid2} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-[#bd1156] rounded-full flex items-center justify-center text-white shadow-2xl">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={300}>
              <div className="h-[400px] rounded-[2rem] overflow-hidden shadow-xl group">
                <img
                  src={img6}
                  alt="Operations 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Section 7: Meet Our Team ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <Reveal>
              <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none">
                Architects of <br />
                <span className="text-[#bd1156]">Global Supply</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-gray-500 max-w-md font-light leading-relaxed">
                Our leadership brings decades of collective experience in
                mineralogy, international trade law, and complex logistics
                management.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sourcing Division",
                role: "Material Experts",
                img: img7,
              },
              {
                name: "Logistics Team",
                role: "Global Coordinators",
                img: img3,
              },
              { name: "Warehouse", role: "Inventory Hub", img: img8 },
            ].map((member, i) => (
              <Reveal key={i} delay={i * 100} variant="fadeUp">
                <div className="group relative h-[450px] bg-[#002d52] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#002d52] via-[#002d52]/80 to-transparent translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-white text-2xl font-black uppercase italic tracking-tighter mb-1">
                      {member.name}
                    </h4>
                    <p className="text-[#bd1156] text-[10px] font-black uppercase tracking-widest">
                      {member.role}
                    </p>
                    <div className="mt-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                      <LucideIcons.LinkedIn />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: Our Vision ────────────────────────────────────────── */}
      <section className="py-32 bg-[#002d52] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 flex items-center justify-center">
          <LucideIcons.Globe className="w-[800px] h-[800px] text-white animate-spin-slow" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-12">
              Driven by <span className="text-[#bd1156]">Accountability</span>
            </h2>
            <p className="text-white/60 text-xl font-light leading-relaxed italic">
              "To be the most trusted link in the global industrial chain, where
              every gram of material delivered is a testament to our commitment
              to precision, safety, and transparency."
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Section 9: Global Reach ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal className="mb-20">
            <h2 className="text-4xl font-black mb-10 uppercase tracking-tighter italic">
              Global <span className="text-[#bd1156]">Reach</span>
            </h2>
            <div className="relative max-w-5xl mx-auto aspect-video bg-[#002d52]/5 rounded-[3rem] border border-gray-100 flex items-center justify-center overflow-hidden group shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=2070&auto=format&fit=crop"
                alt="World Map"
                className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 opacity-20 hover:opacity-100 transition-opacity duration-1000">
            <span className="font-black text-[10px] uppercase tracking-widest">
              SCABAL INDIA
            </span>
            <span className="font-black text-[10px] uppercase tracking-widest">
              DYNAMIC EXIM
            </span>
            <span className="font-black text-[10px] uppercase tracking-widest">
              GLOBAL SOURCE
            </span>
            <span className="font-black text-[10px] uppercase tracking-widest">
              HENAN QINGJIANG
            </span>
            <span className="font-black text-[10px] uppercase tracking-widest">
              SINO MINERALS
            </span>
            <span className="font-black text-[10px] uppercase tracking-widest">
              OCHNOLOGY TRADING
            </span>
          </div>
        </div>
      </section>

      {/* ── Section 10: Partnerships / Accreditations ────────────────────── */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <Reveal>
            <div className="p-12 bg-white shadow-xl rounded-[2rem] h-full border border-gray-100 group">
              <LucideIcons.ShieldCheck className="w-12 h-12 text-[#bd1156] mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-black uppercase italic mb-4">
                Certified Sourcing
              </h4>
              <p className="text-gray-500 font-light leading-relaxed">
                All manufacturers are audited for environmental compliance and
                material consistency.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="p-12 bg-white shadow-xl rounded-[2rem] h-full border border-gray-100 group">
              <LucideIcons.Award className="w-12 h-12 text-[#bd1156] mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-black uppercase italic mb-4">
                ISO Standards
              </h4>
              <p className="text-gray-500 font-light leading-relaxed">
                We strictly adhere to ISO 9001:2015 protocols for all quality
                management systems.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="p-12 bg-white shadow-xl rounded-[2rem] h-full border border-gray-100 group">
              <LucideIcons.BarChart3 className="w-12 h-12 text-[#bd1156] mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-black uppercase italic mb-4">
                Market Analytics
              </h4>
              <p className="text-gray-500 font-light leading-relaxed">
                Real-time supply chain monitoring helps us provide competitive
                pricing across bulk orders.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Section 11: Call to Action ──────────────────────────────────── */}
      <section className="py-32 bg-[#bd1156] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full border-[100px] border-white -rotate-12 scale-150"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-10">
              Ready to <br />
              Collaborate?
            </h2>
            <p className="text-white/80 text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the Ochnology advantage. Let our sourcing experts
              streamline your industrial supply chain today.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link
                to="/contact"
                className="px-12 py-6 bg-white text-[#bd1156] font-black uppercase tracking-widest hover:bg-[#002d52] hover:text-white transition-all shadow-2xl"
              >
                Start RFQ Process
              </Link>
              <a
                href="https://wa.me/919258720699"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 border-2 border-white text-white font-black uppercase tracking-widest hover:bg-white hover:text-[#bd1156] transition-all"
              >
                Whatsapp Direct
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <VideoModal
        isOpen={isModalOpen}
        onClose={closeVideo}
        videoSrc={selectedVideo}
      />
    </div>
  );
};

export default About;
