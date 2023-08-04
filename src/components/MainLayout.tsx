import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main
      css={css`
        background-color: #4d377b;
        position: relative;

        &:after {
          position: relative;
          left: 0;
          top: 30px;
          content: "";
          width: 100%;
          display: block;
          background-color: #4d377b;
          clip-path: polygon(
            0 0,
            100% 0,
            100% calc(100% - 20px),
            81% 100%,
            42% calc(100% - 30px),
            22% 100%,
            0 calc(100% - 20px)
          );
          height: 60px;
        }
      `}
    >
      {children}
    </main>
  );
};

export default MainLayout;
