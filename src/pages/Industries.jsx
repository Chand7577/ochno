import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import { Card } from "../components/ui/card.jsx";
import { Button } from "../components/ui/button.jsx";

// ── Icons ──────────────────────────────────────────────────────────────────
const Icons = {
  Refractory: () => (
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  Steel: () => (
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  ),
  Paint: () => (
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    </svg>
  ),
  Soap: () => (
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  ),
  Glass: () => (
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  Mining: () => (
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
      />
    </svg>
  ),
  Check: () => (
    <svg
      className="w-5 h-5 text-wine"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const variants = {
    fadeUp: visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
    zoomIn: visible ? "scale-100 opacity-100" : "scale-95 opacity-0",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

const Industries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    {
      title: "Refractories",
      desc: "Supplying high-purity DBM, Fused Alumina, Bauxite, and Calcium Aluminate Cement for high-temperature furnace linings and structural stability in extreme conditions.",
      materials: [
        "Dead Burnt Magnesite",
        "Fused Alumina",
        "Calcined Bauxite",
        "Cement",
      ],
      icon: <Icons.Refractory />,
      color: "bg-orange-50",
    },
    {
      title: "Steel & Metallurgy",
      desc: "Critical raw materials including Carbon Raisers (GPC/CPC), Mill Scale, Pig Iron, and Ferro Alloys for deoxidation, alloying, and efficient smelting processes.",
      materials: ["Carbon Raiser", "Pig Iron", "Mill Scale", "Electrode Scrap"],
      icon: <Icons.Steel />,
      color: "bg-blue-50",
    },
    {
      title: "Paints & Coatings",
      desc: "Functional fillers and pigments like Kaolin, Talc, Titanium Dioxide, and Aluminium Paste for superior opacity, durability, and premium metallic finishes.",
      materials: [
        "Titanium Dioxide",
        "Aluminium Paste",
        "Kaolin Clay",
        "Talc Powder",
      ],
      icon: <Icons.Paint />,
      color: "bg-rose-50",
    },
    {
      title: "Soap, Detergent & Oleochemicals",
      desc: "Essential chemical precursors like Soda Ash, SLES, Fatty Acids, and Urea for surfactant production, cleaning formulations, and industrial oleochemical processing.",
      materials: ["Soda Ash", "SLES", "Fatty Acids", "Technical Urea"],
      icon: <Icons.Soap />,
      color: "bg-emerald-50",
    },
    {
      title: "Glass & Construction",
      desc: "High-silica sand, Limestone, Dolomite, and Silica Fume for strength, clarity, and chemical resistance in modern glass manufacturing and high-performance concrete.",
      materials: ["Silica Sand", "Limestone", "Dolomite", "Silica Fume"],
      icon: <Icons.Glass />,
      color: "bg-amber-50",
    },
    {
      title: "Mining & Minerals Processing",
      desc: "Specialized grinding media, chemical reagents, and flocculants designed for efficient ore extraction, mineral enrichment, and sustainable tailings management.",
      materials: ["Activated Carbon", "Bentonite", "Copper Slag", "Anthracite"],
      icon: <Icons.Mining />,
      color: "bg-slate-50",
    },
  ];

  return (
    <div className="bg-[#fcfdfc] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative pt-32 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-wine/10 -skew-x-12 translate-x-32"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal variant="fadeUp">
            <nav className="flex items-center text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-8">
              <Link to="/" className="hover:text-wine transition-colors">
                Home
              </Link>
              <span className="mx-4">/</span>
              <span className="text-white">Industries We Serve</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Powering Global <br />
              <span className="text-wine">Industrial Value Chains.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl font-light leading-relaxed border-l-2 border-wine/30 pl-8">
              At Ochnology Solutions, we don't just supply materials; we
              engineer supply chain stability for the world's most demanding
              industrial sectors. From deep-earth minerals to high-tech chemical
              precursors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 🏗️ Industries Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {industries.map((ind, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <Card className="group h-full border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-[3rem] overflow-hidden flex flex-col relative border-b-4 border-transparent hover:border-wine">
                  <div
                    className={`p-10 ${ind.color} transition-colors duration-500 group-hover:bg-white`}
                  >
                    <div className="p-5 bg-white rounded-2xl w-fit shadow-lg text-wine group-hover:bg-wine group-hover:text-white transition-all duration-500 mb-8">
                      {ind.icon}
                    </div>
                    <h3 className="text-2xl font-black text-navy uppercase tracking-tight mb-4 group-hover:text-wine transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="p-10 pt-0 bg-white mt-auto">
                    <div className="pt-8 border-t border-gray-100">
                      <span className="text-[10px] font-black text-navy/40 uppercase tracking-widest block mb-6">
                        Key Supply Assets
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {ind.materials.map((m, j) => (
                          <span
                            key={j}
                            className="text-[9px] font-black bg-gray-50 text-navy/60 px-3 py-1.5 rounded-full uppercase tracking-wider group-hover:bg-wine/5 group-hover:text-wine transition-colors"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                    <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center text-white shadow-lg">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Value Proposition */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal variant="fadeUp">
            <span className="text-wine font-black uppercase tracking-[0.3em] text-xs mb-6 block">
              Supply Chain Intelligence
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-navy uppercase tracking-tighter leading-none mb-10">
              Reliability is <br />
              <span className="text-wine italic">Our Primary Export.</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  t: "Deep Domain Expertise",
                  d: "Technical consultation on material grades to optimize your production efficiency.",
                },
                {
                  t: "Logistics Agility",
                  d: "Seamless global transit through major Indian ports with full hazmat and customs support.",
                },
                {
                  t: "Quality Assurance",
                  d: "Strict COA/MSDS protocols with batch-specific testing from certified labs.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-wine/5 flex items-center justify-center shrink-0">
                    <Icons.Check />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-navy uppercase tracking-tight mb-2">
                      {item.t}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      {item.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal variant="zoomIn" delay={200}>
            <div className="relative">
              <div className="absolute -inset-10 bg-wine/5 rounded-[4rem] blur-3xl -z-10"></div>
              <img
                src="https://cpimg.tistatic.com/09163771/b/4/Industrial-Warehouse-Shed.jpg"
                alt="Industrial Supply Chain"
                className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 object-cover aspect-video"
              />
              <div className="absolute -bottom-10 -left-10 bg-navy p-10 rounded-[2.5rem] shadow-2xl border border-white/10 hidden md:block">
                <div className="text-wine font-black text-4xl mb-2 tracking-tighter">
                  40+
                </div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-tight">
                  Global Export <br /> Destinations
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🏁 Footer CTA */}
      <section className="py-32 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-10">
              Integrate Ochnology into <br />
              <span className="text-wine">Your Next Project.</span>
            </h2>
            <p className="text-white/40 text-lg mb-12 font-light max-w-2xl mx-auto">
              Our domain experts are ready to assist with material
              specifications, batch testing reports, and competitive logistics
              pricing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq">
                <Button
                  variant="wine"
                  className="px-12 py-8 text-sm font-black uppercase tracking-widest shadow-[0_20px_50px_rgba(155,30,71,0.3)]"
                >
                  Get Global Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="px-12 py-8 text-sm font-black uppercase tracking-widest text-white border-white/20 hover:bg-white hover:text-navy"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Industries;
