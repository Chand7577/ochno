import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";

// ── Scroll-triggered Reveal wrapper ─────────────────────────────────────────
const VARIANTS = {
  fadeUp: {
    h: "opacity-0 translate-y-14 blur-sm",
    v: "opacity-100 translate-y-0 blur-none",
  },
  fadeLeft: {
    h: "opacity-0 -translate-x-20 blur-sm",
    v: "opacity-100 translate-x-0 blur-none",
  },
  fadeRight: {
    h: "opacity-0 translate-x-20 blur-sm",
    v: "opacity-100 translate-x-0 blur-none",
  },
  zoomIn: {
    h: "opacity-0 scale-90 blur-sm",
    v: "opacity-100 scale-100 blur-none",
  },
  flipIn: {
    h: "opacity-0 -rotate-3 scale-95 blur-sm",
    v: "opacity-100 rotate-0 scale-100 blur-none",
  },
  blurIn: {
    h: "opacity-0 blur-2xl scale-105",
    v: "opacity-100 blur-none scale-100",
  },
};

const Reveal = ({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 700,
  threshold = 0.12,
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
      className={`transition-all ease-out will-change-transform ${visible ? v : h} ${className}`}
    >
      {children}
    </div>
  );
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* 
      EMAIL RECIPIENTS:
      - amritchand0713@gmail.com (Testing - active)
      // - bd@ochnology.com (Production - commented)
      // - info@ochnology.com (Production - commented)
      // - projects@ochnology.com (Production - commented)
    */

    const accessKey = "a9715651-7987-40fb-b807-62a8e1bad338";

    const payload = {
      access_key: accessKey,
      subject: `New Inquiry from ${formData.name}`,
      from_name: formData.name,
      name: formData.name,
      email: formData.email,
      message: formData.message,
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
        alert("Thank you for your message. Our team will contact you shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        alert(
          "Submission failed. Please try again or contact us directly via email.",
        );
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-white min-h-screen text-[#002d52] font-sans selection:bg-[#88204a] selection:text-white">
      <Preloader />
      {/* 🚀 Page Header: Premium Accent Identity */}
      <section className="pt-32 pb-20 bg-[#bd1156] relative overflow-hidden">
        {/* Subtle Geometric Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 border border-white/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 border border-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="fadeUp">
            <nav className="flex items-center text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mb-6">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-3 text-white/20">/</span>
              <span className="text-white">Contact Us</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              Get In <span className="text-white/80">Touch.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Main Grid: Form & Info */}
      <section
        id="form"
        className="py-24 bg-[#f1f4f9] border-b border-gray-200 "
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <Reveal variant="fadeUp">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl shadow-[#002d52]/5 border border-white ">
                <h2 className="text-3xl font-black text-[#002d52] mb-2 uppercase">
                  Request Consultation
                </h2>
                <p className="text-gray-500 mb-10 font-light italic">
                  Connect with our procurement leads for global industrial
                  logistics & material sourcing.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-[#002d52] uppercase tracking-widest">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        placeholder="John Doe"
                        className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#88204a]/10 transition-all font-medium"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-[#002d52] uppercase tracking-widest">
                        Business Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        placeholder="john@ochnology.com"
                        className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#88204a]/10 transition-all font-medium"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[#002d52] uppercase tracking-widest">
                      Detailed Requirement
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      rows="5"
                      placeholder="Industrial grade specifications, delivery port, and volume requirements..."
                      className="w-full bg-gray-50 border-none rounded-xl px-5 py-5 focus:ring-2 focus:ring-[#88204a]/10 transition-all font-medium"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#002d52] text-white py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#88204a] transition-all shadow-xl hover:-translate-y-1"
                  >
                    Submit Global Inquiry
                  </button>
                </form>
              </div>
            </Reveal>

            <div className="flex flex-col space-y-12 ">
              <Reveal variant="fadeRight">
                <h2 className="text-3xl font-black text-[#002d52] mb-10 uppercase">
                  Direct Channels
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      ),
                      title: "Registered Address",
                      content:
                        "B-153, Sector Number-4, Defence Colony, Dehradun, Uttarakhand, India 248001",
                    },
                    {
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      ),
                      title: "Office Address",
                      content:
                        "Office No 39, Defence Colony Market Complex, Dehradun -248012, Uttarakhand, India",
                    },
                    {
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      ),
                      title: "Official Email",
                      content:
                        "bd@ochnology.com | projects@ochnology.com | info@ochnology.com",
                    },
                    {
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      ),
                      title: "Operations Support",
                      content:
                        "+91 92587 20699 | (+91) 9286823642 | (+91) 9286823643",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-6 group">
                      <div className="w-14 h-14 shrink-0 rounded-xl bg-white shadow-lg border border-gray-50 flex items-center justify-center text-[#88204a] group-hover:bg-[#88204a] group-hover:text-white transition-all">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#002d52] text-lg uppercase tracking-tight mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 font-light text-sm">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal
                variant="blurIn"
                delay={300}
                className="flex-grow min-h-[350px]"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-full relative">
                  <iframe
                    title="Map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src="https://maps.google.com/maps?q=B-153,%20Sector%20Number-4,%20Defence%20Colony,%20Dehradun%20Uttarakhand,%20India%20248001&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="filter grayscale contrast-125"
                  ></iframe>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#002d52] text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter leading-none">
              Trade <span className="text-[#88204a]">Knowledge.</span>
            </h2>
            <p className="text-gray-400 font-light text-sm">
              Industrial procurement guidelines and global export protocols.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Export Trading Terms?",
                a: "We primarily utilize CIF (Cost, Insurance & Freight) and FOB (Free On Board) to ensure secure global material transit.",
              },
              {
                q: "Quality Documentation?",
                a: "Every consignment includes comprehensive TDS, MSDS, and Country of Origin certification (COA).",
              },
              {
                q: "Shipping Lead Times?",
                a: "Standard sea freight ranges from 15-30 days depending on the destination port and material requirements.",
              },
              {
                q: "Procurement Network?",
                a: "Our strategic network spans over 40+ countries prioritizing reliability and material performance.",
              },
            ].map((faq, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 100}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#88204a]/30 transition-all group">
                  <h4 className="text-lg font-bold mb-3  tracking-light">
                    {faq.q}
                  </h4>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Block */}
      {/* <section className="py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal variant="zoomIn">
            <h3 className="text-gray-300 font-black uppercase tracking-[0.4em] text-[9px] mb-10 opacity-60">
              Global Quality Benchmarks
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-80 transition-all duration-700">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/ISO_9001_Logo.svg/200px-ISO_9001_Logo.svg.png"
                alt="ISO"
                className="h-10 w-auto"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/ISI_mark.svg/150px-ISI_mark.svg.png"
                alt="ISI"
                className="h-10 w-auto"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Federation_of_Indian_Export_Organisations_logo.png/1200px-Federation_of_Indian_Export_Organisations_logo.png"
                alt="FIEO"
                className="h-10 w-auto"
              />
            </div>
          </Reveal>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
