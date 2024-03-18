import styled from "styled-components";

export const HelloWrap = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const HelloInfo = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 95vh;
  max-height: calc(95vh - 4rem);
  .left {
    border-left: 5px solid #d9d9d9;
    padding-left: 2rem;
    h2 {
      font-weight: 900;
      font-size: 4rem;
      word-break: keep-all;
      margin-bottom: 1.25rem;
    }
    p {
      font-weight: 500;
      font-size: 2rem;
    }
  }
  .right {
    img {
      width: 550px;
    }
  }

  @media (max-width: 1024px) {
    justify-content: space-between;
    .left {
      padding-left: 1rem;
      h2 {
        font-weight: 900;
        font-size: 2.8rem;
        word-break: keep-all;
        margin-bottom: 1.25rem;
      }
      p {
        font-weight: 500;
        font-size: 1.8rem;
      }
    }

    .right {
      img {
        width: 450px;
      }
    }
  }

  @media (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
    .left {
      padding-left: 1rem;
      h2 {
        font-weight: 900;
        font-size: 4rem;
        word-break: keep-all;
        margin-bottom: 1.25rem;
      }
      p {
        font-weight: 500;
        font-size: 2rem;
      }
    }

    .right {
      img {
        width: 500px;
      }
    }
  }
`;