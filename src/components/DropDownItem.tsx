import React from "react";
import RightArrowIcon from "../icons/RightArrowIcon";
interface DropDownItemProps {
  itemName: string;
}

const DropDownItem = ({ itemName }: DropDownItemProps) => {
  return (
    <div className="group flex cursor-pointer items-center gap-2 text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]">
      <div>
        <RightArrowIcon />
      </div>
      <div>{itemName}</div>
    </div>
  );
};

export default DropDownItem;
