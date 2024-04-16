"use client";

import parse from "html-react-parser";
import { ContactContainer } from "./styles";

import { Title, TitleLabel, TitleParagraph } from "@/styles/Text/Title";
import { Paragraph } from "@/styles/Text/Paragraph";

import CoordinatesBottom from "@/components/CordinatesBottom";
import Form from "@/components/Form";
import ButtonOutlined from "@/components/ButtonOutlined";

import useLanguageSwitch from "@/hooks/useLanguageSwitch";
import {
  label,
  firstTitle,
  subtitle,
  secondTitle,
  paragraph,
  button,
} from "./text";

function Contact() {
  const { language } = useLanguageSwitch();

  return (
    <ContactContainer className="margin-space">
      <CoordinatesBottom />
      <div>
        <TitleLabel $secondary>{label[language]}</TitleLabel>
        <Title>{firstTitle[language]}</Title>
        <TitleParagraph>{parse(subtitle[language])}</TitleParagraph>
      </div>

      <div id="contact">
        <div>
          <h3>{secondTitle[language]}</h3>
          <Paragraph>{paragraph[language]}</Paragraph>
          <ButtonOutlined href="#">{button[language]}</ButtonOutlined>
        </div>
        <Form />
      </div>
    </ContactContainer>
  );
}

export default Contact;
