import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { LoadingSpinner } from "../Components/Shared";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner fullScreen message="Authenticating..." />;
  }

  if (user) return children;

  return <Navigate state={location.pathname} to={`/login`}></Navigate>;
};

export default PrivateRoute;
