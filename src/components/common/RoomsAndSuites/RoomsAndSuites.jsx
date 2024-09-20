import React, { useState } from "react";
import SliderForRoomsAndSuites from "./RoomsAndSuitesSlider";

const RoomsAndSuites = ({ data }) => {
  const [title1, setTitle1] = useState(true);
  const [title2, setTitle2] = useState(false);
  const [title3, setTitle3] = useState(false);
  const [title4, setTitle4] = useState(false);

  const onClickTitle1 = () => {
    setTitle1(true);
    setTitle2(false);
    setTitle3(false);
    setTitle4(false);
  };

  const onClickTitle2 = () => {
    setTitle1(false);
    setTitle2(true);
    setTitle3(false);
    setTitle4(false);
  };
  const onClickTitle3 = () => {
    setTitle1(false);
    setTitle2(false);
    setTitle3(true);
    setTitle4(false);
  };

  const onClickTitle4 = () => {
    setTitle1(false);
    setTitle2(false);
    setTitle3(false);
    setTitle4(true);
  };

  return (
    <div
      id="Rooms&Suites"
      className="lg:px-20 lg:py-10 lg:gap-10 px-4 py-8 flex flex-col gap-5"
    >
      <h1 className="lg:text-5xl text-2xl text-black/80 font-serif font-semibold">
        Rooms & Suites
      </h1>
      <p className="lg:text-2xl     text-gray-600 ">
        At Sukoon Psychiatry Centres, all rooms are single-occupancy with
        private balconies, smart TVs, wooden flooring, lounge seating, and
        ensuite bathrooms to enhance recovery. Your loved ones are more than
        welcome to stay with you. Each room also has advanced self harm
        preventing systems as per the{" "}
        <span className="text-green-950  underline ">
          American Psychiatry Association{" "}
        </span>{" "}
        guidelines ,with round-the-clock nursing care.
      </p>
      <div className=" lg:p-10 shadow-2xl flex flex-col gap-5 border p-3 rounded-xl">
        <div className="lg:text-xl group   flex    text-sm font-semibold border-b-2  overflow-x-scroll gap-10  w-full justify-between no-scrollbar">
          <h1
            className={`${
              title1 &&
              " order-first lg:order-none  lg:border-b-8  border-b-2  border-green-950/90"
            } w-full text-center  lg:text-2xl pb-3 lg:pb-5 cursor-pointer`}
            onClick={onClickTitle1}
          >
            {data[0]?.title1}
          </h1>
          <h1
            className={`${
              title2 &&
              "order-first lg:order-none lg:border-b-8 border-b-2 pb-3  border-green-950/90"
            } w-full text-center text-nowrap  lg:text-2xl lg:pb-5 cursor-pointer`}
            onClick={onClickTitle2}
          >
            {data[0]?.title2}
          </h1>
          <h1
            className={`${
              title3 &&
              " order-first lg:order-none  lg:border-b-8 border-b-2 pb-3  border-green-950/90"
            } w-full text-center  text-nowrap  lg:text-2xl lg:pb-5 cursor-pointer`}
            onClick={onClickTitle3}
          >
            {data[0]?.title3}
          </h1>
          <h1
            className={`${
              title4 &&
              " order-first lg:order-none lg:border-b-8 border-b-2 pb-3  border-green-950/90"
            } w-full text-center  text-nowrap  lg:text-2xl lg:pb-5 cursor-pointer`}
            onClick={onClickTitle4}
          >
            {data[0]?.title4}
          </h1>
        </div>
        <SliderForRoomsAndSuites
          data={data}
          title1={title1}
          title2={title2}
          title3={title3}
          title4={title4}
        />
        <div className="lg:text-2xl lg:gap-8 flex flex-col gap-5 list-inside  ">
          <h1 className="lg:text-3xl text-xl font-serif text-black/80 font-semibold">
            Features & Amenities
          </h1>
          <div className="grid lg:gap-10 lg:grid-cols-4 grid-cols-2 gap-4">
            <div className=" flex gap-3  items-center ">
              <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
              <h1 className="font-medium text-gray-600">Queen Bed</h1>
            </div>
            <div className=" flex gap-3  items-center ">
              <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
              <h1 className="font-medium text-gray-600">Mini Fridge</h1>
            </div>
            <div className=" flex gap-3  items-center ">
              <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
              <h1 className="font-medium text-gray-600">AC & Heater</h1>
            </div>
            <div className=" flex gap-3  items-center ">
              <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
              <h1 className="font-medium text-gray-600">Ensuite Bathroom</h1>
            </div>
            <div className=" flex gap-3  items-center ">
              <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
              <h1 className="font-medium text-gray-600">Lounge Seating</h1>
            </div>
            <div className=" flex gap-3  items-center ">
              <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
              <h1 className="font-medium text-gray-600">Spacious Closet</h1>
            </div>
            <div className=" flex gap-3  items-center ">
              <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
              <h1 className="font-medium text-gray-600">Private Balcony</h1>
            </div>
            <div className=" flex gap-3  items-center ">
              <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
              <h1 className="font-medium text-gray-600">Smart TV (55”)</h1>
            </div>
            <div className=" flex gap-3  items-center ">
              <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded  -full"></div>
              <h1 className="font-medium text-gray-600">Writing Desk</h1>
            </div>
            <div className=" flex gap-3  items-center ">
              <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
              <h1 className="font-medium text-gray-600">
                Nurse Calling System
              </h1>
            </div>
            <div className=" flex gap-3  items-center ">
              <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
              <h1 className="font-medium text-gray-600">Wifi</h1>
            </div>
            <div className=" flex gap-3  items-center ">
              <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
              <h1 className="font-medium text-gray-600">24*7 Hot Water</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsAndSuites;
