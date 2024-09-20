import React from "react";

const data = [
  {
    title: "Cafe",
    imgURL: `
      https://sukoonhealth.com/static/dining_cafe-5f665f673548b4042b82834627c44352.svg`,
  },
  {
    title: "Room Service",
    imgURL: `https://sukoonhealth.com/static/dining_room_service-6f3535f33536edc8ea546d4b67cbe552.svg`,
  },
  {
    title: "Wellness Cafe",
    imgURL: `https://sukoonhealth.com/static/dining_wellness_cafe-6422b697cf49145d8cea1f096e893bcd.svg`,
  },
  {
    title: "Al-Fresco Dining",
    imgURL: `https://sukoonhealth.com/static/dining_al_fresco-828c01b1a02915949b216ec62fcd2122.svg`,
  },
];

const Dinner = () => {
  return (
    <div className=" w-full flex flex-col lg:gap-10 gap-5 h-full">
      <div className="flex flex-col gap-5">
        <h1 className="lg:text-4xl  text-2xl font-semibold font-serif text-black/70">
          Dining
        </h1>
        <p className="lg:text-2xl lg:leading-relaxed text-lg text-gray-500 font-[450]">
          Our clinical nutritionist helps residents create personalised meal
          plans involving a freshly prepared variety of Indian and continental
          dishes
        </p>
      </div>
      <div className="lg:flex-row flex  flex-col gap-3 w-full  ">
        {data.map((item) => (
          <div className="w-full   relative text-white ">
            <h1 className="text-2xl sm:mr-auto sm:ml-auto lg:w-[284px]  sm:w-72 font-semibold bottom-0 lg:left-3 sm:left-[14rem] w-full text-start p-5 bg-black/30 absolute">
              {item.title}
            </h1>
            <img
              className=" w-full sm:w-72 sm:mr-auto sm:ml-auto bg-no-repeat  bg-cover bg-center"
              src={item.imgURL}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dinner;
