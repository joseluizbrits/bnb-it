import { SwitchContainer } from "./styles";
import useLanguageSwitch from "@/hooks/useLanguageSwitch";

function ButtonLanguageSwitch() {
  const { language, setLanguage } = useLanguageSwitch();

  function handleLanguage(e: React.MouseEvent) {
    const language = e.currentTarget.id;

    if (language === "pt") setLanguage("pt");
    if (language === "en") setLanguage("en");
  }

  return (
    <SwitchContainer>
      <button
        id="pt"
        className={language === "pt" ? "active" : ""}
        onClick={(e) => handleLanguage(e)}
      >
        PT
      </button>
      <button
        id="en"
        className={language === "en" ? "active" : ""}
        onClick={(e) => handleLanguage(e)}
      >
        EN
      </button>
    </SwitchContainer>
  );
}

export default ButtonLanguageSwitch;
