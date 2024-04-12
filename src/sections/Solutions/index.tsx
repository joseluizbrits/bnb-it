"use client";

import Brain from "@/icons/Brain";
import { SolutionsContainer } from "./styles";
import ButtonArrow from "@/components/ButtonArrow";
import Database from "@/icons/Database";
import Email from "@/icons/Email";
import Image from "next/image";

function Solutions() {
  return (
    <SolutionsContainer id="services">
      <h2>Nossas soluções</h2>
      <p>
        Oferecemos serviços de consultoria, desenvolvimento e implementação de
        soluções em banco de dados e BI. Isso inclui modelagem de dados,
        otimização de consultas, integração de sistemas, desenvolvimento de
        painéis de controle e relatórios analíticos.
      </p>
      <ButtonArrow href="#">Saiba mais</ButtonArrow>

      <div>
        <ul>
          <li>
            <Database />
            <h3>Banco de Dados</h3>
            <p>
              Sistema de armazenamento que facilita a manipulação dos dados de
              seu negócio. A BNB IT organiza e protege as suas informações de
              forma eficaz fazendo com que sua gestão se torne mais simples e
              assertiva.
            </p>
            <div>
              <span>Suporte</span>
              <span>Desempenho</span>
              <span>Gestão</span>
            </div>
          </li>
          <li>
            <Brain />
            <h3>Business intelligence</h3>
            <p>
              BI é a tecnologia que coleta, integra, analisa e apresenta os
              dados de seu negócio de forma significativa. Uma maneira de
              identificar tendências de mercado e otimizar os seus processos
              operacionais.
            </p>
            <div>
              <span>Análise</span>
              <span>Relatório</span>
              <span>Dashboard</span>
            </div>
          </li>
          <li>
            <Email />
            <h3>Plataforma de Email</h3>
            <p>
              Uma nova maneira de gerenciar seu email. Desde segurança avançada
              até uma interface intuitiva e ferramentas poderosas de
              colaboração. Descubra como melhorar sua experiência de email.
            </p>
            <div>
              <span>Simples</span>
              <span>Organizada</span>
              <span>Segura</span>
            </div>
          </li>
        </ul>
      </div>
    </SolutionsContainer>
  );
}

export default Solutions;
