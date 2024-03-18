import { FC, forwardRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/themeSlice";
import { HelloInfo, HelloWrap } from "../styles/hello/hellostyle";

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
