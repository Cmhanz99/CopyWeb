import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black flex flex-col items-center justify-center">
      <div className="w-[70%] grid grid-cols-2 py-10">
        <div className="flex flex-col items-start ml-5">
          <h2 className="text-5xl text-white">I-Nexus</h2>
          <div className="flex items-center mt-5 w-[70%] justify-between">
            <i className="fa-brands fa-facebook text-blue-500 text-5xl cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-white text-5xl cursor-pointer"></i>
            <i className="fa-brands fa-line text-green-500 text-5xl cursor-pointer"></i>
            <i className="fa-brands fa-x-twitter text-white text-5xl cursor-pointer"></i>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col p-4 gap-1">
            <a href="#" className="text-white font-medium">Home</a>
            <a href="#" className="text-white font-medium">Service</a>
            <a href="#" className="text-white font-medium">Achievements</a>
            <a href="#" className="text-white font-medium">Member</a>
            <a href="#" className="text-white font-medium">Production</a>
            <a href="#" className="text-white font-medium">Process</a>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <a href="#" className="text-white font-medium">Frequently Asked Questions</a>
            <a href="#" className="text-white font-medium">Community</a>
            <a href="#" className="text-white font-medium">About Us</a>
          </div>
        </div>
      </div>
      <div className="w-full py-4 border-t border-gray-700 flex items-center justify-center">
        <p className="text-gray-400 text-sm">© 2025 This website is a clone of I-Nexus for practice only.</p>
      </div>
    </div>
  );
};

export default Footer;
