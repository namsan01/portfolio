import styled from "styled-components";

export const SkillWrap = styled.section`
  width: 100%;
  height: auto;
  justify-content: center;
  display: flex;
  @media (max-width: 1024px) {
    justify-content: space-between;
  }
  @media (max-width: 800px) {
    justify-content: center;
  }
  margin-bottom: 10rem;
`;

export const SkillInfo = styled.div`
  width: 90%;
  height: 100%;
  gap: 5rem;

  .skill-txt {
    border-left: 5px solid #d9d9d9;
    font-size: 3rem;
    padding-left: 2rem;
    margin: 2rem;
    margin-bottom: 5rem;
  }
  .skill-info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .skill-info-left {
    width: 20rem;
    height: auto;
    display: flex;
    position: sticky;
    top: 60px;
    flex-direction: column;
    align-self: flex-start;
    gap: 5rem;
    z-index: 90;
    button {
      width: 100%;
      aspect-ratio: 1/1;
      border-radius: 50%;
      font-size: 2.5rem;
      cursor: pointer;
      border: none;
    }
  }
  .skill-info-right {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5%;
    @media (max-width: 1024px) {
      justify-content: end;
      padding-bottom: 1rem;
    }
    @media (max-width: 800px) {
      padding-bottom: 1rem;
    }
  }
`;