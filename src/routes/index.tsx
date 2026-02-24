import AppLayout from "@/layout/app-layout";
import AuthLayout from "@/layout/auth-layout";
import Dashboard from "@/pages/dashboard";
import DrugsPage from "@/pages/drugs";
import SuppliersPage from "@/pages/suppliers";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "inventory/drugs",
        element: <DrugsPage />,
      },
      {
        path: "inventory/suppliers",
        element: <SuppliersPage />,
      },
    ],
  },
]);
