import { useContext, createContext, useReducer, useEffect } from "react";

const QuizContext = createContext();
const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  index: 0,
  score: 0,
  state: "",
  answer: null,
  highscore: 0,
  secondsRemaining: 0,
  quizLink: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_QUESTIONS":
      return { ...state, questions: action.payload.results, state: "ready" };
    case "error":
      return { ...state, state: "error" };
    case "active":
      return {
        ...state,
        state: "active",
        secondsRemaining: SECS_PER_QUESTION * state.questions.length,
      };
    case "answer":
      return {
        ...state,
        answer: action.payload,
        score:
          state.score +
          (action.payload === state.questions[state.index].correct_answer
            ? state.questions[state.index].difficulty === "easy"
              ? 10
              : state.questions[state.index].difficulty === "medium"
              ? 20
              : 30
            : 0),
      };
    case "next":
      return {
        ...state,
        index: state.index + 1,
        state: state.index === state.questions.length - 1 ? "end" : "active",
        answer: null,
      };
    case "end":
      return {
        ...state,
        state: "end",
        answer: null,
        highscore: Math.max(state.score, state.highscore),
        secondsRemaining: 10,
      };
    case "restart":
      return {
        ...state,
        index: 0,
        score: 0,
        state: "",
        answer: null,
        quizLink: "",
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        state: state.secondsRemaining === 0 ? "end" : state.state,
      };
    case "setting_questions":
      return {
        ...state,
        quizLink: action.payload,
        state: "loading",
      };
    default:
      throw new Error("Unknown action type");
  }
}

function QuizProvider({ children }) {
  const [
    {
      questions,
      index,
      score,
      state,
      answer,
      secondsRemaining,
      highscore,
      quizLink,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const maxPossibleScore = questions.reduce((acc, question) => {
    switch (question.difficulty) {
      case "easy":
        return acc + 10;
      case "medium":
        return acc + 20;
      case "hard":
        return acc + 30;
      default:
        return acc;
    }
  }, 0);

  useEffect(
    function () {
      async function fetchQuestions() {
        try {
          const res = await fetch(quizLink);
          const questions = await res.json();
          console.log("link", quizLink);
          console.log(questions);
          dispatch({ type: "FETCH_QUESTIONS", payload: questions });
        } catch (error) {
          dispatch({ type: "error" });
        }
      }
      if (quizLink) {
        fetchQuestions();
      }
    },
    [dispatch, quizLink]
  );

  const numQuestions = questions.length;
  return (
    <QuizContext.Provider
      value={{
        questions,
        index,
        score,
        state,
        answer,
        secondsRemaining,
        highscore,
        numQuestions,
        dispatch,
        maxPossibleScore,
        quizLink,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}

export { QuizProvider, useQuiz };
