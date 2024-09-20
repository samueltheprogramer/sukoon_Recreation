import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ResidentalLoungesSlider({ data }) {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div
      id="residentalLounges"
      className="residentalLounges lg:pb-20 sm:pb-16 pb-12 slider-container rounded-xl lg:p-5 p-5 bg-zinc-100"
    >
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className="rounded-xl"
      >
        {data.map((item) => (
          <div>
            <div className="lg:flex-row-reverse lg:gap-20 bg-zinc-100 p-4 lg:p-20 flex flex-col  gap-10">
              <img
                className="lg:w-96 sm:w-80  w-full sm:ml-auto sm:mr-auto "
                src={item.imgURL}
                alt=""
              />
              <div className="flex flex-col gap-5 ">
                <h1 className="lg:text-5xl lg:font-bold text-3xl font-serif text-black/80">
                  {item.title}
                </h1>
                <p className="lg:text-2xl lg:font-normal leading-relaxed  font-medium text-gray-600 lg:leading-relaxed">
                  {item.discription}
                </p>
                <div className="lg:flex-row sm:flex-row sm:w-full   flex flex-col gap-5 lg:gap-10 ">
                  <button className=" lg:w-60 sm:w-full bg-green-950/90 p-4 rounded-lg text-white w-full font-semibold">
                    Book Appointment
                  </button>
                  <button className="lg:w-60 sm:w-full bg-white p-4 rounded-lg text-green-950/90 border-2 border-green-950/90 w-full font-semibold">
                    Take a tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button
        className="absolute lg:left-[35%] sm:left-[30%]  mt-5   left-8"
        onClick={previous}
      >
        <IoIosArrowBack className="lg:text-6xl  text-3xl text-green-800" />
      </button>
      <button
        onClick={next}
        className="absolute mt-5 lg:right-[35%] sm:right-[30%]   right-8 "
      >
        <IoIosArrowForward className="lg:text-6xl  text-3xl text-green-800" />
      </button>
    </div>
  );
}

export default ResidentalLoungesSlider;
