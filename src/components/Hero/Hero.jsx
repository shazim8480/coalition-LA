import React from "react";

const Hero = () => {
  return (
    <section className="h-screen">
      {/* image div */}
      <div className="">
        <h1 className="font-lato">MOUNTAINS OF LA</h1>
        <img
          className="object-fill"
          src="/src/assets/hero-main.png"
          alt="hero-LA"
        />
      </div>
    </section>
  );
};

export default Hero;
