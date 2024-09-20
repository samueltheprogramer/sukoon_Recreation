import React from "react";
import Hero from "./Hero";
import About from "./About";
import CashlessInsurence from "./CashlessInsurence";
import OurTeam from "../common/OurTeam/OurTeam";
import OurTreatments from "./OurTreatments/OurTreatments";
import OurLocations from "./OurLocations/OurLocations";
import ExpertsFeedbacks from "./ExpertsFeedbacks";
import RecoveryStories from "../common/RecoveryStories";
import FAQ from "../common/FAQ";
import BookAppoinment from "../common/BookAppoinment";
import OurInfraStructure from "./OurInfraStructure/OurInfraStructure";
import {
  ExpertsFeedbackData,
  FAQdataHomePage,
  OurMultidisciplinaryTeamData,
  RecoveryStoriesData,
} from "../../variables";

const HomePage = () => {
  return (
    <div className="no-scrollbar flex flex-col  overflow-hidden overscroll-none">
      <Hero />
      <About />
      <CashlessInsurence />
      <OurTeam data={OurMultidisciplinaryTeamData} />
      <OurTreatments />
      <OurLocations />
      <OurInfraStructure />
      <ExpertsFeedbacks data={ExpertsFeedbackData} />
      <FAQ FAQdataArray={FAQdataHomePage} />
      <RecoveryStories data={RecoveryStoriesData} />
      <BookAppoinment />
    </div>
  );
};

export default HomePage;
