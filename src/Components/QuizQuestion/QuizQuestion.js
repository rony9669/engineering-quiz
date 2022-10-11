import { useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEye } from "@fortawesome/free-solid-svg-icons";
import QuestionOption from "../QuestionOption/QuestionOption";

const QuizQuestion = ({ ques }) => {
  // console.log(ques);
  const { question, correctAnswer } = ques;
  // console.log(idx);

  const newQuestion = question.replace(/(<([^>]+)>)/gi, "");
  //   console.log(newStr);

  const handleClick = (event) => {
    const theText = event.currentTarget.textContent;
    // console.log("the text: ", theText);
    if (theText === correctAnswer) {
      toast.success("Your Answer is Correct", { autoClose: 1000 });
    } else {
      toast.warning("Your Answer is Wrong", { autoClose: 1000 });
    }
  };
  const showAnswer = (answer) => {
    console.log(answer);
    toast.success(answer, { autoClose: 1000 });
  };

  return (
    <div className="bg-emerald-200 my-10 p-5 mx-5  ">
      <div
        className=" text-end cursor-pointer"
        onClick={() => showAnswer(correctAnswer)}
      >
        <FontAwesomeIcon icon={faEye} />
      </div>
      <div>
        <div>
          <h1 className="text-center font-semibold">
            <span className="font-bold">Question:</span> {newQuestion}
          </h1>
        </div>
        <div className=" grid grid-cols-2  gap-5 mt-5 ">
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
