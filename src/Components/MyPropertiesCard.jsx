import React, { use, useRef, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import useAxios from "../CustomHooks/useAxios";
import Swal from "sweetalert2";

const MyPropertiesCard = ({ property, removeAfterDeleting }) => {
  const axiosInstance = useAxios();
  const [error, setError] = useState("");
  const { user } = use(AuthContext);
  const updateRef = useRef(null);
  const navigate = useNavigate()

  const handleUpdateProperty = () => {
    updateRef.current.showModal();
  };

  const handleDeleteProperty = (id) => {
    removeAfterDeleting(id);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const postedBy = e.target.name.value;
    const posterEmail = e.target.email.value;
    const propertyName = e.target.propertyName.value;
    const category = e.target.category.value;
    const aboutProperty = e.target.aboutProperty.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const location = e.target.location.value;
    const thumbnail = e.target.thumbnail.value;
    const propertyImage = e.target.image.value;

    if (category !== "for sale" || category !== "for rental") {
      setError("Please Enter the categoty 'for sale' or 'for rental'.");
    }

    const newProperty = {
      "property-name": propertyName,
      description,
      "about-property": aboutProperty,
      price,
      location,
      category,
      thumbnail,
      "property-image": propertyImage,
      "posted-by": postedBy,
      "poster-email": posterEmail,
    };

    axiosInstance
      .patch(`/update-property/${property._id}`, newProperty)
      .then((data) => {
        if (data.data.matchedCount) {
          Swal.fire({
            title: "Updated!",
            text: "Your property has been updated.",
            icon: "success",
          });

          updateRef.current.close();

          navigate(`/property/${property._id}`)
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="bg-white p-2 md:flex md:items-center md:gap-5 rounded">
        <div className="md:w-1/3">
          <img src={property["property-image"]} className="rounded" alt="" />
        </div>
        <div className="space-y-3">
          <h3 className="text-h3">{property["property-name"]}</h3>
          <p className="capitalize text-lg text-gray-600 font-bold">
            Property:{" "}
            <span className="text-secondary">{property.category}</span>
          </p>
          <p className="font-bold text-lg text-gray-600">
            Price: <span className="text-success">{property.price}</span>
          </p>
          <p className="font-bold text-lg text-gray-600">
            Location: <span className="text-primary">{property.location}</span>
          </p>
          <p className="flex gap-2 items-center text-lg font-bold text-gray-600">
            <FaCalendar className="text-error" />{" "}
            <span>{property["posted-date"]}</span>
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mt-3">
            <button
              onClick={handleUpdateProperty}
              className="btn btn-success text-base-100 flex-1 md:flex-none md:w-32"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteProperty(property._id)}
              className="btn btn-error text-base-100 flex-1 md:flex-none md:w-32"
            >
              Delete
            </button>
            <Link
              to={`/property/${property._id}`}
              className="btn btn-secondary text-base-100 flex-1 md:flex-none md:w-40"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>

      {/* Modals */}

      <dialog ref={updateRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="mt-5">
            <form onSubmit={handleUpdate} className="p-3 space-y-5">
              <h3 className="text-h2 font-bold! text-center">
                Update Your{" "}
                <span className="text-secondary">Property Info</span>
              </h3>
              <p className="text-caption text-gray-600 text-center">
                Easily edit and keep your property listings up to date — update
                details, images, and pricing to attract the right buyers or
                renters.
              </p>
              <div className="modal-divs">
                <div className="lg:flex-1 w-full">
                  <label className="labels text-subtitle">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input outline-0 w-full"
                    defaultValue={user.displayName}
                    readOnly
                  />
                </div>

                <div className="lg:flex-1 w-full">
                  <label className="labels text-subtitle" htmlFor="">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="input outline-0 w-full"
                    defaultValue={user.email}
                    readOnly
                  />
                </div>
              </div>

              <div className="modal-divs">
                <div className="lg:flex-1 w-full">
                  <label className="labels text-subtitle" htmlFor="">
                    🏠 Property Name
                  </label>

                  <input
                    type="text"
                    name="propertyName"
                    className="input outline-0 w-full"
                    defaultValue={property["property-name"]}
                  />
                </div>

                <div className="lg:flex-1 w-full">
                  <label
                    className={`labels text-subtitle ${error && "text-error"}`}
                    htmlFor=""
                  >
                    {error ? error : "Category"}
                  </label>

                  <input
                    type="text"
                    name="category"
                    className="input w-full outline-0"
                    defaultValue={property.category}
                  />
                </div>
              </div>

              <label htmlFor="" className="labels text-subtitle">
                Short Details
              </label>
              <textarea
                name="aboutProperty"
                rows={`3`}
                className="input outline-0 w-full h-16 whitespace-pre-line"
                defaultValue={property["about-property"]}
              ></textarea>

              <label className="labels text-subtitle" htmlFor="">
                Description
              </label>
              <textarea
                name="description"
                rows={`5`}
                className="input outline-0 w-full h-32 whitespace-pre-line"
                defaultValue={property.description}
              ></textarea>

              <div className="modal-divs">
                <div className="lg:flex-1 w-full">
                  <label className="labels text-subtitle" htmlFor="">
                    💰 Price
                  </label>

                  <input
                    type="text"
                    name="price"
                    className="input outline-0 w-full"
                    defaultValue={property.price}
                  />
                </div>

                <div className="lg:flex-1 w-full">
                  <label className="labels text-subtitle" htmlFor="">
                    📍 Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    className="input outline-0 w-full"
                    defaultValue={property.location}
                  />
                </div>
              </div>

              <div className="modal-divs">
                <div className="lg:flex-1 w-full">
                  <label className="labels text-subtitle" htmlFor="">
                    🖼️ Thumbnail
                  </label>

                  <input
                    type="text"
                    name="thumbnail"
                    className="input outline-0 w-full"
                    defaultValue={property.thumbnail}
                  />
                </div>

                <div className="lg:flex-1 w-full">
                  <label className="labels text-subtitle" htmlFor="">
                    🖼️ Image Link
                  </label>

                  <input
                    type="text"
                    name="image"
                    className="input outline-0 w-full"
                    defaultValue={property["property-image"]}
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center">
                <button className="btn btn-primary btn-wide text-base-100 text-lg lg:text-2xl lg:py-8">
                  Update Property
                </button>
              </div>
            </form>
          </div>
          <div className="modal-action mt-0 justify-center-safe">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error text-base-100">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MyPropertiesCard;
