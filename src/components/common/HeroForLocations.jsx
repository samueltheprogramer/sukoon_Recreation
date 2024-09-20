import React from "react";

const HeroForLocations = ({ bgImg, heading, para }) => {
  return (
    <div
      className={`w-full sm:h-[50vh] lg:h-[110vh] h-[80vh] ${
        (bgImg === 1 &&
          " lg:bg-[url('https://sukoonhealth.com/static/gurgaon-bg-12edf803c8ed9a04131331d7ae8937d8.jpg')] bg-[url('https://sukoonhealth.com/static/facilities-responsive-b8ea29a98fd7fa53ff67f4af01d92b94.jpg')] ") ||
        (bgImg === 2 &&
          " lg:bg-[url('https://sukoonhealth.com/static/chattarpur-bg-394ef1fd33c5bd4dc4b54cb417eedbdd.png')] bg-[url('https://sukoonhealth.com/static/swimming_2-96819b1b3cf1ca37fc2b8ae9371b7ffd.svg')]") ||
        (bgImg === 3 &&
          " bg-[url('https://sukoonhealth.com/static/delhi-bg-90a7fdb1f59fcfba4828797179cf819e.jpeg')] ") ||
        (bgImg === 4 &&
          "lg:bg-[url('https://sukoonhealth.com/static/banner-web-bg-e4903873b3d8075db61d246477d73811.jpg')] bg-[url('https://sukoonhealth.com/static/banner-mbl-bg-75501f3804ddd8a9d56586be14bb8cd5.png')]")
      } bg-no-repeat bg-cover bg-center`}
    >
      <div className="lg:justify-center lg:items-start lg:px-20 lg:gap-10 bg-black/60 text-white flex flex-col gap-5 w-full sm:h-[50vh] h-[80vh] lg:h-[110vh] absolute  z-20 p-5 ">
        <div className="flex flex-col gap-5">
          <h1 className=" lg:text-5xl  lg:w-10/12 text-3xl font-semibold leading-0 font-serif">
            {heading}
          </h1>
          <p className=" lg:text-[1.5rem]  text-sm leading-relaxed">{para}</p>
        </div>
        <button className="bg-white lg:text-xl w-fit lg:px-16 text-lg  text-gray-800 font-medium py-5 px-5 rounded-lg  hover:shadow-2xl hover:shadow-white">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default HeroForLocations;
