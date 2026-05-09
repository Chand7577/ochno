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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog.jsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion.jsx";
import { Button } from "../components/ui/button.jsx";
import { Badge } from "../components/ui/badge.jsx";
import titaniumImg from "../assets/images/titanium_dioxide_powder.jpg";
import zincImg from "../assets/images/zinc_oxide_powder.jpg";

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
  Beaker: () => (
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
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 002.828 2.828l2.387-2.387a2 2 0 00.547-1.022l.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l.417-2.086a2 2 0 00-1.022-2.387l-2.387-2.387a2 2 0 00-2.828 2.828l2.387 2.387a2 2 0 001.022.547l2.086.417"
      />
    </svg>
  ),
  Sun: () => (
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
        d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
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

const TitaniumDioxide = () => {
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const applications = [
    {
      t: "Paint industry (No.1 Global Buyer)",
      img: "https://media.istockphoto.com/id/1379191010/photo/man-painting-metal-in-factory.jpg?s=612x612&w=0&k=20&c=NzC7QHl85eo94kJnJZ93y-QFVxgMl8kddxmAD_KrXB8=",
      desc: "Walls, car paint, and industrial coatings. Used for its bright white color and strong covering power.",
      details: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed font-medium">
            Sabse zyada consumption yahin hota hai. It ensures wall paint
            manufacturers and automotive companies achieve the ultimate bright
            white finish.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-gray-500">
              <Icons.Check /> Brilliant White Visual Look
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-500">
              <Icons.Check /> Maximum Surface Coverage
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-500">
              <Icons.Check /> Weather & UV Resistant
            </li>
          </ul>
        </div>
      ),
    },
    {
      t: "Plastic & Rubber Industry",
      img: "https://industrialaircompany.com/wp-content/uploads/2025/03/Kunststof-en-verpakkingen.webp",
      details: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed font-medium">
            It is used to prevent the breakdown of plastics exposed to sunlight
            while providing a clean, bright finish.
          </p>
        </div>
      ),
    },
    {
      t: "Cosmetics & Personal Care",
      img: "https://media.licdn.com/dms/image/v2/D4D12AQElPc6GQD_dKw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699261569159?e=2147483647&v=beta&t=FhkTlWRDOGe-S_8QPzep5YnhSBsuH5lKLi53O1dIiao",
      desc: "Sunscreen, cream, and powder. Provides skin protection and a whitening effect.",
      details: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed font-medium">
            Physical block against UV rays. Inert and skin-safe for premium
            skincare formulations.
          </p>
        </div>
      ),
    },
    {
      t: "Pharma (Medicines)",
      img: "https://www.pharmaadda.in/wp-content/uploads/2020/02/Top-Pharma-Manufacturer-in-India.jpg",
      desc: "Tablet coating companies. Makes tablets white, smooth, and light-resistant.",
      details: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed font-medium">
            Ensures chemical stability of the drug by shielding it from
            environmental light exposure.
          </p>
        </div>
      ),
    },
    {
      t: "Paper & Printing Ink",
      img: "https://2.wlimg.com/product_images/bc-full/2022/9/10792146/paper-cup-water-based-printing-ink-1664257570-6558981.jpeg",
      desc: "Printing and packaging paper. Used to increase brightness and opacity.",
      details: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed font-medium">
            Prevents ink from bleeding through white paper and creates
            high-contrast prints.
          </p>
        </div>
      ),
    },
    {
      t: "Food Industry (Limited Use)",
      img: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-1765569,resizemode-75,msid-87332120/industry/cons-products/food/with-big-firms-moving-in-uttar-pradeshs-food-processing-industry-is-all-juiced-up.jpg",
      desc: "Candy, chewing gum, and icing where permitted. Used for its bright white visual look.",
      details: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed font-medium italic">
            Note: Restricted in many countries. We supply only compliant grades
            for food applications.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={titaniumImg}
            alt="Titanium Dioxide Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
          <Reveal variant="fadeUp" delay={200}>
            <Badge className="mb-6 mt-12">
              Rutile & Anatase Grades · High Opacity · Ultra White
            </Badge>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight uppercase">
              Titanium <span className="text-wine">Dioxide (TiO₂)</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Industrial pigment for unparalleled brightness. Superior covering
              power (Opacity), UV reflection, and chemical stability. As a
              white, odorless inorganic powder, TiO₂ is the gold standard for
              achieving high-refractive, ultra-white finishes across global
              manufacturing industries.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={800}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { l: "High Opacity", v: "Maximum Hide" },
                { l: "UV Stable", v: "Anti-Yellowing" },
                { l: "Refractive Index", v: "High Brightness" },
                { l: "Chemically Inert", v: "Safe & Stable" },
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
                <Button variant="wine">Request Quote</Button>
              </Link>
              <a
                href="https://wa.me/919258720699?text=I%20am%20interested%20in%20Titanium%20Dioxide%20grades."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">WhatsApp Export Desk</Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 🔬 Grades Comparison Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Technical <span className="text-wine">Grade Comparison</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Reveal variant="fadeUp" delay={100}>
              <Card className="border-t-8 border-wine h-full transition-all hover:shadow-2xl bg-[#fcfcfc]">
                <CardHeader className="p-10">
                  <Badge variant="navy" className="w-fit mb-4">
                    Prime Multi-Purpose
                  </Badge>
                  <CardTitle className="text-3xl font-black text-navy border-b border-gray-100 pb-4">
                    Rutile Grade
                  </CardTitle>
                  <CardDescription className="text-wine font-black pt-4">
                    HS CODE: 32061110
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-10 pt-0 space-y-6">
                  <p className="text-gray-500 font-medium leading-relaxed italic border-l-4 border-wine/20 pl-4">
                    "The most widely used grade globally. Designed for maximum
                    light scattering efficiency and extreme weather resistance."
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="text-[10px] font-black text-navy uppercase block mb-1">
                        Key Characteristics:
                      </span>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-3 text-sm font-bold text-navy/80">
                          <Icons.Check /> Strong White Covering (High Opacity)
                        </li>
                        <li className="flex items-center gap-3 text-sm font-bold text-navy/80">
                          <Icons.Check /> Maximum UV Protection
                        </li>
                        <li className="flex items-center gap-3 text-sm font-bold text-navy/80">
                          <Icons.Check /> Hard & Chemically Stable
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal variant="fadeUp" delay={300}>
              <Card className="border-t-8 border-navy h-full transition-all hover:shadow-2xl bg-[#fcfcfc]">
                <CardHeader className="p-10">
                  <Badge variant="navy" className="w-fit mb-4">
                    Cost Efficiency Focused
                  </Badge>
                  <CardTitle className="text-3xl font-black text-navy border-b border-gray-100 pb-4">
                    Anatase Grade
                  </CardTitle>
                  <CardDescription className="text-navy/50 font-black pt-4">
                    HS CODE: 32061190
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-10 pt-0 space-y-6">
                  <p className="text-gray-500 font-medium leading-relaxed italic border-l-4 border-navy/10 pl-4">
                    "Specifically balanced for indoor applications and fabric
                    whitening where cost is a primary consideration."
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="text-[10px] font-black text-navy uppercase block mb-1">
                        Key Characteristics:
                      </span>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-3 text-sm font-bold text-navy/80">
                          <Icons.Check /> Soft Performance Type
                        </li>
                        <li className="flex items-center gap-3 text-sm font-bold text-navy/80">
                          <Icons.Check /> Fast Dispersion in Water
                        </li>
                        <li className="flex items-center gap-3 text-sm font-bold text-navy/80">
                          <Icons.Check /> Optimized Surface Area
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          {/* 📊 Comparison Table */}
          <Reveal className="overflow-x-auto rounded-[2rem] shadow-xl border border-gray-100 bg-white">
            <Table>
              <TableHeader>
                <TableRow className="bg-navy hover:bg-navy text-white text-[10px] font-black uppercase tracking-widest h-14 border-none">
                  <TableHead className="text-white px-8 w-1/3">
                    Feature
                  </TableHead>
                  <TableHead className="text-white px-8 w-1/3">
                    Rutile (Highest Usage)
                  </TableHead>
                  <TableHead className="text-white px-8 w-1/3">
                    Anatase (Soft Type)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    f: "Strength / Hiding Power",
                    r: "High (Best Performance)",
                    a: "Medium (Standard)",
                  },
                  {
                    f: "Light Blocking Ability",
                    r: "Maximum (Total Block)",
                    a: "Partial (Soft Tone)",
                  },
                  {
                    f: "UV / Weather Resistance",
                    r: "Best (Outdoor Durable)",
                    a: "Weak (Indoor Preferred)",
                  },
                  {
                    f: "Manufacturing Grade",
                    r: "Stable / Hard Crystal",
                    a: "Softer Crystal Structure",
                  },
                  {
                    f: "Commercial Value",
                    r: "Premium Industrial Choice",
                    a: "Cost-Oriented Selection",
                  },
                  {
                    f: "Primary Industries",
                    r: "Automotive, External Paint, PVC",
                    a: "Paper, Fabric, Inks",
                  },
                ].map((row, i) => (
                  <TableRow
                    key={i}
                    className={i % 2 === 0 ? "bg-gray-50/50" : ""}
                  >
                    <TableCell className="font-black text-wine py-6 px-8">
                      {row.f}
                    </TableCell>
                    <TableCell className="font-bold text-navy px-8">
                      {row.r}
                    </TableCell>
                    <TableCell className="font-bold text-gray-500 px-8">
                      {row.a}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Reveal>
        </div>
      </section>

      {/* 🚀 Applications Grid */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              Industrial <span className="text-wine">Applications</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Click to see in-depth technical requirements for each industry.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, i) => (
              <Reveal key={i} delay={i * 100} variant="zoomIn">
                <Card
                  className="group overflow-hidden cursor-pointer h-full border-none shadow-sm hover:shadow-2xl transition-all"
                  onClick={() => setSelectedApp(app)}
                >
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={app.img}
                      alt={app.t}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-xl font-black text-navy">
                      {app.t}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6">
                      {app.desc}
                    </p>
                    <div className="text-wine font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details &rarr;
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🛠️ Manufacturing Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-wine/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <Badge variant="navy" className="mb-4">
              End-to-End Extraction
            </Badge>
            <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tight">
              The Manufacturing <span className="text-wine">Process</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                s: "Step 01",
                t: "Extraction",
                d: "Ilmenite and Rutile ores are extracted from verified mineral mines.",
              },
              {
                s: "Step 02",
                t: "Chemical Treatment",
                d: "Ore is treated using the Sulfate or Chloride process for high purity.",
              },
              {
                s: "Step 03",
                t: "Purification",
                d: "Sophisticated filtration removes all impurities to ensure safe usage.",
              },
              {
                s: "Step 04",
                t: "Milling",
                d: "Final purification produces the ultra-fine white powder (TiO₂).",
              },
            ].map((step, i) => (
              <Reveal
                key={i}
                delay={i * 200}
                variant="fadeUp"
                className="relative"
              >
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gray-100 z-0"></div>
                )}
                <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm relative z-10 hover:shadow-xl transition-all h-full">
                  <div className="text-wine font-black text-xs mb-4 uppercase tracking-[0.2em]">
                    {step.s}
                  </div>
                  <h4 className="text-navy font-black text-lg mb-4">
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

      {/* 🤝 Why Partner with Us */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal className="mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              OCH Partnership <span className="text-wine">Advantages</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We operate as a trusted aggregator, bridging the gap between
              high-volume manufacturers and specific industrial needs.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                t: "Verified Sources",
                d: "We source from multiple verified manufacturers across India to ensure consistent supply and stable quality across lots.",
              },
              {
                t: "Best Market Price",
                d: "Through high-volume procurement, we offer competitive pricing with flexible quantity options for regular buyers.",
              },
              {
                t: "Technical Documentation",
                d: "All consignments include full COA (Certificate of Analysis) and TDS (Technical Data Sheet) on request.",
              },
              {
                t: "Strict Quality Control",
                d: "Each batch undergoes rigorous quality checking before dispatch to ensure its fine, bright white properties.",
              },
              {
                t: "Export Expertise",
                d: "Fast response times and smooth order handling for domestic and international export requirements.",
              },
              {
                t: "Grade Versatility",
                d: "Availability of Rutile and Anatase grades in various particle sizes and surface treatments.",
              },
            ].map((item, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                variant="fadeUp"
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm h-full flex flex-col"
              >
                <h4 className="text-xl font-black text-navy mb-4 border-l-4 border-wine pl-4">
                  {item.t}
                </h4>
                <p className="text-gray-500 text-sm font-medium leading-loose flex-1">
                  {item.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ❓ Frequent Technical Questions */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-4">
              Technical <span className="text-wine">FAQ</span>
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full mb-8"></div>
          </Reveal>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the physical appearance of Titanium Dioxide?",
                a: "It is a brilliant white, odorless fine powder (similar to soft flour). It is prized for its ability to reflect light, giving surfaces an ultra-bright white look.",
              },
              {
                q: "Is TiO2 soluble in water?",
                a: "No, Titanium Dioxide is an inorganic pigment that does not dissolve in water. It is dispersed within a medium (like paint or plastic) rather than dissolved.",
              },
              {
                q: "Why is TiO2 used in sunscreens?",
                a: "It acts as a physical UV filter. Instead of absorbing light, it reflects UV rays away from the skin, providing high-level protection against sunburn and aging.",
              },
              {
                q: "What does 'hiding power' mean in the context of TiO2?",
                a: "Hiding power (or Opacity) is the ability of the pigment to block light from passing through. High hiding power means you need fewer coats of paint to completely cover a dark surface.",
              },
              {
                q: "Which grade is better: Rutile or Anatase?",
                a: "It depends on the application. Rutile is superior for outdoor durability and maximum whiteness (Paints/Plastics), while Anatase is more cost-effective for indoor uses like paper and textile whitening.",
              },
            ].map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-[#f8f9fb] px-8 rounded-3xl border border-gray-100"
              >
                <AccordionTrigger className="text-base font-black text-navy">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed text-base font-medium pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal variant="zoomIn" delay={100}>
              <div className="group relative overflow-hidden bg-white shadow-xl rounded-[2.5rem]">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={titaniumImg}
                    alt="Titanium Dioxide"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 border-t border-gray-100">
                  <h5 className="font-black text-navy uppercase text-lg mb-1">Titanium Dioxide</h5>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Ultra-White Pigment Powder</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="zoomIn" delay={300}>
              <div className="group relative overflow-hidden bg-white shadow-xl rounded-[2.5rem]">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={zincImg}
                    alt="Zinc Oxide"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 border-t border-gray-100">
                  <h5 className="font-black text-navy uppercase text-lg mb-1">Zinc Oxide</h5>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Premium Rubber & Coating Grade</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 🏁 Footer CTA */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <Reveal variant="fadeUp">
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">
              Source <span className="text-wine">Premium TiO₂</span> Today
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light">
              Join top paint and plastic manufacturers in securing high-purity
              Titanium Dioxide for your supply chain.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/rfq">
                <Button variant="wine">Get Current Quotation</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Contact Sales</Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modal / Dialog */}
      <Dialog open={!!selectedApp} onOpenChange={() => setSelectedApp(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-[3rem] border-none">
          <div className="h-64 relative">
            <img
              src={selectedApp?.img}
              alt={selectedApp?.t}
              className="w-full h-full object-cover"
            />
            <button
              className="absolute top-6 right-6 bg-navy text-white rounded-full p-2 hover:bg-wine transition-colors shadow-lg z-20"
              onClick={() => setSelectedApp(null)}
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-12">
            <DialogHeader>
              <Badge variant="navy" className="w-fit mb-4">
                Application Insights
              </Badge>
              <DialogTitle className="text-3xl font-black text-navy mb-4 uppercase tracking-tighter">
                {selectedApp?.t}
              </DialogTitle>
            </DialogHeader>
            <div className="w-16 h-1.5 bg-wine rounded-full mb-8"></div>
            <div className="mt-4">{selectedApp?.details}</div>
            <div className="mt-12 border-t border-gray-100 pt-8">
              <Button
                onClick={() => setSelectedApp(null)}
                variant="default"
                className="w-full"
              >
                Close Insights
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TitaniumDioxide;
