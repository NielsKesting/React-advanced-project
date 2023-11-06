import { useState } from "react";

const [activeUser, setActiveUser] = useState("");

export const LoginForm = ({ onChange }) => (
  <>
    <input placeholder="Username" onChange={onChange}></input>
    <input placeholder="Password" onChange={onChange}></input>
    <button type="submit"></button>
  </>
);
