import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import reportWebVitals from "./reportWebVitals";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./core/header/header";
import Home from "./modules/home/home";
import Cursos from "./modules/cursos/cursos";
import DetalheCurso from "./modules/detalhe-curso/detalhe-curso";
import Challenges from "./modules/challenges/challenges";
import Trilha from "./modules/trilha/trilha";
import TesteSobre from "./modules/testes-sobre/teste-sobre";

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
    path: "/cursos/:id",
    element: <DetalheCurso />,
  },
  {
    path: "/challenges",
    element: <Challenges />,
  },
  {
    path: "/trilha",
    element: <Trilha />,
  },
  {
    path: "/trilha/sobre",
    element: <TesteSobre />,
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
