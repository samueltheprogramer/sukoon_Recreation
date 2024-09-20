import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Hero = () => {
  return (
    <div
      id="homeSection"
      className="lg:h-[75vh] bg-[url('../images/HeroImg.webp')] lg:bg-[url('../images/homePageBanner.webp')] bg-no-repeat bg-center   rounded-md  bg-cover h-[80vh] lg:mt-20  pl-3 pr-8 py-6 w-full   "
    >
      <div className="bg-black/30 bottom-[6.4rem]  inset-0 absolute hidden lg:block  z-20 "></div>
      <div className="sm:gap-6 lg:p-16 absolute  z-30 text-white flex flex-col gap-5">
        <div className="bg-white lg:hidden w-fit p-2 rounded-xl">
          <StaticImage
            className="w-24  bg-white "
            src="../../images/sukoonLogo.svg"
            alt="logoImg"
          />
        </div>

        <h1 className="text-2xl sm:text-[1.5rem] lg:text-[3.1rem]  font-serif font-semibold">
          India's #1 mental health hospital chain
        </h1>
        <h3 className="text-lg lg:text-2xl ">
          Evidence-based treatments delivered with care
        </h3>
        <button className="lg:px-8 lg:py-5 lg:text-2xl p-4 w-fit text-lg font-semibold text-gray-500 bg-white rounded-xl">
          Get Help Today
        </button>
        <div className="sm:flex-row  flex flex-col gap-5 ">
          <div className="flex gap-5 lg:gap-8 items-center ">
            <div className="lg:w-auto w-36 lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-5  lg:p-5">
              <h1 className="font-bold text-xl lg:text-4xl">75K +</h1>
              <h1 className="lg:text-2xl">People Treated</h1>
            </div>
            <div className="w-[2px] hidden lg:block h-16 bg-white"></div>

            <div className="lg:w-auto w-36 lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-5  lg:p-5">
              <h1 className="font-bold text-xl lg:text-4xl">4.8</h1>
              <h1 className="lg:text-2xl">Overall Rating</h1>
            </div>
            <div className="w-[2px] hidden lg:block h-16 bg-white"></div>
          </div>
          <div className="flex gap-5 lg:gap-8 items-center  ">
            <div className="lg:w-auto w-36 lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-5  lg:p-5">
              <h1 className="font-bold text-xl lg:text-4xl">NABH</h1>
              <h1 className="lg:text-2xl">Accredited</h1>
            </div>
            <div className="w-[2px] hidden lg:block h-16 bg-white"></div>
            <div className="lg:w-auto w-36 lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-5  lg:p-5">
              <h1 className="font-bold text-xl lg:text-4xl">ET Healthcare</h1>
              <h1 className="lg:text-2xl">Awarded</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
