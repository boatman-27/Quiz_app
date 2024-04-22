import { useQuiz } from "../contexts/QuizContext";

function Question() {
  const { dispatch, questions, index, answer } = useQuiz();
  const currentQuestion = questions[index];

  const options = [
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers,
  ];

  const escapeHtml = (unsafe) => {
    return unsafe
      .replaceAll("&lt;", "<")
      .replaceAll("&quot;", '"')
      .replaceAll("&gt;", ">")
      .replaceAll("&amp;", "&")
      .replaceAll("&#039;", "'");
  };

  const hasAnswered = answer !== null;
  return (
    <div>
      <h4>{escapeHtml(currentQuestion.question)}</h4>
      <div className="options">
        {options.map((option, index) => (
          <button
            className={`btn btn-option ${option === answer ? "answer" : ""} ${
              hasAnswered
                ? option === currentQuestion.correct_answer
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            onClick={() => dispatch({ type: "answer", payload: option })}
            disabled={hasAnswered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
