import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { animate, motion } from "framer-motion";

const OurLocationCard = ({ ImgUrl, location, paragraph }) => {
  const [isHover, setIsHover] = useState(false);
  const varients = {
    whileNotHover: {
      rotateY: 0,
    },
    whileHover: {
      rotateY: 180,
    },
  };
  return (
    <motion.div
      initial="whileNotHover"
      variants={varients}
      animate={isHover ? "whileHover" : "whileNotHover"}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="w-full sm:w-[60%] rounded-lg h-96  bg-green-600/40"
    >
      <div
        className={`  ${
          isHover && "hidden "
        } relative   flex flex-col justify-end`}
      >
        <img className="w-full h-96 rounded-lg " src={ImgUrl} alt="" />
        <h1 className="absolute rounded-lg bg-black/40 w-full   p-8 text-4xl  text-white font-semibold  ">
          {location}
        </h1>
      </div>
      <div
        className={` z-30  justify-between ${
          isHover
            ? "flex text-green-950/90 p-5 flex-col justify-between items-center h-full w-full scale-x-[-1]"
            : "hidden"
        }  `}
      >
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">{location}</h1>
          <p className="text-lg ">{paragraph}</p>
        </div>
        <div className="flex   justify-between w-full">
          <button className="bg-green-900/90 text-white px-6 py-3 rounded-xl">
            Learn More
          </button>
          <button className="font-semibold">Locate On Map</button>
        </div>
      </div>
    </motion.div>
  );
};

export default OurLocationCard;
