import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import OurTeamSliderCard from "./OurTeamSliderCard";

export default function OurTeamSliderComponent({ filterdTeamData }) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div className="slider-container no-scrollbar ">
      <div>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {/* data */}
          {filterdTeamData?.map((item) => (
            <OurTeamSliderCard filterdTeamData={item} />
          ))}
        </Slider>
      </div>
      <div className="text-center lg:mt-5  flex w-full gap-10 justify-start items-center">
        <button
          className="border-[2px] border-green-800  rounded-full "
          onClick={previous}
        >
          <IoIosArrowBack className="lg:text-4xl p-1 text-3xl text-green-800" />
        </button>
        <button
          className="border-2 border-green-800 rounded-full "
          onClick={next}
        >
          <IoIosArrowForward className="lg:text-4xl p-1 text-3xl text-green-800" />
        </button>
      </div>
    </div>
  );
}
