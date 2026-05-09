import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card.jsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table.jsx";
import { Button } from "../components/ui/button.jsx";
import { Badge } from "../components/ui/badge.jsx";
import sles70Img from "../assets/images/sles_70.png";
import sles28Img from "../assets/images/godrej_sles_28.jpeg";
import hydroImg from "../assets/images/sodium_hydro_sulphite.jpg";

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
  Droplets: () => (
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
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
      />
    </svg>
  ),
  Globe: () => (
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
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
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
    const obs = new IntersectionObserver(
      ([e]) => {
        e.isIntersecting && setVisible(true);
      },
      { threshold: 0.1 },
    );
    ref.current && obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const variants = {
    fadeUp: visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
    zoomIn: visible ? "opacity-100 scale-100" : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      style={{ transition: "all 0.8s", transitionDelay: `${delay}ms` }}
      className={`${variants[variant]} ${className}`}
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

const SLES = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={sles70Img}
            alt="SLES Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/50 to-navy/15"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
          <Reveal variant="fadeUp" delay={200}>
            <Badge className="mb-6 mt-12">
              High Foaming Surfactant · Sodium Laureth Sulfate · Industrial
              Cleaning
            </Badge>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight uppercase">
              SLES <span className="text-wine">(Surfactant)</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Sodium Laureth Sulfate (SLES) is a highly effective anionic
              surfactant and cleaning agent. Extensively used in cosmetics,
              personal care, and home care products, it is prized for its
              superior ability to remove dirt, oil, and grease through powerful
              foaming action.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { l: "Primary Use", v: "Cleaning Agent" },
                { l: "Action", v: "High Foaming" },
                { l: "Grades", v: "28% & 70%" },
                { l: "Source", v: "Direct Import" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md"
                >
                  <div className="text-wine font-black text-xs uppercase tracking-tighter mb-1">
                    {stat.l}
                  </div>
                  <div className="text-white text-xs font-medium opacity-60">
                    {stat.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq">
                <Button variant="wine">Request Quotation</Button>
              </Link>
              <a
                href="https://wa.me/919258720699"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">WhatsApp Bulk Enquiry</Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🧪 Applications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Major <span className="text-wine">Applications</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                t: "Personal Care",
                items: [
                  "Shampoo & Conditioners",
                  "Face Wash",
                  "Body Wash",
                  "Handwash",
                ],
                desc: "Provides the rich lather and cleaning power in daily essentials.",
              },
              {
                t: "Home Care",
                items: [
                  "Dishwash Liquid",
                  "Floor Cleaners",
                  "Liquid Detergents",
                  "Surface Sprays",
                ],
                desc: "Efficiently breaks down tough grease and stains on household surfaces.",
              },
              {
                t: "Industrial Use",
                items: [
                  "Car Wash Shampoos",
                  "Textile Cleaning Agents",
                  "Emulsifiers",
                  "Industrial Degreasers",
                ],
                desc: "High-performance formulations for heavy-duty cleaning and processing.",
              },
            ].map((app, i) => (
              <Reveal key={i} delay={i * 200} variant="zoomIn">
                <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all bg-[#fcfcfc] rounded-[2.5rem] p-10">
                  <h4 className="text-2xl font-black text-navy mb-6">
                    {app.t}
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {app.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm font-bold text-gray-500"
                      >
                        <Icons.Check /> {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-400 text-sm italic">{app.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🛠️ Manufacturing Process */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              The Manufacturing <span className="text-wine">Process</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              SLES is produced through a precise three-step chemical reaction.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                s: "Step 01",
                t: "Ethoxylation",
                d: "Fatty alcohol derived from coconut or palm oil is reacted with Ethylene Oxide to create the ethoxylated base material.",
              },
              {
                s: "Step 02",
                t: "Sulfation",
                d: "The base is reacted with Sulfur Trioxide or chlorosulfonic acid, adding the sulfate group (SO₄) which provides the cleaning and foaming power.",
              },
              {
                s: "Step 03",
                t: "Neutralization",
                d: "Sodium Hydroxide is added to stabilize the product, resulting in the final transparent, thick liquid surfactant: SLES.",
              },
            ].map((step, i) => (
              <Reveal
                key={i}
                delay={i * 200}
                variant="fadeUp"
                className="relative"
              >
                <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all h-full border border-gray-100">
                  <div className="text-wine font-black text-xs mb-4 uppercase tracking-widest">
                    {step.s}
                  </div>
                  <h4 className="text-xl font-black text-navy mb-4">
                    {step.t}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 Grades Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Available <span className="text-wine">Grades</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Reveal variant="fadeUp" delay={100}>
              <Card className="border-t-8 border-wine h-full bg-[#fcfcfc] shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-navy">
                    SLES 28%
                  </CardTitle>
                  <CardDescription className="font-bold">
                    Diluted Form
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-500 font-medium">
                    Best for small manufacturers and direct-use applications
                    where additional dilution isn't required.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="navy">Ready-to-use</Badge>
                    <Badge variant="navy" className="ml-2">
                      Safe Handling
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal variant="fadeUp" delay={300}>
              <Card className="border-t-8 border-navy h-full bg-[#fcfcfc] shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-navy">
                    SLES 70%
                  </CardTitle>
                  <CardDescription className="font-bold">
                    Concentrated Form
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-500 font-medium">
                    Standard industrial grade for bulk manufacturing. High
                    cost-efficiency and full control over formulations.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="wine">Economical</Badge>
                    <Badge variant="wine" className="ml-2">
                      Factory Grade
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          <Reveal className="overflow-x-auto rounded-[2rem] shadow-xl border border-gray-100 bg-white">
            <Table>
              <TableHeader>
                <TableRow className="bg-navy hover:bg-navy text-white text-[10px] font-black uppercase tracking-widest h-14 border-none">
                  <TableHead className="text-white px-8 w-1/3">
                    Feature
                  </TableHead>
                  <TableHead className="text-white px-8 w-1/3">
                    SLES 28%
                  </TableHead>
                  <TableHead className="text-white px-8 w-1/3">
                    SLES 70%
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    f: "Concentration",
                    a: "Low (Diluted)",
                    b: "High (Concentrated)",
                  },
                  { f: "Form", a: "Thin Liquid", b: "Thick / Viscous" },
                  {
                    f: "Usage Scale",
                    a: "Direct / Small Scale",
                    b: "Industrial / Bulk",
                  },
                  {
                    f: "Cost Efficiency",
                    a: "Standard",
                    b: "Highly Economical",
                  },
                  { f: "Flexibility", a: "Pre-set", b: "Custom Mix Possible" },
                ].map((row, i) => (
                  <TableRow
                    key={i}
                    className={i % 2 === 0 ? "bg-gray-50/50" : ""}
                  >
                    <TableCell className="font-black text-wine py-6 px-8">
                      {row.f}
                    </TableCell>
                    <TableCell className="font-bold text-navy px-8">
                      {row.a}
                    </TableCell>
                    <TableCell className="font-bold text-gray-500 px-8">
                      {row.b}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Reveal>
        </div>
      </section>

      {/* 🤝 Why Buy From Us */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-wine/5 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="mb-16 text-center">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">
              Global Sourcing <span className="text-wine">Advantages</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              We leverage direct partnerships with the world's largest SLES
              producers in China to deliver unmatched value and reliability to
              the Indian market.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "Direct Import",
                d: "We source directly from trusted Chinese manufacturers, bypassing middlemen to ensure authenticity.",
                i: <Icons.Factory />,
              },
              {
                t: "End-to-End Logistics",
                d: "We handle transportation, customs clearance, and documentation for a hassle-free delivery experience.",
                i: <Icons.Droplets />,
              },
              {
                t: "Quality Assured",
                d: "Every batch undergoes strict quality checks to ensure consistent active matter and high purity.",
                i: <Icons.Shield />,
              },
              {
                t: "Competitive Pricing",
                d: "Massive scale and direct network allow us to offer the most competitive rates in the market.",
                i: <Icons.Check />,
              },
              {
                t: "Reliable Offtake",
                d: "Stable supply chains that meet your production schedules without unexpected delays.",
                i: <Icons.Globe />,
              },
            ].map((item, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                variant="fadeUp"
                className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10"
              >
                <div className="mb-4 text-wine">{item.i}</div>
                <h4 className="text-xl font-bold mb-4">{item.t}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🖼️ Visual Showcase */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal className="mb-16">
            <h2 className="text-4xl font-black text-navy uppercase italic">
              Product <span className="text-wine">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mt-6"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal variant="zoomIn" delay={100}>
              <div className="group relative overflow-hidden bg-white shadow-xl rounded-[2.5rem]">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={sles70Img}
                    alt="SLES 70%"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 border-t border-gray-100 text-left">
                  <h5 className="font-black text-navy uppercase text-lg mb-1">SLES 70%</h5>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">High-Concentration Surfactant</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={300}>
              <div className="group relative overflow-hidden bg-white shadow-xl rounded-[2.5rem]">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={sles28Img}
                    alt="Godrej SLES 28"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 border-t border-gray-100 text-left">
                  <h5 className="font-black text-navy uppercase text-lg mb-1">Godrej SLES 28%</h5>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Premium Domestic Grade</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={500}>
              <div className="group relative overflow-hidden bg-white shadow-xl rounded-[2.5rem]">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={hydroImg}
                    alt="Sodium Hydro Sulphite"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 border-t border-gray-100 text-left">
                  <h5 className="font-black text-navy uppercase text-lg mb-1">Sodium Hydro Sulphite</h5>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Industrial Bleaching Agent</p>
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
                q="1. What is SLES?"
                a="SLES (Sodium Lauryl Ether Sulfate) is an anionic surfactant widely used in personal care and cleaning products for its foaming, cleansing, and emulsifying properties."
              />
              <FAQItem
                q="2. What are the common applications of SLES?"
                a={`SLES is used in:
- Shampoos and body washes
- Liquid detergents
- Dishwashing liquids
- Hand wash formulations
- Industrial cleaners`}
              />
              <FAQItem
                q="3. What are the standard grades of SLES available?"
                a={`The most commonly traded grade is:
SLES 70% (SLES 2EO)
This is the standard grade used in most industrial and commercial applications.`}
              />
              <FAQItem
                q="4. What specifications are important when buying SLES?"
                a={`Key parameters include:
- Active matter (%)
- pH value
- Color (APHA)
- Sodium sulfate content
- Unsulfated matter`}
              />
              <FAQItem
                q="5. Do you supply SLES in bulk quantities?"
                a={`Yes. We supply for industrial and commercial use.
Typical quantities:
- 1 drum (trial)
- 1 container load for regular supply`}
              />
              <FAQItem
                q="6. What is the packaging of SLES?"
                a={`SLES is supplied in:
- HDPE drums (standard packaging)`}
              />
              <FAQItem
                q="7. What are the payment terms?"
                a={`We work on strict and standard trade terms:
- RTGS against loading`}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🏁 Footer CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 uppercase tracking-tight">
              Direct Sourcing.{" "}
              <span className="text-wine">Assured Quality.</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 font-medium leading-relaxed">
              Secure your bulk supply of Sodium Laureth Sulfate (SLES) from
              India's most reliable chemical sourcing partner.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq">
                <Button variant="wine" size="lg">
                  Get Quote Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="default" size="lg">
                  Contact Sales Desk
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default SLES;
