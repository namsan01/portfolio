import { FC, RefObject, useState } from "react";
import styled from "styled-components";
import SkillCard from "./SkillCard";
import { skillList } from "../data/skillList";

const SkillWrap = styled.section`
  width: 100%;
  justify-content: center;
  display: flex;
  @media (max-width: 1024px) {
    justify-content: space-between;
  }
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const SkillInfo = styled.div`
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
      background: #d9d9d9;
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

interface SkillProps {
  ref: RefObject<HTMLElement>;
}

const Skill: FC<SkillProps> = () => {
  // 카테고리 관련
  const [selectedCategory, setSelectedCategory] = useState<string>("frontend");
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <SkillWrap>
      <SkillInfo>
        <div className="skill-txt">
          <h2>Skills</h2>
        </div>
        <div className="skill-info">
          <div className="skill-info-left">
            {skillList.map((categoryItem, index) => (
              <button
                key={index}
                style={{
                  backgroundColor:
                    selectedCategory === categoryItem.category
                      ? "#000"
                      : "#d9d9d9",
                  color:
                    selectedCategory === categoryItem.category
                      ? "#fff"
                      : "#000",
                }}
                onClick={() => handleCategoryChange(categoryItem.category)}
              >
                {categoryItem.category}
              </button>
            ))}
          </div>
          <div className="skill-info-right">
            {skillList
              .find(
                (categoryItem) => categoryItem.category === selectedCategory
              )
              ?.items.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
          </div>
        </div>
      </SkillInfo>
    </SkillWrap>
  );
};

export default Skill;
