"use client";

import Logo from "@/icons/Logo";
import { FooterContainer } from "./styles";
import Link from "next/link";
import LogoCut from "@/icons/LogoCut";

function Footer() {
  return (
    <FooterContainer>
      <LogoCut />

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
