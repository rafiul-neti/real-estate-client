import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const HomeLayout = () => {
  return (
    <section>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default HomeLayout;
