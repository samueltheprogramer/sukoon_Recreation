import React from "react";

const EvidenceBasedTreatment = () => {
  return (
    <div className=" lg:px-20 px-4 lg:gap-5 lg:justify-center lg:items-center py-5 flex flex-col relative gap-5">
      <img
        className="absolute lg:w-36 w-24 -z-10 top-2 right-2 "
        src="https://sukoonhealth.com/static/e61317ea5643818eb07d703187da282a/8db0a/videoSection_flowerBg.webp"
        alt=""
      />
      <h1 className="lg:text-5xl lg:text-start lg:w-full text-2xl text-black/80   font-semibold font-serif">
        Evidence-based treatment delivered with care
      </h1>
      <p className="lg:text-2xl font-medium leading-relaxed text-gray-500">
        At Sukoon, we believe in providing the best clinical care with
        transparency, dignity, and confidentiality. Visit our centre and learn
        more about us
      </p>
      <iframe
        className="lg:h-[30rem] w-full lg:w-7/12 h-52 lg:mt-10  rounded-xl"
        src="https://www.youtube.com/embed/s7xnxvQS_SE?si=6a-sOAcdwYpBsJ9I"
        frameborder="0"
        allow="accelerometer; autoplay;  encrypted-media; gyroscope; "
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default EvidenceBasedTreatment;
