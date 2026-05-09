import React, { useEffect } from "react";
import Preloader from "../components/Preloader.jsx";

// Images
import mica1 from "../assets/mica-gallery-1.jpg";
import bauxite from "../assets/images/products/calcined-bauxite/image_3.jpg";
import wollastonite from "../assets/wollastonite-gallery-3.jpeg";
import dol1 from "../assets/dol-1 (1).jpeg";
import fluorspar from "../assets/fluorspar.jpeg";
import limestone from "../assets/limestone.jpeg";
import refractory from "../assets/hero-refactory.jpeg";
import s1 from "../assets/s-1.jpeg";

import urea from "../assets/urea/techical grade urea.jpeg";
import fattyAcids from "../assets/fatty acids/coconut-fatty-acid-godrej-500x500.webp";
import dolomiteVid1 from "../assets/dolomite.mp4";

const cenospheresImg =
  "https://5.imimg.com/data5/SELLER/Default/2024/7/438799829/DZ/II/NF/161492395/cast-iron-powder.jpg";

const categories = [
  {
    title: "Minerals & Ores",
    products: [
      { name: "Mica Flakes", img: mica1 },
      { name: "Calcined Bauxite", img: bauxite },
      { name: "Wollastonite Powder", img: wollastonite },
      { name: "Dolomite ", video: dolomiteVid1 },
      { name: "Fluorspar", img: fluorspar },
      { name: "Limestone", img: limestone },
    ],
  },
  {
    title: "Steel & Refractory",
    products: [
      { name: "Refractory Bricks", img: refractory },
      {
        name: "Silica Sand",
        img: "https://5.imimg.com/data5/ANDROID/Default/2025/3/494999850/JU/KQ/DW/35618867/product-jpeg.jpg",
      },
      { name: "Silica Fume", img: s1 },
    ],
  },
  {
    title: "Agro & Chemicals",
    products: [
      { name: "Technical Grade Urea", img: urea },
      { name: "Fatty Acids", img: fattyAcids },
      { name: "Cenospheres", img: cenospheresImg },
    ],
  },
];

const allProducts = categories.flatMap((c) => c.products);

const Glimpses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-navy font-sans pt-20">
      <Preloader />

      <style>{`
        @keyframes marqueeL {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeR {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-l {
          display: flex;
          width: 200%;
          animation: marqueeL 40s linear infinite;
        }
        .animate-marquee-l:hover {
          animation-play-state: paused;
        }
        .animate-marquee-r {
          display: flex;
          width: 200%;
          animation: marqueeR 40s linear infinite;
        }
        .animate-marquee-r:hover {
          animation-play-state: paused;
        }
        .masonry-grid {
          column-count: 1;
          column-gap: 2rem;
        }
        @media (min-width: 640px) { .masonry-grid { column-count: 2; } }
        @media (min-width: 1024px) { .masonry-grid { column-count: 3; } }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 2rem;
        }
      `}</style>

      {/* Hero Section */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wine opacity-20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-wine rounded-full translate-x-1/2 translate-y-1/2 blur-[100px] opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-6 py-2 bg-wine text-white rounded-none text-[10px] font-black tracking-[0.4em] uppercase mb-8 shadow-2xl">
            Industrial Gallery
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter italic leading-none">
            Product <span className="text-wine">Glimpses</span>
          </h1>
          <p className="text-white/60 text-lg md:text-2xl font-light italic max-w-3xl mx-auto">
            A visual journey through our premium materials, ores, and chemical
            solutions for global industries.
          </p>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-16 overflow-hidden bg-white border-b border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black uppercase italic text-navy tracking-widest">
            Visual <span className="text-wine">Showcase</span>
          </h2>
        </div>

        <div className="relative w-full overflow-hidden mb-6">
          <div className="animate-marquee-l gap-6">
            {[...allProducts, ...allProducts].map((p, i) => (
              <div
                key={i}
                className="w-72 h-48 shrink-0 relative group rounded-2xl overflow-hidden shadow-md border border-gray-100 mx-3"
              >
                {p.video ? (
                  <video
                    src={p.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-black uppercase text-sm tracking-widest text-center px-4">
                    {p.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-r gap-6">
            {[...allProducts, ...allProducts].reverse().map((p, i) => (
              <div
                key={i}
                className="w-72 h-48 shrink-0 relative group rounded-2xl overflow-hidden shadow-md border border-gray-100 mx-3"
              >
                {p.video ? (
                  <video
                    src={p.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-wine/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-black uppercase text-sm tracking-widest text-center px-4">
                    {p.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tree Category Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-navy uppercase italic tracking-tighter">
            Industry <span className="text-wine">Categories</span>
          </h2>
          <div className="w-24 h-2 bg-navy mx-auto mt-6"></div>
        </div>

        <div className="space-y-24 pl-4 md:pl-10 border-l-4 border-gray-200 ml-4 md:ml-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="relative">
              {/* Tree Branch Visuals */}
              <div className="absolute -left-[20px] md:-left-[44px] top-6 w-12 md:w-20 h-1 bg-wine"></div>
              <div className="absolute -left-[28px] md:-left-[52px] top-3 w-5 h-5 rounded-full bg-navy border-4 border-white shadow-md"></div>

              <h3 className="text-4xl md:text-5xl font-black uppercase italic text-navy mb-12 pl-8 md:pl-12">
                {cat.title}
              </h3>

              <div className="pl-8 md:pl-12">
                <div className="masonry-grid">
                  {cat.products.map((p, pIdx) => (
                    <div key={pIdx} className="masonry-item">
                      <div className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 group cursor-pointer h-full">
                        <div className="relative h-[300px] overflow-hidden">
                          {p.video ? (
                            <video
                              src={p.video}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          ) : (
                            <img
                              src={p.img}
                              alt={p.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                          <div className="absolute bottom-8 left-8 right-8">
                            <h4 className="text-2xl font-black text-white uppercase tracking-widest drop-shadow-md">
                              {p.name}
                            </h4>
                            <div className="w-12 h-1 bg-wine mt-4 group-hover:w-full transition-all duration-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-8">
            Explore <span className="text-wine">More</span>
          </h2>
          <p className="text-white/60 font-light text-lg mb-10">
            Contact us to request product samples or a detailed material
            catalogue.
          </p>
          <a
            href="https://wa.me/919258720699"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-wine text-white px-12 py-5 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-xl"
          >
            WhatsApp Inquiry
          </a>
        </div>
      </section>
    </div>
  );
};

export default Glimpses;
