import { ReactNode } from "react";
import { OutlinedStyle } from "./styles";

type ButtonOutlinedProps = {
  children: ReactNode;
  href: string;
};

function ButtonOutlined({ children, href }: ButtonOutlinedProps) {
  return <OutlinedStyle href={href}>{children}</OutlinedStyle>;
}

export default ButtonOutlined;
