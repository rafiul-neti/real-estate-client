import React from "react";
import AnimatedTitles from "../AnimatedComponents/AnimatedTitles";

const Heading = ({ children, underlined }) => {
  return (
    <AnimatedTitles>
      <h1 className="text-4xl font-bold text-center my-9">
        {children}{" "}
        <span className="titles-underline text-primary">{underlined}</span>
      </h1>
    </AnimatedTitles>
  );
};

export default Heading;
