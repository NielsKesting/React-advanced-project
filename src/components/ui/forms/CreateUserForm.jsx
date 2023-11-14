import { useState } from "react";

export const CreateUserForm = () => () => {
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
  <form onSubmit={ handleSubmit }>
    <input placeholder="Username" value={newUserName} onChange={handleChange}></input>
    <input placeholder="Password" value={newPassword} onChange={handleChange}></input>
    <input placeholder="Profile picture" value={profilePicture} onChange={handleChange}></input>
    <button type="submit"></button>
  </form>
);
};