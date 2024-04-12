import React from "react";
import useLanguageSwitch from "./useLanguageSwitch";

type TypesProps = {
  email: {
    regex: RegExp;
    message: {
      pt: string;
      en: string;
    };
  };
};

const types: TypesProps = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: {
      pt: "Email inválido",
      en: "Invalid email",
    },
  },
};

function useForm(type: "" | "email" | false) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  const { language } = useLanguageSwitch();
  const fieldRequired =
    language === "pt" ? "Este campo é obrigatório" : "This field is required";

  function validate(value: string) {
    if (type === false) return true;

    if (value.length === 0) {
      setError(fieldRequired);

      return false;
    } else if (type !== "" && types[type] && !types[type].regex.test(value)) {
      setError(types[type].message[language]);

      return false;
    } else {
      setError(null);

      return true;
    }
  }

  function onChange(event: { target: HTMLInputElement | HTMLTextAreaElement }) {
    if (error) validate(event.target.value.trim());
    setValue(event.target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}

export default useForm;
