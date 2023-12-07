import { useState, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ActiveUserContext } from "../../ActiveUserContext";
import "../../Style/FormStyle/form.css";
import "../../Style/TextInputStyle/textInput.css";

export const LoginForm = () => {
	const { users } = useLoaderData();
	const [activeUser, setActiveUser] = useContext(ActiveUserContext);
	const navigateTo = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLoginSubmit = (event) => {
		event.preventDefault();
		let user = users.filter(
			(object) => object.name == username && object.password == password
		);
		if (user.length == 0) {
			window.alert("Wrong username or password.");
		} else {
			setActiveUser(user);
			sessionStorage.setItem(
				"activeUser",
				JSON.stringify({
					id: user[0].id,
					name: user[0].name,
					password: user[0].password,
					image: user[0].image,
				})
			);
			navigateTo("/");
		}
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
