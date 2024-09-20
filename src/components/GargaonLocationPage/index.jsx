import React from "react";
import BookAppoinment from "../common/BookAppoinment";
import RecoveryStories from "../common/RecoveryStories";
import FAQ from "../common/FAQ";
import {
  FAQdataGurgaonLocationPage,
  OurMultidisciplinaryTeamData,
  OutpatientCareData,
  RecoveryStoriesData,
  ResidentalLoungesSliderDataForGurgoan,
  RoomsAndSuitesDataForGurgoan,
} from "../../variables";
import OurTeam from "../common/OurTeam/OurTeam";

import HeroForLocations from "../common/HeroForLocations";
import TitleAndDisForLocations from "../common/TitleAndDisForLocations";
import ServicesComponent from "../common/ServicesComponent";
import RoomsAndSuitesForGargaon from "../common/RoomsAndSuites/RoomsAndSuites";
import ResidentalLoungesSlider from "../common/ResidentalLoungesSlider";
import OutpatientCare from "../common/OutPatientCare/OutpatientCare";
import OutpatientCareDesktop from "../common/OutPatientCare/OutpatientCareDesktop";
import TakeATour from "../common/TakeATour";
import MedantaHospital from "../common/MedantaHospital";
import InnerNavigationForGargoan from "../GargaonLocationPage/InnerNavigationForGargoan";
import Awards from "../common/Awards/Awards";

const GurgaonLocationPage = () => {
  return (
    <div>
      <HeroForLocations
        bgImg={1}
        heading=" Sukoon Psychiatry Centre at the Heart of Gurgaon"
        para="Our NABH-accredited psychiatric hospital in Gurgaon offers
          round-the-clock evidence-based residential, daycare, & outpatient
          treatments. Our services are also available through online
          consultations, easily accessible here or by telephone. We have a
          multidisciplinary team of experienced psychiatrists, clinical
          psychologists, therapists, social workers and nurses dedicated to
          providing the highest quality of care."
      />
      <TitleAndDisForLocations
        title="Experience Sukoon"
        discription="Your health and safety are our top priorities. Our thoughtfully designed spaces and compassionate nurses create a safe, private, and nurturing environment for your recovery. Our psychiatric hospital in Gurgaon has spacious activity areas, outdoor spaces, and fitness studios to aid in both mental and physical recovery. "
      />
      <InnerNavigationForGargoan />
      <TitleAndDisForLocations
        title="Services"
        discription="The Sukoon Psychiatry Centres provides evidence-based treatments for all mental health concerns. Depending on your needs, our experienced team of psychiatrists, psychologists, occupational therapists, and social workers create personalised plans comprising short-term and long-term mental health services to help you recover with time. "
      />
      <ServicesComponent />
      <RoomsAndSuitesForGargaon data={RoomsAndSuitesDataForGurgoan} />
      <ResidentalLoungesSlider data={ResidentalLoungesSliderDataForGurgoan} />
      <OutpatientCare data={OutpatientCareData} />
      <OutpatientCareDesktop data={OutpatientCareData} />
      <TakeATour
        videoURL="https://www.youtube.com/embed/_G-RS7ZfrFs?si=QB9AZwXRdZ2HDdC8"
        location="Gurgaon"
      />
      <MedantaHospital />
      <Awards />
      <OurTeam data={OurMultidisciplinaryTeamData} />
      <FAQ FAQdataArray={FAQdataGurgaonLocationPage} />
      <RecoveryStories data={RecoveryStoriesData} />
      <BookAppoinment />
    </div>
  );
};

export default GurgaonLocationPage;
