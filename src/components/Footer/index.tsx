"use client";

import Image from "next/image";
import Link from "next/link";

import { FooterContainer } from "./styles";
import Logo from "@/icons/Logo";

import useLanguageSwitch from "@/hooks/useLanguageSwitch";
import { copyright, alt } from "./text";

function Footer() {
  const { language } = useLanguageSwitch();

  return (
    <FooterContainer>
      <div>
        <Image src="logo.svg" fill alt={alt[language]} />
      </div>

      <div>
        <Link href="/">
          <Logo />
        </Link>

        <p>
          {copyright[language]}{" "}
          <Link href="https://www.brits.com.br/" target="_blank">
            BRITS
          </Link>
        </p>
      </div>
    </FooterContainer>
  );
}

export default Footer;
