import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-transparent navbar-default">   
    <nav className="navbar navbar-expand-lg  bg-transparent navbar-default">   
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
            to="/wine_score"
            className={window.location.pathname === "/wine_score" ? "nav-link active" : "nav-link"}
          >
           Wine-Score
          </Link>
        </li>
        

        <li className="nav-item nav">
          <Link
            to="/quotes"
            className={window.location.pathname === "/quotes" ? "nav-link active" : "nav-link"}
          >
       Quotes
          </Link>
        </li>
		
        
        <li className="nav-item nav">
          <Link
            to="/login"
            className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
          >
           Login
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

