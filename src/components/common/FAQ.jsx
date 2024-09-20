import React from "react";
import Accordiant from "../common/Accordiant";
import { IoIosArrowForward } from "react-icons/io";

const FAQ = ({ FAQdataArray }) => {
  return (
    <div className="p-5 flex flex-col gap-3">
      <h1 className="flex w-full lg:p-16 text-3xl text-black/90 lg:text-5xl font-semibold font-serif">
        Frequently Asked Questions
      </h1>
      <div className="lg:px-16">
        {FAQdataArray.map((item) => (
          <Accordiant
            title={item.title}
            discription={item.discription}
            pointLists={item.points}
          />
        ))}
      </div>
      <div className="w-full gap-3 lg:gap-5 flex text-center justify-center items-center lg:text-2xl text-xl">
        <h1 className="font-semibold">View All</h1>

        <IoIosArrowForward className="font-semibold" />
      </div>
    </div>
  );
};

export default FAQ;
