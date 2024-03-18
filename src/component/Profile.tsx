import { FC, forwardRef } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { RootState } from "../redux/themeSlice";
import { ProfileItem, ProfileWrap } from "../styles/profile/profileStyle";

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
                <h1>목표</h1>
              </div>
              <div>
                <h2>끊임없는 열정으로 새로운 도전을 </h2>
                <h2>받아들이며 꾸준한 노력으로 끊임없는</h2>
                <h2>개발자로 성장하겠습니다.</h2>
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
