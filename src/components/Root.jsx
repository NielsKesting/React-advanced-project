import React from "react";
import { ActiveUserContext } from "./ActiveUserContext"
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Box } from "@chakra-ui/react";

export const Root = () => {
  return (
    <>
    <ActiveUserContext.Provider value={{username:"", setUsername: () => {}, password:"", setPassword: () => {}}}>
      <Box>
        <Navigation />
        <Outlet />
      </Box>
    </ActiveUserContext.Provider>
    </>
  );
};
