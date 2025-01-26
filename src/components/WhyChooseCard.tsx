import React, { ReactElement } from "react";

interface WhyChooseCardProps {
  serviceIcon: ReactElement;
  title: string;
  numberIcon: ReactElement;
  desc: string;
}
const WhyChooseCard: React.FC<WhyChooseCardProps> = ({
  serviceIcon,
  title,
  numberIcon,
  desc,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-[30px]">
        <div>{serviceIcon}</div>
        <div className="text-[27px] font-semibold text-white">{title}</div>
      </div>
      <div className="flex gap-5">
        <div>{numberIcon}</div>
        <div className="px-8 text-sm font-normal text-[rgba(204,204,204,1)]">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseCard;
