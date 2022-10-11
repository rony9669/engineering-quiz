import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="navbar  bg-sky-900 text-white">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl">
            Engineering Quiz
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 ">
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/statistics">Statistics</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="card w-12/12  image-full my-5 mx-8">
        <img
          src="https://media.istockphoto.com/vectors/collection-of-portraits-of-thoughtful-people-vector-id1288700346?k=20&m=1288700346&s=612x612&w=0&h=MNJ-2isCJx1h6d3_g_K1Dvz90Uu5QrqFnUAnW6spVwM="
          alt="quiz"
        />
        <div className="card-body text-end">
          <p>
            Test your engineering knowledge by answering of our best online quiz
            questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
