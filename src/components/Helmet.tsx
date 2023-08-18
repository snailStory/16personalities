import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
}
const SEO = ({ title }: Props) => {
  return (
    <Helmet>
      <title>{title} - 동물 mbti</title>
    </Helmet>
  );
};

export default SEO;
