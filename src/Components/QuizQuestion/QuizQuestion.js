import React from "react";
import QuestionOption from "../QuestionOption/QuestionOption";
import "./QuizQuestion.css";

const QuizQuestion = ({ ques }) => {
  console.log(ques.options[0]);
  const { question } = ques;
  //   console.log(question);

  const newQuestion = question.replace(/(<([^>]+)>)/gi, "");
  //   console.log(newStr);

  return (
    <div>
      <ul className="quiz">
        <li>
          <h4>{newQuestion}</h4>
          <ul className="choices">
            {ques.options.map((option, idx) => (
              <QuestionOption key={idx} option={option}></QuestionOption>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default QuizQuestion;
