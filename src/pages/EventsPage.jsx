import React from "react";
import { Heading } from "@chakra-ui/react";
import { events } from "../data/events.json";
import { PostCard } from "../components/ui/PostCard";
// import { ControlledInputForm } from "../components/ui/Form";

export const EventsPage = () => {
  return (
    <>
      <Heading>List of events</Heading>;
      {events.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {/* <ControlledInputForm /> */}
    </>
  );
};
