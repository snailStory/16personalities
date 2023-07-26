/* eslint-disable*/

import { useEffect } from 'react';
import { css } from '@emotion/react';
import {
  ENTP,
  INFP,
  ENFP,
  INTP,
  ENTJ,
  INTJ,
  ESTP,
  ENFJ,
  INFJ,
  ISFP,
  ESFP,
  ISFJ,
  ESFJ,
  ISTJ,
  ESTJ,
  ISTP,
} from 'src/assets/images/mbti';
// @ts-ignore
const { Kakao } = window;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const mbtis: { [index: string]: string } = {
  ENTP,
  INFP,
  ENFP,
  INTP,
  ESTP,
  ENTJ,
  INTJ,
  ENFJ,
  INFJ,
  ISFP,
  ISFJ,
  ESFJ,
  ISTJ,
  ESTJ,
  ESFP,
  ISTP,
};
type KakaoShareButtonProps = {
  mbti: string;
  image: string;
};

const KakaoShareButton = ({ mbti, image }: KakaoShareButtonProps) => {
  // 배포한 자신의 사이트
  const realUrl = `https://main--preeminent-custard-646e0d.netlify.app/typeAnalysis${mbti}`;
  // const realUrl = window.location.href;
  // const resultUrl = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    console.log();
    Kakao.init(import.meta.env.VITE_KAKAO_KEY);
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: mbti,
        description: '마법 세계에서 나는 어떤 동물?',
        imageUrl: `https://main--preeminent-custard-646e0d.netlify.app` + image,
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <>
      <button
        className="grey-btn"
        onClick={() => {
          shareKakao();
        }}
      >
        <img
          css={KakaoButton}
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
        />
      </button>
    </>
  );
};

const KakaoButton = css`
  width: 30px;
  height: 30px;
`;
export default KakaoShareButton;
