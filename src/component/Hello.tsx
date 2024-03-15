import { FC, forwardRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/themeSlice";

const HelloWrap = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const HelloInfo = styled.div`
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

interface HelloProps {
  ref: any;
}

const Hello: FC<HelloProps> = forwardRef<HTMLDivElement, HelloProps>(
  (props, ref) => {
    
    const theme = useSelector((state: RootState) => state.dark);

    return (
      <HelloWrap ref={ref}>
        <HelloInfo>
          <div className="left">
            <h2>
              안녕하세요!
              <br />
              프론트엔드 개발자 김민수입니다.
            </h2>
            <p>꼼꼼히 빈틈을 채워가 꾸준히</p>
            <p>성장하는 개발자가 되겠습니다</p>
          </div>
          <div className="right">
            <img
              src={
                theme === "light"
                  ? process.env.PUBLIC_URL + "/images/logo.png"
                  : process.env.PUBLIC_URL + "/images/logo-black.png"
              }
              alt=""
            />
          </div>
        </HelloInfo>
      </HelloWrap>
    );
  }
);

export default Hello;
