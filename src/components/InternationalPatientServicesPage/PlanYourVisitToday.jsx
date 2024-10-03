import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const data = [
  {
    title: "Free First Consultation",
    para: "Recover from addictive and psychiatric mental health conditions under the supervision of our expert team of psychiatrists, clinical psychologists, occupational therapists, social workers, doctors, art-based therapists, physiotherapists, and visiting consultants. We work towards drawing out your recovery journey with treatment strategies curated specially for you.",
    free: true,
  },
  {
    title: "Personalized Care",
    para: "We have a dedicated floor for our female clients that makes sure to maintain female privacy. In addition to this, we also cater to personalised follow-up sessions to check with individual needs and recovery processes, along with personalised diet charts and preferences and recovery. Moreover, with a 1:1 nurse-to-patient ratio, your treatment and care will always be our top priority.",
    free: false,
  },
  {
    title: "Best in Class Facilities",
    para: "With state-of-the-art psychiatry equipment, lush green gardens, engagement zones, exquisite cuisines and art therapy zones for personalised services, your recovery journey would be nothing short of an engaging session with progressive healing Get a glimpse of what your stay at our international mental health hospital would be like.",
    free: true,
  },
];

const PlanYourVisitToday = () => {
  return (
    <div className="lg:gap-10 lg:py-32 my-5 bg-zinc-200/50 p-5 flex flex-col gap-5">
      <h1 className="sm:w-full sm:text-center sm:text-4xl lg:text-5xl  text-3xl  text-black/90 font-serif font-semibold w-10/12">
        Plan your Visit today
      </h1>
      <div className="lg:grid-cols-3 lg:px-32 lg:gap-10  grid grid-cols-1 sm:grid-cols-2 gap-5  sm:gap-10 w-full ">
        {data.map((item) => (
          <div className="  lg:gap-8 lg:justify-between items-center sm:mx-auto lg:w-full   p-5 flex flex-col gap-5  bg-white shadow-2xl rounded-xl">
            <div className="lg:flex lg:flex-col lg:gap-10">
              <h1 className="text-2xl font-semibold text-black/90 font-serif">
                {item.title}
              </h1>
              <p className="lg:text-2xl sm:text-xl sm:leading-relaxed lg:leading-relaxed text-lg text-gray-500">
                {item.para}
              </p>
            </div>
            {item.free && (
              <button className="font-medium text-lg flex justify-center items-center gap-2 text-green-950/90">
                Book Free Consultation
                <IoIosArrowForward className="text-xl font-semibold" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanYourVisitToday;
