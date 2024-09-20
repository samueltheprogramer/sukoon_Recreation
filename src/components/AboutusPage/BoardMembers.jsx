import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TiLockClosed, TiShoppingBag } from "react-icons/ti";
import Modal from "react-modal";

const data = [
  {
    title: "Dr. Alok Sarin",
    qualification: "MD Psychiatry",
    experience: "30",
    designation: "Clinical Advisory Board Member",
    imgURL:
      "https://sukoonhealth.com/static/Alok-e9556760da7626bbf683536f97fe0109.jpg",
    discription:
      "Dr. Alok Sarin is a highly respected clinical psychiatrist in New Delhi with over 30 years of active clinical practice. He is also a distinguished scholar and author with interests in medicine, psychiatry, ethics, and society. Dr. Sarin has demonstrated his commitment to bridging the gaps between practice, academia, and mental health activism, advocating for ethics and equity in practice, and working closely with various NGOs across the country. He has received numerous accolades for his contributions to mental health research, including a Senior Fellowship from the Nehru Memorial Museum and Library for his research on the mental health aspects of history. Dr. Sarin has also been a member of the Task Force responsible for drafting the National Mental Health Policy and has contributed to drafting mental health policies for several states in India.",
  },
  {
    title: "Dr. Mathew Varghese",
    qualification: "MD Psychiatry",
    experience: "35 ",
    designation: "Clinical Advisory Board Member",
    imgURL:
      "https://sukoonhealth.com/static/Mathew-5a0d381cb9dac56084ada7d0a37ced20.jpg",
    discription:
      "Dr. Mathew Varghese, a distinguished psychiatrist, brings over 35 years of expertise to our Clinical Board. With a significant tenure at NIMHANS and key roles in geriatric psychiatry services, he has made notable contributions to the field. Dr. Varghese's extensive research, collaborations with national and international organizations, and advisory board positions demonstrate his commitment to advancing mental healthcare. He has authored more than 150 publications in journals, monographs, and books on various cross-cultural aspects of mental health in developing countries.",
  },
  {
    title: "Dr. Nachiket Mor",
    qualification: "PhD in Economics",
    experience: "35 ",
    designation: "Independent Director",
    imgURL:
      "https://sukoonhealth.com/static/Nachiket-8ccb7257f10de045afe89750e7bf8ef8.jpg",
    discription:
      "Dr. Nachiket Mor, a leader in health systems design and policy, has been appointed as an Independent Director on the board of Sukoon Healthcare, an inpatient and outpatient psychiatric facility. He recently supported the Government of Meghalaya as a member of its Mental Health Policy drafting sub-committee and currently serves as a Commissioner on the Lancet Citizens Commission on Reimagining India's Health System. Previously, Dr. Mor held the position of India Country Director for the Bill & Melinda Gates Foundation and was a member of the Planning Commission's High-Level Expert Group on Universal Healthcare. He is also known for his contributions to the financial inclusion movement in India during his tenure on the Board of Directors of the Reserve Bank of India (RBI).",
  },
];

const BoardMembers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [indexNum, setIndexNum] = useState(0);

  const onClickImg = (index) => {
    setIsOpen(true);
    setIndexNum(index);
  };
  return (
    <div className="lg:px-20   lg:gap-10 w-full p-5 flex flex-col gap-5">
      <h1 className="lg:text-5xl text-2xl font-semibold font-serif  text-black/90">
        Meet Our Clinical Advisory Board Members
      </h1>

      <div className="">
        <Modal
          isOpen={isOpen}
          className="lg:m-32 lg:mt-20 lg:text-xl px-5 pt-10  mt-10  h-[80%]    no-scrollbar    mx-3 rounded-2xl border shadow-2xl bg-white relative  text-sm text-gray-600 "
        >
          <div className="absolute right-0 top-0  flex justify-end  ">
            <button
              className="    bg-green-950 rounded-full  text-white  p-2"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose />
            </button>
          </div>
          <div className="h-[105%]   overflow-y-scroll no-scrollbar    ">
            <div className="sm:flex-row sm:gap-6  flex gap-3    flex-col justify-center">
              <img
                className="w-[70%] mx-auto"
                src={data[indexNum].imgURL}
                alt=""
              />
              <div className="sm:flex sm:flex-col flex flex-col gap-3  sm:gap-5">
                <h1>
                  <span className="text-black font-medium">Name:</span>{" "}
                  {data[indexNum].title}
                </h1>
                <h1>
                  <span className="text-black font-medium">Qualification:</span>{" "}
                  {data[indexNum].qualification}
                </h1>
                <h1>
                  <span className="text-black font-medium">Desigination:</span>{" "}
                  {data[indexNum].designation}
                </h1>
                <p className="leading-relaxed">{data[indexNum].discription}</p>
              </div>
            </div>
          </div>
        </Modal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-36 lg:grid-cols-3 gap-8 px-4 ">
        {data.map((item, index) => (
          <div className="" onClick={() => onClickImg(index)}>
            <div className="w-full h-96 relative">
              <button className="absolute flex justify-center items-center gap-1 right-0 py-1 px-6 m-4 rounded-md bg-[#075740] text-white">
                <TiShoppingBag className="text-white" />
                {item.experience} years
              </button>

              <div className="bg-black/10 w-full absolute flex flex-col gap-3 bottom-0 pl-7 text-white">
                <h1 className="text-2xl font-bold ">{item.title}</h1>
                <div>
                  <h1 className="text-lg font-semibold">
                    {item.qualification}
                  </h1>
                  <p className="">{item.designation}</p>
                </div>
              </div>
              <img
                className=" rounded-xl  h-full w-full"
                src={item.imgURL}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;
