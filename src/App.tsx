/** @jsxImportSource @emotion/react */
import { RecoilRoot } from "recoil";
import Footer from "src/components/Footer";
import { css } from "@emotion/react";
import team from "src/assets/svgs/team.svg";
import { Outlet } from "react-router-dom";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <RecoilRoot>
      <MainLayout>
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
      </MainLayout>
      <img src={team} alt="team picture" />
      <Outlet />
    </RecoilRoot>
  );
}

export default App;
