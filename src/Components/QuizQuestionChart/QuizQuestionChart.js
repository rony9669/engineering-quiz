import React from "react";
import { useLoaderData } from "react-router-dom";
import "./QuizQuestionChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const QuizQuestionChart = () => {
  const quizInfo = useLoaderData();
  const data = quizInfo.data;
  console.log(data);

  return (
    <div className="grid grid-flow-row justify-center">
      <div>
        <h1 className="font-bold mb-3 mt-5 ml-2">
          The Chart is created based on the topic name and total questions
        </h1>
      </div>
      <div>
        <LineChart width={300} height={400} data={data}>
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default QuizQuestionChart;
