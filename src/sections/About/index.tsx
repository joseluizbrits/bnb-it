"use client";

import CoordinatesBottom from "@/components/CordinatesBottom";
import { AboutContainer } from "./styles";
import ButtonOutlined from "@/components/ButtonOutlined";
import Form from "@/components/Form";

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

      <div>
        <div>
          <h3>Descubra o poder dos dados</h3>
          <p>
            Nossos serviços de qualidade capacitam empresas a maximizar o valor
            de seus dados. Venha impulsionar o crescimento do seu negócio com a
            gente.
          </p>
          <ButtonOutlined href="#">Fale conosco</ButtonOutlined>
        </div>
        <Form />
      </div>
    </AboutContainer>
  );
}

export default About;
