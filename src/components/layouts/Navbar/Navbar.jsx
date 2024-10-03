import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { PiPhoneCallFill } from "react-icons/pi";
const Navbar = () => {
  const [isHoverServices, setIsHoverServices] = useState(false);
  const [isHoverLocations, setIsHoverLocations] = useState(false);
  const [isHoverMore, setIsHoverMore] = useState(false);
  return (
    <div
      id="topOfThePage"
      className="hidden lg:shadow-lg  absolute z-50 lg:block   bg-white w-full"
    >
      <div className="w-full flex justify-around items-center px-10    text-green-800">
        <Link to="/" className="flex lg">
          <StaticImage src="../../../images/sukoonLogo.svg" alt="sukoonLogo" />
        </Link>
        <div className="flex text-xl   gap-14 ">
          <Link
            className="hover:text-xl hover:font-medium     py-8 "
            to="/our_doctors"
          >
            Experts
          </Link>
          <Link
            onMouseEnter={() => setIsHoverServices(true)}
            onMouseLeave={() => setIsHoverServices(false)}
            className={`hover:font-semibold   py-8     px-2  `}
            to="/"
          >
            Services
          </Link>

          <Link
            onMouseEnter={() => setIsHoverLocations(true)}
            onMouseLeave={() => setIsHoverLocations(false)}
            className=" py-8     px-2 hover:text-xl hover:font-medium text-xl"
            to="/"
          >
            Locations
          </Link>
          <Link
            className="hover:text-xl    hover:font-medium text-xl py-8  px-2"
            to="/international-patient-services"
          >
            International Patients
          </Link>
          <Link
            onMouseEnter={() => setIsHoverMore(true)}
            onMouseLeave={() => setIsHoverMore(false)}
            className="hover:text-xl     hover:font-medium text-xl py-8 px-2 "
            to="/"
          >
            More
          </Link>
        </div>
        <div className="flex gap-5">
          <StaticImage src="../../../images/whatsappimg.svg" alt="sukoonLogo" />

          <button className="flex  items-center p-3 font-semibold bg-green-900 text-white text-2xl rounded-2xl">
            <PiPhoneCallFill className="text-white md:text-2xl text-4xl" /> +91
            9876543210
          </button>
        </div>
      </div>
      {isHoverServices && (
        <div>
          <div
            onMouseEnter={() => setIsHoverServices(true)}
            onMouseLeave={() => setIsHoverServices(false)}
            className="w-full h-auto p-5 border flex justify-center gap-20  "
          >
            <div className="flex  flex-col gap-2 text-xl font-medium text-gray-500">
              <h1 className="text-xl text-black font-bold pb-2">
                Residential Services
              </h1>
              <h1>Acute Psychiatry Care</h1>
              <h1>Intensive Care Unit</h1>
              <h1>Sukoon At Home</h1>
              <h1>Geriatric Psychiatry</h1>
              <h1>Women Focused Care</h1>
              <h1>Child Psychiatry</h1>
            </div>
            <div className="flex flex-col gap-2 text-xl font-medium text-gray-500">
              <h1 className="text-xl font-bold pb-2 text-black">
                Rehabilitation Services
              </h1>
              <h1>Alcohol Deaddiction</h1>
              <h1>Drug Deaddiction</h1>
              <h1>Habit Deaddiction</h1>
            </div>
            <div className="flex flex-col gap-2 text-xl font-medium text-gray-500">
              <h1 className="text-xl text-black font-bold pb-2">
                Residential Services
              </h1>
              <h1>Outpatient Services</h1>
              <h1>Clinical Psychology</h1>
              <h1>Counselling Psychology</h1>
              <h1>Art-Based Therapy</h1>
              <h1>rTMS Treatments</h1>
              <h1>Psychoanalytical Therapy</h1>
              <h1>Remediation</h1>
              <h1>Occupational Therapy</h1>
              <h1>Psychiatry</h1>
              <h1>Psycho - Oncology</h1>
              <h1>Psychometric Testing</h1>
            </div>
            <StaticImage
              className="w-96 rounded-xl"
              src="../../../images/servicesMenuImg.webp"
              alt="serviceImg"
            />
          </div>
        </div>
      )}
      {isHoverLocations && (
        <div
          onMouseEnter={() => setIsHoverLocations(true)}
          onMouseLeave={() => setIsHoverLocations(false)}
          className="w-full flex justify-around  border text-xl font-medium delay-1000 p-5 h-auto  "
        >
          <div className="text-gray-500 flex flex-col gap-3">
            <h1 className="text-black">Locations</h1>
            <Link to="/psychiatric_hospital_in_Gurgaon">
              Sukoon Psychiatry Centre - Gurgaon
            </Link>
            <Link to="/psychiatric_hospital_in_Chhatarpur">
              Sukoon Recovery Centre - Chhatarpur
            </Link>
            <Link to="/psychiatric_hospital_in_Delhi">
              Sukoon Centre for Mental Health - Delhi
            </Link>
            <Link to="/psychiatric_hospital_in_Bengaluru">
              Sukoon Psychiatry Centre - Bengaluru
            </Link>
          </div>
          <StaticImage
            className="rounded-xl"
            src="../../../images/location_header.webp"
            alt="location"
          />
        </div>
      )}
      {isHoverMore && (
        <div
          onMouseEnter={() => setIsHoverMore(true)}
          onMouseLeave={() => setIsHoverMore(false)}
          className="w-full flex gap-32 p-5 h-auto  justify-around  border delay-1000"
        >
          <div className="text-xl font-medium text-gray-500 flex flex-col gap-3">
            <h1 className="text-black">More</h1>
            <Link to="/about_us">About us </Link>
            <Link to="/media">Media</Link>
            <Link to="/blogs">Blog </Link>
            <h1>Contact us</h1>
            <Link to="/faqs">FAQs</Link>
          </div>
          <StaticImage src="../../../images/moreMenu_1.webp" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
