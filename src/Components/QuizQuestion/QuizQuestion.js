import { useState } from "react";
import { toast } from "react-toastify";
import QuestionOption from "../QuestionOption/QuestionOption";

const QuizQuestion = ({ ques }) => {
  // console.log(ques.correctAnswer);
  const { question, correctAnswer } = ques;
  //   console.log(question);

  const newQuestion = question.replace(/(<([^>]+)>)/gi, "");
  //   console.log(newStr);

  const handleClick = (event) => {
    const theText = event.currentTarget.textContent;
    console.log("the text: ", theText);
    if (theText === correctAnswer) {
      console.log("the answer is true");
      toast.success("Your Answer is Correct", { autoClose: 1000 });
    } else {
      console.log("the answer is false");
      toast.warning("Your Answer is Wrong", { autoClose: 1000 });
    }
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
      </div>
    </div>
  );
};

export default QuizQuestion;
