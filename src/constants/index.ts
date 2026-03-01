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
        title: "Purchases",
        url: "/app/inventory/purchases",
      },
      {
        title: "Products / Drugs",
        url: "/app/inventory/drugs",
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
        title: "Pharmacists",
        url: "/app/user-management/pharmacists",
      },
      {
        title: "Admins",
        url: "/app/user-management/admins",
      },
      {
        title: "Sales Reps",
        url: "/app/user-management/sales-reps",
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
