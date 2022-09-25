import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import knowledge from "../../assets/img/knowledge.png";
import jobs from "../../assets/img/jobs.png";
import challenges from "../../assets/img/challenges.png";
import background from "../../assets/img/background.png";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <Container>
        <Row>
          <Col>
            <Card className="card-green">
              <Card.Img src={knowledge} />

              <Card.Body>
                <Card.Title>Knowledge</Card.Title>
                <Card.Text>
                  Mergulhe com profundidade nas área de Tecnologia
                </Card.Text>

                <Button variant="primary">
                  <Link to="/cursos">Explorar</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="card-purple">
              <Card.Img src={jobs} />

              <Card.Body>
                <Card.Title>Jobs</Card.Title>
                <Card.Text>
                  Acompanhe sua jornada na busca de uma nova colocação
                </Card.Text>
                <Button variant="primary">
                  <Link to="/processos-seletivos">Explorar</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="card-blue">
              <Card.Img src={challenges} />

              <Card.Body>
                <Card.Title>Challenges</Card.Title>
                <Card.Text>
                  Prove sua proficiência em diversas tecnologias
                </Card.Text>
                <Button variant="primary">
                  <Link to="/challenges">Explorar</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
