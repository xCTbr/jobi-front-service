import { Container, Button } from "react-bootstrap";
import "./trilha.css";

import { useParams } from "react-router-dom";


import { useEffect, useState } from "react";


import { Link } from "react-router-dom";


const axios = require("axios").default;
function Trilha() {
  const { id } = useParams();
  const [trilha, setTrilhas] = useState([]);

  useEffect(() => {
    const getTrilhas = async () => {
      const res = await axios.get(
        `https://7v5crizlwg.execute-api.us-east-1.amazonaws.com/prod/challenges/${id}`
      );

     
      setTrilhas(res.data.resultado);
    };
    getTrilhas();
  });

  return (
    <>
      <div className="trilha">
        <div>
          <Container>
            <h3>Trilha Python</h3>
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
          <ul className="trilha-lista">
            {trilha.map((trilha, i) => {
              return (
                <li key={i}>
                  <div className="trilha-lista_info">
                    <p className="trilha-lista_info-name">{trilha.titulo}</p>

                    <span className="trilha-lista_info-level">
                      {trilha.nivel}
                    </span>

                    <span className="trilha-lista_info-desc">
                      {trilha.descricao}
                    </span>
                  </div>

                  <Button variant="primary">
                    <Link to="/trilha/sobre">Acessar</Link>
                  </Button>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </>
  );
}

export default Trilha;
