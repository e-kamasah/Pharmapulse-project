import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useUrlBoolean } from "@/hooks/use-url-state";
import AppModal from "./app-components/app-modal";
import { Button } from "./ui/button";
import NewBranchForm from "./app-components/new-branch-form";

const TeamSwitcher = ({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) => {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);
  const [showModal, setShowModal, clearShowModal] = useUrlBoolean("show-modal");

  if (!activeTeam) {
    return null;
  }

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="bg-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <activeTeam.logo className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    Pill Point Pharmacy
                  </span>
                  <span className="truncate text-xs">{activeTeam?.name}</span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              align="start"
              side={isMobile ? "bottom" : "right"}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-muted-foreground text-xs">
                Branches
              </DropdownMenuLabel>
              {teams.map((team, index) => (
                <DropdownMenuItem
                  key={team.name}
                  onClick={() => setActiveTeam(team)}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-md border">
                    <team.logo className="size-3.5 shrink-0" />
                  </div>
                  {team.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => setShowModal((v) => !v)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                  <Plus className="size-4" />
                </div>
                <div className="text-muted-foreground font-medium">
                  New Branch
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      <AppModal
        open={showModal}
        onClose={() => clearShowModal()}
        title="Create New Branch"
        description="This is to create a new branch under your pharmacy."
        footer={
          <>
            <Button variant="outline" onClick={() => clearShowModal()}>
              Cancel
            </Button>
            <Button type="submit" form="new-branch-form">
              Create
            </Button>
          </>
        }
      >
        <NewBranchForm />
      </AppModal>
    </>
  );
};

export { TeamSwitcher };
