import { css } from '@emotion/react';
interface Props  {
    title: string
    selectItems: string[]
}
const Quiz = ({title, selectItems}:Props) => {
  return (
    <>
      <div css={TitleContainer}>{title}</div>
      <div css={SelectBoxContainer}>
        {selectItems.map((item, index) => {
          return (
            <div key={index} css={SelectBoxItem}>
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};

const TitleContainer = css`
  text-align: center;
  font-size: 1.4em;
`;
const SelectBoxContainer = css`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;
const SelectBoxItem = css`
  border: 1px solid #33a474;
  border-radius: 10px;
  font-size: 1.1em;
  padding: 8px 13px;
  margin: 10px;
  width: 350px;
  cursor: pointer;
  &:hover {
    background-color: #33a474;
    transition-timing-function: ease-in-out;
    transition-delay: 0.12s;
    transform: scale(1.05);
  }
`;
export default Quiz;
