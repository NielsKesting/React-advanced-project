import { useState, useEffect } from "react";

export function GetData() {
  // Users
  let [users, setUsers] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  // Events
  let [events, setEvents] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEvents(data);
      });
  }, []);

  // Categories
  let [categories, setCategories] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      });
  }, []);

  console.log(users, events, categories);
  return {
    users,
    events,
    categories,
  };
}
