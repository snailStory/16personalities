import Quiz from "src/components/Quiz";

function TypeTest() {
  return (
    <div>
      <h1>테스트화면</h1>
      <Quiz title='고르시오' selectItems = {['집돌이','밖돌이']} />
    </div>
  );
}

export default TypeTest;
