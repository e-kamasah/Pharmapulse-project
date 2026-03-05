import { AppSidebar } from "@/components/app-components/app-sidebar";
import AppToaster from "@/components/app-components/app-toaster";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <SidebarProvider className="p-2">
        <AppSidebar />
        <SidebarInset>
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
      <AppToaster />
    </>
  );
};

export default AppLayout;
