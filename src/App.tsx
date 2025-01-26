import React, { useRef } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ToolsAndScanner from "./components/ToolsAndScanner";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import CustomerReviews from "./components/CustomerReviews";
import FeaturedProducts from "./components/FeaturedProducts";

const App: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null); // Ref for Navbar

  return (
    <div className="poppins-regular hide-scrollbar flex w-full flex-col overflow-x-hidden bg-[rgba(26,31,40,1)]">
      <Navbar ref={navbarRef} />
      <HeroSection navbarRef={navbarRef} />
      <ToolsAndScanner />
      <WhyChooseUs />
      <FeaturedProducts />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default App;
