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
import { LoadingSpinner } from "../Components/Shared";
import PageTransition from "../Components/PageTransition";
import FadeInSection from "../Components/AnimatedComponents/FadeInSection";

const Home = () => {
  const axiosInstance = useAxios();

  const { data: properties = [], isLoading } = useQuery({
    queryKey: ["latest-properties"],
    queryFn: async () => {
      const res = await axiosInstance.get("/latest-properties");
      return res.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner fullScreen message="Loading HomeNest..." />;
  }

  return (
    <PageTransition>
      <section>
        <BannerSlider />
      </section>

      <FadeInSection className="mb-24">
        <Stats />
      </FadeInSection>

      <FadeInSection className="mt-7 lg:mt-10 w-full p-3 lg:p-0 lg:w-10/12 lg:mx-auto flex justify-around">
        <Companies />
      </FadeInSection>

      <FeaturedProperties properties={properties} isLoading={isLoading} />

      <FadeInSection>
        <WhyUs />
      </FadeInSection>

      <LatestProperties />

      <FadeInSection className="w-11/12 lg:w-[96%] mx-auto">
        <MeetOurAgents />
      </FadeInSection>

      <FadeInSection className="my-18 container mx-auto p-2 md:p-0">
        <CalculateCost />
      </FadeInSection>
    </PageTransition>
  );
};

export default Home;
