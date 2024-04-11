"use client";
import CoordinatesTop from "@/components/CordinatesTop";
import { FirstText, HeroContainer, SecondText } from "./styles";
import ButtonFilled from "@/components/ButtonFilled";
import Image from "next/image";

function Hero() {
  return (
    <HeroContainer>
      <CoordinatesTop />
      <FirstText>
        <h1>Consultoria de precisão guiando sua empresa para o sucesso</h1>
        <p>
          A BNB IT organiza os seus dados de forma eficaz, melhora a compreensão
          do <em>desempenho do seu negócio</em> e te faz identificar novas
          oportunidades.
        </p>
        <ButtonFilled href="#">Descubra</ButtonFilled>
      </FirstText>

      <SecondText>
        <div>
          <Image
            src="/brain.webp"
            fill
            priority
            unoptimized
            alt="Imagem microscópica de algo parecido com um neurônio"
          />
        </div>

        <div>
          <span>Inteligência em Banco de Dados</span>
          <h2>Organize e visualize seus dados com análises avançadas</h2>
          <p>
            Uma equipe com conhecimento especializado em tecnologias de{" "}
            <em>banco de dados e BI</em> que te fornece insights valiosos para
            tomadas de decisão estratégicas.
          </p>
        </div>
      </SecondText>
    </HeroContainer>
  );
}

export default Hero;
