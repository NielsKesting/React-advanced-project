import "../components/Style/EventsPageStyle/EventsPage.css";
import { useState } from "react";
import { events } from "../data/events.json";
import { TextInput } from "../components/ui/TextInput";
import { EventsArray } from "../components/EventsArray";

export function EventsPage() {
  let [searchResult, setSearchResult] = useState("");

  // filter
  let PostCardArray = (searchResult) => {
    if (searchResult.length == 0) {
      return events;
    } else {
      let filteredList = events.filter((object) =>
        object.title.toLowerCase().includes(searchResult.toLowerCase())
      );
      return filteredList;
    }
  };

  const handleChange = (event) => {
    setSearchResult(event.target.value);
  };

  return (
    <>
      <main className="pageRetriever">
        <section className="postCardsHeader">
          <div className="filters">
            <p>Categories:</p>
            <input type="radio" id="all" name="categories" />
            <label>All</label>
            <input type="radio" id="sports" name="categories" />
            <label>Sports</label>
            <input type="radio" id="games" name="categories" />
            <label>Games</label>
            <input type="radio" id="relaxation" name="categories" />
            <label>Relaxation</label>
          </div>
          <TextInput onChange={handleChange} />
        </section>
        <section className="postCards">
          <EventsArray events={PostCardArray(searchResult)} />
        </section>
      </main>
    </>
  );
}
