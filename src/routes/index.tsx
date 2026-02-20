import AppLayout from "@/layout";
import Dashboard from "@/pages/dashboard";
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
      //   {
      //     path: "signup",
      //     element: <MultiStepForm />,
      //   },
    ],
  },
]);
