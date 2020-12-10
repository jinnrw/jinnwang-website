import * as React from "react";
import { Layout, Footer } from "../components";
import { ABOUT_ME, WORK_EXPERIENCE, SKILLS } from "../constants";
import styled from "styled-components";
import { imagePath } from "../utils/imagePath";

// CONTENT
const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 80px;
`;

// SECTION
const Section = styled.div`
  margin-bottom: 100px;
`;

const Heading = styled.div`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 40px;
  text-transform: Uppercase;
`;

// ABOUT ME
const AboutMeText = styled.div`
  white-space: pre-line;
`;

// EXPERIENCE
const ExperienceContainer = styled.div`
  padding: 0 20px;
`;

const Experience = styled.div`
  display: flex;
  margin-bottom: 60px;

  .period {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 3px;
    color: #343f44;
  }

  .job-title {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 10px;
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

// SKILL
const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 0 50px;
`;

const Skill = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  padding: 20px 16px;
  border-radius: 16px;

  > :first-child {
    font-weight: bold;
    margin-bottom: 8px;
  }

  > :nth-child(2) {
    font-size: 14px;
  }
`;

const renderSkill = (id, category, list) => (
  <Skill key={id}>
    <div>{category}</div>
    <div>{list}</div>
  </Skill>
);

const About = (props) => {
  return (
    <Layout>
      <Content>
        <Section>
          <Heading>About Me</Heading>
          <AboutMeText>{ABOUT_ME}</AboutMeText>
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
          <SkillContainer>
            {SKILLS.map((skill) =>
              renderSkill(skill.id, skill.category, skill.list)
            )}
          </SkillContainer>
        </Section>
      </Content>
      <Footer />
    </Layout>
  );
};

export default About;
