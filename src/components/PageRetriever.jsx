import { useState } from "react";
import { events } from "../data/events.json";

// UI
import "./PageRetrieverStyle/PageRetriever.css";
import { Heading } from "@chakra-ui/react";
import { TextInput } from "./ui/TextInput";
import { Button } from "./ui/Button.jsx";
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
      <div className="header">
        <Heading>List of events</Heading>
        <div className="headerRight">
          <TextInput onChange={handleChange} />
          <Button btnText="Log in" />
          <Button btnText="Sign up" />
        </div>
      </div>
      <section className="postCards">
        <EventsArray onClick={onClick} events={PostCardArray(searchResult)} />
      </section>
    </>
  );
}
