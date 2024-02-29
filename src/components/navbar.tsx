import appleLogo from "../assets/apple-logo.svg";
import { NavbarLinks } from "./navbar-links";

interface Links {
  name: string;
  link: string;
}

const links: Links[] = [
  { name: "Mac", link: "/mac" },
  { name: "iPad", link: "/ipad" },
  { name: "iPhone", link: "/iphone" },
  { name: "Watch", link: "/watch" },
  { name: "TV", link: "/tv" },
  { name: "Music", link: "/music" },
  { name: "Support", link: "/support" },
];

export function Navbar() {
  return (
    <nav className="bg-black py-3 px-10">
      <img src={appleLogo} className="w-3 h-4" />
      
      

      {links.map((link, index) => (
        <NavbarLinks key={index} link={link.link}>
          {link.name}
        </NavbarLinks>
      ))}
    </nav>
  );
}
