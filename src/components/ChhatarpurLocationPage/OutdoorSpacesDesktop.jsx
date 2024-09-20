import React, { useRef, useState } from "react";
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

const OutdoorSpacesDesktop = () => {
  const [firstSlideIndex, setFirstSlideIndex] = useState(0);

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
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,

    beforeChange: (current, next) => setFirstSlideIndex(next),
  };

  console.log(firstSlideIndex);

  return (
    <div
      id="outdoorSpaces"
      className="lg:py-10 hidden lg:flex flex-col gap-16 "
    >
      <div className="px-4  flex flex-col gap-4">
        <h1 className="lg:text-5xl lg:px-32  text-2xl text-black/90 font-semibold font-serif">
          Outdoor Spaces
        </h1>
        <p className="text-lg lg:pl-32 lg:text-2xl text-gray-500  font-450">
          Nature can generate many positive emotions, such as calmness, joy, and
          creativity. Reflect in our Japanese Zen Garden, spot birds in our
          beautiful British Lawn, grow plants of your choosing in our nursery,
          or start your day on an energetic note with our jogging trails.
        </p>
      </div>
      <div className="bg-zinc-300/20 w-full relative flex px-10 py-20">
        <div className="w-5/12 pl-32 flex flex-col gap-3">
          <h1 className="text-3xl font-medium">
            {data[firstSlideIndex].title}
          </h1>
          <p className="text-2xl w-full text-gray-600    text-wrap">
            {data[firstSlideIndex].discription}
          </p>
        </div>
        <div className="w-7/12  ">
          <Slider {...settings} ref={(slide) => (sliderRef = slide)}>
            <div>
              <div className="p-2">
                <div
                  style={{ backgroundImage: `url(${data[0].imgURL})` }}
                  className={`bg-no-repeat  bg-cover bg-center w-full h-96`}
                >
                  <div className="flex p-5 justify-center items-end w-full h-full">
                    <h1
                      className={` ${
                        firstSlideIndex === 0 ? "block" : "hidden"
                      } bg-slate-200/75 w-32 h-20 px-2 pt-4 text-center  text-xl font-semibold  text-wrap `}
                    >
                      {data[0].title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p-2">
                <div
                  style={{ backgroundImage: `url(${data[1].imgURL})` }}
                  className={`bg-no-repeat  bg-cover bg-center w-full h-96`}
                >
                  <div className="flex p-5 justify-center items-end w-full h-full">
                    <h1
                      className={` ${
                        firstSlideIndex === 1 ? "block" : "hidden"
                      } bg-slate-200/75 w-32 h-20 px-2 pt-4 text-center  text-xl font-semibold  text-wrap `}
                    >
                      {data[1].title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p-2">
                <div
                  style={{ backgroundImage: `url(${data[2].imgURL})` }}
                  className={`bg-no-repeat  bg-cover bg-center w-full h-96`}
                >
                  <div className="flex p-5 justify-center items-end w-full h-full">
                    <h1
                      className={` ${
                        firstSlideIndex === 2 ? "block" : "hidden"
                      } bg-slate-200/75 w-32 h-20 px-2 pt-4 text-center  text-xl font-semibold  text-wrap `}
                    >
                      {data[2].title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p-2">
                <div
                  style={{ backgroundImage: `url(${data[3].imgURL})` }}
                  className={`bg-no-repeat  bg-cover bg-center w-full h-96`}
                >
                  <div className="flex p-5 justify-center items-end w-full h-full">
                    <h1
                      className={` ${
                        firstSlideIndex === 3 ? "block" : "hidden"
                      } bg-slate-200/75 w-32 h-20 px-2 pt-4 text-center  text-xl font-semibold  text-wrap `}
                    >
                      {data[3].title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <button
          className="absolute lg:left-[60%]   bottom-2 "
          onClick={previous}
        >
          <IoIosArrowBack className="lg:text-6xl  text-3xl text-green-800" />
        </button>
        <button
          onClick={next}
          className="absolute lg:right-[20%]   bottom-2   right-8 "
        >
          <IoIosArrowForward className="lg:text-6xl  text-3xl text-green-800" />
        </button>
      </div>
    </div>
  );
};

export default OutdoorSpacesDesktop;
