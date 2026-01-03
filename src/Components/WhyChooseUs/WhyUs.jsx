import React from "react";
import AboveHeading from "../Shared/AboveHeading";
import Heading from "../Shared/Heading";
import whyUsImg from "../../assets/whyChoose.jpg";
import data from "../../Utils/utils";

const WhyUs = () => {
  return (
    <section className="w-11/12 mx-auto">
      <AboveHeading>Why Choose Us</AboveHeading>
      <Heading underlined={`Choose Us`}>Why</Heading>

      <div className="flex flex-col gap-7 lg:gap-0 lg:flex-row items-center justify-between">
        <div className="flex-1">
          <div className="w-80 lg:w-120 h-100 lg:h-135 overflow-hidden rounded-t-[15rem]">
            <img src={whyUsImg} alt="" />
          </div>
        </div>

        <div className="flex-1 space-y-6">
          {data.map((datum, i) => (
            <div key={i} className="flex gap-3 lg:gap-7">
              <div className="">
                <datum.icon className="text-4xl text-primary" />
              </div>

              <div className="">
                <h4 className="text-2xl font-semibold text-sky-600">{datum.heading}</h4>
                <p>{datum.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
