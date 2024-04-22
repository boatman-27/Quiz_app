import { useState } from "react";
import { useQuiz } from "./contexts/QuizContext";

function Form() {
  const { dispatch } = useQuiz();
  const [numQuestions, setNumQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const BASE_LINK = "https://opentdb.com/api.php?";

  const handleSubmit = (e) => {
    e.preventDefault();
    let queryParams = `amount=${numQuestions}`;
    if (difficulty) {
      queryParams += `&difficulty=${difficulty}`;
    }
    if (type) {
      queryParams += `&type=${type}`;
    }
    // Constructing the final API request link
    const finalLink = `${BASE_LINK}${queryParams}`;
    // console.log(finalLink);
    dispatch({ type: "setting_questions", payload: finalLink });
  };

  return (
    <>
      <form>
        <div className="quiz-question">
          <label htmlFor="numQuestions">Number of Questions:</label>
          <input
            id="numQuestions"
            type="text"
            value={numQuestions}
            onChange={(e) => setNumQuestions(e.target.value)}
          />
        </div>
        <div className="quiz-question">
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="quiz-question">
          <label
            htmlFor="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            Select Type:
          </label>
          <select id="Type">
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True/False</option>
          </select>
        </div>
        <button className="btn btn-ui" onClick={handleSubmit}>
          Sumbit Quiz Questions
        </button>
      </form>
    </>
  );
}

export default Form;
