import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ActiveUserContext } from "../../ActiveUserContext";
import "../../Style/EditFormStyle/form.css";
import "../../Style/TextInputStyle/textInput.css";
import { Checkbox } from "@chakra-ui/react";

export const EditEventForm = (/*editMode, setEditMode,*/ getCurrentEvent) => {
	const navigateTo = useNavigate();

	// Get data
	const getActiveUser = useContext(ActiveUserContext);
	const activeUser = getActiveUser[0];
	const currentEvent = getCurrentEvent.currentEvent;
	const id = useParams();
	const getId = id.id;

	// Create state variables
	const createdBy = activeUser[0].id;
	const [title, setTitle] = useState(currentEvent.title);
	const [description, setDescription] = useState(currentEvent.description);
	const [image, setImage] = useState(currentEvent.image);
	const [location, setLocation] = useState(currentEvent.location);
	const [startDate, setStartDate] = useState(
		currentEvent.startTime.substring(0, 10)
	);
	const [sTime, setStartTime] = useState(
		currentEvent.startTime.substring(11, 16)
	);
	const startTime = `${startDate}T${sTime}`;
	const [endDate, setEndDate] = useState(currentEvent.endTime.substring(0, 10));
	const [eTime, setEndTime] = useState(currentEvent.endTime.substring(11, 16));
	const endTime = `${endDate}T${eTime}`;

	// Create checkbox handlers
	const categoryIds = [];
	const sportsIsChecked = () => {
		if (currentEvent.categoryIds.includes(1)) {
			return true;
		} else {
			return false;
		}
	};
	const [checkedSports, setCheckedSports] = useState(sportsIsChecked());
	const handleCheckedSports = () => {
		setCheckedSports(!checkedSports);
	};
	if (checkedSports == true) {
		categoryIds.push(1);
	}
	// console.log(checkedSports);

	const gamesIsChecked = () => {
		if (currentEvent.categoryIds.includes(2)) {
			return true;
		}
	};
	const [checkedGames, setCheckedGames] = useState(gamesIsChecked());
	const handleCheckedGames = () => {
		setCheckedGames(!checkedGames);
	};
	if (checkedGames == true) {
		categoryIds.push(2);
	}

	const relaxationIsChecked = () => {
		if (currentEvent.categoryIds.includes(3)) {
			return true;
		}
	};
	const [checkedRelaxation, setCheckedRelaxation] = useState(
		relaxationIsChecked()
	);
	const handleCheckedRelaxation = () => {
		setCheckedRelaxation(!checkedRelaxation);
	};
	if (checkedRelaxation == true) {
		categoryIds.push(3);
	}

	// Handle submit
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
		fetch(`http://localhost:3000/events/${getId}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(event),
		}).then(() => {
			window.alert("Event edited");
			sessionStorage.setItem(
				"activeUser",
				JSON.stringify({
					id: activeUser[0].id,
					name: activeUser[0].name,
					password: activeUser[0].password,
					image: activeUser[0].image,
				})
			);
			navigateTo(0);
		});
	};

	return (
		<form className="editForm" onSubmit={handleSubmit}>
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
			<div className="categorieAndButton">
				<div className="categoriesContainer">
					<p>Categories:</p>
					<div required className="categories">
						<label className="label">
							Sports
							<Checkbox
								label="sports"
								value={checkedSports}
								isChecked={checkedSports}
								onChange={handleCheckedSports}
							/>
						</label>
						<label className="label">
							Games
							<Checkbox
								label="games"
								value={checkedGames}
								isChecked={checkedGames}
								onChange={handleCheckedGames}
							/>
						</label>
						<label className="label">
							Relaxation
							<Checkbox
								label="relaxation"
								value={checkedRelaxation}
								isChecked={checkedRelaxation}
								onChange={handleCheckedRelaxation}
							/>
						</label>
					</div>
				</div>
				<button className="button" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
};
