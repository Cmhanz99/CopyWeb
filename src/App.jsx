import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import ServiceOffer from "./components/ServiceOffer";
import Projects from "./components/Projects";
import Members from "./components/Members";
import Workflow from "./components/Workflow";
import QandA from "./components/QandA";
import HeroPhases from "./components/HeroPhases";
import Whats from "./components/Whats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <Services />
      <ServiceOffer />
      <Projects />
      <Members />
      <Workflow />
      <QandA />
      <HeroPhases />
      <Whats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
