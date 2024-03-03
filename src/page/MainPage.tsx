import styled from "styled-components";

const MainWarp = styled.div`
  width: 1920px;
  height: auto;

  background-color: #fff;
`;

const ProfileWrap = styled.div`
  display: grid;
  max-width: 1240px;
  height: auto;
  margin: 1rem;
  grid-auto-columns: 1fr;
  gap: 0.5rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);

  .grid-item {
    padding: 0.5rem 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-radius: 0.75rem;
    overflow: hidden;
    transition: all 200ms ease;
    border: 0.2rem solid #d9d9d9;
  }

  .item-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    grid-column: 1/3;
    grid-row: 1/3;
    h1 {
      margin: 0;
      font-size: 5rem;
    }
    h2 {
      font-size: 2.5rem;
      align-items: center;
    }
  }

  .item-2 {
    grid-column: 1/2;
    grid-row: 3/5;
    .Contact-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      font-size: 50px;
      img {
        width: 50px;
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
    grid-column: 3/6;
    grid-row: 1/5;
    display: flex;
    flex-direction: row;
    padding: 1rem;

    gap: 2rem;
    img {
      width: 200px;
    }
    h1 {
      margin-top: 0px;
      font-size: 22px;
    }
    h2 {
      margin-bottom: 0.67em;
    }
    .profile-info {
      width: 70%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      text-align: left;
    }
  }

  .item-4 {
    grid-column: 2/2;
    grid-row: 3/5;
    img {
      margin: auto 0;
    }
  }
`;

const MainPage = () => {
  return (
    <>
      <MainWarp>
        <h2>안녕 나여깄어</h2>
        <ProfileWrap>
          <div className="grid-item item-1">
            <div>
              <h1>안녕하세요</h1>
            </div>
            <div>
              <h2>
                프론트엔드 개발자 김민수입니다
                <br />
                꼼꼼히 빈틈을 채워가 꾸준히
                <br />
                성장하는 개발자가 되겠습니다
              </h2>
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
                <h2>경북기계공업고등학교 졸업 (2018.03 - 2020.02)</h2>
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
                <h2>(주)세흥GTS 2019.8 ~ 2021.2 - 품질관리 (사원)</h2>
              </div>
            </div>
          </div>
          <div className="grid-item item-4">
            <img
              src={process.env.PUBLIC_URL + "/images/mbti.png"}
              alt="profile"
            />
          </div>
        </ProfileWrap>
      </MainWarp>
    </>
  );
};

export default MainPage;
