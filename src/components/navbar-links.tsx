import { AnchorHTMLAttributes, ReactNode } from "react";

interface NavbarLinksProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  link: string | undefined;
}

export function NavbarLinks({ children, link, ...rest }: NavbarLinksProps) {
  return (
    <a className="text-white/80 font-medium text-xs hover:text-white transition-all" href={link} {...rest}>
      {children}
    </a>
  );
}
