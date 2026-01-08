import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin, MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="mt-20 footer sm:footer-horizontal bg-blue-50 text-base-content p-10">
        <div className="">
          <h1 className="text-h1">
            Home<span className="text-primary">Nest.</span>
          </h1>
          <p className="flex items-center gap-1">
            <MdLocationPin className="text-primary text-2xl" /> 203 Fake St.
            Mountain View, San Francisco, California, USA
          </p>
          <p className="flex items-center gap-1">
            <FaPhone className="text-primary text-lg" /> +880 1234 5678 90
          </p>
          <p className="flex items-center gap-1">
            <MdMail className="text-primary text-2xl" /> info@example.com
          </p>
        </div>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="bg-base-200 text-center pt-2 pb-4">
        <p className="text-gray-600">
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className="text-primary cursor-pointer font-extrabold">
            HomeNest
          </span>{" "}
          Industries Ltd
        </p>
      </div>
    </>
  );
};

export default Footer;
