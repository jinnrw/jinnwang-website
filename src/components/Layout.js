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
    text-transform: Uppercase;

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
        {/* <meta name="image" content={image} /> */}
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
