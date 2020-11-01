import React, { useEffect } from "react";
// import logo from "../../logo.svg";
import defectLogoSpin from "../../media/DefectLogoSpin.gif";
import collage from "../../media/Defect Collage.png";
import {
  Collage /*CollageTicker*/,
  Description,
  DescriptionDiv,
  SpinningLogo,
} from "./styles";
// import Ticker from "react-ticker";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <SpinningLogo src={defectLogoSpin} alt="Defect Logo" />
      <DescriptionDiv data-aos="fade-in">
        <Description>
          Defect is a non-profit organisation that has built it’s own brand to
          support an important cause. What started as a passion project by
          Kuwaiti Youth is now a movement that inspires and motivates teenagers
          to pursue their dreams. By collaborating with local businesses and
          bringing together people to socialize, Defect has created a community
          that bonds on mutual support and appreciation of culture, as well as
          local talent. The word Defect is defined as “a shortcoming or
          imperfection”. As what adults consider “defects” of society, our
          supposedly lazy, technology-obsessed generation will come together to
          show the world what we can do.
        </Description>
        <Description>
          The idea is simple: To bring the products of young, local
          entrepreneurs to the youth in a social setting and use a contribution
          of the proceeds to fund further events and expansion. All for the
          youth!
        </Description>
      </DescriptionDiv>

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
