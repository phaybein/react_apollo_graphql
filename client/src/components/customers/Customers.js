import React, { Component } from 'react';
import './customers.scss';

export class Customers extends Component {
  state = {
    customers: []
  };

  componentDidMount = () => {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers =>
        this.setState({ customers }, () =>
          console.log('Customers fetched...', customers)
        )
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer.id}>{customer.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
