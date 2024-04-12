"use client";

import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface LanguageSwitchProps {
  language: "pt" | "en";
  setLanguage: Dispatch<SetStateAction<"pt" | "en">>;
}

export const LanguageSwitch = createContext({} as LanguageSwitchProps);

export default function LanguageSwitchProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  return (
    <LanguageSwitch.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageSwitch.Provider>
  );
}
