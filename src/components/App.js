import React from "react";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Start from "./Start";
import Question from "./Question";
import ProgessBar from "./ProgessBar";
import Next from "./Next";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import { useQuiz } from "../contexts/QuizContext";
import Form from "../form";

function App() {
  const { state, quizLink } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {quizLink === "" && <Form />}
        {state === "loading" && <Loader />}
        {state === "error" && <Error />}
        {state === "ready" && <Start />}
        {state === "active" && (
          <>
            <ProgessBar />
            <Question />
            <Timer />
            <Next />
          </>
        )}
        {state === "end" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
