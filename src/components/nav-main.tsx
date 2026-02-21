import { ChevronRight, type LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";

const NavMain = ({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) => {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => {
          const hasChildren = (item.items?.length ?? 0) > 0;

          // Safe matching (avoids partial false matches)
          const isParentActive = item.items?.some(
            (subItem) =>
              location.pathname === subItem.url ||
              location.pathname.startsWith(`${subItem.url}/`),
          );

          // --------------------------
          // SIMPLE LINK (NO CHILDREN)
          // --------------------------
          if (!hasChildren) {
            return (
              <SidebarMenuItem key={item.title}>
                <NavLink to={item.url}>
                  {({ isActive }) => (
                    <SidebarMenuButton
                      tooltip={item.title}
                      className={`w-full transition-colors ${
                        isActive
                          ? "bg-primary text-white"
                          : "hover:bg-primary hover:text-white"
                      }`}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>
            );
          }

          // --------------------------
          // COLLAPSIBLE (HAS CHILDREN)
          // --------------------------
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isParentActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={`w-full transition-colors ${
                      isParentActive
                        ? "bg-primary text-white"
                        : "hover:bg-primary hover:text-white"
                    }`}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>

                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <NavLink to={subItem.url}>
                          {({ isActive }) => (
                            <SidebarMenuSubButton
                              className={`w-full transition-colors ${
                                isActive
                                  ? "bg-primary text-white"
                                  : "hover:bg-primary hover:text-white"
                              }`}
                            >
                              <span>{subItem.title}</span>
                            </SidebarMenuSubButton>
                          )}
                        </NavLink>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
