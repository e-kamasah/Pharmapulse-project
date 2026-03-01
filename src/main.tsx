import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import { ApolloProvider } from "@apollo/client/react";
import client from "./graphql/index.ts";

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />,
  </ApolloProvider>,
);
