import React from "react";
import styled from "styled-components";

interface SkillCardProps {
  skill: Skill;
}

interface Skill {
  src: string;
  alt: string;
  txt: string;
}

const CardWarp = styled.div`
  width: 30%;
  min-height: 160px;
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #d9d9d9;
  border-radius: 1rem;
  padding: 2rem;
  img {
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
  }
  @media (max-width: 1024px) {
    width: 38%;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 800px) {
    width: 85%;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`;

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <CardWarp>
      <img src={process.env.PUBLIC_URL + skill.src} alt={skill.alt} />
      <CardInfo>
        <div>{skill.txt}</div>
      </CardInfo>
    </CardWarp>
  );
};

export default SkillCard;
