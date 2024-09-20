import React from "react";
import BookAppoinment from "../common/BookAppoinment";
import Awards from "../common/Awards/Awards";
import RecoveryStories from "../common/RecoveryStories";
import OurTeam from "../common/OurTeam/OurTeam";
import FAQ from "../common/FAQ";
import {
  CommonSpacesData,
  FAQdataChhatapurLocationPage,
  HealthAndWellnessStudioData,
  OurMultidisciplinaryTeamData,
  RecoveryStoriesData,
  RoomsAndSuitesDataForChattarpur,
} from "../../variables";
import HeroForLocations from "../common/HeroForLocations";
import TitleAndDisForLocations from "../common/TitleAndDisForLocations";
import ServicesComponent from "../common/ServicesComponent";
import TakeATour from "../common/TakeATour";
import MedantaHospital from "../common/MedantaHospital";
import RoomsAndSuites from "../common/RoomsAndSuites/RoomsAndSuites";
import RecoveryReinvented from "./RecoveryReinvented";
import DailyRoutine from "./DailyRoutineMobile";
import InnerNavigationForChhatarpur from "./InnerNavigationForChhatarpur";
import CommonSpaces from "./CommonSpaces";
import HealthAndWellnessStudio from "./HealthAndWellnessStudio";
import ComfortMeetsExpetinalCare from "./ComfortMeetsExpetionalCare/ComfortMeetsExpetinalCare";
import RecreationalActivities from "./RecreationalActivities";
import OutdoorSpaces from "./OutdoorSpaces";
import DailyRoutineDesktop from "./ComfortMeetsExpetionalCare/DailyRoutineDesktop";
import OutdoorSpacesDesktop from "./OutdoorSpacesDesktop";

const ChhatarpurLocationPage = () => {
  return (
    <div>
      <HeroForLocations
        bgImg={2}
        heading="Sukoon Recovery Centre - Chattarpur"
        para="Sukoon Recovery Centre is our world-class rehabilitation facility in Chattarpur, New Delhi. Our multidisciplinary team of psychiatrists, psychologists, occupational therapists, social workers and nurses work together to create personalised, evidence-based treatment plans to help you or your loved one in your journey to recovery. Our rehab centre in Delhi has spacious single occupancy rooms, landscaped gardens, dedicated activity spaces, and five-star amenities nestled in a serene and calm environment."
      />
      <TitleAndDisForLocations
        title="Experience Sukoon"
        discription="Our deaddiction centres in Delhi is perfect for our personalised treatment plans with dedicated spaces for every activity. Our 7-bed state-of-the-art rehabilitation centres in Delhi  is thoughtfully designed to offer a nurturing, safe, and private environment for your mind and body to recover. We ensure the confidentiality and privacy of our residents. Your well-being is our priority."
      />
      <TitleAndDisForLocations
        title="Services"
        discription="At our rehab centre in Delhi, we provide evidence-based treatments for addiction. Depending on your initial consultation, our multi-disciplinary team of psychiatrists, psychologists, therapists, and develop a personalised treatment plan. Our clinicians are supported by compassionate nurses who ensure round the clock care."
      />
      <ServicesComponent />
      <RecoveryReinvented />
      <DailyRoutine />
      <DailyRoutineDesktop />
      <InnerNavigationForChhatarpur />
      <RoomsAndSuites data={RoomsAndSuitesDataForChattarpur} />

      <CommonSpaces data={CommonSpacesData} />
      <HealthAndWellnessStudio data={HealthAndWellnessStudioData} />
      <OutdoorSpaces />
      <OutdoorSpacesDesktop />

      <ComfortMeetsExpetinalCare />
      <RecreationalActivities />

      <TakeATour
        location="Chhatarpur"
        videoURL="https://www.youtube.com/embed/zohhS6tYkxU?si=EAYwerQYi4GBdunu"
      />

      <MedantaHospital />
      <Awards />
      <OurTeam data={OurMultidisciplinaryTeamData} />
      <FAQ FAQdataArray={FAQdataChhatapurLocationPage} />
      <RecoveryStories data={RecoveryStoriesData} />
      <BookAppoinment />
    </div>
  );
};

export default ChhatarpurLocationPage;
