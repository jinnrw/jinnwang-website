import * as React from "react";
import { Link } from "gatsby";
import Logo from "./Logo";
import styled, { css } from "styled-components";
import { colors } from "../constants/globalStyle";

const NavBarContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 20px 0;
  z-index: 2;
  background-color: #fff;
  user-select: none;

  ${(props) =>
    props.page &&
    css`
      background-color: transparent;
    `}
`;

const LinkContainer = styled.div`
  > * {
    margin: 0 10px;
  }

  a {
    color: ${colors.grey};

    &:hover {
      text-decoration: underline;
    }
  }
`;

const linkStyles = {
  color: "inherit",
  textDecoration: "none",
};

const NavBar = (props) => {
  return (
    <NavBarContainer page={props.page}>
      <Logo></Logo>
      <LinkContainer>
        <Link to="/" activeStyle={linkStyles}>
          Home
        </Link>
        <Link to="/about" activeStyle={linkStyles}>
          About
        </Link>
        <Link to="/project" activeStyle={linkStyles}>
          Project
        </Link>
      </LinkContainer>
    </NavBarContainer>
  );
};

export default NavBar;
