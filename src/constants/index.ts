import { BadgeCentIcon, BotIcon, PillIcon, UsersIcon } from "lucide-react";

export const navMain = [
  {
    title: "Inventory Management",
    url: "#",
    icon: PillIcon,
    isActive: true,
    items: [
      {
        title: "History",
        url: "#",
      },
      {
        title: "Starred",
        url: "#",
      },
      {
        title: "Settings",
        url: "#",
      },
    ],
  },
  {
    title: "User Management",
    url: "#",
    icon: UsersIcon,
    items: [
      {
        title: "Genesis",
        url: "#",
      },
      {
        title: "Explorer",
        url: "#",
      },
      {
        title: "Quantum",
        url: "#",
      },
    ],
  },
  {
    title: "Sales",
    url: "#",
    icon: BadgeCentIcon,
    items: [
      {
        title: "Introduction",
        url: "#",
      },
      {
        title: "Get Started",
        url: "#",
      },
      {
        title: "Tutorials",
        url: "#",
      },
      {
        title: "Changelog",
        url: "#",
      },
    ],
  },
];

export const selfServiceLinks = [
  {
    name: "AI Assistant",
    url: "#",
    icon: BotIcon,
  },
];
