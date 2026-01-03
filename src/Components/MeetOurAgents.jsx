import React, { useEffect, useState } from "react";
import useAxios from "../CustomHooks/useAxios";
import AgentCard from "./AgentCard";

const MeetOurAgents = () => {
  const [agents, setAgents] = useState([]);
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance.get("/agents").then((data) => {
      setAgents(data.data);
    });
  }, [axiosInstance]);

  return (
    <div className="">
      <h1 className="text-center mt-5 text-h1">
        Meet <span className="text-primary">Our Agents</span>
      </h1>
      <p className="mb-5 text-body text-center text-gray-600">
        Connect with our experienced real estate professionals dedicated to
        finding your perfect property.
      </p>

      <div className="p-3 bg-neutral grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
        {agents.map((agent) => (
          <AgentCard key={agent._id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default MeetOurAgents;
