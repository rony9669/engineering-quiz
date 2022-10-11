import React from "react";

const QuizQuestion = ({ ques }) => {
  console.log(ques.options[0]);
  const { question } = ques;
  //   console.log(question);

  const newQuestion = question.replace(/(<([^>]+)>)/gi, "");
  //   console.log(newStr);

  return (
    <div>
      <ul class="quiz">
        <li>
          <h4>How many letters are there in "JS"?</h4>
          <ul class="choices">
            <li>
              {" "}
              <input type="radio" name="question0" value="A" />
              <span>2</span>{" "}
            </li>
            <li>
              {" "}
              <input type="radio" name="question0" value="B" />
              <span>1</span>{" "}
            </li>
            <li>
              {" "}
              <input type="radio" name="question0" value="C" />
              <span>3</span>{" "}
            </li>
            <li>
              {" "}
              <input type="radio" name="question0" value="D" />
              <span>4</span>{" "}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default QuizQuestion;
