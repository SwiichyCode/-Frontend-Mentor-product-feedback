import React from "react";
import { render } from "preact";
import { Feedback } from "./pages/Feedback";
import { NewFeedback } from "./pages/NewFeedback";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feedback />,
  },
  {
    path: "/new-feedback",
    element: <NewFeedback />,
  },
]);

render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("app")
);
