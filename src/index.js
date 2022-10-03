import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import reportWebVitals from "./reportWebVitals";

import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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

createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/cursos" element={<Cursos />} />

        <Route path="/cursos/:id" element={<DetalheCurso />} />

        <Route path="/challenges" element={<Challenges />} />

        <Route path="/trilha/:id" element={<Trilha />} />

        <Route path="/trilha/:id/:trilhaId" element={<TesteSobre />} />

        <Route path="/processos-seletivos" element={<ProcessosSeletivos />} />

        <Route
          path="/processos-seletivos/detalhes"
          element={<ProcessosSeletivosDetalhes />}
        />

        <Route path="/vagas/detalhes/:id" element={<DetalheVaga />} />

        <Route path="/mensagens" element={<Mensagens />} />

        <Route path="/" element={<Navigate to="home" />} />
      </Routes>
    </Router>
  </>
);

reportWebVitals();
