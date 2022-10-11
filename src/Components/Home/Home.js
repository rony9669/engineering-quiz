import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "../QuizTopic/QuizTopic";
// import banner from "/src/images/banner.jpg";

const Home = () => {
  const quizTopics = useLoaderData();
  //   console.log(quizTopics.data);
  return (
    <div>
      <div></div>
      <div className="grid  sm:grid-cols-1 gap-5 md:grid-cols-2  justify-items-center  mb-36">
        {quizTopics.data.map((product) => (
          <QuizTopic key={product.id} product={product}></QuizTopic>
        ))}
      </div>
    </div>
  );
};

export default Home;
