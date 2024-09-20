import React from "react";

const OurTreatmentsCard = ({ title, details }) => {
  return (
    <div className="bg-white rounded-xl gap-3 flex lg:px-5 lg:py-5 lg:w-96 flex-col p-3 h-60 ">
      <h1 className="text-xl lg:text-2xl lg:text-gray-800 font-bold w-52 lg:w-auto ">
        {title}
      </h1>
      <p className="text-sm lg:text-xl lg:font-normal font-medium leading-relaxed text-gray-600 ">
        {details}
      </p>
    </div>
  );
};

export default OurTreatmentsCard;
