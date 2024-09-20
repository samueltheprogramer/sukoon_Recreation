import { StaticImage } from "gatsby-plugin-image";
import { IoIosArrowUp } from "react-icons/io";
import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const CashlessInsurence = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsToggled(true)}
      className="w-full relative gap-3 flex  flex-col lg:gap-5 px-5 lg:px-32 lg:py-10"
    >
      <h1 className="text-2xl lg:text-5xl font-semibold font-serif">
        Introducing Cashless Insurance
      </h1>
      <h2 className="text-lg lg:text-xl font-medium text-gray-500">
        Pioneering Cashless Insurance for Mental Healthcare - the 1st in India
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-5  py-5 gap-5  justify-center   items-center">
        <div className="flex w-full justify-center items-center">
          <StaticImage
            className="bg-center  bg-cover w-40"
            src="https://sukoonhealth.com/static/HDFC-Ergo-logo-a2d97eb2beb9615faf29184605558732.png"
            alt="logo"
          />
        </div>
        <div className="flex w-full justify-center items-center">
          <img
            className="bg-center bg-cover w-40 "
            src="https://sukoonhealth.com/static/logo_sbi-7c5a4f4052c62f53379bd6ed2648407c.png"
            alt="logo"
          />
        </div>
        <div className="flex w-full  justify-around items-center">
          <StaticImage
            className="bg-center bg-cover object-contain w-40"
            src="../../images/logo1.png"
            alt="logo"
          />
        </div>
        <div className="flex w-full  justify-center items-center">
          <img
            className="bg-center bg-cover object-contain w-40"
            src="https://sukoonhealth.com/static/allianz-5cfd01c0bd3939666d42923f3f1a8b1f.png"
            alt="logo"
          />
        </div>
        <div className=" flex w-full justify-center items-center ">
          <StaticImage
            className="bg-center bg-cover object-contain w-40"
            src="https://sukoonhealth.com/static/medi_assist-59db5741a106e3fa52ae76d3be5de5d3.png"
            alt="logo"
          />
        </div>
      </div>
      {isToggled && (
        <AnchorLink
          onClick={() => setIsToggled(false)}
          href="#topOfThePage"
          className="hidden lg:block rounded-full bg-white p-4 shadow-2xl z-[200]  fixed bottom-10 right-20  border w-fit"
        >
          <IoIosArrowUp className="text-5xl font-black" />
        </AnchorLink>
      )}
    </div>
  );
};

export default CashlessInsurence;
