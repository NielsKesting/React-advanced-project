import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { GetData } from "./components/GetData";

// Page import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/Root";
import { EventsPage } from "./pages/EventsPage";
import { EventPage } from "./pages/EventPage";
import { CreateEventForm } from "./components/ui/forms/CreateEventForm";
import { LoginForm } from "./components/ui/forms/LoginForm";
import { CreateUserForm } from "./components/ui/forms/CreateUserForm";
import { EditProfile } from "./components/ui/forms/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: GetData,
    children: [
      {
        path: "/",
        element: <EventsPage />,
        loader: GetData,
      },
      {
        path: "/event/:id",
        element: <EventPage />,
        loader: GetData,
      },
      {
        path: "/create-event",
        element: <CreateEventForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
        loader: GetData,
      },
      {
        path: "/sign-up",
        element: <CreateUserForm />,
      },
      {
        path: "/profile",
        element: <EditProfile />,
        loader: GetData,
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
