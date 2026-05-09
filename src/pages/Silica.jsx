import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table.jsx";
import p2 from "../assets/p-2.jpeg";
import p3 from "../assets/p-3.jpeg";
import s1 from "../assets/s-1.jpeg";
import s2 from "../assets/s-2.jpeg";
import s3 from "../assets/s-3.jpeg";
import s4 from "../assets/s-4.jpeg";
import v1 from "../assets/v1.jpeg";
import v2 from "../assets/v2.jpeg";
import v3 from "../assets/v3.jpeg";
import v4 from "../assets/v4.jpeg";
import v5 from "../assets/v5.jpeg";
import v6 from "../assets/v6.jpeg";
import v7 from "../assets/v7.jpeg";
import nablReport from "../assets/silica fume nabl report.pdf";
import sgsReport from "../assets/silica fume sgs report ochnology.PDF";
import heroImage from "../assets/hero-silica.jpeg";
import heroVd from "../assets/silicaVd.mp4";
import galleryVideo from "../assets/loadig-silica.mp4";
import waVideo from "../assets/WhatsApp Video 2026-04-06 at 12.03.40 PM.mp4";
const waLink =
  "https://wa.me/919258720699?text=I%20am%20interested%20in%20Silica%20Fume.%20Please%20share%20quotation,%20TDS,%20and%20details.";

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

// ── Blog Data ────────────────────────────────────────────────────────────────
const BLOGS = [
  {
    id: 1,
    tag: "Featured Article",
    tagColor: "bg-[#88204a] text-white",
    date: "March 2025",
    read: "12 min read",
    category: "🏗️ Construction Tech",
    title: "How Microsilica Is Redefining the Future of 3D Concrete Printing",
    image: "/assets/industrial_hero_bg_1775196498199.png",
    excerpt:
      "An in-depth technical exploration into how ultra-fine microsilica particles are enabling layer-by-layer concrete deposition to achieve structural-grade compressive strength.",
    body: [
      {
        heading: "The 3D Concrete Revolution",
        text: "Additive construction—commonly called 3D concrete printing—has progressed from laboratory curiosity to real-world implementation in bridges, housing units, and modular structures. Yet the core challenge remains: conventional concrete mixes lack the rheological precision required for layer-by-layer deposition without slumping or cold-joint failures. Standard concrete relies on heavy formwork to maintain shape; 3D printed concrete must maintain its own shape immediately upon extrusion while supporting the weight of subsequent layers. This requires a delicate balance of static yield stress and dynamic viscosity.",
      },
      {
        heading: "Where Microsilica Changes Everything",
        text: "Silica Fume (microsilica) with its average particle diameter of 0.1–0.3 µm fills interstitial voids within the cement paste at a nano-scale level. When added at 8–12% by cement weight to printable concrete mixes, it simultaneously improves green strength (the ability to hold shape immediately after extrusion) and final compressive performance. This is achieved through the 'filler effect' where the ultrafine particles occupy the spaces between cement grains, reducing the water demand for a given flow and increasing the density of the matrix from the moment of deposition.",
      },
      {
        heading: "The Chemical Mechanism: Pozzolanic Acceleration",
        text: "Beyond the physical filler effect, microsilica triggers a rapid pozzolanic reaction. In the presence of water, it reacts with the calcium hydroxide (CH) produced during cement hydration to form additional Calcium Silicate Hydrate (C-S-H) gel. This gel is the primary source of strength in concrete. Because microsilica has such an immense surface area (typically 15,000–30,000 m²/kg), this reaction proceeds much faster than with other pozzocans like fly ash, providing the early structural integrity required for high-rise 3D printing.",
      },
      {
        heading: "Optimized Mix Design for Printability",
        text: "Successful printable mixes incorporating microsilica typically include: high Portland cement content (500–600 kg/m³), Silica Fume at 50–70 kg/m³, superplasticizer for workability control, and fine aggregate only (no coarse aggregate) below 2mm. The pozzolanic reaction between SiO₂ and calcium hydroxide (CH) produces additional C-S-H gel that dramatically densifies the microstructure. The inclusion of microsilica also reduces the risk of 'cold joints' between layers by increasing the thixotropic nature of the mix—it flows under pressure but sets rapidly once static.",
      },
      {
        heading: "Real-World Performance Results",
        text: "Field data from 3D-printed housing projects using microsilica-enhanced mixes show 40–60% reduction in layer interface defects, superior bond strength between printed layers (≥2.5 MPa tensile), and shrinkage reduction of up to 25% compared to conventional printable mixes — directly attributable to the dense particle packing effect of microsilica. Furthermore, the resulting structures exhibit a surface finish quality that often removes the need for secondary plastering, significantly lowering overall project costs.",
      },
    ],
  },
  {
    id: 2,
    tag: "Comparison Guide",
    tagColor: "bg-[#002d52]/10 text-[#002d52]",
    date: "Feb 2025",
    read: "10 min read",
    category: "⚗️ Materials Science",
    title:
      "Microsilica, Fly Ash & Slag: Which SCM Delivers the Strongest Concrete?",
    image: "/assets/silica_fume_demo_1775196627627.png",
    excerpt:
      "A technically rigorous side-by-side breakdown of the three dominant supplementary cementitious materials — reactivity, cost, and structural output compared.",
    body: [
      {
        heading: "Understanding SCMs",
        text: "Supplementary Cementitious Materials (SCMs) replace a portion of Portland cement in concrete. The three dominant options — Silica Fume, Fly Ash (Class C and F), and Ground Granulated Blast-Furnace Slag (GGBS) — each have distinct chemical compositions, reaction mechanisms, and performance profiles. Choosing the right SCM is not just a matter of availability, but of matching the material's specific chemistry to the project's structural requirements.",
      },
      {
        heading: "Silica Fume: Maximum Strength",
        text: "With SiO₂ content of 85–97%, Silica Fume is the most reactive SCM. Its ultrafine particles (100–300 nm) fill voids at the nano level and react rapidly with calcium hydroxide to form dense C-S-H gel. Typical dosages of 5–10% produce compressive strength gains of 20–35% over control mixes and drastically reduce chloride permeability (RCPT values below 500 coulombs). It is the only SCM capable of consistently producing Ultra-High Performance Concrete (UHPC) with strengths exceeding 150 MPa.",
      },
      {
        heading: "Fly Ash: Economy & Workability",
        text: "Class F fly ash (low calcium) is a slow-reacting pozzolan that improves long-term strength and workability at replacement rates of 15–30%. It is significantly cheaper and reduces heat of hydration — ideal for mass concrete like dam foundations. However, early-age strength development is significantly slower, and it cannot match the extreme permeability reduction or the rapid densification achieved by microsilica. In cold weather, Fly Ash mixes can be problematic without significant acceleration.",
      },
      {
        heading: "GGBS: Durability in Sulfate Environments",
        text: "Ground slag at 30–70% replacement significantly reduces heat of hydration and provides excellent resistance to sulfate attack and alkali-silica reaction (ASR). It has moderate strength gain characteristics and is preferred for infrastructure exposed to chemically aggressive soils or groundwater. However, its microstructural densification is far less pronounced than microsilica, and the high replacement rates required can lead to prolonged setting times, which may delay construction schedules.",
      },
      {
        heading: "The Verdict: Performance vs. Utility",
        text: "For maximum strength, minimum permeability, and marine/industrial durability, Silica Fume outperforms all alternatives. Fly Ash wins on economy for general residential or low-rise construction. GGBS excels in sulfate-rich environments or where heat of hydration must be strictly limited. For critical infrastructure — bridges, harbours, high-rise foundations — there is no technical substitute for microsilica. The most advanced engineers often use a ternary blend—combining OPC, microsilica (for early strength and density), and fly ash or slag (for long-term refinement and cost-efficiency).",
      },
    ],
  },
  {
    id: 3,
    tag: "Technical Hub",
    tagColor: "bg-[#88204a]/20 text-[#88204a]",
    date: "April 2025",
    read: "8 min read",
    category: "📋 Technical Guide",
    title:
      "Dosage Rates, Mix Design & TDS Interpretation: A Practical Field Guide",
    image: "/assets/ochnology_facility_demo_1775196701617.png",
    excerpt:
      "Translating technical data sheets into actionable on-site dosage decisions — for concrete engineers, procurement leads, and QA professionals.",
    body: [
      {
        heading: "Reading a Silica Fume TDS",
        text: "A Technical Data Sheet (TDS) for Silica Fume typically reports: SiO₂ content (%), moisture content (%), specific surface area (m²/kg), loss on ignition (LOI %), pozzolanic activity index (PAI), and bulk density (kg/m³). Higher SiO₂ content (90%+) usually correlates with higher reactivity. LOI reflects the carbon content; high carbon can interfere with air-entrainment, a critical consideration for freeze-thaw durability. Always ensure the specific surface area exceeds 15,000 m²/kg for optimal pozzolanic efficiency.",
      },
      {
        heading: "Dosage Guidelines by Application",
        text: "General structural concrete: 5–8% by cement weight. High-performance concrete (HPC): 8–12%. Marine/chemically resistant structures: 10–15%. Shotcrete/repair mortars: 10–15%. Refractory castables: 2–8%. Grout and self-compacting concrete: 5–10%. Always combine with a compatible superplasticizer (Polycarboxylate Ether or PCE based) to maintain workability at higher dosages, as the massive surface area of microsilica increases the mix's total water demand significantly.",
      },
      {
        heading: "Quality Control Protocols",
        text: "On-site quality control must include verifying the 'densification level' of the product. Undensified microsilica is highly reactive but difficult to handle and transport. Densified microsilica (bulk density 500-700 kg/m³) is easier to handle but requires more intensive mixing (typically 90-120 seconds in a high-shear mixer) to ensure the particles are fully dispersed. Failure to disperse the densified spheres can result in 'silica fume balls' which act as weak spots in the finished concrete.",
      },
      {
        heading: "Common Mix Design Mistakes",
        text: "Overdosing microsilica beyond 15% without superplasticizer adjustment creates stiff, unworkable mixes that are prone to plastic shrinkage cracking. Underdosing below 5% yields minimal performance improvement beyond what fly ash could provide. Skipping the pozzolanic activity index (PAI) test leads to using reactive microsilica as inert filler. Always request batch-specific test reports — not just standard TDS certificates — to ensure consistency across large pours.",
      },
    ],
  },
  {
    id: 4,
    tag: "ROI Analysis",
    tagColor: "bg-[#88204a]/10 text-[#88204a]",
    date: "Jan 2025",
    read: "9 min read",
    category: "💰 Cost & Value",
    title: "The Real ROI of Silica Fume in High-Rise Construction Projects",
    image: "/assets/industrial_hero_bg_1775196498199.png",
    excerpt:
      "Beyond strength gains — a quantified cost-benefit breakdown showing how microsilica dosing reduces long-term maintenance costs and extends structural service life.",
    body: [
      {
        heading: "The Initial Cost Premium",
        text: "Silica Fume typically costs 4–8× more per tonne than Portland cement. At a 10% replacement rate in a 400 kg/m³ cement mix, this adds approximately ₹800–1,200/m³ to material costs — a figure that often deters procurement managers who evaluate only first-cost metrics. However, this narrow view misses the significant savings achieved in other areas of the project.",
      },
      {
        heading: "Where the ROI Actually Comes From",
        text: "The real return is in life-cycle cost reduction: a 50-year reinforced concrete structure using microsilica typically requires 60–70% fewer maintenance interventions than standard concrete. Chloride penetration depth after 25 years is 3–5× lower, delaying rebar corrosion onset by 15–20 years. In marine or high-humidity environments, this extends economic service life from 30 to 60+ years, effectively doubling the asset's utility value with only a minor initial investment.",
      },
      {
        heading: "High-Rise Specific Benefits",
        text: "In multi-storey construction, microsilica enables higher-strength columns with smaller cross-sections (C80–C100 concrete), freeing usable floor area—worth crores per floor in premium urban developments like Mumbai or Dubai. Structural self-weight reduction also lowers foundation costs and enables taller structures on equivalent footers. When you account for the extra square footage available for lease, the microsilica pays for itself several times over before the building even opens.",
      },
      {
        heading: "The Sustainability Angle",
        text: "By increasing the strength and durability of concrete, microsilica allows for 'material optimization'—using less total concrete to support the same structural load. Furthermore, because the structure lasts significantly longer, the carbon footprint associated with demolition and replacement is drastically reduced. In modern ESG-focused development, these metrics are increasingly becoming as valuable as the financial ROI.",
      },
      {
        heading: "The Quantified Result",
        text: "Studies on 30-storey office buildings in India show a 2.3× return on the initial microsilica material premium within 10 years when full lifecycle maintenance cost avoidance is accounted for. The ROI becomes exponentially larger in coastal districts, industrial facilities, and any structure exposed to cyclic loading or chemical attack. It is not an 'extra cost', but a high-yield insurance policy for structural integrity.",
      },
    ],
  },
  {
    id: 5,
    tag: "Marine Engineering",
    tagColor: "bg-[#002d52] text-white",
    date: "Dec 2024",
    read: "11 min read",
    category: "🌊 Marine Structures",
    title: "Why Marine Concrete Fails Without Microsilica",
    image: "/assets/electrode_scrap_demo_1775196597182.png",
    excerpt:
      "Chloride penetration, sulfate attack, and rebar corrosion — how microsilica's dense pozzolanic matrix is the only proven barrier to marine-grade concrete failure.",
    body: [
      {
        heading: "The Marine Degradation Mechanism",
        text: "Seawater contains chloride ions (Cl⁻) at ~19,000 mg/L, sulfate ions at ~2,700 mg/L, and magnesium at ~1,350 mg/L — each independently capable of degrading standard concrete. Chlorides penetrate through capillary pores, depassivate rebar, and initiate expansive corrosion. Once the rebar expands, it cracks the surrounding concrete, creating more pathways for saltwater to enter. Sulfates attack C₃A phases, causing expansion and cracking from within. Standard OPC concrete provides no meaningful resistance to any of these mechanisms beyond 15–20 years in a splash zone.",
      },
      {
        heading: "How Microsilica Defeats Marine Attack",
        text: "At 10–15% dosage, Silica Fume reduces total porosity by 25–40% and eliminates virtually all capillary pores above 50 nm in diameter. Rapid Chloride Permeability Test (RCPT) values drop below 500 coulombs (compared to 3,000–5,000 for standard concrete) — classified as 'very low' chloride permeability per ASTM C1202. The dense C-S-H matrix formed by the pozzolanic reaction physically blocks ion transport pathways, making the concrete nearly impermeable to sea salts.",
      },
      {
        heading: "Structural Performance Data",
        text: "IS 456 and ACI 357R guidelines for marine concrete now explicitly require pozzolanic supplementation for extreme exposure conditions. Structures like the Bandra-Worli Sea Link and major Indian port expansions specify microsilica-enhanced concrete (typically Grade M50–M60 with 10% microsilica) as a standard requirement. Chloride threshold depth at 50 years: 8–12mm for microsilica concrete vs. 60–80mm for standard OPC. This data is the difference between a functional pier and a crumbling safety hazard.",
      },
      {
        heading: "Specification Recommendation",
        text: "For any marine or coastal concrete application: specify minimum 10% microsilica by cementitious weight, maximum w/cm ratio of 0.36, minimum Grade M45, and 75mm cover to rebar. Request RCPT test results below 1,000 coulombs and a batch-specific TDS from the supplier confirming SiO₂ ≥ 92%. In the harshest splash zones, increase the microsilica dosage to 15% and consider the use of calcium nitrite based corrosion inhibitors in tandem with the physical barrier provided by the silica fume.",
      },
    ],
  },
];

