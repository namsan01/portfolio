import styled from "styled-components";

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 3%;
  bottom: 8%;
  gap: 2rem;
`;

export const StyledButton = styled.div`
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "#5c5c5c" : "#ffffff"};
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "none"
      : "0 0 1px #dadcdf, 0 4px 8px 0 rgba(0, 0, 0, .15)"};
  color: ${({ theme }) => (theme.mode === "dark" ? "#ebf4f1" : "#000000")};
  cursor: pointer;
  border: ${({ theme }) => (theme.mode === "dark" ? "#000000" : "#ebf4f1")};
  border-radius: 50%;
  aspect-ratio: 1/1;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;
