import { useState, useEffect, useRef } from "react";
import MainLayout from "../components/MainLayout";
import { css } from "@emotion/react";
import { Clock, Slash, UserCheck } from "src/assets/svgs";
import {
  meeting,
  city,
  friend,
  home2,
  meeting2,
  me,
  wizard,
  study,
  load,
  man,
  moon,
  waterfall,
  book,
  city2,
} from "src/assets/images/quiz";

import Quiz from "src/components/Quiz";
import QnA from "src/config/quiz.json";
import { flushSync } from "react-dom";
import { useNavigate } from "react-router";
import ProgressBar from "src/components/ProgressBar";
import { LeftArrow } from "../assets/svgs";
import SEO from "../components/Helmet";

export const resultObj: { [index: string]: number } = {
  I: 0,
  E: 0,
  N: 0,
  S: 0,
  F: 0,
  T: 0,
  P: 0,
  J: 0,
};

const imageObj: { [index: string]: string } = {
  city,
  meeting,
  meeting2,
  man,
  load,
  wizard,
  moon,
  waterfall,
  friend,
  study,
  book,
  me,
  home2,
  city2,
};

// export type Mbti = [index: string];

function TypeTest() {
  const prevResult = useRef<string[]>([]);
  const QnAObj = JSON.parse(JSON.stringify(QnA));
  const [result, setResult] = useState(resultObj);
  const [page, setPage] = useState(0);
  const { question, answer } = QnAObj[page] ?? {};
  const navigate = useNavigate();

  const getResult = (mbti: string) => {
    prevResult.current.push(mbti);
    setResult((prev) => {
      const count = prev[mbti] + 1;
      return { ...prev, [mbti]: count };
    });
    setPage((prev) => prev + 1);
  };

  const handleBackButtonClick = () => {
    if (page === 0) {
      return;
    }
    flushSync(() => {
      setResult((prev) => {
        const key = prevResult.current[page - 1];
        return { ...prev, [key]: prev[key] - 1 };
      });

      setPage((prev) => prev - 1);
    });

    prevResult.current.pop();
  };

  interface KeyProp {
    [index: string]: number;
  }
  const getMbtiResult = (key: KeyProp, key2: KeyProp) => {
    const keyString = Object.keys(key)[0];
    const keyString2 = Object.keys(key2)[0];
    if (key[keyString] > key2[keyString2]) return `${keyString}`;
    return `${keyString2}`;
  };

  const handleGetMbti = () => {
    const { I, E, S, N, F, T, J, P } = result;
    const m = getMbtiResult({ I }, { E });
    const b = getMbtiResult({ S }, { N });
    const t = getMbtiResult({ F }, { T });
    const i = getMbtiResult({ J }, { P });
    const mbti = m + b + t + i;
    navigate(`/typeAnalysis/${mbti}`);
  };

  useEffect(() => {
    console.log(result);
  }, [result]);

  const guideArr = ["clock", "user", "slash"];
  const guide = (text: string) => {
    const result = {
      clock: {
        icon: <Clock width="50%" height="40%" />,
        text: <div css={guideTextStyle}>총 검사 시간은 3분 내외입니다.</div>,
      },
      slash: {
        icon: <Slash width="50%" height="40%" />,
        text: (
          <div css={guideTextStyle}>
            <div>가능하면 상상해서 선택하세요.</div>
          </div>
        ),
      },
      user: {
        icon: <UserCheck width="50%" height="40%" />,
        text: (
          <div css={guideTextStyle}>
            <div>질문이 마음에 들지 않더라도 정직하게 답변하세요.</div>
          </div>
        ),
      },
    }[text];
    if (!result) return null;
    return result;
  };
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: calc(100vh / 8);
        margin-bottom: 60px;
      `}
    >
      <SEO title="성격 유형 검사" />
      <MainLayout>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 60px 20px;
            position: relative;
          `}
        >
          <div
            css={css`
              text-align: center;
            `}
          >
            <h1>마법세계 동물 유형 검사</h1>
          </div>

          <div css={GuideContainer}>
            {guideArr.map((item, index) => {
              const guideItem = guide(item);
              return (
                <div key={index} css={GuideItem}>
                  {guideItem?.icon}
                  {guideItem?.text}
                </div>
              );
            })}
          </div>
        </div>
      </MainLayout>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 0 10%;
        `}
      >
        <div
          css={css`
            margin-top: 80px;
            max-width: 1000px;
            width: 100%;
          `}
        >
          <div
            css={css`
              /* max-width: 1000px; */
              margin: 0 auto;
              position: relative;
            `}
          >
            {page !== 0 && (
              <button
                onClick={handleBackButtonClick}
                css={css`
                  top: -60px;
                  left: 8%;
                  position: absolute;
                `}
              >
                <LeftArrow />
              </button>
            )}
            <ProgressBar currentPage={page} />
          </div>
        </div>
        <div
          css={css`
            text-align: center;
          `}
        >
          <img
            src={imageObj[Object.keys(imageObj)[page]]}
            alt=""
            width="50%"
            css={css`
              max-width: 350px;
              max-height: 430px;
            `}
          />
        </div>
        {page !== 12 && (
          <Quiz title={question} selectItems={answer} getResult={getResult} />
        )}
        {page === 12 && <button onClick={handleGetMbti}>결과보기</button>}
      </div>
    </div>
  );
}

const GuideContainer = css`
  position: absolute;
  bottom: -130px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 20px;
  z-index: 2;
  width: calc(100vw - 100vw / 6);
  max-width: 1024px;
  @media (max-width: 768px) {
    position: absolute;
    bottom: -150px;
    display: flex;
    flex-direction: column;
  }
`;

const GuideItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  width: calc(100vw / 4 + 10px);
  height: 150px;
  padding: 12px 10px;
  gap: 10px;
  font-size: calc(100vw / 70);
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    padding: 3px 5px;
    gap: 0;
    svg {
      width: 10%;
    }
  }
`;
const guideTextStyle = css`
  text-align: center;
  color: #555;
  font-weight: 500;
  max-height: 78px;
  font-size: 1.3rem;
  /* font-size: calc(100vw / 100 + 7px); */
`;

export default TypeTest;
