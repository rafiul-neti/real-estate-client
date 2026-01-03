import React, { use, useEffect, useState } from "react";
import useAxios from "../CustomHooks/useAxios";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";
import RatingCard from "../Components/RatingCard";

const MyRatings = () => {
  const { user } = use(AuthContext);
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxios();

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/ratings?user=${user.displayName}`)
      .then((data) => {
        setRatings(data.data);
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  }, [axiosInstance, user?.displayName]);

  if (loading)
    return (
      <div className="flex justify-center items-center text-primary min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );

  return (
    <section className="mt-5 container mx-auto min-h-screen">
      <h1 className="mt-4 text-h1 text-center">
        My <span className="text-primary">Ratings</span>
      </h1>
      <p className="mt-3 mb-7 text-caption text-gray-600 text-center">
        See all your property ratings and reviews at a glance. Track your
        feedback, revisit your past ratings, and manage your property
        experiences effortlessly.
      </p>

      <div className="bg-base-100 p-3">
        {ratings.length === 0 ? (
          <p className="text-center text-error py-10 text-h1">
            You haven’t rated any properties yet.
          </p>
        ) : (
          ratings.map((rating) => (
            <RatingCard key={rating._id} rating={rating} />
          ))
        )}
      </div>
    </section>
  );
};

export default MyRatings;
