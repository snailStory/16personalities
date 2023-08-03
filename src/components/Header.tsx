import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import logoImage from '/snail.png';

const Header = () => {
  const [selectedTab, setSelectedTab] = useState<number | null>(null);
  const location = useLocation();
  const { pathname } = location;
  const navList = [
    { name: '성격 유형 검사', path: '/typeTest' },
    { name: '유형별 성격', path: '/typeAnalysis' },
  ];

  const ItemHoverStyle = css`
    border-top: solid 2px #646cff;
    transition-timing-function: ease-in-out;
    transition-delay: 0.12s;
  `;

  return (
    <MainHeader>
      <MainHeaderItems>
        <Link to="/" onClick={() => setSelectedTab(null)}>
          <IconSpan>
            <img
              src={logoImage}
              alt="logo image"
              width={'50px'}
              height={'50px'}
            />
            <LogoTitle>Snail Story</LogoTitle>
          </IconSpan>
        </Link>
        <nav>
          <UnOrderedList>
            {navList.map((item, index) => {
              return (
                <Link
                  to={item.path}
                  key={index}
                  onClick={() => setSelectedTab(index)}
                >
                  <ListItem css={pathname === item.path && ItemHoverStyle}>
                    {item.name}
                  </ListItem>
                </Link>
              );
            })}
          </UnOrderedList>
        </nav>
        <Bin />
      </MainHeaderItems>
    </MainHeader>
  );
};

const MainHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #030303;
  z-index: 9999;
`;

const MainHeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin: 0 auto;
  background-color: #030303;
  @media (min-width: 1024px) {
    width: 1024px;
  }
`;
const IconSpan = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;

const LogoTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  @media (max-width: 320px) {
    display: none;
  }
`;
const UnOrderedList = styled.ul`
  display: flex;
  gap: 25px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  white-space: pre-line;
  border-top: solid 2px transparent;
  height: 60px;

  &:hover {
    border-top: solid 2px #646cff;
    transition-timing-function: ease-in-out;
    transition-delay: 0.12s;
  }
`;

const Bin = styled.span`
  width: 200px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
