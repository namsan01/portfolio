import React, { FC, RefObject } from "react";
import styled from "styled-components";

const HeaderWrap = styled.header`
  display: flex;
  position: sticky;
  justify-content: center;
  top: 0;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
`;

const HeaderNav = styled.nav`
  position: sticky;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid #d9d9d9;
  .banner {
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 2.5rem;
    }
    span {
      font-size: 1.5rem;
    }
  }
  .right {
    width: 40%;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 2rem;
  }
`;

interface HeaderProps {
  helloRef: RefObject<HTMLElement>;
  profileRef: RefObject<HTMLElement>;
  skillRef: RefObject<HTMLElement>;
  projectRef: RefObject<HTMLElement>;
  handleScrollRef: (ref: RefObject<HTMLElement>) => void;
}

const Header: FC<HeaderProps> = ({
  helloRef,
  profileRef,
  skillRef,
  projectRef,
  handleScrollRef,
}) => {
  return (
    <HeaderWrap>
      <HeaderNav>
        <div className="banner">
          <img src={process.env.PUBLIC_URL + "/images/banner.svg"} alt="logo" />
          <span>namsan Portfolio</span>
        </div>
        <ul className="right">
          <li onClick={() => handleScrollRef(helloRef)}>Home</li>
          <li onClick={() => handleScrollRef(profileRef)}>Profile</li>
          <li onClick={() => handleScrollRef(skillRef)}>Skill</li>
          <li onClick={() => handleScrollRef(projectRef)}>Project</li>
        </ul>
      </HeaderNav>
    </HeaderWrap>
  );
};

export default Header;
