import React, { FC, forwardRef } from "react";
import styled from "styled-components";

interface ProjectProps {
  ref: any;
}

const ContactWrap = styled.div`
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

const ContactInfo = styled.div`
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

const ContactMain = styled.div`
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

const ContactBottom = styled.div`
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
