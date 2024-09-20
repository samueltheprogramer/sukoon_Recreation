import React from "react";
import img from "../../../images/dubbleQuation.svg";
const SliderComponentCard = ({
  headLetter,
  title,
  designation,
  communityName,
  content,
}) => {
  return (
    <div>
      <div className="rounded-xl    border-[50px] border-white ">
        <div className="flex  lg:relative  text-wrap  flex-col  w-full   lg:divide-y-0 p-5   border lg:px-16  shadow-2xl lg:h-[26rem] rounded-xl    ">
          <div className="absolute w-5  lg:w-auto  bottom-16 lg:bottom-5 right-20">
            <img src={img} alt="" />
          </div>
          <div className="flex w-full  items-center lg:gap-10 divide-x-0 lg:divide-x-2 lg:divide-neutral-950 gap-3 lg:py-10 border-b-2 p-3">
            <h1 className=" text-4xl lg:w-20 lg:h-20 lg:p-3  lg:text-6xl font-serif text-white justify-center items-center bg-green-950/90 w-12 h-12 text-center p-1     rounded-full ">
              {headLetter}
            </h1>
            <div className="lg:pl-10">
              <p className="text-xs font-medium text-gray-500">
                {communityName}
              </p>
              <h1 className="text-xl font-bold">{title}</h1>
              <h6 className="text-xs font-medium text-gray-500">
                {designation}
              </h6>
            </div>
          </div>
          <div className="text-lg  h-auto lg:font-medium text-gray-500 lg:py-10 py-5">
            <p className="lg:text-xl ">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponentCard;
