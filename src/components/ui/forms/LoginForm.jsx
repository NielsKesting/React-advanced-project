import { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ActiveUserContext } from "../../ActiveUserContext";
import "../../Style/FormStyle/form.css";
import "../../Style/TextInputStyle/textInput.css";

export const LoginForm = () => {
  const { users } = useLoaderData();
  const [activeUser, setActiveUser] = useContext(ActiveUserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    let user = users.filter(
      (object) =>
        object.name.includes(username) && object.password.includes(password)
    );
    setActiveUser(user);
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
