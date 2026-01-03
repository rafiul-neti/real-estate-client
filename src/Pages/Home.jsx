import React, { useEffect, useState } from "react";
import useAxios from "../CustomHooks/useAxios";
import PropertyCard from "../Components/PropertyCard";
import WhyChooseUs from "../Components/WhyChooseUs";
import MeetOurAgents from "../Components/MeetOurAgents";
import CalculateCost from "../Components/CalculateCost";
import BuySellRent from "../Components/BuySellRent";
import BannerSlider from "../Components/BannerSlider";
import Stats from "../Components/Stats/Stats";
import Companies from "../Components/Companies/Companies";

const Home = () => {
  const axiosInstance = useAxios();
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axiosInstance.get("/latest-properties").then((data) => {
      setProperties(data.data);
    });
  }, [axiosInstance]);

  return (
    <>
      <section>
        <BannerSlider />
      </section>

      <section className="mb-24">
        <Stats />
      </section>

      <section className="mt-10 w-full p-3 lg:p-0 lg:w-10/12 lg:mx-auto flex justify-around">
        <Companies />
      </section>

      <section className="container mx-auto p-2 md:p-0">
        <BuySellRent />
      </section>

      <section className="mt-18 container mx-auto bg-neutral pt-7">
        <h1 className="mt-5 text-h1 text-center">
          Recently <span className="text-primary">Listed Properties</span>
        </h1>
        <p className="mt-2 mb-7 text-caption text-gray-600 text-center">
          Stay updated with the latest property listings — from modern
          apartments to commercial spaces, all freshly added and ready to
          explore.
        </p>
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      </section>

      <section className="my-18 p-3 lg:p-10 why-choose text-base-200">
        <WhyChooseUs />
      </section>

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
