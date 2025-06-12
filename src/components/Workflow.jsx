import React from "react";
import { motion } from "framer-motion";

const Workflow = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description:
        "We start by understanding your vision, goals, and project requirements",
      side: "left",
    },
    {
      number: "02",
      title: "Strategy Planning",
      description:
        "Create a comprehensive roadmap and timeline for your project",
      side: "right",
    },
    {
      number: "03",
      title: "Design Phase",
      description:
        "Craft beautiful, user-friendly designs that represent your brand",
      side: "left",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Build your project with clean, efficient, and scalable code",
      side: "right",
    },
    {
      number: "05",
      title: "Testing & Review",
      description:
        "Thorough testing and client review to ensure everything is perfect",
      side: "left",
    },
    {
      number: "06",
      title: "Launch & Support",
      description: "Go live with your project and receive ongoing support",
      side: "right",
    },
  ];

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed py-16 px-4"
      style={{ backgroundImage: "url('/src/assets/bg-1.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-200 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-slate-300">
            Follow our proven workflow to bring your project to life
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-500"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex items-center mb-16 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-500 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Step Card - Left Side */}
              {step.side === "left" && (
                <>
                  <div className="w-1/2 pr-8">
                    <motion.div
                      initial={{ x: -100, opacity: 0, filter: "blur(8px)" }}
                      whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                      transition={{ duration: 1 }}
                      className=" bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 border-l-4 border-slate-400 hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-slate-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm mr-4">
                          {step.number}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-100">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                  <div className="w-1/2"></div>

                  {/* Horizontal Line to Timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className="w-8 h-0.5 bg-blue-500 -ml-8"></div>
                  </div>
                </>
              )}

              {/* Step Card - Right Side */}
              {step.side === "right" && (
                <>
                  <div className="w-1/2"></div>
                  <div className="w-1/2 pl-8">
                    <motion.div
                      initial={{ x: 100, opacity: 0, filter: "blur(8px)" }}
                      whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                      transition={{ duration: 1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 border-r-4 border-slate-400 hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-slate-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm mr-4">
                          {step.number}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-100">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Horizontal Line to Timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className="w-8 h-0.5 bg-blue-500 ml-0"></div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
