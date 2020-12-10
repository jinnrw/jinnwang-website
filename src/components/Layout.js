import * as React from "react";
import NavBar from "./NavBar";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 20px;
`;

const GlobalStyle = createGlobalStyle`
  body, 
  body * {
    font-family: 'Inter',sans-serif;
    color: #242628;
  }

  body {
    font-size: 16px;
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

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Jinn Wang | Frontend Developer</title>
        {/* <meta name="image" content={image} /> */}
      </Helmet>
      <LayoutContainer>
        <GlobalStyle theme="purple" />
        <NavBar />
        {children}
      </LayoutContainer>
    </>
  );
};

export default Layout;