import React, { Component } from 'react';
import './sass/App.scss';
import Customers from './components/customers/Customers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Customers />
      </div>
    );
  }
}

export default App;
