import styled from "styled-components";

export const HeaderWrap = styled.header`
  display: flex;
  position: sticky;
  justify-content: center;
  top: 0;
  z-index: 999;
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "rgba(255, 255, 255, 0.9);"
      : "rgba(29, 29, 29 , 0.9)"};

  backdrop-filter: blur(4px);
`;

export const HeaderNav = styled.nav`
  position: sticky;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: ${({ theme }) =>
    theme.mode === "light" ? "1px solid #d9d9d9" : ""};

  .header-left {
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
`;

export const HeaderRight = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 2rem;
  button.navBar {
    background: transparent;
    display: none;
    border: none;
    text-align: end;
    img {
      width: 25px;
      height: 100%;
    }
  }
  @media (max-width: 800px) {
    justify-content: end;
    margin-right: 0;
    li {
      display: none;
    }
    button.navBar {
      display: block;
    }
  }
`;

export const ModalBg = styled.div`
  position: fixed;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

export const Modal = styled.div`
  position: fixed;
  width: 50%;
  height: 100vh;
  right: 0;
  background: rgba(6, 6, 6, 0.8);
  padding: 1.5rem;
  text-align: end;
  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  img {
    width: 30px;
    margin-right: 1.8rem;
    border: none;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px;

  li {
    width: 100%;
    height: 80px;
    padding: 20px;
    text-align: left;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: #d9d9d9;
    cursor: pointer;
  }
`;