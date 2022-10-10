import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "../QuizTopic/QuizTopic";

const Home = () => {
  const quizTopics = useLoaderData();
  //   console.log(quizTopics.data);
  return (
    <div className="grid grid-cols-2 gap-4">
      {quizTopics.data.map((product) => (
        <QuizTopic key={product.id} product={product}></QuizTopic>
      ))}
    </div>
  );
};

export default Home;
