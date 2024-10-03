import React from "react";
import HeroForLocations from "../common/HeroForLocations";
import PlanYourVisitToday from "./PlanYourVisitToday";
import Amenities from "./Amenities";
import PatientAndFamilyCare from "./PatientAndFamilyCare";
import OurTeam from "../common/OurTeam/OurTeam";
import { FqsForipsPage, OurMultidisciplinaryTeamData } from "../../variables";
import FAQ from "../common/FAQ";
import OurFacilities from "./OurFacilities";
const InternationalPatientServicesPage = () => {
  return (
    <div>
      <HeroForLocations
        bgImg={0}
        isLocation={false}
        heading="International Patient Services"
        para="Our commitment to transcend borders has enabled us to care for patients from Russia, US, UK, the Gulf and beyond. From first interactions to onboarding protocols, our team will be there with you every step of the way."
      />
      <PlanYourVisitToday />
      <Amenities />
      <PatientAndFamilyCare />
      <OurTeam data={OurMultidisciplinaryTeamData} />
      <OurFacilities />

      <FAQ FAQdataArray={FqsForipsPage} />
    </div>
  );
};

export default InternationalPatientServicesPage;
