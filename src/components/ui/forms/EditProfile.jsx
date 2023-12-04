// import { useState } from "react"
import { useParams } from "react-router-dom";

export const EditProfile = () => {
  const id = useParams();
  return <h1>{id}</h1>;
};
