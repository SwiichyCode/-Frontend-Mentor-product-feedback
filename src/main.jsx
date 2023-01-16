import React from "react";
import { render } from "preact";
import { Feedback } from "./pages/Feedback";
import { FeedbackAdd } from "./pages/FeedbackAdd";
import { FeedbackDetail } from "./pages/FeedbackDetail";
import { Roadmap } from "./pages/Roadmap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feedback />,
  },
  {
    path: "/:id",
    element: <FeedbackDetail />,
  },
  {
    path: "/new-feedback",
    element: <FeedbackAdd />,
  },
  {
    path: "/roadmap",
    element: <Roadmap />,
  },
]);

render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("app")
);
