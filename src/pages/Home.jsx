import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";

// ── Asset Imports ───────────────────────────────────────────────────────────
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

const StatCard = ({ end, suffix = "", text = "", label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const node = counterRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (!text) {
            setTimeout(() => {
              let start = null;
              const duration = 2000;
              const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                const easeOut = progress * (2 - progress);
                setCount(Math.floor(easeOut * end));
                if (progress < 1) window.requestAnimationFrame(step);
              };
              window.requestAnimationFrame(step);
            }, delay);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, text, delay]);

  return (
    <div
      ref={counterRef}
      className={`transform transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}
    >
      <p className="text-5xl font-black text-[#bd1156] mb-2 uppercase italic">
        {text ? text : `${count}${suffix}`}
      </p>
      <p className="text-gray-300 font-bold uppercase tracking-widest text-[10px]">
        {label}
      </p>
    </div>
  );
};

const Home = () => {
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

  return (
    <div className="bg-white min-h-screen text-[#002d52] font-sans overflow-x-hidden selection:bg-[#bd1156] selection:text-white">
      <Preloader />

      {/* ── 1. Hero Section ──────────────────────────────────────────────── */}
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
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter italic leading-none animate-in fade-in slide-in-from-bottom-10 duration-1000">
            Global Industrial <span className="text-[#bd1156]">Sourcing</span>{" "}
            Excellence
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Ochnology Solutions: Precision logistics and high-grade material
            supply chain for global manufacturing leaders.
          </p>
          <div className="flex flex-wrap justify-center gap-6 animate-in fade-in slide-in-from-bottom-14 duration-1000 delay-400">
            <Link
              to="/products"
              className="px-10 py-5 bg-[#bd1156] text-white font-black uppercase tracking-widest hover:bg-white hover:text-[#002d52] transition-all"
            >
              Explore Materials
            </Link>
            <Link
              to="/contact"
              className="px-10 py-5 border-2 border-white text-white font-black uppercase tracking-widest hover:bg-white hover:text-[#002d52] transition-all"
            >
              Request RFQ
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. Who We Are (Modern Bento) ─────────────────────────────────── */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Text Card */}
          <div className="lg:col-span-7 bg-gray-50 p-12 md:p-20 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col justify-center">
            <span className="inline-block px-4 py-1 bg-[#bd1156]/10 text-[#bd1156] font-black text-[10px] uppercase tracking-widest mb-8">
              Supply Chain Partner
            </span>
            <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-8 leading-tight">
              Reliable Supply Partner for <span className="text-[#bd1156]">Industrial Minerals</span> & Materials
            </h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed mb-8">
              Ochnology Solutions Pvt. Ltd. supports the sourcing and supply of
              industrial minerals and materials for buyers across India and
              international markets with a focus on consistent quality, bulk
              shipments and long-term partnerships.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[#002d52] flex items-center justify-center text-white rounded-lg">
                  <LucideIcons.ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black uppercase italic text-sm mb-1">
                    Quality First
                  </h4>
                  <p className="text-xs text-gray-500">
                    Rigorous third-party lab testing and certification.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[#002d52] flex items-center justify-center text-white rounded-lg">
                  <LucideIcons.Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black uppercase italic text-sm mb-1">
                    Global Scale
                  </h4>
                  <p className="text-xs text-gray-500">
                    Seamless logistics across 40+ countries.
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-[#bd1156] font-black uppercase tracking-widest text-[10px] group"
            >
              Our Full Story{" "}
              <div className="w-8 h-[2px] bg-[#bd1156] group-hover:w-12 transition-all"></div>
            </Link>
          </div>

          {/* Visual Bento Side */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-8">
            <div
              className="rounded-[3rem] overflow-hidden relative group cursor-pointer"
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
              <div className="absolute inset-0 bg-[#002d52]/30"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-[#bd1156] rounded-full flex items-center justify-center text-white shadow-2xl">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-xs font-black uppercase tracking-widest opacity-70">
                  Operations
                </p>
                <h3 className="text-2xl font-black uppercase italic leading-none">
                  Direct Sourcing
                </h3>
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden relative group">
              <img
                src={img3}
                alt="Logistics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002d52]/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-xs font-black uppercase tracking-widest opacity-70">
                  Logistics
                </p>
                <h3 className="text-2xl font-black uppercase italic leading-none">
                  Global Reach
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Core Divisions ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#002d52]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter italic mb-4">
              Industrial <span className="text-[#bd1156]">Divisions</span>
            </h2>
            <div className="w-24 h-1 bg-[#bd1156] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                t: "Steel & Refractory",
                d: "Carbon Raiser, Silica Fume, and high-alumina refractory solutions.",
                img: img2,
                link: "/silica-fume",
              },
              {
                t: "Chemical Solutions",
                d: "Titanium Dioxide, industrial reagents, and high-purity chemicals.",
                img: img1,
                link: "/titanium-dioxide",
              },
              {
                t: "Specialty Minerals",
                d: "Limestone, Quartz, Feldspar, and customized mineral processing.",
                img: img5,
                link: "/minerals",
              },
            ].map((div, i) => (
              <div
                key={i}
                className="group relative h-[500px] rounded-[3rem] overflow-hidden bg-navy"
              >
                <img
                  src={div.img}
                  alt={div.t}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002d52] via-[#002d52]/40 to-transparent p-12 flex flex-col justify-end">
                  <h3 className="text-3xl font-black text-white uppercase italic mb-4 leading-tight">
                    {div.t}
                  </h3>
                  <p className="text-white/60 font-light mb-8 group-hover:text-white transition-colors">
                    {div.d}
                  </p>
                  <Link
                    to={div.link}
                    className="w-12 h-12 bg-[#bd1156] flex items-center justify-center text-white rounded-full group-hover:scale-110 transition-transform"
                  >
                    <LucideIcons.ArrowUpRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Ground Operations ─────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div
                className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer relative"
                onClick={() => openVideo(vid2)}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                >
                  <source src={vid2} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#bd1156] rounded-full flex items-center justify-center text-white shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#bd1156] rounded-[2rem] p-8 text-white hidden md:flex flex-col justify-center">
                <h4 className="text-4xl font-black italic mb-1">100%</h4>
                <p className="text-[8px] font-bold uppercase tracking-widest opacity-60 leading-tight">
                  Authentic Operations
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1 bg-[#bd1156]/10 text-[#bd1156] font-black text-[10px] uppercase tracking-widest mb-8">
                Ground Reality
              </span>
              <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-8 leading-tight">
                A Transparent <br />
                <span className="text-[#bd1156]">Material Journey</span>
              </h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed mb-10">
                We bridge the gap between complex industrial needs and reliable
                manufacturing centers across India. Every shipment is a
                testament to our commitment to precision, safety, and
                accountability.
              </p>
              <div className="space-y-6">
                {[
                  {
                    t: "Certified Sourcing",
                    d: "Audited manufacturers and technical clarity.",
                  },
                  {
                    t: "Customized Packaging",
                    d: "Tailored solutions for safe international transport.",
                  },
                  {
                    t: "Real-time Tracking",
                    d: "24/7 logistics coordination and support.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-1.5 h-12 bg-gray-100 group-hover:bg-[#bd1156] transition-colors"></div>
                    <div>
                      <h4 className="font-black uppercase italic text-sm">
                        {item.t}
                      </h4>
                      <p className="text-xs text-gray-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Final Call to Action ──────────────────────────────────────── */}
      <section className="py-12 bg-[#bd1156] relative overflow-hidden mx-6 mb-12 rounded-[3rem]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full border-[100px] border-white -rotate-12 scale-150"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-10 leading-none">
            Scale Your <span className="text-[#002d52]">Industrial</span>{" "}
            Capacity
          </h2>
          <p className="text-white/80 text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to streamline your procurement? Connect with our sourcing
            experts for a comprehensive RFQ assessment.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              to="/contact"
              className="px-12 py-6 bg-white text-[#bd1156] font-black uppercase tracking-widest hover:bg-[#002d52] hover:text-white transition-all shadow-2xl"
            >
              Talk to Our Team
            </Link>
            <a
              href="https://wa.me/919258720699"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 border-2 border-white text-white font-black uppercase tracking-widest hover:bg-white hover:text-[#bd1156] transition-all"
            >
              Direct WhatsApp
            </a>
          </div>
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

export default Home;
