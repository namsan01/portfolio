import styled from "styled-components";
import Profile from "../component/Profile";
import Hello from "../component/Hello";
import Header from "../component/Header";
import Skill from "../component/Skill";

const MainWarp = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
`;

const MainPage = () => {
  return (
    <>
      <MainWarp>
        <Header />
        <Hello />
        <Profile />
        <Skill />
      </MainWarp>
    </>
  );
};

export default MainPage;
