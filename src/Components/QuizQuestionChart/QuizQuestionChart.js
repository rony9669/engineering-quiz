import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizChart from "../QuizChart/QuizChart";

const QuizQuestionChart = () => {
  const quizInfo = useLoaderData();

  return (
    <div>
      <div>
        <h1>
          The Chart is created based on the topic name and total questions
        </h1>
      </div>
      <div>
        {quizInfo.data.map((info) => (
          <QuizChart key={info.id} info={info}></QuizChart>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestionChart;
