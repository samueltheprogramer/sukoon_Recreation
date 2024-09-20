import React from "react";

import { RiArrowRightSLine } from "react-icons/ri";

import NewsAndBlogsCard from "../NewAndBlogs/NewsAndBlogsCard";
import { Link } from "gatsby";

const NewsAndBlogsComponent = ({ data, isNewsAndMediaCard }) => {
  return (
    <div className="lg:pb-16 lg:mt-10 lg:bg-zinc-300/40 lg:rounded-tl-[25rem] ">
      <div className="lg:px-20 p-5 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="lg:text-5xl text-2xl font-semibold text-black/90 font-serif">
            {data[0].title}
          </h1>
          <p className="lg:text-2xl sm:text-[19px]   text-[17px]  text-gray-500 font-[450]">
            {data[0].subTitle}
          </p>
        </div>
        <div className="lg:flex-row lg:px-5  flex flex-col gap-8">
          {data[0].card.map((item, index) => (
            <Link
              to={
                isNewsAndMediaCard && index === 0
                  ? "https://www.hindustantimes.com/lifestyle/pet/8-reasons-why-dogs-and-humans-share-a-deep-emotional-connection-101714657006129-amp.html"
                  : isNewsAndMediaCard && index === 1
                  ? "https://www.moneycontrol.com/health-and-fitness/what-is-nomophobia-symptoms-and-ways-to-overcome-it-article-12724048.html"
                  : isNewsAndMediaCard && index === 2
                  ? "https://www.moneycontrol.com/health-and-fitness/what-is-gourmet-diet-and-how-it-saves-you-from-depression-anxiety-article-12708283.html"
                  : ""
              }
            >
              <NewsAndBlogsCard
                data={item}
                isNewsAndMediaCard={isNewsAndMediaCard}
              />
            </Link>
          ))}
        </div>

        <h1 className="flex lg:text-2xl text-xl font-semibold  justify-center items-center text-center   cursor-pointer  ">
          View All <RiArrowRightSLine className="text-2xl lg:text-3xl" />
        </h1>
      </div>
    </div>
  );
};

export default NewsAndBlogsComponent;
