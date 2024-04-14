"use client";

import parse from "html-react-parser";
import { ContactContainer } from "./styles";

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
        <span>{label[language]}</span>
        <h2>{firstTitle[language]}</h2>
        <p>{parse(subtitle[language])}</p>
      </div>

      <div id="contact">
        <div>
          <h3>{secondTitle[language]}</h3>
          <p>{paragraph[language]}</p>
          <ButtonOutlined href="#">{button[language]}</ButtonOutlined>
        </div>
        <Form />
      </div>
    </ContactContainer>
  );
}

export default Contact;
