import { faArrowUp, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { RootState, toggleTheme } from "../redux/themeSlice";
import { ButtonWrap, StyledButton } from "../styles/button/buttonStyle";

function Buttons() {
  const darkMode = useSelector((state: RootState) => state.dark);
  const dispatch = useDispatch();

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ButtonWrap>
      <StyledButton onClick={moveToTop}>
        <FontAwesomeIcon icon={faArrowUp} size="2x" />
      </StyledButton>
      <StyledButton onClick={() => dispatch(toggleTheme())}>
        <FontAwesomeIcon
          icon={darkMode === "light" ? faMoon : faSun}
          size="2x"
        />
      </StyledButton>
    </ButtonWrap>
  );
}

export default Buttons;
