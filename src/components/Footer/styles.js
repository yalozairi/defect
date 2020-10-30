import styled from "styled-components";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

export const FooterWrapperWrapper = styled.div`
  height: 180px;
  width: 100%;
  z-index: 3;
  background-color: ${(props) => props.theme.black};
  display: flex;
  justify-content: center;
  position: absolute;
  @media screen and (max-width: 768px) {
    height: 120px;
    padding-bottom: 15px;
    z-index: 3;
    width: 100%;
    background-color: ${(props) => props.theme.black};
    display: flex;
    justify-content: center;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const InstagramStyled = styled(AiOutlineInstagram)`
  color: ${(props) => props.theme.lightGreen};
  font-size: 3rem;
  :hover {
    transition: ease 0.3s;
    color: ${(props) => props.theme.lightGreen};
  }
  @media screen and (max-width: 768px) {
    margin-top: 15px;
    color: ${(props) => props.theme.lightGreen};
    font-size: 2.25rem;
    :hover {
      transition: ease 0.3s;
      color: ${(props) => props.theme.lightGreen};
    }
  }
`;

export const TwitterStyled = styled(AiOutlineTwitter)`
  color: ${(props) => props.theme.lightGreen};
  font-size: 3rem;
  :hover {
    transition: ease 0.3s;
    color: ${(props) => props.theme.lightGreen};
  }
  @media screen and (max-width: 768px) {
    margin-top: 15px;
    color: ${(props) => props.theme.lightGreen};
    font-size: 2.25rem;
    :hover {
      transition: ease 0.3s;
      color: ${(props) => props.theme.lightGreen};
    }
  }
`;

export const CopyrightStyled = styled.h5`
  font-size: 13px;
  color: ${(props) => props.theme.lightGreen};
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 30px;
`;
