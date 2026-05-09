import React from "react";
import { useLocation } from "react-router-dom";

const WhatsAppButton = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");

  // Mapping based on user requirements
  const getWhatsAppNumber = () => {
    // 1. Refractory Products
    const refractoryPaths = [
      "refractory-bricks",
      "dead-burnt-magnesite",
      "fused-alumina",
      "bauxite",
      "calcium-aluminate-cement",
      "cenospheres"
    ];

    // 2. Industrial and Functional Minerals
    const mineralPaths = [
      "limestone",
      "talc",
      "kaolin",
      "bentonite",
      "quartz",
      "feldspar",
      "barytes",
      "mica",
      "wollastonite",
      "calcite",
      "fluorspar",
      "silica-sand",
      "silica-fume"
    ];

    // 3. Steel Metallurgy, Industrial Chemicals
    const metallurgyChemicalsPaths = [
      "soda-ash",
      "activated-carbon",
      "carbon-raiser",
      "gpc",
      "anthracite",
      "electrode-scrap",
      "mill-scale",
      "iron-ore",
      "pig-iron",
      "dolomite",
      "titanium-dioxide",
      "sles",
      "urea",
      "technical-grade-urea",
      "fatty-acids",
      "hardwood-charcoal",
      "carbon-black",
      "isoamyl-alcohol",
      "fusel-oil",
      "pet-resin",
      "lithium-carbonate",
      "cobalt-sulphate"
    ];

    // 4. Advanced Materials
    const advancedMaterialsPaths = [
      "nano-products",
      "aluminum"
    ];

    if (refractoryPaths.includes(path)) return "919258720699";
    if (mineralPaths.includes(path)) return "919286823642";
    if (metallurgyChemicalsPaths.includes(path)) return "919286823643";
    if (advancedMaterialsPaths.includes(path)) return "919258720699";

    // Default
    return "919258720699";
  };

  const number = getWhatsAppNumber();
  const waLink = `https://wa.me/${number}?text=Hello, I am interested in your products.`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute -inset-4 bg-[#25D366] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"></div>
      <div className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:-rotate-12 transition-all duration-300">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.079 11.97c0 2.112.551 4.175 1.597 6.01L0 24l6.135-1.61a11.782 11.782 0 005.912 1.583h.005c6.604 0 11.967-5.367 11.97-11.97a11.85 11.85 0 00-3.511-8.49z" />
        </svg>
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#002d52] px-4 py-2 rounded-lg shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-100">
        Chat with us
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-r border-t border-gray-100"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
