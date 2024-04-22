import { useQuiz } from "../contexts/QuizContext";

function Start() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to the React Mastery Quiz</h2>
      <h3>Test your React Skills with {numQuestions} question</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "active" })}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Start;
