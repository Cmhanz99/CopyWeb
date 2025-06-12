import React from "react";
import { motion } from "framer-motion";
import Infinite from "./Infinite";
import bgImage from "/src/assets/bg-1.jpg";
import proj1 from "/src/assets/works-03.png";
import proj2 from "/src/assets/works-04.png";
import proj3 from "/src/assets/works-05.png";
import proj4 from "/src/assets/works-07.png";

const Projects = () => {
  return (
    <div
      className="w-full min-h-100 bg-cover bg-fixed backdrop-blur-sm relative"
      style={{ backgroundImage: `url(${bgImage})` }}
      id="projects"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>

      <div className="p-10 w-full flex items-center justify-center flex-col">
        <h2 className="text-white text-5xl z-1">Projects</h2>
        <p className="text-slate-300 mt-5">
          — Building and Design the future, connect today. —
        </p>
      </div>
      {/* Seamless Infinite Scroll */}
      <div className="overflow-hidden h-60 w-full flex items-center whitespace-nowrap">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <div className="flex">
            <Infinite proj1={proj1} />
            <Infinite proj1={proj2} />
            <Infinite proj1={proj3} />
            <Infinite proj1={proj4} />
          </div>
          <div className="flex">
            <Infinite proj1={proj1} />
            <Infinite proj1={proj2} />
            <Infinite proj1={proj3} />
            <Infinite proj1={proj4} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
