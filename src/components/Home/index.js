import React, { useEffect } from "react";
// import logo from "../../logo.svg";
import defectLogoSpin from "../../media/DefectLogoSpin.gif";
import collage from "../../media/Defect Collage.png";
import {
  Collage,
  CollageMarquee,
  WidthDiv,
  Description,
  DescriptionDiv,
  SpinningLogo,
  SpinningLogoDiv,
  ArabicDescription,
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
      <WidthDiv>
        <CollageMarquee data-aos="fade-in">
          <Collage src={collage} alt="Defect collage" />
          <Collage src={collage} alt="Defect collage" />
        </CollageMarquee>
      </WidthDiv>
      <ArabicDiv data-aos="fade-in">
        <ArabicDescription>
          ‏"ديفكت" هي منظمة غير هادفة للربح قامت ببناء علامتها التجارية الخاصة
          لدعم قضية مهمة. ما بدأ كمشروع من شغف الشباب الكويتي أصبح الآن حركة
          تلهم وتحفز المراهقين على الوصول لأحلامهم. من خلال التعاون مع الشركات
          المحلية والجمع بين الناس لتكوين صداقات و علاقات اجتماعية ، أنشأت
          "ديفكت" مجتمعًا يربط بين الدعم والتقدير للثقافة والمواهب المحلية. يتم
          تعريف كلمة "ديفكت" بأنها "عيب أو نقص". نظرًا لما يعتبره الكبار
          "عيوبًا" في المجتمع ، أو الجيل الذي يُفترض أنه كسول ، فإن الجيل
          المهووس بالتكنولوجيا سوف يجتمع معًا ليُظهر للعالم ما يمكننا القيام به.
        </ArabicDescription>
        <ArabicDescription>
          فكرتنا بسيطة و هي: عرض منتجات رواد الأعمال الشباب المحليين للشباب في
          هيئة بيئة إجتماعية وتوظيف مساهمات من العائدات لتمويل المزيد من الأحداث
          والتوسع.
        </ArabicDescription>
      </ArabicDiv>
    </div>
  );
};

export default Home;
