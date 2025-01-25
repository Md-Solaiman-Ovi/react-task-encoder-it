import React, { useState } from "react";
import FbIcon from "../icons/FbIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstaIcon from "../icons/InstaIcon";
import YouTubeIcon from "../icons/YouTubeIcon";
import EmailIcon from "../icons/EmailIcon";
import LogoIcon from "../icons/LogoIcon";
import SearchIcon from "../icons/SearchIcon";
import PhoneIcon from "../icons/PhoneIcon";
import HeartIcon from "../icons/HeartIcon";
import CartIcon from "../icons/CartIcon";
import LoginIcon from "../icons/LoginIcon";
import MobileMenuIcon from "../icons/MobileMenuIcon";
import BottomBar from "./BottomBar";

const Navbar: React.FC = () => {
  // State for Mobile Menu Toggle
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="text-[rgba(204,204,204,1)]">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[rgba(37,49,70,1)] bg-[rgba(26,31,40,1)] px-4 py-[10px] text-sm md:px-8 lg:px-16 xl:px-32">
        {/* Left: Navigation Links */}
        <div className="hidden gap-[10px] text-sm md:flex">
          <a
            href="#"
            className="font-semibold text-[rgba(234,76,73,1)] hover:text-[rgba(234,76,73,1)]"
          >
            Home
          </a>
          {"|"}
          <a
            href="#"
            className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
          >
            About
          </a>
          {"|"}
          <a
            href="#"
            className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
          >
            Blog
          </a>
          {"|"}
          <a
            href="#"
            className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
          >
            Contact
          </a>
        </div>

        {/* Right: Contact Email & Social Media */}
        <div className="flex w-full items-center justify-between gap-4 text-[rgba(115,127,150,1)] md:w-auto">
          <a
            href="mailto:contact@abc.com"
            className="flex items-center gap-2 hover:underline"
          >
            <EmailIcon />
            <div className="text-[rgba(204,204,204,1)]">contact@abc.com</div>
          </a>
          {"|"}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-[rgba(115,127,150,1)] hover:text-[rgba(234,76,73,1)]"
            >
              <FbIcon />
            </a>
            <a
              href="#"
              className="text-[rgba(115,127,150,1)] hover:text-[rgba(234,76,73,1)]"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              className="text-[rgba(115,127,150,1)] hover:text-[rgba(234,76,73,1)]"
            >
              <InstaIcon />
            </a>
            <a
              href="#"
              className="text-[rgba(115,127,150,1)] hover:text-[rgba(234,76,73,1)]"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="flex items-center justify-between bg-[rgba(26,31,40,1)] px-4 py-3 md:px-8 md:py-4 lg:px-16 xl:px-32">
        <div className="flex w-3/4 items-center justify-between md:gap-x-4 xl:gap-x-12">
          <div className="flex items-center gap-5 md:gap-0">
            {/* Mobile Menu Toggle */}
            <div className="flex cursor-pointer md:hidden">
              <button
                className="cursor-pointer"
                onClick={() => setMobileMenuOpen(true)}
              >
                <MobileMenuIcon />
              </button>
            </div>
            {/* Logo */}
            <LogoIcon />
          </div>

          {/* Search Bar */}
          <div className="group relative mx-4 hidden w-full items-center rounded-[10px] border-[1px] border-[rgba(37,49,70,1)] focus-within:border-[rgba(234,76,73,1)] md:flex">
            <input
              type="text"
              placeholder="Search Here..."
              className="w-full rounded-[10px] px-4 py-3 text-sm font-normal text-[rgba(115,127,150,1)] focus:outline-none"
            />
            <button className="absolute right-2 cursor-pointer">
              <SearchIcon />
            </button>
          </div>

          <div className="hidden items-center space-x-2 lg:flex">
            <PhoneIcon />
            <div className="flex flex-col text-sm text-nowrap">
              <p className="text-sm text-[rgba(115,127,150,1)]">Call us free</p>
              <p className="text-lg text-[rgba(204,204,204,1)]">+1 86.36.166</p>
            </div>
          </div>
        </div>

        {/* Contact Info and Icons */}
        <div className="flex w-1/4 items-center justify-end space-x-5 lg:space-x-7">
          <a
            href="#"
            className="flex items-center gap-2 text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
          >
            <LoginIcon /> <div className="hidden md:flex">Account</div>
          </a>
          <a
            href="#"
            className="hidden text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)] md:block"
          >
            <HeartIcon />
          </a>
          <a
            href="#"
            className="flex text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)] md:hidden"
          >
            <button className="">
              <SearchIcon />
            </button>
          </a>
          <a
            href="#"
            className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
          >
            <CartIcon />
          </a>
        </div>
      </div>

      {/* Bottom Bar  */}
      <div className="hidden bg-[rgba(31,36,45,1)] px-4 md:px-8 lg:block lg:px-16 xl:px-32">
        {/* Bottom Menu with Dropdowns */}
        <BottomBar />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-2/3 max-w-xs transform bg-[rgba(26,31,40,1)] p-6 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 cursor-pointer text-white"
          onClick={() => setMobileMenuOpen(false)}
        >
          ✖
        </button>
        <div className="flex flex-col space-y-4 text-white">
          <a
            href="#"
            className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
          >
            About
          </a>
          <a
            href="#"
            className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`bg-opacity-50 fixed inset-0 z-40 cursor-pointer bg-black/50 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
    </nav>
  );
};

export default Navbar;
