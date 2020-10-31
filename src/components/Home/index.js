import React from "react";
// import logo from "../../logo.svg";
import defectLogoSpin from "../../media/DefectLogoSpin.gif";
import collage from "../../media/Defect Collage.png";
import { Collage /*CollageTicker*/, SpinningLogo } from "./styles";
// import Ticker from "react-ticker";

const Home = () => {
  return (
    <div>
      <SpinningLogo src={defectLogoSpin} alt="Defect Logo" />
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
