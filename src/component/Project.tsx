import { FC, forwardRef, useEffect, useState } from "react";
import { getData } from "../api/notionApi";
import { ResultItem } from "../types/Project";
import ProjectCard from "./Project/ProjectCard";
import {
  ProjectBt,
  ProjectCardInfo,
  ProjectCardWarp,
  ProjectInfo,
  ProjectWrap,
} from "../styles/project/projectStyle";

interface ProjectProps {
  ref: any;
}

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
              <h1>총 프로젝트 {filteredResults.length}개</h1>
              <h2>* 클릭시 노션으로 이동합니다 *</h2>
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
