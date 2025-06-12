import React from "react";

const Infinite = ({ proj1 }) => {
  return (
    <div
      className="mx-2 sm:mx-5 w-60 sm:w-80 h-50 bg-cover bg-center rounded-tr-[30px] border border-white"
      style={{ backgroundImage: `url(${proj1})` }}
    ></div>
  );
};

export default Infinite;
