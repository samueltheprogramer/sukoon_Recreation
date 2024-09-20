import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import OurLocationCard from "./OurLocationCard";

const OurLocations = () => {
  return (
    <div className="p-4 lg:px-20 lg:py-10 flex flex-col gap-10">
      <div className="flex gap-3 flex-col">
        <h1 className="text-2xl lg:text-5xl lg:text-slate-800 font-serif font-bold ">
          Our Locations
        </h1>
        <h1 className="font-medium lg:text-2xl sm:text-xl text-gray-400">
          Our spaces are thoughtfully designed to support the recovery journey
          while providing comfort, safety and privacy.
        </h1>
      </div>
      <div className="flex flex-col gap-5 lg:w-full  justify-around  items-center lg:flex-row  ">
        <OurLocationCard
          location="Gurgaon"
          paragraph="Our NABH-accredited mental health hospital offers residential and outpatient services. It has psychiatric ICUs, 24*7 emergency care, and a female wing."
          ImgUrl="https://sukoonhealth.com/static/gurgaon-facility-4451589ae25d0723ddd966f56d517a88.webp"
        />
        <OurLocationCard
          location="New Delhi"
          paragraph="Located in GK I, our outpatient clinic provides psychiatric consults, rTMS, and therapy for all mental health concerns."
          ImgUrl="https://sukoonhealth.com/static/south-Delhi-facility-3b41764e81a176df5744486593f1f244.webp"
        />
        <OurLocationCard
          location="Chhatarpur"
          paragraph="Our alcohol, substance, and habit rehabilitation facility is a safe space spread over an acre in Chattarpur Farms."
          ImgUrl="https://sukoonhealth.com/static/chhatarpur-facility-7a4f030a6a57b45a8d528bede45ba5c6.webp"
        />
        <OurLocationCard
          location="Bengaluru"
          paragraph="Our mental health hospital in Bengaluru offers both residential and outpatient services. It is fully equipped with psychiatric ICUs, 24*7 emergency care, and amenities for a comfortable stay."
          ImgUrl="https://sukoonhealth.com/static/bangalore-facility-9f49c4695f89dc3b864f37f14768bacb.webp"
        />
      </div>
    </div>
  );
};

export default OurLocations;
