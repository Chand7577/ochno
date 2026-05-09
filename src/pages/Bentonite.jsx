import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Preloader from "../components/Preloader";

// Bentonite Assets
import clayImg from "../assets/bentonite/bentonite-clay-500x500.webp";
import powderImg from "../assets/bentonite/bentonite-powder-500x500.webp";
import powderJpg from "../assets/bentonite/bentonite-powder.jpg";
import sodiumImg from "../assets/bentonite/sodium-based-bentonite-powder-500x500.webp";

const Icons = {
  Chevron: ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  ),
  Globe: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20"/>
    </svg>
  ),
  Layers: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
    </svg>
  ),
  Truck: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><path d="M18 18h1a1 1 0 0 0 1-1v-6.34a2 2 0 0 0-.59-1.41l-2.5-2.5A2 2 0 0 0 14.5 6H14"/><circle cx="17" cy="18" r="2"/>
    </svg>
  ),
  Zap: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 L3 14 L12 14 L11 22 L21 10 L12 10 Z"/>
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
};

const Bentonite = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState("api");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const specs = {
    api: {
      title: "API Grade (Sec.9)",
      desc: "Oil & gas drilling. Viscosifier and filtration control.",
      standard: "API 13A Sec.9",
      params: [
        { label: "Montmorillonite %", val: "≥75%" },
        { label: "Moisture % max", val: "13%" },
        { label: "Swelling index (ml/2g)", val: "≥20" },
        { label: "Viscometer @ 600 rpm", val: "≥30" },
        { label: "YP/PV ratio max", val: "≤3" },
        { label: "Filtrate volume ml max", val: "≤15" },
        { label: "Particle size (75µm)", val: "≥97.5%" },
        { label: "pH (6% suspension)", val: "8–10" },
      ]
    },
    ocma: {
      title: "OCMA Grade (Sec.11)",
      desc: "Water well / geotechnical drilling.",
      standard: "API 13A Sec.11",
      params: [
        { label: "Montmorillonite %", val: "≥70%" },
        { label: "Moisture % max", val: "13%" },
        { label: "Swelling index (ml/2g)", val: "≥20" },
        { label: "YP/PV ratio max", val: "≤3" },
        { label: "Filtrate volume ml max", val: "≤15" },
        { label: "Particle size (75µm)", val: "≥97.5%" },
        { label: "pH (6% suspension)", val: "8–10" },
      ]
    },
    foundry: {
      title: "Foundry Grade",
      desc: "Iron/steel foundry moulding.",
      standard: "IS 6863",
      params: [
        { label: "Montmorillonite %", val: "≥65%" },
        { label: "Moisture % max", val: "12%" },
        { label: "Swelling index (ml/2g)", val: "≥18" },
        { label: "Green comp. strength", val: "≥12 N/cm²" },
        { label: "Dry comp. strength", val: "≥35 N/cm²" },
        { label: "Particle size (75µm)", val: "≥95%" },
        { label: "pH (6% suspension)", val: "8–10" },
      ]
    },
    civil: {
      title: "Piling / Civil Grade",
      desc: "Diaphragm walls, tunnelling, HDD.",
      standard: "—",
      params: [
        { label: "Montmorillonite %", val: "≥60%" },
        { label: "Moisture % max", val: "14%" },
        { label: "Swelling index (ml/2g)", val: "≥15" },
        { label: "Particle size (75µm)", val: "≥90%" },
        { label: "pH (6% suspension)", val: "8–10" },
      ]
    },
    calcium: {
      title: "Calcium / Industrial",
      desc: "Filler, animal feed, agriculture.",
      standard: "IS 12446",
      params: [
        { label: "Montmorillonite %", val: "≥50%" },
        { label: "Moisture % max", val: "15%" },
        { label: "Swelling index (ml/2g)", val: "4–8" },
        { label: "Particle size (75µm)", val: "≥85%" },
        { label: "pH (6% suspension)", val: "7–9" },
      ]
    }
  };

  const faqs = [
    { q: "Q1. Difference between sodium and calcium bentonite?", a: "Sodium bentonite → high swelling, used in drilling & foundry. Calcium bentonite → low swelling, used as filler & absorbent." },
    { q: "Q2. What is API 13A bentonite?", a: "Drilling-grade bentonite meeting API standards for viscosity and filtration control." },
    { q: "Q3. What is OCMA grade?", a: "Drilling grade (API Section 11), widely used in Middle East projects." },
    { q: "Q4. Do we supply both natural and activated bentonite?", a: "Yes. Natural sodium → high performance. Activated → cost-effective." },
    { q: "Q5. MOQ and sample time?", a: "MOQ: 2 MT. Samples: 3–5 days with COA." },
    { q: "Q6. Which grade for foundry use?", a: "Sodium bentonite with high strength and thermal stability." },
    { q: "Q7. Can we supply regularly?", a: "Yes, we support regular bulk supply and repeat orders." },
    { q: "Q8. Do we offer consistent quality?", a: "Yes, every shipment comes with COA and controlled specifications." },
    { q: "Q9. Can buyers get customized grade?", a: "Yes, we recommend and supply grade based on application." },
    { q: "Q10. What industries do we supply?", a: "Drilling, foundry, construction, agriculture and industrial applications." },
    { q: "Q11. Can we supply in bulk quantities?", a: "Yes, we handle bulk orders (container loads) and monthly supply." },
    { q: "Q12. What are the payment terms?", a: "30% advance and balance against BL, or Letter of Credit (LC) for CIF transactions." },
  ];

  if (loading) return <Preloader />;

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-navy">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-wine/10 transform skew-x-12 translate-x-1/4"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-wine rounded-full blur-[120px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <Reveal variant="fadeRight">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-wine/10 border border-wine/20 rounded-full mb-8 backdrop-blur-md">
              <span className="w-2 h-2 bg-wine rounded-full animate-pulse"></span>
              <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Drilling Grade · Foundry Grade · Civil Grade</span>
            </div>
            <h1 className="text-6xl md:text-[8rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic mb-8">
              Indian<br/><span className="text-wine">Bentonite</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-medium max-w-xl leading-relaxed mb-8">
              Sodium & Calcium Bentonite · API 13A (Section 9 & 11) · OCMA Grade · Foundry Grade · Civil / Piling Grade · Kutch & Rajasthan Origin
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-white text-[10px] uppercase font-bold tracking-widest rounded-md">FOB Mundra / Kandla</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-white text-[10px] uppercase font-bold tracking-widest rounded-md">Exported to 80+ Countries</span>
            </div>

            <div className="flex flex-wrap gap-6">
              <Link to="/rfq" className="bg-wine text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-navy transition-all shadow-xl rounded-2xl">Request a Quote / Sample COA</Link>
              <a href="https://wa.me/919258720699" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-[#1ebd5c] transition-all rounded-2xl flex items-center gap-3">
                WhatsApp Connect
              </a>
            </div>
          </Reveal>

          <Reveal variant="fadeLeft" className="relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 opacity-20 group-hover:opacity-40 transition-opacity">
              <img src={powderImg} alt="Bentonite" className="w-full h-full object-contain" />
            </div>
            <div className="bg-[#111c31] border border-white/5 p-12 shadow-2xl relative overflow-hidden group rounded-[2.5rem]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-wine/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <h3 className="text-white font-black text-2xl uppercase italic mb-8 tracking-wider">Our Trust Promise</h3>
              <div className="space-y-6">
                {[
                  { label: "API 13A Compliant", desc: "Rigorous standard verification" },
                  { label: "COA with every lot", desc: "Guaranteed chemical & physical properties" },
                  { label: "50kg bags & jumbo bags", desc: "Flexible export-grade packaging" },
                  { label: "Ex-stock at Mundra/Kandla", desc: "Ready for immediate dispatch" },
                  { label: "Sample in 3–5 days", desc: "Fast global courier delivery" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-wine/20 flex items-center justify-center shrink-0">
                      <Icons.Check />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase text-xs tracking-widest">{stat.label}</h4>
                      <p className="text-gray-500 text-[10px] font-bold uppercase">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Section 2: Global Position ──────────────────────────────── */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="fadeRight">
              <h2 className="text-4xl md:text-5xl font-black text-navy uppercase italic mb-8">India's position in <span className="text-wine">global bentonite trade</span></h2>
              <div className="space-y-6 text-gray-600 font-medium text-lg leading-relaxed">
                <p>
                  India is the world's largest exporter of bentonite — supplying to over 80 countries across Southeast Asia, the Middle East, Africa, Europe and the Americas. India accounts for <strong className="text-navy">50% of global bentonite powder export shipments</strong>, ahead of China at 18% and Turkey at 8%.
                </p>
                <p>
                  The reason is geology. The <strong className="text-navy">Kutch region of Gujarat</strong> — specifically the Kachchh district — hosts one of the world's finest natural sodium bentonite deposits. The Vandh, Pundi, Sherdi-Mandvi and surrounding areas of Kachchh produce high-quality sodium montmorillonite with exceptional swelling, viscosity and thixotropic properties. Rajasthan contributes calcium bentonite, widely used for industrial, agricultural and cosmetic applications.
                </p>
                <div className="bg-gray-50 p-6 border-l-4 border-wine rounded-r-2xl">
                  <p className="text-sm font-bold text-navy">
                    India exported 1.56 million MT of bentonite in 2023 valued at $90.8 million — to Indonesia, Malaysia, China, Romania, South Africa and 75+ other countries.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeLeft" className="grid grid-cols-2 gap-6">
              <div className="bg-navy p-10 text-white rounded-[2rem] flex flex-col justify-center">
                <p className="text-wine font-black text-6xl mb-4 italic">50%</p>
                <p className="text-xs font-black uppercase tracking-widest leading-loose">Global Share of Powder Export</p>
              </div>
              <div className="bg-wine p-10 text-white rounded-[2rem] flex flex-col justify-center shadow-xl translate-y-12">
                <p className="text-white font-black text-6xl mb-4 italic">1.56M</p>
                <p className="text-xs font-black uppercase tracking-widest leading-loose">Metric Tonnes Exported in 2023</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Section 3: Sodium vs Calcium ──────────────────────────────── */}
      <section className="py-32 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase italic mb-6">Sodium vs Calcium Bentonite <span className="text-wine">— Which do you need?</span></h2>
            <p className="text-gray-500 font-medium text-lg max-w-3xl mx-auto">
              The single most important distinction in bentonite is the type of exchangeable cation — sodium or calcium. This determines swelling behaviour and therefore which applications it suits.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={200}>
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="p-6 font-black uppercase tracking-widest text-xs">Property</th>
                    <th className="p-6 font-black uppercase tracking-widest text-xs">Sodium Bentonite</th>
                    <th className="p-6 font-black uppercase tracking-widest text-xs">Calcium Bentonite</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-bold text-navy">
                  {[
                    { p: "Swelling ratio", s: "10–30x dry volume", c: "2–4x dry volume" },
                    { p: "Water absorption", s: "Very high", c: "Moderate" },
                    { p: "Montmorillonite content", s: "High", c: "Moderate" },
                    { p: "Primary use", s: "Drilling fluids, sealing, foundry", c: "Filler, absorbent, animal feed, agriculture" },
                    { p: "India origin", s: "Kutch / Gujarat", c: "Rajasthan, Madhya Pradesh" },
                    { p: "Activation", s: "Natural or soda ash activated", c: "Natural calcium type" },
                    { p: "Colour", s: "Grey / off-white", c: "Cream / light tan" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50/50" : "bg-white"}>
                      <td className="p-6 border-b border-gray-100 uppercase text-xs tracking-wider text-wine">{row.p}</td>
                      <td className="p-6 border-b border-gray-100">{row.s}</td>
                      <td className="p-6 border-b border-gray-100 text-gray-500">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-8 bg-gray-50 text-sm text-gray-600 font-medium leading-relaxed border-t border-gray-100">
                <span className="font-black text-wine uppercase tracking-widest text-xs block mb-2">Key note:</span>
                India produces both natural sodium bentonite (premium, from Kutch) and soda ash activated bentonite (calcium bentonite treated with Na₂CO₃ to improve swelling). The activated type is cost-effective for applications where extreme swelling is not mandatory. Always specify which type your application requires when enquiring.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Section 4: Full Specifications ──────────────────────────────── */}
      <section className="py-32 bg-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeRight" className="mb-16">
            <h3 className="text-4xl md:text-5xl font-black uppercase italic mb-6">Full Grade <span className="text-wine">Specifications</span></h3>
            <p className="text-gray-400 font-medium max-w-3xl">
              Comprehensive technical matrix for all major grades we supply globally. API grade drilling bentonite acts as a viscosifier and filtration control agent, while foundry grade focuses on green strength and thermal stability.
            </p>
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/4">
              <Reveal variant="fadeUp">
                <div className="space-y-4">
                  {Object.keys(specs).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`w-full text-left p-6 transition-all border-l-4 rounded-r-2xl ${
                        activeTab === key 
                          ? "bg-white/10 border-wine" 
                          : "bg-transparent border-white/5 hover:bg-white/5"
                      }`}
                    >
                      <span className={`font-black uppercase tracking-widest text-xs block mb-1 ${activeTab === key ? "text-wine" : "text-white/60"}`}>
                        {specs[key].title}
                      </span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{specs[key].standard}</span>
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:w-3/4">
              <Reveal variant="fadeUp" key={activeTab}>
                <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] relative">
                  <div className="mb-12">
                    <h4 className="text-3xl font-black uppercase italic mb-3 tracking-tighter text-white">{specs[activeTab].title}</h4>
                    <p className="text-gray-400 font-medium text-sm">{specs[activeTab].desc}</p>
                    {specs[activeTab].standard !== "—" && (
                      <span className="inline-block mt-4 px-3 py-1 bg-wine/20 text-wine text-[10px] font-black uppercase tracking-widest rounded">
                        Standard: {specs[activeTab].standard}
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {specs[activeTab].params.map((p, i) => (
                      <div key={i} className="group border-b border-white/5 pb-4">
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-2 group-hover:text-wine transition-colors">{p.label}</p>
                        <p className="text-2xl font-black italic">{p.val}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional Notes box specific to active tab */}
                  {activeTab === 'api' && (
                    <div className="mt-12 p-6 bg-wine/10 rounded-2xl border border-wine/20">
                      <p className="text-xs text-gray-300 leading-relaxed font-medium">
                        <strong className="text-wine">Note:</strong> API grade drilling bentonite acts as a viscosifier and filtration control agent for water-based mud systems — controls borehole stability, extracts drill cuttings and cools the drill bit.
                      </p>
                    </div>
                  )}
                  {activeTab === 'foundry' && (
                    <div className="mt-12 p-6 bg-wine/10 rounded-2xl border border-wine/20">
                      <p className="text-xs text-gray-300 leading-relaxed font-medium">
                        <strong className="text-wine">Note:</strong> Foundry grade binds sand grains into desired mould shapes, retains mechanical form and makes mould surface impermeable — high green strength and thermal stability essential.
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-8">
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest italic">Activated bentonite (bleaching earth) and organoclay grades available on request for specialty applications.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Applications ──────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase italic mb-4 tracking-tighter">Applications <span className="text-wine">— Who uses Indian bentonite and why</span></h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { t: "Oil & Gas Drilling", sub: "(largest export market)", d: "Used in drilling muds to control borehole stability, increase viscosity, reduce fluid loss and form thin filter cake — 1 tonne of bentonite prepares approximately 100 barrels of mud. API 13A Section 9 for oil well drilling; OCMA (Section 11) for geotechnical and water well drilling.", buyers: "Gulf drilling contractors (UAE, Saudi, Qatar, Oman), Southeast Asian oil companies, African drilling operations", icon: <Icons.Zap /> },
              { t: "Foundry & Metal Casting", sub: "", d: "Almost all iron, steel and malleable iron casting foundries use bentonite — binds sand grains into mould shapes, makes surface impermeable and retains mechanical form. Kutch sodium bentonite valued for high green strength, dry strength and thermal stability in green sand systems.", buyers: "Foundries in Indonesia, Malaysia, Vietnam, Bangladesh, Turkey, Egypt", icon: <Icons.Layers /> },
              { t: "Construction & Civil Engineering", sub: "", d: "Thixotropic support agent in diaphragm walls, foundations, tunnelling, horizontal directional drilling (HDD) and pipe jacking. Large infrastructure projects — metro tunnels, highway construction, river crossings — consume bentonite slurry in large volumes.", buyers: "Strong demand in Southeast Asia and Middle East where infrastructure development is most active", icon: <Icons.Globe /> },
              { t: "Iron Ore Pelletising", sub: "", d: "Binder in iron ore pellet production — mixed with iron ore fines to produce green pellets before firing.", buyers: "Large volume application in China, Brazil and India's own steel sector", icon: <Icons.Layers /> },
              { t: "Environmental & Geosynthetic Liners", sub: "", d: "Very low permeability to water — employed to make porous medium water-tight in landfill caps, pond liners and containment structures. Geosynthetic Clay Liners (GCL) use sodium bentonite sandwiched between geotextiles.", buyers: "Global environmental and waste management projects", icon: <Icons.Globe /> },
              { t: "Agriculture — Sulphur Bentonite", sub: "", d: "Sulphur bentonite (90% sulphur + 10% bentonite binder) is a slow-release sulphur fertiliser for sulphur-deficient soils.", buyers: "Large export market in Southeast Asia, Australia and Latin America", icon: <Icons.Zap /> }
            ].map((app, i) => (
              <Reveal key={i} variant="fadeUp" delay={i * 100} className="bg-[#f8f9fb] p-10 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-white text-wine rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {app.icon}
                </div>
                <h4 className="text-2xl font-black uppercase italic mb-1 text-navy">{app.t}</h4>
                {app.sub && <span className="text-wine text-xs font-black uppercase tracking-widest mb-6 block">{app.sub}</span>}
                <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6">{app.d}</p>
                <div className="p-4 bg-white rounded-xl border border-gray-100">
                  <span className="text-[10px] font-black uppercase tracking-widest text-navy block mb-2">Export Buyers:</span>
                  <p className="text-gray-500 text-xs italic font-medium">{app.buyers}</p>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal variant="fadeUp" className="mt-12 text-center">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
              <span className="text-wine">Other applications:</span> cat litter (Middle East, Asia) · animal feed binder · paper manufacturing pitch control · cosmetics and skin care · pharmaceuticals · dyes and paints
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Section 6 & 7: Why source & buy ────────────────────────────── */}
      <section className="py-32 bg-gray-50 overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <Reveal variant="fadeRight">
              <h3 className="text-4xl font-black text-navy uppercase italic mb-10">Why source <span className="text-wine">Indian bentonite</span></h3>
              <div className="space-y-8">
                {[
                  { t: "Geology advantage", d: "Kutch sodium bentonite is naturally high in montmorillonite — minimal activation needed for premium grades, unlike many origins requiring heavy soda ash treatment." },
                  { t: "Price competitiveness", d: "India exports below US sodium bentonite and competitive with Turkish origin for most Southeast Asian and African buyers." },
                  { t: "Freight advantage", d: "For Malaysia, Vietnam, Indonesia, Bangladesh, Sri Lanka and Gulf buyers — Mundra and Kandla ports offer shorter transit and lower freight than US or European origins." },
                  { t: "Full processing range", d: "From raw lumps to premium API-certified powder — complete grade portfolio from one origin." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start">
                    <div className="w-10 h-10 bg-wine/10 text-wine rounded-xl flex items-center justify-center shrink-0">
                      <Icons.Check />
                    </div>
                    <div>
                      <h5 className="font-black text-navy uppercase text-sm mb-2 tracking-widest">{item.t}</h5>
                      <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="fadeLeft">
              <h3 className="text-4xl font-black text-navy uppercase italic mb-10">Why buy <span className="text-wine">from us</span></h3>
              <div className="bg-navy p-10 rounded-[2.5rem] shadow-xl space-y-10 text-white">
                <div>
                  <h4 className="text-wine font-black uppercase text-xs tracking-[0.2em] mb-4">Quality & consistency</h4>
                  <ul className="space-y-3">
                    {["Fixed Kutch / Rajasthan source — consistent montmorillonite lot to lot", "Full COA per lot: montmorillonite %, swelling index, moisture, viscosity, screen residue", "API 13A Section 9 & 11 compliance certificate per consignment", "SGS / Intertek pre-shipment inspection available on request", "MSDS, COO, packing list with every shipment"].map((li, i) => (
                      <li key={i} className="flex gap-3 text-sm font-medium text-gray-300">
                        <span className="text-wine">•</span> {li}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-wine font-black uppercase text-xs tracking-[0.2em] mb-4">Supply & logistics</h4>
                  <ul className="space-y-3">
                    {["All grades from one supplier — API, OCMA, foundry, civil, calcium", "MOQ 2 MT — easy trial before full container commitment", "Ex-stock at Mundra / Kandla — 3–7 day delivery", "Competitive FOB / CIF pricing to your port", "Sample dispatched within 3–5 days"].map((li, i) => (
                      <li key={i} className="flex gap-3 text-sm font-medium text-gray-300">
                        <span className="text-wine">•</span> {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Section 8: Mine Owners & Origin ─────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <Reveal variant="fadeRight">
            <h3 className="text-3xl font-black text-navy uppercase italic mb-6">Origin & <span className="text-wine">Processing</span></h3>
            <div className="mb-10">
              <span className="block text-[10px] font-black uppercase tracking-widest text-wine mb-3">Processing Chain:</span>
              <p className="text-gray-600 font-bold text-sm bg-[#f8f9fb] p-6 rounded-2xl border border-gray-100 leading-relaxed">
                Open quarry &rarr; Jaw crushing &rarr; Rotary drying &rarr; Raymond milling / ball milling &rarr; Soda ash activation (where required) &rarr; Air classification and screening &rarr; Packaging
              </p>
            </div>
            
            <span className="block text-[10px] font-black uppercase tracking-widest text-wine mb-4">Origin Belts:</span>
            <div className="space-y-4">
              <div className="border-l-4 border-navy pl-4">
                <h5 className="font-black text-navy text-sm uppercase">Kutch district, Gujarat</h5>
                <p className="text-gray-500 text-xs font-medium mt-1">World-class natural sodium bentonite; Vandh, Pundi, Sherdi-Mandvi area; primary source for API and OCMA drilling grade.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <h5 className="font-black text-navy text-sm uppercase">Barmer / Bikaner, Rajasthan</h5>
                <p className="text-gray-500 text-xs font-medium mt-1">Calcium bentonite; primary source for industrial, agricultural and cosmetic grades.</p>
              </div>
              <div className="border-l-4 border-wine pl-4">
                <h5 className="font-black text-navy text-sm uppercase">Bhuj area, Gujarat</h5>
                <p className="text-gray-500 text-xs font-medium mt-1">Mixed deposits; foundry and civil grade.</p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fadeLeft">
            <div className="bg-wine/10 p-12 border border-wine/20 rounded-[2.5rem] h-full">
              <h3 className="text-2xl font-black uppercase italic mb-4 text-navy">Mine owners & processors</h3>
              <p className="text-wine font-black uppercase tracking-widest text-[10px] mb-6">Welcome to work with us</p>
              <p className="text-gray-600 font-medium text-sm leading-relaxed mb-8">
                We source bentonite from Gujarat and Rajasthan — if you are a mine owner, processor or grinding unit with consistent quality material and regular production capacity, we want to hear from you.
              </p>
              
              <div className="bg-white p-6 rounded-2xl mb-8">
                <span className="block text-[10px] font-black uppercase tracking-widest text-wine mb-2">What we need:</span>
                <p className="text-gray-600 text-xs font-bold leading-relaxed">
                  Consistent montmorillonite content, moisture below 14%, proper screening and grinding — and the ability to supply reliably month after month.
                </p>
              </div>

              <div className="bg-navy text-white p-6 rounded-2xl">
                <span className="block text-[10px] font-black uppercase tracking-widest text-white/50 mb-2">Send us:</span>
                <p className="text-white text-xs font-medium leading-relaxed">
                  Company · Location (district) · Grade produced · Monthly capacity (MT) · Typical swelling index · Contact number
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Section 10: Logistics ─────────────────────────── */}
      <section className="py-24 bg-navy text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase italic leading-none mb-4">Logistics <span className="text-wine">& Export Facts</span></h2>
            <p className="text-wine font-black uppercase tracking-[0.3em] text-[10px]">HS Code: 2508.10 (Bentonite)</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Packaging", d: "50kg HDPE bags, 25kg bags, 500kg / 1MT jumbo bags. Bulk FCL for large foundry and pelletising orders." },
              { t: "Container Load", d: "One 20-ft FCL: approximately 22–24 MT of bagged bentonite powder." },
              { t: "Ports", d: "Mundra / Kandla (primary — 2–3 hours from Kutch mines). Nhava Sheva for consolidated loads." },
              { t: "Transit Times", d: "Gulf 8–12 days · SE Asia 12–18 days · East Africa 14–18 days · Romania / Europe 20–28 days." },
              { t: "Incoterms", d: "FOB Mundra / Kandla · CIF · CFR" },
              { t: "Lead Time", d: "Ex-stock 3–7 days · fresh production run 12–18 days." }
            ].map((box, i) => (
              <Reveal key={i} variant="fadeUp" delay={i * 50} className={`p-8 border border-white/10 rounded-2xl bg-white/5 ${i >= 4 ? "lg:col-span-2" : ""}`}>
                <h5 className="font-black uppercase text-[10px] tracking-widest text-wine mb-3 italic tracking-[0.2em]">{box.t}</h5>
                <p className="text-white text-sm font-medium leading-relaxed">{box.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-32 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal variant="fadeUp" className="text-center mb-16">
            <h3 className="text-4xl font-black text-navy uppercase italic mb-4">Frequently Asked <span className="text-wine">Questions</span></h3>
            <div className="w-20 h-1 bg-wine mx-auto"></div>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 50}>
                <div 
                  className={`bg-white border transition-all duration-300 rounded-2xl overflow-hidden ${
                    activeFaq === idx 
                      ? "border-wine shadow-md" 
                      : "border-gray-100 shadow-sm hover:border-wine/30"
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full px-6 py-6 text-left flex justify-between items-center group"
                  >
                    <span className={`font-black uppercase text-xs transition-colors duration-300 tracking-[0.1em] ${
                      activeFaq === idx ? "text-wine" : "text-navy group-hover:text-wine"
                    }`}>
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4 ${
                      activeFaq === idx ? "bg-wine text-white rotate-180" : "bg-gray-50 text-navy"
                    }`}>
                      <Icons.Chevron className="w-4 h-4" />
                    </div>
                  </button>
                  <div 
                    className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${
                      activeFaq === idx ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 border-t border-gray-50">
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

      {/* ── Section 9: CTA ───────────────────────────────────────────── */}
      <section className="py-32 bg-wine relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <Reveal variant="fadeUp">
            <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-10">
              Request a Quote / <span className="text-navy">Sample COA</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/rfq" className="w-full md:w-auto bg-navy text-white px-12 py-6 font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-navy transition-all rounded-2xl flex items-center justify-center gap-4">
                <Icons.Truck />
                <span>RFQ Dashboard</span>
              </Link>
              <a href="https://wa.me/919258720699" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto border-2 border-white/20 text-white px-12 py-[22px] font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-navy transition-all rounded-2xl flex items-center justify-center gap-4">
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Bentonite;
