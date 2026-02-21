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
  },
  {
    title: "Inventory Management",
    icon: PillIcon,
    items: [
      {
        title: "Products / Drugs",
        url: "/inventory/drugs",
      },
      {
        title: "Suppliers",
        url: "/inventory/suppliers",
      },
    ],
  },
  {
    title: "User Management",
    url: "/user-management",
    icon: Users2Icon,
    items: [
      {
        title: "Genesis",
        url: "/user-management/genesis",
      },
      {
        title: "Explorer",
        url: "/user-management/explorer",
      },
      {
        title: "Quantum",
        url: "/user-management/quantum",
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
