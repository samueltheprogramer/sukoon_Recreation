import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    title: " Therapy Chambers",
    imgURL:
      "https://sukoonhealth.com/static/therapy_chambers_mob-0c40e4af7f5333e88343fba6ce7d3cf5.png",
    discription:
      "Understand yourself under the guidance of our expert therapists and clinical psychologists. Enjoy the view of our pool while you share in a safe and private environment.",
  },
  {
    title: " Full-suite spa bathroom",
    imgURL:
      "https://sukoonhealth.com/static/spa_fullsuite-2c88c7a103bc10eb1c7e9dd36e41e39b.svg",
    discription:
      "Experience the therapeutic effects of water and heal your mind and body with our state-of-the-art jacuzzi, steam, and showers.",
  },
];

const Spa = () => {
  var settings = {
    infinite: false,
    dots: true,
    customPaging: (i) => <div className="custom-dot"></div>,
    dotsClass: "slick-dots custom-dots  ",
  };
  return (
    <div className="flex flex-col lg:gap-16 gap-5">
      <div className="flex flex-col gap-5">
        <h1 className="lg:text-4xl text-2xl font-semibold font-serif text-black/70">
          Spa
        </h1>
        <p className="lg:text-2xl text-lg text-gray-500 font-[450]">
          Enjoy a complimentary massage every week from our licensed in-house
          massage therapists in our relaxing spa which overlooks a private
          terrace garden
        </p>
      </div>
      <div className="lg:hidden sm:py-5">
        <Slider {...settings}>
          {data.map((item) => (
            <div>
              <div className="p-1 sm:py-5 sm:w-6/12 sm:shadow-xl sm:rounded-xl">
                <img
                  className="h-60 w-full sm:rounde-xl"
                  src={item.imgURL}
                  alt=""
                />
                <div className="p-3 flex flex-col gap-2">
                  <h1 className="text-xl font-semibold text-gray-700">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed text-gray-700 font-400">
                    {item.discription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="lg:flex w-full justify-center items-center  flex-col gap-10 hidden ">
        <div className="flex gap-10  w-full  justify-center items-center   ">
          <div
            style={{ backgroundImage: `url(${data[0].imgURL})` }}
            className="w-[35rem] h-72 bg-no-repeat bg-cover bg-center "
          ></div>

          <div className=" w-6/12 flex flex-col gap-5">
            <h1 className="text-3xl font-semibold text-gray-800">
              {data[0].title}
            </h1>
            <p className="text-2xl leading-relaxed text-gray-600 font-400">
              {data[0].discription}
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-10  w-full  justify-center items-center   ">
          <div
            style={{ backgroundImage: `url(${data[1].imgURL})` }}
            className="w-[35rem] h-72 bg-no-repeat bg-cover bg-center "
          ></div>

          <div className=" w-6/12 flex flex-col gap-5">
            <h1 className="text-3xl font-semibold text-gray-800">
              {data[1].title}
            </h1>
            <p className="text-2xl leading-relaxed font-400 text-gray-600">
              {data[1].discription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spa;
