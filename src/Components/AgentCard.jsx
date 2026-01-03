import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";












const AgentCard = ({ agent }) => {
  return (
    <div className="bg-white p-2 shadow-lg rounded">
      <div className="grid grid-cols-12">
        <div className="col-span-10">
          <img src={agent.image} className="rounded" alt="" />
        </div>

        <div className="col-span-2 flex flex-col items-center justify-around text-gray-600">
          <p className="">
            <BsTwitterX className="ag-icons" />
          </p>
          <p>
            <ImFacebook className="ag-icons" />
          </p>
          <p>
            <FaLinkedinIn className="ag-icons" />
          </p>
          <p>
            <FaInstagram className="ag-icons" />
          </p>
          <p>
            <FaYoutube className="ag-icons" />
          </p>
        </div>
      </div>
      <h3 className="text-subtitle my-2 text-center font-extrabold! text-gray-700">{agent.name}</h3>
      <p className="text-center text-sm! text-gray-500">{agent.designation}</p>
    </div>
  );
};

export default AgentCard;
