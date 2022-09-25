import "./cursos.css";

import Container from "react-bootstrap/Container";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import challenge from "../../assets/img/challenges.png";

import { AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const axios = require("axios").default;

function Cursos() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const res = await axios.get(
        "https://632565a54cd1a2834c3d7693.mockapi.io/api/v1/cursos"
      );

      res.data.forEach((data) => {
        data.banner = challenge;
      });

      setCourses(res.data);
    };
    getCourses();
  }, []);

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

      <div className="cursos">
        <Container className="cursos-container">
          <div className="cursos-cards">
            {courses.map((course, i) => {
              return (
                <Card key={i}>
                  <Card.Img src={course.banner} />

                  <Card.Body>
                    <Card.Title>
                      <h3>{course.titulo}</h3>

                      <span>
                        <AiOutlineClockCircle />
                        <span>{course.duracao}</span>
                      </span>

                      <span>
                        <AiOutlineStar />
                        <span>{course.avaliacao}</span>
                      </span>
                    </Card.Title>

                    <Card.Text>{course.descricao_curta}</Card.Text>
                    <Button variant="primary">
                      <Link to="/cursos/1">Acessar Curso</Link>
                    </Button>
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
