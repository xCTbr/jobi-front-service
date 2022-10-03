import { Container, Button } from "react-bootstrap";
import ladder from "../../assets/img/ladder.png";
import challengesImg from "../../assets/img/challenges.png";
import "./challenges.css";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const axios = require("axios").default;

function Challenges() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const getChallenges = async () => {
      const res = await axios.get(
          "https://7v5crizlwg.execute-api.us-east-1.amazonaws.com/prod/tecnologias"
       );

      res.data.resultado.forEach((data) => {
        data.banner = challengesImg;
      });

      setChallenges(res.data.resultado);
    };
    getChallenges();
  }, []);

  return (
    <>
      <div className="challenges">
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
          <h2>Desafios</h2>
          <hr />
          <p className="sub-title">
            Teste suas habilidades nas tecnologias mais requisitadas do Mercado.
          </p>

          <div className="d-flex justify-content-between flex-wrap">
            {challenges.map((challenge, index) => {
              return (
                <div key={index} className="card">
                  <img className="card-banner" src={challenge.banner} alt="" />

                  <div className="card-body">
                    <h3>{challenge.titulo}</h3>

                    <p>{challenge.descricao}</p>

                    <b className="card-etapas">
                      <img src={ladder} alt="" />
                      {challenge.qtd_challenges} Etapas
                    </b>

                    <Button variant="primary">
                      <Link to={`/trilha/${challenge._id}`}>Acessar</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Challenges;
