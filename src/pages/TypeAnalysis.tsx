import { useNavigate, useParams } from "react-router";
import { css } from "@emotion/react";
import {
  ENTP,
  INFP,
  ENFP,
  INTP,
  ENTJ,
  INTJ,
  ESTP,
  ENFJ,
  INFJ,
  ISFP,
  ESFP,
  ISFJ,
  ESFJ,
  ISTJ,
  ESTJ,
  ISTP,
} from "src/assets/images/mbti";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const mbtis = {
  ENTP,
  INFP,
  ENFP,
  INTP,
  ESTP,
  ENTJ,
  INTJ,
  ENFJ,
  INFJ,
  ISFP,
  ISFJ,
  ESFJ,
  ISTJ,
  ESTJ,
  ESFP,
  ISTP,
};
function TypeAnalysis() {
  const params = useParams();
  const navigate = useNavigate();
  const { mbti } = params;
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
      `}
    >
      {!mbti && <h1>성격유형</h1>}
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px;
        `}
      >
        {!mbti && (
          <ul
            css={css`
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              grid-template-rows: repeat(3, 1fr);
              gap: 100px;
            `}
          >
            {Object.keys(mbtis).map((item, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => navigate(`/typeAnalysis/${item}`)}
                    css={css`
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      gap: 10px;
                      padding-top: 18px;
                    `}
                  >
                    <img src={mbtis[item]} alt="mbti 이미지" width={"200px"} />
                    <span>{item}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        {mbti && (
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 10px;
            `}
          >
            <h3
              css={css`
                font-weight: 500;
                font-size: 30px;
              `}
            >
              {mbti}
            </h3>
            <img src={mbtis[mbti]} alt="mbti별 사진" width="200px" />
          </div>
        )}
      </div>
    </div>
  );
}

export default TypeAnalysis;
