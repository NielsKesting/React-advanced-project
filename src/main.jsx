import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

// Page import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/Root";
import { EventsPage } from "./pages/EventsPage";
import { EventPage } from "./pages/EventPage";
import { CreateEventForm } from "./components/ui/forms/CreateEventForm";
import { LoginForm } from "./components/ui/forms/LoginForm";
import { CreateUserForm } from "./components/ui/forms/CreateUserForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <EventsPage />,
        loader: async () => {
          // const users = await fetch("http://localhost:3000/users");
          const events = await fetch("http://localhost:3000/events");
          // const categories = await fetch("http://localhost:3000/categories");

          return events.json();
        },
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
