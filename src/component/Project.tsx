import { FC, RefObject, useEffect } from "react";
import { getData } from "../api/notionApi";
import styled from "styled-components";

const ProjectWrap = styled.div`
  height: 1000px;
`;

interface ProjectProps {
  ref: RefObject<HTMLElement>;
}

const Project: FC<ProjectProps> = () => {
  useEffect(() => {
    getData();
  }, []);

  return <ProjectWrap>Project</ProjectWrap>;
};

export default Project;
