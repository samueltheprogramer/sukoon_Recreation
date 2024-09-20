import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurInfraStructureSlider() {
  const [slide1, setSlide1] = useState(true);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [slide4, setSlide4] = useState(false);
  const [slide5, setSlide5] = useState(false);
  const [dot1, setDot1] = useState(true);
  const [dot2, setDot2] = useState(false);
  const [dot3, setDot3] = useState(false);
  const [dot4, setDot4] = useState(false);
  const [dot5, setDot5] = useState(false);

  const onClickSlide1 = () => {
    setSlide1(true);
    setSlide2(false);
    setSlide3(false);
    setSlide4(false);
    setSlide5(false);
    setDot1(true);
    setDot2(false);
    setDot3(false);
    setDot4(false);
    setDot5(false);
  };
  const onClickSlide2 = () => {
    setSlide1(false);
    setSlide2(true);
    setSlide3(false);
    setSlide4(false);
    setSlide5(false);
    setDot2(true);
    setDot3(false);
    setDot4(false);
    setDot5(false);
  };
  const onClickSlide3 = () => {
    setSlide1(false);
    setSlide2(false);
    setSlide3(true);
    setSlide4(false);
    setSlide5(false);
    setDot2(true);
    setDot3(true);
    setDot4(false);
    setDot5(false);
  };
  const onClickSlide4 = () => {
    setSlide1(false);
    setSlide2(false);
    setSlide3(false);
    setSlide4(true);
    setSlide5(false);
    setDot2(true);
    setDot3(true);
    setDot4(true);
    setDot5(false);
  };
  const onClickSlide5 = () => {
    setSlide1(false);
    setSlide2(false);
    setSlide3(false);
    setSlide4(false);
    setSlide5(true);
    setDot2(true);
    setDot3(true);
    setDot4(true);
    setDot5(true);
  };

  return (
    <div className=" h-screen w-screen  relative ">
      <div className="text flex flex-col gap-10  px-5 text-xl w-full text-white absolute z-[50] bottom-10  ">
        <div className="w-full   flex flex-col justify-between  items-center  ">
          <div className="w-[80%] flex items-center absolute -z-20 top-4 bg-white h-[10px]">
            <div
              className={`bg-green-950 ${
                (slide1 && "w-[0%]") ||
                (slide2 && "w-[25%]") ||
                (slide3 && "w-[50%]") ||
                (slide4 && "w-[75%]") ||
                (slide5 && "w-[100%]")
              } border-2  h-[8px]`}
            ></div>
          </div>
          <div className="flex gap-16 w-full justify-between items-center ">
            <div
              onClick={onClickSlide1}
              className="flex cursor-pointer gap-5  flex-col text-center justify-center w-full items-center"
            >
              <div
                className={`${
                  dot1 ? "bg-green-950" : "bg-white"
                } w-10 h-10  rounded-full border-4 border-white`}
              ></div>
              <h1 className="flex w-52 ">Single Occupancy Rooms</h1>
            </div>
            <div
              onClick={onClickSlide2}
              className="flex cursor-pointer gap-5 flex-col text-center justify-center w-full items-center"
            >
              <div
                className={`${
                  dot2 ? "bg-green-950" : "bg-white"
                } w-10 h-10  rounded-full border-4  border-white`}
              ></div>
              <h1 className="flex w-52   ">Dedicated Female Wing</h1>
            </div>
            <div
              onClick={onClickSlide3}
              className="flex cursor-pointer gap-5 flex-col text-center justify-center w-full items-center"
            >
              <div
                className={`${
                  dot3 ? "bg-green-950" : "bg-white"
                } w-10 h-10  rounded-full border-4  border-white`}
              ></div>
              <h1 className="flex  w-52 ">Advanced Self- Harm Prevention</h1>
            </div>
            <div
              onClick={onClickSlide4}
              className="flex cursor-pointer gap-5 flex-col text-center justify-center w-full items-center"
            >
              <div
                className={`${
                  dot4 ? "bg-green-950" : "bg-white"
                } w-10 h-10  rounded-full border-4 border-white`}
              ></div>
              <h1 className="flex w-52 text-center justify-center items-center   h-14  ">
                Clinical Nutrition{" "}
              </h1>
            </div>
            <div
              onClick={onClickSlide5}
              className="flex cursor-pointer gap-5 flex-col text-center justify-center w-full items-center"
            >
              <div
                className={`${
                  dot5 ? "bg-green-950" : "bg-white"
                } w-10 h-10  rounded-full border-4 border-white`}
              ></div>
              <h1 className="flex text-center justify-center items-center h-14 w-52 ">
                Activity Spaces
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="  h-screen   w-screen justify-start items-start text-start ">
        {slide1 && (
          <div className="bg-[url('https://sukoonhealth.com/static/consulting-chamber-11ff18356f7415f9a161bc405dddb44b.webp')] h-screen  flex justify-start items-center bg-no-repeat bg-center bg-cover  w-screen">
            <div className="flex w-6/12 text-white py-20 px-10 h-full flex-col justify-center items-start gap-5 ">
              <h1 className="text-2xl border-l-2 p-2 font-bold">EXPLORE</h1>
              <h1 className="text-5xl font-semibold font-serif">
                Single Occupancy Rooms
              </h1>
              <p className="text-2xl ">
                Each resident has a private room designed per the APA facility
                guidelines for complete safety at our mental hospital and
                deaddiction centres. Recover in a spacious and comfortable
                environment.
              </p>
            </div>
          </div>
        )}
        {slide2 && (
          <div className="bg-[url('https://sukoonhealth.com/static/house-chamber-1fe7852f9e29fc796a638b61af53ce94.webp')] h-screen  w-full flex justify-start items-center bg-no-repeat bg-center bg-cover ">
            <div className="flex w-6/12 text-white py-20 px-10 h-full flex-col justify-center items-start gap-5 ">
              <h1 className="text-2xl border-l-2 p-2 font-bold">EXPLORE</h1>
              <h1 className="text-5xl font-semibold font-serif">
                Dedicated Female Wing
              </h1>
              <p className="text-2xl ">
                Our female residents have a separate wing managed by only female
                staff for an added layer of privacy and security
              </p>
            </div>
          </div>
        )}
        {slide3 && (
          <div className="bg-[url('https://sukoonhealth.com/static/modern-residence-4ac10ff9330dd19f5f6af8d905ad937b.webp')] h-screen  w-full flex justify-start items-center bg-no-repeat bg-center bg-cover ">
            <div className="flex w-6/12 text-white py-20 px-10 h-full flex-col justify-center items-start gap-5 ">
              <h1 className="text-2xl border-l-2 p-2 font-bold">EXPLORE</h1>
              <h1 className="text-5xl font-semibold font-serif">
                Advanced Self-Harm Prevention
              </h1>
              <p className="text-2xl ">
                Your safety is our responsibility. All our facilities are
                equipped with state-of-the-art measures and caretakers who help
                prevent self-harm.
              </p>
            </div>
          </div>
        )}
        {slide4 && (
          <div className="bg-[url('https://sukoonhealth.com/static/gourmet-meals-ffad9cf8ff4a07cc115378ad5219e489.webp')] h-screen  w-full flex justify-start items-center bg-no-repeat bg-center bg-cover ">
            <div className="flex w-6/12 text-white py-20 px-10 h-full flex-col justify-center items-start gap-5 ">
              <h1 className="text-2xl border-l-2 p-2 font-bold">EXPLORE</h1>
              <h1 className="text-5xl font-semibold font-serif">
                Clinical Nutrition
              </h1>
              <p className="text-2xl ">
                Our in-house chefs make delicious meals while our Clinical
                Nutritionist ensures they are healthy and suit your dietary
                needs.
              </p>
            </div>
          </div>
        )}
        {slide5 && (
          <div className="bg-[url('https://sukoonhealth.com/static/ActivityAreaBg-ccdadc8f0868ebb50161745637361938.webp')] h-screen  w-full flex justify-start items-center bg-no-repeat bg-center bg-cover ">
            <div className="flex w-6/12 text-white py-20 px-10 h-full flex-col justify-center items-start gap-5 ">
              <h1 className="text-2xl border-l-2 p-2 font-bold">EXPLORE</h1>
              <h1 className="text-5xl font-semibold font-serif">
                Activity Spaces
              </h1>
              <p className="text-2xl ">
                Staying active and engaged is fundamental to recovery. We have
                residential lounges, fitness centres, yoga studios, and more.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default OurInfraStructureSlider;
