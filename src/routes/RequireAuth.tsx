import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthContext = React.createContext({ isAuthenticated: true });

export const RequireAuth = () => {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
