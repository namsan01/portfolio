import { FC, forwardRef } from "react";
import {
  ContactBottom,
  ContactInfo,
  ContactMain,
  ContactWrap,
} from "../styles/contact/contactStyle";

interface ProjectProps {
  ref: any;
}

const Contact: FC<ProjectProps> = forwardRef<HTMLDivElement, ProjectProps>(
  (props, ref) => {
    return (
      <ContactWrap ref={ref}>
        <ContactInfo>
          <div className="contact-txt">
            <h2>Contact</h2>
          </div>
          <ContactMain>
            <div className="contact-left">
              <h2>항상 새로운 기술을 배우고자 하는 열망이 있습니다.</h2>
              <h2>도전하는것을 멈추지않고 꼼꼼히 빈틈을</h2>
              <h2>채워가 꾸준히 성장하는 개발자가 되겠습니다 </h2>
              <h2>지금까지 저의 포트폴리오를 봐주셔서 감사합니다</h2>
            </div>
            <div className="contact-right">
              <div className="contact-qr">
                <h2>KAKAO</h2>
                <a href="https://open.kakao.com/o/s8NMdggg">
                  <img
                    src={process.env.PUBLIC_URL + "/images/qrcode.png"}
                    alt=""
                  ></img>
                </a>
              </div>
              <div className="contact-url">
                <h2>Contact</h2>
                <a href="mailto:namsan2934@gmail.com">
                  <i className="fas fa-file-alt"></i>
                </a>
                <a
                  href="https://github.com/namsan01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
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
                </a>
              </div>
            </div>
          </ContactMain>
          <ContactBottom>
            <h1>© 2024.03~. NAMSAN. All rights reserved.</h1>
          </ContactBottom>
        </ContactInfo>
      </ContactWrap>
    );
  }
);

export default Contact;
