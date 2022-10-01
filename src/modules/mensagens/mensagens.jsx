import { Container } from "react-bootstrap";

import perfil from "../../assets/img/perfil.png";
import paperclip from "../../assets/img/paperclip.png";
import feliz from "../../assets/img/feliz.png";
import imagem from "../../assets/img/imagem.png";
import mandar from "../../assets/img/mandar.png";

import "./mensagens.css";

function Mensagens() {
  const conversas = [
    {
      pic: perfil,
      nome: "Pessoa 1",
      cargo: "Recruiter ",
    },
    {
      pic: perfil,
      nome: "Pessoa 1",
      cargo: "Recruiter ",
    },
    {
      pic: perfil,
      nome: "Pessoa 1",
      cargo: "Recruiter ",
    },
    {
      pic: perfil,
      nome: "Pessoa 1",
      cargo: "Recruiter ",
    },
  ];

  return (
    <>
      <div className="mensagens">
        <div className="mensagens-titulo">
          <Container>
            <h3>Conversas</h3>
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
      </div>

      <Container>
        <div className="chat-container">
          <div className="card" style={{ width: 60 + "%" }}>
            <ul className="mensagens-lista">
              {conversas.map((conversa, i) => {
                return (
                  <li key={i}>
                    <img src={conversa.pic} alt=""></img>

                    <div className="mensagens-lista-nome">
                      <p> {conversa.nome}</p>
                      <span> {conversa.cargo}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="chat">
            <div className="chat-right-balloon">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo at repudiandae eligendi debitis voluptate dolorem
                accusantium cupiditate, optio error aspernatur eveniet labore.
                Culpa sequi eaque inventore optio quis laborum dolores?
              </p>
            </div>

            <div className="chat-left-balloon">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo at repudiandae eligendi debitis voluptate dolorem
                accusantium cupiditate, optio error aspernatur eveniet labore.
                Culpa sequi eaque inventore optio quis laborum dolores?
              </p>
            </div>

            <div className="chat-input">
              <div className="chat-input-left-side">
                <img src={paperclip} alt="" />
                <img src={feliz} alt="" />
                <img src={imagem} alt="" />
              </div>

              <div className="chat-input-right-side">
                <input type="text" />
                <img src={mandar} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Mensagens;
