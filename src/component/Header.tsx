import React from "react";
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
  padding: 2rem;
  border-bottom: 1px solid #d9d9d9;

  .right {
    width: 40%;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 2rem;
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderNav>
        <div>나 여기 로고</div>
        <ul className="right">
          <li>Home</li>
          <li>Profile</li>
          <li>Skill</li>
          <li>Project</li>
        </ul>
      </HeaderNav>
    </HeaderWrap>
  );
};

export default Header;
