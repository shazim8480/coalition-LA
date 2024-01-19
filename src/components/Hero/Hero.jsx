import React from "react";

const Hero = () => {
  return (
    <section className="h-screen">
      {/* image div */}
      <div className="">
        <div className="absolute z-10 uppercase font-bebas text-center tracking-wider top-[7%] md:top-[16%] lg:top-[19%] xl:top-[26%] left-[30%] md:left-[30%] lg:left-[22%] xl:left-[25%] text-[24px] lg:text-[100px] xl:text-[135px] leading-[22px] lg:leading-[85px] xl:leading-[115px] md:text-6xl">
          <h1 className="block text-secondary">LOSANGELES</h1>
          <span className="text-primary">MOUNTAINS</span>
        </div>
        {/* <div className="w-screen"> */}
        <img
          className="relative object-cover w-full"
          src="/src/assets/hero-main.png"
          alt="hero-LA"
        />
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;
