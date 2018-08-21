import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { unregister } from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import { AddTodo, ToDos } from './components';

const client = new ApolloClient({
    // uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
    // uri: 'https://nx9zvp49q7.lp.gql.zone/graphql'
    uri: 'https://8v9r9kpn7q.lp.gql.zone/graphql'
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <div>
                    <h2>Apollo Mutations 🚀</h2>
                    <AddTodo />
                    <ToDos />
                </div>
            </ApolloProvider>
        )
    }
}
  


render(<App />, document.getElementById("root"));
unregister();