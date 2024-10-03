import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordiant = ({ data, isFaqPage }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="border-b-2 gap-3 py-5 lg:py-10 flex flex-col lg:gap-5 ">
      <div
        onClick={() => setToggle(!toggle)}
        className=" cursor-default flex gap-5 justify-between items-center px-2"
      >
        <h1
          className={` ${
            !isFaqPage && "hidden"
          }  text-lg sm:text-xl text-black/80 lg:text-2xl lg:font-normal font-semibold`}
        >
          {data?.attributes?.title}
        </h1>
        <h1 className="text-lg sm:text-xl text-black/80 lg:text-2xl lg:font-normal font-semibold">
          {data?.title}
        </h1>
        <button onClick={() => setToggle(!toggle)}>
          {!toggle ? (
            <IoIosArrowDown className="text-3xl" />
          ) : (
            <IoIosArrowUp className="text-3xl" />
          )}
        </button>
      </div>
      {toggle && (
        <div className="w-full p-2 ">
          <div
            className="text-lg  lg:text-[19px] flex flex-col gap-3 sm:gap-5 lg:gap-5 text-gray-500"
            dangerouslySetInnerHTML={{ __html: data?.attributes?.answer }}
          />
          <p className="px-10 lg:text-2xl lg:font-normal py-5 font-semibold text-gray-700 text-sm">
            {data?.discription}
          </p>
          <ul className="list-disc px-10 text-gray-700">
            {data?.points?.map((point) => (
              <li className="text-sm font-semibold lg:text-2xl p-1 lg:p-4 ">
                {point?.point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordiant;
