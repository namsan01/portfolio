import styled from "styled-components";

export const ProjectWrap = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  padding-bottom: 10rem;
`;

export const ProjectInfo = styled.div`
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

  @media (max-width: 1300px) {
    .project-txt {
      align-self: flex-start;
    }
  }
`;

export const ProjectCardWarp = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProjectBt = styled.div`
  margin-bottom: 3rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  button {
    width: 8rem;
    height: 5rem;
    font-size: 1.2rem;
    font-weight: 700;
    background: #d9d9d9;
    border: none;
    border-radius: 1rem;
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  @media (max-width: 1256px) {
    margin-left: 1rem;
    margin-right: 2rem;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
    }
  }
`;

export const ProjectCardInfo = styled.div`
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
