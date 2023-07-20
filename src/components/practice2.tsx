import { FC } from "react";
import { useRecoilState } from "recoil";
import { fontSizeState } from "../store/count";

interface Props {
  props2: string;
}
const Practice2: FC<Props> = ({  }) => {
  const [count, ] = useRecoilState(fontSizeState);

  // router 는 stack 으로 구현되어있다
  // 후입 선출

  return (
    <div style={{ backgroundColor: "tomato" }}>practice2 count: {count}</div>
  );
};

export default Practice2;
