import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Body scroll lock during load
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 300); // Slightly faster for inner pages
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: rotate(45deg) scale(1); opacity: 0.8; }
          50% { transform: rotate(45deg) scale(1.15); opacity: 1; }
        }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
      `}</style>

      <div
        className={`fixed inset-0 z-[9999] bg-[#002d52] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {/* Central Logo / Icon */}
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-[#88204a]/30 border-t-[#88204a] rounded-xl animate-spin-slow"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 bg-white rounded-lg rotate-45 animate-pulse-slow shadow-xl shadow-white/10"></div>
          </div>
        </div>

        {/* Brand Label */}
        <div className="text-center">
          <h1 className="text-white text-2xl font-black tracking-[0.2em] uppercase mb-1">
            Ochnology<span className="text-[#88204a]">.</span>
          </h1>
          <p className="text-gray-400 text-[10px] font-bold tracking-[0.4em] uppercase opacity-60">
            High Performance Materials
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="mt-12 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className={`h-full bg-gradient-to-r from-[#88204a] to-[#d83a73] transition-all duration-[2000ms] ease-out shadow-[0_0_10px_#88204a] ${isLoading ? "w-full" : "w-0"}`}
          ></div>
        </div>

        {/* Loading Quote */}
        <div className="absolute bottom-12 text-white/20 text-[9px] uppercase tracking-[0.3em] font-medium italic">
          Calibrating Industrial Purity...
        </div>
      </div>
    </>
  );
};

export default Preloader;
