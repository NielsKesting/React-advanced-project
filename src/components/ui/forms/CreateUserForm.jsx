import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/FormStyle/form.css";
import "../../Style/TextInputStyle/textInput.css";

export const CreateUserForm = () => {
	const navigateTo = useNavigate();
	const [name, setNewUserName] = useState("");
	const [password, setNewPassword] = useState("");
	const [image, setProfilePicture] = useState("");

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
			window.alert("User created");
			navigateTo("/login");
		});
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h1>Create user</h1>
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
			<button className="button" type="submit">
				Submit
			</button>
		</form>
	);
};
