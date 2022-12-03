import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clb8bk05c16g201rp1ab13cm6/master',
  cache: new InMemoryCache(),
});