import React from "react";

const HeroPhases = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        className="w-full h-[80%] bg-slate-500 bg-cover bg-center flex flex-col items-center bg-fixed"
        style={{ backgroundImage: "url('/src/assets/bg-5.jpg')" }}
      >
        <h2
          className="text-white text-center text-6xl font-semibold
        mt-15 leading-snug"
        >
          Discover the Network and Be Part of the Community
        </h2>
        <h3 className="text-white text-2xl font-semibold">I-Nexus Community</h3>
        <p className="text-slate-300 text-center mt-10">
          Why not create a community with others who share the same{" "}
          <span className="block mt-3">vision to expand new possibilities for freelancers?</span>
        </p>
      </div>
    </div>
  );
};

export default HeroPhases;
