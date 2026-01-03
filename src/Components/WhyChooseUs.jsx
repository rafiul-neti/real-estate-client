import React from "react";
import { TbHomeDollar, TbHomeSearch, TbHomeStats } from "react-icons/tb";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-h2">
        Why <span className="text-primary">Choose Us</span>
      </h1>
      <p className="text-body text-sm!">
        Discover what sets us apart — from verified listings and transparent
        pricing to personalized support and modern design standards.
        <br />
        We connect you with trusted property owners and ensure a seamless
        experience, whether you’re buying your dream home or finding a perfect
        rental.
      </p>

      <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex gap-3 lg:gap-7 items-center">
          <div className="w-auto h-auto p-4 md:p-0 md:w-20 md:h-20 flex items-center justify-center bg-base-100 rounded-full">
            <TbHomeSearch className="text-secondary text-3xl md:text-5xl" />
          </div>
          <div className="">
            <h3 className="text-subtitle capitalize">Find your future home</h3>
            <p className="text-body text-sm!">
              We help you find a new home by offering a smart real estate.
            </p>
          </div>
        </div>

        <div className="flex gap-3 lg:gap-7 items-center">
          <div className="w-auto h-auto p-4 md:p-0 md:w-20 md:h-20 flex items-center justify-center bg-base-100 rounded-full">
            <TbHomeDollar className="text-secondary text-3xl md::text-5xl" />
          </div>
          <div className="">
            <h3 className="text-h3 capitalize text-subtitle">
              Buy or rent homes
            </h3>
            <p className="text-body text-sm!">
              Millions of houses and apartments in your favourite cities.
            </p>
          </div>
        </div>

        <div className="flex gap-3 lg:gap-7 items-center">
          <div className="w-auto h-auto p-4 md:p-0 md:w-20 md:h-20 flex items-center justify-center bg-base-100 rounded-full">
            <MdOutlineRealEstateAgent className="text-secondary text-3xl md:text-5xl" />
          </div>
          <div className="">
            <h3 className="text-h3 capitalize text-subtitle">
              Experienced agents
            </h3>
            <p className="text-body text-sm!">
              Find an agent who knows your market best
            </p>
          </div>
        </div>

        <div className="flex gap-3 lg:gap-7 items-center">
          <div className="w-auto h-auto p-4 md:p-0 md:w-20 md:h-20 flex items-center justify-center bg-base-100 rounded-full">
            <TbHomeStats className="text-secondary text-3xl md:text-5xl" />
          </div>
          <div className="">
            <h3 className="text-h3 capitalize text-subtitle">
              List your own property
            </h3>
            <p className="text-body text-sm!">
              Sign up now and sell or rent your own properties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
