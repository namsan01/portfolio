import styled from "styled-components";

export const ContactWrap = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  display: flex;
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "rgba(255, 255, 255, 0.9);"
      : "rgba(29, 29, 29 , 0.9)"};

  @media (max-width: 1024px) {
    justify-content: space-between;
  }
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const ContactInfo = styled.div`
  width: 90%;
  height: 100%;
  gap: 5rem;
  display: flex;
  flex-direction: column;
  .contact-txt {
    border-left: 5px solid #d9d9d9;
    font-size: 3rem;
    padding-left: 2rem;
    margin: 2rem;
    margin-bottom: 5rem;
  }
  .contact-info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ContactMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  .contact-left {
    font-size: 1.5rem;
  }

  .contact-right {
    display: flex;
    gap: 5rem;

    .contact-qr {
      text-align: center;
      font-size: 2rem;
      h2 {
        margin-bottom: 2rem;
      }
      img {
        width: 200px;
      }
    }
    .contact-url {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      font-size: 2rem;

      i {
        font-size: 5rem;
      }
      img {
        width: 50px;
        margin-bottom: 10px;
      }
    }
  }

  @media (max-width: 1024px) {
    justify-content: space-around;
    .contact-left {
      font-size: 1.3rem;
    }
    .contact-right {
      gap: 3rem;
      .contact-qr {
        font-size: 1.5rem;
        img {
          width: 150px;
        }
      }
      .contact-url {
        font-size: 1.5rem;
        i {
          font-size: 4rem;
        }
        img {
          width: 40px;
          margin-bottom: 10px;
        }
      }
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: start;
    .contact-left {
      margin-bottom: 5rem;
      margin-left: 5rem;
    }
    .contact-right {
      margin-left: 5rem;
      gap: 20rem;
    }
  }
`;

export const ContactBottom = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "rgba(255, 255, 255, 0.9);"
      : "rgba(29, 29, 29 , 0.9)"};
`;
