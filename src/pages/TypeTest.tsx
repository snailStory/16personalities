import { useState, useEffect, useRef } from "react";
import MainLayout from "../components/MainLayout";
import { css } from "@emotion/react";
import { Clock, Slash, UserCheck } from "src/assets/svgs";

import Quiz from "src/components/Quiz";
import QnA from "src/config/quiz.json";
import { flushSync } from "react-dom";

export const resultObj = {
  I: 0,
  E: 0,
  N: 0,
  S: 0,
  F: 0,
  T: 0,
  P: 0,
  J: 0,
};

export type Mbti = keyof typeof resultObj;

function TypeTest() {
  const prevResult = useRef<string[]>([]);
  const QnAObj = JSON.parse(JSON.stringify(QnA));
  const [result, setResult] = useState(resultObj);
  const [page, setPage] = useState(0);
  const { question, answer } = QnAObj[page] ?? {};

  const getResult = (mbti: Mbti) => {
    prevResult.current.push(mbti);
    console.log(prevResult);
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

  useEffect(() => {
    console.log(result);
  }, [result]);

  const guideTextStyle = css`
    text-align: center;
    color: #555;
    font-weight: 500;
  `;
  const guideArr = ["clock", "user", "slash"];
  const guide = (text: string) => {
    const result = {
      clock: {
        icon: <Clock width="60px" height="60px" />,
        text: <div css={guideTextStyle}>총 검사 시간은 12분 내외입니다.</div>,
      },
      slash: {
        icon: <Slash width="60px" height="60px" />,
        text: (
          <div css={guideTextStyle}>
            <div>가능하면 답변 시</div>
            <div>중립을 선택하지 마세요</div>
          </div>
        ),
      },
      user: {
        icon: <UserCheck width="60px" height="60px" />,
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
        gap: 180px;
      `}
    >
      <MainLayout>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            padding: 60px 20px;
            position: relative;
          `}
        >
          <h1
            css={css`
              text-align: center;
            `}
          >
            무료 성격유형검사
          </h1>
          <div
            css={css`
              font-weight: 500;
              font-size: 20px;
            `}
          >
            NERIS Type Explorer&reg;
          </div>
          <div
            css={css`
              position: absolute;
              bottom: -130px;
              display: flex;
              justify-content: center;
              gap: 20px;
              z-index: 2;
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
                    width: 260px;
                    height: 150px;
                    padding: 18px 0;
                    gap: 10px;
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
          gap: 50px;
        `}
      >
        <Quiz title={question} selectItems={answer} getResult={getResult} />
        {page !== 0 && (
          <button onClick={handleBackButtonClick}>뒤로가기</button>
        )}
      </div>
    </div>
  );
}

export default TypeTest;
