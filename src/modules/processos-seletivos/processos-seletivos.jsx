import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./processos-seletivos.css";

import { Link } from "react-router-dom";

function ProcessosSeletivos() {
  const vagasAbertas = [
    {
      empresa: "Itaú",
      titulo: "Pessoa Desenvolvedora FullStack JR",
      estado: "São Paulo",
      pais: "Brasil",
    },
    {
      empresa: "Itaú",
      titulo: "Pessoa Desenvolvedora FullStack JR",
      estado: "São Paulo",
      pais: "Brasil",
    },
  ];

  const seusProcessos = [
    {
      empresa: "Itaú",
      titulo: "Pessoa Desenvolvedora FullStack JR",
      status: "Aguardando resposta da empresa",
    },
  ];

  return (
    <>
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

      <div className="processo-seletivo">
        <div className="processo-seletivo-titulo">
          <Container>
            <h3>Processos Seletivos</h3>
          </Container>
        </div>

        <Container>
          <Tabs defaultActiveKey="home">
            <Tab eventKey="home" title="Vagas Abertas">
              <ul className="processo-seletivo-lista">
                {vagasAbertas.map((vaga, i) => {
                  return (
                    <li key={i}>
                      <div>
                        <b>{vaga.empresa}</b>

                        <p>{vaga.titulo}</p>

                        <span>{vaga.estado}</span>

                        <span>{vaga.pais}</span>
                      </div>

                      <Button variant="primary">
                        <Link to="/vagas/detalhes">Participar do Processo</Link>
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </Tab>

            <Tab eventKey="profile" title="Seus Processos">
              <ul className="seus-processos-lista">
                {seusProcessos.map((processo, i) => {
                  return (
                    <li key={i}>
                      <div>
                        <b>{processo.empresa}</b>

                        <p>{processo.titulo}</p>

                        <span>{processo.status}</span>

                        <span>- veja as etapas do processo</span>
                      </div>

                      <Button variant="primary">
                        <Link to="/processos-seletivos/detalhes">
                          Analisar o Processo
                        </Link>
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </Tab>
          </Tabs>
        </Container>
      </div>
    </>
  );
}

export default ProcessosSeletivos;
