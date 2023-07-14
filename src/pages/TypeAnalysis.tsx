import { useNavigate, useParams } from "react-router";

const mbtis = [
  "ENTP",
  "INFP",
  "ENFP",
  "INTP",
  "ENTJ",
  "INTJ",
  "ESTP",
  "ISTP",
  "ENFJ",
  "INFJ",
  "ISFP",
  "ESFP",
  "ISFJ",
  "ESFJ",
  "ISTJ",
  "ESTJ",
];
function TypeAnalysis() {
  const params = useParams();
  const navigate = useNavigate();
  const { mbti } = params;
  return (
    <div>
      <h1>성격유형</h1>
      {!mbti && (
        <ul>
          {mbtis.map((item, index) => {
            return (
              <li key={index}>
                <button onClick={() => navigate(`/typeAnalysis/${item}`)}>
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {mbti && <div>{mbti}</div>}
    </div>
  );
}

export default TypeAnalysis;
