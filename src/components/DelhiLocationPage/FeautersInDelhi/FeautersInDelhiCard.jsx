import React from "react";

const FeautersInDelhiCard = ({
  title,
  discription,
  imgURL,
  flexDirectionTCSS,
}) => {
  return (
    <div
      className={`lg:flex-row ${flexDirectionTCSS} lg:px-32 lg:gap-16 w-full px-4 py-8 gap-5  flex flex-col justify-center items-center`}
    >
      <h1 className="w-full  lg:hidden tet-start text-2xl text-black/80 font-serif font-bold">
        {title}
      </h1>
      <img
        className="rounded-xl sm:w-[23rem] sm:h-[24rem] bg-no-repeat bg-center bg-cover"
        src={imgURL}
        alt="img"
      />
      <div className="lg:flex lg:flex-col lg:gap-10">
        <h1 className="lg:text-5xl w-full hidden  lg:block tet-start text-2xl text-black/80 font-serif font-bold">
          {title}
        </h1>
        <p className="lg:text-2xl lg:leading-relaxed text-gray-500 font-medium">
          {discription}
        </p>
      </div>
    </div>
  );
};

export default FeautersInDelhiCard;
