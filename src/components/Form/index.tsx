import { useEffect, useState } from "react";
import { FormContainer, Loading } from "./styles";
import { poppins } from "@/lib/fonts";
import FormField from "../FormField";
import useForm from "@/hooks/useForm";
import { sendEmail } from "@/utils/sendEmail";

function Form() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const name = useForm(false);
  const email = useForm("email");
  const message = useForm("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    return;

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
      <span>Nos mande uma mensagem:</span>
      <div className="fields">
        <FormField label="Nome" type="text" name="name" {...name} />
        <FormField label="Email" type="email" name="email" {...email} />
        <FormField
          label="Menssagem"
          type="textarea"
          name="message"
          {...message}
        />

        {!success ? (
          <button aria-label="enviar" disabled={loading}>
            {loading ? (
              <Loading />
            ) : (
              <span className={poppins.className}>Enviar</span>
            )}
          </button>
        ) : (
          <span className="success">Mensagem enviada</span>
        )}
        {error && (
          <span className="failed">Ocorreu um erro ao enviar a mensagem</span>
        )}
      </div>
    </FormContainer>
  );
}

export default Form;
