import React from "react";
import FeautersInDelhiCard from "./FeautersInDelhiCard";

const FeautresInDelhi = () => {
  return (
    <div className="w-full lg:py-10">
      <div id="OutpatientServices">
        <FeautersInDelhiCard
          title="Outpatient Services"
          discription="Outpatient Care Sukoon Centres for Mental Health houses experienced psychiatrists, doctors, counsellors, occupational therapists, and clinical psychologists in Delhi. We conduct consultations in private chambers to ensure complete confidentiality. We also conduct online consultations that can be booked here or telephonically."
          imgURL="https://sukoonhealth.com/static/delhirooms_op-cff8da3e6d6a0c6d756f550977ff437a.png"
        />
      </div>
      <div id="rTMS">
        <FeautersInDelhiCard
          title="rTMS Treatment in Delhi"
          discription="Repetitive Transcranial Magnetic Stimulation ( rTMS) is a non-invasive, painless procedure that targets specific regions of your brain through the production of high and low-intensity magnetic fields. rTMS is an effective form of treatment for depression, OCD, and anxiety. With our dedicated room equipped with the latest technology, experience the best rTMS treatment in Delhi. "
          imgURL="https://sukoonhealth.com/static/delhirooms_rtms_new-e90c87ded459eb551e8ef0a2e3614fc9.png"
          flexDirectionTCSS="lg:flex-row-reverse"
        />
      </div>
      <div id="videoConsultation">
        <FeautersInDelhiCard
          title="Video Consultation"
          discription="We believe that mental health care should be accessible to all. Connect with your psychologist, occupational therapist, or psychiatrists in Delhi through our video consultation feature. Through virtual options like chat, phone calls and video calls, we ensure that you can connect with our clinicians from anywhere and at any time."
          imgURL="https://sukoonhealth.com/static/delhirooms_vc-f040b5a16737a83331cd9ed718b8976b.png"
        />
      </div>
      <div id="waitingArea">
        <FeautersInDelhiCard
          title="Waiting Area"
          discription="At Sukoon, the journey towards healing starts the moment you step through our doors. Our waiting area is thoughtfully crafted to offer a safe, soothing, and inviting environment. Ample art pieces and greenery provide a comforting and engaging atmosphere, ensuring your comfort and relaxation during your wait."
          imgURL="https://sukoonhealth.com/static/delhirooms_wa-f78bf9b8d431eed8f2e34d936c637c62.png"
          flexDirectionTCSS="lg:flex-row-reverse"
        />
      </div>
    </div>
  );
};

export default FeautresInDelhi;
