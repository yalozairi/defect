import React from "react";
import logo from "../../logo.svg";
import ReactPlayer from "react-player";
import defectLogoSpin from "../../media/DefectLogoSpin.mp4";
import collage from "../../media/Defect Collage.png";
import { Collage } from "./styles";

const Home = () => {
  return (
    <div>
      <ReactPlayer
        url={defectLogoSpin}
        width="100%"
        height="100%"
        playing={true}
        loop={true}
        muted={true}
      />
      <Collage src={collage} alt="Defect collage" />
    </div>
  );
};

export default Home;
