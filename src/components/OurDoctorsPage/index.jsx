import React from "react";
import Main from "./Main";
import FAQ from "../common/FAQ";
import { FAQsForOurDoctorasPage } from "../../variables";

const OurDoctors = () => {
  return (
    <div className="lg:py-10">
      <Main />
      <FAQ FAQdataArray={FAQsForOurDoctorasPage} />
    </div>
  );
};

export default OurDoctors;
