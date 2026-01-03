import React from "react";
import { FaCalculator } from "react-icons/fa";
import { Link } from "react-router";

const CalculateCost = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full lg:w-[40%]">
        <img
          src="https://finder.madrasthemes.com/real-estate/wp-content/uploads/sites/2//2021/11/calculator.svg"
          alt=""
        />
      </div>

      <div className="w-full lg:w-[60%] space-y-6 text-center lg:text-left">
        <h2 className="text-h2">Сalculate the cost of your property</h2>
        <p className="text-body text-gray-600">
          Real estate appraisal is a procedure that allows you to determine the
          average market value of real estate (apartment, house, land, etc.).
          Сalculate the cost of your property with our new Calculation Service.
        </p>
        <Link
          to={`/`}
          className="btn btn-wide btn-primary text-base-100 text-lg rounded-md!"
        >
          <FaCalculator />
          Calculate
        </Link>
      </div>
    </div>
  );
};

export default CalculateCost;
