import * as React from "react";
import { Link } from "gatsby";
import Logo from "./Logo";
import styled, { css } from "styled-components";

const NavBarContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  padding: 20px 10px 0;
  z-index: 1;
  background-color: #fff;

  ${(props) =>
    props.page &&
    css`
      background-color: transparent;
    `}
`;

const LinkContainer = styled.div`
  > * {
    padding: 0 10px;
  }

  a {
    color: #8a8f9b;
  }
`;

const linkStyles = {
  color: "inherit",
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
        <Link to="/work" activeStyle={linkStyles}>
          Work
        </Link>
      </LinkContainer>
    </NavBarContainer>
  );
};

export default NavBar;
