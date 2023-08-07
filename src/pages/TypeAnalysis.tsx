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
import KakaoShareButton from "src/components/KakaoShareButton";
import result from "src/config/result.json";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const mbtis: { [index: string]: { image: string; result: string } } = {
  ENTP: { image: ENTP, result: result.ENTP },
  INFP: { image: INFP, result: result.INFP },
  ENFP: { image: ENFP, result: result.ENFP },
  INTP: { image: INTP, result: result.INTP },
  ESTP: { image: ESTP, result: result.ESTP },
  ENTJ: { image: ENTJ, result: result.ENTJ },
  INTJ: { image: INTJ, result: result.INTJ },
  ENFJ: { image: ENFJ, result: result.ENFJ },
  INFJ: { image: INFJ, result: result.INFJ },
  ISFP: { image: ISFP, result: result.ISFP },
  ISFJ: { image: ISFJ, result: result.ISFJ },
  ESFJ: { image: ESFJ, result: result.ESFJ },
  ISTJ: { image: ISTJ, result: result.ISTJ },
  ESTJ: { image: ESTJ, result: result.ESTJ },
  ESFP: { image: ESFP, result: result.ESFP },
  ISTP: { image: ISTP, result: result.ISTP },
};

function TypeAnalysis() {
  const params = useParams();
  const navigate = useNavigate();
  const { mbti } = params;
  const url = window.location.href;
  const handleCopy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };
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
          padding: 80px 0;
        `}
      >
        {!mbti && (
          <ul css={CardsContainer}>
            {Object.keys(mbtis).map((item, index) => {
              return (
                <li key={index} css={Card}>
                  <button onClick={() => navigate(`/typeAnalysis/${item}`)}>
                    <img
                      src={mbtis[item].image}
                      alt="mbti 이미지"
                      width={"200px"}
                    />
                    <p>{item}</p>
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
            <img src={mbtis[mbti].image} alt="mbti별 사진" width="200px" />
            <div
              css={css`
                color: #f9f9f9;
                width: 30%;
                font-size: 16px;
              `}
            >
              {mbtis[mbti].result}
            </div>
            <div css={ShareContainer}>
              <h5
                css={css`
                  text-align: center;
                  margin-bottom: 10px;
                `}
              >
                공유하기
              </h5>
              <div
                css={css`
                  display: flex;
                `}
              >
                <button onClick={() => handleCopy(url)}>
                  <h2>🔗</h2>
                </button>
                <KakaoShareButton mbti={mbti} image={mbtis[mbti].image} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
const CardsContainer = css`
  display: flex;
  margin: 0 auto;
  max-width: 1024px;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

const Card = css`
  flex: auto;
  min-width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
const ShareContainer = css`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

export default TypeAnalysis;
