import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../CustomHooks/useAxios";
import { IoLocation } from "react-icons/io5";
import toast from "react-hot-toast";
import { FaStar, FaUser } from "react-icons/fa";
import { PropertyDetailsSkeleton } from "../Components/Shared";

const PropertyDetails = () => {
  const [singleProperty, setSingleProperty] = useState({});
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const axiosInstance = useAxios();

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/property/${id}`)
      .then((data) => {
        setSingleProperty(data.data);
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  }, [axiosInstance, id]);

  useEffect(() => {
    axiosInstance
      .get(`/property-rating/${id}`)
      .then((data) => {
        setRatings(data.data);
      })
      .catch((err) => toast.error(err.message));
  }, [axiosInstance, id]);

  if (loading) {
    return <PropertyDetailsSkeleton />;
  }

  return (
    <>
      <section className="mt-10 container mx-auto flex flex-col lg:flex-row items-center gap-5 p-2 lg:p-0">
        <div className="flex-1">
          <img src={singleProperty["property-image"]} alt="" />
        </div>
        <div className="flex-1 space-y-7">
          <h1 className="text-h1 text-gray-700">
            {singleProperty["property-name"]}
          </h1>

          <p className="text-body font-bold! flex gap-2 items-center">
            <IoLocation className="text-primary" />
            <span className="text-gray-600 font-medium!">
              {singleProperty.location}
            </span>
          </p>

          <p className="text-primary font-bold!">
            <span className="font-bold! text-3xl">{singleProperty.price}</span>
          </p>

          <p className="text-gray-600 text-body">
            {singleProperty.description}
          </p>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-5 space-y-2 md:space-y-0">
            <p className="font-bold! flex flex-col lg:flex-row lg:gap-2">
              <span>Property:</span>
              <span className="capitalize text-error font-semibold!">
                {singleProperty.category}
              </span>
            </p>
            <p className="font-bold! flex flex-col lg:flex-row lg:gap-2">
              <span>Posted Date:</span>
              <span className="text-success">
                {singleProperty["posted-date"]}
              </span>
            </p>
            <p className="font-bold! flex flex-col lg:flex-row lg:gap-2">
              <span>Posted by:</span>
              <span className="text-error">{singleProperty["posted-by"]}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 container mx-auto">
        <h3 className="mb-2 text-h3 font-bold text-center">
          Ratings for the property
        </h3>
        <p className="mb-4 text-caption text-gray-600 text-center">
          Read honest feedback from previous visitors and homeowners to help you
          make informed decisions about this property.
        </p>

        <div className="p-3 bg-base-300 grid grid-cols-1 gap-3">
          {!ratings.length ? (
            <div className="flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-600 font-black">
                This property has no rating yet!
              </h1>
            </div>
          ) : (
            ratings.map((rating) => {
              return (
                <div
                  key={rating._id}
                  className="bg-base-100 p-2 rounded flex items-center gap-3"
                >
                  <div className="p-4 bg-neutral rounded-full">
                    <FaUser size={50} />
                  </div>
                  <div className="">
                    <p className="text-caption text-gray-700">
                      Reviewed by:{" "}
                      <span className="text-body font-bold">
                        {rating.reviewer_name}
                      </span>
                    </p>
                    <p className="font-bold text-base lg:text-lg text-gray-600 flex items-center gap-1">
                      <span>Rated ({rating.star} out of 5): </span>
                      {[...Array(rating.star)].map((str, ind) => (
                        <FaStar key={ind} color="#ff4b2b" />
                      ))}
                    </p>
                    <p className="font-bold">
                      Review:{" "}
                      <span className="text-success">{rating.review}</span>
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default PropertyDetails;
