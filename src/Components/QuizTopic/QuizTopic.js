import React from "react";
import { Link } from "react-router-dom";

const QuizTopic = ({ product }) => {
  //   console.log(product);
  const { name, logo, total, id } = product;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="bg-slate-100" src={logo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Total Question:{total} </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" to={`/quiz/${id}`}>
              <Link to={`/quiz/${id}`}>Start Quiz</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizTopic;
