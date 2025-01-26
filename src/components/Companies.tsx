import React from "react";
import VwIcon from "../icons/VwIcon";
import AudiIcon from "../icons/AudiIcon";
import BmwIcon from "../icons/BmwIcon";
import JaguarIcon from "../icons/JaguarIcon";
import SeatIcon from "../icons/SeatIcon";
import SkodaIcon from "../icons/SkodaIcon";
import RangeRoverIcon from "../icons/RangeRoverIcon";

const Companies: React.FC = () => {
  return (
    <div className="hide-scrollbar container mx-auto mt-2 flex items-center space-x-10 overflow-x-scroll scroll-smooth px-4 py-16 md:justify-between md:overflow-hidden">
      <VwIcon />
      <AudiIcon />
      <BmwIcon />
      <JaguarIcon />
      <SeatIcon />
      <SkodaIcon />
      <RangeRoverIcon />
    </div>
  );
};

export default Companies;
