const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema
} = require('graphql');

const axios = require('axios');

/*
// HARDCODED DATA
const customers = [
  { id: '1', name: 'John Doe', email: 'jdoe@test.com', age: 35 },
  { id: '2', name: 'Steve Smith', email: 'ssmith@test.com', age: 25 },
  { id: '3', name: 'Erika Cruz', email: 'ecruz@test.com', age: 31 }
];
*/

// CUSTOMER TYPE
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

// ROOT QUERY
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        /* FOR HARD CODED DATA
        for (let i = 0; i < customers.length; i++) {
          if (customers[i].id === args.id) {
            return customers[i];
          }
        }
        */

        return axios
          .get(`http://localhost:3000/customers/${args.id}`)
          .then(res => res.data);
      }
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve(parentValue, args) {
        return customers;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
