import * as React from "react";
import { Layout, Footer, Skills } from "../components";
import { ABOUT_ME, WORK_EXPERIENCE } from "../constants";
import styled from "styled-components";
import { imagePath } from "../utils/imagePath";
import { deviceSize } from "../constants/deviceSize";

// CONTENT
const Content = styled.div`
  width: 100%;
  max-width: 840px;
  margin: 80px auto 0;
`;

// SECTION
const Section = styled.div`
  margin-bottom: 100px;

  @media (max-width: ${deviceSize.mobileL}) {
    margin-bottom: 60px;
  }
`;

const Heading = styled.h2`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 40px;
  text-transform: Uppercase;
`;

// ABOUT ME
const AboutMeText = styled.div`
  white-space: pre-line;
  line-height: 30px;
`;

// EXPERIENCE
const ExperienceContainer = styled.div`
  padding: 0 20px;

  @media (max-width: ${deviceSize.mobileL}) {
    padding: 0;
  }
`;

const Experience = styled.div`
  display: flex;
  margin-bottom: 60px;

  @media (max-width: ${deviceSize.mobileL}) {
    margin-bottom: 30px;
  }

  .period {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 3px;
    color: #51626a;
  }

  .job-title {
    font-size: 24px;
    line-height: 32px;
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

const Thumbnail = styled.div`
  width: 120px;
  height: 120px;
  margin-right: 40px;

  @media (max-width: ${deviceSize.mobileL}) {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }
`;

const renderExperience = (id, company, title, summary, period, index) => {
  const imageObject = [
    "./avatar_1.png",
    "./avatar_2.png",
    "./avatar_3.png",
    "./avatar_4.png",
  ];
  return (
    <Experience key={id}>
      <Thumbnail>
        <img src={imagePath(imageObject[index])} alt={title} />
      </Thumbnail>
      <div>
        <div className="period">{period}</div>
        <div className="job-title">{title}</div>
        <div className="company">@{company}</div>
        {/* <ul>
        {summary.map((list) => (
          <li className="summary-list">{list}</li>
        ))}
      </ul> */}
      </div>
    </Experience>
  );
};

const About = (props) => {
  return (
    <Layout>
      <Content>
        <Section>
          <Heading>About Me</Heading>
          <AboutMeText
            dangerouslySetInnerHTML={{
              __html: ABOUT_ME,
            }}
          ></AboutMeText>
        </Section>
        <Section>
          <Heading>Work Experience</Heading>
          <ExperienceContainer>
            {WORK_EXPERIENCE.map((work, index) =>
              renderExperience(
                work.id,
                work.company,
                work.title,
                work.summary,
                work.period,
                index
              )
            )}
          </ExperienceContainer>
        </Section>
        <Section>
          <Heading>Skills</Heading>
          <Skills />
        </Section>
      </Content>
      <Footer />
    </Layout>
  );
};

export default About;
