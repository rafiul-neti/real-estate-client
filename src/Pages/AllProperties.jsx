import React, { useEffect, useState } from "react";
import useAxios from "../CustomHooks/useAxios";
import PropertyCard from "../Components/PropertyCard";
import { Link } from "react-router";

const AllProperties = () => {
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("");
  const [properties, setProperties] = useState([]);
  const axiosInstance = useAxios();
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axiosInstance
        .get(`/all-properties`)
        .then((data) => {
          setProperties(data.data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 700);
  }, [axiosInstance, reload]);

  useEffect(() => {
    if (!sort) return;
    axiosInstance
      .get(`/all-properties?sort=${sort}`)
      .then((data) => {
        setProperties(data.data);
      })
      .catch((err) => console.log(err));
  }, [axiosInstance, sort]);

  if (loading)
    return (
      <div className="flex justify-center items-center text-primary min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );

  const handleSearch = (e) => {
    e.preventDefault();
    const searched_text = e.target.search.value;

    axiosInstance
      .get(`/search?search=${searched_text}`)
      .then((data) => {
        setProperties(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!properties.length) {
    return (
      <div className="container mx-auto min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-h1 text-primary text-center">
          Oops! We haven't found any match.
        </h1>
        <div className="flex items-center gap-2">
          <Link to={`/`} className="btn btn-primary text-base-100">
            Go to Home
          </Link>
          <Link
            onClick={() => setReload((prev) => !prev)}
            className="btn btn-success text-base-100"
          >
            Explore All Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="p-5 min-h-screen bg-base-200 container mx-auto">
      <h1 className="my-3 text-h1 text-center">
        Explore <span className="text-primary">All Properties</span>
      </h1>
      <p className="text-caption text-gray-600 text-center">
        Browse our complete collection of homes, apartments, and commercial
        spaces — carefully curated to match every lifestyle, need, and
        investment goal.
      </p>

      <div className="mt-5 flex items-center justify-between">
        <form onSubmit={handleSearch} className="flex items-center gap-1.5">
          <label className="input">
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
              name="search"
              required
              className="outline-0!"
              placeholder="Search"
            />
          </label>
          <button className="btn btn-secondary text-base-100">Search</button>
        </form>

        <div>
          <select
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 bg-base-100 outline-0 border-2 border-base-300 rounded-2xl"
          >
            <option value="">Sort By:</option>
            <option value="1">Price Low to High</option>
            <option value="-1">Price High to Low</option>
          </select>
        </div>
      </div>

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default AllProperties;
