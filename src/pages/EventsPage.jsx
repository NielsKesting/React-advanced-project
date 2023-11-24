import "../components/Style/EventsPageStyle/EventsPage.css";
import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { TextInput } from "../components/ui/TextInput";
import { PostCard } from "../components/ui/PostCard";

export function EventsPage() {
  const { events } = useLoaderData();
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
