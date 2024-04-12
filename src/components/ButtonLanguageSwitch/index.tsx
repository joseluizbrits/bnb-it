import { SwitchContainer } from "./styles";
import useLanguageSwitch from "@/hooks/useLanguageSwitch";

function ButtonLanguageSwitch() {
  const { activeLanguage, setActiveLanguage } = useLanguageSwitch();

  function handleActiveLanguage(e: React.MouseEvent) {
    const language = e.currentTarget.id;

    if (language === "pt") setActiveLanguage("pt");
    if (language === "en") setActiveLanguage("en");
  }

  return (
    <SwitchContainer>
      <button
        id="pt"
        className={activeLanguage === "pt" ? "active" : ""}
        onClick={(e) => handleActiveLanguage(e)}
      >
        PT
      </button>
      <button
        id="en"
        className={activeLanguage === "en" ? "active" : ""}
        onClick={(e) => handleActiveLanguage(e)}
      >
        EN
      </button>
    </SwitchContainer>
  );
}

export default ButtonLanguageSwitch;
