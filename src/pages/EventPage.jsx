import { useContext, useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { ActiveUserContext } from "../components/ActiveUserContext";
import { EditEventForm } from "../components/ui/forms/EditEventForm";
import "../components/Style/EventPageStyle/EventPage.css";

export const EventPage = () => {
	const { users, events, categories } = useLoaderData();
	const [editMode, setEditMode] = useState(false);
	const { id } = useParams();
	const navigateTo = useNavigate();

	const handleEditMode = () => {
		setEditMode((current) => !current);
	};

	// Get current data
	const getCurrentEvent = events.filter((event) => event.id == parseInt(id));
	const currentEvent = getCurrentEvent[0];
	const getActiveUser = useContext(ActiveUserContext);
	const activeUser = getActiveUser[0];

	const getMadeBy = users.filter(
		(user) => user.id == parseInt(currentEvent.createdBy)
	);
	const madeBy = getMadeBy[0];

	const getTime = (info) => {
		return info.substring(0, 10) + " at: " + info.substring(11, 16);
	};

	const getCategories = (postCategories) => {
		if (postCategories.length == 3) {
			return (
				"Categories: " +
				categories[0].name +
				" , " +
				categories[1].name +
				" & " +
				categories[2].name
			);
		} else if (postCategories.length == 2) {
			const postCategory1 = postCategories[0];
			const postCategory2 = postCategories[1];
			const categoryFilter = (postCategory) => {
				const categoryType = categories.filter(
					(category) => category.id == postCategory
				);
				return categoryType[0].name;
			};
			return (
				"Categories: " +
				categoryFilter(postCategory1) +
				" & " +
				categoryFilter(postCategory2)
			);
		} else if (postCategories.length == 1) {
			const oneCategory = categories.filter(
				(category) => category.id == postCategories
			);
			return "Category: " + oneCategory[0].name;
		} else {
			return "Categorie: none";
		}
	};

	const handleDelete = () => {
		const result = confirm("Are you sure?");
		if (result == true) {
			fetch(`http://localhost:3000/events/${id}`, {
				method: "DELETE",
			}).then(() => {
				navigateTo("/");
			});
		}
	};
	if (currentEvent.createdBy == activeUser[0].id) {
		if (editMode == true) {
			return (
				<>
					<div className="eventPage">
						<div className="page">
							<img src={currentEvent.image}></img>
							<div className="infoBox">
								<EditEventForm
									editMode={editMode}
									setEditMode={setEditMode}
									currentEvent={currentEvent}
								/>
								<div className="buttonContainer">
									<button className="button" onClick={handleDelete}>
										Delete
									</button>
									<button className="button" onClick={handleEditMode}>
										Back
									</button>
								</div>
							</div>
						</div>
						<div className="madeBy">
							<img src={madeBy.image}></img>
							<h1>{madeBy.name}</h1>
						</div>
					</div>
				</>
			);
		} else {
			return (
				<>
					<div className="eventPage">
						<div className="page">
							<img src={currentEvent.image}></img>
							<div className="infoBox">
								<h1>{currentEvent.title}</h1>
								<p>{currentEvent.description}</p>
								<br />
								<p>Location: {currentEvent.location}</p>
								<p>Starts at: {getTime(currentEvent.startTime)}</p>
								<p>Ends at: {getTime(currentEvent.endTime)}</p>
								<p>{getCategories(currentEvent.categoryIds)}</p>
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
						<div className="madeBy">
							<img src={madeBy.image}></img>
							<h1>{madeBy.name}</h1>
						</div>
					</div>
				</>
			);
		}
	} else {
		return (
			<>
				<div className="eventPage">
					<div className="page">
						<img src={currentEvent.image}></img>
						<div className="infoBox">
							<h1>{currentEvent.title}</h1>
							<p>{currentEvent.description}</p>
							<br />
							<p>Location: {currentEvent.location}</p>
							<p>Starts at: {getTime(currentEvent.startTime)}</p>
							<p>Ends at: {getTime(currentEvent.endTime)}</p>
							<p>{getCategories(currentEvent.categoryIds)}</p>
						</div>
					</div>
					<div className="madeBy">
						<img src={madeBy.image}></img>
						<h1>{madeBy.name}</h1>
					</div>
				</div>
			</>
		);
	}
};
