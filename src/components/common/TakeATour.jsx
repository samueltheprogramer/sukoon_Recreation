import React from "react";

const TakeATour = ({ videoURL, location }) => {
  return (
    <div className=" lg:px-20 w-full  lg:py-10 px-4 lg:gap-5 lg:justify-center lg:items-center py-5 flex flex-col justify-center items-center relative gap-5">
      <img
        className="absolute lg:w-36 w-24 -z-10 top-2 right-2 "
        src="https://sukoonhealth.com/static/e61317ea5643818eb07d703187da282a/8db0a/videoSection_flowerBg.webp"
        alt=""
      />
      <h1 className="lg:text-5xl text-start w-full text-2xl text-black/80   font-semibold font-serif">
        Take A Virtual Tour
      </h1>
      <p className="lg:text-2xl lg:text-start lg:w-full font-medium leading-relaxed text-gray-500">
        Check out our thoughtfully designed psychiatric hospital in {location}.
        Watch our facility walkthrough!
      </p>

      <iframe
        className="w-full lg:w-7/12 h-56 lg:h-[30rem] lg:mt-10  rounded-xl "
        src={videoURL}
        frameborder="0"
        allow="accelerometer; autoplay;  encrypted-media; gyroscope; "
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default TakeATour;
