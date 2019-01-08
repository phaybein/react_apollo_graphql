const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema
} = require('graphql');

const Axios = require('axios');

// HARDCODED DATA
const customers = [
  { id: '1', name: 'John Doe', email: 'jdoe@test.com', age: 35 },
  { id: '2', name: 'Steve Smith', email: 'ssmith@test.com', age: 25 },
  { id: '3', name: 'Erika Cruz', email: 'ecruz@test.com', age: 31 }
];

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
  name: 'TootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        for (let i = 0; i < customers.length; i++) {
          if (customers[i].id === args.id) {
            return customers[i];
          }
        }
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
