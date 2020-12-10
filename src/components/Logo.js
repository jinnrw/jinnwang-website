import * as React from "react";
import { Link } from "gatsby";
import logoSrc from "../assets/hero_avatar.png";
import styled from "styled-components";

const LogoContainer = styled.div`
  margin-right: 20px;

  > a {
    width: 60px;
    height: 60px;
    display: block;
  }

  img {
    height: 100%;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <img src={logoSrc} alt="logo" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
