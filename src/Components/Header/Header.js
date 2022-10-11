import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="navbar  bg-sky-900 text-white">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl">
            Engineering Quiz Contest
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
    </div>
  );
};

export default Header;
