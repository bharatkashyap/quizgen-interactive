import { useState, useContext } from "react";
import QuestionContext from "../questionContext";

const Controls = () => {
     const {
    current,
    setCurrent,
    questions,   
    showFeedback,
    setShowFeedback,
    feedback,
    setFeedback
  } = useContext(QuestionContext);    

  const feedbackText = {
    correct: "Correct!",
    incorrect: "Sorry!",
  };

  return (
      <div className="controls-grid">
        {showFeedback ? <div className="feedback">{feedbackText[feedback]}</div> : <></>}
        {showFeedback && current + 1 < questions.length ? (
        <button
          className="next-button"
          onClick={() => {
            setShowFeedback(false);
            if (current + 1 === questions.length) return;
            setCurrent(current + 1);
          }}
        >
          Next question
        </button>
      ) : (
        <></>
      )}
    </div>
    )
}

export default Controls;