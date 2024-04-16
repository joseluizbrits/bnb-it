import type { Metadata } from "next";
import { poppins } from "@/lib/fonts";

import StylesProvider from "@/styles/StylesProvider";
import LanguageSwitchProvider from "@/contexts/LanguageSwitch";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BNB TI | Consultoria em Banco de Dados e Business Intelligence",
  description:
    "Melhore seus processos de negócios por meio de dados e análises técnicas. Descubra soluções de banco de dados e business intelligence (BI) que impulsionam seu crescimento e competitividade no mercado.",
  keywords: [],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/pt-BR",
    },
  },
  metadataBase: new URL("https://bnbit.netlify.app/"),
  openGraph: {
    title: "BNB TI | Consultoria em Banco de Dados e Business Intelligence",
    description:
      "Melhore seus processos de negócios por meio de dados e análises técnicas. Descubra soluções de banco de dados e business intelligence (BI) que impulsionam seu crescimento e competitividade no mercado.",
    type: "website",
    url: "https://bnbit.com.br",
    siteName: "BNB TI",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <StylesProvider>
          <LanguageSwitchProvider>
            <Header />
            {children}
            <Footer />
          </LanguageSwitchProvider>
        </StylesProvider>
      </body>
    </html>
  );
}
