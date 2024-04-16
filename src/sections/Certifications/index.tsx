"use client";

import Image from "next/image";
import { CertificationsContainer } from "./styles";
import { Subtitle } from "@/styles/Text/Subtitle";

import certificates from "./certificates";
import useLanguageSwitch from "@/hooks/useLanguageSwitch";
import { subtitle } from "./text";

function Certifications() {
  const { language } = useLanguageSwitch();

  return (
    <CertificationsContainer className="margin-space">
      <Subtitle>{subtitle[language]}</Subtitle>
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
