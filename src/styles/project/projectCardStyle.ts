import styled from "styled-components";

export const ProjectCardWrap = styled.div`
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

export const ProjectInfo = styled.div`
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
