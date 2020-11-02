import styled from "styled-components";

export const Collage = styled.img`
  width: 50%;
  animation: marquee 10s linear infinite;
  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`;

export const CollageMarquee = styled.div`
  width: 200%;
  overflow: hidden;
`;

export const SpinningLogoDiv = styled.div`
  align-items: center;
`;
export const SpinningLogo = styled.img`
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const Description = styled.h6`
  color: ${(props) => props.theme.lightGreen};
  margin-bottom: 20px;
  text-indent: 20px;
`;

export const DescriptionDiv = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 35px;
`;

export const ArabicDiv = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 35px;
`;
