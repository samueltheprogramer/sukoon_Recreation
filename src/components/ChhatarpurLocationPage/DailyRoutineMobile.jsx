import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const DailyRoutineMobile = () => {
  const [isToogle, setIsToogle] = useState(false);
  return (
    <div className="p-5 lg:hidden">
      <h1 className="text-2xl font-serif font-semibold text-black/90">
        Daily Routine
      </h1>
      <div className="py-5 gap-3 flex">
        <div className="flex ">
          <div>
            <h1 className="text-center   text-xs bg-gray-100 pt-[3px] w-6 h-6 rounded-full border-[1px] border-green-950">
              01
            </h1>
            <div className="w-1 h-full border-l-[1.5px] ml-3 border-black border-dashed "></div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-medium text-gray-700">Yoga</h1>
          <p className="leading-relaxed text-gray-600">
            Our fitness therapists have designed effective classes that will
            help you recover both physically & mentally
          </p>
        </div>
      </div>
      <div className="py-5 gap-3 -mt-4 flex">
        <div className="flex ">
          <div>
            <h1 className="text-center   text-xs bg-gray-100 pt-[3px] w-6 h-6 rounded-full border-[1px] border-green-950">
              02
            </h1>
            <div className="w-1 h-full border-l-[1.5px] ml-3 border-black border-dashed "></div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-medium text-gray-700">
            Psychiatric Consult
          </h1>
          <p className="leading-relaxed text-gray-600">
            Meet with your dedicated Psychiatrist! We will ensure that you
            recieve personalized medical care and attention.
          </p>
        </div>
      </div>
      <div className="py-5 gap-3 -mt-4 flex">
        <div className="flex ">
          <div>
            <h1 className="text-center   text-xs bg-gray-100 pt-[3px] w-6 h-6 rounded-full border-[1px] border-green-950">
              03
            </h1>
            <div
              className={`${
                !isToogle && "hidden"
              } w-1  h-full border-l-[1.5px] ml-3 border-black border-dashed`}
            ></div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-medium text-gray-700">Mental Gym</h1>
          <p className="leading-relaxed text-gray-600">
            Depending on your needs,our therapists will conduct various
            cognitive exercises to stimulate your brain.
          </p>
        </div>
      </div>
      {isToogle && (
        <>
          <div className="py-5 gap-3 -mt-4 flex">
            <div className="flex ">
              <div>
                <h1 className="text-center   text-xs bg-gray-100 pt-[3px] w-6 h-6 rounded-full border-[1px] border-green-950">
                  04
                </h1>
                <div className="w-1 h-full border-l-[1.5px] ml-3 border-black border-dashed "></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium text-gray-700">
                Nutritionist
              </h1>
              <p className="leading-relaxed text-gray-600">
                Our clinical nutritionist will plan your meals tailor-made to
                your health requirements.It is important to us that you eat
                right!
              </p>
            </div>
          </div>
          <div className="py-5 gap-3 -mt-4 flex">
            <div className="flex ">
              <div>
                <h1 className="text-center   text-xs bg-gray-100 pt-[3px] w-6 h-6 rounded-full border-[1px] border-green-950">
                  05
                </h1>
                <div className="w-1 h-full border-l-[1.5px] ml-3 border-black border-dashed "></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium text-gray-700">
                Psychotherapy Session
              </h1>
              <p className="leading-relaxed text-gray-600">
                Build emotional strength & resilience in therapy with your
                clinical psychologist in a private & comfortable environment
              </p>
            </div>
          </div>
          <div className="py-5 gap-3 -mt-4 flex">
            <div className="flex ">
              <div>
                <h1 className="text-center   text-xs bg-gray-100 pt-[3px] w-6 h-6 rounded-full border-[1px] border-green-950">
                  06
                </h1>
                <div className="w-1 h-full border-l-[1.5px] ml-3 border-black border-dashed "></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium text-gray-700">
                Art Therapy Session
              </h1>
              <p className="leading-relaxed text-gray-600">
                Freely express yourself using drawing, painting, crafts, clay,
                music, storytelling, creative writing, or movement
              </p>
            </div>
          </div>
          <div className="py-5 gap-3 -mt-4 flex">
            <div className="flex ">
              <div>
                <h1 className="text-center   text-xs bg-gray-100 pt-[3px] w-6 h-6 rounded-full border-[1px] border-green-950">
                  07
                </h1>
                <div className="w-1 h-full border-l-[1.5px] ml-3 border-black border-dashed "></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium text-gray-700">
                Recreational Activities
              </h1>
              <p className="leading-relaxed text-gray-600">
                Unwind with some recreational activities such as board games,
                movie screenings to relieve stress. It also helps with sleep
                regulation
              </p>
            </div>
          </div>
          <div className="py-5 gap-3 -mt-4 flex">
            <div className="flex ">
              <div>
                <h1 className="text-center   text-xs bg-gray-100 pt-[3px] w-6 h-6 rounded-full border-[1px] border-green-950">
                  08
                </h1>
                <div className="w-1 h-full border-l-[1.5px] ml-3 border-black border-dashed "></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium text-gray-700">
                Progress Monitoring
              </h1>
              <p className="leading-relaxed text-gray-600">
                Consult with your doctor again to review your progress, We
                believe in round the clock care
              </p>
            </div>
          </div>
          <div className="py-5 gap-3 -mt-4 flex">
            <div className="flex ">
              <div>
                <h1 className="text-center   text-xs bg-gray-100 pt-[3px] w-6 h-6 rounded-full border-[1px] border-green-950">
                  09
                </h1>
                <div className="w-1 h-full border-l-[1.5px] ml-3 border-black border-dashed "></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium text-gray-700">
                Physiotherapy
              </h1>
              <p className="leading-relaxed text-gray-600">
                Our physical therapist will conduct a one on one session to
                address your body aches & pains.It is essential for your
                sustained recovery
              </p>
            </div>
          </div>
          <div className="py-5 gap-3 -mt-4 flex">
            <div className="flex ">
              <div>
                <h1 className="text-center   text-xs bg-gray-100 pt-[3px] w-6 h-6 rounded-full border-[1px] border-green-950">
                  10
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium text-gray-700">
                Night Check-Up
              </h1>
              <p className="leading-relaxed text-gray-600">
                Before you hit the bed, Our doctor on duty will check on you to
                ensure that you are geared for a good night’s sleep
              </p>
            </div>
          </div>
        </>
      )}
      <div className="w-full flex justify-center">
        <button
          onClick={() => setIsToogle(!isToogle)}
          className="flex  text-xl text-gray-800 gap-3 justify-center items-center"
        >
          Show more{" "}
          {!isToogle ? (
            <FaAngleDown className="text-xl text-gray-800" />
          ) : (
            <FaAngleUp className="text-xl text-gray-800" />
          )}
        </button>
      </div>
    </div>
  );
};

export default DailyRoutineMobile;
