"use client";

import { ServicesContainer } from "./styles";
import { Subtitle } from "@/styles/Text/Subtitle";
import { Paragraph } from "@/styles/Text/Paragraph";

// import ButtonArrow from "@/components/ButtonArrow";
import { solutions } from "./solutions";

import useLanguageSwitch from "@/hooks/useLanguageSwitch";
import { title, paragraph, button } from "./text";

function Services() {
  const { language } = useLanguageSwitch();

  return (
    <ServicesContainer id="services">
      <div className="margin-space">
        <Subtitle>{title[language]}</Subtitle>
        <Paragraph>{paragraph[language]}</Paragraph>
        {/* <ButtonArrow href="#contact">{button[language]}</ButtonArrow> */}
      </div>

      <div className="padding-space">
        <ul>
          {solutions.map(({ id, icon, name, description, labels }) => (
            <li key={id}>
              {icon}
              <h3>{name[language]}</h3>
              <Paragraph>{description[language]}</Paragraph>
              <div>
                {labels.map((label, index) => (
                  <span key={"lb" + index}>{label[language]}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ServicesContainer>
  );
}

export default Services;
