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
    url: "/app",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Inventory Management",
    icon: PillIcon,
    items: [
      {
        title: "Products / Drugs",
        url: "/app/inventory/drugs",
      },
      {
        title: "Purchases",
        url: "/app/inventory/purchases",
      },
      {
        title: "Suppliers",
        url: "/app/inventory/suppliers",
      },
    ],
  },
  {
    title: "User Management",
    url: "/app/user-management",
    icon: Users2Icon,
    items: [
      {
        title: "Genesis",
        url: "/app/user-management/genesis",
      },
      {
        title: "Explorer",
        url: "/app/user-management/explorer",
      },
      {
        title: "Quantum",
        url: "/app/user-management/quantum",
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
