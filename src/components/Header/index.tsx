"use client";

import Logo from "@/icons/Logo";
import { HeaderContainer } from "./styles";
import ButtonOutlined from "@/ButtonOutlined";

function Header() {
  return (
    <HeaderContainer className="container">
      <a href="/">
        <Logo />
      </a>
      <nav>
        <ul>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <ButtonOutlined href="#">Contato</ButtonOutlined>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
