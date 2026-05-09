import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.jsx";

// Reports
import fuselOilReport from "../assets/docs/3rd_party_lab_report_fusel_oil.pdf";
import iaaTestReport from "../assets/docs/iaa_test_report.pdf";
import limestoneReport from "../assets/docs/Indian Limestone report.PDF";
import silicaFumeSGSReport from "../assets/docs/silica fume sgs report ochnology sol.pdf";
import silicaFumeNABLReport from "../assets/docs/silica fume nabl lab test report India.pdf";
import npkTestReport from "../assets/docs/NPK test report.PDF";

// ── Icons ──────────────────────────────────────────────────────────────────
const Icons = {
  Download: () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3" />
    </svg>
  ),
  FileText: () => (
    <svg className="w-6 h-6 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

// ── Reveal Component ─────────────────────────────────────────────────────────
const Reveal = ({ children, variant = "fadeUp", delay = 0, duration = 800, threshold = 0.1, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const variants = {
    fadeUp: { h: "opacity-0 translate-y-12 blur-sm", v: "opacity-100 translate-y-0 blur-none" },
  };

  const { h, v } = variants[variant] || variants.fadeUp;
  return (
    <div ref={ref} style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }} className={`transition-all ease-out ${visible ? v : h} ${className}`}>
      {children}
    </div>
  );
};

const TestReports = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reports = [
    {
      title: "Indian Limestone Report",
      description: "Comprehensive chemical analysis and purity report for high-grade Indian Limestone.",
      file: limestoneReport,
      fileName: "Indian_Limestone_Report.pdf",
      category: "Industrial Minerals"
    },
    {
      title: "3rd Party Lab Report - Fusel Oil",
      description: "Verified third-party analysis of Fusel Oil composition and assay results.",
      file: fuselOilReport,
      fileName: "3rd_Party_Lab_Report_Fusel_Oil.pdf",
      category: "Industrial Chemicals"
    },
    {
      title: "Isoamyl Alcohol Test Report",
      description: "Technical test report for high-purity Isoamyl Alcohol (IAA) grades.",
      file: iaaTestReport,
      fileName: "Isoamyl_Alcohol_Test_Report.pdf",
      category: "Industrial Chemicals"
    },
    {
      title: "Silica Fume SGS Report",
      description: "Verified SGS laboratory analysis for high-performance Silica Fume (Microsilica).",
      file: silicaFumeSGSReport,
      fileName: "Silica_Fume_SGS_Report.pdf",
      category: "Industrial Minerals"
    },
    {
      title: "Silica Fume NABL Lab Test Report",
      description: "Accredited NABL laboratory test report ensuring quality standards for Silica Fume in India.",
      file: silicaFumeNABLReport,
      fileName: "Silica_Fume_NABL_Report.pdf",
      category: "Industrial Minerals"
    },
    {
      title: "NPK Test Report",
      description: "Comprehensive chemical analysis and nutrient composition report for NPK fertilizers.",
      file: npkTestReport,
      fileName: "NPK_Test_Report.pdf",
      category: "Agro Chemicals"
    }
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-navy font-sans overflow-x-hidden pt-10">
      <Preloader />

      {/* 🚀 Hero Section */}
      <section className="relative w-full py-24 flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal variant="fadeUp" delay={200}>
            <span className="inline-block px-6 py-2 bg-wine text-white rounded-md text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-2xl shadow-wine/50">
              Technical Documents
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter italic leading-[0.9]">
              Test <span className="text-wine">Reports</span>
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={600}>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed mb-12 italic">
              Access verified laboratory analysis, third-party certifications, and technical data sheets for our industrial product range.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 📂 Reports Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={100 * idx}>
                <Card className="h-full bg-gray-50 border-none shadow-sm hover:shadow-xl transition-all group rounded-none">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <Icons.FileText />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-wine bg-wine/10 px-3 py-1">
                        {report.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-black text-navy uppercase italic group-hover:text-wine transition-colors">
                      {report.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 text-sm font-medium mb-8 leading-relaxed">
                      {report.description}
                    </p>
                    <a
                      href={report.file}
                      download={report.fileName}
                      className="inline-flex items-center text-navy font-black uppercase text-xs tracking-widest border-b-2 border-navy hover:text-wine hover:border-wine transition-all"
                    >
                      <Icons.Download /> Download PDF
                    </a>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 🏁 Call to Action */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal variant="fadeUp">
            <h2 className="text-3xl font-black text-navy uppercase italic mb-6">Need More Information?</h2>
            <p className="text-gray-500 font-medium mb-10 leading-relaxed">
              If you require specific test reports for other products or custom chemical analysis for your batch, please get in touch with our technical team.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-navy text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-wine transition-all shadow-xl">
                Contact Technical Team
              </Link>
              <Link to="/rfq" className="border-2 border-navy text-navy px-10 py-[18px] text-sm font-black uppercase tracking-widest hover:bg-navy hover:text-white transition-all shadow-xl">
                Request Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default TestReports;
