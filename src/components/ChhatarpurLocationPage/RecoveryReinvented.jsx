import React from "react";

const RecoveryReinventedData = [
  {
    number: "01.",
    para: "Our residential treatment programs are personalised to suit your unique set of needs.",
  },
  {
    number: "02.",
    para: "We complete a comprehensive medical and physical check, including extensive laboratory tests, psychiatric assessment, medical assessment, nutritional and lifestyle assessments",
  },
  {
    number: "03.",
    para: "Based on the results of these assessment, our multidisciplinary team creates a detailed treatment plan.",
  },
];

const RecoveryReinvented = () => {
  return (
    <div className="lg:px-20 lg:py-10 lg:gap-6 p-4 pr-0 flex flex-col gap-2">
      <h1 className="lg:text-5xl lg:mb-5 text-2xl font-serif font-semibold text-black/90">
        Recovery Reinvented
      </h1>
      <h2 className="lg:text-4xl text-lg font-semibold text-gray-700">
        360-Degree Approach
      </h2>
      <p className="lg:w-full lg:text-2xl  w-10/12 text-gray-600">
        The most extensive and comprehensive treatment
      </p>
      <div className="lg:flex-row  lg:w-full lg:h-full  lg:justify-center lg:items-center flex flex-col lg:gap-10 gap-5">
        {RecoveryReinventedData.map((item) => (
          <div className=" lg:w-full lg:h-[22rem] rounded-xl flex flex-col gap-2 lg:px-5 lg:py-16 lg:bg-zinc-400/20">
            <div className="flex gap-5 ">
              <h1 className="lg:font-semibold lg:text-[2.5rem] text-4xl font-sans text-green-950/90">
                {item.number}
              </h1>
              <div className=" lg:hidden bg-green-950/90 w-full "></div>
            </div>
            <p className="lg:text-2xl text-gray-600 leading-relaxed">
              {item.para}
            </p>
          </div>
        ))}
      </div>
      <h1 className="lg:text-2xl lg:mt-10 lg:font-450 text-gray-600 ">
        According to the treatment plan, we establish a daily schedule based on
        the following range of services:
      </h1>
      <img
        src="https://sukoonhealth.com/static/recovery-progress-responsive-04ad0b36b39a9d9b4eafa4b3b2bdce18.webp"
        alt=""
      />
    </div>
  );
};

export default RecoveryReinvented;
