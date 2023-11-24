import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

// Page import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/Root";
import {
  usersLoader,
  eventsLoader,
  categoriesLoader,
} from "./components/GetDatabase";
import { EventsPage } from "./pages/EventsPage";
import { EventPage } from "./pages/EventPage";
import { CreateEventForm } from "./components/ui/forms/CreateEventForm";
import { LoginForm } from "./components/ui/forms/LoginForm";
import { CreateUserForm } from "./components/ui/forms/CreateUserForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader:
      // usersLoader,
      eventsLoader,
    // categoriesLoader,
    children: [
      {
        path: "/",
        element: <EventsPage />,
      },
      {
        path: "/event/:id",
        element: <EventPage />,
      },
      {
        path: "/create-event",
        element: <CreateEventForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/sign-up",
        element: <CreateUserForm />,
      },
    ],
  },
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
