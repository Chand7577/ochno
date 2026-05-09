import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Silica from "./pages/Silica.jsx";
import SilicaSand from "./pages/SilicaSand.jsx";
import Carbon from "./pages/Carbon.jsx";
import CarbonRaiser from "./pages/CarbonRaiser.jsx";
import Gpc from "./pages/Gpc.jsx";
import ElectrodeScrap from "./pages/ElectrodeScrap.jsx";
import Quartz from "./pages/Quartz.jsx";
import MillScale from "./pages/MillScale.jsx";
import LithiumCarbonate from "./pages/LithiumCarbonate.jsx";
import CobaltSulphate from "./pages/CobaltSulphate.jsx";
import Refractory from "./pages/Refractory.jsx";
import RFQ from "./pages/RFQ.jsx";
import Feldspar from "./pages/Feldspar.jsx";
import CalcinedBauxite from "./pages/CalcinedBauxite.jsx";
import Barytes from "./pages/Barytes.jsx";
import Cenospheres from "./pages/Cenospheres.jsx";
import DeadBurntMagnesite from "./pages/DeadBurntMagnesite.jsx";
import Mica from "./pages/Mica.jsx";
import Wollastonite from "./pages/Wollastonite.jsx";
import Fluorspar from "./pages/Fluorspar.jsx";
import CopperSlag from "./pages/CopperSlag.jsx";
import PigIron from "./pages/PigIron.jsx";
import Dolomite from "./pages/Dolomite.jsx";
import TitaniumDioxide from "./pages/TitaniumDioxide.jsx";
import Limestone from "./pages/Limestone.jsx";
import Talc from "./pages/Talc.jsx";
import SLES from "./pages/SLES.jsx";
import FusedAlumina from "./pages/FusedAlumina.jsx";
import NanoProducts from "./pages/NanoProducts.jsx";
import AnthraciteCoal from "./pages/AnthraciteCoal.jsx";
import Urea from "./pages/Urea.jsx";
import FattyAcids from "./pages/FattyAcids.jsx";
import Bentonite from "./pages/Bentonite.jsx";
import RecoveredCarbonBlack from "./pages/RecoveredCarbonBlack.jsx";
import HardwoodCharcoal from "./pages/HardwoodCharcoal.jsx";
import SodaAsh from "./pages/SodaAsh.jsx";
import ActivatedCarbon from "./pages/ActivatedCarbon.jsx";
import Calcite from "./pages/Calcite.jsx";
import PetResin from "./pages/PetResin.jsx";
import FuselOilIsoamylAlcohol from "./pages/FuselOilIsoamylAlcohol.jsx";
import CalciumAluminateCement from "./pages/CalciumAluminateCement.jsx";
import TestReports from "./pages/TestReports.jsx";
import Glimpses from "./pages/Glimpses.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import AluminiumPowder from "./pages/AluminiumPowder.jsx";
import Kaolin from "./pages/Kaolin.jsx";
import Industries from "./pages/Industries.jsx";








function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-navy font-sans relative">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col w-full h-full relative z-0">
        <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
        <main className="flex-grow pt-20">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
}

const routeArray = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "silica-fume", element: <Silica /> },
      { path: "silica-sand", element: <SilicaSand /> },
      { path: "carbon-raiser", element: <CarbonRaiser /> },
      { path: "gpc", element: <Gpc /> },
      { path: "anthracite", element: <AnthraciteCoal /> },
      { path: "electrode-scrap", element: <ElectrodeScrap /> },
      { path: "quartz", element: <Quartz /> },
      { path: "mill-scale", element: <MillScale /> },
      { path: "iron-ore", element: <MillScale /> },
      { path: "lithium-carbonate", element: <LithiumCarbonate /> },
      { path: "cobalt-sulphate", element: <CobaltSulphate /> },
      { path: "refractory-bricks", element: <Refractory /> },
      { path: "feldspar", element: <Feldspar /> },
      { path: "bauxite", element: <CalcinedBauxite /> },
      { path: "barytes", element: <Barytes /> },
      { path: "cenospheres", element: <Cenospheres /> },
      { path: "calcium-aluminate-cement", element: <CalciumAluminateCement /> },
      { path: "dead-burnt-magnesite", element: <DeadBurntMagnesite /> },
      { path: "mica", element: <Mica /> },
      { path: "wollastonite", element: <Wollastonite /> },
      { path: "fluorspar", element: <Fluorspar /> },
      { path: "copper-slag", element: <CopperSlag /> },
      { path: "pig-iron", element: <PigIron /> },
      { path: "dolomite", element: <Dolomite /> },
      { path: "titanium-dioxide", element: <TitaniumDioxide /> },
      { path: "limestone", element: <Limestone /> },
      { path: "talc", element: <Talc /> },
      { path: "sles", element: <SLES /> },
      { path: "fused-alumina", element: <FusedAlumina /> },
      { path: "nano-products", element: <NanoProducts /> },
      { path: "urea", element: <Urea /> },
      { path: "technical-grade-urea", element: <Urea /> },
      { path: "fatty-acids", element: <FattyAcids /> },
      { path: "aluminum", element: <AluminiumPowder /> },
      { path: "hardwood-charcoal", element: <HardwoodCharcoal /> },
      { path: "soda-ash", element: <SodaAsh /> },
      { path: "activated-carbon", element: <ActivatedCarbon /> },
      { path: "carbon-black", element: <RecoveredCarbonBlack /> },
      { path: "isoamyl-alcohol", element: <FuselOilIsoamylAlcohol /> },
      { path: "fusel-oil", element: <FuselOilIsoamylAlcohol /> },
      { path: "calcite", element: <Calcite /> },
      { path: "pet-resin", element: <PetResin /> },
      { path: "bentonite", element: <Bentonite /> },
      { path: "kaolin", element: <Kaolin /> },
      { path: "industries", element: <Industries /> },
      { path: "glimpses", element: <Glimpses /> },







      { path: "test-reports", element: <TestReports /> },
      { path: "rfq", element: <RFQ /> },
    ],
  },
];

const router = createBrowserRouter(routeArray);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
