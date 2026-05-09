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
  Oil: () => (
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
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.183.12l-1.43.715a2 2 0 01-2.428-2.428l.715-1.43a2 2 0 00-.12-1.183l-.387-1.161a6 6 0 01-.517-3.86l.158-.318a6 6 0 00-.517-3.86l-.477-2.387a2 2 0 00-.547-1.022m15.428 15.428l.715 1.43a2 2 0 01-2.428 2.428l-1.43-.715a2 2 0 00-1.183-.12l-1.161.387a6 6 0 01-3.86-.517l-.318-.158a6 6 0 01-3.86-.517l-1.161.387a2 2 0 00-1.183.12l-1.43.715a2 2 0 01-2.428-2.428l.715-1.43a2 2 0 00-.12-1.183"
      />
    </svg>
  ),
  Globe: () => (
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
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.63 9h16.74M3.63 15h16.74M12 3v18"
      />
    </svg>
  ),
  Shield: () => (
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
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  Map: () => (
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
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
      />
    </svg>
  ),
  Chevron: ({ className = "w-4 h-4" }) => (
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

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span
          className={`text-lg font-black uppercase tracking-tight transition-colors ${isOpen ? "text-wine" : "text-navy group-hover:text-wine"}`}
        >
          {question}
        </span>
        <Icons.Chevron
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-wine" : "text-navy"}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
      >
        <p className="text-gray-500 font-medium leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Barytes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const waLink = "https://wa.me/919258720699";

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2024/6/426933212/AE/FK/IK/149367220/white-baryte-lump-500x500.jpg"
            alt="Barytes Mining"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-5 py-1.5 bg-wine text-white rounded-none text-xs font-black tracking-[0.3em] uppercase mb-8 shadow-2xl shadow-wine/40">
              API Grade | High Purity | Bulk Supply
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">
              India's Premium <span className="text-wine">Barytes</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto font-bold leading-relaxed mb-12 uppercase">
              API, Drilling & Industrial Grade — Sourced Direct & Shipped
              Worldwide
            </p>
          </Reveal>
          <Reveal
            variant="fadeUp"
            delay={800}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link
              to="/rfq"
              className="bg-white text-navy px-10 py-5 font-black hover:bg-wine hover:text-white transition-all shadow-2xl"
            >
              REQUEST LATEST PRICE
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wine text-white px-10 py-5 font-black hover:bg-navy transition-all shadow-2xl"
            >
              WHATSAPP REQUIREMENT
            </a>
          </Reveal>
        </div>
      </section>

      {/* 📊 Trust Bar / Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="zoomIn">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-6 border-r border-gray-100 last:border-0">
                <span className="block text-4xl font-black text-wine mb-1">
                  5000+
                </span>
                <span className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">
                  MT Exported Yearly
                </span>
              </div>
              <div className="text-center p-6 border-r border-gray-100 last:border-0">
                <span className="block text-4xl font-black text-navy mb-1">
                  4.2+
                </span>
                <span className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">
                  Specific Gravity (SG)
                </span>
              </div>
              <div className="text-center p-6 border-r border-gray-100 last:border-0">
                <span className="block text-4xl font-black text-wine mb-1">
                  1 MT
                </span>
                <span className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">
                  Minimum Order (MOQ)
                </span>
              </div>
              <div className="text-center p-6 last:border-0">
                <span className="block text-4xl font-black text-navy mb-1">
                  15+
                </span>
                <span className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">
                  Countries Served
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 📖 Introduction & Why Choose Us */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <Reveal variant="fadeLeft">
              <h2 className="text-4xl font-black text-navy mb-12 uppercase tracking-tight italic">
                Why Buyers Choose <span className="text-wine">Ochnology</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Direct access to multiple mines ensures zero supply disruption.",
                  "Highly competitive pricing benchmarks vs China & Morocco origins.",
                  "Bulk loading capability (dedicated Vessel or Containerized shipments).",
                  "Continuous SGS / Intertek inspection support for audit compliance.",
                  "Extensive export experience in Africa, Middle East, and SE Asia.",
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="mt-1 flex-shrink-0">
                      <Icons.Check />
                    </div>
                    <p className="text-gray-600 font-bold leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
                <div className="mt-12 bg-navy p-8 border-l-8 border-wine shadow-xl">
                  <p className="text-white text-lg italic font-bold">
                    “We don’t depend on a single mine — ensuring consistent
                    supply even in high-demand periods.”
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeRight" delay={300}>
              <div className="space-y-8">
                <h3 className="text-3xl font-black text-navy uppercase italic">
                  Global Grade <span className="text-wine">Catalog</span>
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      title: "API Drilling Grade",
                      spec: "SG 4.2+ | Low Fe₂O₃ | Precise Mesh",
                      desc: "Essential for weighting material in oil and gas drilling fluids.",
                    },
                    {
                      title: "Paint & Coating Grade",
                      spec: "High Brightness | Low Oil Absorption",
                      desc: "Optimal D50/D97 particle size distribution for industrial finishes.",
                    },
                    {
                      title: "Medical / X-Ray Grade",
                      spec: "98%+ Purity | Zero Soluble Barium",
                      desc: "Used in radiation shielding and specialized medical applications.",
                    },
                    {
                      title: "Filler & Rubber Grade",
                      spec: "High Whiteness | Dense Matrix",
                      desc: "Performance enhancer for elastomeric and plastic composites.",
                    },
                  ].map((grade, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 p-8 border border-gray-100 hover:border-wine transition-all group"
                    >
                      <h4 className="text-xl font-black text-navy mb-2 group-hover:text-wine uppercase">
                        {grade.title}
                      </h4>
                      <div className="text-[10px] text-wine font-black uppercase tracking-widest mb-4">
                        {grade.spec}
                      </div>
                      <p className="text-gray-500 text-sm font-medium">
                        {grade.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🗺️ Sourcing & Origin */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 -translate-y-1/4 translate-x-1/4">
          <Icons.Map />
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
          <Reveal variant="fadeLeft" className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter italic leading-tight">
              Mastering the <span className="text-wine">Indian Mining</span> Map
            </h2>
            <p className="text-white/60 mb-10 font-medium text-lg leading-relaxed">
              Our Barytes are directly sourced from the primary mining hubs of
              **Andhra Pradesh** (renowned Cuddapah Basin), **Rajasthan**, and
              **Madhya Pradesh**. Indian Barytes are globally preferred for
              their naturally high Specific Gravity and distinct geological
              stability.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <span className="block text-wine font-black text-2xl uppercase tracking-widest">
                  Cuddapah
                </span>
                <span className="text-xs font-bold text-white/40 uppercase">
                  Basin Origin
                </span>
              </div>
              <div>
                <span className="block text-wine font-black text-2xl uppercase tracking-widest">
                  Captive
                </span>
                <span className="text-xs font-bold text-white/40 uppercase">
                  Mine Tie-ups
                </span>
              </div>
            </div>
            <div className="bg-white/5 p-8 border border-white/10">
              <h4 className="font-black uppercase mb-4 text-wine">
                For Mine Owners & Processors
              </h4>
              <p className="text-white/50 text-sm mb-6">
                Looking to partner with barytes mines across India? We provide
                assured bulk offtake for export markets.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 font-black text-xs uppercase tracking-[0.2em] hover:text-wine transition-colors"
              >
                Partner With Us{" "}
                <Icons.Chevron className="rotate-[-90deg] w-4 h-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal
            variant="fadeRight"
            className="lg:w-1/2 relative bg-white p-1 rounded-none shadow-2xl"
          >
            <img
              src="https://jamgroupco.com/wp-content/uploads/2022/01/barite-product-10.jpg"
              alt="Indian Mining Belt"
            />
            <div className="absolute inset-0 bg-navy/20"></div>
          </Reveal>
        </div>
      </section>

      {/* 📸 Visual Experience */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter mb-4 italic">
              Visual <span className="text-wine">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Explore the premium quality and high-density structure of our
              Indian Barytes products.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "https://5.imimg.com/data5/SELLER/Default/2023/12/367518607/QE/VS/RL/487880/white-barytes-powder-500x500.jpg",
                title: "White Barytes Powder",
                desc: "Premium white industrial powder with high SG",
              },
              {
                img: "https://jeyaenterprises.in/wp-content/uploads/2023/08/white-baryte-powder-1.jpg",
                title: "Micronised Grade",
                desc: "Super-fine powder for paint and coating applications",
              },
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDOtaa7o5xJOCTdX8QAnsgxB4VaVtLhAWUg&s",
                title: "Industrial Sourcing",
                desc: "Bulk loading and logistics for global dispatch",
              },
            ].map((item, i) => (
              <Reveal
                key={i}
                delay={i * 150}
                variant="zoomIn"
                className="group relative aspect-square overflow-hidden rounded-none shadow-xl hover:shadow-wine/20 transition-all"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <h4 className="text-white text-xl font-black mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 uppercase italic">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 font-bold uppercase tracking-widest">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy uppercase italic tracking-tight">
              Technical <span className="text-wine">FAQ</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto mt-4 mb-6"></div>
            <p className="text-gray-500 font-bold">
              Answering your procurement objections instantly.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={200}>
            <div className="space-y-2">
              <FAQItem
                question="What is the minimum order quantity (MOQ)?"
                answer="Our standard MOQ for export is 1 Metric Tonne (MT), although we specialize in bulk vessel and container shipments (500–3000 MT/month)."
              />
              <FAQItem
                question="Can you supply API 13A certified Barytes?"
                answer="Yes. We provide documentation and certificates conforming exactly to API 13A standards for oilfield drilling."
              />
              <FAQItem
                question="What payment terms do you accept?"
                answer="We primarily work with TT and LC. Other custom trade finance terms can be discussed based on order volume and history."
              />
              <FAQItem
                question="Do you provide samples before bulk orders?"
                answer="Yes, we encourage technical evaluation. Samples are dispatched via courier for lab testing prior to contract finalization."
              />
              <FAQItem
                question="How is Barytes different from Barite?"
                answer="They are the same. Barytes is the common commercial name for the mineral Barite (BaSO₄)."
              />
              <FAQItem
                question="Can you customize mesh size or SG?"
                answer="Absolutely. We can customize grinding parameters and blending ratios to meet your project's specific SG and mesh requirements."
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🏁 Call to Action */}
      <section className="py-24 bg-[#fcfdfe] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          <Reveal variant="fadeLeft" className="text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-navy uppercase italic mb-4">
              Ready to <span className="text-wine">Source?</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm italic">
              Direct from Mine to Your Port of Choice.
            </p>
          </Reveal>
          <Reveal
            variant="fadeRight"
            className="flex flex-wrap justify-center gap-6"
          >
            <Link
              to="/contact"
              className="bg-navy text-white px-12 py-6 font-black hover:bg-wine transition-all shadow-xl shadow-navy/20 uppercase tracking-widest"
            >
              Secure Shipment
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-navy text-navy px-12 py-5 font-black hover:bg-navy hover:text-white transition-all uppercase tracking-widest"
            >
              Live Support
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Barytes;
