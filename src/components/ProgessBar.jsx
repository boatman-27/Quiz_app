import { useQuiz } from "../contexts/QuizContext";

function ProgessBar() {
  const { score, index, numQuestions, maxPossibleScore, answer } = useQuiz();
  return (
    <div>
      <header className="progress">
        <progress value={index + Number(answer !== null)} max={numQuestions} />
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          {score} / {maxPossibleScore}
        </p>
      </header>
    </div>
  );
}

export default ProgessBar;
