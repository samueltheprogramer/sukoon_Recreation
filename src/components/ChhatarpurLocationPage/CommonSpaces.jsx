import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommonSpaces = ({ data }) => {
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
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div id="commonSpaces" className="pb-5">
      <h1 className="lg:text-5xl lg:px-20   px-4 text-2xl text-black/80 font-semibold font-serif">
        Common Spaces
      </h1>
      <div className="p-2 ">
        <div className=" p-3 m-2 rounded-xl h-full w-full">
          <Slider {...settings} ref={(slide) => (sliderRef = slide)}>
            {data.map((item, index) => (
              <div className="p-5 h-full w-full bg-zinc-100 rounded-xl">
                <div className="lg:flex-row lg:gap- lg:p-10 h-full w-full flex flex-col gap-2">
                  <div className=" sm:w-80 sm:ml-auto sm:mr-auto lg:hidden ">
                    <img src={item.imgURLMobile} alt="" />
                  </div>
                  <div className="lg:w-full -ml-20    hidden lg:flex">
                    <img
                      className="h-fit bg-cover  lg:full lg:h-96 w-full"
                      src={item.imgURLDesktop}
                      alt=""
                    />
                  </div>
                  <div className="flex  lg:-ml-20 flex-col gap-2 lg:gap-5 lg:justify-center lg:items-start ">
                    <h1 className="font-semibold lg:text-4xl text-gray-700 text-xl">
                      {item.heading}
                    </h1>
                    <p className="lg:w-10/12 lg:text-2xl lg:font-normal text-sm font-medium flex w-full leading-relaxed text-gray-600">
                      {item.discription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <button
          className="absolute lg:left-[36%]  sm:left-[30%]   left-8"
          onClick={previous}
        >
          <IoIosArrowBack className="lg:text-6xl  text-3xl text-green-800" />
        </button>
        <button
          onClick={next}
          className="absolute lg:right-[35%]  sm:right-[30%]  right-8 "
        >
          <IoIosArrowForward className="lg:text-6xl  text-3xl text-green-800" />
        </button>
      </div>
    </div>
  );
};

export default CommonSpaces;
