import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: 'https://apollo-fullstack-tutorial.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

export default client;
