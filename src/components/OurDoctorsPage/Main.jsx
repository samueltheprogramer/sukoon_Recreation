import React from "react";
import OurTeam from "../common/OurTeam/OurTeam";
import { OurMultidisciplinaryTeamData } from "../../variables";

const Main = () => {
  return (
    <div>
      <OurTeam data={OurMultidisciplinaryTeamData} isOurTeamPage={true} />
    </div>
  );
};

export default Main;
