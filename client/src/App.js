import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './sass/App.scss';
import Customers from './components/customers/Customers';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>App</h1>
          <Customers />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
