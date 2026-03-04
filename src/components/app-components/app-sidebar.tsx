import * as React from "react";
import { AudioWaveform, Command, GalleryVerticalEnd } from "lucide-react";

import { NavProjects } from "@/components/nav-projects";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { navMain, selfServiceLinks } from "@/constants";
import NavMain from "../nav-main";
import NavUser from "../nav-user";

const data = {
  user: {
    name: "Benson Yeboah",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Main Branch",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Legon Campus",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Accra Central",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain,
  projects: selfServiceLinks,
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
