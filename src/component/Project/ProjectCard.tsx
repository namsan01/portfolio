import { FC } from "react";
import {
  ProjectCardWrap,
  ProjectInfo,
} from "../../styles/project/projectCardStyle";
import { ResultItem } from "../../types/Project";

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
