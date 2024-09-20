import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

const data = [
  {
    title: "Swimming",
    imgURL:
      "https://sukoonhealth.com/static/Swimming-web-3473502966b1c9990a7f5724679e87d6.png",
  },
  {
    title: "Badminton",
    imgURL:
      "https://sukoonhealth.com/static/Badminton-web-f0f5e12c2848f7f16ecd72b0609a8719.png",
  },
  {
    title: "Mini Golfing",
    imgURL:
      "https://sukoonhealth.com/static/Mini-Golfing-e5f98bf132281e2a8a69026fb72b28ed.png",
  },
  {
    title: "Horticulture",
    imgURL:
      "https://sukoonhealth.com/static/Horticulture-web-9f351a38bf80af99294f7f637b02ba7b.png",
  },
  {
    title: "Archery",
    imgURL:
      "https://sukoonhealth.com/static/Archery-web-4753e019bc7275478d31f63141275c71.png",
  },
  {
    title: "Pool",
    imgURL:
      "https://sukoonhealth.com/static/Pool-web-5fbc5be40f994e994a4d7f7aa58612f5.png",
  },
  {
    title: "Dog Therapy",
    imgURL:
      "https://sukoonhealth.com/static/Dog-Therapy-web-018da8833d23f46cb1718eba3952254c.png",
  },
  {
    title: "Cooking Classes",
    imgURL:
      "https://sukoonhealth.com/static/Cooking-Classes-web-67eda0295e27f795113eb0f0eb4ebcf3.png",
  },
  {
    title: "Gaming",
    imgURL:
      "https://sukoonhealth.com/static/Gaming-web-8d76090c0df138f760fba015cf0d3063.png",
  },
  {
    title: "Art Classes",
    imgURL:
      "https://sukoonhealth.com/static/Art-Classes-2bbcd55f23e7cede23148bbfd178cea2.png",
  },
];

const RecreationalActivities = () => {
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
    dotsClass: "slick-dots custom-dots  mt-10",
  };
  return (
    <div className=" lg:px-10 sm:py-10 lg:pt-5 pb-10  lg:pb-16 p-5 flex flex-col gap-10">
      <div className="lg:px-20 lg:gap-8  flex flex-col gap-3">
        <h1 className="lg:text-5xl lg:font-semibold lg:black/90 text-2xl text-black/80 font-serif font-semibold">
          Recreational Activities
        </h1>
        <p className="lg:text-2xl lg:leading-relaxed lg:font-450 lg:text-gray-500  text-gray-700 leading-relaxed font-500">
          There is never a dull moment at the Sukoon Recovery Centres. Access a
          wide array of recreational activities at Sukoon’s alcohol, habit, and
          drug rehabilitation centres in Delhi
        </p>
      </div>
      <div className="lg:px-20 lg:relative  relative">
        <img
          className="hidden lg:block lg:absolute bottom-0 left-0"
          src="https://sukoonhealth.com/static/recreational_flowerBg-df759c7e93d1828a9329a2934c1e76e6.png"
          alt=""
        />
        <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
          {data.map((item) => (
            <div>
              <div className="lg:px-[20rem] flex flex-col gap-3 mx-2">
                <h1 className="lg:text-2xl w-full text-lg text-black/80 font-semibold font-serif text-center">
                  {item.title}
                </h1>
                <img
                  className="rounded-lg lg:px-0 sm:px-20"
                  src={item.imgURL}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Slider>

        <button
          className="absolute lg:left-[35%] sm:left-[23%] mt-4  lg:mt-2   left-8"
          onClick={previous}
        >
          <IoIosArrowBack className="lg:text-6xl  text-3xl text-green-800" />
        </button>
        <button
          onClick={next}
          className="absolute lg:right-[35%] sm:right-[23%] mt-4 lg:mt-2  right-8 "
        >
          <IoIosArrowForward className="lg:text-6xl  text-3xl text-green-800" />
        </button>
      </div>
    </div>
  );
};

export default RecreationalActivities;
