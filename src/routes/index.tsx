import React, { Suspense } from "react";
import AppLayout from "@/layout/app-layout";
import AuthLayout from "@/layout/auth-layout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "@/pages/error-page";
import NotFound from "@/pages/not-found";
import { RequireAuth } from "./RequireAuth";

const Dashboard = React.lazy(() => import("@/pages/dashboard"));
const DrugsPage = React.lazy(() => import("@/pages/drugs"));
const CreateDrug = React.lazy(() => import("@/pages/create-drug"));
const SuppliersPage = React.lazy(() => import("@/pages/suppliers"));
const SignIn = React.lazy(() => import("@/pages/signIn"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SignIn />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <RequireAuth />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            ),
          },
          {
            path: "inventory/drugs",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <DrugsPage />
              </Suspense>
            ),
          },
          {
            path: "inventory/drugs/create",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <CreateDrug />
              </Suspense>
            ),
          },
          {
            path: "inventory/suppliers",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <SuppliersPage />
              </Suspense>
            ),
          },
          {
            path: "",
            element: <Navigate to="/app" />,
          },
        ],
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
