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
        width: 100%;
      `}
    >
      <div css={TitleContainer}>{title.split(". ").join(".\n")}</div>
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
  font-size: calc(100vw / 150 + 1rem);
  white-space: pre-wrap;
`;
const SelectBoxContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10%;
`;
const SelectBoxItem = css`
  border: 1px solid #646cff;
  border-radius: 10px;
  font-size: calc(100vw / 180 + 1rem);
  margin: 1rem;
  cursor: pointer;
  width: 100%;
  height: 60px;
  &:hover {
    background-color: #4d377b;
    border: none;
    opacity: 0.8;
    transition-timing-function: ease-in-out;
    transition-delay: 0.12s;
    transform: scale(1.05);
  }

  @media (min-width: 1024px) {
    height: 80px;
  }
`;
export default Quiz;
