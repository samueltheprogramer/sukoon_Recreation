import React from "react";

const Hero = () => {
  return (
    <div
      className={` lg:flex lg:flex-col  lg:justify-center lg:items-center w-full bg-no-repeat bg-cover bg-center h-[50vh] sm:h-[60vh] lg:h-[90vh] bg-[url("https://sukoonhealth.com/static/chattarpur-bg-394ef1fd33c5bd4dc4b54cb417eedbdd.png")] lg:bg-[url("https://sukoonhealth.com/static/blog-banner-d745e8fc39820b80575a1b7b95159c33.png")]`}
    >
      <div className="lg:justify-center lg:items-start lg:px-20 lg:gap-6 bg-black/60 text-white flex flex-col sm:gap-6 gap-3 w-full h-[50%] sm:h-[60%] lg:h-[90%] absolute  z-20 p-5 lg:pt-10 ">
        <h1 className="text-[19px] lg:text-3xl sm:text-2xl font-bold ">
          Discover
        </h1>
        <img
          className="bg-white/80 rounded-lg w-28"
          src="https://sukoonhealth.com/static/efd3d9e26b744ff3fcf665be2c370692/68587/mbllogo.webp"
          alt=""
        />
        <h1 className="text-xl  font-bold lg:text-3xl  sm:text-2xl font-serif">
          Blog
        </h1>
        <h2 className="text-xl lg:text-3xl  font-medium  font-serif">
          Backed by research, verified by our clinical experts
        </h2>
        <p className="text-xs lg:text-3xl sm:text-lg sm:font-light leading-loose">
          If you are here, it means you care. Our blogs aim to simplify mental
          health disorders in India and turn hushed conversations to dialogues
          open for all.
        </p>
      </div>
    </div>
  );
};

export default Hero;
