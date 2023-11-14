import "../components/Style/NavigationStyle/Navigation.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navigation = () => {
  let [loggedIn, updateLoggedIn] = useState(1);

  if (loggedIn === 1) {
    return (
      <nav className="header">
        <h1>Event board</h1>
        <ul className="headerRight">
          <li>
            <Link className="button" to="/">
              Events
            </Link>
          </li>
          <li>
            <button type="button" className="button" onClick={updateLoggedIn}>
              Log out
            </button>
          </li>
          <li>
            <Link className="button" to="edit-profile">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="header">
        <h1>Event board</h1>
        <ul className="headerRight">
          <li>
            <Link className="button" to="/">
              Events
            </Link>
          </li>
          <li>
            <Link className="button" to="login">
              Login
            </Link>
          </li>
          <li>
            <Link className="button" to="sign-up">
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};
