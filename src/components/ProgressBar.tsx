import { css } from '@emotion/react';

type ProgressBarProps = {
  currentPage: number;
};

const ProgressBar = ({ currentPage }: ProgressBarProps) => {
  const pagePercent = Math.floor((currentPage / 12) * 100);
  return (
    <div css={ProgressBarContainer}>
      <div css={ProgressBarFill(pagePercent)}></div>
    </div>
  );
};

const ProgressBarContainer = css`
  width: 80%;
  height: calc(100vh / 50);
  border-radius: 13px;
  background-color: #e6e6e6;
  margin: 20px auto;
`;

const ProgressBarFill = (pagePercent: number) => css`
  width: ${pagePercent}%;
  height: 100%;
  border-radius: 13px;
  background-color: #646cff;
  transition: width 0.5s ease-out;
`;

export default ProgressBar;
