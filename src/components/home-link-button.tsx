import { AnchorHTMLAttributes, ReactNode } from "react";

interface HomeLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  icon: ReactNode;
  link: string;
}

export function HomeLinkButton({
  children,
  link,
  icon,
  ...rest
}: HomeLinkProps) {
  return (
    <a href={link} {...rest} className="text-blue-700 flex flex-row items-center font-medium text-xl hover:text-blue-800 transition-colors">
      <span>{children}</span>
      <span>{icon}</span>
    </a>
  );
}
