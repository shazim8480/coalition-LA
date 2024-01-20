import React from "react";

const Hero = () => {
  return (
    <section className="">
      <div className="">
        <div className="absolute z-10 uppercase font-bebas text-center tracking-wider top-[20%] md:top-[30%] lg:top-[35%] xl:top-[40%] left-[30%] md:left-[30%] lg:left-[22%] xl:left-[25%] text-[24px] lg:text-[100px] xl:text-[135px] leading-[22px] lg:leading-[80px] xl:leading-[105px] md:text-6xl">
          <h1 className="block text-secondary">LOSANGELES</h1>
          <span className="text-primary">MOUNTAINS</span>
        </div>
        <img
          className="relative object-contain w-full"
          src="/src/assets/hero-main.png"
          alt="hero-LA"
        />
      </div>
    </section>
  );
};

export default Hero;
