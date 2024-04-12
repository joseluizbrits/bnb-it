"use client";

import { HeaderContainer } from "./styles";
import ButtonOutlined from "@/components/ButtonOutlined";
import ButtonLanguageSwitch from "@/components/ButtonLanguageSwitch";
import Logo from "@/icons/Logo";
import useLanguageSwitch from "@/hooks/useLanguageSwitch";
import { navlink, button } from "./text";

function Header() {
  const { language } = useLanguageSwitch();

  return (
    <HeaderContainer className="container">
      <a href="/">
        <Logo />
      </a>

      <nav>
        <ul>
          <li>
            <a href="#services" className="navlink">
              {navlink[language]}
            </a>
          </li>
          <li>
            <ButtonOutlined href="#contact">{button[language]}</ButtonOutlined>
          </li>
        </ul>

        <ButtonLanguageSwitch />
      </nav>
    </HeaderContainer>
  );
}

export default Header;
