import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

const SkillWrap = styled.section`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const SkillInfo = styled.div`
  width: 86%;
  height: 1000px;
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
    gap: 20rem;
  }
  .skill-info-left {
    display: flex;
    padding-left: 2rem;
    flex-direction: column;
    gap: 5rem;
    button {
      width: 20rem;
      height: 20rem;
      border-radius: 15rem;
      font-size: 2rem;
      cursor: pointer;
      background: #d9d9d9;
    }
  }
`;

const Skill = () => {
  // 카테고리 관련
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const handleCategoryChange = (category: number) => {
    setSelectedCategory(category);
    // console.log("눌리니?");
  };

  return (
    <SkillWrap>
      <SkillInfo>
        <div className="skill-txt">
          <h2>Skills</h2>
        </div>
        <div className="skill-info">
          <div className="skill-info-left">
            <button
              style={{
                backgroundColor: selectedCategory === 1 ? "#000" : "#d9d9d9",
                color: selectedCategory === 1 ? "#fff" : "#000",
              }}
              onClick={() => handleCategoryChange(1)}
            >
              Frontend
            </button>
            <button
              style={{
                backgroundColor: selectedCategory === 2 ? "#000" : "#d9d9d9",
                color: selectedCategory === 2 ? "#fff" : "#000",
              }}
              onClick={() => handleCategoryChange(2)}
            >
              Collaboration & Tools
            </button>
          </div>
          <div className="skill-info-right">
            <div>{selectedCategory}에 대한 내용을 여기에 추가하세요.</div>
          </div>
        </div>
      </SkillInfo>
    </SkillWrap>
  );
};

export default Skill;
