import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

const OurFacilities = () => {
  const api_key = "AIzaSyC1LmTCDnaR5y5K3or-TckA0cI0it7BzEo";

  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [lat, setLat] = useState(28.424882000000004);
  const [lng, setLng] = useState(77.092248);

  const onClickButton1 = () => {
    setButton1(true);
    setButton2(false);
    setButton3(false);
    setButton4(false);
    setLat(28.424882000000004);
    setLng(77.092248);
  };

  const onClickButton2 = () => {
    setButton1(false);
    setButton2(true);
    setButton3(false);
    setButton4(false);
    setLat(13.040681374826496);
    setLng(77.56269753373114);
  };

  const onClickButton3 = () => {
    setButton1(false);
    setButton2(false);
    setButton3(true);
    setButton4(false);
    setLat(28.5537576299257);
    setLng(77.23203708465661);
  };

  const onClickButton4 = () => {
    setButton1(false);
    setButton2(false);
    setButton3(false);
    setButton4(true);
    setLat(28.48749075409576);
    setLng(77.16849654232831);
  };

  return (
    <div className="lg:px-20 lg:mb-7 mb-5 sm:mb-[1rem] lg:py-5 p-4 flex flex-col gap-3 lg:gap-10 w-full sm:gap-4 ">
      <h1 className="lg:text-5xl text-3xl font-semibold font-serif text-black/90">
        Our Facilities
      </h1>
      <div className="group w-full lg:flex lg:text-xl lg:gap-5 text-center no-scrollbar flex gap-5 overflow-x-scroll">
        <button
          onClick={onClickButton1}
          className={`${
            button1 && "order-first lg:order-none bg-blue-100/70"
          } w-full lg:py-6 lg:px-16 text-nowrap border p-3 rounded-2xl font-semibold`}
        >
          Gurgaon
        </button>
        <button
          onClick={onClickButton2}
          className={`${
            button2 && "order-first lg:order-none bg-blue-100/70"
          } w-full lg:py-6 lg:px-16 text-nowrap border p-3 rounded-2xl font-semibold`}
        >
          Bengaluru
        </button>
        <button
          onClick={onClickButton3}
          className={`${
            button3 && "order-first lg:order-none bg-blue-100/70"
          } w-full lg:py-6 lg:px-16 text-nowrap border p-3 rounded-2xl font-semibold`}
        >
          Delhi
        </button>
        <button
          onClick={onClickButton4}
          className={`${
            button4 && "order-first lg:order-none bg-blue-100/70"
          } w-full lg:py-6 lg:px-16 text-nowrap border p-3 rounded-2xl font-semibold`}
        >
          Chhatarpur
        </button>
      </div>
      <div className="w-full h-[20rem] lg:h-[38rem] lg:w-full">
        <div className="w-full h-full">
          <div className="w-full h-full">
            {button1 && (
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sukoon%20Psychiatry%20Centre,%20Gurugram,%20Haryana+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps vehicle tracker</a>
              </iframe>
            )}
            {button2 && (
              <iframe
                width="100%"
                height="600"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sukoon%20Psychiatry%20Center%20-%20Bangalore+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps devices</a>
              </iframe>
            )}
            {button3 && (
              <iframe
                width="100%"
                height="600"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sukoon%20Centre%20for%20Mental%20Health,%20New%20Delhi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps vehicle tracker</a>
              </iframe>
            )}
            {button4 && (
              <iframe
                width="100%"
                height="600"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sukoon%20Recovery%20Centre,%20New%20Delhi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps vehicle tracker</a>
              </iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFacilities;
