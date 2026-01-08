import React from "react";
import { useQuery } from "@tanstack/react-query";
import AboveHeading from "./Shared/AboveHeading";
import Heading from "./Shared/Heading";
import AgentImage from "./Shared/AgentImage";
import useAxiosSecure from "../CustomHooks/useAxios";
import { Link } from "react-router";
import { AgentCardSkeleton, SectionSkeleton, GridSkeleton } from "./Shared";

const MeetOurAgents = () => {
  const axiosInstance = useAxiosSecure();

  const { data: agents = [], isLoading } = useQuery({
    queryKey: ["agents", "new-agents", "limit"],
    queryFn: async () => {
      const res = await axiosInstance.get("/new-agents?limit=6");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <SectionSkeleton className="mt-20">
        <GridSkeleton 
          count={6} 
          SkeletonComponent={AgentCardSkeleton}
          gridCols="grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          gap="gap-5 lg:gap-8"
        />
      </SectionSkeleton>
    );
  }

  return (
    <section className="mt-20">
      <AboveHeading>Agents</AboveHeading>
      <Heading underlined={`Agents`}>Meet Our</Heading>

      <div className="lg:w-11/12 lg:mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-8">
        {agents.map((agent) => (
          <div key={agent._id} className="space-y-5 p-0.5">
            <AgentImage image={agent.agentProfile} />
            <div className="space-y-2.5 text-center">
              <Link
                to={`/agent/${agent._id}`}
                className="font-bold text-lg hover:text-blue-600"
              >
                {agent.agentName}
              </Link>
              <p>{agent.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurAgents;
