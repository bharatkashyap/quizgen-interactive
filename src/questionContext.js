import React, { useState } from "react";
import questionData from "./questions";

const QuestionContext = React.createContext();
export const QuestionContextProvider = (props) => {
  const [current, setCurrent] = useState(0);
  const [questions, setQuestions] = useState(questionData);
  const [correctCount, setCorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('incorrect');
  return (
    <QuestionContext.Provider
      value={{
        current,
        setCurrent,
        questions,
        setQuestions,
        correctCount,
        setCorrectCount,
        answeredCount,
        setAnsweredCount,
        showFeedback,
        setShowFeedback,
        feedback,
        setFeedback
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
export default QuestionContext;
