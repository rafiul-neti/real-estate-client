import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../CustomHooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const AgentDetails = () => {
  const { id } = useParams();

  const axiosInstance = useAxiosSecure();
  const { data: agentDetails = {}, isLoading } = useQuery({
    queryKey: ["agent-details", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/agent-details/${id}`);
      return res.data;
    },
  });

  return (
    <section className="min-h-screen w-11/12 mx-auto">Agent Details</section>
  );
};

export default AgentDetails;
