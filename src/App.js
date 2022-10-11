import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import QuizDetails from "./Components/QuizDetails/QuizDetails";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Main></Main>,
    errorElement: <ErrorPage />,
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
    ],
  },
  {
    path: "/quiz/:quizId",
    loader: async ({ params }) => {
      return fetch(
        `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
      );
    },

    element: <QuizDetails></QuizDetails>,
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
