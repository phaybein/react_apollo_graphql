import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import './customers.scss';
import CustomerItem from '../customerItem/CustomerItem';

const YOUR_SEARCH_QUERY = gql`
  query Customers {
    customers {
      id
      name
      email
      age
    }
  }
`;

export class Customers extends Component {
  render() {
    return (
      <Fragment>
        <h2>Customers</h2>
        <Query query={YOUR_SEARCH_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return (
              <Fragment>
                {data.customers.map(customer => (
                  <CustomerItem key={customer.id} customer={customer} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Customers;
