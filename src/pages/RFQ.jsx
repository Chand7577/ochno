import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";

// ── Reveal Component ──────────────────────────────────────────────────────────
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

const PRODUCTS = [
  "Silica Fume (Microsilica)",
  "Quartz / Quartzite",
  "Mill Scale",
  "Lithium Carbonate",
  "Refractory Bricks & Castables",
  "Calcined Bauxite",
  "Dead Burnt Magnesite",
  "White & Brown Fused Alumina",
  "Limestone",
  "Bentonite",
  "Pig Iron",
  "Carbon Raiser – GPC",
  "Anthracite Coal",
  "Electrode Scrap",
  "Titanium Dioxide (TiO2)",
  "Soda Ash",
  "Activated Carbon",
  "Other (Specify in message)",
];

const GRADE_QUESTIONS = {
  "Silica Fume (Microsilica)":
    "What SiO₂ % do you need? (e.g. 85%, 92%, 95%+). Densified or Undensified?",
  "Quartz / Quartzite":
    "Quartz or Quartzite? Application — Glass, Steel, Solar, Refractories?",
  "Mill Scale":
    "What min. Fe% is required? End use — Sintering, Pigment, Cement?",
  "Lithium Carbonate": "Battery Grade (≥99.5%) or Technical Grade (≥99.0%)?",
  "Refractory Bricks & Castables":
    "Bricks or Castables or both? Al₂O₃ % and max temp requirement?",
};

const TRUST_STATS = [
  { value: "50+", label: "Active Export Countries" },
  { value: "12+", label: "Years Industry Experience" },
  { value: "500+", label: "MT Processed Monthly" },
  { value: "48hr", label: "RFQ Response Guarantee" },
];

const FAQ = [
  {
    q: "What information should I include in my RFQ?",
    a: "At minimum: product name, quantity (MT), delivery port/destination, required grade or specifications, and preferred payment terms. The more details you provide, the more accurate and faster our quote will be.",
  },
  {
    q: "How quickly will I receive a quotation?",
    a: "Standard RFQs receive a response within 24–48 business hours. For urgent requirements, WhatsApp us directly — we respond within the hour during business hours.",
  },
  {
    q: "What are your minimum order quantities (MOQ)?",
    a: "MOQs vary by product. For most bulk minerals and mill scale, we can accommodate from 25 MT. For specialty chemicals like Lithium Carbonate, MOQ starts at 1 MT. We work with your operational needs — contact us to discuss.",
  },
  {
    q: "Can you provide samples before placing a bulk order?",
    a: "Yes, for qualifying buyers we provide pre-shipment samples. Sample costs are typically adjusted against the final order value. Please mention your sample requirement clearly in the RFQ.",
  },
  {
    q: "What payment terms do you offer?",
    a: "We offer LC (Letter of Credit), TT/Wire Transfer, Usance LC for established buyers, and DAP/CIF terms depending on the destination. Mention your preferred terms in the form so we can confirm feasibility.",
  },
  {
    q: "Do you handle export documentation?",
    a: "Yes — we manage the complete export documentation package including Commercial Invoice, Bill of Lading, Packing List, Certificate of Origin, COA, TDS, and any product-specific certificates required by your country.",
  },
];

