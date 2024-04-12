"use client";

import { ServicesContainer } from "./styles";
import ButtonArrow from "@/components/ButtonArrow";

import useLanguageSwitch from "@/hooks/useLanguageSwitch";
import { title, paragraph, button } from "./text";
import { solutions } from "./solutions";

function Services() {
  const { language } = useLanguageSwitch();

  return (
    <ServicesContainer id="services">
      <h2>{title[language]}</h2>
      <p>{paragraph[language]}</p>
      <ButtonArrow href="#">{button[language]}</ButtonArrow>

      <div>
        <ul>
          {solutions.map(({ id, icon, name, description, labels }) => (
            <li key={id}>
              {icon}
              <h3>{name[language]}</h3>
              <p>{description[language]}</p>
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
