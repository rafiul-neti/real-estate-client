import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";

const PropertyCard = ({ property }) => {

  // console.log(property)
  
  return (
    <div className="bg-base-100 shadow-lg rounded-md">
      <div className="">
        <img
          src={property.thumbnail}
          className="object-contain overflow-hidden rounded-tl-md rounded-tr-md"
          alt=""
        />
      </div>
      <div className="p-3">
        <div className="">
          <h3 className="my-5 text-subtitle text-center text-gray-700">
            {property["property-name"]}
          </h3>
          <p className="my-2 font-bold">
            Posted by: <span className="text-error font-medium">
              {
                property["posted-by"]
              }
            </span>
          </p>
          <p className="flex gap-5 items-center">
            <IoLocationOutline className="text-secondary" />{" "}
            <span className="text-sm text-body text-success">
              {property.location}
            </span>{" "}
          </p>
          <div className="w-full h-px my-2 bg-gray-400"></div>
          <p className="text-body text-base text-gray-600">
            {property["about-property"]}
          </p>
          <div className="w-full h-px my-2 bg-gray-400"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <p className="capitalize text-sm text-primary">{property.category}</p>
            <h3 className="text-h3 text-gray-700">{property.price}</h3>
          </div>

          <div className="">
            <Link to={`/property/${property._id}`} className="btn btn-outline border-2 border-primary text-primary text-lg outline-gray-400 hover:bg-secondary hover:text-base-100 ease-in-out duration-500">
              View Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
