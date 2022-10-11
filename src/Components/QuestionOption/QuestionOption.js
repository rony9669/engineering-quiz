import React from "react";

const QuestionOption = (props) => {
  //   console.log(props.option);
  return (
    <div>
      <li>
        <input type="radio" name="question0" value="A" />
        <span>{props.option}</span>
      </li>
    </div>
  );
};

export default QuestionOption;
