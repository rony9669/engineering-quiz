import React from "react";
import { useLoaderData } from "react-router-dom";

const QuizDetails = () => {
  const quiz = useLoaderData();
  const { name } = quiz.data;
  console.log(quiz);
  console.log(quiz.data.questions);
  return (
    <div>
      <h1>
        The exam is about: <span>{name}</span>{" "}
      </h1>
    </div>
  );
};

export default QuizDetails;
