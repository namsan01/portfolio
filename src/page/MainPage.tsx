import styled from "styled-components";
import Profile from "../component/Profile";
import Hello from "../component/Hello";
import Header from "../component/Header";
import Skill from "../component/Skill";
import Project from "../component/Project";
import { useRef } from "react";

const MainWarp = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
`;

const MainPage = () => {
  const helloRef = useRef(null);
  const profileRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);

  const handleScrollRef = (ref: any) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
    console.log(ref.current);
  };
  return (
    <>
      <MainWarp>
        <Header
          handleScrollRef={handleScrollRef}
          helloRef={helloRef}
          profileRef={profileRef}
          skillRef={skillRef}
          projectRef={projectRef}
        />
        <Hello ref={helloRef} />
        <Profile ref={profileRef} />
        <Skill ref={skillRef} />
        <Project ref={projectRef} />
      </MainWarp>
    </>
  );
};

export default MainPage;
