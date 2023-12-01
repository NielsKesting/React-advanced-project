import { React, useState } from "react";
import { ActiveUserContext } from "./ActiveUserContext";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Box } from "@chakra-ui/react";

export const Root = () => {
  const [activeUserName, setActiveUserName] = useState("Niels");
  const [activeUserPassword, setActiveUserPassword] = useState("Kesting");

  return (
    <>
      <Box>
        <ActiveUserContext.Provider
          value={{
            username: [activeUserName, setActiveUserName],
            password: [activeUserPassword, setActiveUserPassword],
          }}
        >
          <Navigation />
          <Outlet />
        </ActiveUserContext.Provider>
      </Box>
    </>
  );
};
