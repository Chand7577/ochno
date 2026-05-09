import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Ochnology logo.png";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [openSections, setOpenSections] = useState({});
  const location = useLocation();

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const menuData = [
    {
      name: "Home",
      path: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      name: "About Us",
      path: "/about",
      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      name: "Products",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      subcategories: [
        {
          title: "Refractory Materials",
          items: [
            { name: "Silica Fume", path: "/silica-fume" },
            { name: "Calcined Bauxite", path: "/bauxite" },
            { name: "Dead burnt Magnesite", path: "/dead-burnt-magnesite" },
            { name: "White and Brown Fused Alumina", path: "/fused-alumina" },
            {
              name: "Refractory Bricks and castables",
              path: "/refractory-bricks",
            },
            {
              name: "Calcium Aluminate Cement",
              path: "/calcium-aluminate-cement",
            },
          ],
        },
        {
          title: "Industrial Minerals",
          items: [
            { name: "Limestone & Calcined Lime", path: "/limestone" },
            { name: "Quartz", path: "/quartz" },
            { name: "Silica Sand", path: "/silica-sand" },
            { name: "Feldspar", path: "/feldspar" },
            { name: "Dolomite", path: "/dolomite" },
            { name: "Barytes", path: "/barytes" },
            { name: "Bentonite", path: "/bentonite" },
          ],
        },
        {
          title: "Functional Minerals",
          items: [
            { name: "Kaolin & China Clay", path: "/kaolin" },
            { name: "Talc", path: "/talc" },
            { name: "Calcite", path: "/calcite" },
            { name: "Wollastonite", path: "/wollastonite" },
            { name: "Mica", path: "/mica" },
            { name: "Fluorspar", path: "/fluorspar" },
          ],
        },
        {
          title: "Steel & Metallurgy Products",
          items: [
            { name: "Pig Iron", path: "/pig-iron" },
            { name: "Mill Scale", path: "/mill-scale" },
            {
              name: "Carbon Raiser – GPC",
              path: "/carbon-raiser",
              subItems: [
                { name: "Anthracite coal", path: "/anthracite" },
                { name: "Electrode Scrap", path: "/electrode-scrap" },
              ],
            },
            { name: "Aluminium Powder & Paste", path: "/aluminum" },
            { name: "Hardwood Charcoal", path: "/hardwood-charcoal" },
            { name: "Copper Slag", path: "/copper-slag" },
          ],
        },
        {
          title: "Industrial Chemicals",
          items: [
            { name: "Titanium Dioxide (TiO2)", path: "/titanium-dioxide" },
            { name: "SLES (Sodium Laureth Sulfate)", path: "/sles" },
            { name: "Soda Ash", path: "/soda-ash" },
            { name: "Activated Carbon", path: "/activated-carbon" },
            { name: "Recovered Carbon Black", path: "/carbon-black" },
            { name: "Fusel oil and Isoamyl Alcohol", path: "/isoamyl-alcohol" },
            { name: "Urea (Technical & AdBlue)", path: "/urea" },
            {
              name: "Fatty Acids( Tofa, PFAD, Stearic Acid)",
              path: "/fatty-acids",
            },
            { name: "Pet Resin (Bottle grade, oil grade)", path: "/pet-resin" },
          ],
        },
        {
          title: "Advanced Materials",
          items: [
            { name: "Nano Products", path: "/nano-products" },
            { name: "Lithium Carbonate", path: "/lithium-carbonate" },
            { name: "Cobalt Sulphate", path: "/cobalt-sulphate" },
            { name: "Silica Sand", path: "/silica-sand" },
            { name: "Cenospheres", path: "/cenospheres" },
          ],
        },
      ],
    },
    {
      name: "Contact us",
      path: "/contact",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    // {
    //   name: "Blogs",
    //   icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
    //   items: [
    //     { name: "Refractory Blogs", path: "/blogs/refractory" },
    //     { name: "Minerals Blogs", path: "/blogs/minerals" },
    //     { name: "Steel & Metallurgy blogs", path: "/blogs/steel" },
    //     { name: "Industrial chemical blogs", path: "/blogs/chemical" },
    //     { name: "Advanced materials Blogs", path: "/blogs/advanced" },
    //   ],
    // },
    {
      name: "Industries",
      icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      items: [
        { name: "Industries we serve", path: "/industries" },
        { name: "Test Reports", path: "/test-reports" },
        { name: "Product & Shipment Photos", path: "/glimpses" },
      ],
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#002d52]/50 backdrop-blur-sm z-[60] transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full bg-white w-80 shadow-2xl z-[70] transition-transform duration-500 ease-in-out flex flex-col
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-gray-50 flex-shrink-0 bg-white">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center group"
          >
            <img
              src={logo}
              alt="Ochnology"
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#002d52] hover:bg-wine/10 hover:text-wine transition-all"
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

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-200">
          {menuData.map((item) => (
            <div key={item.name} className="flex flex-col">
              {item.path ? (
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group
                    ${location.pathname === item.path ? "bg-navy text-white" : "text-gray-600 hover:bg-gray-50 hover:text-navy"}
                  `}
                >
                  <svg
                    className={`w-5 h-5 mr-3 shrink-0 ${location.pathname === item.path ? "text-white" : "text-gray-400 group-hover:text-wine"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                  </svg>
                  <span className="font-semibold">{item.name}</span>
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleSection(item.name)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 text-gray-600 hover:bg-gray-50 hover:text-navy
                      ${openSections[item.name] ? "bg-gray-50/80 text-navy" : ""}
                    `}
                  >
                    <div className="flex items-center">
                      <svg
                        className={`w-5 h-5 mr-3 shrink-0 ${openSections[item.name] ? "text-wine" : "text-gray-400"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={item.icon}
                        />
                      </svg>
                      <span className="font-semibold">{item.name}</span>
                    </div>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${openSections[item.name] ? "rotate-180" : ""}`}
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
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${openSections[item.name] ? "max-h-[2000px] mt-1" : "max-h-0"}`}
                  >
                    <div className="pl-12 flex flex-col space-y-1">
                      {item.subcategories
                        ? item.subcategories.map((sub) => (
                            <div key={sub.title} className="mb-4 last:mb-2">
                              <h4 className="text-xs font-bold text-wine uppercase tracking-widest mb-2 mt-4 px-2">
                                {sub.title}
                              </h4>
                              <div className="flex flex-col space-y-1 border-l-2 border-gray-100">
                                {sub.items.map((subItem) => (
                                  <div
                                    key={subItem.name}
                                    className="flex flex-col"
                                  >
                                    <Link
                                      to={subItem.path}
                                      onClick={() => setIsOpen(false)}
                                      className={`px-4 py-2 text-sm text-gray-500 hover:text-navy hover:bg-gray-50 rounded-lg transition-colors ${subItem.subItems ? "font-bold text-gray-700" : ""}`}
                                    >
                                      {subItem.name}
                                    </Link>
                                    {subItem.subItems && (
                                      <div className="pl-8 flex flex-col space-y-1 mb-2 border-l border-gray-100 ml-4">
                                        {subItem.subItems.map((inner) => (
                                          <Link
                                            key={inner.name}
                                            to={inner.path}
                                            onClick={() => setIsOpen(false)}
                                            className="px-4 py-1.5 text-xs text-gray-400 hover:text-wine transition-colors flex items-center gap-2"
                                          >
                                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                            {inner.name}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))
                        : item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className="px-4 py-3 text-sm text-gray-500 hover:text-navy hover:bg-gray-50 rounded-lg transition-colors border-l-2 border-transparent hover:border-wine"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-gray-50 bg-gray-50/30 space-y-3">
          <Link
            to="/rfq"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-4 bg-wine text-white rounded-xl font-bold hover:bg-wine/90 transition-all shadow-lg active:scale-95"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Request a Quote
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-4 border-2 border-navy bg-navy text-white rounded-xl font-bold hover:bg-navy/90 transition-all active:scale-95"
          >
            Get In Touch
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
