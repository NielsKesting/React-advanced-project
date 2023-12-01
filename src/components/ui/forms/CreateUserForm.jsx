import { useState } from "react";
import "../../Style/FormStyle/form.css";
import "../../Style/TextInputStyle/textInput.css";

export const CreateUserForm = () => {
  const [name, setNewUserName] = useState("");
  const [password, setNewPassword] = useState("");
  const [image, setProfilePicture] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      password,
      image,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log("gelukt");
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="textInput"
        placeholder="Username"
        value={name}
        onChange={(newUsername) => setNewUserName(newUsername.target.value)}
      ></input>
      <input
        className="textInput"
        placeholder="Password"
        value={password}
        onChange={(newPassword) => setNewPassword(newPassword.target.value)}
      ></input>
      <input
        className="textInput"
        placeholder="Profile picture"
        value={image}
        onChange={(profilePicture) =>
          setProfilePicture(profilePicture.target.value)
        }
      ></input>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};
