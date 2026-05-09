import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Ochnology logo.png";

export default function Header({ onOpenSidebar }) {
  const [activeMenu, setActiveMenu] = useState(null);

  // SVG Icons
  const Icons = {
    Logo: () => (
      <svg
        className="w-10 h-10 text-wine"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 22h20L12 2zm0 4.5l5.5 11H6.5L12 6.5z" />
      </svg>
    ),
    Chevron: ({ className = "w-4 h-4" }) => (
      <svg
        className={`${className} ml-1 inline-block transition-transform duration-200`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    ),
    Category: () => (
      <svg
        className="w-5 h-5 text-wine/80"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Products",
      type: "mega",
      id: "products",
      categories: [
        {
          title: "Refractory Materials",
          path: "/refractory",
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
          path: "/minerals",
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
          path: "/functional-minerals",
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
          path: "/steel-metallurgy",
          items: [
            { name: "Pig Iron", path: "/pig-iron" },
            { name: "Mill Scale", path: "/mill-scale" },
            {
              name: "Carbon Raiser",
              path: "/carbon-raiser",
              subItems: [
                { name: "GPC", path: "/carbon-raiser" },
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
          path: "/chemicals",
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
          path: "/advanced-materials",
          items: [
            { name: "Nano Products", path: "/nano-products" },
            { name: "Lithium Carbonate", path: "/lithium-carbonate" },
            { name: "Cobalt Sulphate", path: "/cobalt-sulphate" },

            { name: "Cenospheres", path: "/cenospheres" },
          ],
        },
      ],
    },

    // {
    //   name: "Blogs",
    //   type: "dropdown",
    //   id: "blogs",
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
      type: "dropdown",
      id: "industries",
      items: [
        { name: "Industries we serve", path: "/industries" },
        { name: "Test Reports", path: "/test-reports" },
        { name: "Product & Shipment Photos", path: "/glimpses" },
      ],
    },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50 shadow-[0_4px_30px_rgba(0,45,82,0.05)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src={logo}
              alt="Ochnology"
              className="h-36 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex space-x-1 h-full items-center">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className={`${link.type === "mega" ? "static" : "relative"} h-full flex items-center group cursor-pointer px-3`}
                onMouseEnter={() => setActiveMenu(link.id || link.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {link.path ? (
                  <Link
                    to={link.path}
                    className="text-navy hover:text-wine font-medium transition-colors py-2 flex items-center"
                  >
                    {link.name}
                    {link.type && (
                      <Icons.Chevron
                        className={`w-3.5 h-3.5 ${activeMenu === (link.id || link.name) ? "rotate-180 text-wine" : ""}`}
                      />
                    )}
                  </Link>
                ) : (
                  <div className="text-navy group-hover:text-wine font-medium transition-colors py-2 flex items-center">
                    {link.name}
                    {link.type && (
                      <Icons.Chevron
                        className={`w-3.5 h-3.5 ${activeMenu === (link.id || link.name) ? "rotate-180 text-wine" : ""}`}
                      />
                    )}
                  </div>
                )}

                {/* Mega Menu Rendering */}
                {link.type === "mega" && (
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%-0.5rem)] w-[90vw] max-w-[1280px] bg-white border border-gray-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 origin-top overflow-hidden
                      ${activeMenu === link.id ? "translate-y-2 opacity-100 visible" : "translate-y-0 opacity-0 invisible"}
                    `}
                  >
                    <div className="grid grid-cols-6 gap-0 divide-x divide-gray-50">
                      {link.categories.map((cat) => (
                        <div
                          key={cat.title}
                          className="p-5 xl:p-6 hover:bg-gray-50/50 transition-colors"
                        >
                          <h3 className="text-sm font-bold text-wine uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-wine rounded-full"></span>
                            {cat.title}
                          </h3>
                          <ul className="space-y-4">
                            {cat.items.map((item) => (
                              <li key={item.name} className="flex flex-col">
                                <Link
                                  to={item.path}
                                  className={`text-gray-500 hover:text-navy text-sm font-medium transition-all hover:pl-2 flex items-center group/item ${item.subItems ? "mb-2" : ""}`}
                                >
                                  <span className="w-0 group-hover/item:w-2 h-0.5 bg-wine mr-0 group-hover/item:mr-2 transition-all"></span>
                                  {item.name}
                                </Link>
                                {item.subItems && (
                                  <ul className="pl-4 space-y-2 border-l border-gray-100 ml-1 mb-2">
                                    {item.subItems.map((sub) => (
                                      <li key={sub.name}>
                                        <Link
                                          to={sub.path}
                                          className="text-gray-400 hover:text-wine text-xs font-medium transition-colors flex items-center gap-2"
                                        >
                                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                          {sub.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="bg-navy p-4 flex justify-center items-center gap-4">
                      <p className="text-white/70 text-sm">
                        Looking for something specific?
                      </p>
                      <Link
                        to="/contact"
                        className="bg-wine text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-wine/90 transition-colors"
                      >
                        Request a Quote
                      </Link>
                    </div>
                  </div>
                )}

                {/* Simple Dropdown Rendering */}
                {link.type === "dropdown" && (
                  <div
                    className={`absolute left-0 top-[calc(100%-0.5rem)] w-60 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_rgba(0,45,82,0.1)] transition-all duration-300 origin-top
                      ${activeMenu === link.id ? "translate-y-2 opacity-100 visible" : "translate-y-0 opacity-0 invisible"}
                    `}
                  >
                    <div className="flex flex-col py-3">
                      {link.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="px-6 py-3 text-navy hover:text-wine hover:bg-gray-50 font-medium transition-colors text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <Link
              to="/rfq"
              className="hidden md:flex bg-wine text-white px-5 py-2.5 rounded-full font-bold hover:bg-wine/90 transition-all hover:shadow-lg active:scale-95 items-center gap-2 text-sm"
            >
              <svg
                className="w-4 h-4"
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
              Request Quote
            </Link>
            <Link
              to="/contact"
              className="hidden sm:flex bg-navy text-white px-6 py-2.5 rounded-full font-bold hover:bg-wine transition-all hover:shadow-lg active:scale-95"
            >
              Get In Touch
            </Link>

            <button
              type="button"
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-navy/5 text-navy hover:text-white hover:bg-wine transition-all shadow-sm active:scale-95"
              onClick={onOpenSidebar}
              aria-label="Toggle Navigation"
            >
              <div className="flex flex-col items-end space-y-1.5 p-1">
                <span className="w-6 h-0.5 bg-current rounded-full transition-all"></span>
                <span className="w-4 h-0.5 bg-current rounded-full transition-all"></span>
                <span className="w-5 h-0.5 bg-current rounded-full transition-all"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
