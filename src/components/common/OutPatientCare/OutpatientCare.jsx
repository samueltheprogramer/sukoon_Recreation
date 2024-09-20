import React from "react";
import OutpatientCareSlider from "./OutpatientCareSlider";

const OutpatientCare = ({ data }) => {
  return (
    <div id="OPcare" className="p-4 pb-10 lg:px-20 flex flex-col  gap-5">
      <h1 className="lg:text-5xl  text-2xl font-serif font-semibold text-black/90">
        Outpatient Care
      </h1>
      <p className="lg:text-2xl lg:leading-relaxed text-gray-600 leading-relaxed">
        Our Psychiatry Centres has a dedicated OPD wing that houses experienced
        psychiatrists, doctors, counsellors, occupational therapists, and
        psychologists in Gurgaon. We conduct consultations in private chambers
        to ensure complete confidentiality. We also conduct online consultations
        that can be booked here or telephonically.
      </p>
      <OutpatientCareSlider data={data} />
    </div>
  );
};

export default OutpatientCare;
