import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import Reveal from "../components/Reveal.jsx";

// Fatty Acid Assets
import thickenerImg from "../assets/fatty acids/acid-thickener.jpg";
import coconutImg from "../assets/fatty acids/coconut-fatty-acid-godrej-500x500.webp";
import fattyImg from "../assets/fatty acids/images.jfif";

// ── Icons ──────────────────────────────────────────────────────────────────
const Icons = {
  Truck: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0"
      />
    </svg>
  ),
  Globe: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 012.5 2.5V17m-9-15.5c0 1.25.75 2.5 2 3.5s3.5 1.5 4.5 3 1.5 3.5 2 5 1 2.5 2 3.5"
      />
    </svg>
  ),
  Beaker: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.82.551l-1.613 1.613a2 2 0 00-.586 1.414V20a2 2 0 002 2h15a2 2 0 002-2v-1.21a2 2 0 00-.586-1.414l-1.613-1.613z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 11V7a2 2 0 00-2-2h-.5a.5.5 0 01-.5-.5.5.5 0 00-1 0A1.5 1.5 0 018.5 6H9a1 1 0 011 1v4h1z"
      />
    </svg>
  ),
  Shield: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
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
  Check: () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M5 13l4 4L19 7"
      />
    </svg>
  ),
};

const FattyAcids = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState("pfad");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "What is PFAD and why is it used in soap manufacturing?",
      a: "PFAD contains 70–90% free fatty acids — primarily palmitic and oleic — which directly saponify with caustic soda to produce soap. It is the most cost-effective fatty acid feedstock for laundry soap and industrial soap production.",
    },
    {
      q: "What is the difference between TOFA Grade 1 and TOFA Grade 3?",
      a: "Grade 1 has ≤5% rosin acid and is used in premium applications like alkyd resins and dimer acids. Grade 3 has 20–25% rosin acid and is used in drilling fluids and construction chemicals.",
    },
    {
      q: "What is the difference between single, double and triple pressed stearic acid?",
      a: "The grades differ in C18:0 purity. Single pressed (~45%) is for rubber and candles; double (~90%) for plastics; triple (≥95%) for cosmetics and pharma requiring high purity.",
    },
    {
      q: "Can PFAD be used for biodiesel production?",
      a: "Yes. PFAD's high FFA content makes it ideal for acid-catalysed esterification into biodiesel (FAME). It is a low-cost feedstock for B5–B20 biodiesel blends.",
    },
    {
      q: "What is Rice Bran Fatty Acid and how is it different from PFAD?",
      a: "RBFA is an India-origin by-product rich in tocopherols and oryzanol. Unlike PFAD which India imports, RBFA is exported from India to global markets.",
    },
    {
      q: "What is the MOQ and sample lead time?",
      a: "MOQ is 1 MT for drum-packed grades (stearic, TOFA) and 20 MT for flexibag PFAD. Samples are dispatched within 3–5 days.",
    },
    {
      q: "What type of suppliers do we work with?",
      a: "We work with producers and export-ready suppliers for long-term supply to India.",
    },
    {
      q: "What payment terms do we prefer from our suppliers?",
      a: "We work with suppliers who can support OA / DA terms aligned with repeat business.",
    },
    {
      q: "Which countries can supply to us?",
      a: "We welcome suppliers from Russia, Finland, Malaysia, Indonesia and other origins.",
    },
  ];

  const products = [
    {
      id: "pfad",
      name: "PFAD",
      fullName: "Palm Fatty Acid Distillate",
      origin: "Malaysia / Indonesia",
      desc: "PFAD is a processing residue from the physical refining of crude palm oil. It contains 70–80% free fatty acids and is one of the most cost-effective fatty acid raw materials available.",
      specs: [
        { p: "Free Fatty Acid (FFA) %", v: "70–90% min" },
        { p: "Palmitic acid (C16:0) %", v: "40–48%" },
        { p: "Oleic acid (C18:1) %", v: "30–38%" },
        { p: "Iodine value", v: "45–55" },
        { p: "Saponification value", v: "195–210" },
        { p: "Moisture % max", v: "0.5%" },
      ],
      apps: [
        "Soap manufacturing (Laundry & Industrial)",
        "Biodiesel production (FAME feedstock)",
        "Animal feed energy supplement",
        "Oleochemical feedstock",
        "Lubricant & Candle manufacturing",
      ],
    },
    {
      id: "tofa",
      name: "TOFA",
      fullName: "Tall Oil Fatty Acid",
      origin: "Russia / Finland / USA",
      desc: "Tall Oil Fatty Acid (TOFA) is a low-cost unsaturated fatty acid sourced from crude tall oil. It features excellent esterification and emulsifying properties, vital for alkyd resins and lubricants.",
      specs: [
        { p: "Fatty acid content %", v: "≥95% (Grade 1)" },
        { p: "Rosin acid content %", v: "≤1–5% (Grade 1)" },
        { p: "Acid value", v: "190–200" },
        { p: "Saponification value", v: "192–202" },
        { p: "Iodine value", v: "130–145" },
        { p: "Origin", v: "Russia / Finland / Sweden" },
      ],
      apps: [
        "Alkyd resins for paints & coatings",
        "Dimer acids for adhesives & epoxies",
        "Lubricants & metalworking fluids",
        "Oil well drilling mud formulations",
        "Corrosion inhibitors",
      ],
    },
    {
      id: "stearic",
      name: "Stearic Acid",
      fullName: "Saturated Fatty Acid (C18:0)",
      origin: "Malaysia / Indonesia / India",
      desc: "Stearic acid is a white waxy solid derived from palm stearin or tallow. It is one of the most widely used fatty acids across rubber, plastics, and cosmetics industries.",
      specs: [
        { p: "Purity (C18:0) %", v: "93–97% (Triple Pressed)" },
        { p: "Acid value", v: "197–202" },
        { p: "Iodine value", v: "≤1.0" },
        { p: "Titre °C", v: "57–60" },
        { p: "Form", v: "White flakes / pastilles" },
        { p: "Primary use", v: "Cosmetics, Pharma, PVC" },
      ],
      apps: [
        "Rubber processing & vulcanisation",
        "PVC stabilisers & plastics lubricant",
        "Cosmetic emulsifier & Pharma excipient",
        "Textile softeners & Candles",
        "Metallic stearates production",
      ],
    },
    {
      id: "rbfa",
      name: "RBFA",
      fullName: "Rice Bran Fatty Acid",
      origin: "India (Export Oriented)",
      desc: "RBFA is recovered during the refining of crude rice bran oil. Rich in tocopherols (Vitamin E) and oryzanol, India is a leading net exporter of this versatile raw material.",
      specs: [
        { p: "Free Fatty Acid (FFA) %", v: "80–90% (Refined)" },
        { p: "Oleic acid (C18:1) %", v: "38–46%" },
        { p: "Linoleic acid (C18:2) %", v: "28–35%" },
        { p: "Vitamin E", v: "200–400 ppm" },
        { p: "Iodine value", v: "95–105" },
        { p: "Origin", v: "India (AP, UP, Punjab)" },
      ],
      apps: [
        "Soap & Detergent manufacturing",
        "Biodiesel (FAME feedstock)",
        "Antioxidant-rich Cosmetics",
        "Animal feed (Poultry & Cattle)",
        "Industrial bio-lubricants",
      ],
    },
    {
      id: "oleic",
      name: "Oleic Acid",
      fullName: "Monounsaturated Fatty Acid (C18:1)",
      origin: "Global Origins",
      desc: "Oleic acid is a monounsaturated fatty acid known for its excellent lubricity and liquid form at room temperature, used extensively in high-end surfactants and lubricants.",
      specs: [
        { p: "Chain", v: "C18:1" },
        { p: "Form", v: "Clear liquid" },
        { p: "Purity", v: "70%+" },
        { p: "Primary use", v: "Surfactants, Textiles" },
        { p: "Property", v: "Excellent lubricity" },
        { p: "Logistics", v: "Drums / IBC / ISO Tank" },
      ],
      apps: [
        "Industrial lubricants",
        "Cosmetic formulations",
        "Textile processing chemicals",
        "Anionic & nonionic surfactants",
        "Metalworking fluids",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* 🚀 Unique Matrix Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent z-10"></div>
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2025/5/507545735/DW/UL/DJ/221790948/tall-oil-fatty-acid.jpg"
            alt="Tall Oil Fatty Acid"
            className="w-full h-full object-cover opacity-60 scale-110 animate-slow-zoom"
          />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-wine/10 skew-x-[-12deg] translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-white/10"></div>
        </div>

        <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Reveal variant="fadeLeft">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-wine"></div>
                <span className="text-wine text-xs font-black uppercase tracking-[0.5em]">
                  Industrial Raw Materials
                </span>
              </div>
            </Reveal>
            <Reveal variant="fadeLeft" delay={200}>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter">
                Fatty <span className="text-wine italic">Acids</span>
              </h1>
            </Reveal>
            <Reveal variant="fadeLeft" delay={400}>
              <p className="text-white/60 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
                PFAD · TOFA · Stearic · Oleic · Rice Bran Fatty Acid. Premium
                oleochemicals imported and supplied to India's leading
                industries.
              </p>
            </Reveal>
            <Reveal variant="fadeLeft" delay={600}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/rfq"
                  className="bg-wine text-white px-10 py-5 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all"
                >
                  Get A Quote
                </Link>
                <Link
                  to="/contact"
                  className="border border-white/20 text-white px-10 py-5 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all"
                >
                  Offer Supply
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4 relative">
            <div className="space-y-4 pt-12">
              <Reveal
                variant="fadeUp"
                delay={800}
                className="bg-white/5 backdrop-blur-md p-8 border border-white/10 rounded-2xl"
              >
                <span className="text-wine font-black text-4xl block mb-2">
                  ≥185
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  TOFA Acid Value
                </span>
              </Reveal>
              <Reveal
                variant="fadeUp"
                delay={1000}
                className="bg-white p-8 border border-white/10 rounded-2xl"
              >
                <span className="text-navy font-black text-4xl block mb-2">
                  90%+
                </span>
                <span className="text-navy/40 text-[10px] font-bold uppercase tracking-widest">
                  Stearic Purity
                </span>
              </Reveal>
            </div>
            <div className="space-y-4">
              <Reveal
                variant="fadeUp"
                delay={900}
                className="bg-wine p-8 border border-white/10 rounded-2xl"
              >
                <span className="text-white font-black text-4xl block mb-2">
                  ≥70%
                </span>
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
                  PFAD FFA
                </span>
              </Reveal>
              <Reveal
                variant="fadeUp"
                delay={1100}
                className="bg-white/5 backdrop-blur-md p-8 border border-white/10 rounded-2xl"
              >
                <span className="text-white font-black text-4xl block mb-2">
                  ISO
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  Quality Certified
                </span>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Trust Strip removed to avoid confusion with footer */}
      </section>

      {/* ── Section 2: Industrial Overview ────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeRight">
              <h2 className="text-4xl md:text-5xl font-black text-navy uppercase italic leading-tight">
                The Foundation of <br />
                <span className="text-wine">Modern Chemistry</span>
              </h2>
            </Reveal>
            <Reveal variant="fadeLeft">
              <p className="text-gray-600 text-lg leading-relaxed">
                Fatty acids are long-chain carboxylic acids derived from natural
                fats and oils. They are among the most versatile raw materials,
                serving as the base for soaps, detergents, lubricants, paints,
                and cosmetics. India relies on specialty grades imported
                primarily from Malaysia, Indonesia, Russia, and Finland.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Section 3: Visual Showcase ────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h3 className="text-3xl font-black text-navy uppercase italic mb-4">
              Product <span className="text-wine">Gallery</span>
            </h3>
            <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-[10px]">
              Oleochemical & Industrial Feedstocks
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "https://5.imimg.com/data5/ANDROID/Default/2025/4/501239453/XZ/WO/LL/10613972/product-jpeg-250x250.jpg",
                title: "Industrial Fatty Acid",
                desc: "Grade 1 Export Quality",
              },
              {
                img: "https://5.imimg.com/data5/ANDROID/Default/2025/1/477765461/EC/WR/OK/10613972/product-jpeg-500x500.jpg",
                title: "Tall Oil Fatty Acid",
                desc: "Premium Russia/Finland Origin",
              },
              {
                img: thickenerImg,
                title: "Acid Thickener",
                desc: "Chemical viscosity regulator",
              },
            ].map((item, i) => (
              <Reveal key={i} variant="fadeUp" delay={i * 100}>
                <div className="group relative overflow-hidden bg-gray-50 rounded-2xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
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

      {/* ── Section 4-7: Product Explorer (Tabs) ────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-100 pb-4">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === p.id
                    ? "bg-navy text-white shadow-xl shadow-navy/20"
                    : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {products
            .filter((p) => p.id === activeTab)
            .map((p) => (
              <div
                key={p.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 animate-in fade-in duration-700"
              >
                <div className="lg:col-span-4 space-y-8">
                  <div className="bg-gray-50 p-12 border-l-4 border-wine rounded-r-3xl">
                    <span className="text-wine font-black text-xs uppercase tracking-widest mb-4 block">
                      {p.fullName}
                    </span>
                    <h3 className="text-4xl font-black text-navy uppercase mb-6 leading-none italic">
                      {p.name}
                    </h3>
                    <p className="text-gray-500 font-medium leading-relaxed">
                      {p.desc}
                    </p>
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <p className="text-navy font-black text-xs uppercase mb-2">
                        Primary Origin
                      </p>
                      <p className="text-wine font-bold">{p.origin}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-navy font-black text-[10px] uppercase tracking-widest border-b border-gray-100 pb-2">
                      Key Applications
                    </p>
                    <ul className="space-y-3">
                      {p.apps.map((app, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-sm font-bold text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 bg-wine rounded-full"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="bg-navy rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <h4 className="text-white font-black uppercase text-xl mb-12 flex items-center gap-4">
                      <Icons.Beaker />
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {p.specs.map((s, i) => (
                        <div key={i} className="border-b border-white/10 pb-4">
                          <p className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-1">
                            {s.p}
                          </p>
                          <p className="text-white font-bold text-lg">{s.v}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-16 flex flex-col md:flex-row gap-8 items-center justify-between">
                      <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
                        * Variations available based on origin and refined grade
                      </div>
                      <Link
                        to="/rfq"
                        className="bg-wine text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all"
                      >
                        Download Datasheet
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* ── Section 6: Specialty Fatty Acids ──────────────────────────────── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-16 text-center">
            <h3 className="text-3xl font-black text-navy uppercase italic">
              Specialty <span className="text-wine">Fractions</span>
            </h3>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-2">
              Niche oleochemicals for specific industrial needs
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                t: "Lauric Acid (C12:0)",
                p: "High lather, C12 saturated",
                u: "Detergents, Shampoos, Toothpaste",
              },
              {
                t: "Myristic Acid (C14:0)",
                p: "Excellent emulsifier, C14 saturated",
                u: "Cosmetics, Personal Care",
              },
              {
                t: "Linoleic Acid (C18:2)",
                p: "Fast drying, C18 polyunsaturated",
                u: "Premium Alkyd Resins, Coatings",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="p-8 bg-gray-50 border border-gray-100 hover:border-wine transition-all group"
              >
                <h4 className="text-navy font-black uppercase text-sm mb-4 group-hover:text-wine">
                  {s.t}
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400 font-bold uppercase">
                      Property
                    </span>
                    <span className="text-navy font-bold">{s.p}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400 font-bold uppercase">
                      Primary Use
                    </span>
                    <span className="text-wine font-bold">{s.u}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: Market Reach ───────────────────────────────────────── */}
      <section className="py-32 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wine/10 rounded-full blur-[120px] -translate-y-1/2"></div>

          <Reveal className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
              Industry <span className="text-wine">Footprint</span>
            </h2>
            <p className="text-white/40 font-bold uppercase tracking-widest text-xs mt-4">
              Who in India buys industrial fatty acids
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              {
                t: "Soap Manufacturing",
                d: "Largest PFAD buyers in Gujarat, Maharashtra & UP. Sourcing vegan tallow alternatives.",
              },
              {
                t: "Paints & Resins",
                d: "5,000+ manufacturers buying TOFA for alkyd resin synthesis.",
              },
              {
                t: "Rubber & Tyre",
                d: "Stearic acid and TOFA for vulcanisation and processing aids in Chennai & Pune.",
              },
              {
                t: "Lubricants",
                d: "Oleic acid & TOFA for bio-lubricant bases and metalworking fluids.",
              },
              {
                t: "Drilling Chemicals",
                d: "TOFA Grade 3 for oil well drilling mud and corrosion inhibitors in Gujarat.",
              },
              {
                t: "Biodiesel Producers",
                d: "PFAD and RBFA as low-cost feedstock for B5-B20 blends.",
              },
              {
                t: "Animal Feed",
                d: "Energy supplements for poultry and cattle in AP & Telangana clusters.",
              },
              {
                t: "Cosmetics",
                d: "Triple pressed stearic, oleic and lauric acids for premium personal care.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-900 p-10 hover:bg-navy transition-colors duration-500"
              >
                <h4 className="text-wine font-black uppercase text-sm mb-4">
                  {item.t}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8 & 9: Global Sourcing ──────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <Reveal variant="fadeRight">
              <div className="space-y-8">
                <h2 className="text-4xl font-black text-navy uppercase italic leading-[0.9]">
                  Why Buy From <br />
                  <span className="text-wine">Ochnology?</span>
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      t: "Fixed Origin Consistency",
                      d: "Malaysia/Indonesia for PFAD, Russia/Finland for TOFA. No origin blending.",
                    },
                    {
                      t: "Full Technical Support",
                      d: "MSDS, TDS, and COA provided with every lot. RSPO certification available.",
                    },
                    {
                      t: "Local Supply Chain",
                      d: "Ex-stock at JNPT/Mundra for standard grades with competitive CIF/DAP pricing.",
                    },
                    {
                      t: "Rapid Sampling",
                      d: "Samples dispatched within 3-5 days to your R&D lab for testing.",
                    },
                  ].map((f, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0 text-wine">
                        <Icons.Check />
                      </div>
                      <div>
                        <h4 className="font-black text-navy uppercase text-xs mb-1">
                          {f.t}
                        </h4>
                        <p className="text-gray-500 text-sm">{f.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal
              variant="fadeLeft"
              className="bg-navy p-12 rounded-[3rem] text-white shadow-3xl"
            >
              <h3 className="text-3xl font-black uppercase italic mb-8">
                Foreign <span className="text-wine">Suppliers</span>
              </h3>
              <p className="text-white/60 mb-10 font-medium leading-relaxed">
                India's industries are growing rapidly. If you produce PFAD,
                TOFA, or Stearic acid and seek a stable Indian buyer, we provide
                a reliable, long-term partnership.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 text-sm font-bold">
                  <div className="w-2 h-2 bg-wine rounded-full"></div>
                  <span>Credit-based flexible terms (DA / OA)</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-bold">
                  <div className="w-2 h-2 bg-wine rounded-full"></div>
                  <span>Regular and consistent shipment schedules</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-bold text-wine">
                  <Icons.Globe />
                  <span className="uppercase tracking-widest text-[10px]">
                    Malaysian, Indonesian, Russian & European origins preferred
                  </span>
                </div>
              </div>
              <Link
                to="/contact"
                className="w-full bg-wine py-6 text-center block text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-navy transition-all"
              >
                Collaborate with us
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Section 10: Logistics & Packaging ─────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="mb-12">
            <h3 className="text-4xl font-black text-navy uppercase mb-12 italic text-center lg:text-left">
              Logistics & <span className="text-wine">Packaging</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  t: "PFAD (Import)",
                  d: "20 MT Flexibag/ISO Tank · 180-220L Drums · Tanker",
                  hs: "HS 3823.19",
                  transit: "Malaysia/Indonesia: 10-15 days",
                },
                {
                  t: "TOFA (Import)",
                  d: "208L HDPE Drums · IBC Totes · ISO Tank",
                  hs: "HS 3806.20",
                  transit: "Russia/Europe: 20-28 days",
                },
                {
                  t: "Stearic Acid (Import)",
                  d: "25kg Bags · 500kg / 1MT Jumbo Bags",
                  hs: "HS 2915.70",
                  transit: "Malaysia: 10-14 days",
                },
                {
                  t: "RBFA (Export)",
                  d: "200L Drums · ISO/Flexibag for export",
                  hs: "HS 3823.19",
                  transit: "Vizag / Mundra / Kolkata Ports",
                },
              ].map((l, i) => (
                <div
                  key={i}
                  className="bg-white p-8 border-l-4 border-wine shadow-sm"
                >
                  <p className="font-black text-navy uppercase text-[10px] tracking-widest mb-2">
                    {l.t}
                  </p>
                  <p className="text-gray-500 font-bold text-sm mb-4">{l.d}</p>
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] font-black bg-gray-50 px-2 py-1 inline-block w-fit">
                      {l.hs}
                    </span>
                    <span className="text-[9px] font-black text-wine uppercase">
                      {l.transit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Section 11: FAQ ───────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal variant="fadeUp" className="mb-20 text-center">
            <h3 className="text-4xl font-black text-navy uppercase italic">
              Frequently Asked <span className="text-wine">Questions</span>
            </h3>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-4">
              Technical and Commercial Clarifications
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
                      <p className="text-gray-600 text-sm font-medium leading-relaxed">
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
    </div>
  );
};

export default FattyAcids;
