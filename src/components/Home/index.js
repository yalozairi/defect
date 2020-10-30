import React from "react";
// import logo from "../../logo.svg";
import ReactPlayer from "react-player";
import defectLogoSpin from "../../media/DefectLogoSpin.mp4";
import collage from "../../media/Defect Collage.png";
import { Collage /*CollageTicker*/ } from "./styles";
// import Ticker from "react-ticker";

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

      {/* <h1>hhii</h1>
      <CollageTicker>
        <Ticker>
          {() => (
            <>
              <h1></h1>
              <Collage src={collage} alt="Defect collage" />
            </>
          )}
        </Ticker>
      </CollageTicker>
      <h1>hhii</h1> */}
    </div>
  );
};

export default Home;
