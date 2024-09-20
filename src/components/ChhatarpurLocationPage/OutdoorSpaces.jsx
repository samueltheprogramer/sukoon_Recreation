import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

const data = [
  {
    title: "Jogging Trail",
    discription:
      "Kickstart your day with a walk, jog, or run on our jogging trails that span across our rehabilitation centre in Delhi.",
    imgURL:
      "https://sukoonhealth.com/static/jogging-trail-47c392ec35528b042b229a2bcb02dbf1.jpg",
  },
  {
    title: "Japanese Zen Garden",
    discription:
      "Sit in the garden or the verandah to experience calmness and peace in our tranquil zen garden.",
    imgURL:
      "https://sukoonhealth.com/static/zen-garden-694b02c695dbf22c640ab9759a1d1da5.png",
  },
  {
    title: "British Lawn",
    discription:
      "Watch a diverse species of birds and relax while you enjoy a cup of tea under a canopy of trees.",
    imgURL:
      "https://sukoonhealth.com/static/british-lawn-a0745c2ca1e8c185a05985b30e79562f.jpg",
  },
  {
    title: "Nursery",
    discription:
      "From relaxation and stress relief to formal therapist-directed programs, gardening boosts both your mental and emotional wellbeing",
    imgURL:
      "https://sukoonhealth.com/static/nursery-garden-f748ae231feb7af747bea874d530832d.jpg",
  },
];

const OutdoorSpaces = () => {
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
  };
  return (
    <div className="lg:hidden py-10">
      <div className="px-4 flex flex-col gap-4">
        <h1 className="text-2xl text-black/90 font-semibold font-serif">
          Outdoor Spaces
        </h1>
        <p className="text-lg text-gray-500  font-450">
          Nature can generate many positive emotions, such as calmness, joy, and
          creativity. Reflect in our Japanese Zen Garden, spot birds in our
          beautiful British Lawn, grow plants of your choosing in our nursery,
          or start your day on an energetic note with our jogging trails.
        </p>
      </div>
      <div>
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {data.map((item) => (
            <div>
              <div className="w-full p-5 flex flex-col gap-3 ">
                <div className="relative">
                  <h1 className="absolute  text-2xl w-full text-center bottom-5 font-bold text-white">
                    {item.title}
                  </h1>
                  <img
                    className="w-full sm:ml-auto sm:mr-auto sm:w-96 sm:bg-center sm:bg-none sm:bg-cover h-[25rem]"
                    src={item.imgURL}
                    alt=""
                  />
                </div>
                <p className="text-lg text-gray-500  font-450">
                  {item.discription}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <button
          className="absolute lg:left-[31%] sm:left-[30%]  lg:mt-4 mt-2 sm:mt-4   left-20"
          onClick={previous}
        >
          <IoIosArrowBack className="lg:text-6xl  text-3xl text-green-800" />
        </button>
        <button
          onClick={next}
          className="absolute lg:right-[35%] sm:right-[30%] lg:mt-4 mt-2 sm:mt-4  right-20 "
        >
          <IoIosArrowForward className="lg:text-6xl  text-3xl text-green-800" />
        </button>
      </div>
    </div>
  );
};

export default OutdoorSpaces;
