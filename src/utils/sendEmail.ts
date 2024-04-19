import { Dispatch, SetStateAction } from "react";
import emailjs from "@emailjs/browser";

interface IFormField {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (event: { target: HTMLInputElement | HTMLTextAreaElement }) => void;
  error: string | null;
  validate: () => boolean;
  onBlur: () => boolean;
}

interface ISendEmail {
  name: IFormField;
  email: IFormField;
  message: IFormField;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSuccess: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<boolean>>;
}

export const sendEmail = ({
  name,
  email,
  message,
  setLoading,
  setSuccess,
  setError,
}: ISendEmail) => {
  setLoading(true);

  if (email.validate() && message.validate()) {
    const templateParams = {
      from_name: name.value,
      email: email.value,
      message: message.value,
    };

    emailjs
      .send(
        "service_edhbp53",
        "template_vqs0wt5",
        templateParams,
        "GyPC8U2FdaUvuAdOW"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          name.setValue("");
          email.setValue("");
          message.setValue("");
        },
        (err: Error) => {
          console.error("Erro ao enviar o menssagem: " + err);
          setError(true);
          setLoading(false);
          name.setValue("");
          email.setValue("");
          message.setValue("");
        }
      );
  } else {
    setLoading(false);
  }
};
