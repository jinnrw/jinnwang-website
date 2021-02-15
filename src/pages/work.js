import * as React from "react";
import { Layout, Footer } from "../components";
import styled from "styled-components";
import { PROJECTS, PROJECT_FILTERS } from "../constants";
import { colors } from "../constants/globalStyle";
import { deviceSize } from "../constants/deviceSize";
import { imagePath } from "../utils/imagePath";

const Content = styled.div`
  width: 100%;
  max-width: 1150px;
  margin: 80px auto 0;
  padding: 0 10px;
  display: flex;
  flex: 1;

  @media (max-width: ${deviceSize.tabletL}) {
    max-width: 920px;
  }

  @media (max-width: ${deviceSize.tablet}) {
    flex-direction: column;
    margin-top: 0;
  }
`;

// Filters
const FilterContainer = styled.div`
  position: sticky;
  top: 160px;
  height: 400px;
  z-index: 1;
  padding-right: 50px;

  @media (max-width: ${deviceSize.tablet}) {
    height: auto;
    background-color: #fff;
    padding: 10px 0 10px;
    top: 90px;

    > :first-child {
      margin-bottom: 0;
    }
  }
`;

const Filters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${deviceSize.tablet}) {
    flex-direction: row;
    overflow-y: auto;
    padding: 20px 0;
  }
`;

const Filter = styled.div`
  position: relative;
  cursor: pointer;
  margin-bottom: 14px;
  padding-left: 20px;
  display: inline-block;
  color: ${colors.lightText};
  transition: color 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${colors.text};
  }

  &.selected {
    color: ${colors.text};

    &:before {
      background-color: #3eb0efcc;
      ${"" /* background-color: colors.lightblue; */}
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 3px;
    left: 0;
    width: 8px;
    height: 16px;
    border-radius: 4px;
    background-color: #8a8f9b;
    transition: background-color 0.2s ease;
  }

  @media (max-width: ${deviceSize.tablet}) {
    margin-bottom: 0;
    margin-right: 16px;
    padding-left: 16px;
  }
`;

// Projects
const ProjectContainer = styled.div`
  width: 75%;
  margin: 0 auto;

  @media (max-width: ${deviceSize.tablet}) {
    width: 100%;
    padding: 0 20px;
  }
`;

const Project = styled.div`
  display: flex;
  margin-bottom: 150px;

  @media (max-width: ${deviceSize.tabletL}) {
    margin-bottom: 80px;
  }

  @media (max-width: ${deviceSize.tablet}) {
    flex-direction: column;
    border-bottom: 1px solid ${colors.border};
    margin-bottom: 50px;
    padding-bottom: 50px;
  }
`;

const ProjectInfo = styled.div`
  width: 60%;
  margin-right: 80px;

  .description {
    margin-bottom: 28px;
    white-space: pre-line;
  }

  @media (max-width: ${deviceSize.tablet}) {
    width: 100%;
    margin-bottom: 50px;
    margin-right: 0;
  }
`;

const Tags = styled.div`
  margin-bottom: 10px;
  color: #51626a;
  font-size: 14px;
`;

const Tag = styled.span`
  display: inline-block;
  margin-right: 12px;

  &.selected {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -5px;
      width: calc(100% + 10px);
      height: 100%;
      transform: skew(-30deg);
      background-color: ${colors.lightblue};
      z-index: -1;
    }
  }
`;

const ProjectLink = styled.a`
    padding: 10px 14px;
    height: 37px;
    line-height: 37px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid ${colors.border};
    transition: all .2s ease;

    &:hover {
        border-color: ${colors.text};
      }
    }
`;

const ProjectImage = styled.div`
  max-width: 450px;
  margin: 0 auto;

  img {
    width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`;

const MoreProjects = styled.div`
  margin-bottom: 200px;
  @media (max-width: ${deviceSize.tabletL}) {
    margin-bottom: 80px;
  }
`;

// render
const renderFilter = (filter, filterBy, setFilterBy) => (
  <Filter
    key={filter}
    onClick={() => {
      setFilterBy(filter);
    }}
    className={filter === filterBy ? "selected" : ""}
  >
    {filter}
  </Filter>
);

const renderProjects = (filterBy, projects) => {
  return projects
    .filter((project) => {
      if (filterBy) return project.tags.includes(filterBy);
      else return project;
    })
    .map((filteredProject) => {
      const { id, name, description, tags, imgSrc, linkUrl } = filteredProject;
      return renderProject(
        id,
        name,
        description,
        tags,
        imgSrc,
        linkUrl,
        filterBy
      );
    });
};

const renderProject = (
  id,
  name,
  description,
  tags,
  imgSrc,
  linkUrl,
  filterBy
) => (
  <Project key={id}>
    <ProjectInfo>
      <Tags>
        {tags.map((tag, index) => (
          <Tag key={index} className={filterBy === tag ? "selected" : ""}>
            {tag}
          </Tag>
        ))}
      </Tags>
      <h2>{name}</h2>
      <p className="description">{description}</p>
      <ProjectLink href={linkUrl} target="_blank" rel="noreferrer">
        View Source
      </ProjectLink>
    </ProjectInfo>
    <a href={linkUrl} target="_blank" rel="noreferrer">
      <ProjectImage>
        <img src={imagePath(imgSrc)} alt={name} />
      </ProjectImage>
    </a>
  </Project>
);

const Work = () => {
  const projects = PROJECTS;
  const [filterBy, setFilterBy] = React.useState(null);

  return (
    <Layout>
      <Content>
        <FilterContainer>
          <h2>My Works</h2>
          <Filters>
            <Filter
              onClick={() => {
                setFilterBy(null);
              }}
              className={filterBy ? "" : "selected"}
            >
              Show All
            </Filter>
            {PROJECT_FILTERS.map((filter) =>
              renderFilter(filter, filterBy, setFilterBy)
            )}
          </Filters>
        </FilterContainer>
        <ProjectContainer>
          {renderProjects(filterBy, projects)}
          {!filterBy && (
            <MoreProjects>
              <h2>More Projects To Come</h2>
              <p>I'll be sharing more side projects in the future :)</p>
            </MoreProjects>
          )}
        </ProjectContainer>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Work;
