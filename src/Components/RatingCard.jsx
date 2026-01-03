import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const RatingCard = ({ rating }) => {
  console.log(rating);
  return (
    <div className="bg-white p-2 md:flex md:items-center md:gap-5 rounded">
      <div className="md:w-1/3">
        <img src={rating.thumbnail} className="rounded" alt="" />
      </div>
      <div className="space-y-3">
        <h3 className="text-h3">{rating.property_name}</h3>
        <p className="capitalize text-lg text-gray-600 font-bold">
          Reviewer Name:{" "}
          <span className="text-secondary">{rating.reviewer_name}</span>
        </p>
        <p className="font-bold text-lg text-gray-600 flex items-center gap-1">
          <span>Given Rating ({rating.star} out of 5): </span>
          {[...Array(rating.star)].map((str, ind) => (
            <FaStar key={ind} color="#ff4b2b" />
          ))}
        </p>

        <p className="font-bold text-lg text-gray-600">
          Review: <span className="text-success">{rating.review}</span>
        </p>
        <p className="text-lg font-bold text-gray-600">
          Rreview Date: <span className="text-error">{rating.review_date}</span>
        </p>
        <div className="">
          <Link
            to={`/property/${rating.property_id}`}
            className="btn btn-secondary text-base-100 flex-1 md:flex-none md:w-40"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
