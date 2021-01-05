import * as React from "react";
import { Layout, Footer, Skills } from "../components";
import {
  BIO_INFO,
  WORK_EXPERIENCE,
} from "../constants/about";
import styled from "styled-components";
import { deviceSize } from "../constants/deviceSize";

// CONTENT
const Content = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 80px auto 0;
  padding: 0 10px;

  @media (max-width: ${deviceSize.tablet}) {
    margin-top: 10px;
  }
`;

// SECTION
const Section = styled.div`
  margin-bottom: 100px;

  @media (max-width: ${deviceSize.mobileL}) {
    margin-bottom: 60px;
  }
`;

// ABOUT ME
const AboutMe = styled.div`
  display: flex;

  p {
    margin-bottom: 0;
  }
`;

// EXPERIENCE
const Experience = styled.div`
  display: flex;
  margin-bottom: 60px;

  @media (max-width: ${deviceSize.mobileL}) {
    margin-bottom: 50px;
  }

  .period {
    font-size: 13px;
    line-height: 20px;
    margin-bottom: 3px;
    color: #51626a;
  }

  .job-title {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 10px;

    @media (max-width: ${deviceSize.mobileL}) {
      font-size: 18px;
      line-height: 22px;
    }
  }

  .company {
    font-size: 16px;
  }

  .summary-list {
    font-size: 16px;
  }
`;

const renderExperience = (id, company, title, period, index) => {
  return (
    <Experience key={id}>
      <div>
        <div className="period">{period}</div>
        <div className="job-title">{title}</div>
        <div className="company">@{company}</div>
      </div>
    </Experience>
  );
};

const About = (props) => {
  return (
    <Layout>
      <Content>
        <Section>
          <h2>About Me</h2>
          <AboutMe>
            <p>{BIO_INFO}</p>
          </AboutMe>
        </Section>
        <Section>
          <h2>Work Experience</h2>
          <>
            {WORK_EXPERIENCE.map((work, index) =>
              renderExperience(
                work.id,
                work.company,
                work.title,
                work.period,
                index
              )
            )}
          </>
        </Section>
        <Section>
          <h2>Skills</h2>
          <Skills />
        </Section>
      </Content>
      <Footer />
    </Layout>
  );
};

export default About;
