import { FC, forwardRef, useState } from "react";
import { skillList } from "../data/skillList";
import SkillCard from "./Skill/SkillCard";
import { SkillInfo, SkillWrap } from "../styles/skill/skillStyle";

interface SkillProps {
  ref: any;
}

const Skill: FC<SkillProps> = forwardRef<HTMLDivElement, SkillProps>(
  (props, ref) => {
    // 카테고리 관련
    const [selectedCategory, setSelectedCategory] =
      useState<string>("frontend");
    const handleCategoryChange = (category: string) => {
      setSelectedCategory(category);
    };

    return (
      <SkillWrap ref={ref}>
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
  }
);

export default Skill;
