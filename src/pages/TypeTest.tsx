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

  const guideTextStyle = css`
    text-align: center;
    color: #555;
    font-weight: 500;
    font-size: calc(100vw / 100 + 7px)
  `;
  const guideArr = ["clock", "user", "slash"];
  const guide = (text: string) => {
    const result = {
      clock: {
        icon: <Clock width="50%" height="40%" />,
        text: <div css={guideTextStyle}>총 검사 시간은 12분 내외입니다.</div>,
      },
      slash: {
        icon: <Slash width="50%" height="40%" />,
        text: (
          <div css={guideTextStyle}>
            <div>가능하면 답변 시</div>
            <div>중립을 선택하지 마세요</div>
          </div>
        ),
      },
      user: {
        icon: <UserCheck width="50%" height="40%" />,
        text: (
          <div css={guideTextStyle}>
            <div>질문이 마음에 들지 않더라도</div>
            <div>정직하게 답변하세요.</div>
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
        gap: calc(100vh / 7);
        margin-bottom: 60px;
      `}
    >
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
              font-size: calc(100vw / 30 + 16px)
            `}
          >
            마법세계 동물 유형 검사
          </div>

          <div
            css={css`
              position: absolute;
              bottom: -130px;
              display: flex;
              justify-content: center;
              gap: 20px;
              z-index: 2;
              width: calc(100vw - 100vw / 6);
            `}
          >
            {guideArr.map((item, index) => {
              const guideItem = guide(item);
              return (
                <div
                  key={index}
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background-color: rgba(255, 255, 255, 0.5);
                    border-radius: 8px;
                    width: calc(100vw / 4 + 10px);
                    height: 150px;
                    padding: 12px 10px;
                    gap: 10px;
                    font-size: calc(100vw / 70)
                  `}
                >
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
          gap: 20px;
          padding: 0 10%;
        `}
      >
        <span
          css={css`
            height: 50px;
          `}
        >
          {page !== 0 && (
            <button onClick={handleBackButtonClick}>
              <LeftArrow />
            </button>
          )}
        </span>
        <ProgressBar currentPage={page} />
        <div
          css={css`
            text-align: center;
          `}
        >
          <img
            src={imageObj[Object.keys(imageObj)[page]]}
            alt=""
            width='50%'
            css={css`max-width: 300px`}
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

export default TypeTest;
