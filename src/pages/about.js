import * as React from "react";
import { Header, NavBar, Logo } from "../components";

const About = (props) => {
  return (
    <div>
      <Logo />
      <Header headerText={"About"} />
      <p>Lorem</p>
      <NavBar />
    </div>
  );
};

export default About;
