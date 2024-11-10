import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Khela Hobe</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="login">Sign in</Link>
          </li>
          <li>
            <Link to="register">Register Now</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
