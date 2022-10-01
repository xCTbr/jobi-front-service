import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./detalhe-curso.css";

import challenges from "../../assets/img/challenges.png";
import estrela from "../../assets/img/estrela.png";
import cronometro from "../../assets/img/cronometro.png";
import trofeu from "../../assets/img/trofeu.png";
import cadernoDeRascunhos from "../../assets/img/caderno-de-rascunhos.png";
import grupoDeUsuarios from "../../assets/img/grupo-de-usuarios.png";
import perfilAvaliacao from "../../assets/img/perfil-avaliacao.png";

import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";


import { useEffect, useState } from "react";


const axios = require("axios").default;

function DetalheCurso() {
  const { id } = useParams();
  const [curso, setCursos] = useState([]);

  useEffect(() => {
    const getCursos = async () => {
      const res = await axios.get(
        `https://7v5crizlwg.execute-api.us-east-1.amazonaws.com/prod/cursos/${id}`
      );

      res.data.resultado.relatos = [
        {
          nome: "Gabriel Santos",
          data: "há um mês",
          texto:
            "Ótimo método de ensino. Rápido e objetivo, mas não deixa passar nada de importante. Parabéns aos desenvolvedores do curso.",
          avaliacao: 10,
        },
      ]
      res.data.resultado.instrutor = {
        nome: "Nome",
        descricao:
          "Ajudo devs a conquistarem sua primeira vaga e construírem carreiras de sucesso!",
      }

      res.data.resultado.capa = challenges;
      setCursos(res.data.resultado);
    };
    getCursos();
  }, []);

  return (
    <>
      <svg
        className="cursos-background"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#5643ae"
          fill-opacity="1"
          d="M0,128L60,154.7C120,181,240,235,360,245.3C480,256,600,224,720,197.3C840,171,960,149,1080,165.3C1200,181,1320,235,1380,261.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      <div className="detalhe-curso">
        <Container>
          <Row>
            <Col xs={8}>
              <p className="detalhe-curso_categoria">{curso.categoria}</p>
              <h3 className="detalhe-curso_titulo">{curso.titulo}</h3>

              <div className="card">
                <Row>
                  <Col xs={6}>
                    <img src={curso.capa} alt="" />
                  </Col>
                  <Col xs={6}>
                    <h4>Aulas</h4>
                    <ul className="aulas">
                      {
                        curso?.aulas?.length ?
                          curso.aulas.map((aula, i) => {
                            return <li key={i}>{aula}</li>;
                          }) : null}
                    </ul>
                  </Col>

                  <Col xs={12}>
                    <h4>Descrição</h4>
                    <p>{curso.descricao_longa}</p>

                    <br></br>
                  </Col>

                  <Col xs={6}>
                    <h4>Avaliações dos usuários</h4>

                    <ul className="avaliacao">
                      {curso.relatos.map((avaliacao, index) => {
                        return (
                          <li>
                            <div>
                              <div className="d-flex align-items-start">
                                <img src={perfilAvaliacao} alt="" />

                                <div className="avaliacao-nome-data">
                                  <p>{avaliacao.nome}</p>
                                  <span>{avaliacao.data}</span>
                                </div>
                              </div>

                              <p>{avaliacao.texto}</p>

                              <b>
                                <img className="estrela" src={estrela} alt="" />
                                {avaliacao.avaliacao}
                              </b>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </Col>

                  <Col xs={6}>
                    <h4>Instrutor</h4>

                    <div className="avaliacao-instrutor">
                      <div className="d-flex align-items-start flex-column">
                        <div className="d-flex align-items-center">
                          <img className="m-0" src={perfilAvaliacao} alt="" />
                          <p className="m-0 mx-2">{curso.instrutor.nome}</p>
                        </div>

                        <br></br>

                        <div>
                          <span>{curso.instrutor.descricao}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col>
              <div className="card card-dados-curso">
                <ul className="dados-curso">
                  <li>
                    <img src={cronometro} alt="" />
                    {curso.duracao}
                  </li>
                  <li>
                    <img src={cadernoDeRascunhos} alt="" />
                    {curso.qtd_atividades} atividades
                  </li>
                  <li>
                    <img src={trofeu} alt="" />
                    Certificado de conclusão
                  </li>
                  <li>
                    <img src={grupoDeUsuarios} alt="" />
                    {curso.qtd_alunos} aderiram esse curso
                  </li>
                  <li>
                    <img src={estrela} alt="" />
                    {curso.avaliacao}
                  </li>
                </ul>
              </div>

              <Button className="aderir-curso-btn" variant="primary">
                Aderir curso
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default DetalheCurso;
