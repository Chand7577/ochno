import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Ochnology logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const topProducts = [
    { name: "Silica Fume", path: "/silica-fume" },
    { name: "Quartz", path: "/quartz" },
    { name: "Feldspar", path: "/feldspar" },
    { name: "Barytes", path: "/barytes" },
    { name: "Cenospheres", path: "/cenospheres" },
    { name: "Bauxite", path: "/bauxite" },
    { name: "Mill Scale", path: "/mill-scale" },
    { name: "Lithium Carbonate", path: "/lithium-carbonate" },
    { name: "Limestone", path: "/limestone" },
    { name: "Talc", path: "/talc" },
    { name: "SLES", path: "/sles" },
  ];

  const resourceLinks = [
    { name: "Industries we serve", path: "/industries" },
    { name: "Test Reports", path: "/test-reports" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <footer className="bg-[#002d52] text-white pt-24 pb-12 border-t-[8px] border-[#88204a]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* Column 1: Company Info - 4 units */}
          <div className="lg:col-span-4 flex flex-col">
            <Link to="/" className="flex items-center mb-2 group">
              <img
                src={logo}
                alt="Ochnology"
                className="h-50 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8 font-light text-lg max-w-md">
              Ochnology Solution Private Limited is a global sourcing and export
              company delivering excellence in Industrial Materials, Steel &
              Refractory Solutions.
            </p>
            <div className="flex space-x-5">
              {[
                {
                  name: "WhatsApp",
                  icon: "M12.031 0C5.393 0 0 5.393 0 12.032c0 2.126.549 4.195 1.593 6.02L.055 24l6.096-1.598A11.933 11.933 0 0012.031 24c6.638 0 12.031-5.394 12.031-12.033S18.669 0 12.031 0zm3.842 17.26c-.164.462-.953.904-1.344.965-.91.135-2.072.102-3.8-1.002-2.126-1.359-3.486-3.771-3.585-3.904-.102-.132-.857-1.144-.857-2.183 0-1.04.536-1.547.728-1.748.191-.192.42-.24.55-.24h.392c.164 0 .38.064.593.588.225.556.55 1.346.6 1.444.05.102.081.222.016.353-.066.132-.1.21-.197.324-.097.114-.2.247-.282.342-.09.096-.188.204-.08.384.11.18.49.799 1.053 1.302.726.65 1.332.85 1.513.946.182.096.289.084.398-.036.11-.12.47-.547.596-.732.126-.186.252-.15.42-.09.168.06.1065.504 1.25.576.185.072.311.114.358.174.047.06.047.348-.117.81z",
                  href: "https://api.whatsapp.com/send/?phone=919258720699",
                },
                {
                  name: "LinkedIn",
                  icon: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
                  href: "https://www.linkedin.com/company/ochnology-solution-private-limited/",
                },
                {
                  name: "Facebook",
                  icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
                  href: "https://facebook.com/",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#88204a] hover:-translate-y-1 transition-all shadow-lg"
                  aria-label={social.name}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Top Products - 3 units */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold mb-8 text-white relative inline-block">
              Top Products
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#88204a] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {topProducts.map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.path}
                    className="text-gray-400 hover:text-white transition-all flex items-center group font-light"
                  >
                    <span className="mr-3 text-[#88204a] transition-transform group-hover:translate-x-1">
                      ›
                    </span>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources - 2 units */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold mb-8 text-white relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#88204a] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-all flex items-center group font-light"
                  >
                    <span className="mr-3 text-[#88204a] transition-transform group-hover:translate-x-1">
                      ›
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-all flex items-center group font-light"
                >
                  <span className="mr-3 text-[#88204a] transition-transform group-hover:translate-x-1">
                    ›
                  </span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-all flex items-center group font-light"
                >
                  <span className="mr-3 text-[#88204a] transition-transform group-hover:translate-x-1">
                    ›
                  </span>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact - 3 units */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold mb-8 text-white relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#88204a] rounded-full"></span>
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#88204a]/20 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-[#88204a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  B-153, Sector Number-4,
                  <br />
                  Defence Colony, Dehradun,
                  <br />
                  Uttarakhand, India 248001
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#88204a]/20 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-[#88204a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:bd@ochnology.com"
                    className="text-gray-400 hover:text-white transition-colors text-sm font-light"
                  >
                    bd@ochnology.com
                  </a>
                  <a
                    href="mailto:info@ochnology.com"
                    className="text-gray-400 hover:text-white transition-colors text-sm font-light"
                  >
                    info@ochnology.com
                  </a>
                  <a
                    href="mailto:projects@ochnology.com"
                    className="text-gray-400 hover:text-white transition-colors text-sm font-light"
                  >
                    projects@ochnology.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#88204a]/20 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-[#88204a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919258720699"
                    className="text-gray-400 hover:text-white transition-colors text-sm font-light"
                  >
                    +91 92587 20699
                  </a>
                  <a
                    href="tel:+919286823642"
                    className="text-gray-400 hover:text-white transition-colors text-sm font-light"
                  >
                    (+91) 9286823642
                  </a>
                  <a
                    href="tel:+919286823643"
                    className="text-gray-400 hover:text-white transition-colors text-sm font-light"
                  >
                    (+91) 9286823643
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-6 md:mb-0 text-center md:text-left">
            &copy; {currentYear} Ochnology Solutions Pvt Ltd. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-8 mb-6 md:mb-0">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-center md:text-right">
            Designed by{" "}
            <a
              href="https://grandeurnet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#88204a] font-medium hover:text-white transition-colors"
            >
              Grandeur Net
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
