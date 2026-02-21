import AppLayout from "@/layout";
import Dashboard from "@/pages/dashboard";
import DrugsPage from "@/pages/drugs";
import SuppliersPage from "@/pages/suppliers";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
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
