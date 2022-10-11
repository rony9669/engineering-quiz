import React from "react";

const QuestionOption = (props) => {
  const { option, handleClick } = props;
  // console.log(props);
  return (
    <div>
      <div className="text-center">
        <button
          onClick={handleClick}
          className=" p-2 bg-slate-200 w-full h-auto rounded-sm"
        >
          {option}
        </button>
      </div>
    </div>
  );
};

export default QuestionOption;
