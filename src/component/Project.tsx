import React, { FC, forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import { getData } from "../api/notionApi";
import ProjectCard from "./Project/ProjectCard";
import { ResultItem } from "../types/Project";

interface ProjectProps {
  ref: any;
}

const ProjectWrap = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const ProjectInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  .project-txt {
    width: 85%;
    border-left: 5px solid #d9d9d9;
    font-size: 3rem;
    padding-left: 2rem;
    margin: 2rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 1256px) {
    .project-txt {
      align-self: flex-start;
    }
  }
`;

const ProjectCardWarp = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectBt = styled.div`
  margin-bottom: 3rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  button {
    width: 8rem;
    height: 5rem;
    font-size: 1.2rem;
    background: #d9d9d9;
    border: 1px solid #000;
    border-radius: 1rem;
  }

  @media (max-width: 1256px) {
    margin-left: 1rem;
    margin-right: 2rem;
  }
`;

const ProjectCardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  @media (max-width: 1256px) {
    margin-left: 1rem;
    gap: 1%;
  }
  @media (max-width: 1024px) {
    margin-left: 0px;
    justify-content: center;
  }
`;

const Project: FC<ProjectProps> = forwardRef<HTMLDivElement, ProjectProps>(
  (props, ref) => {
    const [results, setResults] = useState<ResultItem[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number>(1);

    const fetchData = async () => {
      try {
        const responseData: ResultItem[] = await getData();
        setResults(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    const handleCategoryChange = (category: number) => {
      setSelectedCategory(category);
    };

    const filteredResults =
      selectedCategory === 1
        ? results
        : results.filter(
            (result) =>
              result.properties.Tag.multi_select[0]?.name ===
              (selectedCategory === 2
                ? "프론트 & 백엔드 협업 프로젝트"
                : "개인 프로젝트")
          );

    return (
      <ProjectWrap ref={ref}>
        <ProjectInfo>
          <div className="project-txt">
            <h2>Project</h2>
          </div>
          <ProjectCardWarp>
            <ProjectBt>
              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  style={{
                    backgroundColor:
                      selectedCategory === 1 ? "#000" : "#d9d9d9",
                    color: selectedCategory === 1 ? "#fff" : "#000",
                  }}
                  onClick={() => handleCategoryChange(1)}
                >
                  전체
                </button>
                <button
                  style={{
                    backgroundColor:
                      selectedCategory === 2 ? "#000" : "#d9d9d9",
                    color: selectedCategory === 2 ? "#fff" : "#000",
                  }}
                  onClick={() => handleCategoryChange(2)}
                >
                  팀 프로젝트
                </button>
                <button
                  style={{
                    backgroundColor:
                      selectedCategory === 3 ? "#000" : "#d9d9d9",
                    color: selectedCategory === 3 ? "#fff" : "#000",
                  }}
                  onClick={() => handleCategoryChange(3)}
                >
                  개인 프로젝트
                </button>
              </div>
              <h2>총 프로젝트 {filteredResults.length}</h2>
            </ProjectBt>
            <ProjectCardInfo>
              {filteredResults.map((result, index) => (
                <ProjectCard key={index} result={result} />
              ))}
            </ProjectCardInfo>
          </ProjectCardWarp>
        </ProjectInfo>
      </ProjectWrap>
    );
  }
);

export default Project;
