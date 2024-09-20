import React from "react";
import FAQ from "../common/FAQ";
import {
  BlogsData,
  FAQdataAboutusPage,
  newAndMediaData,
} from "../../variables";
import BookAppoinment from "../common/BookAppoinment";
import AboutUsDetails from "./AboutUsDetails";
import VisionAndMission from "./VisionAndMission";
import MessageFromOurTeam from "./MessageFromOurTeam";
import BoardMembers from "./BoardMembers";

import NewsAndBlogsComponent from "./NewAndBlogs/NewsAndBlogsComponent";
import OurFacilities from "./OurFacilities";

const AboutusPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <AboutUsDetails />
      <VisionAndMission />
      <MessageFromOurTeam />
      <BoardMembers />
      <OurFacilities />
      <NewsAndBlogsComponent data={newAndMediaData} isNewsAndMediaCard={true} />
      <FAQ FAQdataArray={FAQdataAboutusPage} />
      <BookAppoinment />
      <NewsAndBlogsComponent data={BlogsData} isNewsAndMediaCard={false} />
    </div>
  );
};

export default AboutusPage;
