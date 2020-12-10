import * as React from "react";
import { Link } from "gatsby";
import Logo from "./Logo";
import styled from "styled-components";

const NavBarContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${"" /* background-color: #fff; */}
  position: sticky;
  top: 0px;
  padding: 20px 10px;
  z-index: 1;
`;

const LinkContainer = styled.div`
  > * {
    padding: 0 10px;
  }

   a{
     color: #8a8f9b;
   }
`;

const linkStyles = {
  color: "inherit",
};

const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo></Logo>
      <LinkContainer>
        <Link to="/" activeStyle={linkStyles}>
          Home
        </Link>
        <Link to="/about" activeStyle={linkStyles}>About</Link>
        <Link to="/work" activeStyle={linkStyles}>Work</Link>
      </LinkContainer>
    </NavBarContainer>
  );
};

export default NavBar;
