import * as React from "react";
import { Layout } from "../components";
import Canvas from "../components/Canvas";
import { deviceSize } from "../constants/deviceSize";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;

  @media (max-width: ${deviceSize.tabletL}) {
    padding: 0 30px;
  }

  @media (max-width: ${deviceSize.mobileL}) and (orientation: portrait) {
    align-items: flex-end;
    padding: 0;
  }
`;

const HeroContainer = styled.div`
  width: 50%;
  padding-right: 100px;
  display: flex;
  justify-content: flex-end;
  user-select: none;
  z-index: 1;

  @media (max-width: ${deviceSize.tabletL}) {
    padding-right: 0;
  }

  @media (max-width: ${deviceSize.mobileL}) and (orientation: portrait) {
    width: 100%;
    justify-content: center;
  }
`;

const HeroText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  max-width: 450px;
  white-space: break-spaces;

  > :first-child {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 16px;

    @media (max-width: ${deviceSize.tabletL}) {
      font-size: 26px;
    }

    @media (max-width: ${deviceSize.mobileL}) {
      font-size: 20px;
    }
  }

  > :nth-child(2) {
    font-size: 18px;

    @media (max-width: ${deviceSize.tabletL}) {
      font-size: 16px;
    }
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

  @media (max-width: ${deviceSize.mobile}) {
    height: 40%;
  }
`;

const IndexPage = () => {
  return (
    <Layout page="home">
      <Content>
        <Horizon></Horizon>
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
        <Canvas />
      </Content>
    </Layout>
  );
};

export default IndexPage;
