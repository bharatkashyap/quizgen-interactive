import { useEffect, useContext } from "react";
import QuestionContext from "../questionContext";

const Header = (props) => {
  const { questions, current, answeredCount, correctCount } =
    useContext(QuestionContext);
  return (
    <div className="header">
      <div>
        {current + 1 <= questions.length && answeredCount !== questions.length
          ? `Question ${current + 1} of ${questions.length}`
          : "Game over!"}
      </div>
      <div>🎯 
      <span className="accuracy">{`${
        answeredCount === 0
          ? 0
          : ((correctCount / answeredCount) * 100).toFixed(0)
      }%`}</span></div>
    </div>
  );
};

export default Header;
