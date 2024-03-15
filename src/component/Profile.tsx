import { FC, forwardRef } from "react";
import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { RootState } from "../redux/themeSlice";

const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20rem;
`;

const ProfileItem = styled.div`
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
    h1 {
      margin-top: 0;
      margin-bottom: 1.5rem;
      font-size: 4.5rem;
    }
    h2 {
      font-size: 2rem;
      align-items: center;
    }
    .profile-produce {
      h2 {
      }
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

interface ProfileProps {
  ref: any;
}

const Profile: FC<ProfileProps> = forwardRef<HTMLDivElement, ProfileProps>(
  (props, ref) => {
    const darkMode = useSelector((state: RootState) => state.dark);

    return (
      <ThemeProvider theme={{ mode: darkMode }}>
        <ProfileWrap>
          <ProfileItem ref={ref}>
            <div className="grid-item item-1">
              <div>
                <h1>Profile</h1>
              </div>
              <div>
                <h2>프론트엔드 개발자 김민수입니다</h2>
                <h2>꼼꼼히 빈틈을 채워가 꾸준히</h2>
                <h2>성장하는 개발자가 되겠습니다</h2>
              </div>
            </div>
            <div className="grid-item item-2">
              <h1>
                <i className="fas fa-comment"></i> Contact me
              </h1>
              <div className="Contact-info">
                <a href="mailto:namsan2934@gmail.com">
                  <i className="fas fa-file-alt"></i>
                  <span>이메일 보내기</span>
                </a>
                <a
                  href="https://github.com/namsan01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                  <span>깃허브 보러가기</span>
                </a>
                <a
                  href="https://www.notion.so/namsan01/e8a38dbf05a04fe198a0a55746ccba1e?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/notion.png"}
                    alt="notion"
                  />
                  <span>노션 보러가기</span>
                </a>
              </div>
            </div>
            <div className="grid-item item-3">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/images/profile.jpg"}
                    alt="profile"
                  />
                </div>
                <div>
                  <h1>
                    <i className="fas fa-user"></i> 김민수
                  </h1>
                  <h2>
                    <i className="fas fa-birthday-cake"></i> &nbsp;2001.04.12
                  </h2>
                  <h2>
                    <i className="fas fa-map-marker-alt"></i> &nbsp;대구 중구
                  </h2>
                </div>
              </div>
              <div className="profile-info">
                <div>
                  <h1>학력</h1>
                  <h2>경북기계공업고등학교 졸업 (2017.03 - 2020.02)</h2>
                </div>
                <div>
                  <h1>교육</h1>
                  <h2>
                    [KDT] 기업 요구를 반영한 프로젝트 중심 프론트엔드
                    React(리액트) 개발자 양성 과정 (2023.10 ~ 2024.03) -
                    백엔드협업React(리액트) 프로젝트
                  </h2>
                </div>
                <div>
                  <h1>경력</h1>
                  <h2>티그린/4XR (대구점) 2022.10~2023.10 - 서비스직 (사원)</h2>
                  <h2>(주)세흥GTS 2019.12 ~ 2021.2 - 품질관리 (사원)</h2>
                </div>
              </div>
            </div>
            <div className="grid-item item-4">
              <img
                src={process.env.PUBLIC_URL + "/images/mbti.png"}
                alt="profile"
              />
            </div>
          </ProfileItem>
        </ProfileWrap>
      </ThemeProvider>
    );
  }
);

export default Profile;
