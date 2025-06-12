import React from "react";
import { motion } from "framer-motion";
import { del } from "framer-motion/client";

const ServiceCard = ({title, description, delay, fa}) => {
  return (
    <motion.div
    initial={{opacity: 0, y: 30, filter: "blur(5px)"}}
    whileInView={{opacity: 1, y: 0, filter: "blur(0px)"}}
    transition={{duration: 1, delay: delay}}
    className="border border-slate-300 rounded p-5 flex flex-col items-center transition-all duration-300 my-services">
      <div className="bg-black w-20 h-20 rounded-[50%] flex items-center justify-center">
        <i class={`${fa} text-white text-2xl`}></i>
      </div>
      <h2 className="font-bold p-2">{title}</h2>
      <p className="text-gray-500">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
