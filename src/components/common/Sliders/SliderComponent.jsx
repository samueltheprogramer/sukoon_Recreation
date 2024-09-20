import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderComponentCard from "./SliderComponentCard";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function SliderComponent({ data }) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: true,
    customPaging: (i) => <div className="custom-dot"></div>,
    dotsClass: "slick-dots custom-dots  ",
    centerMode: true,
    centerPadding: "20%",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "1%",
        },
      },
    ],
  };
  return (
    <div id="feedbacks&recoverystories" className="slider-container ">
      <div
        id="feedbacks&recoverystories"
        className="feedbacksAndrecoverystories"
      >
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {data.map((item, index) => (
            <SliderComponentCard
              title={item.title}
              content={item.content}
              communityName={item.communityName}
              headLetter={item.headLetter}
              designation={item.designation}
            />
          ))}
        </Slider>
      </div>
      <button
        className="absolute lg:left-[35%] sm:left-[30%]  mt-3    left-8"
        onClick={previous}
      >
        <IoIosArrowBack className="lg:text-6xl  text-3xl text-green-800" />
      </button>
      <button
        onClick={next}
        className="absolute mt-3 lg:right-[35%]  sm:right-[30%]  right-8 "
      >
        <IoIosArrowForward className="lg:text-6xl  text-3xl text-green-800" />
      </button>
    </div>
  );
}

/* */
