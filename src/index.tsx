import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import GraphqlClient from "./graphql-client";

import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { ApolloProvider } from "@apollo/client";
// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log(error, query, "global error response......");
    },
    onSuccess: (data) => {
      console.log(data, "global success response.........");
    },
  }),
});
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={GraphqlClient}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
