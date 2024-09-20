import React, { useState } from "react";
import img from "../../../images/dailyRoutineNode.svg";

const DailyRoutineDesktop = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [dotOne, setDotOne] = useState(true);
  const [dotTwo, setDotTwo] = useState(false);
  return (
    <div className="hidden  lg:flex flex-col gap-10  px-20 py-10 ">
      <h1 className="text-5xl font-semibold text-black/90 font-serif">
        Daily Routine
      </h1>
      <div className="w-full shadow-2xl  rounded-2xl  bg-zinc-400/15 pt-24 pb-40">
        {!isToggle && (
          <div className="element-one px-5 transform  duration-1000 ease-linear translate-x-5 divide-y-2 divide-black">
            <div className="top-sections w-full flex gap-10">
              <div className="-mb-[25px] w-4/12 -ml-4 flex ">
                <img className="rotate-180   scale-x-[-1]" src={img} alt="" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold ">Yoga</h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Our fitness therapists have designed effective classes that
                    will help you recover both physically & mentally
                  </p>
                </div>
              </div>
              <div className="-mb-[25px] w-4/12 -ml-4 flex ">
                <img className="rotate-180   scale-x-[-1]" src={img} alt="" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold ">Mental Gym</h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Depending on your needs,our therapists will conduct various
                    cognitive exercises to stimulate your brain.
                  </p>
                </div>
              </div>
              <div className="-mb-[25px] w-4/12  -ml-4 flex ">
                <img className="rotate-180   scale-x-[-1]" src={img} alt="" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold ">
                    Psychotherapy Session
                  </h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Build emotional strength & resilience in therapy with your
                    clinical psychologist in a private & comfortable environment
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom-section flex w-full ">
              <div className="ml-52 -mt-[25px] w-4/12    flex ">
                <img className="" src={img} alt="" />
                <div className="flex flex-col gap-2 pt-20">
                  <h1 className="text-2xl font-semibold ">
                    Psychiatric Consult
                  </h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Meet with your dedicated Psychiatrist! We will ensure that
                    you recieve personalized medical care and attention.
                  </p>
                </div>
              </div>
              <div className=" -mt-[25px]  flex w-4/12 ">
                <img className="" src={img} alt="" />
                <div className="flex flex-col gap-2 pt-20">
                  <h1 className="text-2xl font-semibold ">Nutritionist</h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Our clinical nutritionist will plan your meals tailor-made
                    to your health requirements.It is important to us that you
                    eat right!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {isToggle && (
          <div className="element-two px-5 transition-none -translate-x-5 ease-linear duration-1000 divide-y-2 divide-black">
            <div className="top-sections w-full flex gap-10">
              <div className="-mb-[25px] w-4/12 -ml-4 flex ">
                <img className="rotate-180   scale-x-[-1]" src={img} alt="" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold ">
                    Art Therapy Session
                  </h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Freely express yourself using drawing, painting, crafts,
                    clay, music, storytelling, creative writing, or movement
                  </p>
                </div>
              </div>
              <div className="-mb-[25px] w-4/12 -ml-4 flex ">
                <img className="rotate-180   scale-x-[-1]" src={img} alt="" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold ">
                    Progress Monitoring
                  </h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Consult with your doctor again to review your progress, We
                    believe in round the clock care
                  </p>
                </div>
              </div>
              <div className="-mb-[25px] w-4/12  -ml-4 flex ">
                <img className="rotate-180   scale-x-[-1]" src={img} alt="" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold ">Night Check-Up</h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Before you hit the bed, Our doctor on duty will check on you
                    to ensure that you are geared for a good night’s sleep
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom-section flex w-full ">
              <div className="ml-52 -mt-[25px] w-4/12    flex ">
                <img className="" src={img} alt="" />
                <div className="flex flex-col gap-2 pt-20">
                  <h1 className="text-2xl font-semibold ">
                    Recreational Activities
                  </h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Unwind with some recreational activities such as board
                    games, movie screenings to relieve stress. It also helps
                    with sleep regulation
                  </p>
                </div>
              </div>
              <div className=" -mt-[25px]  flex w-4/12 ">
                <img className="" src={img} alt="" />
                <div className="flex flex-col gap-2 pt-20">
                  <h1 className="text-2xl font-semibold ">Physiotherapy</h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Our physical therapist will conduct a one on one session to
                    address your body aches & pains.It is essential for your
                    sustained recovery
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-3 w-full -mt-20 justify-center ">
        <button
          onClick={() => setIsToggle(!isToggle)}
          className={`${
            !isToggle ? "bg-green-950 w-10" : "bg-black/10 w-8"
          } rounded-full  h-3`}
        ></button>
        <button
          onClick={() => setIsToggle(!isToggle)}
          className={`${
            isToggle ? "bg-green-950 w-10" : " bg-black/10 w-8"
          } rounded-full h-3`}
        ></button>
      </div>
    </div>
  );
};

export default DailyRoutineDesktop;
