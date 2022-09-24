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
import ProcessosSeletivos from "./modules/processos-seletivos/processos-seletivos";
import ProcessosSeletivosDetalhes from "./modules/processos-seletivos-detalhes/processos-seletivos-detalhes";
import DetalheVaga from "./modules/detalhe-vaga/detalhe-vaga";
import Mensagens from "./modules/mensagens/mensagens";

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
    path: "processos-seletivos",
    element: <ProcessosSeletivos />,
  },
  {
    path: "processos-seletivos/detalhes",
    element: <ProcessosSeletivosDetalhes />,
  },
  {
    path: "vagas/detalhes",
    element: <DetalheVaga />,
  },
  {
    path: "mensagens",
    element: <Mensagens />,
  },
  {
    path: "/*",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <RouterProvider router={router} fallbackElement={<Home />}></RouterProvider>
  </>
);

reportWebVitals();
