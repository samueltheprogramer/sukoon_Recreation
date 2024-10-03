import React, { useState } from "react";
import navImg from "../../../images/logoNav.svg";
import { MdCall } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { BiArrowToBottom } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "gatsby";

const NavbarMobile = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isToggleServices, setIsToggleServices] = useState(false);
  const [isToggleLocations, setIsToggleLocations] = useState(false);
  return (
    <div className="lg:hidden w-screen z-40  bottom-0 fixed">
      {isToggle && (
        <div className="w-full rounded-md flex flex-col gap-5 bg-white h-[65vh] p-5">
          <button
            className="w-full flex text-end justify-end "
            onClick={() => setIsToggle(!isToggle)}
          >
            <ImCross className="text-xl font-extralight text-[#075740]" />
          </button>

          <div className="lg:flex-col text-white lg:gap-8 justify-center items-center flex w-full gap-4">
            <button className="sm:w-fit flex py-2 px-1 rounded-md bg-[#075740] w-full  gap-2">
              <img
                className="w-6 h-6"
                src="https://sukoonhealth.com/static/0ee46d0a73faca76c3532b8227a334d1/4e704/phone.webp"
                alt=""
              />
              <h1>+91 9876543210</h1>
            </button>
            <button className="sm:w-fit flex  py-2 px-1 rounded-md bg-[#075740] w-full gap-2">
              <img
                className="w-6 h-6"
                src="https://sukoonhealth.com/static/06b5ae42080da8ceba4033480cac171b/4e704/telephone.webp  "
                alt=""
              />
              <h1>+91 9876543210</h1>
            </button>
          </div>
          <div className="text-lg no-scrollbar overflow-y-scroll font-medium flex flex-col gap-5 text-gray-600 w-full">
            <Link to="/">Home</Link>
            <Link to="/our_doctors">Experts</Link>
            <div className="w-full flex flex-col gap-3">
              <div
                onClick={() => setIsToggleServices(!isToggleServices)}
                className="w-full flex justify-between"
              >
                <h1>Services</h1>
                <IoIosArrowDown />
                {/* <IoIosArrowUp /> */}
              </div>
              {isToggleServices && (
                <div className="text-base font-normal flex flex-col gap-3">
                  <h1 className="border-b-[1px] pb-2 border-neutral-300">
                    Residential Services
                  </h1>
                  <h1 className="border-b-[1px] pb-2 border-neutral-300">
                    Rehabilitation Services
                  </h1>
                  <h1 className="border-b-[1px] pb-2 border-neutral-300">
                    Outpatient Services
                  </h1>
                </div>
              )}
            </div>
            <div className="w-full flex flex-col gap-3">
              <div
                onClick={() => setIsToggleLocations(!isToggleLocations)}
                className="w-full flex justify-between"
              >
                <h1>Locations</h1>
                <IoIosArrowDown />
                {/* <IoIosArrowUp /> */}
              </div>
              {isToggleLocations && (
                <div className="text-base font-normal flex flex-col gap-3">
                  <Link
                    to="/psychiatric_hospital_in_Gurgaon"
                    className="border-b-[1px] pb-2 border-neutral-300"
                  >
                    Sukoon Psychiatry Centre - Gurgaon
                  </Link>
                  <Link
                    to="/psychiatric_hospital_in_Chhatarpur"
                    className="border-b-[1px] pb-2 border-neutral-300"
                  >
                    Sukoon Recovery Centre - Chhatarpur
                  </Link>
                  <Link
                    to="/psychiatric_hospital_in_Delhi"
                    className="border-b-[1px] pb-2 border-neutral-300"
                  >
                    Sukoon Centre for Mental Health - Delhi
                  </Link>
                  <Link
                    to="/psychiatric_hospital_in_Bengaluru"
                    className="border-b-[1px] pb-2 border-neutral-300"
                  >
                    Sukoon Psychiatry Centre - Bengaluru
                  </Link>
                </div>
              )}
            </div>

            <Link to="/international-patient-services">
              International Patients
            </Link>
            <Link to="/blogs">Blog </Link>
            <h1>Contact Us</h1>
            <Link to="/faqs">FAQs</Link>
            <Link to="/about_us">About us</Link>
            <Link to="/media">Media</Link>
          </div>
        </div>
      )}

      <div className="w-full flex relative justify-between bg-zinc-200  p-5  ">
        {!isToggle && (
          <img
            src="https://sukoonhealth.com/static/99c87c40a86f16e76dce7725da757da1/c0406/whatsapp_icon.webp"
            alt="whatsappLogo"
            className="absolute bottom-28 right-8 "
          />
        )}

        <div
          onClick={() => setIsToggle(!isToggle)}
          className="flex cursor-default  gap-3 items-center"
        >
          <img typeof="svg" src={navImg} alt="img" />
          <h1 className="text-xl text-[#075740]">Menu</h1>
        </div>
        <button className="text-white flex gap-1 justify-center items-center text-xl font-semibold px-8 py-2 rounded-sm bg-[#075740]">
          <MdCall />
          Call
        </button>
      </div>
    </div>
  );
};

export default NavbarMobile;
