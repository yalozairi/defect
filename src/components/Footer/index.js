import React from "react";
import {
  FooterWrapper,
  FooterWrapperWrapper,
  InstagramStyled,
  CopyrightStyled,
  TwitterStyled,
} from "./styles";

const Footer = () => {
  return (
    <FooterWrapperWrapper>
      <FooterWrapper>
        <div className="container">
          <div className="row">
            <div className="col">
              <a
                target="_blank"
                href="https://www.instagram.com/defect.kw/"
                rel="noopener noreferrer"
              >
                <InstagramStyled />
              </a>
            </div>

            <div class="col">
              <a
                target="_blank"
                href="https://twitter.com/DEFECTKW1"
                rel="noopener noreferrer"
              >
                <TwitterStyled />
              </a>
            </div>
          </div>
        </div>
        <CopyrightStyled>©2020 by Defect.</CopyrightStyled>
      </FooterWrapper>
    </FooterWrapperWrapper>
  );
};

export default Footer;
