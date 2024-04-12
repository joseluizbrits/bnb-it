"use client";

import { ContactContainer } from "./styles";
import CoordinatesBottom from "@/components/CordinatesBottom";
import Form from "@/components/Form";
import ButtonOutlined from "@/components/ButtonOutlined";

function Contact() {
  return (
    <ContactContainer>
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

      <div id="contact">
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
    </ContactContainer>
  );
}

export default Contact;
