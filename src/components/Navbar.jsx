import React, { useState } from "react";

const Navbar = () => {
  const [isShow, setShowNav] = useState(false);

  // Navigation items
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Members", href: "#members" },
    { name: "Workflow", href: "#workflow" },
    { name: "QandA", href: "#qanda" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <div className="w-full px-4 sm:px-6 md:px-10 flex justify-between items-center py-4 sm:py-5 fixed top-0 z-50 bg-black bg-opacity-90">
        {/* Logo - responsive text size */}
        <h2 className="text-white text-xl sm:text-2xl font-semibold">
          I-Nexus
        </h2>

        {/* Hamburger menu - responsive size */}
        <button
          onClick={() => setShowNav(!isShow)}
          className="w-6 sm:w-8 flex flex-col gap-1 z-50 relative"
        >
          <span
            className={`bg-white w-full h-0.5 sm:h-1 rounded transition-all duration-300 ${
              isShow ? "rotate-45 translate-y-1.5 sm:translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`bg-white w-full h-0.5 sm:h-1 rounded transition-all duration-300 ${
              isShow ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`bg-white w-full h-0.5 sm:h-1 rounded transition-all duration-300 ${
              isShow ? "-rotate-45 -translate-y-1.5 sm:-translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Overlay Background */}
      {isShow && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowNav(false)}
        ></div>
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 max-w-[85vw] 
          bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out
          ${isShow ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 mt-16">
          <h3 className="text-xl font-semibold text-slate-800">Menu</h3>
          <button
            onClick={() => setShowNav(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-6 space-y-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setShowNav(false)}
              className="text-slate-700 hover:text-blue-600 font-medium py-1 px-4 rounded-lg 
                       hover:bg-blue-50 transition-all duration-200 border-l-4 border-transparent 
                       hover:border-blue-600"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
