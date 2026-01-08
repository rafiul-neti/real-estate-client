import React, { use, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import useAxios from "../CustomHooks/useAxios";
import { format } from "date-fns";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { ButtonLoader } from "../Components/Shared";

const AddProperty = () => {
  const [category, setCategory] = useState(null);
  const [error, setError] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const { user } = use(AuthContext);
  const axiosInstance = useAxios();

  const handleAddProperty = (e) => {
    e.preventDefault();
    const postedBy = e.target.name.value;
    const posterEmail = e.target.email.value;
    const propertyName = e.target.propertyName.value;
    const aboutProperty = e.target.aboutProperty.value;
    const description = e.target.description.value;
    const price = `$${e.target.price.value}`;
    const location = e.target.location.value;
    const thumbnail = e.target.thumbnail.value;
    const propertyImage = e.target.image.value;
    const postedDate = format(new Date(), "yyyy-MM-dd");

    if (!category) {
      setError("Please Select a Category!");
      return;
    } else if (category === "Select The Category") {
      setError("Please Select a Category!");
      return;
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
      "posted-date": postedDate,
      "posted-by": postedBy,
      "poster-email": posterEmail,
    };

    console.log(newProperty);

    setSubmitLoading(true);
    axiosInstance
      .post("/add-property", newProperty)
      .then((data) => {
        console.log(data.data);

        if (data.data.insertedId) {
          Swal.fire({
            title: "Congrats! You're property has been added Successfully!",
            icon: "success",
            timer: 2000,
          });

          e.target.reset();
          setCategory(null);
          setError("");
        }
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setSubmitLoading(false));
  };

  return (
    <section className="mt-5 rounded bg-base-300 container mx-auto p-2 lg:p-0 min-h-screen">
      <h1 className="p-5 text-h1 text-center">
        <span className="text-primary">List Your Property</span> with Ease
      </h1>

      <p className="text-caption text-gray-600 text-center">
        Showcase your property to thousands of potential buyers and renters —
        simple, fast, and completely secure.
      </p>

      <div className="mt-5">
        <form onSubmit={handleAddProperty} className="p-3 space-y-5">
          <div className="add-divs">
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

          <div className="add-divs">
            <div className="lg:flex-1 w-full">
              <label className="labels text-subtitle" htmlFor="">
                🏠 Property Name
              </label>

              <input
                type="text"
                name="propertyName"
                className="input outline-0 w-full"
                placeholder="e.g. Sunny Apartment in Dhanmondi"
                required
              />
            </div>

            <div className="lg:flex-1 w-full">
              <label className="labels text-subtitle" htmlFor="">
                Category
              </label>

              <select
                onChange={(e) => setCategory(e.target.value)}
                name=""
                className="input w-full outline-0"
              >
                <option>Select The Category</option>
                <option>for sale</option>
                <option>for rental</option>
              </select>
              <p className="text-caption text-error">{error && error}</p>
            </div>
          </div>

          <label htmlFor="" className="labels text-subtitle">
            Short Details
          </label>
          <textarea
            name="aboutProperty"
            rows={`3`}
            className="input outline-0 w-full h-16 whitespace-pre-line"
            placeholder="Write something catchy about your property within 2 lines."
            required
          ></textarea>

          <label className="labels text-subtitle" htmlFor="">
            Description
          </label>
          <textarea
            name="description"
            rows={`5`}
            className="input outline-0 w-full h-32 whitespace-pre-line"
            placeholder="Describe your property features, nearby landmarks, and other highlights."
            required
          ></textarea>

          <div className="add-divs">
            <div className="lg:flex-1 w-full">
              <label className="labels text-subtitle" htmlFor="">
                💰 Price
              </label>

              <input
                type="text"
                name="price"
                className="input outline-0 w-full"
                placeholder="e.g. 2500000 or 15000/month"
                required
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
                placeholder="e.g. Dhanmondi, Dhaka"
                required
              />
            </div>
          </div>

          <div className="add-divs">
            <div className="lg:flex-1 w-full">
              <label className="labels text-subtitle" htmlFor="">
                Thumbnail 🖼️ Image
              </label>

              <input
                type="text"
                name="thumbnail"
                className="input outline-0 w-full"
                placeholder="Paste image URL (https://example.com/image.jpg)"
                required
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
                placeholder="Paste image URL (https://example.com/image.jpg)"
                required
              />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center">
            <ButtonLoader
              loading={submitLoading}
              loadingText="Adding Property..."
              className="btn-primary btn-wide text-base-100 text-lg lg:text-2xl lg:py-8"
            >
              Add Property Now
            </ButtonLoader>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProperty;
