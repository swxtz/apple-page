import { ReactNode } from "react";
import appleLogo from "../assets/apple-logo.svg";
import { NavbarLinks } from "./navbar-links";
import { v4 as uuid } from "uuid";
import { BagIcon, SearchIcon } from "./icons";
import { NavbarButton } from "./navbar-button";

interface Links {
  name: string;
  link: string;
}

interface Buttons {
  icon: ReactNode;
  type: "button" | "submit" | "reset";
}

const pages: Links[] = [
  { name: "Store", link: "/store" },
  { name: "Mac", link: "/mac" },
  { name: "iPad", link: "/ipad" },
  { name: "iPhone", link: "/iphone" },
  { name: "Watch", link: "/watch" },
  { name: "AirPods", link: "/airpods" },
  { name: "TV & Home", link: "/tv" },
  { name: "Entertainment", link: "/entertainment" },
  { name: "Accessories", link: "/accessories" },
  { name: "Support", link: "/support" },
];

const buttons: Buttons[] = [
  {
    icon: (
      <SearchIcon className="w-11 h-11 md:w-3 md:h-3 hover:brightness-75" />
    ),
    type: "button",
  },
  {
    icon: <BagIcon className="w-11 h-11 md:w-3 md:h-3 hover:brightness-75" />,
    type: "button",
  },
];

export function Navbar() {
  return (
    <nav className="backdrop-blur-sm fixed top-0 z-20 w-full bg-black/80 py-3 px-10 flex flex-row items-center justify-between md:justify-center">
      <a href="/">
        <img
          src={appleLogo}
          className="h-12 w-12 fill-current md:w-3 md:h-4 mr-8"
          alt="logo"
        />
      </a>

      <div className="hidden md:flex flex-row gap-8">
        {pages.map((link) => (
          <NavbarLinks key={uuid()} link={link.link}>
            {link.name}
          </NavbarLinks>
        ))}
      </div>

      <div className="flex flex-row gap-8 ml-8">
        {buttons.map((button) => (
          <NavbarButton
            key={uuid()}
            className="flex flex-row gap-8"
            type={button.type}
          >
            {button.icon}
          </NavbarButton>
        ))}
      </div>
    </nav>
  );
}
