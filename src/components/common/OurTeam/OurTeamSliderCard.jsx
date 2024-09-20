import React from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const OurTeamSliderCard = ({ filterdTeamData }) => {
  const { experience, title, qualification } = filterdTeamData;
  return (
    <div className="w-[95%] rounded-md flex flex-col gap-5 ">
      <div className="w-full relative">
        <button className="absolute right-0 py-1 px-6 m-4 rounded-md bg-[#075740] text-white">
          {experience} years
        </button>
        <img
          className=" rounded-xl  h-80 w-full"
          src={filterdTeamData?.profile?.url}
          alt=""
        />
      </div>

      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-gray-500">{qualification}</p>
      </div>
      <button className="flex gap-5 text-green-950 text-xl font-semibold items-center justify-start">
        <h1>Book Appointment</h1>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default OurTeamSliderCard;
