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
      {/* <Image src="logo.svg" width={933} height={347} alt={alt[language]} /> */}

      <div>
        <Link href="/">
          <Logo />
        </Link>

        <div>
          <p>{copyright[language]}</p>
          <Link href="https://www.brits.com.br/" target="_blank">
            BRITS
          </Link>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
