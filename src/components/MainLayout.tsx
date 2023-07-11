import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main
      css={css`
        background-color: #33a474;
        position: relative;
        padding-bottom: 30px;

        &:after {
          position: absolute;
          left: 0;
          content: "";
          width: 100%;
          display: block;
          background-color: #33a474;
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
