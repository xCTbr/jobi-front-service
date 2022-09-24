import "./header.css";
import { FaUserAlt } from "react-icons/fa";
import { BsFillChatLeftTextFill, BsFillGearFill } from "react-icons/bs";
import { Link, Router } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header--left-side">
        <h2>JOBI</h2>

        <input type="search" id="searchBar" placeholder="Buscar vagas" />

        <ul>
          <li>
            <a>Explorar</a>
          </li>
          <li>
            <a>Jobs</a>
          </li>
          <li>
            <a>Challenges</a>
          </li>
        </ul>
      </div>

      <ul>
        <li>
          <FaUserAlt />
        </li>
        <li>
          <BsFillChatLeftTextFill />
        </li>
        <li>
          <BsFillGearFill />
        </li>
      </ul>
    </header>
  );
}

export default Header;
