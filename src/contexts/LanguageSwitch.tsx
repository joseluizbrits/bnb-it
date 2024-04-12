"use client";

import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface LanguageSwitchProps {
  activeLanguage: "pt" | "en";
  setActiveLanguage: Dispatch<SetStateAction<"pt" | "en">>;
}

export const LanguageSwitch = createContext({} as LanguageSwitchProps);

export default function LanguageSwitchProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeLanguage, setActiveLanguage] = useState<"pt" | "en">("pt");

  return (
    <LanguageSwitch.Provider
      value={{
        activeLanguage,
        setActiveLanguage,
      }}
    >
      {children}
    </LanguageSwitch.Provider>
  );
}
