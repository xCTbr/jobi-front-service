import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import maletaDeNegocios from "../../assets/img/maleta-de-negocios.png";
import logoProcesso from "../../assets/img/logo-processo.png";

import "./detalhe-vaga.css";

function DetalheVaga() {
  const vaga = {
    titulo: "Engenheiro de Dados Sênior",
    empresa: "Omega energia",
    periodo_atividade: "Tempo integral",
    senioridade: "júnior",
    qtd_candidaturas: 10,
    pais: "Brasil",
    estado: "São Paulo",
    cidade: "São Paulo",
    descricao_cultural:
      "#VemSerOmega \n\n Somos a maior geradora de energia sustentável do Brasil. Fazemos tecnologia e energia caminharem juntas e na mesma direção. Nosso propósito é transformar - por meio da energia limpa, barata e simples.\n\n Somos um time de profissionais engajados e combinamos alta performance com colaboração. Isso porque somos todos co-empreendedores e compartilhamos do mesmo propósito. Nossas relações são baseadas em transparência com uma dose de empatia e, assim, evoluímos juntos.\n\n Somos eternos inconformados e, desde a nossa fundação, nos perguntamos constantemente se podemos construir novos caminhos, fazer melhor e ir além. Fazer parte do time Omega significa responder sempre sim. Com esse espírito, estamos revolucionando o nosso mercado, usando a tecnologia como aliada para tornar a energia sustentável e digital uma realidade para todos.\n\n #VemSerOmega \n\n Para nos conhecer melhor \n\n Website \n LinkedIn \n Instagram",
    essencial:
      "° Se sentir confortável com o aprendizado constante de novas tecnologias.\n° Facilidade de se comunicar com times de negócio.\n° Habilidades com alguma linguagem de programação, especialmente às mais utilizadas em produtos de dados e analytics (Python, SQL, Scala).\n° Habilidade com bancos de dados SQL e NoSQL.\n° Conhecimento de serviços de armazenamento, analytics e computação em nuvem. Preferencialmente AWS.\n° Conhecimentos sobre processamento de dados distribuídos (preferencialmente Spark através do PySpark).\n° Conhecimentos sobre arquiteturas de Big Data em nuvem",
  };

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
            fill-opacity="1"
            d="M0,128L60,154.7C120,181,240,235,360,245.3C480,256,600,224,720,197.3C840,171,960,149,1080,165.3C1200,181,1320,235,1380,261.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>

        <Container>
          <br></br>

          <div className="card">
            <div className="detalhe-vaga-titulo">
              <img src={logoProcesso} alt="" />

              <div>
                <p>{vaga.titulo}</p>
                <span>
                  {vaga.empresa} - {vaga.cidade} - {vaga.estado} - {vaga.pais} -
                  há 4 dias -{" "}
                  <span className="detalhe-vaga-titulo-candidaturas">
                    {vaga.qtd_candidaturas} candidaturas
                  </span>
                </span>
              </div>
            </div>

            <p className="detalhe-vaga-modelo">
              <img src={maletaDeNegocios} alt="" />
              {vaga.periodo_atividade} - {vaga.senioridade}
            </p>

            <Button variant="primary" className="candidatar-btn">
              Candidatar - se
            </Button>
          </div>

          <br></br>

          <div className="card p-5">
            <h3 className="title-card">Cultura da empresa</h3>

            <textarea rows="20">{vaga.descricao_cultural}</textarea>
          </div>

          <br></br>

          <div className="card p-5">
            <h3 className="title-card">O que é essencial</h3>

            <textarea rows="7">{vaga.essencial}</textarea>
          </div>

          <br></br>
          <br></br>
        </Container>
      </div>
    </>
  );
}

export default DetalheVaga;
