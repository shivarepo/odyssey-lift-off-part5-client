import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from "./App";

const client = new ApolloClient({
  //uri: "https://server-catstronauts.herokuapp.com/", // change to YOUR own production server
  uri: "https://odyssey-lift-off-part5-server-production-91e7.up.railway.app",
  cache: new InMemoryCache(),
  name: "web",
  version: "1.0",
});

Sentry.init({
  dsn: "https://c7a6725aad5a41678e9513a8f57bd9b3@o4504533557903360.ingest.sentry.io/4504533570420736",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
