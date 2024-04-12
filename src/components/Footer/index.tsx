"use client";

import { FooterContainer } from "./styles";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/icons/Logo";

function Footer() {
  return (
    <FooterContainer>
      <Image src="logo.svg" width={933} height={347} alt="Logo da BNB IT" />

      <div>
        <Link href="/">
          <Logo />
        </Link>

        <div>
          <p>
            © Copyright {new Date().getFullYear()} -{" "}
            {new Date().getFullYear() + 1} | BNB IT | Todos os Direitos
            Reservados | Desenvolvido por
          </p>
          <Link href="https://www.brits.com.br/" target="_blank">
            BRITS
          </Link>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
