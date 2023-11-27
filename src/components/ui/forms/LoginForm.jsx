import { useState, useContext } from "react";
// import { data } from "react-router-dom"
// import { ActiveUserContext } from "../../ActiveUserContext";
import "../../Style/FormStyle/form.css";
import "../../Style/TextInputStyle/textInput.css";

export const LoginForm = () => {
  // Get login data
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const loginData = { username, password };
    return loginData;
  };

  return (
    <form className="form" onSubmit={handleLoginSubmit}>
      <input
        className="textInput"
        placeholder="Username"
        required
        value={username}
        onChange={(username) => setUsername(username.target.value)}
      ></input>
      <input
        className="textInput"
        placeholder="Password"
        required
        value={password}
        onChange={(password) => setPassword(password.target.value)}
      ></input>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};
