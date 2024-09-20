import React from "react";

const AboutUsDetails = () => {
  return (
    <div className="lg:flex-row lg:pt-36 lg:pl-32 lg:pr-0 lg:gap-16j  py-5 px-4 w-full flex flex-col gap-5 ">
      <div className="lg:text-2xl lg:font-[450] lg:leading-relaxed   w-full text-lg flex flex-col gap-5  text-gray-600">
        <div className="lg:gap-3 lg:w-full flex flex-col gap-2">
          <h1 className="lg:text-5xl  text-2xl text-black/90 font-serif font-semibold">
            About Us
          </h1>
          <h2 className="lg:text-4xl text-xl text-gray-600    font-serif font-medium">
            What We Do
          </h2>
        </div>
        <p>
          Sukoon Health is India's leading mental health hospital chain,
          offering
          <span className="underline text-green-950/90  font-semibold decoration-green-950">
            residential
          </span>
          and{" "}
          <span className="underline text-green-950/90  font-semibold decoration-green-950">
            outpatient
          </span>{" "}
          psychiatry,{" "}
          <span className="underline text-green-950/90  font-semibold decoration-green-950">
            {" "}
            psychology,
          </span>{" "}
          and{" "}
          <span className="underline text-green-950/90  font-semibold decoration-green-950">
            de-addiction
          </span>{" "}
          services.
        </p>
        <p>
          We follow a personalised recovery model with the individual at the
          <span className="underline text-green-950/90  font-semibold decoration-green-950">
            centre{" "}
          </span>
          of our care ecosystem. Our multidisciplinary{" "}
          <span className="underline text-green-950/90  font-semibold decoration-green-950">
            team,
          </span>{" "}
          composed of psychiatrists, clinical psychologists, counsellors,
          psychiatric social workers, art therapists, nurses, general physicians
          and pharmacists represents a comprehensive approach to mental health
          care. This multidisciplinary team ensures that every aspect of an
          individual's mental health is addressed with expertise and empathy.
        </p>
        <div className="flex flex-col lg:gap-3 ">
          <h1 className="lg:text-4xl text-xl font-medium text-black font-serif">
            Our Purpose
          </h1>
          <p>
            At Sukoon, we are committed to reimagining the way mental healthcare
            is delivered in India. We believe that everyone deserves access to
            high-quality, evidence-based, holistic care.
          </p>
        </div>
      </div>
      <div className="w-full  lg:flex lg:flex-col lg:items-center lg:justify-center">
        <img
          className=" hidden lg:block"
          src="https://sukoonhealth.com/static/aboutus-Bg_1-2612f265e9240ef89a84265fe88ba648.png"
          alt=""
        />
        <img
          className="lg:hidden ml-auto mr-auto "
          src="https://sukoonhealth.com/static/resp_aboutus-Bg_1-e79720a8041598b6efd34ba95b0f1fe2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUsDetails;
