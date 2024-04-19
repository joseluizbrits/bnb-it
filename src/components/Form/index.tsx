import { useEffect, useState } from "react";
import { poppins } from "@/lib/fonts";

import { FormContainer, Loading } from "./styles";
import FormField from "../FormField";
import useForm from "@/hooks/useForm";
import { sendEmail } from "@/utils/sendEmail";

import useLanguageSwitch from "@/hooks/useLanguageSwitch";
import {
  title,
  nameField,
  emailField,
  messageField,
  successMessage,
  failedMessage,
  button,
} from "./text";

function Form() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const name = useForm(false);
  const email = useForm("email");
  const message = useForm("");

  const { language } = useLanguageSwitch();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    sendEmail({
      name,
      email,
      message,
      setLoading,
      setSuccess,
      setError,
    });
  }

  useEffect(() => {
    if (name.error || email.error || message.error) setSuccess(false);

    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 10000);
    }

    if (error) {
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }, [success, error, name.error, email.error, message.error]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <span>{title[language]}</span>
      <div className="fields">
        <FormField
          label={nameField[language]}
          type="text"
          name="name"
          {...name}
        />
        <FormField
          label={emailField[language]}
          type="email"
          name="email"
          {...email}
        />
        <FormField
          label={messageField[language]}
          type="textarea"
          name="message"
          {...message}
        />

        {!success ? (
          <button aria-label={button[language]} disabled={loading}>
            {loading ? (
              <Loading />
            ) : (
              <span className={poppins.className}>{button[language]}</span>
            )}
          </button>
        ) : (
          <span className="success">{successMessage[language]}</span>
        )}
        {error && <span className="failed">{failedMessage[language]}</span>}
      </div>
    </FormContainer>
  );
}

export default Form;
