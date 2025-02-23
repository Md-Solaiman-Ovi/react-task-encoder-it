import React from "react";
import OneIcon from "../icons/OneIcon";
import HeadPhoneIcon from "../icons/HeadPhoneIcon";
import WhyChooseCard from "./WhyChooseCard";
import ToolsIcon from "../icons/ToolsIcon";
import TwoIcon from "../icons/TwoIcon";
import DeliveryCarIcon from "../icons/DeliveryCarIcon";
import ThreeIcon from "../icons/ThreeIcon";

interface WhyChooseCardProps {
  serviceIcon: React.ReactNode;
  title: string;
  numberIcon: React.ReactNode;
  desc: string;
}

const WhyChooseUs: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col px-4 py-[70px] md:px-0">
      <div className="mb-16 text-[34px] font-bold text-white italic">
        WHY CHOOSE US?
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <WhyChooseCard
          serviceIcon={<HeadPhoneIcon />}
          title="Excellent customer service"
          numberIcon={<OneIcon />}
          desc="We genuinely believe the key to success is serving our customers. Being there for you before and after the sale. See our feedback to get a feel for how much we GENUINELY care about our customers."
        />
        <WhyChooseCard
          serviceIcon={<ToolsIcon />}
          title="Expert Guidance"
          numberIcon={<TwoIcon />}
          desc="We know the diagnostics industry can be a minefield, with terms like EOBD2, OBDII, CANBUS, and UDS. With so many scanners to choose from, it can be difficult to decide what to buy. We’ll talk you through the options and we’ll never upsell. We’ll advise what's appropriate for you."
        />
        <WhyChooseCard
          serviceIcon={<DeliveryCarIcon />}
          title="Fast Delivery"
          numberIcon={<ThreeIcon />}
          desc="We know when you order a scanner for your car, you may need it fast! All of our scanners are dispatched via Royal Mail first class the next working day, provided you order before our cut-off time of 12pm."
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
