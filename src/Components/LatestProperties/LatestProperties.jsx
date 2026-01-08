import React from "react";
import AboveHeading from "../Shared/AboveHeading";
import Heading from "../Shared/Heading";
import useAxiosSecure from "../../CustomHooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import LatestPropertyCard from "../LatestPropertyCard";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { LatestPropertyCardSkeleton, SectionSkeleton } from "../Shared";

const LatestProperties = () => {
  const axiosInstance = useAxiosSecure();
  const { data: featuredProperties = [], isLoading } = useQuery({
    queryKey: ["featured-properties"],
    queryFn: async () => {
      const res = await axiosInstance.get("/featured-properties");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <SectionSkeleton className="mt-24 w-11/12 mx-auto">
        <div className="grid grid-cols-1 gap-7">
          {Array.from({ length: 3 }, (_, index) => (
            <LatestPropertyCardSkeleton key={index} />
          ))}
        </div>
      </SectionSkeleton>
    );
  }
  return (
    <section className="mt-24 w-11/12 mx-auto">
      <AboveHeading>Latest Properties</AboveHeading>
      <Heading underlined={`Properties`}>Latest</Heading>

      <div className="grid grid-cols-1 gap-7">
        {featuredProperties.map((property) => (
          <LatestPropertyCard key={property._id} property={property} />
        ))}
      </div>

      <>
        <div className="mt-14 text-center">
          <Link to={`/all-properties`} className="btn btn-primary">
            Browse More Properties{" "}
            <div className="h-4 w-px bg-gray-300 m-0"></div> <FaArrowRight />
          </Link>
        </div>
      </>
    </section>
  );
};

export default LatestProperties;
