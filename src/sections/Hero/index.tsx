"use client";

import Image from "next/image";
import parse from "html-react-parser";

import { FirstText, HeroContainer, SecondText } from "./styles";

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
        <p>{parse(firstSubtitle[language])}</p>
        <ButtonFilled href="#">{button[language]}</ButtonFilled>
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
          <span>{label[language]}</span>
          <h2>{secondTitle[language]}</h2>
          <p>{parse(secondSubtitle[language])}</p>
        </div>
      </SecondText>
    </HeroContainer>
  );
}

export default Hero;
