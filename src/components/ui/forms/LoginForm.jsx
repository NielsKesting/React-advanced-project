import { useState } from "react";

export const LoginForm = () => () => {
  const [activeUser, setActiveUser] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setActiveUser(event.target.value);
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

return (
  <form onSubmit={ handleSubmit }>
    <input placeholder="Username" value={activeUser} onChange={handleChange}></input>
    <input placeholder="Password" value={password} onChange={handleChange}></input>
    <button type="submit"></button>
  </form>
);
};