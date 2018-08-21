import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { unregister } from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import { DogPhoto, Dogs } from './components';

const client = new ApolloClient({
//   uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
    uri: 'https://nx9zvp49q7.lp.gql.zone/graphql'
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDog: null,
        }
    }

    onDogSelected = ({ target }) => {
        this.setState({
            selectedDog: target.value,
        })
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <div>
                    <h2>My 2nd Apollo app 🚀</h2>
                    {
                        this.state.selectedDog &&
                        <DogPhoto breed={this.state.selectedDog}/>
                    }
                    <Dogs onDogSelected={this.onDogSelected}/>
                </div>
            </ApolloProvider>
        )
    }
}
  


render(<App />, document.getElementById("root"));
unregister();