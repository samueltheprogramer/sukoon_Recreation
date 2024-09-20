import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../images/h&wImg.png";

const HealthAndWellnessStudio = ({ data }) => {
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
    <div id="hws" className="lg:py-10 py-5  ">
      <div className="p-4 lg:px-20 flex flex-col gap-3">
        <h1 className="lg:text-5xl  text-2xl text-black/80 font-semibold font-serif w-10/12">
          Health & Wellness Studios
        </h1>
        <p className="lg:text-2xl lg:font-normal lg:leading-relaxed text-gray-500 font-medium  ">
          Our evidence-based treatment plans target both your mental and
          physical well-being. Discover a stronger, healthier version of
          yourself with our thoughtfully designed health studios staffed by our
          in-house physiotherapists, yoga therapists, and fitness therapists.
        </p>
      </div>
      <div className="p-2 ">
        <div className=" p-3 lg:px-16 lg:-mt-16 lg:py-20 m-2 rounded-xl h-full w-full">
          <Slider {...settings} ref={(slide) => (sliderRef = slide)}>
            {data.map((item, index) => (
              <div className=" h-full sm:w-full w-full bg-zinc-100  lg:bg-white  rounded-xl">
                <div className="lg:flex-row  lg:gap-20  lg:p-10 h-full w-full flex flex-col gap-2 p-5">
                  <div className=" w-full sm:w-full sm:flex sm:justify-center  sm:ml-auto sm:mr-auto lg:hidden   ">
                    <img className="" src={item.imgURLMobile} alt="" />
                  </div>
                  <div
                    className=" w-full  p-5 lg:h-[70%] lg:z-50 lg:my-10   lg:-mr-52
                    hidden lg:flex flex-col gap-2"
                  >
                    <div className="  w-full">
                      <img className="w-full" src={item.imgOneURL} alt="img" />
                    </div>
                    <div className="flex w-full   gap-2  ">
                      <img className=" w-full" src={item.imgTwoURL} alt="img" />
                      <img
                        className="w-full "
                        src={item.imgThreeURL}
                        alt="img"
                      />
                    </div>
                  </div>

                  <div className="flex  relative lg:bg-zinc-100  flex-col gap-2 lg:gap-5 lg:justify-center lg:items-start lg:ml-20  lg:px-20 lg:py-10 ">
                    <h1 className="font-semibold lg:text-4xl text-gray-700 text-xl">
                      {item.heading}
                    </h1>
                    <p className=" lg:text-2xl lg:w-[40rem] lg:font-normal text-sm font-medium flex w-full leading-relaxed text-gray-600">
                      {item.discription}
                    </p>
                    <div className="hidden lg:block">
                      <img
                        className="absolute right-2 bottom-0 "
                        src={img}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button
          className="absolute lg:left-[36%] sm:left-[30%]  lg:-mt-[5rem]   left-8"
          onClick={previous}
        >
          <IoIosArrowBack className="lg:text-6xl  text-3xl text-green-800" />
        </button>
        <button
          onClick={next}
          className="absolute lg:right-[35%]  sm:right-[30%] lg:-mt-[5rem]  right-8 "
        >
          <IoIosArrowForward className="lg:text-6xl  text-3xl text-green-800" />
        </button>
      </div>
    </div>
  );
};

export default HealthAndWellnessStudio;
