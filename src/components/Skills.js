import * as React from "react";
import { SKILLS } from "../constants";
import styled from "styled-components";
import { imagePath } from "../utils/imagePath";
import { deviceSize } from "../constants/deviceSize";

const SkillsContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(7, 90px);
  grid-gap: 32px;

  @media (max-width: 812px) {
    grid-gap: 16px;
  }

  @media (max-width: ${deviceSize.mobileL}) {
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: auto auto;
  }

  @media (max-width: ${deviceSize.mobileL}) {
    > :last-child {
      display: none;
    }
  }
`;

const SkillsColumn = styled.div`
  display: flex;
  flex-direction: column;

  > :first-child {
    margin-bottom: 20px;
  }

  @media (min-width: ${deviceSize.tablet}) {
    :first-child {
      padding-top: 85px;
    }

    :nth-child(3) {
      padding-top: 105px;
    }

    :nth-child(5) {
      padding-top: 97px;
    }

    :nth-child(7) {
      padding-top: 76px;
    }
  }
`;

const Skill = styled.div`
  width: 90px;
  height: 90px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.05), 0 3px 10px 0 rgba(0, 0, 0, 0.01),
    0 18px 30px -10px rgba(75, 82, 94, 0.099);
  text-align: center;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .imgContainer {
    height: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-height: 100%;
    }
  }

  .skillName {
    font-size: 13px;
    color: #51626a;
    margin-top: 8px;
    line-height: 14px;
  }
`;

const getSkillsInColumns = () => {
  const itemsInColumn = 2;
  const skillsInColumns = [];
  for (let i = 0; i < SKILLS.length; i++) {
    const element = SKILLS[i];
    if (!(i % itemsInColumn)) {
      skillsInColumns.push([element]);
    } else {
      skillsInColumns[(i + 1) / itemsInColumn - 1].push(element);
    }
  }
  return skillsInColumns;
};

// Render
const renderSkills = (skillList) =>
  skillList.map((skill, index) => (
    <Skill key={index}>
      <div className="imgContainer">
        <img src={imagePath(skill.imgSrc)} alt={skill.name} />
      </div>
      <div className="skillName">{skill.name}</div>
    </Skill>
  ));

const Skills = () => {
  const skills = getSkillsInColumns();

  return (
    <SkillsContainer>
      {skills.map((skillList, index) => {
        return (
          <SkillsColumn key={index}>{renderSkills(skillList)}</SkillsColumn>
        );
      })}
    </SkillsContainer>
  );
};

export default Skills;
