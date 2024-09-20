import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const InnerNavigationForBengaluru = () => {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const onClickButton1 = () => {
    setButton1(true);
    setButton2(false);
    setButton3(false);
  };
  const onClickButton2 = () => {
    setButton1(false);
    setButton2(true);
    setButton3(false);
  };
  const onClickButton3 = () => {
    setButton1(false);
    setButton2(false);
    setButton3(true);
  };
  return (
    <div className="group w-full lg:flex lg:text-xl lg:gap-20 text-center no-scrollbar lg:px-40 p-4 flex gap-5  overflow-x-scroll ">
      <AnchorLink
        onClick={onClickButton1}
        className={`${
          button1 && "order-first lg:order-none bg-blue-100/70"
        } w-full lg:p-6  text-nowrap border p-3  rounded-lg font-semibold `}
        href="#Rooms&Suites"
      >
        Rooms & Suites
      </AnchorLink>
      <AnchorLink
        onClick={onClickButton2}
        className={`${
          button2 && "order-first lg:order-none bg-blue-100/70"
        } w-full lg:p-6 text-nowrap border p-3  rounded-lg font-semibold `}
        href="#OPcare"
      >
        Outpatient
      </AnchorLink>
      <AnchorLink
        onClick={onClickButton3}
        className={`${
          button3 && "order-first lg:order-none bg-blue-100/70"
        } w-full lg:p-6 text-nowrap border p-3  rounded-lg font-semibold `}
        href="#services"
      >
        Services
      </AnchorLink>
    </div>
  );
};

export default InnerNavigationForBengaluru;
