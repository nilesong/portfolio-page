import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Landing";
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "projects/",
    element: <Projects />,
  },
  {
    path: "about/",
    element: <About />,
  },
  {
    path: "contact/",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);