import { FC, forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import { getData } from "../api/notionApi";

const ProjectWrap = styled.div`
  height: 1000px;
`;

interface Result {
  object: string;
  id: string;
  created_time: string;
}

interface ProjectProps {
  ref: any;
}

const Project: FC<ProjectProps> = forwardRef<HTMLDivElement, ProjectProps>(
  (props, ref) => {
    const [results, setResults] = useState<Result[]>([]);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const responseData: any = await getData();
        const resultsData: Result[] = responseData.results;
        setResults(resultsData);
        console.log(resultsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    return (
      <ProjectWrap ref={ref}>
        {results &&
          results.map((result, index) => (
            <div key={index}>
              <p>ID: {result.id}</p>
              <p>Created Time: {result.created_time}</p>
            </div>
          ))}
      </ProjectWrap>
    );
  }
);

export default Project;
