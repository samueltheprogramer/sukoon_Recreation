import React from "react";
import Awards from "../common/Awards/Awards";
import OurTeam from "../common/OurTeam/OurTeam";
import RecoveryStories from "../common/RecoveryStories";
import BookAppoinment from "../common/BookAppoinment";
import FAQ from "../common/FAQ";
import {
  FAQdataDelhiLocationPage,
  OurMultidisciplinaryTeamData,
  RecoveryStoriesData,
} from "../../variables";
import HeroForLocations from "../common/HeroForLocations";
import TitleAndDisForLocations from "../common/TitleAndDisForLocations";
import ServicesComponent from "../common/ServicesComponent";
import FeautresInDelhi from "./FeautersInDelhi/FeautresInDelhi";
import EvidenceBasedTreatment from "./EvidenceBasedTreatment";
import InnerNavigationForDelhi from "../DelhiLocationPage/InnerNavigationForDelhi";

const DelhiLocationPage = () => {
  return (
    <div>
      <HeroForLocations
        bgImg={3}
        heading="Sukoon Centre for Mental Health-Outpatient Facility in South Delhi"
        para="Situated in Greater Kailash, Sukoon Centre for Mental Health specialises in outpatient treatments to manage everyday mental health diagnoses such as anxiety, depression, OCD and more. Our multidisciplinary team of experienced psychiatrists, clinical psychologists, and therapists in Delhi collaborate to create personalised evidence-based treatment plans to provide the highest quality of care. We offer both in-person and online consultations that are easily accessible here or by telephone."
      />
      <TitleAndDisForLocations
        title="Experience Sukoon"
        discription="Our evidence-based treatments, private facilities, and multidisciplinary team of professionals ensure that you get the proper care for your mental health concerns."
      />
      <InnerNavigationForDelhi />
      <TitleAndDisForLocations
        title="Services"
        discription="At our rehab centre in Delhi, we provide evidence-based treatments for addiction. Depending on your initial consultation, our multi-disciplinary team of psychiatrists, psychologists, therapists, and develop a personalised treatment plan. Our clinicians are supported by compassionate nurses who ensure round the clock care."
      />
      <ServicesComponent />
      <FeautresInDelhi />
      <EvidenceBasedTreatment />
      <Awards />
      <OurTeam data={OurMultidisciplinaryTeamData} />
      <FAQ FAQdataArray={FAQdataDelhiLocationPage} />
      <RecoveryStories data={RecoveryStoriesData} />
      <BookAppoinment />
    </div>
  );
};

export default DelhiLocationPage;
