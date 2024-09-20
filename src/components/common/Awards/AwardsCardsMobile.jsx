import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../images/awardImg1.png";
import img3 from "../../../images/awardImg3.png";

const AwardsCardsMobile = () => {
  var settings = {
    dots: true,
    customPaging: (i) => <div className="custom-dot"></div>,
    dotsClass: "slick-dots custom-dots  ",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="lg:hidden sm:hidden pb-5">
      <Slider {...settings}>
        <div className=" bg-white  rounded-xl p-5   ">
          <div className="w-full flex gap-5 mx-5 ">
            <img className="w-20 h-20 " src={img1} alt="" />
            <div className="w-8/12 text-sm justify-around flex flex-col">
              <h3 className="text-lg ">
                ET Health care award for best clinical services
              </h3>
              <h1 className="font-semibold ">-ET Healthcare</h1>
            </div>
          </div>
        </div>
        <div className=" bg-white  rounded-lg  p-5">
          <div className="w-full flex gap-5">
            <img
              className="w-20 h-20"
              src="https://sukoonhealth.com/static/Accrediation_1-d79e37a25c6898d9d3e9eb0bdffcb5ff.png"
              alt=""
            />
            <div className="w-8/12 text-sm justify-around flex flex-col">
              <h3 className="text-lg">NABH Accredited Facility award</h3>
              <h1 className="font-semibold">-NABH</h1>
            </div>
          </div>
        </div>
        <div className=" bg-white  rounded-lg p-5 ">
          <div className="flex w-full gap-5">
            <img className="w-20 h-20" src={img3} alt="" />
            <div className="w-8/12 text-sm justify-around flex flex-col">
              <h3 className="text-lg">
                Make in Award for Best Psychiatric Hospital
              </h3>
              <h1 className="font-semibold">-Make In India</h1>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AwardsCardsMobile;
