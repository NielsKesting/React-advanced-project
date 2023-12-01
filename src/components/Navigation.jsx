import "../components/Style/NavigationStyle/Navigation.css";
import "./Style/ButtonStyle/button.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ActiveUserContext } from "./ActiveUserContext";

export const Navigation = () => {
  let [loggedIn, updateLoggedIn] = useState(1);
  const activeUser = useContext(ActiveUserContext);
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
