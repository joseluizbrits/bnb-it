import type { Metadata } from "next";
import { poppins } from "@/lib/fonts";

import StylesProvider from "@/styles/StylesProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LanguageSwitchProvider from "@/contexts/LanguageSwitch";

export const metadata: Metadata = {
  title: "BNB IT",
  description:
    "Consultoria de precisão para alavancar o sucesso da sua empresa",
  keywords: [],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/pt-BR",
    },
  },
  metadataBase: new URL("https://bnbit.com.br"),
  openGraph: {
    title: "BNB IT",
    description:
      "Consultoria de precisão para alavancar o sucesso da sua empresa",
    type: "website",
    url: "https://bnbit.com.br",
    siteName: "BNB IT",
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
