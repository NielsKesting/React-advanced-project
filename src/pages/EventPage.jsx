import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export const EventPage = () => {
  // const { events } = useLoaderData();
  const { id } = useParams();

  return (
    <>
      <h1>{id}</h1>
    </>
  );
};
