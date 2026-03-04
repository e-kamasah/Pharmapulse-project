import useAuthStore from "@/zustand/auth-store";
import { Navigate, Outlet } from "react-router-dom";

export const RequireAuth = () => {
  const user = useAuthStore((state) => state.user)?.user;
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
