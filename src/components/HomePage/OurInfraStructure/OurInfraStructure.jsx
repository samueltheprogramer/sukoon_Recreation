import React from "react";
import SliderComponent3 from "./OurInfraStructureSlider";
import OurInfraStructureSlider from "./OurInfraStructureSlider";

const OurInfraStructure = () => {
  return (
    <div className="hidden lg:block">
      <div className="w-full py-10 px-20 flex flex-col gap-8">
        <h1 className="text-5xl font-serif font-bold">Our Infrastructure</h1>
        <p className="text-2xl text-gray-600">
          At Sukoon, we carefully create an environment to support the recovery
          journey across all our mental health facilities.
        </p>
      </div>
      <div>
        <OurInfraStructureSlider />
      </div>
    </div>
  );
};

export default OurInfraStructure;
