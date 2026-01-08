import React from "react";
import { FaMedal } from "react-icons/fa";

const AgentImage = ({ image }) => {
  return (
    <div className="relative">
      <span className="hidden lg:block absolute bg-blue-600 rounded-full p-1.5 top-1.5 right-3 z-10">
        <FaMedal className="text-lg text-white" />
      </span>
      <div className="w-full aspect-square overflow-hidden border-2 border-blue-500 p-1.5 rounded-full  transition-transform duration-500 hover:scale-110">
        <img
          src={image}
          className="w-full h-full rounded-full object-cover object-top"
          alt=""
        />
      </div>
    </div>
  );
};

export default AgentImage;
