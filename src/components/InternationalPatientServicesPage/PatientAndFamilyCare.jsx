import React from "react";
import img from "../../images/listdisc.png";

const data = [
  {
    title: "Process",
    listOfTexts: [
      "General Enquiry",
      "Medical opinion by psychiatrist",
      "Visa assistance",
      "Booking, Arrival",
      "Consultation with doctors",
      "Treatment",
      "Sight seeing if medically allowed",
      "Follow-up via video appointments",
    ],
  },
  {
    title: "Checklist",
    listOfTexts: [
      "Quotation provided by Sukoon",
      "Treatment plan provided by Sukoon",
      "Photographs (passport size)",
    ],
  },
  {
    title: "Documents needed",
    listOfTexts: ["Old Medical Reports", "Visa", "Passport"],
  },
];

const PatientAndFamilyCare = () => {
  return (
    <div className="my-5 lg:my-10  ">
      <div className="w-full h-[40vh] sm:h-[50vh]  lg:h-[60vh] text-white  bg-[url('https://sukoonhealth.com/static/patient-bg-08e2c5864844b9254289e2ae81e54767.png')]  bg-cover bg-no-repeat">
        <div className=" lg:justify-center lg:items-start lg:px-20 lg:gap-8 lg:bg-black/40 bg-black/60 text-white flex flex-col gap-5 w-full sm:h-[50%] h-[40%] lg:h-[60%] absolute  z-20 p-5 justify-center items-start">
          <h1 className="text-2xl lg:text-4xl font-medium">
            Patient and Family Care
          </h1>
          <p className="lg:text-2xl lg:font-medium">
            We hand-pick some of the best guest houses and hotels for your loved
            ones to stay alongside you while you are on your road to recovery.
            You can also choose from multiple safe and convenient options at
            reasonable budgets.
          </p>
        </div>
      </div>
      <div className="lg:flex-row lg:p-10 w-full p-5 flex flex-col gap-10">
        {data.map((item) => (
          <div className="p-5 w-full border flex flex-col gap-5  shadow-2xl rounded-2xl">
            <h1 className="text-2xl uppercase text-black/90 font-semibold">
              {item.title}
            </h1>
            <div
              className="flex flex-col gap-3 justify-center items-start
            "
            >
              {item.listOfTexts.map((item) => (
                <ul className="flex gap-3  items-center">
                  <img className="w-5 h-5" src={img} alt="" />
                  <li className="text-lg text-gray-600">{item}</li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientAndFamilyCare;
