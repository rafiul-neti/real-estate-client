import React from "react";
import Button from "./AnimatedComponents/Button";
import { MdKeyboardArrowRight } from "react-icons/md";

const BannerSlider = () => {
  return (
    <div>
      <div className="w-full h-[85vh]">
        <div className="sliders hero-bg-1">
          <div className="overlay"></div>
          <div className="text-base-100 z-20 text-center space-y-10 lg:p-1.5">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold w-full text-left lg:w-7/12 lg:mx-auto p-5 lg:p-0">
              Find your dream home in the best{" "}
              <span className="svg-underline">location</span>
            </h1>
            <div className="lg:w-7/12 lg:mx-auto flex flex-col lg:flex-row items-center gap-3">
              <select
                defaultValue={" "}
                className="bg-white text-black select lg:flex-1"
              >
                <option value={" "} disabled>
                  Location
                </option>
                <option value="">San Diego</option>
                <option value="">New York</option>
                <option value="">California</option>
              </select>

              <select
                defaultValue={" "}
                className="bg-white text-black select lg:flex-1"
              >
                <option value=" " disabled>
                  Property
                </option>
                <option value="">Offices</option>
                <option value="">Apartment</option>
                <option value="">Houses</option>
              </select>

              <select
                defaultValue={" "}
                className="bg-white text-black select lg:flex-1"
              >
                <option value=" ">Rent</option>
                <option value="">Sell</option>
              </select>

              <label className="input text-black">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  className="grow"
                  placeholder="Search for properties"
                />

                <button className="btn btn-primary">
                  <MdKeyboardArrowRight></MdKeyboardArrowRight>
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
