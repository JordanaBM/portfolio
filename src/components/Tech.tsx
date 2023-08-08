import React from "react";

import BallCanvas from "./canvas/Ball";
import StarWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

interface Technology {
  name: string;
  icon: string;
}

const Tech: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology: Technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default StarWrapper(Tech, "");
