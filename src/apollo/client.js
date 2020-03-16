import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-fetch";

const link = new HttpLink({
  uri: process.env.GATSBY_SERVER_URL,
  fetch
});

// Initialize apollo client
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

export { client };
