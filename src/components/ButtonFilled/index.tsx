import { ReactNode } from "react";
import { FilledStyle } from "./styles";

type ButtonFilledProps = {
  children: ReactNode;
  href: string;
};

function ButtonFilled({ children, href }: ButtonFilledProps) {
  return <FilledStyle href={href}>{children}</FilledStyle>;
}

export default ButtonFilled;
