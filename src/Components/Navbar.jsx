import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link, NavLink } from "react-router";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import Swal from "sweetalert2";
import Button from "./AnimatedComponents/Button";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to={`/`} className={`font-semibold text-base tracking-wide`}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/all-properties`}
          className={`font-semibold text-base tracking-wide`}
        >
          All Properties
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to={`/add-property`}
              className={`font-semibold text-base tracking-wide`}
            >
              Add Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/my-properties`}
              className={`font-semibold text-base  tracking-wide`}
            >
              My Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/my-ratings`}
              className={`font-semibold text-base tracking-wide`}
            >
              My Ratings
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to={`/agents`}
          className={`font-semibold text-base tracking-wide`}
        >
          Agents
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Log Out Successfull!",
          icon: "success",
          timer: 2000,
        });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="px-1 sm:px-4 md:px-8 sticky top-0 w-full z-50 bg-gray-200/80 py-3">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={`/`} className="">
            <h3 className="text-h2">
              Home<span className="text-primary">Nest.</span>
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 border-2 border-gray-300 rounded-full">
                  <img src={user.photoURL || <FaUser />} alt="" />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow"
              >
                <div className=" pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
                <li>
                  <Button
                    onClick={handleSignOut}
                    className="text-base-100 text-lg"
                  >
                    Log Out <IoLogOut />
                  </Button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Button>
                <Link to={`/login`} className="text-base-100">
                  Login
                </Link>
              </Button>
              <Button>
                <Link to={`/register`} className="text-base-100">
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
