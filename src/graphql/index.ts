import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import useAuthStore from "@/zustand/auth-store";

const httpLink = new HttpLink({ uri: "http://localhost:8080" });

const authLink = new ApolloLink((operation, forward) => {
  const token = useAuthStore.getState().user?.auth_token;
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  }));
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
