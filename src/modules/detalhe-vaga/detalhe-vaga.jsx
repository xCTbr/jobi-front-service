import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import maletaDeNegocios from "../../assets/img/maleta-de-negocios.png";
import logoProcesso from "../../assets/img/logo-processo.png";

import "./detalhe-vaga.css";

import { useParams } from "react-router-dom";


import { useEffect, useState } from "react";



const axios = require("axios").default;

function DetalheVaga() {
const { id } = useParams();
const [processoSeletivo, setProcessoSeletivo] = useState([]);

  useEffect(() => {
    const getProcessoSeletivo = async () => {
      const res = await axios.get(
        `https://7v5crizlwg.execute-api.us-east-1.amazonaws.com/prod/vagas/${id}`
      );

      //   res.data.resultado.capa = challenges;
      setProcessoSeletivo(res.data.resultado);
    };
    getProcessoSeletivo();
  }, [id]);

  return (
    <>
      <div className="detalhe-vaga">
        <div className="detalhe-vaga-titulo">
          <Container>
            <h3>Processos Seletivos</h3>
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
          <br></br>

          <div className="card">
            <div className="detalhe-vaga-titulo">
              <img src={logoProcesso} alt="" />

              <div>
                <p>{processoSeletivo.titulo}</p>
                <span>
                  {processoSeletivo.empresa} - {processoSeletivo.cidade} - {processoSeletivo.estado} - {processoSeletivo.pais} -
                  há 4 dias -{" "}
                  <span className="detalhe-vaga-titulo-candidaturas">
                    {processoSeletivo.qtd_candidaturas} candidaturas
                  </span>
                </span>
              </div>
            </div>

            <p className="detalhe-vaga-modelo">
              <img src={maletaDeNegocios} alt="" />
              {processoSeletivo.periodo_atividade} - {processoSeletivo.senioridade}
            </p>

            <Button variant="primary" className="candidatar-btn">
              Candidatar - se
            </Button>
          </div>

          <br></br>

          <div className="card p-5">
            <h3 className="title-card">Cultura da empresa</h3>

            <textarea rows="20" defaultValue={processoSeletivo.descricao_cultural}></textarea>
          </div>

          <br></br>

          <div className="card p-5">
            <h3 className="title-card">O que é essencial</h3>

            <textarea rows="7" defaultValue={processoSeletivo.essencial}></textarea>
          </div>

          <br></br>
          <br></br>
        </Container>
      </div>
    </>
  );
}

export default DetalheVaga;
