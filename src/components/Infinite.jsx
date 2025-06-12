import React from "react";

const Infinite = ({ proj1 }) => {
  return (
    <div
      className="mx-5 w-100 h-50 bg-cover bg-center rounded-tr-[30px] border border-white"
      style={{ backgroundImage: `url(${proj1})` }}
    ></div>
  );
};

export default Infinite;
