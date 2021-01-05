import * as React from "react";
import { Link } from "gatsby";
import { imagePath } from "../utils/imagePath";
import styled from "styled-components";

const LogoContainer = styled.div`
  margin-right: 20px;

  > a {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <img src={imagePath("./avatar.png")} alt="logo" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
