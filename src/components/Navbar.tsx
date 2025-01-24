import React from "react";
import FbIcon from "../icons/FbIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstaIcon from "../icons/InstaIcon";
import YouTubeIcon from "../icons/YouTubeIcon";
import EmailIcon from "../icons/EmailIcon";

const Navbar: React.FC = () => {
  return (
    <nav className="text-[rgba(204,204,204,1)]">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-gray-700 bg-[rgba(37,49,70,1)] px-4 py-[10px] text-sm md:px-8 lg:px-16 xl:px-32">
        {/* Left: Navigation Links */}
        <div className="hidden space-x-4 md:flex">
          <a href="#" className="hover:text-red-500">
            Home
          </a>
          <a href="#" className="hover:text-red-500">
            About
          </a>
          <a href="#" className="hover:text-red-500">
            Blog
          </a>
          <a href="#" className="hover:text-red-500">
            Contact
          </a>
        </div>

        {/* Right: Contact Email & Social Media */}
        <div className="flex w-full items-center justify-between space-x-6 md:w-auto">
          <a
            href="mailto:contact@abc.com"
            className="flex items-center gap-2 hover:underline"
          >
            <EmailIcon />
            <div>contact@abc.com</div>
          </a>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-red-500">
              <FbIcon />
            </a>
            <a href="#" className="hover:text-red-500">
              <TwitterIcon />
            </a>
            <a href="#" className="hover:text-red-500">
              <InstaIcon />
            </a>
            <a href="#" className="hover:text-red-500">
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="flex flex-wrap items-center justify-between bg-[rgba(26,31,40,1)] px-4 py-4 md:px-8 lg:px-16 xl:px-32">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-gray-400">Your</span>
          <span className="text-white">Logo</span>
        </div>

        {/* Search Bar */}
        <div className="mx-4 hidden w-full max-w-lg items-center md:flex">
          <input
            type="text"
            placeholder="Search Here..."
            className="w-full rounded-l-lg bg-gray-800 px-4 py-2 text-sm focus:outline-none"
          />
          <button className="rounded-r-lg bg-red-500 px-4 py-2 hover:bg-red-600">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Contact Info and Icons */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone-alt text-red-500"></i>
            <span className="text-sm">+1 86.36.166</span>
          </div>
          <a href="#" className="hover:text-red-500">
            Account
          </a>
          <a href="#" className="hover:text-red-500">
            <i className="fas fa-heart"></i>
          </a>
          <a href="#" className="hover:text-red-500">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="bg-[rgba(31,36,45,1)] px-4 py-2 md:px-8 lg:px-16 xl:px-32">
        <div className="flex justify-around text-sm">
          <a href="#" className="hover:text-red-500">
            OBDeleven
          </a>
          <a href="#" className="hover:text-red-500">
            Scanner Types
          </a>
          <a href="#" className="hover:text-red-500">
            Car Makes
          </a>
          <a href="#" className="hover:text-red-500">
            Service Reset Tools
          </a>
          <a href="#" className="hover:text-red-500">
            Other Tools & Accessories
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
