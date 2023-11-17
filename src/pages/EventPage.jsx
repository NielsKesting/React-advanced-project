import React from "react";
import { useParams } from "react-router-dom";
// import { PostCard } from "../components/ui/PostCard";
// import { events } from "../data/events.json";

export const EventPage = () => {
  const { id } = useParams();
  console.log;

  return (
    <>
      <h1>{id}</h1>
    </>
  );
};
