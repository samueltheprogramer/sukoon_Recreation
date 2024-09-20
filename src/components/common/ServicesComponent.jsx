import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoIosArrowUp } from "react-icons/io";

const ServicesComponent = () => {
  const [residential, setResidential] = useState(true);
  const [rehabilitation, setRehabilitation] = useState(false);
  const [outpatient, setOutpatient] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const onClickResidential = () => {
    setResidential(true);
    setRehabilitation(false);
    setOutpatient(false);
  };
  const onClickRehabilitation = () => {
    setResidential(false);
    setRehabilitation(true);
    setOutpatient(false);
  };
  const onClickOutpatient = () => {
    setResidential(false);
    setRehabilitation(false);
    setOutpatient(true);
  };

  return (
    <div
      onMouseEnter={() => setIsToggled(true)}
      id="services"
      className=" lg:px-20 lg:py-5 lg:gap-20 lg:flex-row lg:justify-start lg:items-start flex  flex-col gap-5 py-5 px-5"
    >
      {isToggled && (
        <AnchorLink
          offset={50}
          onClick={() => setIsToggled(false)}
          href="#topOfThePage"
          className="hidden lg:block rounded-full bg-white p-4 shadow-2xl z-[200]  fixed bottom-10 right-20  border w-fit"
        >
          <IoIosArrowUp className="text-5xl font-black" />
        </AnchorLink>
      )}
      <div className=" group lg:flex-col lg:gap-10 lg:w-80 lg:text-xl lg:border-b-0 text-lg border-b-2 font-medium w-full flex justify-center items-center gap-5 ">
        <button
          className={`${
            residential &&
            "order-first lg:order-none border-b-4 lg:border-b-0 lg:rounded-md lg:border-l-4 lg:bg-zinc-100"
          } border-green-950 w-full lg:text-start lg:p-6  `}
          onClick={onClickResidential}
        >
          Residential
        </button>
        <button
          className={`${
            rehabilitation &&
            "order-first lg:order-none border-b-4 lg:border-b-0 lg:rounded-md lg:border-l-4 lg:bg-zinc-100"
          } border-green-950 w-full lg:text-start lg:p-6 `}
          onClick={onClickRehabilitation}
        >
          Rehabilitation
        </button>
        <button
          className={`${
            outpatient &&
            " order-first lg:order-none border-b-4 lg:border-b-0 lg:rounded-md lg:border-l-4 lg:bg-zinc-100"
          } border-green-950  w-full lg:text-start lg:p-6 `}
          onClick={onClickOutpatient}
        >
          Outpatient
        </button>
      </div>
      {residential && (
        <ul className="lg:text-2xl lg:gap-8 flex flex-col gap-2 list-inside  ">
          <h1 className="lg:text-3xl text-xl font-bold">
            Residential Services
          </h1>
          <div className=" flex gap-3  items-center ">
            <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
            <h1 className="font-medium text-gray-600">Acute Psychiatry Care</h1>
          </div>
          <div className=" flex gap-3  items-center ">
            <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
            <h1 className="font-medium text-gray-600">Psychiatric ICUs</h1>
          </div>
          <div className=" flex gap-3  items-center ">
            <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
            <h1 className="font-medium text-gray-600">Geriatric Psychiatry</h1>
          </div>
          <div className=" flex gap-3  items-center ">
            <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
            <h1 className="font-medium text-gray-600">Women Focused Care</h1>
          </div>
          <div className=" flex gap-3  items-center ">
            <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
            <h1 className="font-medium text-gray-600">Child Psychiatry</h1>
          </div>
          <div className=" flex gap-3  items-center ">
            <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
            <h1 className="font-medium text-gray-600">Sukoon at Home</h1>
          </div>
        </ul>
      )}
      {rehabilitation && (
        <ul className="lg:text-2xl lg:gap-8 flex flex-col gap-2 list-inside ">
          <h1 className="lg:text-3xl text-xl font-bold">
            Rehabilitation Services
          </h1>

          <div className=" flex gap-3  items-center ">
            <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
            <h1 className="font-medium text-gray-600">Alcohol De-addiction</h1>
          </div>
          <div className=" flex gap-3  items-center ">
            <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
            <h1 className="font-medium text-gray-600">Drug De-addiction</h1>
          </div>
          <div className=" flex gap-3  items-center ">
            <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
            <h1 className="font-medium text-gray-600">
              Substance De-addiction
            </h1>
          </div>
          <div className=" flex gap-3  items-center ">
            <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
            <h1 className="font-medium text-gray-600">Habit De-addiction</h1>
          </div>
        </ul>
      )}
      {outpatient && (
        <ul className="lg:w-auto lg:text-2xl flex-col lg:gap-5 flex w-full gap-1 list-disc list-inside ">
          <h1 className="lg:text-3xl text-xl font-bold">Outpatient Services</h1>
          <div className="flex lg:gap-20">
            <div className="lg:gap-8 flex w-full flex-col gap-2 list-inside">
              <div className=" flex gap-3  items-center ">
                <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
                <h1 className="font-medium text-gray-600">Psychiatry</h1>
              </div>
              <div className=" flex gap-3  items-center ">
                <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
                <h1 className="font-medium text-gray-600">
                  Habit De-addiction
                </h1>
              </div>
              <div className=" flex gap-3  items-center ">
                <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
                <h1 className="font-medium text-gray-600">Talk Therapy</h1>
              </div>
              <div className=" flex gap-3  items-center ">
                <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
                <h1 className="font-medium text-gray-600">
                  Psychometric Assessments
                </h1>
              </div>
              <div className=" flex gap-3  items-center ">
                <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
                <h1 className="font-medium text-gray-600">
                  Occupational Therapy
                </h1>
              </div>
            </div>
            <div className="lg:gap-8  w-full flex flex-col gap-2 list-inside">
              <div className=" flex gap-3  items-center ">
                <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
                <h1 className="font-medium text-gray-600">Psycho-Oncology</h1>
              </div>
              <div className=" flex gap-3  items-center ">
                <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
                <h1 className="font-medium text-gray-600">ECT</h1>
              </div>
              <div className=" flex gap-3  items-center ">
                <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
                <h1 className="font-medium text-gray-600">Art-Based Therapy</h1>
              </div>
              <div className=" flex gap-3  items-center ">
                <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
                <h1 className="font-medium text-gray-600">rTMS Treatment</h1>
              </div>
              <div className=" flex gap-3  items-center ">
                <div className="w-4 h-4   border-[6px] border-green-950 bg-white rounded-full"></div>
                <h1 className="font-medium text-gray-600">Remediation</h1>
              </div>
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default ServicesComponent;
