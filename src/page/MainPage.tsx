import styled, { ThemeProvider } from "styled-components";
import Profile from "../component/Profile";
import Hello from "../component/Hello";
import Header from "../component/Header";
import Skill from "../component/Skill";
import Project from "../component/Project";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, toggleTheme } from "../redux/themeSlice";
import Buttons from "../component/Buttons";
import Contact from "../component/Contact";

const MainWarp = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? "#fff" : "#292929"};
  color: ${({ theme }) => (theme.mode === "light" ? "#000" : "#d9d9d9")};
`;

const MainPage = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.dark.mode);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme && savedTheme !== "dark") {
      dispatch(toggleTheme());
    }
  }, [dispatch]);

  const helloRef = useRef(null);
  const profileRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollRef = (ref: any) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 60,
        behavior: "smooth",
      });
    }
    // console.log(ref.current);
  };

  return (
    <>
      <ThemeProvider theme={{ mode: darkMode }}>
        <MainWarp>
          <Header
            handleScrollRef={handleScrollRef}
            helloRef={helloRef}
            profileRef={profileRef}
            skillRef={skillRef}
            projectRef={projectRef}
            contactRef={contactRef}
          />
          <Hello ref={helloRef} />
          <Profile ref={profileRef} />
          <Skill ref={skillRef} />
          <Project ref={projectRef} />
          <Contact ref={contactRef} />
          <Buttons />
        </MainWarp>
      </ThemeProvider>
    </>
  );
};

export default MainPage;
