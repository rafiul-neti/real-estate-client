import React from "react";
import { useQuery } from "@tanstack/react-query";
import AboveHeading from "./Shared/AboveHeading";
import Heading from "./Shared/Heading";
import AgentImage from "./Shared/AgentImage";
import useAxiosSecure from "../CustomHooks/useAxios";
import { Link } from "react-router";
import { AgentCardSkeleton, SectionSkeleton, GridSkeleton } from "./Shared";
import FadeInSection from "./AnimatedComponents/FadeInSection";
import StaggeredGrid from "./AnimatedComponents/StaggeredGrid";
import AnimatedCard from "./AnimatedComponents/AnimatedCard";
import { motion } from "motion/react";

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
    <FadeInSection className="mt-20">
      <div className="text-center mb-12">
        <AboveHeading>Agents</AboveHeading>
        <Heading underlined={`Agents`}>Meet Our</Heading>
      </div>

      <StaggeredGrid 
        className="lg:w-11/12 lg:mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-8"
        stagger={0.1}
        duration={0.6}
        distance={30}
      >
        {agents.map((agent) => (
          <AnimatedCard 
            key={agent._id} 
            className="space-y-4 p-2 bg-white rounded-lg"
            hoverScale={1.05}
            hoverY={-5}
            shadowIntensity="md"
          >
            <div className="relative">
              <AgentImage image={agent.agentProfile} />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 rounded-full"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <div className="space-y-2 text-center">
              <Link
                to={`/agent/${agent._id}`}
                className="block"
              >
                <motion.h3
                  className="font-bold text-lg hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {agent.agentName}
                </motion.h3>
              </Link>
              <motion.p 
                className="text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {agent.designation}
              </motion.p>
            </div>
          </AnimatedCard>
        ))}
      </StaggeredGrid>
    </FadeInSection>
  );
};

export default MeetOurAgents;
