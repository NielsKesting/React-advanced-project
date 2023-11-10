import { PostCard } from "../components/ui/PostCard";

export const EventsArray = ({ events, onClick }) => {
  return (
    <>
      {events.map((event) => (
        <PostCard key={event.id} post={event} onClick={onClick} />
      ))}
    </>
  );
};
