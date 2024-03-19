import { FC, RefObject, useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { RootState } from "../redux/themeSlice";
import {
  HeaderNav,
  HeaderRight,
  HeaderWrap,
  Modal,
  ModalBg,
  ModalContent,
} from "../styles/header/headerStyle";

interface HeaderProps {
  helloRef: RefObject<HTMLElement>;
  profileRef: RefObject<HTMLElement>;
  skillRef: RefObject<HTMLElement>;
  projectRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
  handleScrollRef: (ref: RefObject<HTMLElement>) => void;
}

const Header: FC<HeaderProps> = ({
  helloRef,
  profileRef,
  skillRef,
  projectRef,
  contactRef,
  handleScrollRef,
}) => {
  const darkMode = useSelector((state: RootState) => state.dark.mode);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ThemeProvider theme={{ mode: darkMode }}>
      <HeaderWrap>
        <HeaderNav>
          <div className="header-left">
            <img
              src={process.env.PUBLIC_URL + "/images/banner.svg"}
              alt="logo"
            />
            <span>namsan Portfolio</span>
          </div>
          <HeaderRight>
            <li onClick={() => handleScrollRef(profileRef)}>About</li>
            <li onClick={() => handleScrollRef(skillRef)}>Skill</li>
            <li onClick={() => handleScrollRef(projectRef)}>Project</li>
            <li onClick={() => handleScrollRef(contactRef)}>Contact</li>
            <button className="navBar" onClick={toggleModal}>
              <img
                src={
                  isOpen
                    ? ""
                    : darkMode === "light"
                      ? process.env.PUBLIC_URL + "/images/bt_menu_black.svg"
                      : process.env.PUBLIC_URL + "/images/bt_menu.svg"
                }
                alt=""
              />
            </button>
          </HeaderRight>
        </HeaderNav>
        {isOpen && (
          <ModalBg>
            <Modal>
              <div>
                <button onClick={() => toggleModal()}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/bt_close_white.svg"}
                    alt=""
                  />
                </button>
              </div>
              <ModalContent>
                <li onClick={() => handleScrollRef(profileRef)}>About</li>
                <li onClick={() => handleScrollRef(skillRef)}>Skill</li>
                <li onClick={() => handleScrollRef(projectRef)}>Project</li>
                <li onClick={() => handleScrollRef(contactRef)}>Contact</li>
              </ModalContent>
            </Modal>
          </ModalBg>
        )}
      </HeaderWrap>
    </ThemeProvider>
  );
};

export default Header;
