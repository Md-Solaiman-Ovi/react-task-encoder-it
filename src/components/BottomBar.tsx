import React from "react";
import DropDownItem from "./DropDownItem";
import BottomArrowIcon from "../icons/BottomArrowIcon";

const BottomBar: React.FC = () => {
  return (
    <div className="relative container mx-auto flex justify-around px-40 text-sm font-semibold md:px-8 md:text-[17px] lg:px-16 xl:px-32">
      {/* OBDeleven */}
      <div className="group py-2">
        <a
          href="#"
          className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
        >
          OBDeleven
        </a>
      </div>

      {/* Scanner Types */}
      <div className="group py-2">
        <a
          href="#"
          className="flex items-center gap-2 text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
        >
          <p>Scanner Types</p> <BottomArrowIcon />
        </a>
        {/* Dropdown Content */}
        <div className="absolute top-10 left-0 z-10 hidden w-full max-w-sm translate-x-82 rounded-b-sm bg-[rgba(31,38,50,1)] px-4 py-7 text-sm shadow-lg transition-all duration-300 ease-in-out group-hover:block">
          <ul className="space-y-2 text-base leading-7 font-normal">
            <DropDownItem itemName="Car Diagnostic Tools for Smart Phones" />
            <DropDownItem itemName="Hand-held Scanners (Built-in LCD Screens)" />
          </ul>
        </div>
      </div>

      {/* Car Makes */}
      <div className="group py-2">
        <a
          href="#"
          className="flex items-center gap-2 text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
        >
          <p>Car Makes</p> <BottomArrowIcon />
        </a>

        <div className="absolute top-10 left-0 z-10 hidden w-full max-w-screen-lg translate-x-64 rounded-b-sm bg-[rgba(31,38,50,1)] px-32 py-7 text-sm shadow-lg transition-all duration-300 ease-in-out group-hover:block">
          <div className="grid grid-cols-3 gap-4 text-base leading-7 font-normal">
            <div>
              <DropDownItem itemName="Universal Car Diagnostic Tools" />
              <DropDownItem itemName="Audi Diagnostic Tools" />
              <DropDownItem itemName="BMW/MINI Diagnostic Tools" />
              <DropDownItem itemName="Volkswagen Diagnostic Tools" />
            </div>
            <div>
              <DropDownItem itemName="Citroen Diagnostic Tools" />
              <DropDownItem itemName="Ford Diagnostic Tools" />
              <DropDownItem itemName="Land Rover Diagnostic Tools" />
            </div>
            <div>
              <DropDownItem itemName="Renault Diagnostic Tools" />
              <DropDownItem itemName="Saab Diagnostic Tools" />
              <DropDownItem itemName="Skoda Diagnostic Tools" />
            </div>
          </div>
        </div>
      </div>

      {/* Service Reset Tools */}
      <div className="group py-2">
        <a
          href="#"
          className="flex items-center gap-2 text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
        >
          <p>Service Reset Tools</p> <BottomArrowIcon />
        </a>

        <div className="absolute top-10 left-0 z-10 hidden w-full max-w-screen-xl translate-x-96 rounded-b-sm bg-[rgba(31,38,50,1)] px-20 py-12 text-sm shadow-lg transition-all duration-300 ease-in-out group-hover:block">
          <div className="grid grid-cols-3 gap-10 text-base leading-7 font-normal">
            <div className="flex flex-col space-y-10">
              <ul>
                <DropDownItem itemName="ABS Brake Bleeding Scan Tools" />
                <DropDownItem itemName="Adaptive Front Lighting System (AFS) Tools" />
                <DropDownItem itemName="Fuel Adjustment Tools" />
                <DropDownItem itemName="Air Suspension Diagnostic Tools" />
                <DropDownItem itemName="Airbag Reset Tools" />
              </ul>
              <ul>
                <DropDownItem itemName="Automatic Transmission (AT) Adaption Diagnostic Tools" />
                <DropDownItem itemName="Car Battery Registration Tools" />
                <DropDownItem itemName="Car Language Change Tools" />
                <DropDownItem itemName="Change Tyre Size Diagnostic Tools" />
                <DropDownItem itemName="Clutch Adaption Tools" />
                <DropDownItem itemName="ABS Brake Bleeding Scan Tools" />
                <DropDownItem itemName="Adaptive Front Lighting System (AFS) Tools" />
                <DropDownItem itemName="Fuel Adjustment Tools" />
              </ul>
            </div>
            <div className="flex flex-col space-y-10">
              <ul>
                <DropDownItem itemName="Diesel Particulate Filter (DPF) Reset Tools" />
                <DropDownItem itemName="EGR Reset" />
                <DropDownItem itemName="Electronic Parking Brake Reset (EPB) Tools" />
                <DropDownItem itemName="EVAP Test and Scan Tools" />
              </ul>
              <ul>
                <DropDownItem itemName="Immobilizer Reset Tools" />
                <DropDownItem itemName="Headlights Testers" />
                <DropDownItem itemName="Injector Coding Tools and Scanners" />
                <DropDownItem itemName="Odometer Diagnostic Tools" />
                <DropDownItem itemName="Oil Service Reset Tools" />
              </ul>
            </div>
            <div className="flex flex-col space-y-10">
              <ul>
                <DropDownItem itemName="Prime Fuel Pump Diagnostic Tools" />
                <DropDownItem itemName="Seat Match Diagnostic Tools" />
                <DropDownItem itemName="Steering Angle Sensor Reset Tools" />
                <DropDownItem itemName="Sun Roof Diagnostic Tools" />
                <DropDownItem itemName="TCM Oil Reset Tools" />
              </ul>
              <ul>
                <DropDownItem itemName="Throttle Position Sensor Adjustment Tools" />
                <DropDownItem itemName="Tooth/Gear Learning Diagnostic Tools" />
                <DropDownItem itemName="Car Turbo Diagnostic Tools" />
                <DropDownItem itemName="Tyre Pressure Sensor Tools" />
                <DropDownItem itemName="Car Window / Door Diagnostic Tools" />
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Other Tools */}
      <div className="group relative py-2">
        <a
          href="#"
          className="flex items-center gap-2 text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
        >
          <p>Other Tools & Accessories</p> <BottomArrowIcon />
        </a>

        <div className="text-smshadow-lg absolute top-10 left-0 z-10 hidden w-full max-w-screen-md rounded-b-sm bg-[rgba(31,38,50,1)] p-4 transition-all duration-300 ease-in-out group-hover:block">
          <ul className="space-y-2 text-base leading-6 font-normal">
            <DropDownItem itemName="Fuel Leak Detectors" />
            <DropDownItem itemName="Car Battery Testers" />
            <DropDownItem itemName="Car Battery Chargers" />
            <DropDownItem itemName="Phone Holders" />
            <DropDownItem itemName="Tyre Pressure Sensors" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
