import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import PropertyDetails from "../Pages/PropertyDetails";
import PrivateRoute from "./PrivateRoute";
import AllProperties from "../Pages/AllProperties";
import AddProperty from "../Pages/AddProperty";
import MyProperties from "../Pages/MyProperties";
import MyRatings from "../Pages/MyRatings";
import Agents from "../Pages/Agents";
import AgentDetails from "../Pages/AgentDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-properties",
        Component: AllProperties,
      },
      {
        path: "agents",
        Component: Agents,
      },
      {
        path: "agent/:id",
        Component: AgentDetails,
      },
      {
        path: "add-property",
        element: (
          <PrivateRoute>
            <AddProperty />
          </PrivateRoute>
        ),
      },
      {
        path: "/property/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "my-properties",
        element: (
          <PrivateRoute>
            <MyProperties />
          </PrivateRoute>
        ),
      },
      {
        path: "my-ratings",
        element: (
          <PrivateRoute>
            <MyRatings />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
