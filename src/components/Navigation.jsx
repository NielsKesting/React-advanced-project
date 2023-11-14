import "../components/Style/NavigationStyle/Navigation.css";
import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className='header'>
      <h1>Event board</h1>
      <ul className='headerRight'>
        <li>
          <Link className="button" to="/">Events</Link>
        </li>
        <li>
          <Link className="button" to="login">Login</Link>
        </li>
        <li>
          <Link className="button" to="sign-up">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};
