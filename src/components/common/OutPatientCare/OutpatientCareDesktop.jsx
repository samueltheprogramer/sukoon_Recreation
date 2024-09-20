import React, { useState } from "react";

const OutpatientCareDesktop = ({ data }) => {
  const [slide1, setSlide1] = useState(false);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [slide4, setSlide4] = useState(false);
  const [slide5, setSlide5] = useState(false);
  const [slide6, setSlide6] = useState(false);
  const [slide7, setSlide7] = useState(false);

  const onClickSlide1 = () => {
    setSlide1(!slide1);
    setSlide2(false);
    setSlide3(false);
    setSlide4(false);
    setSlide5(false);
    setSlide6(false);
    setSlide7(false);
  };
  const onClickSlide2 = () => {
    setSlide1(false);
    setSlide2(!slide2);
    setSlide3(false);
    setSlide4(false);
    setSlide5(false);
    setSlide6(false);
    setSlide7(false);
  };
  const onClickSlide3 = () => {
    setSlide1(false);
    setSlide2(false);
    setSlide3(!slide3);
    setSlide4(false);
    setSlide5(false);
    setSlide6(false);
    setSlide7(false);
  };
  const onClickSlide4 = () => {
    setSlide1(false);
    setSlide2(false);
    setSlide3(false);
    setSlide4(!slide4);
    setSlide5(false);
    setSlide6(false);
    setSlide7(false);
  };
  const onClickSlide5 = () => {
    setSlide1(false);
    setSlide2(false);
    setSlide3(false);
    setSlide4(false);
    setSlide5(!slide5);
    setSlide6(false);
    setSlide7(false);
  };
  const onClickSlide6 = () => {
    setSlide1(false);
    setSlide2(false);
    setSlide3(false);
    setSlide4(false);
    setSlide5(false);
    setSlide6(!slide6);
    setSlide7(false);
  };
  const onClickSlide7 = () => {
    setSlide1(false);
    setSlide2(false);
    setSlide3(false);
    setSlide4(false);
    setSlide5(false);
    setSlide6(false);
    setSlide7(!slide7);
  };
  return (
    <div className="px-20 w-full">
      <div
        id="OPcare"
        className="hidden  lg:flex no-scrollbar  overflow-x-scroll cursor-pointer py-10  gap-4  h-[38rem] "
      >
        <div
          onClick={onClickSlide1}
          className={`relative ${
            slide1 ? "w-[900%]" : "w-[100%]"
          }    text-center flex  flex-col justify-center items-center`}
        >
          <div className="bg-black/70 inset-0 absolute "></div>
          {!slide1 && (
            <h1 className="absolute  z-50 text-xl font-semibold  text-white">
              {data[0].title}
            </h1>
          )}
          {slide1 && (
            <div className="absolute flex flex-col gap-10 text-start px-10  z-50 text-xl font-semibold  text-white">
              <h1 className="text-3xl">{data[0].title}</h1>
              <p className="text-xl font-semibold leading-relaxed">
                {data[0].para}
              </p>
            </div>
          )}

          <img className="w-full h-full" src={data[0].imgURL} alt="" />
        </div>
        <div
          onClick={onClickSlide2}
          className={`relative ${
            slide2 ? "w-[900%]" : "w-[100%]"
          }   text-center flex  flex-col justify-center items-center`}
        >
          <div className="bg-black/70 inset-0 absolute "></div>
          {!slide2 && (
            <h1 className="absolute  z-50 text-xl font-semibold  text-white">
              {data[1].title}
            </h1>
          )}
          {slide2 && (
            <div className="absolute flex flex-col gap-10 text-start px-10  z-50 text-xl font-semibold  text-white">
              <h1 className="text-3xl">{data[1].title}</h1>
              <p className="text-xl font-semibold leading-relaxed">
                {data[1].para}
              </p>
            </div>
          )}
          <img className="w-full h-full" src={data[1].imgURL} alt="" />
        </div>
        <div
          onClick={onClickSlide3}
          className={`relative ${
            slide3 ? "w-[900%]" : "w-[100%]"
          }   text-center  flex flex-col justify-center items-center`}
        >
          <div className="bg-black/70 inset-0 absolute "></div>
          {!slide3 && (
            <h1 className="absolute  z-50 text-xl font-semibold  text-white">
              {data[2].title}
            </h1>
          )}
          {slide3 && (
            <div className="absolute flex flex-col gap-10 text-start px-10  z-50 text-xl font-semibold  text-white">
              <h1 className="text-3xl">{data[2].title}</h1>
              <p className="text-xl font-semibold leading-relaxed">
                {data[2].para}
              </p>
            </div>
          )}
          <img className="w-full h-full" src={data[2].imgURL} alt="" />
        </div>
        <div
          onClick={onClickSlide4}
          className={`relative ${
            slide4 ? "w-[900%]" : "w-[100%]"
          }   text-center  flex flex-col justify-center items-center`}
        >
          <div className="bg-black/70 inset-0 absolute "></div>
          {!slide4 && (
            <h1 className="absolute  z-50 text-xl font-semibold  text-white">
              {data[3].title}
            </h1>
          )}
          {slide4 && (
            <div className="absolute flex flex-col gap-10 text-start px-10  z-50 text-xl font-semibold  text-white">
              <h1 className="text-3xl">{data[3].title}</h1>
              <p className="text-xl font-semibold leading-relaxed">
                {data[3].para}
              </p>
            </div>
          )}
          <img className="w-full h-full" src={data[3].imgURL} alt="" />
        </div>
        <div
          onClick={onClickSlide5}
          className={`relative ${
            slide5 ? "w-[900%]" : "w-[100%]"
          }   text-center  flex flex-col justify-center items-center`}
        >
          <div className="bg-black/70 inset-0 absolute "></div>
          {!slide5 && (
            <h1 className="absolute  z-50 text-xl font-semibold  text-white">
              {data[4].title}
            </h1>
          )}
          {slide5 && (
            <div className="absolute flex flex-col gap-10 text-start px-10  z-50 text-xl font-semibold  text-white">
              <h1 className="text-3xl">{data[4].title}</h1>
              <p className="text-xl font-semibold leading-relaxed">
                {data[4].para}
              </p>
            </div>
          )}
          <img className="w-full h-full" src={data[4].imgURL} alt="" />
        </div>
        <div
          onClick={onClickSlide6}
          className={`relative ${
            slide6 ? "w-[900%]" : "w-[100%]"
          }   text-center  flex flex-col justify-center items-center`}
        >
          <div className="bg-black/70 inset-0 absolute "></div>
          {!slide6 && (
            <h1 className="absolute  z-50 text-xl font-semibold  text-white">
              {data[5].title}
            </h1>
          )}
          {slide6 && (
            <div className="absolute flex flex-col gap-10 text-start px-10  z-50 text-xl font-semibold  text-white">
              <h1 className="text-3xl">{data[5].title}</h1>
              <p className="text-xl font-semibold leading-relaxed">
                {data[5].para}
              </p>
            </div>
          )}
          <img className="w-full h-full" src={data[5].imgURL} alt="" />
        </div>
        <div
          onClick={onClickSlide7}
          className={`relative ${
            slide7 ? "w-[900%]" : "w-[100%]"
          }   text-center  flex flex-col justify-center items-center`}
        >
          <div className="bg-black/70 inset-0 absolute "></div>
          {!slide7 && (
            <h1 className="absolute  z-50 text-xl font-semibold  text-white">
              {data[6].title}
            </h1>
          )}
          {slide7 && (
            <div className="absolute flex flex-col gap-10 text-start px-10  z-50 text-xl font-semibold  text-white">
              <h1 className="text-3xl">{data[6].title}</h1>
              <p className="text-xl font-semibold leading-relaxed">
                {data[6].para}
              </p>
            </div>
          )}
          <img className="w-full h-full" src={data[6].imgURL} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OutpatientCareDesktop;
