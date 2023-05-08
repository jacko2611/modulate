import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <ul className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </ul>
          <ul className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </ul>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <ul className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </ul>
          <ul className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </ul>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1 justify-between">
      <h1>
        <Link to="/">
          <span role="img"></span>
          Modulate
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
