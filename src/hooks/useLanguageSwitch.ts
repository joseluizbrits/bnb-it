import { useContext } from "react";
import { LanguageSwitch } from "@/contexts/LanguageSwitch";

const useLanguageSwitch = () => useContext(LanguageSwitch);

export default useLanguageSwitch;
