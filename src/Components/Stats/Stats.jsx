import React from "react";

const Stats = () => {
  return (
    <div className="relative grid grid-cols-2 gap-7 lg:grid-cols-1 lg:w-8/12 lg:-mt-20 bg-primary px-2 lg:px-8 text-white lg:flex lg:items-center lg:justify-end lg:gap-12 py-12 rounded-sm z-40">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">5000+</h1>
        <p>Properties Listed</p>
      </div>

      <div className="text-center">
        <h1 className="text-5xl font-extrabold">1400+</h1>
        <p>Satiesfied Clients</p>
      </div>

      <div className="text-center">
        <h1 className="text-5xl font-extrabold">258+</h1>
        <p>Total Agents</p>
      </div>

      <div className="text-center">
        <h1 className="text-5xl font-extrabold">$10B+</h1>
        <p>Total sales since 2022</p>
      </div>
    </div>
  );
};

export default Stats;
