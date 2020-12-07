import * as React from "react";
import { Header, NavBar, Logo } from "../components";

const renderBody = () => {
  return (
    <div>
    </div>
  );
};
const Work = () => {
  return (
    <div>
      <Logo />
      <main>
        <Header headerText={"Work"} />
      </main>
      <NavBar />
    </div>
  );
};

export default Work;
