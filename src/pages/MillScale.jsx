import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";

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
  MapPin: () => (
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
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
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
        <p className="text-gray-600 font-medium leading-relaxed whitespace-pre-line">
          {a}
        </p>
      </div>
    </div>
  );
};

const MillScale = () => {
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661962860051-0e7d76a9ad8f?w=500&auto=format&fit=crop&q=60"
            alt="Mill Scale Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-4 py-1.5 bg-wine/20 border border-wine/50 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              Industrial Raw Materials
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              <span className="text-wine">Mill Scale</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Mill scale is the flaky surface layer formed on hot-rolled steel
              during manufacturing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 🔬 What is Mill Scale Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <Reveal variant="fadeLeft">
              <div className="max-w-xl">
                <h2 className="text-4xl font-black text-navy mb-6">
                  What is <span className="text-wine">Mill Scale?</span>
                </h2>
                <div className="w-20 h-1.5 bg-wine rounded-full mb-8"></div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Mill scale is a flaky surface layer of iron oxides that forms
                  on the surface of steel during the hot rolling process. When
                  steel is heated and rolled in a mill, the high temperature
                  causes the iron in the steel to react with oxygen in the air,
                  producing a layer of oxides. This layer is tightly bound to
                  the surface but can flake off during handling.
                </p>

                <h3 className="text-2xl font-bold text-navy mt-10 mb-4">
                  Detailed Formation Process
                </h3>
                <div className="bg-[#f8f9fb] p-6 rounded-2xl border border-gray-100 text-gray-600 font-medium">
                  <p className="mb-4">
                    When steel is heated to a high temperature (around 1000°C)
                    and rolled during the hot rolling process, the ambient
                    oxygen reacts with the steel's surface.
                  </p>
                  <p className="mb-2">This chemical reaction forms an:</p>
                  <ul className="list-disc list-inside font-bold text-navy">
                    <li>Iron oxide layer (FeO, Fe₃O₄, Fe₂O₃)</li>
                  </ul>
                  <p className="mt-2 text-wine font-bold">
                    This resulting layer is what we call mill scale.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeRight" delay={300}>
              <h3 className="text-3xl font-black text-navy mb-6">
                Key points about mill scale:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="mt-1 w-10 h-10 bg-wine/10 rounded-xl flex items-center justify-center text-wine shrink-0">
                    <Icons.Check />
                  </div>
                  <div>
                    <span className="font-bold text-navy text-lg block mb-1">
                      Appearance
                    </span>
                    <span className="text-gray-600">
                      Dark grey to black, flaky, and hard.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="mt-1 w-10 h-10 bg-wine/10 rounded-xl flex items-center justify-center text-wine shrink-0">
                    <Icons.Check />
                  </div>
                  <div>
                    <span className="font-bold text-navy text-lg block mb-1">
                      Formation
                    </span>
                    <span className="text-gray-600">
                      Occurs naturally during hot rolling of steel.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="mt-1 w-10 h-10 bg-wine/10 rounded-xl flex items-center justify-center text-wine shrink-0">
                    <Icons.Check />
                  </div>
                  <div>
                    <span className="font-bold text-navy text-lg block mb-1">
                      Uses
                    </span>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Recycled in steelmaking by remelting.</li>
                      <li>
                        Can be used in powdered form for coatings, pigments.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 📸 Visual Gallery */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 tracking-tight uppercase">
              Mill Scale <span className="text-wine">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <Reveal variant="zoomIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-lg group">
                <img
                  src="https://5.imimg.com/data5/XH/SJ/ZB/ANDROID-13824979/img-20190418-070335-jpg-500x500.jpg"
                  alt="Mill Scale Flakes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-lg group">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2025/11/562479410/PA/ML/CW/211411962/mill-scale-iron-powder-500x500.png"
                  alt="Mill Scale Iron Powder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 📊 Grading System */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Grades of <span className="text-wine">Mill Scales</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-6"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                grade: "High-grade mill scale",
                fe: "~70–72% Fe",
                impurities: "Very low (like silica, sulfur, and carbon)",
                uses: "Steelmaking, powder coatings, pigments",
                color: "border-wine",
                buttonVariant:
                  "bg-wine text-white hover:bg-wine/90 shadow-lg shadow-wine/20",
              },
              {
                num: "2",
                grade: "Medium-grade mill scale",
                fe: "~65–70% Fe",
                impurities: "Moderate",
                uses: "Scrap blending in steel production, some chemical processes",
                appearance:
                  "The appearance of medium-grade mill scale is typically mixed.\nColor: Black and grey mix (not pure shiny black).\nSize: Uneven particles (a mix of powder and small chips).\nTexture: Slightly dusty and flaky.",
                process:
                  "Scrap steel + medium-grade mill scale → melted in furnace → new steel",
                color: "border-navy",
                buttonVariant:
                  "bg-navy text-white hover:bg-navy/90 shadow-lg shadow-navy/20",
              },
              {
                num: "3",
                grade: "Low-grade mill scale",
                fe: "<65% Fe",
                impurities: "Higher levels of sulfur, silica, or other metals",
                uses: "Mainly in cement, refractory materials, or low-quality iron products",
                appearance:
                  "For refractory and low-quality industries, high purity is not essential.\nIt is utilized to increase the strength of cement while keeping production costs low.\nThis grade is the most affordable in the market.",
                why: "Why is it classified as low grade? Because:\nThe Iron (Fe) content is lower (< 65%).\nThere is higher contamination (soil, rust, moisture). Given its powdery and flaky nature, mill scale easily breaks off and falls to the ground, where it mixes with dirt and other impurities.",
                color: "border-gray-400",
                buttonVariant:
                  "bg-gray-100 text-navy hover:bg-gray-200 border border-gray-200",
              },
            ].map((item, idx) => (
              <Reveal
                key={idx}
                delay={idx * 150}
                variant="fadeUp"
                className="h-full"
              >
                <div
                  className={`flex flex-col bg-white p-8 rounded-3xl shadow-sm border-t-8 ${item.color} h-full hover:shadow-xl transition-all relative`}
                >
                  <div className="text-gray-300 font-black text-6xl absolute top-4 right-6 opacity-30">
                    {item.num}
                  </div>
                  <h3 className="text-2xl font-black text-navy mb-1 pr-10">
                    {item.grade}
                  </h3>
                  <div className="mb-6 mt-4">
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Iron content
                    </span>
                    <p className="text-3xl font-black text-wine">{item.fe}</p>
                  </div>

                  <div className="w-12 h-1 bg-gray-100 mb-6"></div>

                  <div className="flex-1 space-y-5 mb-10">
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Impurities
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.impurities}
                      </p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Use
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.uses}
                      </p>
                    </div>
                    {item.process && (
                      <div className="bg-[#f8f9fb] p-3 rounded-xl border border-gray-100 mt-2">
                        <span className="block text-[10px] font-bold text-wine uppercase tracking-wider mb-1">
                          Process
                        </span>
                        <p className="text-navy text-xs font-medium leading-relaxed">
                          {item.process}
                        </p>
                      </div>
                    )}
                    {item.appearance && (
                      <div>
                        <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                          Look & Details
                        </span>
                        <p className="text-gray-500 text-xs italic leading-relaxed whitespace-pre-line">
                          {item.appearance}
                        </p>
                      </div>
                    )}
                    {item.why && (
                      <div className="mt-2">
                        <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                          Low Grade Traits
                        </span>
                        <p className="text-gray-500 text-xs italic leading-relaxed whitespace-pre-line">
                          {item.why}
                        </p>
                      </div>
                    )}
                  </div>

                  <a
                    href={`/assets/docs/TDS-${item.grade.split(" ")[0]}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className={`mt-auto w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform duration-300 hover:-translate-y-1 ${item.buttonVariant}`}
                  >
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
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      ></path>
                    </svg>
                    Download TDS
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ⚠️ Practical Difficulties */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Reveal variant="fadeUp">
            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
              Practical Difficulties encountered in procuring particular grade
              of Mill scale
            </h2>
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>
                Mill Scale is a by-product generated during the hot rolling and
                processing of steel. It is often considered a waste material by
                many steel and rolling mills, but It has high value in the
                market due to its right iron content. The demand for mill scale
                is always high in industries like cement, sinter plant, and
                metal recovery.
              </p>
              <p>
                Most factories do not provide samples or detailed specifications
                because it is treated as a secondary material and is usually
                sold in bulk. Due to its high demand and limited availability,
                buyer who purchase quickly are able to secure the material,
                often without sampling, as the stock gets sold out very fast.
                Even though it is treated as waste at the source, it remains an
                important and widely used raw material in various industries.
              </p>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md my-8">
                <p className="italic text-gray-200">
                  Suppose a rolling mill has 150 MT of mill scale available,
                  they will ask for price quote from different traders/Buyers
                  and who ever quotes Rs 100 or Rs 200 higher gets the sale
                  order. Foreign Buyer require particular grade like ( fe &gt;
                  68% etc) but factories where its produced never tests it. And
                  if as trader we request samples and even gets it it takes many
                  days , by that time stock is sold out. And other factory has
                  different grade of material and there also similar problem is
                  faced.
                </p>
              </div>
              <p className="font-bold text-wine text-xl">
                So solution is be Roman in Rome and Buyers should understand
                that they need to act fast to secure supply without going into
                intricacies of test report etc.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🚀 Industry Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Mill Scale Uses <span className="text-wine">in Industries</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "Steel Industry",
                img: "https://www.reuters.com/resizer/v2/https%3A%2F%2Farchive-images.prod.global.a201836.reutersmedia.net%2F2018%2F06%2F07%2FLYNXNPEE55091.JPG?auth=4878ec095ce2f8c10b4882df50a4cbdea12805f437e349b21eb1eecbaa9feaac",
                details: (
                  <div className="space-y-4">
                    <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-2 font-medium">
                      <li>Mill scale is recycled in steel making.</li>
                      <li>It is used as raw material to make new steel.</li>
                    </ul>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-sm uppercase tracking-wider">
                        How it is used:
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Mill scale is directly blended with scrap steel or iron
                        ore. In induction furnaces or sinter plants, the scale
                        is melted down, allowing the high Iron (Fe) content to
                        be recovered and merged right back into the molten
                        metallic pool to forge new steel billets.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                t: "Paint and Pigment Industry",
                img: "https://cdn.shopify.com/s/files/1/1194/1498/files/Screenshot_2026-02-27_185456.png?v=1772198760",
                details: (
                  <div className="space-y-4">
                    <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-2 font-medium">
                      <li>
                        Contains iron oxide which gives red, black, or brown
                        color.
                      </li>
                      <li>Used in paints, inks, and ceramics.</li>
                    </ul>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-sm uppercase tracking-wider">
                        How it is used:
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        The mill scale is heavily washed, dried, and
                        micro-milled into an extremely fine powder. The
                        extracted iron oxides naturally furnish stark red,
                        black, or brown hues, serving as a highly stable,
                        inorganic colorant for industrial paints and ceramic
                        glazes.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                t: "Powder Coating Industry",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoJTJG15OgFyEerxgwe-R6v8BZlDpukWwLQ&s",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 text-base leading-relaxed font-medium">
                      Ground into powder and used in protective coatings on
                      metals.
                    </p>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-sm uppercase tracking-wider">
                        How it is used:
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        It undergoes purification and pulverization into
                        specialized powdered compositions. When
                        electrostatically sprayed onto metal parts and cured
                        under heat, the iron variants melt and impart a highly
                        durable, corrosion-resistant protective skin over the
                        metal.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                t: "Cement and Refractory Industry",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFY3wyOdCZheKt_aXYKQ5XqDb82AcSZPvvA&s",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 text-base leading-relaxed font-medium">
                      Low-grade mill scale is added to cement or bricks to
                      increase strength.
                    </p>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-sm uppercase tracking-wider">
                        How it is used:
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Raw low-grade mill scale is mixed directly into the raw
                        feed for the cement rotary kiln. During milling, the
                        iron oxides act as a fluxing agent which reduces the
                        burning temperatures and ultimately increases the
                        compressive density of the hardened cement or refractory
                        brick.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                t: "Chemical Industry",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsYzsKlHCL08Y8jgUXpG8CY2aWQKWv7zZWKg&s",
                details: (
                  <div className="space-y-4">
                    <p className="text-gray-600 text-base leading-relaxed font-medium">
                      Used to make ferrous compounds, like ferrous sulfate for
                      fertilizers or water treatment.
                    </p>
                    <div className="bg-[#f8f9fb] p-4 rounded-xl border border-gray-100">
                      <span className="block font-black text-navy mb-2 text-sm uppercase tracking-wider">
                        How it is used:
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        The mill scale is dissolved in sulfuric acid to
                        precipitate iron salts. This chemical reaction produces
                        ferrous sulfate and ferric sulfate, which are essential
                        coagulants used for large-scale water purification and
                        as iron-rich mineral supplements in agricultural
                        fertilizers.
                      </p>
                    </div>
                  </div>
                ),
              },
            ].map((app, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <div
                  className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer bg-[#f8f9fb] h-full"
                  onClick={() => setSelectedApp(app)}
                >
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={app.img}
                      alt={app.t}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-black text-navy text-center">
                      {app.t}
                    </h4>
                    <div className="flex justify-center mt-3 h-6">
                      <span className="text-xs uppercase tracking-widest font-bold text-wine opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        Click to View Details &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🇮🇳 Major Places & Buyers */}
      <section className="py-24 bg-[#f8f9fb] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal variant="fadeLeft">
            <h2 className="text-3xl font-black text-navy mb-8">
              Major places in India for Mill Scale
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { state: "Jharkhand", desc: "(Tata Steel area), Bokaro" },
                { state: "Chhattisgarh", desc: "(Bhilai Steel Plant)" },
                { state: "Maharashtra", desc: "(steel rolling mills)" },
                { state: "Odisha", desc: "(Rourkela Steel Plant)" },
                { state: "Karnataka", desc: "(steel plants & mini mills)" },
                {
                  state: "Madhya Pradesh",
                  desc: "(industrial zones with rolling mills)",
                },
              ].map((loc, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="mt-1">
                    <Icons.MapPin />
                  </div>
                  <div>
                    <span className="font-bold text-navy block">
                      {loc.state}
                    </span>
                    <span className="text-gray-500 text-xs">{loc.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal variant="fadeRight">
            <h2 className="text-3xl font-black text-navy mb-8">
              Who are the buyers of mill scale?
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="text-lg font-bold text-wine mb-2">
                  1. Steel Plants / Re-rolling Mills
                </h4>
                <p className="text-gray-600 text-sm font-bold block mb-1">
                  Biggest buyers
                </p>
                <ul className="list-disc list-inside text-gray-500 text-sm">
                  <li>They reuse mill scale to recover iron</li>
                  <li>
                    Includes: Induction furnace units, Secondary steel plants
                  </li>
                  <li>Regular and consistent buyers</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="text-lg font-bold text-wine mb-2">
                  2. Pigment Manufacturers
                </h4>
                <p className="text-gray-500 text-sm mb-1">
                  Convert mill scale into iron oxide pigments (black/red)
                </p>
                <p className="text-gray-500 text-sm mb-1">
                  Used in: Paints, Coatings, Tiles & construction colors
                </p>
                <p className="text-gray-500 text-sm font-bold">
                  They prefer clean and fine (powdered) material
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="text-lg font-bold text-wine mb-2">
                  3. Chemical Companies
                </h4>
                <p className="text-gray-500 text-sm">Use it to produce:</p>
                <ul className="list-disc list-inside text-gray-500 text-sm">
                  <li>
                    Ferrous sulphate (Used in water treatment to purify
                    contaminated water)
                  </li>
                  <li>Ferric sulphate</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🇮🇳 Why India */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Why is mill scale easily available in India?
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="space-y-6">
            <Reveal variant="fadeUp" delay={100}>
              <div className="bg-[#f8f9fb] p-6 rounded-2xl border border-gray-100 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-wine text-white flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">
                    High steel production
                  </h4>
                  <p className="text-gray-500 text-sm">
                    India is one of the top steel-producing countries. Companies
                    like Tata Steel, JSW Steel, and SAIL produce huge amounts of
                    steel.
                    <br />
                    <strong>
                      More steel production = more mill scale generation.
                    </strong>
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeUp" delay={200}>
              <div className="bg-[#f8f9fb] p-6 rounded-2xl border border-gray-100 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-wine text-white flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">
                    Large number of small rolling mills
                  </h4>
                  <p className="text-gray-500 text-sm">
                    India has thousands of small and medium rolling mills.
                    <br />
                    These mills often have basic setups and less advanced
                    cleaning systems.
                    <br />
                    <strong>
                      So, more mill scale falls and gets collected easily.
                    </strong>
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeUp" delay={300}>
              <div className="bg-[#f8f9fb] p-6 rounded-2xl border border-gray-100 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-wine text-white flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">
                    Strong recycling market
                  </h4>
                  <p className="text-gray-500 text-sm">
                    In India, industrial waste is rarely wasted.
                    <br />
                    Mill scale is sold to: Steel plants, Cement plants, Traders.
                    <br />
                    <strong>
                      Everything gets reused → high availability in the market.
                    </strong>
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeUp" delay={400}>
              <div className="bg-[#f8f9fb] p-6 rounded-2xl border border-gray-100 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-wine text-white flex items-center justify-center font-bold shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">
                    Low Labor cost
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Manual collection is affordable. Even small quantities are
                    gathered and sold.
                    <br />
                    <strong>This increases overall supply.</strong>
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fadeUp" delay={500}>
              <div className="bg-[#f8f9fb] p-6 rounded-2xl border border-gray-100 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-wine text-white flex items-center justify-center font-bold shrink-0">
                  5
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">
                    Export demand
                  </h4>
                  <p className="text-gray-500 text-sm">
                    India also exports mill scale to other countries (like
                    Bangladesh, China).
                    <br />
                    <strong>So collection + trading is very active.</strong>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🤝 Why Buy From Us & Why Rolling Mills/Foreign Buyers Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Why Buy From Us */}
            <Reveal variant="fadeLeft">
              <div className="bg-navy rounded-[3rem] p-10 md:p-14 text-white h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-wine/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                    Why Buy <span className="text-wine">From Us?</span>
                  </h2>
                  <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
                    We are an aggregator of mill scale and we collect material from different steel and rolling mill factories. Because of this, we are able to arrange bulk quantity as per requirement.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Icons.Check />
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <span className="text-white font-bold block mb-1 uppercase tracking-wider">Logistics Mastery</span>
                        We take care of the complete logistics, so the delivery process becomes smooth and easy for the buyer.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Icons.Check />
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <span className="text-white font-bold block mb-1 uppercase tracking-wider">Flexible Payments</span>
                        Our payment terms are flexible, which makes it convenient to do business with us.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Icons.Check />
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <span className="text-white font-bold block mb-1 uppercase tracking-wider">Hassle-Free Supply</span>
                        Overall, we try to provide a reliable and hassle-free supply of material.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Why Rolling Mills and Foreign Buyers Buy From Us */}
            <Reveal variant="fadeRight">
              <div className="bg-[#f8f9fb] rounded-[3rem] p-10 md:p-14 border border-gray-100 h-full">
                <h2 className="text-3xl md:text-4xl font-black text-navy mb-8 leading-tight pr-10">
                  Why Rolling Mills & <span className="text-wine">Foreign Buyers</span> Buy From Us
                </h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed mb-10">
                  Rolling mills and foreign buyers prefer to work with us because we are able to arrange consistent supply from multiple sources. We understand the quality requirements and try to provide suitable material as per need.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-navy font-black text-xs uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 bg-wine rounded-full" />
                      Bulk Management
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed font-medium">
                      Since we deal with different factories, we can manage bulk quantity and regular supply.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-navy font-black text-xs uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 bg-wine rounded-full" />
                      Foreign Trade Support
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed font-medium">
                      For foreign buyers, we also assist in handling logistics and coordination, which makes the process easier and more reliable.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-navy font-black text-xs uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 bg-wine rounded-full" />
                      Quick Response
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed font-medium">
                      Our flexible payment terms and quick response help in building long-term business relationships.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-navy font-black text-xs uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 bg-wine rounded-full" />
                      Communication
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed font-medium">
                      We focus on smooth communication, timely delivery and dependable service, which makes us a preferred partner.
                    </p>
                  </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/rfq"
                    className="bg-wine text-white px-8 py-4 rounded-2xl font-black text-center hover:bg-navy transition-all shadow-lg"
                  >
                    Submit RFQ
                  </Link>
                  <a
                    href="https://wa.me/919258720699?text=I%20need%20Mill%20Scale%20from%20India."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy text-white px-8 py-4 rounded-2xl font-black text-center hover:bg-navy/80 transition-all flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 0C5.393 0 0 5.393 0 12.032c0 2.126.549 4.195 1.593 6.02L.055 24l6.096-1.598A11.933 11.933 0 0012.031 24c6.638 0 12.031-5.394 12.031-12.033S18.669 0 12.031 0zm3.842 17.26c-.164.462-.953.904-1.344.965-.91.135-2.072.102-3.8-1.002-2.126-1.359-3.486-3.771-3.585-3.904-.102-.132-.857-1.144-.857-2.183 0-1.04.536-1.547.728-1.748.191-.192.42-.24.55-.24h.392c.164 0 .38.064.593.588.225.556.55 1.346.6 1.444.05.102.081.222.016.353-.066.132-.1.21-.197.324-.097.114-.2.247-.282.342-.09.096-.188.204-.08.384.11.18.49.799 1.053 1.302.726.65 1.332.85 1.513.946.182.096.289.084.398-.036.11-.12.47-.547.596-.732.126-.186.252-.15.42-.09.168.06.1065.504 1.25.576.185.072.311.114.358.174.047.06.047.348-.117.81z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ❓ Frequently Asked Questions */}
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
                q="1. What is mill scale?"
                a="Mill scale is a by-product generated during hot rolling of steel. It mainly consists of iron oxides and is widely used in steel plants, ferroalloy production, and sintering processes."
              />
              <FAQItem
                q="2. What is the typical Fe content in mill scale?"
                a={`Mill scale generally contains:
Fe: 60% – 72% (practical commercial range)
Balance: Oxygen and minor impurities

Lower Fe values are usually due to:
Higher oxidation
Contamination (dust, sand, slag)
Handling and storage conditions`}
              />
              <FAQItem
                q="3. Can you supply mill scale with fixed Fe grades like 60%, 68%, or 72%?"
                a={`No — in practical bulk trade, fixed Fe grades like 60%, 68%, 72% cannot be guaranteed consistently.

Mill scale is a process by-product, not a manufactured product. Its composition varies:
- From batch to batch
- From plant to plant
- Even within the same lot

👉 Values like 60%, 68%, 72% are indicative ranges, not fixed grades.
👉 In real trade, buyers work with:
- Range-based specifications (e.g., 65%–70%)
- Or lot-wise testing and acceptance`}
              />
              <FAQItem
                q="4. What are the main uses of mill scale?"
                a={`Mill scale is used in:
- Steel re-rolling mills
- Sinter plants
- Ferroalloy production
- Cement industry (as iron source)
- Briquetting units`}
              />
              <FAQItem
                q="5. Do you supply in bulk quantities?"
                a={`Yes. We handle bulk supply for domestic and export markets.
Typical volumes:
- 25 MT (trial container)
- 100–500 MT regular supply
- Larger volumes based on availability`}
              />
              <FAQItem
                q="6. Can you ensure consistent quality across shipments?"
                a={`We ensure commercially acceptable consistency, but variation is natural.
👉 Expect:
- Range consistency (not fixed numbers)
- Minor variation between lots`}
              />
              <FAQItem
                q="7. What are the payment terms?"
                a={`We work on standard, secure trade terms:
- Advance payment, or
- Letter of Credit (LC)`}
              />
              <FAQItem
                q="8. What is the minimum order quantity (MOQ)?"
                a="MOQ typically starts from one container load (25 MT). Higher volumes are preferred for better pricing."
              />
              <FAQItem
                q="9. Why work with Ochnology Solutions for mill scale?"
                a={`We focus on realistic, execution-driven supply:
- Honest communication on achievable Fe ranges
- No over-promising on fixed grades
- Multiple sourcing options
- Experience in bulk handling and logistics
- Faster execution and clarity`}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modal for App details */}
      {selectedApp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm"
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl transform transition-all scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-64 relative border-b border-gray-100">
              <img
                src={selectedApp.img}
                alt={selectedApp.t}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-black rounded-full p-2 backdrop-blur-md transition-colors shadow-lg border border-white/20"
                onClick={() => setSelectedApp(null)}
              >
                <svg
                  className="w-6 h-6 text-white"
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
            </div>
            <div className="p-10">
              <h4 className="text-3xl font-black text-navy mb-4">
                {selectedApp.t}
              </h4>
              <div className="w-16 h-1.5 bg-wine rounded-full mb-6"></div>
              {selectedApp.details}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MillScale;
