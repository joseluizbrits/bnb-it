"use client";

import CoordinatesBottom from "@/components/CordinatesBottom";
import { AboutContainer } from "./styles";

function About() {
  return (
    <AboutContainer id="about">
      <CoordinatesBottom />
      <div>
        <span>Por que escolher a BNB IT?</span>
        <h2>
          Excelência técnica, compromisso com o cliente e inovação contínua
        </h2>
        <p>
          Com a BNB IT você tem um parceira em tecnologia com{" "}
          <em>experiência sólida em TI</em> e conhecimento específico em banco
          de dados e BI. Focamos nas suas necessidades e nos compromissamos com
          o seu negócio.
        </p>
      </div>
    </AboutContainer>
  );
}

export default About;
