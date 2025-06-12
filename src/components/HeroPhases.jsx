import React from "react";
import bgImage from "/src/assets/bg-5.jpg";

const HeroPhases = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        className="w-full h-[80%] bg-slate-500 bg-cover bg-center flex flex-col items-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2 className="text-4xl text-white text-center sm:text-4xl md:text-6xl font-semibold mt-20 md:mt-15 leading-snug px-4">
          Discover the Network and Be Part of the Community
        </h2>
        <h3 className="text-white text-xl sm:text-2xl font-semibold mt-3">I-Nexus Community</h3>
        <p className="text-slate-300 text-center mt-10">
          Why not create a community with others who share the same{" "}
          <span className="block">
            vision to expand new possibilities for freelancers?
          </span>
        </p>
      </div>
    </div>
  );
};

export default HeroPhases;
