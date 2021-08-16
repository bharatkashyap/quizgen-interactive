import { useState, useEffect, useContext } from "react";
import Question from "./Question";
import QuestionContext from "../questionContext";

const QuizGallery = (props) => {
  let { questions, current } = useContext(QuestionContext);

  return (
    <>
      <Question question={questions[current]} />
    </>
  );
};

export default QuizGallery;
