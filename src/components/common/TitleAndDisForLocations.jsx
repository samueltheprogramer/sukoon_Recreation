import React from "react";

const TitleAndDisForLocations = ({ discription, title }) => {
  return (
    <div className="lg:px-20 sm:py-5 lg:py-10 px-4  py-5 flex flex-col lg:gap-5 gap-3">
      <h1 className="lg:text-5xl text-black/90 text-2xl font-bold font-serif">
        {title}
      </h1>
      <p className="lg:text-[1.5rem]  text-gray-500">{discription}</p>
    </div>
  );
};

export default TitleAndDisForLocations;
