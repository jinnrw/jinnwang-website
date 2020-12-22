import * as React from "react";
import { Layout } from "../components";
import Canvas from "../components/Canvas";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
`;

const HeroContainer = styled.div`
  width: 50%;
  padding-right: 100px;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  user-select: none;
`;

const HeroText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  max-width: 450px;
  white-space: break-spaces;

  > :first-child {
    font-size: 28px;
    margin-bottom: 16px;
    font-weight: 700;
  }

  > :nth-child(2) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const Horizon = styled.div`
  background-image: linear-gradient(
    180deg,
    transparent 0,
    #000 88%,
    transparent
  );
  opacity: 0.1;
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IndexPage = () => {
  return (
    <Layout page="home">
      <Content>
        <Horizon></Horizon>
        <Canvas />
        <HeroContainer>
          <HeroText>
            <div>
              Hello, I’m Jinn Wang. {`\n`}
              Frontend Developer in Vancouver. {`\n`}
            </div>
            <div>
              I’m passionate about building the view for users to interact with,
              the client-side.
            </div>
          </HeroText>
        </HeroContainer>
      </Content>
    </Layout>
  );
};

export default IndexPage;
