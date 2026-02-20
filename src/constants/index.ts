import {
  BadgeCentIcon,
  BotIcon,
  ChartLine,
  LayoutDashboardIcon,
  PillIcon,
  Users2Icon,
} from "lucide-react";

export const navMain = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboardIcon,
    isActive: true,
  },
  {
    title: "Inventory Management",
    url: "#",
    icon: PillIcon,
    isActive: false,
    items: [
      {
        title: "Products / Drugs",
        url: "#",
      },
      {
        title: "Suppliers",
        url: "#",
      },
    ],
  },
  {
    title: "User Management",
    url: "#",
    icon: Users2Icon,
    isActive: false,
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
    isActive: false,
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
    name: "Analytics",
    url: "#",
    icon: ChartLine,
  },
  {
    name: "AI Assistant",
    url: "#",
    icon: BotIcon,
  },
];
