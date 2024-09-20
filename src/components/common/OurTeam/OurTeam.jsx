import React, { useEffect, useState } from "react";

import OurTeamSliderComponent from "./OurTeamSliderComponent";
import { IoIosArrowForward } from "react-icons/io";

const OurTeam = ({ data }) => {
  const [ourTeamData, setOurTeamData] = useState(data);
  const [filterdTeamData, setFilterdTeamData] = useState([]);
  const [title1, setTitle1] = useState(false);
  const [title2, setTitle2] = useState(false);
  const [title3, setTitle3] = useState(false);
  const [title4, setTitle4] = useState(false);
  const [title5, setTitle5] = useState(false);
  const [title6, setTitle6] = useState(false);
  const [title7, setTitle7] = useState(false);

  useEffect(() => {
    onClickPsychiatrists();
  }, []);

  const onClickPsychiatrists = async () => {
    const data = await ourTeamData.filter(
      (item) => item.multidisciplinary_team.Slug === "psychiatrist"
    );
    await setFilterdTeamData(data);
    await console.log(filterdTeamData);

    setTitle1(true);
    setTitle2(false);
    setTitle3(false);
    setTitle4(false);
    setTitle5(false);
    setTitle6(false);
    setTitle7(false);
  };
  const onClickPsychologists = async () => {
    const data = await ourTeamData.filter(
      (item) => item.multidisciplinary_team.Slug === "psychologists"
    );
    await setFilterdTeamData(data);
    await console.log(filterdTeamData);

    setTitle1(false);
    setTitle2(true);
    setTitle3(false);
    setTitle4(false);
    setTitle5(false);
    setTitle6(false);
    setTitle7(false);
  };
  const onClickOccupationalTherapists = async () => {
    const data = await ourTeamData.filter(
      (item) => item.multidisciplinary_team.Slug === "occupational-therapists"
    );
    await setFilterdTeamData(data);
    await console.log(filterdTeamData);

    setTitle1(false);
    setTitle2(false);
    setTitle3(true);
    setTitle4(false);
    setTitle5(false);
    setTitle6(false);
    setTitle7(false);
  };
  const onClickArtBasedTherapists = async () => {
    const data = await ourTeamData.filter(
      (item) => item.multidisciplinary_team.Slug === "art-based-therapists"
    );
    await setFilterdTeamData(data);
    await console.log(filterdTeamData);
    setTitle1(false);
    setTitle2(false);
    setTitle3(false);
    setTitle4(true);
    setTitle5(false);
    setTitle6(false);
    setTitle7(false);
  };
  const onClickPSW = async () => {
    const data = await ourTeamData.filter(
      (item) => item.multidisciplinary_team.Slug === "psw"
    );
    await setFilterdTeamData(data);
    await console.log(filterdTeamData);
    setTitle1(false);
    setTitle2(false);
    setTitle3(false);
    setTitle4(false);
    setTitle5(true);
    setTitle6(false);
    setTitle7(false);
  };
  const onClickNursing = async () => {
    const data = await ourTeamData.filter(
      (item) => item.multidisciplinary_team.Slug === "nursing"
    );
    await setFilterdTeamData(data);
    await console.log(filterdTeamData);
    setTitle1(false);
    setTitle2(false);
    setTitle3(false);
    setTitle4(false);
    setTitle5(false);
    setTitle6(true);
    setTitle7(false);
  };
  const onClickClinicalAdvisoryBoard = async () => {
    const data = await ourTeamData.filter(
      (item) => item.multidisciplinary_team.Slug === "clinical-advisory-board"
    );
    await setFilterdTeamData(data);
    await console.log(filterdTeamData);

    setTitle1(false);
    setTitle2(false);
    setTitle3(false);
    setTitle4(false);
    setTitle5(false);
    setTitle6(false);
    setTitle7(true);
  };

  return (
    <div className="w-full lg:flex lg:flex-col lg:gap-10 px-4 lg:px-20 py-10">
      <div className="w-full flex flex-col  lg:gap-5 gap-5 ">
        <div className="flex w-full  justify-between">
          <h1 className="text-2xl  lg:text-5xl font-serif font-semibold">
            Our Multidisciplinary Team
          </h1>
          <button className="bg-[#075740] lg:block hidden  p-5 text-xl font-semibold rounded-lg text-white">
            Book Appointment
          </button>
        </div>
        <h2 className="lg:text-2xl text-lg  lg:w-8/12 font-medium text-gray-600">
          Our experienced psychiatrists, psychologists, doctors, and counsellors
          are committed to your recovery.
        </h2>
        <div className="group  flex no-scrollbar pb-5 overflow-x-scroll  w-full gap-5">
          <button
            onClick={onClickPsychiatrists}
            className={`${
              title1 && "order-first bg-blue-300/20"
            }  flex p-2 lg:p-3 text-nowrap  lg:text-xl lg:font-semibold lg:text-gray-700 lg:rounded-xl  border text-center justify-center rounded-md w-full `}
          >
            Psychiatrists
          </button>
          <button
            onClick={onClickPsychologists}
            className={`${
              title2 && "order-first bg-blue-300/20"
            }  flex p-2 lg:p-3 lg:text-xl text-nowrap  lg:font-semibold lg:text-gray-700 lg:rounded-xl  border text-center justify-center rounded-md w-full `}
          >
            Psychologists
          </button>
          <button
            onClick={onClickOccupationalTherapists}
            className={`${
              title3 && "order-first bg-blue-300/20"
            }  flex p-2 lg:p-3 text-nowrap  lg:text-xl lg:font-semibold lg:text-gray-700 lg:rounded-xl  border text-center justify-center rounded-md w-full `}
          >
            Occupational therapists
          </button>
          <button
            onClick={onClickArtBasedTherapists}
            className={`${
              title4 && "order-first bg-blue-300/20"
            }  flex p-2 lg:p-3 text-nowrap  lg:text-xl lg:font-semibold lg:text-gray-700 lg:rounded-xl  border text-center justify-center rounded-md w-full `}
          >
            Art Based Therapists
          </button>
          <button
            onClick={onClickPSW}
            className={`${
              title5 && "order-first bg-blue-300/20"
            }  flex p-2 lg:p-3 text-nowrap  lg:text-xl lg:font-semibold lg:text-gray-700 lg:rounded-xl  border text-center justify-center rounded-md w-full `}
          >
            PSW
          </button>
          <button
            onClick={onClickNursing}
            className={`${
              title6 && "order-first bg-blue-300/20"
            }  flex p-2 lg:p-3 text-nowrap  lg:text-xl lg:font-semibold lg:text-gray-700 lg:rounded-xl  border text-center justify-center rounded-md w-full `}
          >
            Nursing
          </button>
          <button
            onClick={onClickClinicalAdvisoryBoard}
            className={`${
              title7 && "order-first bg-blue-300/20"
            }  flex p-2 lg:p-3 text-nowrap lg:text-xl lg:font-semibold lg:text-gray-700 lg:rounded-xl  border text-center justify-center rounded-md w-full `}
          >
            Clinical Advisory Board
          </button>
        </div>
        <OurTeamSliderComponent filterdTeamData={filterdTeamData} />
        <div className="w-full gap-3 lg:gap-5 flex text-center justify-center items-center lg:text-2xl text-xl">
          <h1 className="font-semibold">View All</h1>

          <IoIosArrowForward className="font-semibold" />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
