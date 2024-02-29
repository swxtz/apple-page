import { AnchorHTMLAttributes, ReactNode } from "react";

interface NavbarLinksProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  link: string | undefined;
}

export function NavbarLinks({ children, link, ...rest }: NavbarLinksProps) {
  return (
    <a className="text-white" href={link} {...rest}>
      {children}
    </a>
  );
}
