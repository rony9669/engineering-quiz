import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import QuizTopic from "./Components/QuizTopic/QuizTopic";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },

        element: <Home></Home>,
      },
      {
        path: "/quiztopics",

        element: <QuizTopic></QuizTopic>,
      },
    ],
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
