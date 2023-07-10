import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState<number | null>(null);
  const navList = ["성격 유형 검사", "유형별 성격"];

  const ItemHoverStyle = css`
    border-top: solid 2px #646cff;
    transition-timing-function: ease-in-out;
    transition-delay: 0.12s;
  `;

  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);

  return (
    <MainHeader>
      <a href="/">
        <IconSpan>
          <img src="src/assets/images/snail.png" alt="" width={"50px"} />
          Snail Story
        </IconSpan>
      </a>
      <nav>
        <UnOrderedList>
          {navList.map((item, index) => {
            return (
              <ListItem
                key={index}
                css={selectedTab === index && ItemHoverStyle}
              >
                <div onClick={() => setSelectedTab(index)}>{item}</div>
              </ListItem>
            );
          })}
        </UnOrderedList>
      </nav>
      <Bin />
    </MainHeader>
  );
};

const MainHeader = styled.div`
  width: 100%;
  min-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  background-color: #030303;
  top: 0;
`;

const IconSpan = styled.span`
  display: flex;
  width: 200px;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;

const UnOrderedList = styled.ul`
  display: flex;
  gap: 20px;
`;

const ListItem = styled.li`
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  &:hover {
    border-top: solid 2px #646cff;
    transition-timing-function: ease-in-out;
    transition-delay: 0.12s;
  }
`;

const Bin = styled.span`
  width: 200px;
`;

export default Header;
