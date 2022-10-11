import { useState } from "react";
import QuestionOption from "../QuestionOption/QuestionOption";

const QuizQuestion = ({ ques }) => {
  // console.log(ques.correctAnswer);
  const { question } = ques;
  //   console.log(question);

  const newQuestion = question.replace(/(<([^>]+)>)/gi, "");
  //   console.log(newStr);

  const handleClick = (event) => {
    const theText = event.currentTarget.textContent;
    console.log("the text: ", theText);
  };

  return (
    <div>
      <div className="bg-emerald-200 my-10 p-5 mx-5">
        <div>
          <h1 className="text-center font-semibold">Question:{newQuestion}</h1>
        </div>
        <div className=" grid grid-cols-2  gap-5 mt-5">
          {ques.options.map((option, idx) => (
            <QuestionOption
              key={idx}
              option={option}
              handleClick={handleClick}
            ></QuestionOption>
          ))}
        </div>
        <div className="mt-7 text-center">
          <h1>
            Correct Answer is:
            <span className="bg-green-600 rounded-lg p-1 ml-1  ">
              {ques.correctAnswer}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
