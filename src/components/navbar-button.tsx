import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type: "button" | "submit" | "reset";
}

export function NavbarButton({ children, type, ...rest }: ButtonsProps) {
  return (
    <button className="flex flex-row gap-8 transition-all" type={type} {...rest}>
      {children}
    </button>
  );
}