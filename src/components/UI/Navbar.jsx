import React from "react";
import Logo from "/src/assets/Logo.svg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-30 bg-white border-b border-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-30 ">
      <div className="max-w-5xl px-4 py-2 mx-auto">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <div className="flex items-center justify-start">
            <img
              src="/src/assets/Logo.png"
              className="object-contain"
              alt="hero-LA"
            />
            <div className="uppercase leading-5 font-bebas tracking-wider text-[20px] ml-2">
              <h1 className="block text-secondary">LOSANGELES</h1>
              <span className="text-primary">MOUNTAINS</span>
            </div>
          </div>
          {/* nav refs */}
          <div className="flex space-x-4 italic font-semibold underline text-secondary font-lato">
            <a className="hover:text-white" href="#">
              01. History
            </a>
            <a className="hover:text-white" href="#">
              02. Team
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
