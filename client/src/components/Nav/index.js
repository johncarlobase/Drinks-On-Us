import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div>
      <ul className="navbar-nav">
        <li className="nav-item nav">
          <Link
            to="/"
            className={
			  window.location.pathname === "/" || window.location.pathname === "drinks" ? "nav-link active" : "nav-link"
			   }
          >
          Drinks
          </Link>
        </li>
        <li className="nav-item nav">
          <Link
            to="/beer"
            className={window.location.pathname === "/beer" ? "nav-link active" : "nav-link"}
          >
           Beer
          </Link>
        </li>
	
		<li className="nav-item nav">
          <Link
            to="/brewery"
            className={window.location.pathname === "/brewery" ? "nav-link active" : "nav-link"}
          >
          Brewery
          </Link>
        </li>
        <li className="nav-item nav">
          <Link
            to="/wine"
            className={window.location.pathname === "/wine" ? "nav-link active" : "nav-link"}
          >
           Wine
          </Link>
        </li>
		
        <li className="nav-item nav">
          <Link
            to="/test"
            className={window.location.pathname === "/test" ? "nav-link active" : "nav-link"}
          >
           Test
          </Link>
        </li>

      </ul>
    </div>
  </nav>
  );
}

export default Nav;

