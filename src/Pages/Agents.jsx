import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../CustomHooks/useAxios";
import AgentCard from "../Components/AgentCard";
import { AgentCardSkeleton, GridSkeleton } from "../Components/Shared";

const Agents = () => {
  const axiosInstance = useAxiosSecure();
  const { data: allAgents = [], isLoading } = useQuery({
    queryKey: ["agents", "all-agents"],
    queryFn: async () => {
      const res = await axiosInstance.get("/new-agents");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <section className="w-11/12 mx-auto min-h-screen py-10">
        <h1 className="text-h1 text-center mb-8">
          Meet Our <span className="text-primary">Professional Agents</span>
        </h1>
        <GridSkeleton 
          count={6} 
          SkeletonComponent={AgentCardSkeleton}
          gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          gap="gap-7"
        />
      </section>
    );
  }

  return (
    <section className="w-11/12 mx-auto min-h-screen py-10">
      <h1 className="text-h1 text-center mb-8">
        Meet Our <span className="text-primary">Professional Agents</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {allAgents.map((agent) => (
          <AgentCard key={agent._id} agent={agent} />
        ))}
      </div>
    </section>
  );
};

export default Agents;
