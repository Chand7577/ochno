import React from "react";
import Preloader from "../components/Preloader.jsx";

const Carbon = () => {
  return (
    <div className="bg-[#f8f9fb] min-h-screen text-navy font-sans overflow-x-hidden">
      <Preloader />
      {/* Carbon Razor Content Placeholder */}
      <div className="flex items-center justify-center p-20">
        <h1 className="text-4xl font-black text-navy uppercase">Carbon <span className="text-wine">Razor</span></h1>
      </div>
    </div>
  );
};

export default Carbon;
