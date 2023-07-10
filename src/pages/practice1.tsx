import { FC, PropsWithChildren } from "react";
import Practice2 from "../components/practice2";

interface Props {
  prop1: string;
}
const Practice1: FC<PropsWithChildren<Props>> = ({ children, prop1 }) => {
  return (
    <div style={{ backgroundColor: "skyblue" }}>
      <div>
        <Practice2 props2={prop1} />
        practice1
        {children}
        <div>props: {prop1}</div>
      </div>
    </div>
  );
};

export default Practice1;
