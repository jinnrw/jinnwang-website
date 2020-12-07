import * as React from "react";
import { NavBar, Logo } from "../components";

const renderBody = () => {
  return (
    <div>
      <p>
        I’m Jinn Wang, a front end developer. I’m passionate about building the
        view for users to interact with, the client-side.
      </p>
      <div>Placeholder for 3D</div>
    </div>
  );
};

const IndexPage = () => {
  return (
    <div>
      <Logo />
      <main>{renderBody()}</main>
      <NavBar />
    </div>
  );
};

export default IndexPage;
