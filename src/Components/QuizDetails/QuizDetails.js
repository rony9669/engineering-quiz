import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const QuizDetails = () => {
  const quiz = useLoaderData();
  const { name } = quiz.data;

  // console.log(quiz);
  // console.log(quiz.data.questions);
  return (
    <div>
      <h1 className=" text-center mt-5 font-extrabold text-4xl">
        The exam is about: <span className="text-indigo-600">{name}</span>
      </h1>
      {quiz.data.questions.map((ques) => (
        <QuizQuestion key={ques.id} ques={ques}></QuizQuestion>
      ))}
    </div>
  );
};

export default QuizDetails;
