import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="px-4 py-6 mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
        <div className="space-y-4 text-center md:space-y-0 lg:space-y-0 xl:space-y-0 md:flex lg:flex xl:flex md:items-center lg:items-center xl:items-center md:justify-between lg:justify-between xl:justify-between">
          {/* logo */}
          <div className="flex items-center justify-start">
            <img className="object-contain" src="/src/assets/footer-logo.png" />
            <div className="uppercase leading-5 font-bebas tracking-wider text-[20px] ml-2">
              <h3 className="block text-grayBlue">LOSANGELES</h3>
              <span className="text-grayBlue">MOUNTAINS</span>
            </div>
          </div>
          {/* copyright text */}
          <p className="font-lato italic text-[12px] tracking-widest text-grayBlue uppercase font-bold">
            Copyright 2016. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
