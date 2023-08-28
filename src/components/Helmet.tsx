import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
}
const SEO = ({ title }: Props) => {
  return (
    <Helmet>
      <title>{title} - 동물 mbti</title>
      <meta
        name="description"
        content="mbti 동물 테스트를 해보세요"
      />
      <meta name="author" content="snail story" />
      <meta name="keywords" content="mbti, 동물 mbti, 동물, mbti 테스트, mbti 동물" />
    </Helmet>
  );
};

export default SEO;
