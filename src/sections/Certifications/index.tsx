"use client";

import Image from "next/image";
import { CertificationsContainer } from "./styles";
import certificates from "./certificates";

import useLanguageSwitch from "@/hooks/useLanguageSwitch";
import { title } from "./text";

function Certifications() {
  const { language } = useLanguageSwitch();

  return (
    <CertificationsContainer className="margin-space">
      <h2>{title[language]}</h2>
      <ul>
        {certificates.map(({ id, img, alt }) => (
          <li key={id}>
            <Image src={img} fill alt={alt[language]} />
          </li>
        ))}
      </ul>
    </CertificationsContainer>
  );
}

export default Certifications;
