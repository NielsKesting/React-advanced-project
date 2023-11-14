import { useState } from "react";
import "../../Style/FormStyle/form.css";
import "../../Style/TextInputStyle/textInput.css";

export const LoginForm = () => {
  let [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (event) => {
    setLoginData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="textInput"
        placeholder="Username"
        value={loginData.name}
        onChange={handleChange}
      ></input>
      <input
        className="textInput"
        placeholder="Password"
        value={loginData.password}
        onChange={handleChange}
      ></input>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};