// ── Blog Modal Component ─────────────────────────────────────────────────────
const BlogModal = ({ blog, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Panel */}
      <div className="relative z-10 bg-white w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[88vh] rounded-t-2xl sm:rounded-xl overflow-hidden shadow-2xl flex flex-col">
        {/* Hero Image */}
        <div className="relative h-44 sm:h-56 flex-shrink-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002d52]/90 via-[#002d52]/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span
              className={`inline-block px-3 py-1 ${blog.tagColor} text-xs font-bold rounded-full mb-3`}
            >
              {blog.tag}
            </span>
            <h2 className="text-white text-xl sm:text-2xl font-extrabold leading-tight">
              {blog.title}
            </h2>
          </div>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-[#88204a] text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors backdrop-blur-sm"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Meta strip */}
        <div className="flex items-center gap-4 px-6 py-3 border-b border-gray-100 flex-wrap bg-[#f8f9fb] flex-shrink-0">
          <span className="text-gray-500 text-xs">📅 {blog.date}</span>
          <span className="text-gray-500 text-xs">📖 {blog.read}</span>
          <span className="text-gray-500 text-xs">{blog.category}</span>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-grow px-6 py-6 space-y-6">
          <p className="text-gray-600 text-base leading-relaxed border-l-4 border-[#88204a] pl-4 italic">
            {blog.excerpt}
          </p>
          {blog.body.map((section, i) => (
            <div key={i}>
              <h3 className="text-lg font-bold text-[#002d52] mb-2 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#88204a] rounded-full inline-block flex-shrink-0"></span>
                {section.heading}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-gray-100 bg-white flex flex-col sm:flex-row gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#88204a] text-white py-3 rounded-xl font-bold text-sm text-center hover:bg-[#6c1739] transition-colors"
          >
            💬 Enquire on WhatsApp
          </a>
          <button
            onClick={onClose}
            className="flex-1 bg-[#f0f4f8] text-[#002d52] py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Video Modal Component ────────────────────────────────────────────────────
const VideoModal = ({ src, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      ></div>
      <div className="relative z-10 w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        <button
          onClick={onClose}
          className="absolute z-20 top-4 right-4 bg-black/60 hover:bg-[#88204a] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors backdrop-blur-sm"
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
        <video
          src={src}
          className="w-full h-auto max-h-[85vh] object-contain"
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
};

// ── Main Component ───────────────────────────────────────────────────────────
const Silica = () => {
  const [activeBlog, setActiveBlog] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-[#002d52] font-sans overflow-x-hidden">
      <style>{`
        @keyframes slideInFromLeft {
          0%   { opacity: 0; transform: translateX(-80px); filter: blur(12px); }
          60%  { opacity: 0.8; filter: blur(2px); }
          100% { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        @keyframes slideInFromRight {
          0%   { opacity: 0; transform: translateX(80px); filter: blur(12px); }
          60%  { opacity: 0.8; filter: blur(2px); }
          100% { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        @keyframes fadeInBlurUp {
          0%   { opacity: 0; transform: translateY(32px); filter: blur(10px); }
          70%  { opacity: 0.85; filter: blur(1px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes fadeInScale {
          0%   { opacity: 0; transform: scale(0.85) translateY(16px); filter: blur(6px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        @keyframes badgePop {
          0%   { opacity: 0; transform: translateX(-40px) scale(0.9); filter: blur(8px); }
          60%  { transform: translateX(4px) scale(1.03); filter: blur(0); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: rotate(45deg) scale(1); opacity: 0.8; }
          50% { transform: rotate(45deg) scale(1.15); opacity: 1; }
        }
        .anim-hero-badge   { animation: badgePop 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .anim-title-left   { animation: slideInFromLeft 1.1s cubic-bezier(0.22,1,0.36,1) 0.35s both; }
        .anim-title-right  { animation: slideInFromRight 1.1s cubic-bezier(0.22,1,0.36,1) 0.55s both; }
        .anim-subtitle     { animation: fadeInBlurUp 1.0s cubic-bezier(0.22,1,0.36,1) 0.85s both; }
        .anim-cta-1        { animation: fadeInScale 0.8s cubic-bezier(0.34,1.56,0.64,1) 1.1s both; }
        .anim-cta-2        { animation: fadeInScale 0.8s cubic-bezier(0.34,1.56,0.64,1) 1.3s both; }
      `}</style>
      <Preloader />

      {/* 1. Hero Section (Top Banner) */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-center items-center text-center overflow-hidden pt-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImage}
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          fetchpriority="high"
        >
          <source src={heroVd} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#002d52]/90 via-[#002d52]/70 to-[#002d52]/90 z-10"></div>

        <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center">
          {/* Badge: slides in from left with blur */}
          <span className="anim-hero-badge inline-block px-4 py-1.5 bg-[#88204a]/20 border border-[#88204a]/50 text-white rounded-full text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm">
            Premium Industrial Grade
          </span>

          {/* Title: "Silica" from left, "Fume" from right, both blur→clear */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-xl flex flex-wrap justify-center gap-x-5">
            <span className="anim-title-left inline-block">Silica</span>
            <span className="anim-title-right inline-block text-[#88204a]">
              Fume
            </span>
          </h1>

          {/* Subtitle: fades up from below with blur */}
          <p className="anim-subtitle text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed drop-shadow-md font-light max-w-3xl">
            High-performance material perfectly engineered for advanced concrete
            strengthening and rigorous industrial applications.
          </p>

          {/* CTAs: scale-pop in with spring easing, staggered */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
            <Link
              to="/contact"
              className="anim-cta-1 bg-[#bd1156] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#6c1739] transition-all shadow-lg hover:shadow-[#88204a]/30 hover:-translate-y-1 text-center flex-1 sm:flex-none"
            >
              Request a Quote
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="anim-cta-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1db954] transition-all shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-1 text-center flex items-center justify-center flex-1 sm:flex-none space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 0C5.393 0 0 5.393 0 12.032c0 2.126.549 4.195 1.593 6.02L.055 24l6.096-1.598A11.933 11.933 0 0012.031 24c6.638 0 12.031-5.394 12.031-12.033S18.669 0 12.031 0zm3.842 17.26c-.164.462-.953.904-1.344.965-.91.135-2.072.102-3.8-1.002-2.126-1.359-3.486-3.771-3.585-3.904-.102-.132-.857-1.144-.857-2.183 0-1.04.536-1.547.728-1.748.191-.192.42-.24.55-.24h.392c.164 0 .38.064.593.588.225.556.55 1.346.6 1.444.05.102.081.222.016.353-.066.132-.1.21-.197.324-.097.114-.2.247-.282.342-.09.096-.188.204-.08.384.11.18.49.799 1.053 1.302.726.65 1.332.85 1.513.946.182.096.289.084.398-.036.11-.12.47-.547.596-.732.126-.186.252-.15.42-.09.168.06.1065.504 1.25.576.185.072.311.114.358.174.047.06.047.348-.117.81z" />
              </svg>
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Silica Fume – Detailed Content Section */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <Reveal variant="fadeLeft" duration={800}>
              <h2 className="text-4xl font-black mb-6 text-[#002d52]">
                Silica Fume –{" "}
                <span className="text-[#88204a]">Detailed Insights</span>
              </h2>
              <div className="w-16 h-1 bg-[#88204a] rounded-full mb-8"></div>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Silica Fume, or microsilica, is a critical amorphous polymorph
                of silicon dioxide. As an ultrafine powder with 150nm spherical
                particles, it acts as a highly reactive pozzolan, fundamentally
                upgrading the mechanical properties and chemical resistance of
                concrete.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                In the global silica fume marketplace,{" "}
                <strong>Ochnology acts as the strategic bridge</strong> between
                international production hubs and Indian industrial demand. We
                simplify complex procurement for buyers while providing
                manufacturers with streamlined access to high-growth markets.
              </p>

              <div className="bg-[#f0f4f8] p-8 rounded-2xl border-l-4 border-[#88204a]">
                <h3 className="font-bold text-[#002d52] text-xl mb-4">
                  Strategic Market Access
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We serve as the primary entry point for premium sellers from{" "}
                  <strong>China and Bhutan</strong> into the Indian market. By
                  managing technical compliance and logistical hurdles, we
                  ensure that global supply meets the rigorous standards of
                  Indian infrastructure projects.
                </p>
              </div>
            </Reveal>

            <Reveal variant="fadeRight" duration={800} delay={150}>
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#88204a] rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg">
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
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002d52] text-xl">
                        Operational Reliability
                      </h4>
                      <p className="text-gray-500 text-sm mt-1">
                        Ready Stock & Rapid Dispatch
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Factories and buyers across India rely on us because we
                    maintain
                    <strong>
                      {" "}
                      ready stock in our strategic warehouses near Vizag Port
                    </strong>
                    . This proximity ensures immediate dispatch and minimizes
                    downtime for critical operations.
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-[#88204a] font-bold text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#88204a] animate-pulse"></span>
                    Verified Quality Control Protocols
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#002d52] p-6 rounded-2xl text-white">
                    <p className="text-3xl font-black mb-1">Strict</p>
                    <p className="text-xs uppercase font-bold tracking-widest text-[#88204a]">
                      Quality Control
                    </p>
                  </div>
                  <div className="bg-[#88204a] p-6 rounded-2xl text-white">
                    <p className="text-3xl font-black mb-1">24/7</p>
                    <p className="text-xs uppercase font-bold tracking-widest text-white/60">
                      Logistics Support
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Performance & Technical Section (formerly Comprehensive Analysis) */}
      <section className="bg-white py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#88204a]/10 opacity-10 rounded-full blur-3xl -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#002d52]/10 opacity-10 rounded-full blur-3xl -ml-64 -mb-64"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="blurIn" duration={900}>
            <div className="mb-16">
              <span className="text-[#88204a] font-bold tracking-widest uppercase text-sm mb-2 block">
                Industrial Reliability
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#002d52] mb-6 leading-[1.1]">
                Industrial Performance <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#88204a] to-[#d83a73]">
                  & Technical Breakdown
                </span>
              </h2>
              <div className="w-40 h-2 bg-gradient-to-r from-[#88204a] to-[#002d52] rounded-full mb-8"></div>
            </div>
          </Reveal>

          {/* Full Width Sections for Point 2 and 3 */}
          <div className="space-y-20 mt-16">
            <Reveal variant="fadeUp" delay={200}>
              <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
                <div className="md:w-[55%] flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-[#002d52] mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[#002d52] rounded-full"></span>
                    1. The Filler Effect: How Silica Fume Densifies Concrete
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    Silica Fume consists of amorphous (non-crystalline) spheres
                    of silicon dioxide (SiO₂). These ultrafine particles exert a
                    profound physical influence on the concrete matrix known as
                    the "Nano-Filler Effect." By occupying microscopic voids
                    between cement grains, Silica Fume displace water that would
                    otherwise reside there.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    This densification creates a near-solid structure that
                    prevents the formation of capillary pores, making the
                    concrete significantly more resistant to chloride ions,
                    sulfates, and moisture ingress — critical for longevity in
                    heavy-duty infrastructure.
                  </p>
                </div>
                <div className="w-full md:w-[45%] mt-4 md:mt-0">
                  <img
                    src={p2}
                    alt="The Filler Effect"
                    className="w-full h-auto object-cover rounded-2xl shadow-xl border border-gray-100"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={300}>
              <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
                <div className="md:w-[55%] flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-[#002d52] mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[#88204a] rounded-full"></span>
                    2. The Pozzolanic Reaction: How Silica Fume Boosts Strength
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    The chemical pozzolanic reaction is where ultimate strength
                    and stability are forged. When Portland cement hydrates, it
                    produces Calcium Hydroxide (CH), which is a weak, soluble
                    byproduct.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    Silica Fume (SiO₂) reacts with this CH and transforms it
                    into additional high-quality Calcium Silicate Hydrate
                    (C-S-H) gel. This conversion effectively turns a structural
                    liability into a high-density asset, resulting in a matrix
                    that is fundamentally harder and more durable than
                    conventional concrete.
                  </p>
                </div>
                <div className="w-full md:w-[45%] mt-4 md:mt-0">
                  <img
                    src={p3}
                    alt="The Pozzolanic Reaction"
                    className="w-full h-auto object-cover rounded-2xl shadow-xl border border-gray-100"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-12">
              <Reveal variant="fadeUp" delay={100}>
                <div>
                  <h3 className="text-2xl font-bold text-[#002d52] mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[#88204a] rounded-full"></span>
                    3. Silica Fume: The Multi-Functional Additive Powering
                    Modern Refractories
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    Silica fume has become one of the most versatile additives
                    in the refractory industry, contributing far beyond simple
                    castable correction. Its ultrafine amorphous SiO₂ spheres
                    improve performance at every stage — from mixing and
                    installation through to high-temperature service. In
                    castable formulations, it reduces water demand, densifies
                    the matrix, and enables low and ultra-low cement designs
                    that dramatically improve hot strength.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    In gunning and shotcreting applications, it increases mix
                    adhesion and cuts rebound loss, reducing material waste
                    during installation. For self-flowing castables, the
                    ball-bearing effect of its spheres allows the mix to level
                    and fill complex shapes without vibration.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Once fired, silica fume reacts with alumina to form mullite,
                    a ceramic phase that resists thermal shock, slag
                    penetration, and erosion from abrasive materials like coke
                    and molten metal. This makes it indispensable in steel
                    ladles, blast furnace troughs, tundishes, and cement kiln
                    linings — all environments defined by extreme heat, chemical
                    aggression, and mechanical wear. In sustainability terms,
                    denser linings last longer between relining cycles, reducing
                    downtime and material consumption. Across every refractory
                    application, silica fume's dual physical and chemical action
                    makes it a single additive that solves multiple problems at
                    once.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal variant="zoomIn" delay={400}>
                <div className="bg-[#f0f4f8] p-8 md:p-10 rounded-2xl border-l-8 border-[#88204a] shadow-inner">
                  <h4 className="text-xl font-black text-[#002d52] mb-6 uppercase tracking-widest">
                    Technical Spec Recap
                  </h4>
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent border-gray-200 bg-gray-50/50">
                          <TableHead className="text-gray-500 text-[10px] font-black uppercase tracking-widest px-6 h-10">Property</TableHead>
                          <TableHead className="text-right text-gray-500 text-[10px] font-black uppercase tracking-widest px-6 h-10">Value</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { l: "Specific Gravity", v: "2.2 to 2.5" },
                          { l: "Bulk Density (Densified)", v: "480 – 720 kg/m³" },
                          { l: "Bulk Density (Undensified)", v: "130 – 430 kg/m³" },
                          { l: "Specific Surface (BET)", v: "15,000 – 30,000 m²/kg" },
                          { l: "Amorphous SiO₂", v: "85% to 98% Range" },
                          { l: "Pozzolanic Activity", v: "> 105% (7 days)" },
                        ].map((item, index) => (
                          <TableRow key={index} className="border-gray-200 hover:bg-gray-50/30 transition-colors">
                            <TableCell className="px-6 py-4">
                              <span className="text-gray-500 font-bold text-xs uppercase tracking-wider">{item.l}</span>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-right">
                              <span className="text-[#002d52] font-black">{item.v}</span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-10 p-6 bg-[#002d52] rounded-xl text-white">
                    <p className="text-xs font-bold uppercase tracking-tighter opacity-60 mb-2">
                      Internal Commentary
                    </p>
                    <p className="text-sm italic leading-relaxed">
                      "Moving from standard M30 to high-performance M80+
                      concrete is only possible through precise silica fume
                      integration. It is the critical differentiator in modern
                      civil engineering."
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Feature Showcase Section */}

      {/* 5. Applications / Usage Section */}
      {/* <section className="bg-[#f8f9fb] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="blurIn" duration={800}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Core <span className="text-[#88204a]">Applications</span>
              </h2>
              <div className="w-24 h-1 bg-[#88204a] mx-auto rounded-full mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Engineered exclusively for heavy-load ecosystems and demanding
                environmental operations.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            <Reveal variant="fadeUp" delay={0}>
              <div className="flex flex-col items-center bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#002d52]/30 transition-all hover:-translate-y-1 shadow-sm h-full text-center">
                <div className="w-16 h-16 bg-[#002d52] rounded-full flex items-center justify-center text-white shadow-lg mb-6 shadow-[#002d52]/20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-[#002d52] mb-3">
                  Concrete Strengthening
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Massive compressive gain</li>
                  <li>• Microstructure refinement</li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={150}>
              <div className="flex flex-col items-center bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#88204a]/30 transition-all hover:-translate-y-1 shadow-sm h-full text-center">
                <div className="w-16 h-16 bg-[#88204a] rounded-full flex items-center justify-center text-white shadow-lg mb-6 shadow-[#88204a]/20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-[#002d52] mb-3">
                  Refractories
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• High-temp performance</li>
                  <li>• Volumetric stability</li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={300}>
              <div className="flex flex-col items-center bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#002d52]/30 transition-all hover:-translate-y-1 shadow-sm h-full text-center">
                <div className="w-16 h-16 bg-[#002d52] rounded-full flex items-center justify-center text-white shadow-lg mb-6 shadow-[#002d52]/20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-[#002d52] mb-3">
                  Industrial Flooring
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Chemical spill immunity</li>
                  <li>• Absolute wear reduction</li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={450}>
              <div className="flex flex-col items-center bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#88204a]/30 transition-all hover:-translate-y-1 shadow-sm h-full text-center">
                <div className="w-16 h-16 bg-[#88204a] rounded-full flex items-center justify-center text-white shadow-lg mb-6 shadow-[#88204a]/20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-[#002d52] mb-3">
                  High-Performance
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Extreme engineering scaling</li>
                  <li>• Prestressed integration</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section> */}

      {/* 5.5 Global Sourcing & Origins */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="blurIn" duration={800}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#002d52]">
                Micro Silica <span className="text-[#88204a]">by Origin</span>
              </h2>
              <div className="w-24 h-1 bg-[#88204a] mx-auto rounded-full mb-8"></div>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                Ochnology integrates a multi-continental procurement framework.
                We source Silica Fume from elite production hubs based on
                stringent application criteria and buyer specifications.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* China Origin */}
            <Reveal variant="fadeUp" delay={0}>
              <div className="group bg-[#f8f9fb] p-8 rounded-2xl border-b-4 border-transparent hover:border-[#88204a] transition-all h-full shadow-sm flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🇨🇳</span>
                  <h3 className="font-bold text-xl text-[#002d52]">China</h3>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">
                      Purity (SiO₂)
                    </p>
                    <p className="text-[#002d52] font-black text-lg">
                      90% – 96%
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex-grow">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">
                      Origin Source
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      By-product of silicon metal & ferrosilicon manufacturing.
                      Finer, consistent particle size distribution.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <h4 className="font-bold text-sm text-[#88204a] mb-3 uppercase tracking-wider border-b border-[#88204a]/10 pb-1">
                    Primary Applications
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#88204a] rounded-full"></span>{" "}
                      High-Strength Concrete (HPC)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#88204a] rounded-full"></span>{" "}
                      Refractory Castables
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#88204a] rounded-full"></span>{" "}
                      Submerged Marine Projects
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#88204a] rounded-full"></span>{" "}
                      High-Rise Structural Units
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Bhutan Origin */}
            <Reveal variant="fadeUp" delay={150}>
              <div className="group bg-[#f8f9fb] p-8 rounded-2xl border-b-4 border-transparent hover:border-[#002d52] transition-all h-full shadow-sm flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🇧🇹</span>
                  <h3 className="font-bold text-xl text-[#002d52]">Bhutan</h3>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">
                      Purity (SiO₂)
                    </p>
                    <p className="text-[#002d52] font-black text-lg">
                      80% – 85%
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex-grow">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">
                      Origin Source
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Ferrosilicon plant by-product. Superior reactivity
                      compared to quartz-based alternatives.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <h4 className="font-bold text-sm text-[#002d52] mb-3 uppercase tracking-wider border-b border-[#002d52]/10 pb-1">
                    Primary Applications
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#002d52] rounded-full"></span>{" "}
                      Standard Construction grades
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#002d52] rounded-full"></span>{" "}
                      Infrastructure Concrete
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#002d52] rounded-full"></span>{" "}
                      Commercial Slabwork
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#002d52] rounded-full"></span>{" "}
                      General Reinforcement
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* India Origin */}
            <Reveal variant="fadeUp" delay={300}>
              <div className="group bg-[#f8f9fb] p-8 rounded-2xl border-b-4 border-transparent hover:border-gray-300 transition-all h-full shadow-sm flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🇮🇳</span>
                  <h3 className="font-bold text-xl text-[#002d52]">India </h3>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">
                      Purity (SiO₂)
                    </p>
                    <p className="text-[#002d52] font-black text-lg">
                      85% – 94%
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex-grow">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">
                      Origin Source
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Often derived from Rice Husk Ash / Quartz processes. Less
                      uniform particle structure.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <h4 className="font-bold text-sm text-gray-400 mb-3 uppercase tracking-wider border-b border-gray-100 pb-1">
                    Primary Applications
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>{" "}
                      Fertilizer Industry fillers
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>{" "}
                      General mass fillers
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>{" "}
                      Mineral insulation additives
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Variants Section */}
      <section className="bg-[#002d52] py-24 border-y-8 border-[#88204a] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="blurIn" duration={900}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
                Available{" "}
                <span className="text-[#88204a]">Variants & Grades</span>
              </h2>
              <div className="w-24 h-1 bg-white/30 mx-auto rounded-full mb-8"></div>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
                We supply both Densified and Undensified grades precisely
                calibrated to international standards.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal variant="zoomIn" delay={0}>
              {/* 85% Densified */}
              <div className="bg-white text-[#002d52] rounded-xl p-7 flex flex-col h-full shadow-xl relative group overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#88204a]/5 rounded-bl-full -mr-6 -mt-6 z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-full h-44 bg-gray-100 rounded-lg mb-5 overflow-hidden">
                    <img
                      src={v1}
                      alt="85% Densified Silica Fume"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#002d52]/10 text-[#002d52] text-xs font-bold rounded-full mb-3 w-fit">
                    Densified
                  </span>
                  <h3 className="text-xl font-bold mb-2">
                    85% Densified Silica Fume
                  </h3>
                  <p className="text-gray-500 text-sm mb-5 flex-grow">
                    Entry-level densified grade ideal for general construction
                    concrete with improved workability characteristics.
                  </p>
                  <div className="bg-[#f8f9fb] p-4 rounded-lg mb-5 space-y-2">
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">SiO₂ min:</span>{" "}
                      <span>85.0%</span>
                    </p>
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">Form:</span>{" "}
                      <span>Densified Powder</span>
                    </p>
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">Bulk Density:</span>{" "}
                      <span>500–700 kg/m³</span>
                    </p>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full py-3 text-center rounded-lg bg-[#002d52] text-white font-bold hover:bg-[#88204a] transition-colors shadow-md text-sm"
                  >
                    View TDS
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeLeft" delay={150}>
              {/* 85% Undensified */}
              <div className="bg-white text-[#002d52] rounded-xl p-7 flex flex-col h-full shadow-xl relative group overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#88204a]/5 rounded-bl-full -mr-6 -mt-6 z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-full h-44 bg-gray-100 rounded-lg mb-5 overflow-hidden">
                    <img
                      src={v2}
                      alt="85% Undensified Silica Fume"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#88204a]/10 text-[#88204a] text-xs font-bold rounded-full mb-3 w-fit">
                    Undensified
                  </span>
                  <h3 className="text-xl font-bold mb-2">
                    85% Undensified Silica Fume
                  </h3>
                  <p className="text-gray-500 text-sm mb-5 flex-grow">
                    Raw undensified microsilica for applications requiring
                    maximum surface area reactivity in blended mixes.
                  </p>
                  <div className="bg-[#f8f9fb] p-4 rounded-lg mb-5 space-y-2">
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">SiO₂ min:</span>{" "}
                      <span>85.0%</span>
                    </p>
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">Form:</span>{" "}
                      <span>Undensified Powder</span>
                    </p>
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">Bulk Density:</span>{" "}
                      <span>130–430 kg/m³</span>
                    </p>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full py-3 text-center rounded-lg bg-[#002d52] text-white font-bold hover:bg-[#88204a] transition-colors shadow-md text-sm"
                  >
                    View TDS
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeRight" delay={300}>
              {/* 92% Densified */}
              <div className="bg-white text-[#002d52] rounded-xl p-7 flex flex-col h-full shadow-xl relative group overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-[#002d52]/20">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#002d52]/5 rounded-bl-full -mr-6 -mt-6 z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-full h-44 bg-gray-100 rounded-lg mb-5 overflow-hidden">
                    <img
                      src={v3}
                      alt="92% Densified Silica Fume"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#002d52]/10 text-[#002d52] text-xs font-bold rounded-full mb-3 w-fit">
                    Densified
                  </span>
                  <h3 className="text-xl font-bold mb-2">
                    92% Densified Silica Fume
                  </h3>
                  <p className="text-gray-500 text-sm mb-5 flex-grow">
                    Standard commercial-grade densified microsilica widely used
                    in mass infrastructural concrete pours and precast elements.
                  </p>
                  <div className="bg-[#f8f9fb] p-4 rounded-lg mb-5 space-y-2">
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">SiO₂ min:</span>{" "}
                      <span>92.0%</span>
                    </p>
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">Form:</span>{" "}
                      <span>Densified Powder</span>
                    </p>
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">Bulk Density:</span>{" "}
                      <span>500–700 kg/m³</span>
                    </p>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full py-3 text-center rounded-lg bg-[#002d52] text-white font-bold hover:bg-[#88204a] transition-colors shadow-md text-sm"
                  >
                    View TDS
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal variant="zoomIn" delay={450}>
              {/* 92% Undensified */}
              <div className="bg-white text-[#002d52] rounded-xl p-7 flex flex-col h-full shadow-xl relative group overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#88204a]/5 rounded-bl-full -mr-6 -mt-6 z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-full h-44 bg-gray-100 rounded-lg mb-5 overflow-hidden">
                    <img
                      src={v4}
                      alt="92% Undensified Silica Fume"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#88204a]/10 text-[#88204a] text-xs font-bold rounded-full mb-3 w-fit">
                    Undensified
                  </span>
                  <h3 className="text-xl font-bold mb-2">
                    92% Undensified Silica Fume
                  </h3>
                  <p className="text-gray-500 text-sm mb-5 flex-grow">
                    High-purity undensified microsilica optimized for reactive
                    pozzolanic activity in specialized high-performance
                    concrete.
                  </p>
                  <div className="bg-[#f8f9fb] p-4 rounded-lg mb-5 space-y-2">
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">SiO₂ min:</span>{" "}
                      <span>92.0%</span>
                    </p>
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">Form:</span>{" "}
                      <span>Undensified Powder</span>
                    </p>
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">Bulk Density:</span>{" "}
                      <span>130–430 kg/m³</span>
                    </p>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full py-3 text-center rounded-lg bg-[#002d52] text-white font-bold hover:bg-[#88204a] transition-colors shadow-md text-sm"
                  >
                    View TDS
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal variant="flipIn" delay={600}>
              {/* 94% Densified - Best Seller */}
              <div className="bg-white text-[#002d52] rounded-xl p-7 flex flex-col h-full shadow-xl relative group overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-[#88204a]">
                <div className="absolute top-0 right-0 bg-[#88204a] text-white text-xs font-bold px-4 py-1 rounded-bl-lg z-20 shadow-md">
                  Best Seller
                </div>
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#88204a]/5 rounded-bl-full -mr-6 -mt-6 z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-full h-44 bg-gray-100 rounded-lg mb-5 overflow-hidden">
                    <img
                      src={v7}
                      alt="94% Densified Silica Fume"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#002d52]/10 text-[#002d52] text-xs font-bold rounded-full mb-3 w-fit">
                    Densified
                  </span>
                  <h3 className="text-xl font-bold mb-2">
                    94% Densified{" "}
                    <span className="text-[#88204a]">Premium</span>
                  </h3>
                  <p className="text-gray-500 text-sm mb-5 flex-grow">
                    Premium densified grade engineered for extreme environments,
                    marine structures, and specialized architectural concrete.
                  </p>
                  <div className="bg-[#f8f9fb] p-4 rounded-lg mb-5 space-y-2">
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">SiO₂ min:</span>{" "}
                      <span>94.0%</span>
                    </p>
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">Form:</span>{" "}
                      <span>Densified Powder</span>
                    </p>
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">Bulk Density:</span>{" "}
                      <span>500–700 kg/m³</span>
                    </p>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full py-3 text-center rounded-lg bg-[#88204a] text-white font-bold hover:bg-[#6c1739] transition-colors shadow-md text-sm"
                  >
                    View TDS
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={750}>
              {/* 94% Undensified */}
              <div className="bg-white text-[#002d52] rounded-xl p-7 flex flex-col h-full shadow-xl relative group overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#88204a]/5 rounded-bl-full -mr-6 -mt-6 z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-full h-44 bg-gray-100 rounded-lg mb-5 overflow-hidden">
                    <img
                      src={v6}
                      alt="94% Undensified Silica Fume"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#88204a]/10 text-[#88204a] text-xs font-bold rounded-full mb-3 w-fit">
                    Undensified
                  </span>
                  <h3 className="text-xl font-bold mb-2">
                    94% Undensified{" "}
                    <span className="text-[#88204a]">Premium</span>
                  </h3>
                  <p className="text-gray-500 text-sm mb-5 flex-grow">
                    Ultra-high purity undensified grade for critical refractory,
                    oil-well grouting, and super-high-strength concrete
                    applications.
                  </p>
                  <div className="bg-[#f8f9fb] p-4 rounded-lg mb-5 space-y-2">
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">SiO₂ min:</span>{" "}
                      <span>94.0%</span>
                    </p>
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">Form:</span>{" "}
                      <span>Undensified Powder</span>
                    </p>
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">Bulk Density:</span>{" "}
                      <span>130–430 kg/m³</span>
                    </p>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full py-3 text-center rounded-lg bg-[#002d52] text-white font-bold hover:bg-[#88204a] transition-colors shadow-md text-sm"
                  >
                    View TDS
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={900}>
              {/* 96% Undensified */}
              <div className="bg-white text-[#002d52] rounded-xl p-7 flex flex-col h-full shadow-xl relative group overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-[#88204a]/30">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#88204a]/5 rounded-bl-full -mr-6 -mt-6 z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-full h-44 bg-gray-100 rounded-lg mb-5 overflow-hidden">
                    <img
                      src={v5}
                      alt="96% Undensified Silica Fume"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#88204a]/20 text-[#88204a] text-xs font-bold rounded-full mb-3 w-fit">
                    Undensified
                  </span>
                  <h3 className="text-xl font-bold mb-2">
                    96% Undensified{" "}
                    <span className="text-[#88204a]">Supreme</span>
                  </h3>
                  <p className="text-gray-500 text-sm mb-5 flex-grow">
                    The absolute highest purity grade available. Specifically
                    engineered for aerospace-grade masonry, high-performance
                    technical ceramics, and ultra-reactive laboratory-grade
                    applications.
                  </p>
                  <div className="bg-[#f8f9fb] p-4 rounded-lg mb-5 space-y-2">
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">SiO₂ min:</span>{" "}
                      <span className="text-[#88204a] font-black">96.0%</span>
                    </p>
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">Form:</span>{" "}
                      <span>Undensified Powder</span>
                    </p>
                    <p className="text-sm font-semibold flex justify-between">
                      <span className="text-gray-500">Bulk Density:</span>{" "}
                      <span>130–430 kg/m³</span>
                    </p>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full py-3 text-center rounded-lg bg-[#88204a] text-white font-bold hover:bg-[#002d52] transition-colors shadow-md text-sm"
                  >
                    View TDS
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6.2 Packaging & Logistics */}
      <section className="bg-[#f0f4f8] py-24 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <Reveal variant="fadeLeft" className="flex-1">
              <h2 className="text-3xl md:text-5xl font-black text-[#002d52] mb-6">
                Flexible <span className="text-[#88204a]">Packaging</span>{" "}
                Options
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                We provide tailored packaging solutions to streamline site
                logistics and ensure material integrity across international
                shipping routes.
              </p>
              <div className="bg-white/60 p-10 rounded-3xl border border-white shadow-xl backdrop-blur-sm">
                <p className="text-[#002d52] text-xl font-bold mb-8">
                  We offer flexible packaging based on buyer requirements:
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#88204a]"></div>
                    <span className="text-gray-700 text-lg">25 kg bags</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#88204a]"></div>
                    <span className="text-gray-700 text-lg">
                      Jumbo bags (500–1000 kg)
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#88204a]"></div>
                    <span className="text-gray-700 text-lg">
                      Undensified - 600 kg per Jumbo Bag
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#88204a]"></div>
                    <span className="text-gray-700 text-lg">
                      Densified - 1000 kg per Jumbo Bag
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#88204a]"></div>
                    <span className="text-gray-700 text-lg font-semibold text-[#88204a]">
                      Customized packaging available
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal
              variant="fadeRight"
              className="flex-1 w-full flex justify-center"
            >
              <div className="relative group max-w-sm">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#88204a] to-[#002d52] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                    <h3 className="font-black text-[#002d52]">
                      Logistics Summary
                    </h3>
                    <span className="text-[#88204a] font-bold text-xs">
                      GLOBAL READY
                    </span>
                  </div>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <span className="w-6 h-6 bg-[#002d52]/10 rounded-full flex items-center justify-center text-[#002d52] text-xs font-bold shrink-0">
                        1
                      </span>
                      <div>
                        <p className="font-bold text-[#002d52] text-sm">
                          LCL & FCL Shipping
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          Available for all global port destinations.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-6 h-6 bg-[#002d52]/10 rounded-full flex items-center justify-center text-[#002d52] text-xs font-bold shrink-0">
                        2
                      </span>
                      <div>
                        <p className="font-bold text-[#002d52] text-sm">
                          Moisture Protection
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          Polylined bags to ensure zero moisture ingress.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-6 h-6 bg-[#002d52]/10 rounded-full flex items-center justify-center text-[#002d52] text-xs font-bold shrink-0">
                        3
                      </span>
                      <div>
                        <p className="font-bold text-[#002d52] text-sm">
                          Rapid Dispatch
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          Ready stock for immediate road/rail transport.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6.10 Industry-Specific Grade Selection */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fadeUp" duration={800}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#002d52] mb-6">
                Market-Specific{" "}
                <span className="text-[#88204a]">Grade Selection</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                As a leading supplier, we categorize our silica fume based on
                the specialized requirements of three primary industrial
                sectors.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Construction card */}
            <Reveal variant="fadeRight" delay={100} className="h-full">
              <div className="group bg-[#f8f9fb] p-10 rounded-3xl border border-gray-100 hover:border-[#002d52]/30 transition-all hover:-translate-y-2 h-full flex flex-col">
                <div className="mb-6 w-16 h-16 bg-[#002d52] rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-[#002d52]/20">
                  🏗️
                </div>
                <h3 className="text-2xl font-bold text-[#002d52] mb-4 min-h-[4rem]">
                  Construction Industry
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed min-h-[6rem]">
                  Optimized for high-performance concrete, marine structures,
                  and high-rise builds requiring extreme durability.
                </p>
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <span className="text-[#88204a] font-black text-sm uppercase tracking-widest">
                    Recommended Grade
                  </span>
                  <p className="text-[#002d52] font-bold text-xl mt-1">
                    Densified Silica Fume
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Refractory card */}
            <Reveal variant="fadeUp" delay={200} className="h-full">
              <div className="group bg-[#f8f9fb] p-10 rounded-3xl border border-gray-100 hover:border-[#88204a]/30 transition-all hover:-translate-y-2 h-full flex flex-col highlight-box">
                <div className="mb-6 w-16 h-16 bg-[#88204a] rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-[#88204a]/20">
                  🔥
                </div>
                <h3 className="text-2xl font-bold text-[#002d52] mb-4 min-h-[4rem]">
                  Refractory Industry
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed min-h-[6rem]">
                  Highest surface area reactivity for castables, mortars, and
                  high-temperature ceramic bonds.
                </p>
                <div className="mt-auto pt-6 border-t border-gray-200">
                  <span className="text-[#88204a] font-black text-sm uppercase tracking-widest">
                    Recommended Grade
                  </span>
                  <p className="text-[#002d52] font-bold text-xl mt-1">
                    Undensified Silica Fume
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Oil & Gas card */}
            <Reveal variant="fadeLeft" delay={300} className="h-full">
              <div className="group bg-[#f8f9fb] p-10 rounded-3xl border border-gray-100 hover:border-[#002d52]/30 transition-all hover:-translate-y-2 h-full flex flex-col">
                <div className="mb-6 w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-gray-500/20">
                  🛢️
                </div>
                <h3 className="text-2xl font-bold text-[#002d52] mb-4 min-h-[4rem]">
                  Oil, Gas & Chemicals
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed min-h-[6rem]">
                  Specialized filtration, oil-well grouting, and chemical
                  carrier applications requiring precise purity.
                </p>
                <div className="mt-auto pt-8 border-t border-gray-200">
                  <span className="text-[#88204a] font-black text-sm uppercase tracking-widest">
                    Recommended Grade
                  </span>
                  <p className="text-[#002d52] font-bold text-lg mt-1">
                    Undensified or Special Grades
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7 & 9 combined. Documents, Reports, Certificates */}
      <section className="bg-[#f8f9fb] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="blurIn" duration={800}>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Technical <span className="text-[#88204a]">Documentation</span>
              </h2>
              <div className="w-24 h-1 bg-[#88204a] mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-xl mx-auto bg-[#fff7fa] border border-[#88204a]/20 p-4 rounded-lg font-medium">
                Important: <span className="text-[#88204a]">TDS</span> is highly
                specific to each variant (Available above).{" "}
                <span className="text-[#88204a]">MSDS</span> and global shipping
                certifications apply to all orders universally.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto items-start">
            {/* Lab Reports */}
            <div className="bg-[#f8f9fb] border border-gray-100 p-8 rounded-lg flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <svg
                className="w-12 h-12 text-[#002d52] mb-4"
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
              <h4 className="font-bold text-xl mb-2 text-[#002d52]">
                Batch Lab Reports
              </h4>
              <p className="text-gray-500 text-sm mb-6">
                Latest QA Third-Party Reports
              </p>
              <div className="w-full mb-6 flex flex-col space-y-4">
                <div
                  className="relative group w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-inner"
                >
                  <div className="h-[310px] w-full overflow-hidden">
                    <iframe
                      src={`${sgsReport}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=1`}
                      className="w-full h-full border-none"
                      title="SGS Report Preview"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-[#002d52]/10 transition-all flex items-center justify-center pointer-events-none">
                    <div 
                      className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto cursor-pointer"
                      onClick={() => window.open(sgsReport, "_blank")}
                    >
                      <span className="bg-[#88204a] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        View Full Report
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-3 w-full">
                  {/* <a
                    href={sgsReport}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white border-2 border-[#002d52] text-[#002d52] py-2.5 rounded-lg font-bold text-sm hover:bg-[#002d52] hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download SGS Report
                  </a> */}
                  <a
                    href={nablReport}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#002d52] text-white py-2.5 rounded-lg font-bold text-sm hover:bg-[#88204a] transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download NABL Report
                  </a>
                </div>
              </div>
            </div>

            {/* MSDS Card */}
            <div className="bg-[#f8f9fb] border border-gray-100 p-8 rounded-lg flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <svg
                className="w-12 h-12 text-[#002d52] mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h4 className="font-bold text-xl mb-2 text-[#002d52]">
                Material Safety
              </h4>
              <p className="text-gray-500 text-sm mb-6">
                MSDS / Global Hazard Compliance
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0 w-full mt-auto">
                <a
                  href="#"
                  target="_blank"
                  className="flex-1 bg-white border-2 border-[#002d52] text-[#002d52] py-2 rounded-lg font-bold text-sm hover:bg-[#002d52] hover:text-white transition-colors"
                >
                  View
                </a>
                <a
                  href="#"
                  download
                  className="flex-1 bg-[#002d52] text-white py-2 rounded-lg font-bold text-sm hover:bg-[#88204a] transition-colors"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Media Gallery Section */}
      <section className="bg-[#f0f4f8] py-24 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="blurIn" duration={800}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Project <span className="text-[#88204a]">Gallery</span>
              </h2>
              <div className="w-24 h-1 bg-[#88204a] mx-auto rounded-full"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 md:gap-4 h-auto md:h-[600px]">
            <Reveal
              variant="fadeLeft"
              duration={900}
              className="md:col-span-2 md:row-span-2"
            >
              <div className="h-[400px] md:h-full relative rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all cursor-pointer">
                <img
                  src={s1}
                  loading="lazy"
                  decoding="async"
                  alt="Industrial Construction"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <h3 className="text-white text-2xl font-bold mb-1">
                    Skyscraper Foundations
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Sustained high-tension load integration.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal
              variant="fadeRight"
              duration={900}
              delay={100}
              className="md:col-span-2 md:row-span-1"
            >
              <div
                className="h-[300px] md:h-full relative rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setSelectedVideo(galleryVideo)}
              >
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <video
                  src={galleryVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <h3 className="text-white text-xl font-bold mb-1">
                    Industrial Loading & Logistics
                  </h3>
                  <p className="text-gray-300 text-sm">
                    High-efficiency bulk bag integration systems.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal
              variant="fadeUp"
              duration={800}
              delay={200}
              className="md:col-span-1 md:row-span-1"
            >
              <div className="h-[250px] md:h-full relative rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all cursor-pointer">
                <img
                  src={s3}
                  loading="lazy"
                  decoding="async"
                  alt="Industrial Processes"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <h3 className="text-white text-lg font-bold mb-1">Pumping</h3>
                  <p className="text-gray-300 text-xs">
                    High plasticity flows.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal
              variant="zoomIn"
              duration={800}
              delay={300}
              className="md:col-span-1 md:row-span-1"
            >
              <div
                className="h-[250px] md:h-full relative rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setSelectedVideo(waVideo)}
              >
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <video
                  src={waVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#88204a]/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <h3 className="text-white text-base font-bold mb-0.5">
                    Live Procurement
                  </h3>
                  <p className="text-gray-300 text-[10px]">
                    Active site delivery.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Videos Section */}
      <section className="bg-black/5 py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="blurIn" duration={800}>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4 text-[#002d52]">
                Action <span className="text-[#88204a]">Showcase</span>
              </h2>
              <div className="w-24 h-1 bg-[#88204a] mx-auto rounded-full mb-4"></div>
              <p className="text-gray-600">
                See Silica Fume operating at maximum industrial performance in
                real conditions.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* YouTube Shorts embed — portrait 9:16 */}
            <Reveal variant="fadeLeft" duration={900}>
              <div className="relative w-[300px] sm:w-[340px] flex-shrink-0">
                {/* Glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-br from-[#88204a]/40 via-[#002d52]/30 to-transparent rounded-[2.5rem] blur-xl z-0"></div>
                <div
                  className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-white"
                  style={{ aspectRatio: "9/16" }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/O2XSod7InbE?rel=0&modestbranding=1&playsinline=1"
                    title="Silica Fume in Action"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    style={{ border: "none" }}
                  ></iframe>
                </div>
                {/* Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#88204a] text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg whitespace-nowrap z-20">
                  📹 Silica Fume — Live Demo
                </div>
              </div>
            </Reveal>

            {/* Highlights panel */}
            <Reveal variant="fadeRight" duration={900} delay={150}>
              <div className="max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold text-[#002d52] mb-6 leading-snug">
                  Watch How <span className="text-[#88204a]">Silica Fume</span>{" "}
                  Performs on Site
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: "🏗️",
                      title: "Construction Integration",
                      desc: "Directly observed in high-rise concrete pours and structural reinforcement projects.",
                    },
                    {
                      icon: "🔬",
                      title: "Pozzolanic Reaction",
                      desc: "Reactive SiO₂ visibly transforms concrete microstructure at the particle level.",
                    },
                    {
                      icon: "✅",
                      title: "Quality Verified",
                      desc: "Every batch showcased is tested against ACI 234R and ASTM C1240 standards.",
                    },
                  ].map(({ icon, title, desc }) => (
                    <div
                      key={title}
                      className="flex gap-4 items-start bg-white p-5 rounded-lg shadow-sm border border-gray-100"
                    >
                      <span className="text-2xl flex-shrink-0">{icon}</span>
                      <div>
                        <h4 className="font-bold text-[#002d52] mb-1">
                          {title}
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. Blog / Insights Section */}
      <section className="bg-[#f0f4f8] py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="blurIn" duration={800}>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-[#88204a]/10 text-[#88204a] rounded-full text-sm font-bold tracking-wide mb-4">
                Technical Insights
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002d52] mb-4">
                Silica Fume{" "}
                <span className="text-[#88204a]">Knowledge Hub</span>
              </h2>
              <div className="w-24 h-1 bg-[#88204a] mx-auto rounded-full"></div>
            </div>
          </Reveal>

          {/* Blog Grid — grid-template-areas based layout */}
          <style>{`
            .blog-grid {
              display: grid;
              gap: 1.5rem;
              grid-template-columns: 1fr;
              grid-template-areas:
                "featured"
                "card1"
                "card2"
                "card3"
                "card4";
            }
            @media (min-width: 768px) {
              .blog-grid {
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: auto auto auto;
                grid-template-areas:
                  "featured featured card1"
                  "featured featured card2"
                  "card3    card3    card4";
              }
            }
            .blog-featured { grid-area: featured; }
            .blog-card1    { grid-area: card1; }
            .blog-card2    { grid-area: card2; }
            .blog-card3    { grid-area: card3; }
            .blog-card4    { grid-area: card4; }
          `}</style>

          <div className="blog-grid">
            {/* Featured Article — 2×2 (3col × 2row) */}
            <Reveal variant="fadeLeft" duration={900} className="blog-featured">
              <div
                onClick={() => setActiveBlog(BLOGS[0])}
                className="h-full group relative rounded-xl overflow-hidden shadow-xl cursor-pointer bg-[#002d52] flex flex-col min-h-[340px]"
              >
                {/* Background tint image */}
                <img
                  src={heroImage}
                  alt="3D Concrete Blog"
                  className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002d52] via-[#002d52]/70 to-transparent"></div>
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
                  <span className="inline-block w-fit px-3 py-1 bg-[#88204a] text-white text-xs font-bold rounded-full mb-4 tracking-wide shadow">
                    Featured Article
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-4 group-hover:text-[#f8bdd1] transition-colors duration-300">
                    How Microsilica Is Redefining the Future of 3D Concrete
                    Printing
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                    An in-depth technical exploration into how ultra-fine
                    microsilica particles are enabling layer-by-layer concrete
                    deposition to achieve structural-grade compressive strength
                    — unlocking what was previously impossible in additive
                    construction.
                  </p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-gray-400 text-xs">📅 March 2025</span>
                    <span className="text-gray-400 text-xs">📖 8 min read</span>
                    <span className="text-gray-400 text-xs">
                      🏗️ Construction Tech
                    </span>
                  </div>
                  <button className="mt-6 w-fit bg-white text-[#002d52] px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#88204a] hover:text-white transition-all shadow-lg">
                    Read Full Article →
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Secondary Card 1 */}
            <Reveal
              variant="fadeRight"
              duration={800}
              delay={100}
              className="blog-card1"
            >
              <div
                onClick={() => setActiveBlog(BLOGS[1])}
                className="h-full group relative rounded-xl overflow-hidden shadow-md cursor-pointer bg-[#f8f9fb] border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[200px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1639980306447-c70a501f56b0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="SCM Comparison"
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block w-fit px-3 py-1 bg-[#002d52]/10 text-[#002d52] text-xs font-bold rounded-full mb-3">
                    Comparison Guide
                  </span>
                  <h3 className="text-lg font-bold text-[#002d52] mb-2 group-hover:text-[#88204a] transition-colors leading-tight">
                    Microsilica, Fly Ash &amp; Slag: Which SCM Delivers the
                    Strongest Concrete?
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                    A technically rigorous side-by-side breakdown of the three
                    dominant supplementary cementitious materials — reactivity,
                    cost, and structural output compared.
                  </p>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                    <span className="text-gray-400 text-xs">📅 Feb 2025</span>
                    <span className="text-gray-400 text-xs">📖 6 min read</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Secondary Card 2 */}
            <Reveal
              variant="fadeRight"
              duration={800}
              delay={250}
              className="blog-card2"
            >
              <div
                onClick={() => setActiveBlog(BLOGS[2])}
                className="h-full group relative rounded-xl overflow-hidden shadow-md cursor-pointer bg-[#002d52] border border-[#88204a]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[200px]"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block w-fit px-3 py-1 bg-[#88204a]/20 text-[#f8bdd1] text-xs font-bold rounded-full mb-4">
                    Coming Soon
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-[#f8bdd1] transition-colors">
                    Dosage Rates, Mix Design &amp; TDS Interpretation: A
                    Practical Field Guide
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    Translating technical data sheets into actionable on-site
                    dosage decisions — for concrete engineers, procurement
                    leads, and QA professionals.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
                    <span className="text-gray-500 text-xs">📅 April 2025</span>
                    <span className="text-gray-500 text-xs">📖 5 min read</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3 — spans 2 cols on desktop */}
            <Reveal
              variant="fadeUp"
              duration={800}
              delay={100}
              className="blog-card3"
            >
              <div
                onClick={() => setActiveBlog(BLOGS[3])}
                className="h-full group relative rounded-xl overflow-hidden shadow-md cursor-pointer bg-[#f8f9fb] border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row"
              >
                <img
                  src="https://images.unsplash.com/photo-1621534416159-42d19eb5ed0b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="ROI of Silica Fume"
                  loading="lazy"
                  decoding="async"
                  className="w-full md:w-64 h-52 md:h-auto object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block w-fit px-3 py-1 bg-[#88204a]/10 text-[#88204a] text-xs font-bold rounded-full mb-3">
                    ROI Analysis
                  </span>
                  <h3 className="text-xl font-bold text-[#002d52] mb-3 group-hover:text-[#88204a] transition-colors leading-tight">
                    The Real ROI of Silica Fume in High-Rise Construction
                    Projects
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                    Beyond strength gains — a quantified cost-benefit breakdown
                    showing how microsilica dosing reduces long-term maintenance
                    costs, extends structural service life, and outperforms
                    conventional cement blending strategies in multi-storey
                    builds.
                  </p>
                  <div className="flex items-center gap-4 mt-5 pt-4 border-t border-gray-100 flex-wrap">
                    <span className="text-gray-400 text-xs">📅 Jan 2025</span>
                    <span className="text-gray-400 text-xs">📖 7 min read</span>
                    <span className="text-gray-400 text-xs">
                      💰 Cost & Value
                    </span>
                    <button className="ml-auto text-[#002d52] text-xs font-bold border border-[#002d52] px-4 py-1.5 rounded-full hover:bg-[#002d52] hover:text-white transition-all">
                      Read →
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 4 — 1 col */}
            <Reveal
              variant="fadeUp"
              duration={800}
              delay={250}
              className="blog-card4"
            >
              <div
                onClick={() => setActiveBlog(BLOGS[4])}
                className="h-full group relative rounded-xl overflow-hidden shadow-md cursor-pointer bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative">
                  <img
                    src="https://media.istockphoto.com/id/1132245221/photo/takes-a-risk-at-work.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vjz2y7pXdV24ROyuRU8_V60klwVLpDvMFp0Ikty4OnE="
                    alt="Marine Concrete"
                    loading="lazy"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002d52]/60 to-transparent"></div>
                  <span className="absolute bottom-3 left-4 inline-block px-3 py-1 bg-[#002d52] text-white text-xs font-bold rounded-full">
                    Marine Engineering
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#002d52] mb-2 group-hover:text-[#88204a] transition-colors leading-tight">
                    Why Marine Concrete Fails Without Microsilica
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                    Chloride penetration, sulfate attack, and rebar corrosion —
                    how microsilica's dense pozzolanic matrix is the only proven
                    barrier to marine-grade concrete failure in subsea and
                    coastal structures.
                  </p>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                    <span className="text-gray-400 text-xs">📅 Dec 2024</span>
                    <span className="text-gray-400 text-xs">📖 5 min read</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9.5 Why Choose Us for Silica Fume Supply */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="blurIn" duration={800}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#002d52] mb-4">
                Why Choose Us for <span className="text-[#88204a]">Silica Fume Supply</span>
              </h2>
              <div className="w-24 h-1 bg-[#88204a] mx-auto rounded-full mb-8"></div>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                We are a growing and reliable supplier of silica fume in India, with a strong focus on 
                <strong> consistent quality, competitive pricing, and dependable supply</strong>.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal variant="fadeUp" delay={0}>
              <div className="bg-[#f8f9fb] p-8 rounded-2xl h-full border border-gray-100 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-[#002d52] group-hover:bg-[#88204a] rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg transition-colors">
                  📈
                </div>
                <h3 className="text-xl font-bold text-[#002d52] mb-4">Proven Supply Capability</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We have supplied <strong>2000+ MT of refractory-grade silica fume</strong> in the past year, 
                  demonstrating our ability to handle bulk requirements and maintain steady supply for industrial applications.
                </p>
                <div className="p-4 bg-white/50 rounded-lg border-l-4 border-[#88204a]">
                  <p className="text-gray-500 text-xs italic leading-relaxed">
                    "Quality requirement for refractory grade is highest as many lots fail in flow ability and workability but our different lots have been fully accepted by big refractory brands in India."
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={150}>
              <div className="bg-[#f8f9fb] p-8 rounded-2xl h-full border border-gray-100 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-[#88204a] group-hover:bg-[#002d52] rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg transition-colors">
                  🏗️
                </div>
                <h3 className="text-xl font-bold text-[#002d52] mb-4">Reliable Construction Supply</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  For construction-grade silica fume, consistency is critical. We ensure stable quality across batches and timely delivery.
                </p>
                <ul className="text-gray-500 text-xs space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#88204a] rounded-full"></span>
                    Stable quality across batches
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#88204a] rounded-full"></span>
                    Timely delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#88204a] rounded-full"></span>
                    Suitable material for concrete applications
                  </li>
                </ul>
                <div className="mt-auto">
                  <p className="text-[#002d52] text-sm font-bold flex items-center gap-2">
                    <span className="text-lg">👉</span> Dependable supply even in market fluctuations.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={300}>
              <div className="bg-[#f8f9fb] p-8 rounded-2xl h-full border border-gray-100 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-gray-800 group-hover:bg-[#88204a] rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg transition-colors">
                  🤝
                </div>
                <h3 className="text-xl font-bold text-[#002d52] mb-4">Long-Term Relationships</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We work with buyers not just for one-time supply, but for <strong>regular and repeat requirements</strong>, ensuring business continuity.
                </p>
                <ul className="text-[#002d52] text-sm font-bold space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#88204a] rounded-full"></div>
                    Consistent communication
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#88204a] rounded-full"></div>
                    Better pricing over time
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#88204a] rounded-full"></div>
                    Smooth transaction experience
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Buyers Choose Ochnology - Silica Fume */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-[#88204a]/10 border border-[#88204a]/20 text-[#88204a] rounded-full text-xs font-black tracking-widest uppercase mb-4">
              Concrete Engineers & Procurement Teams Ask:
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#002d52] mb-4">
              Why not import Silica Fume{" "}
              <span className="text-[#88204a]">
                directly from China or Bhutan?
              </span>
            </h2>
            <div className="w-20 h-1 bg-[#88204a] mx-auto rounded-full mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Indian and global buyers ask this every day. Here is what the
              numbers and on-ground reality actually say.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={100} className="my-14">
            <div className="bg-[#002d52] text-white rounded-3xl p-10 md:p-14 relative overflow-hidden max-w-4xl mx-auto">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#88204a]/20 rounded-full blur-[80px] -mr-36 -mt-36" />
              <div className="relative z-10">
                <p className="text-[#88204a] font-bold text-sm uppercase tracking-widest mb-4">
                  The Import Reality Check
                </p>
                <p className="text-2xl md:text-3xl font-black leading-tight mb-6">
                  Chinese Silica Fume often arrives with SiO2 below 85% and high
                  LOI — details hidden until the container arrives at your port.
                </p>
                <p className="text-gray-300 text-lg font-light leading-relaxed">
                  Without a local testing partner, a pre-shipment inspection,
                  and knowledge of which Chinese plants consistently hit 92%+
                  SiO2, you are purchasing on faith. We have done the sourcing
                  vetting over years — you inherit the result.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: "🔀",
                badge: "Dual Origin Access",
                title: "China & Bhutan — Routed by Grade",
                desc: "Bhutan silica fume (from ferrosilicon plants) typically hits 92-95% SiO2 consistently. Chinese material ranges from 85% to 97% depending on the plant. We know which plants to use for which specifications and route accordingly.",
              },
              {
                icon: "🧪",
                badge: "NABL & SGS Certified",
                title: "Reports You Can Submit to Engineers",
                desc: "Every shipment comes with NABL test report (India), SGS inspection certificate, and COA from the plant. Your structural engineers can specify minimum SiO2 >= 92% and you have the paperwork to prove delivery against that spec.",
              },
              {
                icon: "💰",
                badge: "Network Buying Power",
                title: "CIF Prices Competitive with Direct Imports",
                desc: "Because we buy consolidated volumes from multiple origins, our landed CIF price to Indian ports (Vizag, Mundra) is at parity with what a single buyer importing themselves would pay — plus you save the LC bank charges and import headache.",
              },
              {
                icon: "⚡",
                badge: "Ready Stock Available",
                title: "No 60-Day Wait — Ship in Days",
                desc: "We maintain ready stock in warehouses near Vizag Port. For urgent project requirements, your material can be dispatched within 48-72 hours of order confirmation, compared to the 45-60 day manufacturing + shipping cycle for direct imports.",
              },
              {
                icon: "📦",
                badge: "MOQ From 1 MT",
                title: "Project Quantities, No Bulk Commitment",
                desc: "Direct imports require 20 FCL minimums. We supply from 1 MT bags for small projects, 10 MT for mid-size pours, and full FCL contracts for large infrastructure. Your procurement matches your project, not a factory's production schedule.",
              },
              {
                icon: "🚢",
                badge: "Complete Technical Support",
                title: "Mix Design Help Included",
                desc: "We don't just supply the material — our technical team assists with dosage rates, compatibility with your superplasticizer brand, and regulatory compliance for IS 456 and ACI 318. A Chinese exporter will not walk you through your pour design.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} variant="fadeUp">
                <div className="bg-[#f8f9fb] rounded-3xl p-8 border border-gray-100 hover:border-[#88204a]/30 hover:shadow-xl transition-all h-full">
                  <div className="text-4xl mb-5">{item.icon}</div>
                  <span className="inline-block px-3 py-1 bg-[#88204a]/10 text-[#88204a] text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-black text-[#002d52] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fadeUp" delay={200} className="mt-14">
            <div className="bg-[#88204a] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                  Need Silica Fume for Your Project or Plant?
                </h3>
                <p className="text-white/70 text-sm">
                  Tell us your SiO2 requirement, quantity, and end application.
                  We quote with test reports within 48 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  to="/rfq"
                  className="bg-white text-[#88204a] px-8 py-4 rounded-2xl font-black hover:bg-[#002d52] hover:text-white transition-all shadow-lg"
                >
                  Submit RFQ
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#002d52] text-white px-8 py-4 rounded-2xl font-black hover:bg-[#002d52]/80 transition-all flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.031 0C5.393 0 0 5.393 0 12.032c0 2.126.549 4.195 1.593 6.02L.055 24l6.096-1.598A11.933 11.933 0 0012.031 24c6.638 0 12.031-5.394 12.031-12.033S18.669 0 12.031 0zm3.842 17.26c-.164.462-.953.904-1.344.965-.91.135-2.072.102-3.8-1.002-2.126-1.359-3.486-3.771-3.585-3.904-.102-.132-.857-1.144-.857-2.183 0-1.04.536-1.547.728-1.748.191-.192.42-.24.55-.24h.392c.164 0 .38.064.593.588.225.556.55 1.346.6 1.444.05.102.081.222.016.353-.066.132-.1.21-.197.324-.097.114-.2.247-.282.342-.09.096-.188.204-.08.384.11.18.49.799 1.053 1.302.726.65 1.332.85 1.513.946.182.096.289.084.398-.036.11-.12.47-.547.596-.732.126-.186.252-.15.42-.09.168.06.1065.504 1.25.576.185.072.311.114.358.174.047.06.047.348-.117.81z" />
                  </svg>
                  WhatsApp Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. Inquiry Section (Conversion Focused) - Pinned to bottom block */}

      <section className="bg-gradient-to-br from-[#002d52] to-[#001b33] text-center pt-24 pb-28 rounded-t-xl border-t-8 border-[#88204a] relative overflow-hidden shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl tracking-tight">
            Secure Your{" "}
            <span className="text-[#88204a] opacity-90 block sm:inline">
              Supply Chain.
            </span>
          </h2>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Eliminate operational delays. Book your Silica Fume bulk shipments
            directly through our active procurement channels.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-[#bd1156] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#88204a] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Request a Formal Quote
            </Link>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group bg-white text-[#002d52] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#25D366] hover:text-white hover:border-[#25D366] border-2 border-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex justify-center items-center gap-3"
            >
              <svg
                className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 0C5.393 0 0 5.393 0 12.032c0 2.126.549 4.195 1.593 6.02L.055 24l6.096-1.598A11.933 11.933 0 0012.031 24c6.638 0 12.031-5.394 12.031-12.033S18.669 0 12.031 0zm3.842 17.26c-.164.462-.953.904-1.344.965-.91.135-2.072.102-3.8-1.002-2.126-1.359-3.486-3.771-3.585-3.904-.102-.132-.857-1.144-.857-2.183 0-1.04.536-1.547.728-1.748.191-.192.42-.24.55-.24h.392c.164 0 .38.064.593.588.225.556.55 1.346.6 1.444.05.102.081.222.016.353-.066.132-.1.21-.197.324-.097.114-.2.247-.282.342-.09.096-.188.204-.08.384.11.18.49.799 1.053 1.302.726.65 1.332.85 1.513.946.182.096.289.084.398-.036.11-.12.47-.547.596-.732.126-.186.252-.15.42-.09.168.06.1065.504 1.25.576.185.072.311.114.358.174.047.06.047.348-.117.81z" />
              </svg>
              <span>Instant WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      {activeBlog && (
        <BlogModal blog={activeBlog} onClose={() => setActiveBlog(null)} />
      )}

      {selectedVideo && (
        <VideoModal
          src={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};

export default Silica;
