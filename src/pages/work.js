import * as React from "react";
import { Layout, Footer } from "../components";
import styled from "styled-components";
import { PROJECTS, PROJECT_FILTERS } from "../constants";
import { imagePath } from "../utils/imagePath";

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 80px auto 0;
  padding: 0 80px 200px;
  display: flex;
`;

// Filters
const FilterContainer = styled.div`
  position: fixed;
  top: 180px;
  height: 300px;
  width: 200px;
  margin-right: 80px;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Filter = styled.div`
  position: relative;
  cursor: pointer;
  margin-bottom: 14px;
  padding-left: 20px;
  display: inline-block;
  color: #24262870;
  transition: color .2s ease;

  &:hover {
    color: #242628;
  }

  &.selected {
    color: #242628;

    &:before {
      background-color: #3eb0efcc;
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
    transition: background-color .2s ease;
  }
`;

// Projects
const ProjectContainer = styled.div`
  width: 67%;
  margin: 0 auto;
  margin-right: 100px;
`;

const Project = styled.div`
  display: flex;
  margin-bottom: 200px;
`;

const ProjectInfo = styled.div`
  width: 60%;
  margin-right: 80px;

  .description {
    margin-bottom: 28px;
    white-space: pre-line;
  }
`;

const Tags = styled.div`
  margin-bottom: 10px;
  color: #51626a;
  font-size: 14px;
`;

const Tag = styled.span`
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
      background: #3eb0ef60;
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
    border: 1px solid #cbdfeb;
    transition: all .2s ease;

    &:hover {
        border-color: #242628;
      }
    }
`;

const ProjectImage = styled.div`
  max-width: 450px;

  img {
    width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`;

const MoreProjects = styled.div`
  margin-bottom: 200px;
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
          <h3>My Works</h3>
          <Filter
            onClick={() => {
              setFilterBy(null);
            }}
            className={filterBy ? "" : "selected"}
          >
            Show All
          </Filter>
          <Filters>
            {PROJECT_FILTERS.map((filter) =>
              renderFilter(filter, filterBy, setFilterBy)
            )}
          </Filters>
        </FilterContainer>
        <ProjectContainer>
          {renderProjects(filterBy, projects)}
          {filterBy ? (
            <></>
          ) : (
            <MoreProjects>
              <h2>More Projects To Come</h2>
              <p>
                I'll be sharing more side projects in the future :)
              </p>
            </MoreProjects>
          )}
        </ProjectContainer>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Work;
