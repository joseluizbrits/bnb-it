"use client";

import Image from "next/image";
import parse from "html-react-parser";

import { HeroContainer, FirstText, SecondText } from "./styles";
import { Title, TitleLabel, TitleParagraph } from "@/styles/Text/Title";

import CoordinatesTop from "@/components/CordinatesTop";
import ButtonFilled from "@/components/ButtonFilled";

import useLanguageSwitch from "@/hooks/useLanguageSwitch";
import {
  firsTitle,
  firstSubtitle,
  secondTitle,
  secondSubtitle,
  label,
  button,
  alt,
} from "./text";

function Hero() {
  const { language } = useLanguageSwitch();

  return (
    <HeroContainer className="margin-space">
      <CoordinatesTop />
      <FirstText>
        <h1>{firsTitle[language]}</h1>
        <TitleParagraph>{parse(firstSubtitle[language])}</TitleParagraph>
        <ButtonFilled href="mailto:comercial@bnbti.com.br">
          {button[language]}
        </ButtonFilled>
      </FirstText>

      <SecondText>
        <div>
          <Image
            src="/brain.webp"
            fill
            priority
            unoptimized
            quality={100}
            alt={alt[language]}
          />
        </div>

        <div>
          <TitleLabel>{label[language]}</TitleLabel>
          <Title>{secondTitle[language]}</Title>
          <TitleParagraph>{parse(secondSubtitle[language])}</TitleParagraph>
        </div>
      </SecondText>
    </HeroContainer>
  );
}

export default Hero;
