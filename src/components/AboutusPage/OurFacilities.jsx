import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

const OurFacilities = () => {
  const api_key = "AIzaSyC1LmTCDnaR5y5K3or-TckA0cI0it7BzEo";
  const [button1, setButton1] = useState(false);
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

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: api_key,
  });

  const containerStyle = {
    width: "350px",
    height: "400px",
  };

  const center = {
    lat: lat,
    lng: lng,
  };

  if (loadError) return;
  if (!isLoaded) return;

  return (
    <div className="lg:px-20 lg:mb-20 mb-10 sm:mb-[4.5rem] lg:py-10 p-4 flex flex-col gap-3 lg:gap-5 sm:gap-4">
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
      <div className="w-56 h-96">
        <GoogleMap
          className="googleMap"
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default OurFacilities;
