import { Container, Button } from "react-bootstrap";

import cronometro from "../../assets/img/cronometro.png";
import estrela from "../../assets/img/estrela.png";
import share from "../../assets/img/share.png";

import "./teste-sobre.css";

import { useParams } from "react-router-dom";


import { useEffect, useState } from "react";

const axios = require("axios").default;

function TesteSobre() {
    const { id, trilhaId } = useParams();
    const [teste, setTestes] = useState([]);
    useEffect(() => {
      const getTestes = async () => {
        const res = await axios.get(
          `https://7v5crizlwg.execute-api.us-east-1.amazonaws.com/prod/challenges/${id}/${trilhaId}`
        );
        setTestes(res.data.resultado);
      };
      getTestes();
    }, [id, trilhaId]);

  return (
    <>
      <div className="teste-sobre">
        <div>
          <Container>
            <h3>Sobre o teste</h3>
          </Container>
        </div>

        <svg
          className="cursos-background"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#5643ae"
            fillOpacity="1"
            d="M0,128L60,154.7C120,181,240,235,360,245.3C480,256,600,224,720,197.3C840,171,960,149,1080,165.3C1200,181,1320,235,1380,261.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>

        <Container>
          <div className="teste-sobre-titulo">
            <h4>{teste.titulo}</h4>
            <span>{teste.titulo}</span>
          </div>

          <div className="teste-sobre-descricao">
            <p className="teste-sobre-descricao-title">
              Com esse certificado você irá:
            </p>

            <span className="teste-sobre-descricao-info">
              {teste.descricao_longa}
            </span>

            <Button variant="primary">Iniciar teste</Button>

            <div className="teste-sobre-icons">
              <span>
                <img src={cronometro} alt="" />
                {teste.duracao}
              </span>

              <span>
                <img src={estrela} alt="" />
                {teste.avaliacao}
              </span>

              <span>
                <img src={share} alt="" />
                Share
              </span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default TesteSobre;
