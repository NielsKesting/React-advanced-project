import "../components/Style/NavigationStyle/Navigation.css";
import "./Style/ButtonStyle/button.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ActiveUserContext } from "./ActiveUserContext";

export const Navigation = () => {
  const activeUser = useContext(ActiveUserContext);
  let [loggedIn, updateLoggedIn] = useState(0);

  console.log("hier");
  console.log(loggedIn);

  if (loggedIn == 0) {
    if (activeUser[0].length != 0) {
      updateLoggedIn(1);
    }
  }

  console.log("Dit komt van de navigatie");
  console.log(activeUser);

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
            <Link className="button" to="/create-event">
              Create event
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
