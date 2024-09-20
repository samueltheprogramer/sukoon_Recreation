import React from "react";
import SliderComponent from "./Sliders/SliderComponent";

const RecoveryStories = ({ data }) => {
  return (
    <div className=" w-full flex lg:p-5 flex-col gap-10">
      <div className="w-full flex px-5 lg:px-24 flex-col gap-5 ">
        <h1 className="lg:text-5xl text-3xl font-bold font-serif">
          Recovery Stories
        </h1>
        <p className="lg:text-2xl text-xl text-gray-700">
          A testament of holistic recovery that opened pathways to a healthy and
          happy life.
        </p>
      </div>
      <SliderComponent data={data} />
    </div>
  );
};

export default RecoveryStories;
