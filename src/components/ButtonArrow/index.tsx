import { ReactNode } from "react";
import { ArrowStyle } from "./styles";
import Arrow from "@/icons/Arrow";

type ButtonArrowProps = {
  children: ReactNode;
  href: string;
};

function ButtonArrow({ children, href }: ButtonArrowProps) {
  return (
    <ArrowStyle href={href}>
      {children}
      <Arrow />
    </ArrowStyle>
  );
}

export default ButtonArrow;
