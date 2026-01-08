import React from "react";
import AgentImage from "./Shared/AgentImage";
import { Link } from "react-router";

const AgentCard = ({ agent }) => {
  const {
    _id,
    agentProfile,
    propertiesRented,
    propertiesSold,
    agentName,
    designation,
  } = agent || {};
  return (
    <Link
      to={`/agent/${_id}`}
      className="space-y-8 text-center px-15 py-5 border-2 border-gray-200 shadow-md"
    >
      <div className="px-14">
        <AgentImage image={agentProfile} />
      </div>

      <div className="space-y-1.5">
        <h3 className="text-2xl font-bold text-gray-700">{agentName}</h3>
        <h5 className="font-extrabold text-lg text-blue-600">{designation}</h5>
      </div>

      <div className="px-6 py-2.5 border-2 border-gray-300 rounded-md flex items-center justify-between">
        <span>
          <h4 className="text-black font-bold text-xl">{propertiesRented}</h4>
          <p>For Rent</p>
        </span>

        <div className="h-12 w-0.5 bg-gray-400"></div>

        <span>
          <h4 className="text-black font-bold text-xl">{propertiesSold}</h4>
          <p>For Sale</p>
        </span>
      </div>

      <div className="space-x-3">
        <button className="btn btn-outline outline-gray-300 text-blue-500">
          Email
        </button>
        <button className="btn btn-outline outline-gray-300 text-blue-500">
          WhatsApp
        </button>
      </div>
    </Link>
  );
};

export default AgentCard;
