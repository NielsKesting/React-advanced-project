import "../components/Style/NavigationStyle/Navigation.css";
import "./Style/ButtonStyle/button.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ActiveUserContext } from "./ActiveUserContext";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [activeUser, setActiveUser] = useContext(ActiveUserContext);
  let [loggedIn, updateLoggedIn] = useState(0);
  const navigateTo = useNavigate();

  const handleLogout = () => {
    updateLoggedIn(0);
    setActiveUser([{ id: 0 }]);
    navigateTo("/");
  };

  if (loggedIn == 0) {
    if (activeUser[0].id != 0) {
      updateLoggedIn(1);
    }
  }

  if (activeUser[0].id != 0) {
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
            <button type="button" className="button" onClick={handleLogout}>
              Log out
            </button>
          </li>
          <li>
            <Link className="button" to="/profile">
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
