import { React, useState } from "react";
import { ActiveUserContext } from "./ActiveUserContext";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Box } from "@chakra-ui/react";

export const Root = () => {
  const [activeUser, setActiveUser] = useState([{ id: 0 }]);
  console.log(sessionStorage.getItem('activeUser'))

  return (
    <>
      <Box>
        <ActiveUserContext.Provider value={[activeUser, setActiveUser]}>
          <Navigation />
          <Outlet />
        </ActiveUserContext.Provider>
      </Box>
    </>
  );
};
