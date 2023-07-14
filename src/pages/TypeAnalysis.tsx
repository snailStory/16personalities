import { useParams } from "react-router";

function TypeAnalysis() {
  const params = useParams();
  const { mbti } = params;
  return (
    <div>
      <h1>성격유형</h1>
      {mbti && <div>{mbti}</div>}
    </div>
  );
}

export default TypeAnalysis;
