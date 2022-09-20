import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import reportWebVitals from "./reportWebVitals";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./core/header/header";
import Home from "./modules/home/home";
import Cursos from "./modules/cursos/cursos";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/cursos",
    element: <Cursos />,
  },
  {
    path: "/*",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <RouterProvider router={router} />
  </>
);

reportWebVitals();
