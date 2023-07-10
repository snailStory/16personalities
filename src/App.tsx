/** @jsxImportSource @emotion/react */
import { RecoilRoot } from "recoil";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import { css } from "@emotion/react";
import team from "src/assets/svgs/team.svg";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <Header />
      <main
        css={css`
          background-color: #33a474;
          position: relative;
          padding-bottom: 30px;

          &:after {
            position: absolute;
            left: 0;
            content: "";
            width: 100%;
            display: block;
            background-color: #33a474;
            clip-path: polygon(
              0 0,
              100% 0,
              100% calc(100% - 20px),
              81% 100%,
              42% calc(100% - 30px),
              22% 100%,
              0 calc(100% - 20px)
            );
            height: 60px;
          }
        `}
      >
        <div
          css={css`
            padding: 30px 20px;
            gap: 20px;
            display: flex;
            flex-direction: column;
          `}
        >
          <h1>문의</h1>
          <p>
            궁금하신 사항이나 문의사항이 있으시면 망설임 없이 연락 주시기
            바랍니다. 저희는 저희 앞으로 발송되는 모든 문의 사항들을 하나하나
            꼼꼼히 확인합니다. 당신의 소중한 의견 기다리고 있겠습니다. 현재
            영어로 작성된 이메일에 한해서만 답변이 가능합니다. 이 점 많은 양해
            부탁드립니다.
          </p>
          <span>support@16personalities.com</span>
          <h3>NERIS Analytics Limited</h3>
          <div>Nine Hills Road, Cambridge, CB2 1GE, United Kingdom</div>
          <div>Registered in England and Wales, #8646330</div>
        </div>
      </main>
      <img src={team} alt="" />
      <Outlet />

      <Footer />
    </RecoilRoot>
  );
}

export default App;
