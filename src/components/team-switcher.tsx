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
import useAuthStore from "@/zustand/auth-store";
import useGetBranches from "@/hooks/use-get-branches";
import type { Branch, Maybe } from "@/gql/graphql";
import { getInitials } from "@/lib/utils";
import Skeleton from "./app-components/app-skeleton";
import useAppStore from "@/zustand/app-store";

const TeamSwitcher = () => {
  const { isMobile } = useSidebar();
  const [showModal, setShowModal, clearShowModal] = useUrlBoolean("show-modal");
  const user = useAuthStore((state) => state.user)?.user;
  const setActiveBranch = useAppStore((state) => state.setActiveBranch);
  const activeBranch = useAppStore((state) => state.activeBranch);

  const { branches: allBranches, loading } = useGetBranches({
    filter: {
      pharmacy: user?.pharmacy?._id,
    },
  });

  const branches = allBranches.filter(
    (branch) => branch?._id !== activeBranch?._id,
  );

  if (!activeBranch) {
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
                  <span className="text-white text-sm font-semibold p-2">
                    {getInitials(activeBranch?.name || "")}
                  </span>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {user?.pharmacy?.name}
                  </span>
                  <span className="truncate text-xs">{activeBranch?.name}</span>
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
              {loading ? (
                <div className="space-y-2 p-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Skeleton width="w-6" height="h-6" variant="circle" />
                      <Skeleton width="w-32" height="h-4" />
                    </div>
                  ))}
                </div>
              ) : branches?.length ? (
                branches.map((branch: Maybe<Branch>, index) => (
                  <DropdownMenuItem
                    onClick={() => setActiveBranch(branch)}
                    key={branch?._id}
                    className="gap-2 p-2"
                  >
                    <div className="flex size-6 items-center justify-center rounded-md border">
                      <span className="text-muted-foreground text-xs p-2">
                        {getInitials(branch?.name || "")}
                      </span>
                    </div>
                    {branch?.name}
                    <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                ))
              ) : (
                <div className="p-2 text-xs text-muted-foreground">
                  No branches found
                </div>
              )}
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
