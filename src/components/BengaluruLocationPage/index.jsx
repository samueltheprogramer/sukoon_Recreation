import React from "react";
import BookAppoinment from "../common/BookAppoinment";
import RecoveryStories from "../common/RecoveryStories";
import OurTeam from "../common/OurTeam/OurTeam";
import FAQ from "../common/FAQ";
import {
  FAQdataBengaluruLocationPage,
  OurMultidisciplinaryTeamData,
  OutpatientCareData,
  RecoveryStoriesData,
  ResidentalLoungesSliderDataForGurgoan,
  RoomsAndSuitesDataForBangalur,
} from "../../variables";
import HeroForLocations from "../common/HeroForLocations";
import TitleAndDisForLocations from "../common/TitleAndDisForLocations";
import ServicesComponent from "../common/ServicesComponent";
import ResidentalLoungesSlider from "../common/ResidentalLoungesSlider";
import OutpatientCare from "../common/OutPatientCare/OutpatientCare";
import OutpatientCareDesktop from "../common/OutPatientCare/OutpatientCareDesktop";
import TakeATour from "../common/TakeATour";
import RoomsAndSuites from "../common/RoomsAndSuites/RoomsAndSuites";
import Awards from "../common/Awards/Awards";
import InnerNavigationForBengaluru from "./InnerNavigationForBengaluru";

const BengaluruLocationPage = () => {
  return (
    <div>
      <HeroForLocations
        bgImg={4}
        heading="Sukoon Psychiatry Centre at the Heart of Bengaluru"
        para="Our NABH-accredited psychiatric hospital in Bengaluru offers round-the-clock evidence-based residential, daycare, & outpatient treatments. Our services are also available through online consultations, easily accessible here or by telephone. We have a multidisciplinary team of experienced psychiatrists, clinical psychologists, therapists, social workers and nurses dedicated to providing the highest quality of care."
      />
      <TitleAndDisForLocations
        title="Experience Sukoon"
        discription="Your health and safety are our top priorities. Our thoughtfully designed spaces and compassionate nurses create a safe, private, and nurturing environment for your recovery. Our psychiatric hospital in Bengaluru has spacious activity areas, outdoor spaces, and fitness studios to aid in both mental and physical recovery."
      />
      <InnerNavigationForBengaluru />
      <TitleAndDisForLocations
        title="Services"
        discription="The Sukoon Psychiatry Centres provides evidence-based treatments for all mental health concerns. Depending on your needs, our experienced team of psychiatrists, psychologists, occupational therapists, and social workers create personalised plans comprising short-term and long-term mental health services to help you recover with time."
      />
      <ServicesComponent />
      <RoomsAndSuites data={RoomsAndSuitesDataForBangalur} />
      <ResidentalLoungesSlider data={ResidentalLoungesSliderDataForGurgoan} />
      <OutpatientCare data={OutpatientCareData} />
      <OutpatientCareDesktop data={OutpatientCareData} />
      <TakeATour
        location={"Bengaluru"}
        videoURL="https://www.youtube.com/embed/_G-RS7ZfrFs?si=QB9AZwXRdZ2HDdC8"
      />
      <Awards />
      <OurTeam data={OurMultidisciplinaryTeamData} />
      <FAQ FAQdataArray={FAQdataBengaluruLocationPage} />
      <RecoveryStories data={RecoveryStoriesData} />
      <BookAppoinment />
    </div>
  );
};

export default BengaluruLocationPage;
