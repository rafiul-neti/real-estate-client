import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading)
    return (
      <div className="flex justify-center items-center text-primary min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );

  if (user) return children;

  return <Navigate state={location.pathname} to={`/login`}></Navigate>;
};

export default PrivateRoute;
