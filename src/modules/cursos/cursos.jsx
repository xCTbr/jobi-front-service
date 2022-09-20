import "./cursos.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import challenge from "../../assets/img/challenges.png";

import { AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";

const courses = [
  {
    titulo: "Python Web Scraping",
    descricaoCurta:
      "Se você trabalha com machine learning ou finanças, ou está buscando uma carreira em desenvolvimento web ou ciência de dados, o Python é uma das habilidades...",
    duracao: "8 horas",
    avaliacao: 9.2,
    banner: challenge,
  },
  {
    titulo: "Python Web Scraping",
    descricaoCurta:
      "Se você trabalha com machine learning ou finanças, ou está buscando uma carreira em desenvolvimento web ou ciência de dados, o Python é uma das habilidades...",
    duracao: "8 horas",
    avaliacao: 9.2,
    banner: challenge,
  },
  {
    titulo: "Python Web Scraping",
    descricaoCurta:
      "Se você trabalha com machine learning ou finanças, ou está buscando uma carreira em desenvolvimento web ou ciência de dados, o Python é uma das habilidades...",
    duracao: "8 horas",
    avaliacao: 9.2,
    banner: challenge,
  },
  {
    titulo: "Python Web Scraping",
    descricaoCurta:
      "Se você trabalha com machine learning ou finanças, ou está buscando uma carreira em desenvolvimento web ou ciência de dados, o Python é uma das habilidades...",
    duracao: "8 horas",
    avaliacao: 9.2,
    banner: challenge,
  },
  {
    titulo: "Python Web Scraping",
    descricaoCurta:
      "Se você trabalha com machine learning ou finanças, ou está buscando uma carreira em desenvolvimento web ou ciência de dados, o Python é uma das habilidades...",
    duracao: "8 horas",
    avaliacao: 9.2,
    banner: challenge,
  },
];

function Cursos() {
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

      <div className="cursos">
        <Container className="cursos-container">
          <div className="cursos-cards">
            {courses.map((course, i) => {
              return (
                <Card>
                  <Card.Img src={course.banner} />

                  <Card.Body>
                    <Card.Title>
                      <h3>{course.titulo}</h3>

                      <span>
                        <AiOutlineClockCircle /> {course.duracao}
                      </span>

                      <span>
                        <AiOutlineStar /> {course.avaliacao}
                      </span>
                    </Card.Title>

                    <Card.Text>{course.descricaoCurta}</Card.Text>
                    <Button variant="primary">Acessar Curso</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Cursos;
