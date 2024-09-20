import React from "react";

const MedantaHospital = () => {
  return (
    <div className=" w-full p-5 lg:px-20 ">
      <div className="bg-[#075740]  lg:justify-center lg:items-center  lg:flex-row flex flex-col rounded-3xl p-10 gap-5">
        <p className="bg-gradient-to-r from-[#075740] via-white/15     to-[#075740]  text-white leading-relaxed lg:w-fit lg:h-fit lg:px-10 lg:text-2xl lg:leading-relaxed">
          Sukoon Health is privileged to collaborate with Medanta Hospital as
          our general healthcare partner for our acute facility residents.
        </p>
        <img
          className="lg:w-96 sm:w-80 sm:ml-auto sm:mr-auto lg:hidden"
          src="https://sukoonhealth.com/static/medanta_resp-d48aef6012250d8d24437d82be847fbe.png"
          alt=""
        />
        <img
          className="lg:w-72 hidden lg:block"
          src="https://sukoonhealth.com/static/medanta_web-3c04737527df7b3d12c86effbe976494.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default MedantaHospital;
