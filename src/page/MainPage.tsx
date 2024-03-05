import styled from "styled-components";
import Profile from "../component/Profile";

const MainWarp = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
`;

const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const MainPage = () => {
  return (
    <>
      <MainWarp>
        <ProfileWrap>
          <Profile />
        </ProfileWrap>
      </MainWarp>
    </>
  );
};

export default MainPage;
