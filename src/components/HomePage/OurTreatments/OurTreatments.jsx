import React, { useState } from "react";
import OurTreatmentsCard from "./OurTreatmentsCard";
import { animate, motion } from "framer-motion";

const OurTreatments = () => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);

  const variants = {
    whileNotHover1: {
      x: -5000,
    },
    whileHover1: {
      x: 0,
    },
    whileNotHover2: {
      x: 5000,
    },
    whileHover2: {
      x: 0,
    },
  };

  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex lg:hidden flex-col gap-3 w-full px-4 ">
        <h1 className="text-2xl font-semibold text-gray-700 font-serif">
          Evidence-based Treatments
        </h1>
        <h1 className="text-[16px] sm:text-[18px] lg:text-xl sm:text-gray-500 font-medium text-gray-700">
          We treat all mental health conditions from mild to severe at our
          thoughtfully designed facilities and online.
        </h1>
      </div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="  h-fit bg-[url('https://sukoonhealth.com/static/green-leaves-16622e7879ae8d9d3a65b2cd00c19bd6.webp')] w-full bg-center object-contain bg-cover flex flex-col  lg:gap-10 gap-5  p-4 lg:p-16"
      >
        <div className="lg:flex hidden  text-white  flex-col gap-8 text-start  px-4 ">
          <h1 className="text-5xl font-semibold font-serif">
            Evidence-based Treatments
          </h1>

          <h1 className="text-2xl  w-8/12 ">
            We treat all mental health conditions from mild to severe at our
            thoughtfully designed facilities and online.
          </h1>
        </div>
        <div
          id="for mobile and tab"
          className="flex lg:hidden w-full lg:flex-col no-scrollbar overflow-x-scroll gap-10 "
        >
          <div className="flex gap-5">
            <OurTreatmentsCard
              title="Psychosis"
              details="Advanced self-harm preventions in place to manage hallucinations, disorganised thoughts, delusions, and other psychotic symptoms with utmost care."
            />
            <OurTreatmentsCard
              title="Alcohol Deaddiction  "
              details="Medical management of withdrawal symptoms, therapy sessions, and relapse prevention for complete recovery at our deaddiction centres."
            />
            <OurTreatmentsCard
              title="Bipolar Disorder  "
              details="Our experts help navigate through mood changes, fluctuations in energy levels, and intense emotional states by practising evidence-based treatments."
            />
          </div>
          <div className="flex gap-5 ">
            <OurTreatmentsCard
              title="Depression  "
              details="Providing support and personalised recovery plan for depression along with complimentary family counselling."
            />
            <OurTreatmentsCard
              title="Drugs & Substance Deaddiction "
              details="Personalised 360° approach to treatments with a wide range of medical, psychological, and psychotherapies for recovery."
            />
            <OurTreatmentsCard
              title="Personality Disorders  "
              details="Address dysfunctional patterns of thinking and behaviour through psychotherapy and personalised clinical programs."
            />
          </div>
        </div>
        <div
          id="for laptop"
          className="lg:flex hidden  w-full lg:flex-col no-scrollbar overflow-x-scroll  gap-5 lg:gap-10 lg:justify-center lg:items-center"
        >
          <motion.div
            className="flex gap-5"
            initial="whileNotHover1"
            animate={isHovered ? "whileHover1" : "whileNotHover1"}
            variants={variants}
            transition={{ duration: 1, delay: -0.5 }}
          >
            <OurTreatmentsCard
              title="Psychosis"
              details="Advanced self-harm preventions in place to manage hallucinations, disorganised thoughts, delusions, and other psychotic symptoms with utmost care."
            />
            <OurTreatmentsCard
              title="Alcohol Deaddiction  "
              details="Medical management of withdrawal symptoms, therapy sessions, and relapse prevention for complete recovery at our deaddiction centres."
            />
            <OurTreatmentsCard
              title="Bipolar Disorder  "
              details="Our experts help navigate through mood changes, fluctuations in energy levels, and intense emotional states by practising evidence-based treatments."
            />
          </motion.div>
          <motion.div
            initial="whileNotHover2"
            animate={isHovered ? "whileHover2" : "whileNotHover2"}
            variants={variants}
            transition={{ duration: 1, delay: -0.5 }}
            className="flex gap-3 "
          >
            <OurTreatmentsCard
              title="Depression  "
              details="Providing support and personalised recovery plan for depression along with complimentary family counselling."
            />
            <OurTreatmentsCard
              title="Drugs & Substance Deaddiction "
              details="Personalised 360° approach to treatments with a wide range of medical, psychological, and psychotherapies for recovery."
            />
            <OurTreatmentsCard
              title="Personality Disorders  "
              details="Address dysfunctional patterns of thinking and behaviour through psychotherapy and personalised clinical programs."
            />
          </motion.div>
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="bg-green-900 lg:px-16 lg:py-4 lg:font-semibold w-fit text-white p-3 rounded-xl">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTreatments;
