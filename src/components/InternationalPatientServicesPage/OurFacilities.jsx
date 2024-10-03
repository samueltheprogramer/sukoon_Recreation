import { Link } from "gatsby";
import React from "react";

const data = [
  {
    title: "Sukoon Psychiatry Centre",
    subTitle: "Acute care hospital at the heart of Gurgaon",
    para: " Our psychiatry hospital at Gurgaon is one of the most premium mental health institutions in India that focuses on holistic mental health treatments including psychiatric care and therapy. With 24*7 nursing and on-site doctor availability, we provide you with a personalised experience that helps you rediscover your true self. So, if you are looking for a psychiatrist or therapist near you in Gurgaon, our team of expert clinicians is here for you through in-person consultation or video consultation.",
    imgURL:
      "https://sukoonhealth.com/static/facilities-Gurgaon-919a9600dea60c0258ad975c7aab1b50.jpg",
  },
  {
    title: "Sukoon Recovery Centre",
    subTitle: "India’s best rehabilitation centre in Delhi ",
    para: "With a special focus on helping you recover from different types of addictions, our Chattarpur recovery centre is a safe space for you to manage mental health issues. Designed to make our residents feel safe and relaxed, our facility has world-class treatment plans to help your body and mind relax, rejuvenate and renew. Our team of talented psychiatrists, psychologists, and therapists make a treatment plan just for you.",
    imgURL:
      "https://sukoonhealth.com/static/facilities-Chhatarpur-bdd6197e179ab9dbdbe2281581524be8.png",
  },
  {
    title: "Sukoon Centre for Mental Health ",
    subTitle: "Out-patient facility in South Delhi",
    para: "Located at a central location in Greater Kailash, our experts at the Delhi facility specialise in day treatments and offer in-person and online consultations for psychiatry, rTMS treatment, and mental health therapy. We recommend you to visit this facility if you are looking to consult a therapist or doctor for conditions like anxiety, OCD or depression.",
    imgURL:
      "https://sukoonhealth.com/static/facilities-Delhi-3ab27818833d50f28a17f567bd9e6a24.jpg",
  },
  {
    title: "Sukoon Psychiatry Centre ",
    subTitle: "Acute care hospital at the heart of Bengaluru",
    para: "Our psychiatry hospital at Bengaluru is one of the most premium mental health institutions in India that focuses on holistic mental health treatments including psychiatric care and therapy. With 24*7 nursing and on-site doctor availability, we provide you with a personalised experience that helps you rediscover your true self. So, if you are looking for a psychiatrist or therapist near you in Bengaluru, our team of expert clinicians is here for you through in-person consultation or video consultation.",
    imgURL:
      "https://sukoonhealth.com/static/facility-bengaluru-316a6d902624e45a11b413970bc3332d.jpg",
  },
];
/* {data.map((item) => (
  <div
    style={{ backgroundImage: `url(${item?.imgURL})` }}
    className=" w-full h-96"
  ><div/>} */

const OurFacilities = () => {
  return (
    <div className="flex flex-col gap-5 lg:gap-10">
      <h1 className="lg:text-5xl text-2xl text-center font-serif text-black/90 font-semibold ">
        Our Facilities
      </h1>
      <div className="w-full relative flex flex-col gap-5 ">
        {data.map((item, index) => (
          <div className=" w-full h-[75vh] sm:h-[55vh] lg:h-[60vh] ">
            <img
              className="absolute w-full blur-[3px] bg-center bg-no-repeat bg-cover h-[70vh] sm:h-[55vh] lg:h-[60vh]"
              src={item.imgURL}
              alt=""
            />
            <div className="absolute p-5 h-[75vh] sm:h-[55vh] lg:h-[60vh] flex flex-col justify-between lg:gap-5 lg:justify-center lg:px-20  bg-black/50  w-full text-white">
              <div className="flex flex-col gap-2 sm:gap-3 ">
                <h1 className="lg:text-4xl text-2xl font-semibold">
                  {item.title}
                </h1>
                <h2 className="lg:text-3xl text-xl font-medium ">
                  {item.subTitle}
                </h2>
                <p className="lg:text-xl lg:font-normal font-semibold">
                  {item.para}
                </p>
              </div>
              <Link
                to={`${
                  index === 0
                    ? "/psychiatric_hospital_in_Gurgaon"
                    : index === 1
                    ? "/psychiatric_hospital_in_Chhatarpur"
                    : index === 2
                    ? "/psychiatric_hospital_in_Delhi"
                    : index === 3
                    ? "/psychiatric_hospital_in_Bengaluru"
                    : ""
                }`}
                className="text-[17px] font-semibold text-black bg-white px-10 py-2 rounded-lg w-fit hover:bg-green-950 hover:text-white "
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFacilities;
