import { useState } from "react";
import "../../Style/FormStyle/form.css";
import "../../Style/TextInputStyle/textInput.css";

export const CreateUserForm = () => {
  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const handleChange = (event) => {
    setNewUserName(event.target.value);
    setNewPassword(event.target.value);
    setProfilePicture(event.target.value);
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
        value={newUserName}
        onChange={handleChange}
      ></input>
      <input
        className="textInput"
        placeholder="Password"
        value={newPassword}
        onChange={handleChange}
      ></input>
      <input
        className="textInput"
        placeholder="Profile picture"
        value={profilePicture}
        onChange={handleChange}
      ></input>
      <button type="submit"></button>
    </form>
  );
};
