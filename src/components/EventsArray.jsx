import { Link, useLoaderData } from "react-router-dom";
import { PostCard } from "../components/ui/PostCard";

export const EventsArray = () => {
  const { events } = useLoaderData();

  return (
    <>
      {events.map((event) => (
        <Link to={`event/${event.id}`} key={event.id}>
          <PostCard key={event.id} post={event} />
        </Link>
      ))}
    </>
  );
};
