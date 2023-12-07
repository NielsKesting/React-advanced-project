import "../components/Style/EventsPageStyle/EventsPage.css";
import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { TextInput } from "../components/ui/TextInput";
import { PostCard } from "../components/ui/PostCard";

export function EventsPage() {
	const { events } = useLoaderData();
	let [radioState, setRadioState] = useState(0);
	let [searchResult, setSearchResult] = useState("");

	// filters
	let categoryFilter = () => {
		if (radioState == "0") {
			return events;
		} else {
			let filteredList = events.filter((object) =>
				object.categoryIds.includes(parseInt(radioState))
			);
			return filteredList;
		}
	};

	let PostCardArray = (searchResult) => {
		let eventArray = categoryFilter();
		if (searchResult.length == 0) {
			return eventArray;
		} else {
			let filteredList = eventArray.filter((object) =>
				object.title.toLowerCase().includes(searchResult.toLowerCase())
			);
			return filteredList;
		}
	};

	const handleRadioInput = (event) => {
		setRadioState(event.target.value);
	};
	const handleTextInput = (event) => {
		setSearchResult(event.target.value);
	};

	return (
		<>
			<main className="pageRetriever">
				<section className="postCardsHeader">
					<div className="filters">
						<p>Categories:</p>
						<label htmlFor="all">
							<input
								type="radio"
								name="categories"
								value={"0"}
								id="all"
								onChange={handleRadioInput}
							/>{" "}
							All
						</label>
						<label htmlFor="sports">
							<input
								type="radio"
								name="categories"
								value={"1"}
								id="sports"
								onChange={handleRadioInput}
							/>{" "}
							Sports
						</label>
						<label htmlFor="games">
							<input
								type="radio"
								name="categories"
								value={"2"}
								id="games"
								onChange={handleRadioInput}
							/>{" "}
							Games
						</label>
						<label htmlFor="relaxation">
							<input
								type="radio"
								name="categories"
								value={"3"}
								id="relaxation"
								onChange={handleRadioInput}
							/>{" "}
							Relaxation
						</label>
					</div>
					<TextInput onChange={handleTextInput} />
				</section>
				<section className="postCards">
					{PostCardArray(searchResult).map((event) => (
						<Link to={`event/${event.id}`} key={event.id}>
							<PostCard key={event.id} post={event} />
						</Link>
					))}
				</section>
			</main>
		</>
	);
}
