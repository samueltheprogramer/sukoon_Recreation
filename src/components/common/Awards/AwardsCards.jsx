import React from "react";
import img1 from "../../../images/awardImg1.png";
import img3 from "../../../images/awardImg3.png";

const AwardsCards = () => {
  return (
    <div className=" justify-around gap-5 w-full sm:w-full hidden sm:flex sm:overflow-x-scroll lg:flex   no-scrollbar">
      <div className=" bg-white sm:w-full  w-full lg:p-5 gap-5 p-3 rounded-lg  flex">
        <img className="w-28 h-28" src={img1} alt="" />
        <div className="w-8/12  sm:w-full text-sm justify-around flex flex-col">
          <h3 className="text-xl sm:text-sm sm:w-96  sm:text-nowrap ">
            ET Health care award for best clinical services
          </h3>
          <h1 className="font-semibold ">-ET Healthcare</h1>
        </div>
      </div>
      <div className=" bg-white w-full lg:p-5 gap-5 p-3 rounded-lg  flex">
        <img
          className="w-28 h-28"
          src="https://sukoonhealth.com/static/Accrediation_1-d79e37a25c6898d9d3e9eb0bdffcb5ff.png"
          alt=""
        />
        <div className="w-8/12 text-sm justify-around flex flex-col">
          <h3 className="text-xl  sm:text-sm sm:w-96  sm:text-nowrap">
            NABH Accredited Facility award
          </h3>
          <h1 className="font-semibold">-NABH</h1>
        </div>
      </div>
      <div className=" bg-white w-full lg:p-5 gap-5 p-3 rounded-lg  flex">
        <img className="w-28 h-28" src={img3} alt="" />
        <div className="w-8/12 text-sm justify-around flex flex-col">
          <h3 className="text-xl  sm:text-sm sm:w-96 sm:text-nowrap">
            Make in Award for Best Psychiatric Hospital
          </h3>
          <h1 className="font-semibold">-Make In India</h1>
        </div>
      </div>
    </div>
  );
};

export default AwardsCards;
