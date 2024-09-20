import React from "react";
import Dinner from "./Dinner";
import Spa from "./Spa";

const ComfortMeetsExpetinalCare = () => {
  return (
    <div className="lg:px-32  w-full h-auto p-4 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="lg:text-5xl  text-2xl font-semibold font-serif text-black/90">
          Comfort meets Exceptional Care
        </h1>
        <p className="lg:text-2xl lg:w-9/12 lg:leading-relaxed text-lg text-gray-500 font-[450]">
          At the Sukoon Recovery Centres, every resident has access to numerous
          dining areas, massage rooms, jacuzzis, steam rooms, and more.
        </p>
      </div>
      <div className="w-full h-auto">
        <Dinner />
      </div>
      <div className="w-full h-auto">
        <Spa />
      </div>
    </div>
  );
};

export default ComfortMeetsExpetinalCare;
