import React from "react";

const About = () => {
  return (
    <div className="w-full h-auto   flex flex-col gap-10 px-3 py-5  lg:py-10 lg:px-20">
      <div className="flex flex-col lg:gap-8 gap-4 lg:w-full text-start ">
        <h1 className="lg:text-5xl  text-2xl font-serif font-semibold">
          At Sukoon
        </h1>
        <h1 className="lg:text-2xl lg:w-6/12 text-lg text-gray-500">
          We believe in providing the best clinical care with transparency,
          dignity, and confidentiality.
        </h1>
      </div>
      <div className="flex lg:w-full lg:flex-row-reverse flex-col gap-10">
        <img
          className="rounded-xl lg:w-6/12"
          src="https://sukoonhealth.com/static/at_sukoon_mobile-71016a3ae18976c700959788b1bb4395.jpg"
          alt="aboutImg"
        />
        <div className="lg:w-6/12  flex flex-col gap-5">
          <h1 className="lg:text-4xl lg:font-serif text-lg font-semibold md:font-bold text-gray-700">
            Clinical programs by a multidisciplinary team of experts
          </h1>
          <div className="lg:text-2xl lg:font-normal font-semibold  text-wrap text-lg flex flex-col gap-2 text-gray-500 lg:gap-3">
            <p className="text-wrap leading-relaxed">
              Sukoon is India's leading mental health hospital offering
              <span className="text-green-800 px-1 underline">residential</span>
              <span className="text-green-800 px-1 underline">
                outpatient,
              </span>{" "}
              and
              <span className="text-green-800 px-1 underline">psychiatry,</span>
              <span className="text-green-800 px-1 underline">psychology,</span>
              and
              <span className="text-green-800 px-1 underline">
                de-addiction services.
              </span>
              Our multidisciplinary
              <span className="text-green-800 px-1 underline">team</span>
              of psychiatrists, psychologists, and counsellors has over 75+
              years of experience.
            </p>
            <p className="leading-relaxed">
              A staggering 83% of our clients reported an improvement in their
              mental health within the first two weeks of treatment. With us,
              you are in safe hands. Sukoon was awarded by the
              <span className="text-green-800 px-1 underline">
                {" "}
                Economic Times
              </span>
              for Excellence in Clinical Services - Psychiatry (2023, 2022).
            </p>
          </div>
        </div>
      </div>
      <div className="w-full justify-center lg:grid-cols-4  grid grid-cols-2 lg:p-10  items-center  gap-3  flex-col">
        <div className="border text-sm sm:px-10  rounded-lg flex flex-col justify-center items-center  shadow-lg lg:px-16 p-2 py-2 lg:py-5 lg:text-xl ">
          <img
            className="w-10 mb-3 lg:w-16"
            src="https://sukoonhealth.com/static/profile-b8894a9dcd9b9b6ef20d6c9a31a9ed3c.svg"
          />
          <div className=" flex-col flex sm:flex-row lg:flex-col items-center  sm:gap-3">
            <h1>24-hr Emergency</h1>
            <h1>Care</h1>
          </div>
        </div>
        <div className="border sm:px-10  rounded-lg text-sm   flex flex-col justify-center items-center shadow-lg lg:px-16  p-2 lg:py-5 lg:text-xl">
          <img
            className="w-10 mb-3 lg:w-16"
            src="https://sukoonhealth.com/static/nurse-8d23d5fc3655dfde67b5c7856f5f5cd1.svg"
          />
          <div className=" flex-col justify-center text-center w-full flex sm:flex-row lg:flex-col items-center  sm:gap-3">
            <h1>Dedicated Nurse for</h1>
            <h1>every Resident</h1>
          </div>
        </div>

        <div className="border sm:px-10 text-sm   rounded-lg flex flex-col justify-center items-center p-2  shadow-lg lg:px-16 lg:py-5 lg:text-xl ">
          <img
            className="w-10 mb-3 lg:w-16"
            src="https://sukoonhealth.com/static/resident-97a71fd0ba36325d8243ede1f3a4a975.svg"
          />
          <div className=" flex-col flex sm:flex-row lg:flex-col  items-center  sm:gap-3">
            <h1 className="">Dedicated Female</h1>
            <h1>Wings</h1>
          </div>
        </div>
        <div className="border sm:px-10 text-sm   rounded-lg flex flex-col justify-center items-center p-2  shadow-lg lg:px-16 lg:py-5 lg:text-xl">
          <img
            className="w-10 mb-3 lg:w-16"
            src="https://sukoonhealth.com/static/health-insurance-5e740c792eb16b4752ad196f97bfeefc.svg"
          />
          <div className=" flex-col flex sm:flex-row lg:flex-col items-center  sm:gap-3">
            <h1>All Major Insurance</h1>
            <h1>Accepted</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
