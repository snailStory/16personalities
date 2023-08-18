/** @jsxImportSource @emotion/react */
import { RecoilRoot } from "recoil";

import { css } from "@emotion/react";
import team from "src/assets/images/cat.png";
import { useLocation, useNavigate } from "react-router";

import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/Helmet";

function App() {
  const navigate = useNavigate();
  const path = useLocation().path;
  console.log(path);

  return (
    <RecoilRoot>
      <main
        css={css`
          background-color: #4d377b;
          position: relative;
          padding-bottom: 30px;

          &:after {
            position: absolute;
            left: 0;
            content: "";
            width: 100%;
            display: block;
            background-color: #4d377b;
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
        <SEO title="Home" />
        <div
          css={css`
            padding: 30px 40px;
            gap: 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            white-space: nowrap;
          `}
        >
          <h1>마법 세계에서</h1>
          <h1>나는 어떤 동물?</h1>
          <p>이세계의 당신은 어떤 모습..?</p>
          <div
            css={css`
              width: 100%;
              display: flex;
              justify-content: center;
            `}
          >
            <button
              css={css`
                width: 60%;
                max-width: 170px;
              `}
              onClick={() => navigate("/typeTest")}
            >
              마법 세계 입장하기
            </button>
          </div>
        </div>
      </main>
      <img src={team} alt="" width={"100%"} />
    </RecoilRoot>
  );
}

export default App;
