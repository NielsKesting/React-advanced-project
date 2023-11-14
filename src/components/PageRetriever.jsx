import { useState } from "react";
import { events } from "../data/events.json";

// UI
import "./Style/PageRetrieverStyle/PageRetriever.css";
import { TextInput } from "./ui/TextInput";
import { EventsArray } from "./EventsArray";

export function PageRetriever({ onClick }) {
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
        <TextInput onChange={handleChange} />
        <section className="postCards">
          <EventsArray onClick={onClick} events={PostCardArray(searchResult)} />
        </section>
      </main>
    </>
  );
}
