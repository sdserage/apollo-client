import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { unregister } from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import Dogs from './components/Dogs';

const client = new ApolloClient({
//   uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
    uri: 'https://nx9zvp49q7.lp.gql.zone/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My 2nd Apollo app 🚀</h2>
      <Dogs />
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
unregister();