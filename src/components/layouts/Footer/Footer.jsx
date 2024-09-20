import { Link } from "gatsby";
import React from "react";
import { CgCopyright } from "react-icons/cg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="lg:px-20 sm:px-5 mb-10 lg:mb-0  w-full h-auto lg:text-xl text-white flex flex-col justify-center items-center lg:pt-20  py-12 bg-[#083e30] gap-10">
      <div className="lg:flex-row lg:w-full flex flex-col  gap-10  lg:gap-10 lg:justify-between sm:w-full lg:text-nowrap">
        <div className=" contact lg:gap-8 items-center lg:items-start lg:justify-start flex justify-center  sm:w-full  px-6  flex-col gap-6 ">
          <img
            className="mx-20 lg:mx-0 "
            src="https://sukoonhealth.com/static/footerLogo-36dfe07a24d90d9ba5aedf2219e9bc77.svg"
            alt="img"
          />
          <div className="flex w-full justify-center lg:justify-start text-white text-2xl gap-4">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
            <FaYoutube />
          </div>
          <div className="flex  flex-col gap-3  sm:flex-row lg:justify-start lg:w-full lg:items-start lg:flex-col lg:gap-5 sm:w-full">
            <div className="lg:flex-col sm:gap-4 sm:flex-row lg:gap-8 justify-center items-center flex w-full gap-4">
              <div className="flex items-center w-full  gap-2">
                <img
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  src="https://sukoonhealth.com/static/0ee46d0a73faca76c3532b8227a334d1/4e704/phone.webp"
                  alt=""
                />
                <h1>+91 9876543210</h1>
              </div>
              <div className="flex  items-center w-full gap-2">
                <img
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  src="https://sukoonhealth.com/static/06b5ae42080da8ceba4033480cac171b/4e704/telephone.webp  "
                  alt=""
                />
                <h1>+91 9876543210</h1>
              </div>
            </div>
            <div className="flex lg:text-start w-full gap-2  justify-center  items-center">
              <img
                className="w-5 h-5 lg:w-6 lg:h-6"
                src="https://sukoonhealth.com/static/9e9c7b16d6e364fceb6bceab097f7645/ef6ff/mail-icon.webp"
                alt=""
              />
              <h1 className="lg:w-full lg:text-start">
                admissions@sukoonhealth.com
              </h1>
            </div>
          </div>
        </div>
        <div className="QuickLinks lg:-mt-5 sm:w-full lg:w-full  lg:gap-6 px-4 gap-5 w-full lg:justify-center justify-between flex flex-col">
          <h1 className="lg:text-3xl text-2xl w-full  text-start font-semibold">
            Quick Links
          </h1>
          <div className="flex lg:gap-0 lg:w-full lg:text-nowrap sm:w-full sm:gap-[21rem]  sm:justify-between  justify-between lg:">
            <div className="flex flex-col justify-center lg:gap-4  w-full gap-5">
              <h1 className="lg:text-2xl w-fit text-center border-b-2  pb-2 font-semibold text-lg">
                Our Locations
              </h1>
              <Link to="/psychiatric_hospital_in_Gurgaon">Gurgaon </Link>
              <Link to="/psychiatric_hospital_in_Chhatarpur">Chhatarpur </Link>
              <Link to="/psychiatric_hospital_in_Delhi">Delhi</Link>
              <Link to="/psychiatric_hospital_in_Bengaluru">Bengaluru</Link>
            </div>
            <div className="flex flex-col w-full lg:gap-4 gap-5">
              <h1 className="lg:text-2xl  w-fit text-center border-b-2 pb-2 font-semibold text-lg">
                Our Services
              </h1>
              <h2>Residential Services </h2>
              <h2>Rehabilitation Services </h2>
              <h2>Outpatient Services</h2>
              <h2>International Patients</h2>
            </div>
          </div>
        </div>
        <div className="R&I   px-4 lg:px-0 gap-5 lg:mt-10 w-full justify-center items-center flex flex-col sm:items-start  text-start   ">
          <h1 className="sm:w-6/12 lg:text-2xl lg:w-fit w-full lg:text-center  border-b-2 pb-2  font-semibold text-lg">
            Resources & Information
          </h1>
          <div className="flex sm:justify-between  sm:w-8/12  justify-between lg:pl-5 items-center lg:justify-center lg:gap-5 w-full">
            <div className="flex flex-col gap-3">
              <h2>Our Experts</h2>
              <Link to="/about-us">About Us</Link>
              <h2>Media</h2>
              <h2>Blog</h2>
            </div>
            <div className="flex flex-col gap-3">
              <h2>FAQs</h2>
              <h2>Contact Us</h2>
              <h2>Privacy Policy</h2>
              <h2>Terms & Conditions</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights lg:gap-5 text-center lg:text-3xl border-t-2 p-5 w-full gap-1   justify-center items-center lg:px-4  flex">
        <h1 className=" flex -ml-2   w-full justify-center  lg:justify-end items-center">
          <CgCopyright />
          2023 Sukoon Health
        </h1>
        <div className="w-[2px] lg:w-[4px] lg:-m-0 h-5 -mr-3  bg-white"></div>
        <h1 className="w-full lg:text-start">All rights reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
