import * as React from "react";
import { Layout, Footer } from "../components";
import styled from "styled-components";
import { PROJECTS, PROJECT_FILTERS } from "../constants";
import { imagePath } from "../utils/imagePath";

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 80px auto 0;
  padding: 0 80px;
  display: flex;
`;

const FilterContainer = styled.div`
  position: fixed;
  top: 180px;
  height: 300px;
  width: 200px;
  margin-right: 80px;
`;

const Filters = styled.div``;

const Filter = styled.div`
  margin-bottom: 14px;
  padding-left: 20px;
`;

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

  .tag {
    padding-right: 8px;
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
const renderFilter = (filter, index) => (
  <Filter
    key={index}
    onClick={() => {
      console.log(filter);
    }}
  >
    {filter}
  </Filter>
);

const renderProject = (id, name, description, tags, imgSrc, linkUrl) => (
  <Project key={id}>
    <ProjectInfo>
      <Tags>
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
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
  return (
    <Layout>
      <Content>
        <FilterContainer>
          <h3>My Works</h3>
          <Filter>Show All</Filter>
          <Filters>
            {PROJECT_FILTERS.map((filter, index) =>
              renderFilter(filter, index)
            )}
          </Filters>
        </FilterContainer>
        <ProjectContainer>
          {PROJECTS.map((project) =>
            renderProject(
              project.id,
              project.name,
              project.description,
              project.tags,
              project.imgSrc,
              project.linkUrl
            )
          )}
          <MoreProjects>
            <h2>More Projects To Come</h2>
            <p>I'll be sharing more side projects in the future. Stay tuned :)</p>
          </MoreProjects>
        </ProjectContainer>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Work;
