const express = require('express');
const axios = require('axios');
const graphqlHTTP = require('express-graphql');

// INITIALIZE EXPRESS
const app = express();

// GRAB DATA
let customers = [];
axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then(res => (customers = res.data))
  .catch(error => console.log(error));

// ROUTES
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// PORT
const PORT = process.env.PORT || 5000;

// LISTEN FOR SERVER
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
