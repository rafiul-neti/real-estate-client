import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import useAxios from "../CustomHooks/useAxios";
import MyPropertiesCard from "../Components/MyPropertiesCard";
import Swal from "sweetalert2";
import { LoadingSpinner } from "../Components/Shared";

const MyProperties = () => {
  const { user } = use(AuthContext);
  const axiosInstance = useAxios();
  const [myProperties, setMyProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axiosInstance
        .get(`/my-properties?email=${user.email}`)
        .then((data) => {
          setMyProperties(data.data);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    }, 700);
  }, [axiosInstance, user.email]);

  if (loading) {
    return <LoadingSpinner fullScreen message="Loading your properties..." />;
  }

  const removeAfterDeleting = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/my-properties/${id}`).then((data) => {
          if (data.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your property has been deleted.",
              icon: "success",
            });

            const remainingProperties = myProperties.filter(
              (property) => id !== property._id
            );

            setMyProperties(remainingProperties);
          }
        });
      }
    });
  };

  return (
    <section className="container mx-auto min-h-screen">
      <h1 className="mt-5 text-h1 text-center">
        Manage Your <span className="text-primary">Listed Properties</span>
      </h1>
      <p className="mt-2 mb-7 text-caption text-gray-600 text-center">
        View, edit, or remove your property listings effortlessly — keep your
        portfolio up to date and attract the right buyers or renters.
      </p>

      <div className="bg-base-300 p-4 grid grid-cols-1 gap-5">
        {myProperties.map((property) => (
          <MyPropertiesCard
            key={property._id}
            property={property}
            removeAfterDeleting={removeAfterDeleting}
          />
        ))}
      </div>
    </section>
  );
};

export default MyProperties;
