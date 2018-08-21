import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { unregister } from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ));
    }}
  </Query>
);

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My 2nd Apollo app 🚀</h2>
      <ExchangeRates />
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
unregister();