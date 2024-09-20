import React from "react";
import { FaFacebook, FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const NewsAndBlogsCard = ({ data, isNewsAndMediaCard }) => {
  return (
    <div className="flex flex-col gap-3 border rounded-2xl shadow-2xl p-5 bg-white">
      <img className="rounded-lg" src={data.imgURL} alt="img" />
      {isNewsAndMediaCard && (
        <div className="flex w-full  justify-between items-center">
          <h1 className="text-[15px] font-medium text-gray-500">
            {data.daysAgo} Days Ago
          </h1>
          <div className="flex gap-5 text-green-950/95 text-3xl ">
            <FaTwitter />
            <FaFacebookF />
          </div>
        </div>
      )}
      <h1 className="text-xl font-semibold text-black/80">{data.title}</h1>
      <h1 className="sm:text-xl flex items-center gap-1 text-lg text-green-950 font-medium">
        Read Full <HiMiniArrowLongRight className="text-xl font-medium" />
      </h1>
    </div>
  );
};

export default NewsAndBlogsCard;
