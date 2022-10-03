import { Link } from "react-router-dom";

import perfil from "../../assets/img/perfil-menu.png";
import caixaDeDialogo from "../../assets/img/caixa-de-dialogo.png";
import configuracao from "../../assets/img/configuracao.png";

import "./header.css";

function Header() {
  return (
    <header>
      <div className="header--left-side">
        <h2>
          <Link to="/home">JOBI</Link>
        </h2>

        <input type="search" id="searchBar" placeholder="Buscar vagas" />

        <ul>
          <li>
            <Link to="/cursos">Aprendizado</Link>
          </li>
          <li>
            <Link to="/processos-seletivos">Vagas</Link>
          </li>
          <li>
            <Link to="/challenges">Desafios</Link>
          </li>
        </ul>
      </div>

      <ul className="header--right-side">
        <li>
          <Link>
            <img src={perfil} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/mensagens">
            <img src={caixaDeDialogo} alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <img src={configuracao} alt="" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
