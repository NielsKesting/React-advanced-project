// import "./EventsPageStyle/EventsPage.css";
import { useState } from "react";
import { EventPage } from "./EventPage.jsx";
import { PageRetriever } from "../components/PageRetriever.jsx";

export function EventsPage() {
  let [event, setEvent] = useState();

  return (
    <>
      {event ? (
        <EventPage post={event} onClick={setEvent} />
      ) : (
        <PageRetriever onClick={setEvent} />
      )}
    </>
  );
}
