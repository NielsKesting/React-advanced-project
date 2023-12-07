import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ActiveUserContext } from "../../ActiveUserContext";
import "../../Style/FormStyle/form.css";
import "../../Style/TextInputStyle/textInput.css";
import { Checkbox } from "@chakra-ui/react";

export const CreateEventForm = () => {
	const getActiveUser = useContext(ActiveUserContext);
	const activeUser = getActiveUser[0];
	const navigateTo = useNavigate();

	const createdBy = activeUser[0].id;
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [location, setLocation] = useState("");
	const [startDate, setStartDate] = useState("");
	const [sTime, setStartTime] = useState("");
	const startTime = `${startDate}T${sTime}`;
	const [endDate, setEndDate] = useState("");
	const [eTime, setEndTime] = useState("");
	const endTime = `${endDate}T${eTime}`;

	const categoryIds = [];
	const [checkedSports, setCheckedSports] = useState(false);
	const handleCheckedSports = () => {
		setCheckedSports(!checkedSports);
	};
	if (checkedSports != false) {
		categoryIds.push(1);
	}

	const [checkedGames, setCheckedGames] = useState(false);
	const handleCheckedGames = () => {
		setCheckedGames(!checkedGames);
	};
	if (checkedGames != false) {
		categoryIds.push(2);
	}

	const [checkedRelaxation, setCheckedRelaxation] = useState(false);
	const handleCheckedRelaxation = () => {
		setCheckedRelaxation(!checkedGames);
	};
	if (checkedRelaxation != false) {
		categoryIds.push(3);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const event = {
			createdBy,
			title,
			description,
			image,
			categoryIds,
			location,
			startTime,
			endTime,
		};

		fetch("http://localhost:3000/events", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(event),
		}).then(() => {
			window.alert("Event posted");
			navigateTo("/");
		});
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<input
				className="textInput"
				placeholder="Title"
				required
				value={title}
				onChange={(title) => setTitle(title.target.value)}
			></input>
			<input
				type="text"
				className="textInput"
				placeholder="Description"
				required
				value={description}
				onChange={(description) => setDescription(description.target.value)}
			></input>
			<input
				className="textInput"
				placeholder="Image link"
				required
				value={image}
				onChange={(image) => setImage(image.target.value)}
			></input>

			<input
				className="textInput"
				placeholder="Location"
				required
				value={location}
				onChange={(location) => setLocation(location.target.value)}
			></input>
			<input
				className="textInput"
				placeholder="Start-date yyyy-mm-dd"
				required
				value={startDate}
				onChange={(startDate) => setStartDate(startDate.target.value)}
			></input>
			<input
				className="textInput"
				placeholder="Start-time 00:00"
				required
				value={sTime}
				onChange={(sTime) => setStartTime(sTime.target.value)}
			></input>
			<input
				className="textInput"
				placeholder="End-date yyyy-mm-dd"
				required
				value={endDate}
				onChange={(endDate) => setEndDate(endDate.target.value)}
			></input>
			<input
				className="textInput"
				placeholder="End-time 00:00"
				required
				value={eTime}
				onChange={(eTime) => setEndTime(eTime.target.value)}
			></input>
			<div className="categoriesContainer">
				<p>Categories:</p>
				<div className="categories">
					<label>Sports</label>
					<Checkbox
						label="sports"
						value={checkedSports}
						onChange={handleCheckedSports}
					/>
					<label>Games</label>
					<Checkbox
						label="games"
						value={checkedGames}
						onChange={handleCheckedGames}
					/>
					<label>Relaxation</label>
					<Checkbox
						label="relaxation"
						value={checkedRelaxation}
						onChange={handleCheckedRelaxation}
					/>
				</div>
			</div>
			<button className="button" type="submit">
				Submit
			</button>
		</form>
	);
};
