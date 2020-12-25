import * as React from "react";
import NavBar from "./NavBar";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { colors } from "../constants/globalStyle";
import { deviceSize } from "../constants/deviceSize";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 20px;
  position: relative;

  @media (max-width: ${deviceSize.mobileL}) {
    min-height: 85vh;
  }
`;

const GlobalStyle = createGlobalStyle`
  body, 
  h1,
  h2,
  h3,
  h4,
  p {
    font-family: 'Inter',sans-serif;
    color: ${colors.text};
  }

  body {
    font-size: 17px;
  
    @media (max-width: ${deviceSize.tablet}) {
      font-size: 16px;
    }
  }

  h2 {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 28px;

    @media (max-width: ${deviceSize.tabletL}) {
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 22px;
    }

    @media (max-width: ${deviceSize.tablet}) {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 12px;
    }
  }

  code {
    font-family: 'Fira Mono', sans-serif;
    color: #383838;
    background-color: ${colors.lightblue};
    font-size: 0.9em;
  }

  mark {
    position: relative;
    background-color: transparent;
    color: inherit;
    display: inline-block;
    margin: 0;

    &:before,
    &:after {
      content: "";
      position: absolute;
      border: 2px solid ${colors.textHighlight};
      opacity: 0.7;
    }

    &:before {
      left: -5px;
      top: 4px;
      border-right-color: transparent;
      width: 117%;
      height: 22px;
      transform: rotate(2deg);
      border-radius: 8px;
    }

    &:after {
      left: 0;
      top: 4px;
      border-left-color: transparent;
      border-top-color: transparent;
      width: 105%;
      height: 24px;
    }
  }

  button {
    border: none;
    background: none;
  }

  ul,
  img {
    margin: 0;
  }

  ul {
    list-style: none;

    li {
      position: relative;
      margin: 0 0 5px 0;
      padding-left: 26px;

      &::before {
        content: "";
        background: #000;
        width: 6px;
        height: 6px;
        position: absolute;
        top: 10px;
        left: 8px;
        border-radius: 5px;
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Layout = ({ page, children }) => {
  return (
    <>
      <Helmet>
        <title>Jinn Wang | Frontend Developer</title>
        <meta
          property="description"
          content="Jinn Wang is a frontend developer based in Vancouver. He is passionate about building the view for users to interact with, the client-side"
        />
        <link rel="icon" href="data:image/png;base64,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" type="image/x-icon" />
        <meta name="author" content="Jinn Wang"></meta>
      </Helmet>
      <LayoutContainer>
        <GlobalStyle theme="purple" />
        <NavBar page={page} />
        {children}
      </LayoutContainer>
    </>
  );
};

export default Layout;
