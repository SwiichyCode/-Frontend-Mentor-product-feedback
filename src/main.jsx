import React from "react";
import { createRoot } from "react-dom/client";
import { Feedback } from "./pages/Feedback";
import { FeedbackAdd } from "./pages/FeedbackAdd";
import { FeedbackDetail } from "./pages/FeedbackDetail";
import { Roadmap } from "./pages/Roadmap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

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

createRoot(document.getElementById("app")).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
