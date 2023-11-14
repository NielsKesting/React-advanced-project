import { useState } from "react";
import { users } from "../../../data/events.json";

export let [activeUser, loginData] = useState(
  users.map((user) =>
    user.includes(
      user.name === activeUser.name && user.password === activeUser.password
    )
  )
);
