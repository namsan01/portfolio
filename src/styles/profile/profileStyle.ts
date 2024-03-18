import styled from "styled-components";

export const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20rem;
`;

export const ProfileItem = styled.div`
  display: grid;
  max-width: 1240px;
  margin: 1rem;
  grid-auto-columns: 1fr;
  gap: 1.5rem;
  color: ${({ theme }) => (theme.mode === "light" ? "#000" : "#000")};
  grid-template-areas:
    "box1 box1 box3 box3 box3"
    "box1 box1 box3 box3 box3"
    "box2 box4 box3 box3 box3"
    "box2 box4 box3 box3 box3";
  .grid-item {
    background: #fff;
    grid-auto-columns: 1fr;
    max-width: 1240px;
    padding: 0.5rem 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-radius: 0.75rem;
    overflow: hidden;
    transition: all 200ms ease;
    border: 0.2rem solid
      ${({ theme }) => (theme.mode === "light" ? "#d9d9d9" : "#292929")};
  }

  .item-1 {
    grid-area: box1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1.5rem;
    h1 {
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 4rem;
    }
    h2 {
      font-size: 2rem;
      align-items: center;
    }
  }

  .item-2 {
    grid-area: box2;
    .Contact-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      font-size: 50px;
      img {
        width: 50px;
        margin-bottom: 10px;
      }
      a {
        position: relative;
        display: inline-block;
        margin-bottom: 10px;
      }
      a img {
        vertical-align: middle;
        margin-right: 5px;
        display: inline-block;
        transition: transform 0.5s ease-in-out;
      }
      a span {
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateX(-40%) translateY(-50%);
        opacity: 0;
        transition:
          opacity 1s ease,
          transform 1s ease;
        padding: 5px;
        background-color: #d9d9d9;
        white-space: nowrap;
        font-size: 18px;
      }
      a i,
      a img {
        transition: transform 0.5s ease;
      }

      a:hover span {
        opacity: 1;
      }
      a:hover i {
        transform: translateX(-140%);
        transition: transform 0.5s ease-in-out;
      }
      a:hover img {
        opacity: 1;
        transform: translateX(-100%);
        transition: transform 0.5s ease-in-out opacity 0.5s ease-in-out;
      }
    }
  }

  .item-3 {
    grid-area: box3;
    display: flex;
    flex-direction: row;
    padding: 2rem;
    gap: 2rem;

    img {
      width: 200px;
    }

    h1 {
      margin-top: 0px;
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.8rem;
      margin-bottom: 0.67em;
    }
    .profile-info {
      width: 70%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      text-align: left;
      h1 {
        margin-top: 0px;
        font-size: 3rem;
      }
      h2 {
        h2 {
          font-size: 2rem;
          margin-bottom: 0.67em;
        }
      }
    }
  }

  .item-4 {
    grid-area: box4;
    img {
      margin: auto 0;
    }
  }

  @media (max-width: 1024px) {
    gap: 1rem;
    grid-template-areas:
      "box1 box1 box2 box2 "
      "box1 box1 box2 box2 "
      "box4 box3 box3 box3 "
      "box4 box3 box3 box3 ";
    .item-1 {
      grid-area: box1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      h1 {
        margin: 0;
        font-size: 4rem;
      }
      h2 {
        font-size: 2rem;
        align-items: center;
      }
    }
    .item-2 {
      h1 {
        font-size: 2.5rem;
      }
      .Contact-info {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
        font-size: 5rem;
      }
    }
    .item-3 {
      grid-area: box3;
      display: flex;
      flex-direction: row;
      padding: 1rem;
      gap: 2rem;
      img {
        width: 150px;
      }

      h1 {
        margin-top: 0px;
        font-size: 2rem;
      }
      h2 {
        font-size: 1.5rem;
        margin-bottom: 0.67em;
      }
    }
  }
  @media (max-width: 800px) {
    grid-template-areas:
      "box1 box1 box1 box1 "
      "box2 box2  box2 box4 "
      "box3 box3 box3 box3"
      "box3 box3  box3 box3";
    .item-3 {
      .profile-info {
        h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5em;
        }
        h2 {
        }
      }
    }
    .item-4 {
      img {
        width: 150px;
        margin: auto;
      }
    }
  }
`;