import * as React from "react";
import NavBar from "./NavBar";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 20px;
  position: relative;
`;

const globalColors = {
  blue: "#3eb0ef",
  lightblue: "#3eb0ef60",
}

const GlobalStyle = createGlobalStyle`
  body, 
  h1,
  h2,
  h3,
  h4,
  p {
    font-family: 'Inter',sans-serif;
    color: #242628;
  }

  body {
    font-size: 16px;
  }

  code {
    font-family: 'Fira Mono', sans-serif;
    color: #383838;
    background-color: ${globalColors.lightblue};
    font-size: 0.9em;
  }

  mark {
    position: relative;
    background-color: transparent;
    color: inherit;
    
    &:before {
      content: "";
      pointer-events: none;
      position: absolute;
      left: -5px;
      top: 2px;
      border: 2px solid ${globalColors.blue};
      border-right-color: transparent;
      width: 117%;
      height: 22px;
      transform: rotate(2deg);
      opacity: 0.7;
      border-radius: 8px;
    }

    &:after {
      content: "";
      position: absolute;
      left: -0.5em;
      top: 0.1em;
      border: 2px solid ${globalColors.blue};
      border-left-color: transparent;
      border-top-color: transparent;
      width: 115%;
      height: 24px;
      transform: rotate(-1deg);
      opacity: 0.7;
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
