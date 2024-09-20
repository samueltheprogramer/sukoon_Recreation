import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import SliderComponent from "../common/Sliders/SliderComponent";

const ExpertsFeedbacks = ({ data }) => {
  return (
    <div className="lg:p-10 sm:p-5 mb-20">
      <div className="w-full h-screen p-1 flex flex-col gap-10">
        <div className="flex justify-between">
          <h1 className="lg:text-5xl sm:text-[1.5rem] text-xl  w-full lg:w-8/12 text-black/80 font-serif font-semibold ">
            What do Clinical Experts say about Sukoon Health
          </h1>
          <img
            className="hidden lg:block"
            src="https://sukoonhealth.com/static/testmonial-title-fb01790635b5dc5d0250c3f6d36b29d0.svg"
            alt="img"
          />
        </div>
        <SliderComponent data={data} />
      </div>
    </div>
  );
};

export default ExpertsFeedbacks;
