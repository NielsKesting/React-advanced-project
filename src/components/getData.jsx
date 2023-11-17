import { useLoaderData } from "react-router-dom";

export function GetData() {
  const data = useLoaderData();

  console.log(data);
}

export let usersLoader = async () => {
  const res = await fetch("http://localhost:3000/users");
  return res.json();
};

export let eventsLoader = async () => {
  const res = await fetch("http://localhost:3000/events");
  return res.json();
};

export let categoriesLoader = async () => {
  const res = await fetch("http://localhost:3000/categories");
  return res.json();
};
