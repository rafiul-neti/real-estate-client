import React from "react";
import { FaBed, FaBath, FaSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import Button from "./AnimatedComponents/Button";

const LatestPropertyCard = ({ property }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 rounded overflow-hidden">
        <div className="flex-1">
          <img src={property.thumbnail} className="" alt="" />
        </div>

        <div className="flex-1 lg:flex-2 space-y-3">
          <h3 className="font-bold text-3xl">{property["property-name"]}</h3>
          <p className="flex items-center gap-2">
            <FaLocationDot className="text-gray-700" /> {property.location}
          </p>
          <p className="text-gray-700">{property["about-property"]}</p>
          <div className="flex items-center gap-8 border border-gray-300 p-2.5 rounded">
            <p className="flex items-center gap-2">
              <FaBed /> <span className="text-gray-700">3 Bedroom</span>
            </p>
            <p className="flex items-center gap-2">
              <FaBath /> <span className="text-gray-700">2 Bathroom</span>
            </p>
            <p className="flex items-center gap-2">
              <FaSquare /> <span className="text-gray-700">50 sqft</span>
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-2.5 text-left lg:text-center">
          <h3 className="text-2xl font-bold text-blue-600">{property.price}</h3>
          <small>(incl. VAT)</small>

          <div className="mt-2.5 space-x-1">
            <Button className={`bg-[#dedddb] text-primary border-0 outline-0`}>
              <IoCall /> Call
            </Button>
            <Button className={`bg-[#dedddb] text-primary border-0 outline-0`}>
              <IoMdMail /> Email
            </Button>
            <Button className={`bg-[#dedddb] text-primary border-0 outline-0`}>
              <IoCall /> WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestPropertyCard;
