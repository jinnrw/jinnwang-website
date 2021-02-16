import * as React from "react";
import logo_linkedin from "../assets/logo_linkedin.png";
import logo_github from "../assets/logo_github.png";
import icon_resume from "../assets/icon_resume.svg";
import styled from "styled-components";

const FooterContainer = styled.div`
  padding: 20px 0;
`;

const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  width: 100px;
  border-top: 2px solid #ddd;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  > a {
    width: 30px;
    height: 30px;
  }
`;

const FooterTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;

  > :nth-child(2) {
    color: #939393;
    margin-top: 3px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <Divider></Divider>
        <SocialLinks>
          <a
            href="https://www.linkedin.com/in/jinnwang/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo_linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/jinnrw" target="_blank" rel="noreferrer">
            <img src={logo_github} alt="GitHub" />
          </a>
          <a href="https://resume.jinnwang.com/" target="_blank" rel="noreferrer">
            <img src={icon_resume} alt="Resume" />
          </a>
        </SocialLinks>
        <FooterTag>
          <div>Jinn Wang © 2021</div>
          <div>Vancouver, Canada</div>
        </FooterTag>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
