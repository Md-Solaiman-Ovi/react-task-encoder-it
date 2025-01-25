import React from "react";
import EuroIcon from "../icons/EuroIcon";

const ToolsAndScanner = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <div className="flex flex-col justify-center gap-1 py-12">
        <div className="text-center text-sm font-light text-[rgba(204,204,204,1)] md:text-2xl md:font-normal">
          Car Diagnostic
        </div>
        <div className="text-center text-2xl font-bold text-white md:text-[34px]">
          Tools and Scanners
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 px-4 pb-20 md:flex-row md:px-0">
        <div className="flex h-full w-full justify-center lg:w-1/2">
          <img src="/assets/toolsImg.png" alt="" className="" />
        </div>
        <div className="flex w-full flex-col gap-5 px-9 md:px-0 lg:w-1/2">
          <div className="flex items-center gap-2">
            <EuroIcon />
            <p className="text-[19px] font-semibold text-[rgba(204,204,204,1)] md:text-2xl lg:text-[27px]">
              Save money and diagnose faults
            </p>
          </div>
          <p className="text-lg leading-7 font-normal text-[rgba(115,127,150,1)]">
            A car diagnostic scan from your local dealership could cost up to
            £100 + VAT. Why not buy a scanner and do it yourself? They are easy
            to use. The scanner will pay for itself. You can then present the
            findings to your local mechanic who won’t have to run a diagnostics
            scan, thus saving time and money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolsAndScanner;
