import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import bgImage from "/src/assets/overlay2.png";

const ServiceOffer = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute -right-50 -bottom-50">
        <img src={bgImage} alt="" />
      </div>
      <div className="flex flex-col w-[95%] sm:w-[90%] md:w-[80%] min-h-screen">
        <div className="flex flex-col mt-16">
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl font-medium"
          >
            Services we offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            — Here to serve you better! —
          </motion.p>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-2 mt-16 gap-2">
          <ServiceCard
            title="HP production/editing"
            description="A completely original website production service that turns your ideas
            into reality."
            delay={0.2}
            fa="fa-solid fa-id-card"
          />
          <ServiceCard
            title="LP production"
            description="We will work together to achieve the results you expect by designing a story toward your goal."
            delay={0.3}
            fa="fa-solid fa-file-invoice"
          />
          <ServiceCard
            title="E-commerce website"
            description="We create easy-to-use e-commerce websites that are ideal for individual businesses."
            delay={0.4}
            fa="fa-solid fa-cart-shopping"
          />
          <ServiceCard
            title="System Development"
            description="If you are a company that wants to improve business efficiency related to a website, please contact us first."
            delay={0.5}
            fa="fa-solid fa-gear"
          />
          <ServiceCard
            title="Design/Coding"
            description="We also accept requests for design/coding alone."
            delay={0.6}
            fa="fa-solid fa-terminal"
          />
          <ServiceCard
            title="Responsive"
            description="We support a variety of devices, not just smartphones."
            delay={0.7}
            fa="fa-solid fa-mobile-screen-button"
          />
          <ServiceCard
            title="Converted to WordPress"
            description="We propose WordPress customization that can be easily managed and updated."
            delay={0.8}
            fa="fa-brands fa-wordpress"
          />
          <ServiceCard
            title="Free consultation"
            description="Please feel free to contact us with any concerns you may have."
            delay={0.9}
            fa="fa-solid fa-clipboard-list"
          />
          <div className="p-15"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOffer;
