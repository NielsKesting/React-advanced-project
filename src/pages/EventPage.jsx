import React from "react";
import { Heading } from "@chakra-ui/react";
import { Button } from "../components/ui/Button";

export const EventPage = ({ post, onClick }) => {
  return (
    <>
      <Heading>{post.title}</Heading>
      <Button type="button" btnText="Back" onClick={() => onClick} />
    </>
  );
};
