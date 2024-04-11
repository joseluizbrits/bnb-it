import { ReactNode } from "react";
import { OutlinedStyle } from "./styles";

type ButtonFilledProps = {
  children: ReactNode;
  href: string;
};

function ButtonFilled({ children, href }: ButtonFilledProps) {
  return <OutlinedStyle href={href}>{children}</OutlinedStyle>;
}

export default ButtonFilled;
