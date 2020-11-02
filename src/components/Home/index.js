import React, { useEffect } from "react";
// import logo from "../../logo.svg";
import defectLogoSpin from "../../media/DefectLogoSpin.gif";
import collage from "../../media/Defect Collage.png";
import {
  Collage,
  CollageMarquee,
  Description,
  DescriptionDiv,
  SpinningLogo,
  SpinningLogoDiv,
  ArabicDiv,
} from "./styles";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <SpinningLogoDiv>
        <SpinningLogo src={defectLogoSpin} alt="Defect Logo" />
      </SpinningLogoDiv>
      <DescriptionDiv data-aos="fade-in" data-aos-delay="500">
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
      <CollageMarquee data-aos="fade-in">
        <Collage src={collage} alt="Defect collage" />
        <Collage src={collage} alt="Defect collage" />
      </CollageMarquee>
      <ArabicDiv data-aos="fade-in">
        <Description>
          عندما يريد العالم أن ‪يتكلّم ‬ ، فهو يتحدّث بلغة يونيكود. تسجّل الآن
          لحضور المؤتمر الدولي العاشر ليونيكود (Unicode Conference)، الذي سيعقد
          في 10-12 آذار 1997 بمدينة مَايِنْتْس، ألمانيا. و سيجمع المؤتمر بين
          خبراء من كافة قطاعات الصناعة على الشبكة العالمية انترنيت ويونيكود، حيث
          ستتم، على الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام
          يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية، الخطوط، تصميم
          النصوص والحوسبة متعددة اللغات.
        </Description>
        <Description>
          1997 بمدينة مَايِنْتْس، ألمانيا. و سيجمع المؤتمر بين خبراء من كافة
          قطاعات الصناعة على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على
          الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام يونكود في النظم
          القائمة وفيما يخص التطبيقات الحاسوبية، الخطوط، تصميم النصوص والحوسبة
          متعددة اللغات.
        </Description>
      </ArabicDiv>
    </div>
  );
};

export default Home;
