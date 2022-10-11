import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "../QuizTopic/QuizTopic";

const Home = () => {
  const quizTopics = useLoaderData();
  //   console.log(quizTopics.data);
  return (
    <div>
      <div>
        <div className="card w-12/12  image-full my-5 mx-8">
          <img
            src="https://media.istockphoto.com/vectors/collection-of-portraits-of-thoughtful-people-vector-id1288700346?k=20&m=1288700346&s=612x612&w=0&h=MNJ-2isCJx1h6d3_g_K1Dvz90Uu5QrqFnUAnW6spVwM="
            alt="quiz"
          />
          <div className="card-body text-end">
            <p>
              Test your engineering knowledge by answering of our best online
              quiz questions.
            </p>
          </div>
        </div>
      </div>
      <div className="grid  sm:grid-cols-1 gap-5 md:grid-cols-2  justify-items-center  mb-36">
        {quizTopics.data.map((product) => (
          <QuizTopic key={product.id} product={product}></QuizTopic>
        ))}
      </div>
    </div>
  );
};

export default Home;
