import React, { useRef } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ToolsAndScanner from "./components/ToolsAndScanner";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null); // Ref for Navbar

  return (
    <div className="w-full bg-[rgba(26,31,40,1)]">
      {/* Pass the ref to Navbar */}
      <Navbar ref={navbarRef} />
      {/* Pass the same ref to HeroSection for height adjustment */}
      <HeroSection navbarRef={navbarRef} />
      <ToolsAndScanner />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default App;
