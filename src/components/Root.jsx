import React from "react";
import { GetData } from "./getData";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Box } from "@chakra-ui/react";

export const Root = () => {
  return (
    <>
      {GetData && <GetData />}
      <Box>
        <Navigation />
        <Outlet />
      </Box>
    </>
  );
};
