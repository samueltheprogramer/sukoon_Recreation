import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoIosArrowUp } from "react-icons/io";

const data = [
  {
    title: "Our Vision",
    discription:
      "Sukoon’s vision is to lead a transformative movement in mental healthcare, fostering a society where holistic well-being and compassionate treatment are the rights of every individual.",
    imgURL:
      "https://sukoonhealth.com/static/vision-636b506661fd49d2a571aa7e5118707e.png",
  },
  {
    title: "Our Mission",
    discription:
      "At Sukoon, Our mission is to provide a holistic and multi-disciplinary approach to treatment that enhances quality of life and paves the path to lasting recovery.",
    imgURL:
      "https://sukoonhealth.com/static/mission-57fd477ed9677fb1926e36a3112a6763.png",
  },
];

const VisionAndMission = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsToggled(true)}
      className="p-5 lg:pl-20 flex flex-col gap-20 bg-zinc-200/50 sm:bg-zinc-200/50 lg:bg-white w-full h-fit"
    >
      <div className="lg:absolute lg:gap-5  flex flex-col gap-3">
        <h1 className="text-2xl lg:text-5xl font-semibold font-serif">
          Vision and Mission
        </h1>
        <h2 className="text-xl lg:text-4xl font-medium font-serif text-gray-500">
          Why Choose Us?
        </h2>
      </div>
      <div className=" flex lg:pb-20 lg:pt-52 lg:rounded-tl-[12rem] lg:flex-row lg:w-full  lg:bg-zinc-200/50 sm:px-28 flex-col gap-28 ">
        <div className=" border lg:w-full p-5 flex flex-col gap-3 sm:gap-5 py-8 bg-white shadow-2xl w-full rounded-2xl">
          <img
            className="w-[9.5rem] lg:w-[11rem] -mt-[7rem] ml-auto mr-auto "
            src={data[0].imgURL}
            alt=""
          />
          <div className="flex flex-col gap-5 ">
            <h1 className="text-2xl lg:text-4xl text-black/85 font-semibold font-serif">
              {data[0].title}
            </h1>
            <p className="text-lg lg:text-2xl text-gray-500">
              {data[0].discription}
            </p>
          </div>
        </div>
        <div className="lg:w-full  border px-5 py-10 lg:gap-8 flex flex-col gap-3 sm:gap-5 bg-white shadow-2xl sh rounded-2xl">
          <img
            className="w-[15rem] lg:w-[16rem] -mt-[8rem] ml-auto mr-auto"
            src={data[1].imgURL}
            alt=""
          />
          <div className="flex flex-col gap-5 ">
            <h1 className="text-2xl lg:text-4xl text-black/85 font-semibold font-serif">
              {data[1].title}
            </h1>
            <p className="text-lg lg:text-2xl text-gray-500">
              {data[1].discription}
            </p>
          </div>
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

export default VisionAndMission;
