import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
const MessageFromOurTeam = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="lg:flex-row-reverse lg:relative w-full p-5 flex flex-col gap-3"
    >
      <div className="lg:absolute ring-0 top-0">
        <img
          className="hidden lg:block "
          src="https://sukoonhealth.com/static/insideSukoonFlower-b48229cb62df04ba7120afe8f0fd7fdd.png"
          alt=""
        />
      </div>
      <div className="lg:justify-center  flex flex-col w-full gap-3">
        <h1 className="lg:text-5xl lg:w-10/12  text-2xl text-black/80 font-semibold font-serif">
          A Message From Our Team
        </h1>
        <p className="text-lg lg:w-11/12 lg:text-2xl lg:leading-relaxed lg:font-[450] text-gray-500 ">
          Our goal at Sukoon is to provide the highest level of mental health
          care possible. We are proud to have guided over 75000+ clients towards
          long-term recovery with our cutting-edge facilities and compassionate
          staff.
        </p>
      </div>
      <div className="w-full">
        <img
          className="ml-auto mr-auto cursor-pointer"
          onClick={() => setIsOpen(true)}
          src="https://sukoonhealth.com/static/467b0ed2cd07b10526cb4dbdf9f33b5a/bacf3/insideSukoonDotted_1.webp"
          alt=""
        />
      </div>
      <Modal
        isOpen={isOpen}
        className="w-full lg:px-20 justify-center sm:h-full  items-end     flex flex-col gap-2"
      >
        <button className="p-3" onClick={() => setIsOpen(false)}>
          <IoMdClose className="text-3xl" />
        </button>
        <iframe
          className="w-full h-80 sm:w-[90%] sm:h-[70%] lg:w-[60%] lg:h-[70%] sm:mx-auto "
          src="https://www.youtube.com/embed/s7xnxvQS_SE?si=wtQOXxbBglU2vhfz"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Modal>
    </div>
  );
};

export default MessageFromOurTeam;
