import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import DeliveryIcon from "../icons/DeliveryIcon";
import FiveStarIcon from "../icons/FiveStarIcon";
import TimerIcon from "../icons/TimerIcon";
import CircleTickIcon from "../icons/CircleTickIcon";

interface HeroSectionProps {
  navbarRef: React.RefObject<HTMLDivElement>; // Receive navbarRef as a prop
}

const HeroSection: React.FC<HeroSectionProps> = ({ navbarRef }) => {
  const [heroHeight, setHeroHeight] = useState<string>("100vh"); // State for hero height

  useEffect(() => {
    const updateHeroHeight = () => {
      if (navbarRef.current) {
        const navbarHeight = navbarRef.current.offsetHeight; // Get navbar height
        setHeroHeight(`calc(100vh - ${navbarHeight}px)`); // Set height
      }
    };

    updateHeroHeight(); // Run on mount
    window.addEventListener("resize", updateHeroHeight); // Adjust on resize

    return () => {
      window.removeEventListener("resize", updateHeroHeight); // Cleanup on unmount
    };
  }, [navbarRef]);

  return (
    <div
      className="h-1/2 w-full bg-[url(./assets/bgImg2.jpg)] bg-cover bg-no-repeat md:h-full"
      style={{
        height: heroHeight, // Dynamically calculated height
      }}
    >
      <div className="relative h-full w-full bg-[rgba(17,24,34,0.6)] text-white">
        <div className="hidden justify-around px-4 py-2 text-sm font-semibold md:flex md:px-16 md:text-[17px] lg:px-32 xl:px-40">
          <div className="flex items-center gap-3">
            <DeliveryIcon />
            <div className="text-sm font-normal text-white">Free Delivery</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm font-normal text-white">
              iCarsoft UK Authorised Dealer
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FiveStarIcon />
            <div className="text-sm font-normal text-white">
              Rated Excellent
            </div>
          </div>
          <div className="flex items-center gap-3">
            <TimerIcon />
            <div className="text-sm font-normal text-white">
              Buy Now, Pay Later
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CircleTickIcon />
            <div className="text-sm font-normal text-white">
              Found it Cheaper?
            </div>
          </div>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default HeroSection;
