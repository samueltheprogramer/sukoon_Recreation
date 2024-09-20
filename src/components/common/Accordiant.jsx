import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordiant = ({ title, discription, pointLists }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="border-b-2 py-10 ">
      <div
        onClick={() => setToggle(!toggle)}
        className=" cursor-default flex gap-5 justify-between items-center px-2"
      >
        <h1 className="text-lg text-black/80 lg:text-2xl lg:font-normal font-semibold">
          {title}
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
        <div className="w-full p-2">
          <p className="px-10 lg:text-2xl lg:font-normal py-5 font-semibold text-gray-700 text-sm">
            {discription}
          </p>
          <ul className="list-disc px-10 text-gray-700">
            {pointLists?.map((point) => (
              <li className="text-sm font-semibold lg:text-2xl p-1 lg:p-4 ">
                {point.point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordiant;
