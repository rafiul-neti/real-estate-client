import React from "react";
import useAxios from "../CustomHooks/useAxios";
import AgentCard from "./AgentCard";
import { useQuery } from "@tanstack/react-query";
import AboveHeading from "./Shared/AboveHeading";
import Heading from "./Shared/Heading";

const MeetOurAgents = () => {
  const axiosInstance = useAxios();

  const { data: agents = [] } = useQuery({
    queryKey: ["agents"],
    queryFn: async () => {
      const res = await axiosInstance.get("/agents");
      return res.data;
    },
  });

  return (
    <section className="mt-20">
      <AboveHeading>Agents</AboveHeading>
      <Heading underlined={`Agents`}>Meet Our</Heading>

      <div className=""></div>
    </section>
  );
};

export default MeetOurAgents;
