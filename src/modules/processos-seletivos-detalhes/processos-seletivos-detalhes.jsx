import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import logoProcesso from "../../assets/img/logo-processo.png";
import checkbox from "../../assets/img/checkbox.png";
import clock from "../../assets/img/clock.png";

import "./processos-seletivos-detalhes.css";

function ProcessosSeletivosDetalhes() {
  return (
    <>
      <div className="detalhe-processo">
        <div className="detalhe-processo-titulo">
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
            fill-opacity="1"
            d="M0,128L60,154.7C120,181,240,235,360,245.3C480,256,600,224,720,197.3C840,171,960,149,1080,165.3C1200,181,1320,235,1380,261.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>

        <Container>
          <br></br>

          <div className="detalhe-processo_titulo">
            <img src={logoProcesso} />
            <div>
              <h4>Analista de suporte</h4>
              <p>Candidatou-se há 9 dias</p>
            </div>
          </div>

          <div className="card detalhe-processo_historico">
            <p>Acompanhe o progresso da vaga</p>

            <div className="detalhe-processo_historico-fluxo">
              <hr />

              <div className="detalhe-processo_historico-fluxo_item">
                <img src={checkbox} />
                Currículo
              </div>

              <hr />

              <div className="detalhe-processo_historico-fluxo_item">
                <img src={clock} />
                Teste de perfil
              </div>

              <hr />

              <div className="detalhe-processo_historico-fluxo_item">
                <img src={clock} />
                Teste de lógica
              </div>

              <hr />
            </div>
          </div>

          <br></br>

          <div className="card detalhe-processo_status">
            <span>
              <b>Status: </b> Aguardando resposta da empresa
            </span>
          </div>

          <br></br>

          <Button variant="primary">Ver mais vagas semelhantes a essa</Button>
        </Container>
      </div>
    </>
  );
}

export default ProcessosSeletivosDetalhes;
