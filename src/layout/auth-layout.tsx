import { GalleryVerticalEnd } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import pharm from "../assets/images/pharm.jpg";
import AppToaster from "@/components/app-components/app-toaster";

const AuthLayout = () => {
  return (
    <>
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-6 md:p-10 bg-gray-50">
          <div className="flex justify-center gap-2 md:justify-start">
            <NavLink to="/" className="flex items-center gap-2 font-medium">
              <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <p className="text-lg font-semibold">Pharma Pulse.</p>
            </NavLink>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-md rounded-lg border bg-card px-6 py-12 shadow-xs">
              <Outlet />
            </div>
          </div>

          <div>
            <p className="text-center text-md text-muted-foreground">
              Powered By{" "}
              <span className="font-semibold text-primary">Software Inc.</span>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
        <div className="bg-muted relative hidden lg:block">
          <img
            src={pharm}
            alt="Image"
            className="absolute inset-0 h-full w-full object-fill dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
      <AppToaster />
    </>
  );
};

export default AuthLayout;
