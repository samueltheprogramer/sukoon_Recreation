import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SliderForRoomsAndSuites({ data, title1, title2, title3, title4 }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  useEffect(() => {
    if (sliderRef.current) {
      const total = sliderRef.current.props.children.length;
      setTotalSlides(total);
    }
  }, [slideIndex]);
  var settings = {
    dots: true,
    customPaging: (i) => <div className="custom-dot"></div>,
    dotsClass: "slick-dots custom-dots  ",
    beforeChange: (current, next) => setSlideIndex(next + 1),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    /* responsive: [
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ], */
  };

  return (
    <div className="roomsAndSuites rounded-xl">
      <Slider ref={sliderRef} {...settings} className="rounded-xl">
        {title1 &&
          data[0]?.imgForTitle1?.map((item) => (
            <div className="rounded-xl  ">
              <img
                className="w-full h-60 lg:h-[38rem] bg-no-repeat bg-center bg-cover rounded-xl"
                src={item}
              />
            </div>
          ))}
        {title2 &&
          data[0]?.imgForTitle2?.map((item) => (
            <div>
              <img
                className="w-full h-60 lg:h-[38rem] bg-no-repeat bg-center bg-cover  rounded-xl"
                src={item}
              />
            </div>
          ))}
        {title3 &&
          data[0]?.imgForTitle3?.map((item) => (
            <div>
              <img
                className="w-full h-60 lg:h-[38rem] bg-no-repeat bg-center bg-cover  rounded-xl"
                src={item}
              />
            </div>
          ))}
        {title4 &&
          data[0]?.imgForTitle4?.map((item) => (
            <div>
              <img
                className="w-full h-60 lg:h-[38rem] bg-no-repeat bg-center bg-cover  rounded-xl"
                src={item}
              />
            </div>
          ))}
      </Slider>
      <div className="lg:px-20 lg:py-5 text-center px-4 lg:gap-32 lg:ml-10  flex w-full gap-5 justify-end items-center">
        <button className=" " onClick={previous}>
          <IoIosArrowBack className="lg:text-4xl text-2xl  text-white p-2 rounded-full bg-green-950" />
        </button>
        <button onClick={next}>
          <IoIosArrowForward className="lg:text-4xl text-2xl  text-white p-2 rounded-full bg-green-950" />
        </button>
      </div>
      <div
        className={`
        
        
        absolute lg:text-3xl lg:font-medium lg:-mt-16 lg:font-sans text-gray-500 flex   -mt-5  
         ${
           title1 && data[0]?.imgForTitle1?.length === 3
             ? "lg:gap-[20rem] gap-[6rem]"
             : title1 && data[0]?.imgForTitle1?.length === 4
             ? "lg:gap-[24rem] gap-[120px]"
             : "lg:gap-[16rem] gap-[4rem]"
         }
         ${
           title2 && data[0]?.imgForTitle2?.length === 3
             ? "lg:gap-[20rem] gap-[6rem]"
             : title2 && data[0]?.imgForTitle2?.length === 4
             ? "lg:gap-[24rem] gap-[120px]"
             : "lg:gap-[16rem] gap-[4rem]"
         }
         ${
           title3 && data[0]?.imgForTitle3?.length === 3
             ? "lg:gap-[20rem] gap-[6rem]"
             : title3 && data[0]?.imgForTitle3?.length === 4
             ? "lg:gap-[24rem] gap-[120px]"
             : "lg:gap-[16rem] gap-[4rem]"
         }
         ${
           title4 && data[0]?.imgForTitle4?.length === 3
             ? "lg:gap-[20rem] gap-[6rem]"
             : title4 && data[0]?.imgForTitle4?.length === 4
             ? "lg:gap-[24rem] gap-[120px]"
             : "lg:gap-[16rem] gap-[4rem]"
         }
        `}
      >
        <h1>0{slideIndex}</h1>
        <h1>
          0
          {(title1 && data[0]?.imgForTitle1?.length) ||
            (title2 && data[0]?.imgForTitle2?.length) ||
            (title3 && data[0]?.imgForTitle3?.length) ||
            (title4 && data[0]?.imgForTitle4?.length)}
        </h1>
      </div>
    </div>
  );
}

export default SliderForRoomsAndSuites;
