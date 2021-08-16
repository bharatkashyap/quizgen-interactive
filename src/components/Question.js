import { useState, useContext } from "react";
import QuestionContext from "../questionContext";
import Controls from './Controls';

const Question = (props) => {
  const { question } = props;
  const {
    current,
    setCurrent,
    questions,
    answeredCount,
    setAnsweredCount,
    correctCount,
    setCorrectCount,
    showFeedback,
    setShowFeedback,
    feedback,
    setFeedback,
  } = useContext(QuestionContext);

  const [userInput, setUserInput] = useState("");
  
  const checkAnswer = (answer) => {
    if (answer === question.correct_answer) {
      setCorrectCount(correctCount + 1);
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }
    setUserInput(answer);
    setAnsweredCount(answeredCount + 1);
    setShowFeedback(true);
  };
  return (
    <div className="input-layout">
      <span className="question-text">{question.title}</span>
      <div className="options-grid">
        {question.options.map((option, index) => (
          <button
            key={index}
            disabled={showFeedback}
            className={`option ${
              showFeedback
                ? option === userInput
                  ? feedback === "correct"
                    ? "correct-option"
                    : "incorrect-answer"
                  : option === question.correct_answer
                  ? "correct-option"
                  : ""
                : ""
            }`}
            onClick={() => {
              checkAnswer(option);
            }}
          >
            {option}
          </button>
        ))}
      </div>   
      <Controls />
    </div>
  );
};

export default Question;
