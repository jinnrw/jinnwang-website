import * as React from "react";
import { Layout } from "../components";
import styled from "styled-components";

const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HeroText = styled.div`
  width: 430px;
  white-space: break-spaces;
  font-size: 26px;
  margin-right: 50px;

  > :first-child {
    margin-bottom: 16px;
  }

  > :nth-child(2) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const HeroCanvas = styled.div`
  width: 500px;
  height: 500px;
  background: #ddd;
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
    <Layout>
      <Content>
        <Horizon></Horizon>
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
        <HeroCanvas>Placeholder for 3D</HeroCanvas>
      </Content>
    </Layout>
  );
};

export default IndexPage;
