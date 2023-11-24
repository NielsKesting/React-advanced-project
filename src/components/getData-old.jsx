import { useState, useEffect } from "react";

export function GetData() {
  let [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3000/events");
      const data = response.json();
      setUsers(data);
    };
    fetchUsers;
  }, []);

  console.log(users);

  let [events, setEvents] = useState();

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:3000/events");
      const data = response.json();
      setEvents(data);
    };
    fetchEvents;
  }, []);

  console.log(events);

  let [categories, setCategories] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://localhost:3000/events");
      const data = response.json();
      setCategories(data);
    };
    fetchCategories;
  }, []);

  console.log(categories);
}