const RFQ = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    unit: "MT",
    port: "",
    paymentTerms: "",
    grade: "",
    timeline: "",
    message: "",
    sampleRequired: "no",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* 
      EMAIL RECIPIENTS:
      - amritchand0713@gmail.com (Testing - active)
      // - bd@ochnology.com (Production - commented)
      // - info@ochnology.com (Production - commented)
      // - projects@ochnology.com (Production - commented)
    */

    // Prepare data for Web3Forms (Free Email Service)
    // Get your free Access Key at: https://web3forms.com/
    const accessKey = "a9715651-7987-40fb-b807-62a8e1bad338";

    const payload = {
      access_key: accessKey,
      subject: `New RFQ from ${form.company}`,
      from_name: form.name,
      // This works if you verify it in Web3Forms or use their multi-recipient settings
      ...form,
      message_body: `
        NEW RFQ FROM OCHNOLOGY WEBSITE
        ------------------------------
        👤 Name: ${form.name}
        🏢 Company: ${form.company}
        🌍 Country: ${form.country}
        📧 Email: ${form.email}
        📞 Phone: ${form.phone}

        📦 Product: ${form.product}
        ⚖️ Quantity: ${form.quantity} ${form.unit}
        🚢 Destination Port: ${form.port}
        💳 Payment Terms: ${form.paymentTerms}
        🔬 Grade/Spec: ${form.grade}
        ⏱️ Timeline: ${form.timeline}
        🧪 Sample Required: ${form.sampleRequired}

        💬 Additional Notes:
        ${form.message}
      `,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setForm({
          name: "",
          company: "",
          country: "",
          email: "",
          phone: "",
          product: "",
          quantity: "",
          unit: "MT",
          port: "",
          paymentTerms: "",
          grade: "",
          timeline: "",
          message: "",
          sampleRequired: "no",
        });
        setSubmitted(true);
      } else {
        console.error("Email submission failed:", result);
        // Fallback to WhatsApp if email fails
        openWhatsAppFallback();
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      openWhatsAppFallback();
    }
  };

  const openWhatsAppFallback = () => {
    const waText = encodeURIComponent(
      `*NEW RFQ FROM OCHNOLOGY WEBSITE*\n\n` +
        `👤 *Name:* ${form.name}\n` +
        `🏢 *Company:* ${form.company}\n` +
        `🌍 *Country:* ${form.country}\n` +
        `📧 *Email:* ${form.email}\n` +
        `📞 *Phone:* ${form.phone}\n\n` +
        `📦 *Product:* ${form.product}\n` +
        `⚖️ *Quantity:* ${form.quantity} ${form.unit}\n` +
        `🚢 *Destination Port:* ${form.port}\n` +
        `💳 *Payment Terms:* ${form.paymentTerms}\n` +
        `🔬 *Grade/Spec:* ${form.grade}\n` +
        `⏱️ *Timeline:* ${form.timeline}\n` +
        `🧪 *Sample Required:* ${form.sampleRequired}\n\n` +
        `💬 *Additional Notes:*\n${form.message}`,
    );
    window.open(`https://wa.me/919258720699?text=${waText}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* ── Hero ── */}
      <section className="relative w-full min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=60"
            alt="RFQ Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-wine/80" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={100}>
            <span className="inline-block px-4 py-1.5 bg-wine/20 border border-wine/50 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              Fast · Accurate · Reliable
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={250}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              Request a <span className="text-wine">Quote</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              Tell us what you need — grade, quantity, port, timeline. We
              respond within 48 hours with a competitive, no-obligation
              quotation.
            </p>
          </Reveal>
          {/* Stats */}
          <Reveal
            variant="fadeUp"
            delay={550}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {TRUST_STATS.map((s, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5"
              >
                <p className="text-wine text-3xl font-black">{s.value}</p>
                <p className="text-white/70 text-xs font-bold uppercase tracking-wider mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* ── Left: Trust sidebar ── */}
            <Reveal variant="fadeLeft" className="lg:col-span-2 space-y-6">
              {/* Why RFQ with us */}
              <div className="bg-navy text-white rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-wine/20 rounded-full blur-[60px] -mr-24 -mt-24" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-black mb-2">
                    Why RFQ with Ochnology?
                  </h2>
                  <div className="w-12 h-1 bg-wine rounded-full mb-6" />
                  <div className="space-y-5">
                    {[
                      {
                        icon: "⚡",
                        title: "48-Hour Response",
                        desc: "Dedicated sourcing team reviews every RFQ within 2 business days — faster for urgent requirements.",
                      },
                      {
                        icon: "🌐",
                        title: "Multi-Origin Sourcing",
                        desc: "We source across 10+ regions & multiple suppliers. You get competition-driven pricing, not a single factory's rate card.",
                      },
                      {
                        icon: "📦",
                        title: "No Minimum Bureaucracy",
                        desc: "Whether you need 25 MT trial or 5,000 MT contract — we handle both with equal attention.",
                      },
                      {
                        icon: "📋",
                        title: "Full Documentation",
                        desc: "COA, TDS, BL, COO, NABL Reports — all documentation handled end-to-end, exactly as your import regulations require.",
                      },
                      {
                        icon: "💬",
                        title: "Speak to a Human",
                        desc: "Not a bot. A real sourcing expert who understands your industry will review and respond to your RFQ personally.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 bg-wine/20 rounded-xl flex items-center justify-center text-xl shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-xs leading-relaxed mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* What to include */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-black text-navy mb-4">
                  💡 For a Faster Quote — Include:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Exact product name & grade/specification",
                    "Quantity in MT (trial or monthly volume)",
                    "Destination port & country",
                    "Required delivery timeline",
                    "Preferred payment terms (LC / TT / etc.)",
                    "Any specific certifications needed (MSDS, COA, etc.)",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <div className="w-5 h-5 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct channel */}
              <div className="bg-[#f0f4f8] rounded-3xl p-6 border border-gray-100">
                <h4 className="font-bold text-navy mb-3 text-sm uppercase tracking-wider">
                  Prefer a Direct Channel?
                </h4>
                <a
                  href="https://wa.me/919258720699?text=I%20want%20to%20send%20an%20RFQ%20for%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-2xl font-bold text-sm hover:bg-[#1db954] transition-all w-full justify-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.031 0C5.393 0 0 5.393 0 12.032c0 2.126.549 4.195 1.593 6.02L.055 24l6.096-1.598A11.933 11.933 0 0012.031 24c6.638 0 12.031-5.394 12.031-12.033S18.669 0 12.031 0zm3.842 17.26c-.164.462-.953.904-1.344.965-.91.135-2.072.102-3.8-1.002-2.126-1.359-3.486-3.771-3.585-3.904-.102-.132-.857-1.144-.857-2.183 0-1.04.536-1.547.728-1.748.191-.192.42-.24.55-.24h.392c.164 0 .38.064.593.588.225.556.55 1.346.6 1.444.05.102.081.222.016.353-.066.132-.1.21-.197.324-.097.114-.2.247-.282.342-.09.096-.188.204-.08.384.11.18.49.799 1.053 1.302.726.65 1.332.85 1.513.946.182.096.289.084.398-.036.11-.12.47-.547.596-.732.126-.186.252-.15.42-.09.168.06.1065.504 1.25.576.185.072.311.114.358.174.047.06.047.348-.117.81z" />
                  </svg>
                  WhatsApp RFQ — Instant Response
                </a>
                <p className="text-gray-400 text-xs text-center mt-3">
                  or email:{" "}
                  <a
                    href="mailto:bd@ochnology.com"
                    className="text-navy font-bold hover:text-wine"
                  >
                    bd@ochnology.com
                  </a>
                </p>
              </div>
            </Reveal>

            {/* ── Right: RFQ Form ── */}
            <Reveal variant="fadeRight" delay={150} className="lg:col-span-3">
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 space-y-7"
                >
                  <div>
                    <h2 className="text-3xl font-black text-navy">
                      Submit Your RFQ
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">
                      All fields marked <span className="text-wine">*</span> are
                      required
                    </p>
                    <div className="w-16 h-1 bg-wine rounded-full mt-4" />
                  </div>

                  {/* Section: Your Details */}
                  <div>
                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-4 h-px bg-gray-200" />
                      Your Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-sm font-bold text-navy mb-1.5"
                          htmlFor="rfq-name"
                        >
                          Full Name <span className="text-wine">*</span>
                        </label>
                        <input
                          id="rfq-name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:border-wine focus:ring-2 focus:ring-wine/10 outline-none transition-all bg-[#f8f9fb]"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-bold text-navy mb-1.5"
                          htmlFor="rfq-company"
                        >
                          Company Name <span className="text-wine">*</span>
                        </label>
                        <input
                          id="rfq-company"
                          name="company"
                          type="text"
                          required
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:border-wine focus:ring-2 focus:ring-wine/10 outline-none transition-all bg-[#f8f9fb]"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-bold text-navy mb-1.5"
                          htmlFor="rfq-email"
                        >
                          Business Email <span className="text-wine">*</span>
                        </label>
                        <input
                          id="rfq-email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:border-wine focus:ring-2 focus:ring-wine/10 outline-none transition-all bg-[#f8f9fb]"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-bold text-navy mb-1.5"
                          htmlFor="rfq-phone"
                        >
                          Phone / WhatsApp <span className="text-wine">*</span>
                        </label>
                        <input
                          id="rfq-phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 8900"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:border-wine focus:ring-2 focus:ring-wine/10 outline-none transition-all bg-[#f8f9fb]"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          className="block text-sm font-bold text-navy mb-1.5"
                          htmlFor="rfq-country"
                        >
                          Country / Region <span className="text-wine">*</span>
                        </label>
                        <input
                          id="rfq-country"
                          name="country"
                          type="text"
                          required
                          value={form.country}
                          onChange={handleChange}
                          placeholder="e.g., Bangladesh, Vietnam, United Arab Emirates"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:border-wine focus:ring-2 focus:ring-wine/10 outline-none transition-all bg-[#f8f9fb]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-dashed border-gray-100" />

                  {/* Section: Product Details */}
                  <div>
                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-4 h-px bg-gray-200" />
                      Product Requirements
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label
                          className="block text-sm font-bold text-navy mb-1.5"
                          htmlFor="rfq-product"
                        >
                          Product <span className="text-wine">*</span>
                        </label>
                        <select
                          id="rfq-product"
                          name="product"
                          required
                          value={form.product}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:border-wine focus:ring-2 focus:ring-wine/10 outline-none transition-all bg-[#f8f9fb]"
                        >
                          <option value="">— Select Product —</option>
                          {PRODUCTS.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Dynamic grade question */}
                      {form.product && GRADE_QUESTIONS[form.product] && (
                        <div className="bg-wine/5 border border-wine/20 rounded-2xl p-4">
                          <p className="text-xs font-bold text-wine uppercase tracking-wider mb-2">
                            💡 Helpful for this product:
                          </p>
                          <p className="text-sm text-navy font-medium">
                            {GRADE_QUESTIONS[form.product]}
                          </p>
                        </div>
                      )}

                      <div>
                        <label
                          className="block text-sm font-bold text-navy mb-1.5"
                          htmlFor="rfq-grade"
                        >
                          Grade / Specification Required
                        </label>
                        <input
                          id="rfq-grade"
                          name="grade"
                          type="text"
                          value={form.grade}
                          onChange={handleChange}
                          placeholder={
                            form.product === "Mill Scale"
                              ? "e.g. Fe ≥ 68%, no soil/moisture"
                              : form.product === "Silica Fume (Microsilica)"
                                ? "e.g. SiO₂ ≥ 92%, Densified"
                                : "e.g. Purity ≥ 99.5%, specific grade or application"
                          }
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:border-wine focus:ring-2 focus:ring-wine/10 outline-none transition-all bg-[#f8f9fb]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            className="block text-sm font-bold text-navy mb-1.5"
                            htmlFor="rfq-quantity"
                          >
                            Quantity Required{" "}
                            <span className="text-wine">*</span>
                          </label>
                          <div className="flex gap-2">
                            <input
                              id="rfq-quantity"
                              name="quantity"
                              type="number"
                              min="1"
                              required
                              value={form.quantity}
                              onChange={handleChange}
                              placeholder="e.g. 500"
                              className="flex-1 min-w-0 border border-gray-200 rounded-xl px-2 sm:px-4 py-3 text-sm text-navy focus:border-wine focus:ring-2 focus:ring-wine/10 outline-none transition-all bg-[#f8f9fb]"
                            />
                            <select
                              name="unit"
                              value={form.unit}
                              onChange={handleChange}
                              className="w-20 shrink-0 border border-gray-200 rounded-xl px-1 sm:px-2 py-3 text-sm text-navy focus:border-wine outline-none bg-[#f8f9fb]"
                            >
                              <option>MT</option>
                              <option>KG</option>
                              <option>FCL</option>
                              <option>Bags</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label
                            className="block text-sm font-bold text-navy mb-1.5"
                            htmlFor="rfq-timeline"
                          >
                            Required By / Timeline
                          </label>
                          <input
                            id="rfq-timeline"
                            name="timeline"
                            type="text"
                            value={form.timeline}
                            onChange={handleChange}
                            placeholder="e.g. Within 30 days, Q3 2026"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:border-wine focus:ring-2 focus:ring-wine/10 outline-none transition-all bg-[#f8f9fb]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-dashed border-gray-100" />

                  {/* Section: Shipping & Commercial */}
                  <div>
                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-4 h-px bg-gray-200" />
                      Shipping & Commercial
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-sm font-bold text-navy mb-1.5"
                          htmlFor="rfq-port"
                        >
                          Destination Port / Incoterms
                        </label>
                        <input
                          id="rfq-port"
                          name="port"
                          type="text"
                          value={form.port}
                          onChange={handleChange}
                          placeholder="e.g. Port Klang, CIF or FOB India"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:border-wine focus:ring-2 focus:ring-wine/10 outline-none transition-all bg-[#f8f9fb]"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-bold text-navy mb-1.5"
                          htmlFor="rfq-payment"
                        >
                          Payment Terms Preferred
                        </label>
                        <select
                          id="rfq-payment"
                          name="paymentTerms"
                          value={form.paymentTerms}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:border-wine focus:ring-2 focus:ring-wine/10 outline-none transition-all bg-[#f8f9fb]"
                        >
                          <option value="">— Select —</option>
                          <option>LC at Sight</option>
                          <option>Usance LC (30/60/90 days)</option>
                          <option>TT (Wire Transfer)</option>
                          <option>TT 30% Advance + 70% BL</option>
                          <option> RTGS / Advance</option>
                          <option>To be Discussed</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Sample */}
                  <div>
                    <label className="block text-sm font-bold text-navy mb-3">
                      Do you require a sample before ordering?
                    </label>
                    <div className="flex flex-col sm:flex-row gap-4">
                      {["yes", "no"].map((v) => (
                        <label
                          key={v}
                          className={`flex items-center gap-3 px-5 py-3 rounded-xl border-2 cursor-pointer transition-all ${form.sampleRequired === v ? "border-wine bg-wine/5" : "border-gray-200"}`}
                        >
                          <input
                            type="radio"
                            name="sampleRequired"
                            value={v}
                            checked={form.sampleRequired === v}
                            onChange={handleChange}
                            className="w-4 h-4 accent-wine"
                          />
                          <span className="font-bold text-sm text-navy capitalize">
                            {v === "yes"
                              ? "Yes, please arrange samples"
                              : "No, proceed to quote"}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional message */}
                  <div>
                    <label
                      className="block text-sm font-bold text-navy mb-1.5"
                      htmlFor="rfq-message"
                    >
                      Additional Notes / Questions
                    </label>
                    <textarea
                      id="rfq-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any specific quality requirements, certifications needed (NABL, SGS), packaging preferences, previous experience with similar products from India, or any other details that will help us quote accurately..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:border-wine focus:ring-2 focus:ring-wine/10 outline-none transition-all bg-[#f8f9fb] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="rfq-submit-btn"
                    className="w-full bg-navy text-white py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg hover:bg-wine transition-all shadow-lg shadow-navy/20 hover:shadow-wine/20 hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3 px-4 text-center leading-tight sm:leading-normal"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Submit RFQ — Get Quoted in 48 Hours
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    Your information is handled confidentially. We will never
                    share your details with third parties.
                  </p>
                </form>
              ) : (
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-green-600"
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
                  </div>
                  <h2 className="text-3xl font-black text-navy mb-4">
                    RFQ Sent Successfully!
                  </h2>
                  <p className="text-gray-500 text-lg mb-8">
                    Your RFQ has been forwarded to our team via WhatsApp. Expect
                    a response within 24–48 business hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-navy text-white px-8 py-4 rounded-2xl font-bold hover:bg-wine transition-all"
                    >
                      Submit Another RFQ
                    </button>
                    <Link
                      to="/"
                      className="bg-[#f8f9fb] text-navy border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              How the RFQ Process Works
            </h2>
            <div className="w-20 h-1 bg-wine mx-auto rounded-full" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Submit Your RFQ",
                desc: "Fill the form with your product, quantity, port, and specs. Takes less than 3 minutes.",
                icon: "📋",
              },
              {
                step: "02",
                title: "We Source & Quote",
                desc: "Our team contacts multiple suppliers and prepares a competitive, itemized quotation within 48 hours.",
                icon: "🔍",
              },
              {
                step: "03",
                title: "Review & Negotiate",
                desc: "You receive our quotation with full specs, pricing, and terms. Ask questions — we're available on WhatsApp.",
                icon: "🤝",
              },
              {
                step: "04",
                title: "Confirm & Ship",
                desc: "Once agreed, we manage documentation, quality checks, and logistics until cargo reaches your port.",
                icon: "🚢",
              },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 120} variant="fadeUp">
                <div className="bg-[#f8f9fb] rounded-3xl p-8 relative group hover:bg-navy transition-all duration-300 h-full">
                  <div className="text-5xl font-black text-gray-100 group-hover:text-white/10 absolute top-6 right-8 transition-colors">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-5">{step.icon}</div>
                  <h3 className="text-xl font-black text-navy group-hover:text-white mb-3 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl font-black text-navy mb-4">
              RFQ — Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-wine mx-auto rounded-full" />
          </Reveal>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <Reveal key={i} delay={i * 80} variant="fadeUp">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-navy pr-4">{item.q}</span>
                    <div
                      className={`w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center shrink-0 transition-transform ${openFaq === i ? "rotate-180 bg-wine/10" : ""}`}
                    >
                      <svg
                        className="w-4 h-4 text-navy"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-wine pl-4">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-wine text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Still Have Questions?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Our sourcing experts are available on WhatsApp. Reach out directly
              for urgent requirements, pricing trends, or to discuss your
              sourcing strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919258720699"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white px-10 py-5 rounded-2xl font-black hover:bg-navy/90 transition-all flex items-center justify-center gap-3"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 0C5.393 0 0 5.393 0 12.032c0 2.126.549 4.195 1.593 6.02L.055 24l6.096-1.598A11.933 11.933 0 0012.031 24c6.638 0 12.031-5.394 12.031-12.033S18.669 0 12.031 0zm3.842 17.26c-.164.462-.953.904-1.344.965-.91.135-2.072.102-3.8-1.002-2.126-1.359-3.486-3.771-3.585-3.904-.102-.132-.857-1.144-.857-2.183 0-1.04.536-1.547.728-1.748.191-.192.42-.24.55-.24h.392c.164 0 .38.064.593.588.225.556.55 1.346.6 1.444.05.102.081.222.016.353-.066.132-.1.21-.197.324-.097.114-.2.247-.282.342-.09.096-.188.204-.08.384.11.18.49.799 1.053 1.302.726.65 1.332.85 1.513.946.182.096.289.084.398-.036.11-.12.47-.547.596-.732.126-.186.252-.15.42-.09.168.06.1065.504 1.25.576.185.072.311.114.358.174.047.06.047.348-.117.81z" />
                </svg>
                WhatsApp Us Now
              </a>
              <Link
                to="/contact"
                className="bg-white text-wine px-10 py-5 rounded-2xl font-black hover:bg-navy hover:text-white transition-all"
              >
                Visit Contact Page
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default RFQ;
