import { css } from "@emotion/react";
import { resultObj } from "src/pages/TypeTest";

interface Props {
  title: string;
  selectItems: { [index in keyof typeof resultObj]: string };
  getResult: (mbti: string) => void;
}
const Quiz = ({ title, selectItems, getResult }: Props) => {
  const getItemsKeys = () => {
    const resultArr: string[] = [];
    for (const key in selectItems) {
      resultArr.push(key);
    }
    return resultArr;
  };
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
      `}
    >
      <div css={TitleContainer}>{title}</div>
      <ul css={SelectBoxContainer}>
        {getItemsKeys().map((item, index) => {
          const text = selectItems[item].split("/");
          return (
            <button
              key={index}
              css={SelectBoxItem}
              onClick={() => getResult(item)}
            >
              <li>
                <div>{text[0]}</div>
                <div>{text[1]}</div>
              </li>
            </button>
          );
        })}
      </ul>
    </div>
  );
};

const TitleContainer = css`
  text-align: center;
  width: 70%;
  height: 70px;
  font-size: calc(100vw / 110 + 12px)
`;
const SelectBoxContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
`;
const SelectBoxItem = css`
  border: 1px solid #33a474;
  border-radius: 10px;
  font-size: calc(100vw / 120 + 10px);
  margin: 10px;
  cursor: pointer;
  width: 100%;
  height: calc(100vh / 10);
  &:hover {
    background-color: #33a474;
    transition-timing-function: ease-in-out;
    transition-delay: 0.12s;
    transform: scale(1.05);
  }
`;
export default Quiz;
