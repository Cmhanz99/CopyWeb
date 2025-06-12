import React from "react";

const HeroSection = () => {
  return (
    <div
      className="w-full h-screen bg-slate-900 bg-cover bg-fixed flex items-center justify-center"
      style={{ backgroundImage: "url('/src/assets/bg-1.jpg')" }}
    >
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
      <div className="w-[90%] h-[90%] flex items-center justify-center flex-col z-1">
        <h2 className="text-6xl text-white font-bold">
          Designing || Building{" "}
        </h2>
        <p className="mt-6 text-slate-400 ">
          — Building and Design the future, connect today. —
        </p>
        <p className="text-white mt-6 animate-bounce text-2xl">V</p>
      </div>
    </div>
  );
};

export default HeroSection;
