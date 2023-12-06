import { useState, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom"
import { ActiveUserContext } from "../../ActiveUserContext";
import "../../Style/ButtonStyle/button.css"
import "../../Style/EditProfileStyle/EditProfile.css"

export const EditProfile = () => {
  const { users } = useLoaderData()
  const navigateTo = useNavigate();
  const [activeUser, setActiveUser] = useContext(ActiveUserContext);
  const currentProfile = activeUser
  const id = currentProfile[0].id;
  const currentImage = currentProfile[0].image;
  const userName = currentProfile[0].name;
  const currentPassword = currentProfile[0].password;

  const [name, setNewUserName] = useState(userName);
  const [password, setNewPassword] = useState(currentPassword);
  const [image, setProfilePicture] = useState(currentImage);

  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode((current) => !current);
  }
  const back = () => {
    setEditMode((current) => !current);
  }

  const handleDelete = () => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      setActiveUser([{id: 0}])
      window.alert("User deleted");
      navigateTo("/")
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      password,
      image,
    };

    fetch(`http://localhost:3000/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      window.alert("User edited");
      sessionStorage.setItem('activeUser', JSON.stringify({
        "id": id
      }))
      setEditMode((current) => !current);
    })
  };

  if (editMode == true) {
    return(
      <>
        <div className="profile">
          <div className="card">
            <div className="infoBox">
              <form className="form" onSubmit={handleSubmit}>
                <input
                  className="textInput"
                  placeholder="Username"
                  required
                  value={name}
                  onChange={(newUsername) => setNewUserName(newUsername.target.value)}
                ></input>
                <input
                  className="textInput"
                  placeholder="Password"
                  required
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
                <div className="buttonContainer">
                  <button className="button" onClick={back}>Back</button>
                  <button className="button" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return(
      <>
        <div className="profile">
          <div className="card">
          <img src={currentImage} ></img>
          <div className="infoBox">
            <h1>{userName}</h1>
            <div className="buttonContainer">
                    <button className="button" onClick={handleDelete}>
                      Delete
                    </button>
                    <button className="button" onClick={handleEditMode}>
                      Edit
                    </button>
                  </div>
          </div>
          </div>
        </div>
      </>
    )
  }

};
