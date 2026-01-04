import React from "react";
import useAxios from "../CustomHooks/useAxios";
import PropertyCard from "../Components/PropertyCard";
import WhyChooseUs from "../Components/WhyChooseUs";
import MeetOurAgents from "../Components/MeetOurAgents";
import CalculateCost from "../Components/CalculateCost";
import BuySellRent from "../Components/BuySellRent";
import BannerSlider from "../Components/BannerSlider";
import Stats from "../Components/Stats/Stats";
import Companies from "../Components/Companies/Companies";
import FeaturedProperties from "../Components/FeaturedProperties/FeaturedProperties";
import { useQuery } from "@tanstack/react-query";
import WhyUs from "../Components/WhyChooseUs/WhyUs";
import LatestProperties from "../Components/LatestProperties/LatestProperties";

const Home = () => {
  const axiosInstance = useAxios();

  const { data: properties = [] } = useQuery({
    queryKey: ["latest-properties"],
    queryFn: async () => {
      const res = await axiosInstance.get("/latest-properties");
      return res.data;
    },
  });

  return (
    <>
      <section>
        <BannerSlider />
      </section>

      <section className="mb-24">
        <Stats />
      </section>

      <section className="mt-7 lg:mt-10 w-full p-3 lg:p-0 lg:w-10/12 lg:mx-auto flex justify-around">
        <Companies />
      </section>

      <FeaturedProperties properties={properties} />

      <WhyUs />

      <LatestProperties />

     

     
      {/* <section className="my-18 p-3 lg:p-10 why-choose text-base-200">
        <WhyChooseUs />
      </section> */}

      <section className="w-11/12 lg:w-[96%] mx-auto">
        <MeetOurAgents />
      </section>

      <section className="my-18 container mx-auto p-2 md:p-0">
        <CalculateCost />
      </section>
    </>
  );
};

export default Home;
