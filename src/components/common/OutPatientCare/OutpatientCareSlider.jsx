import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function OutpatientCareSlider({ data }) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
    console.log("first");
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: true,
    customPaging: (i) => <div className="custom-dot"></div>,
    dotsClass: "slick-dots custom-dots  ",
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container lg:rounded-none  lg:hidden   bg-zinc-100">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className=" lg:rounded-none slick-slider"
      >
        {data?.map((item) => (
          <div className=" lg:w-52 slick-list">
            {console?.log(data)}
            <div className="lg:flex-row-reverse  lg:w-full lg:h-[40rem] lg:gap-20  bg-zinc-100  lg:p-20 flex flex-col   gap-10">
              <img
                className="lg:w-96 rounded-none lg:absolute lg:h-full  w-full "
                src={item.imgURL}
                alt=""
              />
              <div className="flex flex-col px-4 gap-5 ">
                <h1 className="lg:text-5xl lg:font-bold text-xl font-semibold  font-serif text-black/80">
                  {item.title}
                </h1>
                <p className="lg:text-2xl  lg:font-normal leading-relaxed text-gray-600 lg:leading-relaxed">
                  {item.para}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button
        className="absolute lg:left-[31%]  sm:left-[30%]  mt-5   left-8"
        onClick={previous}
      >
        <IoIosArrowBack className="lg:text-6xl  text-3xl text-green-800" />
      </button>
      <button
        onClick={next}
        className="absolute mt-5 lg:right-[35%]  sm:right-[30%]  right-8 "
      >
        <IoIosArrowForward className="lg:text-6xl  text-3xl text-green-800" />
      </button>
    </div>
  );
}

export default OutpatientCareSlider;
