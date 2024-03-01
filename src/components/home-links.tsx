import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { HomeLinkButton } from "./home-link-button";
import { createId } from "@paralleldrive/cuid2";

interface HomeLink {
  title: string;
  icon: ReactNode;
  link: string;
}

const homeLinks: HomeLink[] = [
  {
    title: "Learn more",
    icon: <ChevronRight className="text-blue-700 hover:text-blue-800 transition-all" />,
    link: "vision-pro/",
  },
  {
    title: "Buy",
    icon: <ChevronRight className="text-blue-700 hover:text-blue-800 transition-all" />,
    link: "https://www.apple.com/us/shop/goto/buy_vision/apple_vision_pro",
  },
];

export function HomeLinks() {
  return (
    <div className="flex flex-row mx-auto">
      {homeLinks.map((link) => (
        <HomeLinkButton key={createId()} icon={link.icon} link={link.link}>{link.title}</HomeLinkButton>
      ))}
    </div>
  );
}