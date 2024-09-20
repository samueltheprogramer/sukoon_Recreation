import React from "react";
import BGimgL from "../../../images/awardsBGimgL.png";
import BGimgR from "../../../images/awardsBGimg.png";
import AwardsCards from "./AwardsCards";
import AwardsCardsMobile from "./AwardsCardsMobile";

const Awards = () => {
  return (
    <div className=" lg:p-16 lg:gap-6 w-full flex flex-col gap-3 px-5 py-10 relative  bg-zinc-100   ">
      <img
        src={BGimgL}
        className="lg:hidden  w-20 absolute right-0 top-0"
        alt=""
      />
      <img
        src={BGimgR}
        className="hidden lg:block w-36 absolute left-0 top-0"
        alt=""
      />
      <img
        src="https://sukoonhealth.com/static/awards_bg_leaf-d7da97f1331e7052e3a18851912bdbe4.png"
        className="hidden lg:block w-56 absolute right-2 top-2 "
        alt="img"
      />
      <h1 className="lg:text-5xl text-2xl font-semibold font-serif">
        Awards & Accreditation
      </h1>
      <p className="lg:text-2xl flex w-full  text-gray-500">
        Sukoon Psychiatry Centres has been consistently ranked as the best
        mental healthcare hospital in the country by the Economic Times (2023,
        2022). Our services are superior in every way as evidenced by our NABH
        accreditation and more.{" "}
      </p>
      <AwardsCards />
      <AwardsCardsMobile />
    </div>
  );
};

export default Awards;
