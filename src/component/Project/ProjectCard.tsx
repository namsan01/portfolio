import React, { FC } from "react";
import styled from "styled-components";
import { ResultItem } from "../../types/Project";

const ProjectCardWrap = styled.div`
  width: 32%;
  max-height: 350px;
  border-radius: 20px 20px 0 0;
  background: #fff;
  border: 1px solid #d9d9d9;
  margin-bottom: 2rem;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-bottom: 1px solid #d9d9d9;
  }
  @media (max-width: 1024px) {
    width: 48%;
  }

  @media (max-width: 800px) {
    width: 75%;
  }
`;

const ProjectInfo = styled.div`
  padding: 1rem;
  font-size: 1rem;
  background: #d9d9d9;
  h2 {
    display: inline-block;
    min-width: auto;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  .personal-project {
    background: #a5ffc9;
  }

  .collaborative-project {
    background: #a5c9ff;
  }
`;

interface ProjectProps {
  result: ResultItem;
}

const ProjectCard: FC<ProjectProps> = ({ result }) => {
  const category =
    result.properties.Tag.multi_select[0]?.name === "개인 프로젝트"
      ? "personal-project"
      : "collaborative-project";

  return (
    <ProjectCardWrap>
      <a
        target="_blank"
        href={result.properties.notion.rich_text[0].plain_text}
        rel="noopener noreferrer"
      >
        <img
          src={result.cover.file.url}
          alt={result.properties.Tag.multi_select[0]?.name}
        />
        <ProjectInfo>
          <h1>{result.properties.name.title[0].plain_text}</h1>
          <h2 className={category}>
            {result.properties.Tag.multi_select[0]?.name}
          </h2>
          {result.properties.Tag.multi_select[1]?.name && (
            <h2 style={{ background: "#595959", marginLeft: "1rem" }}>
              {result.properties.Tag.multi_select[1]?.name}
            </h2>
          )}
          <br />
          <h2>
            작업기간 : {result.properties.WorkPeriod.rich_text[0].plain_text}
          </h2>
        </ProjectInfo>
      </a>
    </ProjectCardWrap>
  );
};

export default ProjectCard;
